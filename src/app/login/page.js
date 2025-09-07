
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { IoLogoTwitch } from "react-icons/io5";
import { apiService } from "../../../services/api";
import { authUtils } from "../../../utils/auth";
import { useGlobalContext } from "../../../contexts/GlobalProvider";
import { useRouter } from "next/navigation";
import { toastUtils } from "../../../utils/toast";

const Login = () => {
  const router = useRouter();
  const { setIsLoadingState, setGlobalUserData, setIsUserLogin } = useGlobalContext();

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: value
    }));
    // Hata mesajını temizle
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!loginData.email) {
      newErrors.email = "Email adresi gerekli";
    } else if (!/\S+@\S+\.\S+/.test(loginData.email)) {
      newErrors.email = "Geçerli bir email adresi girin";
    }

    if (!loginData.password) {
      newErrors.password = "Şifre gerekli";
    } else if (loginData.password.length < 6) {
      newErrors.password = "Şifre en az 6 karakter olmalı";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setIsLoadingState(true);

    try {
      console.log("Login isteği gönderiliyor:", loginData);
      const response = await apiService.login(loginData);
      console.log("Login response:", response.data);
      
      if (response.data.success) {
        console.log("Giriş başarılı:", response.data);
        toastUtils.apiSuccess(response.data.message || "Giriş işlemi başarıyla tamamlandı!");
        
        // API token'ı kullan
        if (response.data.api_token) {
          console.log('Login Token:', {
            token: response.data.api_token,
            tokenLength: response.data.api_token.length
          });
          
          authUtils.setToken(response.data.api_token);
        }
        
        // Kullanıcı verilerini ayarla
        if (response.data.data) {
          authUtils.setUserData(response.data.data);
          setGlobalUserData(response.data.data);
        }
        
        setIsUserLogin(true);
        router.push("/");
      } else {
        toastUtils.apiError(response.data.message || "Giriş işlemi başarısız");
      }
    } catch (error) {
      console.error("Giriş hatası detayı:", error);
      
      const errorMessage = error.response?.data?.message || error.message;
      toastUtils.apiError(error, `Giriş hatası: ${errorMessage}`);
      
      // API'den gelen validation errors
      if (error.response?.data?.errors) {
        const apiErrors = {};
        Object.keys(error.response.data.errors).forEach(key => {
          apiErrors[key] = error.response.data.errors[key][0];
        });
        setErrors(apiErrors);
      }
    } finally {
      setIsSubmitting(false);
      setIsLoadingState(false);
    }
  };

  return (
    <div
      id="login"
      style={{ color: "var(--foreground)" }}
      className="container m-auto flex flex-col md:flex-row text-white my-6"
    >
      {/* Sağ Kutu (Giriş Formu) - Mobilde üstte */}
      <div className="w-full md:w-3/7 flex items-center justify-center p-8 order-1 md:order-2">
        <div className="w-full">
          <div className="flex justify-between mb-1 md:mb-8">
            <div>
              <h2 className="text-2xl mb-1">Merhaba</h2>
              <h1 className="text-5xl font-bold mb-6">Giriş Yap</h1>
            </div>
            <div className="text-sm mt-4 flex flex-wrap flex-col justify-start items-end">
              Yeni Misin?{" "}
              <span className="text-blue-400 hover:underline cursor-pointer">
                <Link href="/register">Kayıt Ol</Link>
              </span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="mb-6 md:mb-12">
              <label className="block text-lg mb-3">
                Kullanıcı adınızı veya e-posta adresinizi giriniz
              </label>
              <input
                type="text"
                name="email"
                value={loginData.email}
                onChange={handleInputChange}
                placeholder="Kullanıcı adı ya da Eposta adresi"
                className={`w-full px-4 py-6 rounded-lg border-none focus:outline-none ${
                  errors.email ? 'border-red-500 border' : ''
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div className="mb-4 md:mb-4">
              <label className="block text-lg mb-3">Şifrenizi Giriniz</label>
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleInputChange}
                placeholder="Şifre"
                className={`w-full px-4 py-6 rounded-lg border-none focus:outline-none ${
                  errors.password ? 'border-red-500 border' : ''
                }`}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
              <div 
                className="text-right text-sm text-blue-400 mt-1 hover:underline cursor-pointer mt-2"
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    window.dispatchEvent(new CustomEvent('openForgotPasswordModal'));
                  }
                }}
              >
                Şifremi Unuttum
              </div>
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full mb-2 bg-[var(--primary)] hover:opacity-80 transition-colors py-3 rounded-lg text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Giriş Yapılıyor..." : "Giriş Yap"}
            </button>
          </form>

          <div className="flex w-full flex-wrap md:flex-nowrap gap-2">
            {/* Google Login */}
            <Link href="#" className="w-full md:w-1/2">
              <button className="w-full bg-white text-black py-3 rounded-lg hover:opacity-80 transition text-black font-semibold flex items-center gap-2 justify-center shadow-md">
                <FcGoogle className="w-8 h-8" />
                <span>Google ile Giriş Yap</span>
              </button>
            </Link>

            {/* Twitch Login */}
            <Link href="#" className="w-full md:w-1/2">
              <button className="w-full bg-[var(--label4)] text-white py-3 rounded-lg hover:opacity-80 transition text-white font-semibold flex items-center gap-2 justify-center">
                <IoLogoTwitch className="w-8 h-8" />
                <span>Twitch ile Giriş Yap</span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Sol Kutu (Bilgi + İkonlar) */}
      <div className="w-full md:w-4/7 p-8 flex flex-col justify-center items-center gap-6 order-2 md:order-1">
        <div className="flex flex-col grid grid-cols-1 sm:grid-cols-2  lg:flex-row items-center gap-10">
          {/* Yazı */}
          <div className="max-w-md text-center lg:text-left">
            <h2 className="text-3xl font-bold mb-4">Lorem Ipsum</h2>
            <p className="text-sm text-[var(--text-gray)]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged.
            </p>
          </div>
          {/* Görsel */}
          <img
            src="/media/login-bg.png"
            alt="Placeholder"
            className="rounded-lg"
          />
        </div>

        {/* 2x2 ikon + yazılar */}
        <div
          className="text-[var(--foreground)] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 w-full"
        >
          <div
            className=" p-4 rounded-lg flex items-center gap-3 bg-[var(--advert-card-bg)]"
          >
            <div className="bg-white text-black p-2 rounded">
              🛍️ {/* örnek emoji / ikon */}
            </div>
            <div>
              <h3 className="font-semibold text-sm">Lorem Ipsum</h3>
              <p className="text-xs text-[var(--text-gray)]">
                Elit lorem ipsum dummy info.
              </p>
            </div>
          </div>
          <div
            className=" p-4 rounded-lg flex items-center gap-3 bg-[var(--advert-card-bg)]"
          >
            <div className="bg-white text-black p-2 rounded">
              🛍️ {/* örnek emoji / ikon */}
            </div>
            <div>
              <h3 className="font-semibold text-sm">Lorem Ipsum</h3>
              <p className="text-xs text-[var(--text-gray)]">
                Elit lorem ipsum dummy info.
              </p>
            </div>
          </div>
          <div
            className=" p-4 rounded-lg flex items-center gap-3 bg-[var(--advert-card-bg)]"
          >
            <div className="bg-white text-black p-2 rounded">
              🛍️ {/* örnek emoji / ikon */}
            </div>
            <div>
              <h3 className="font-semibold text-sm">Lorem Ipsum</h3>
              <p className="text-xs text-[var(--text-gray)]">
                Elit lorem ipsum dummy info.
              </p>
            </div>
          </div>
          <div
            className=" p-4 rounded-lg flex items-center gap-3 bg-[var(--advert-card-bg)]"
          >
            <div className="bg-white text-black p-2 rounded">
              🛍️ {/* örnek emoji / ikon */}
            </div>
            <div>
              <h3 className="font-semibold text-sm">Lorem Ipsum</h3>
              <p className="text-xs text-[var(--text-gray)]">
                Elit lorem ipsum dummy info.
              </p>
            </div>
          </div>
          <div
            className=" p-4 rounded-lg flex items-center gap-3 bg-[var(--advert-card-bg)]"
          >
            <div className="bg-white text-black p-2 rounded">
              🛍️ {/* örnek emoji / ikon */}
            </div>
            <div>
              <h3 className="font-semibold text-sm">Lorem Ipsum</h3>
              <p className="text-xs text-[var(--text-gray)]"> 
                Elit lorem ipsum dummy info.
              </p>
            </div>
          </div>
          <div
            className=" p-4 rounded-lg flex items-center gap-3 bg-[var(--advert-card-bg)]"
          >
            <div className="bg-white text-black p-2 rounded">
              🛍️ {/* örnek emoji / ikon */}
            </div>
            <div>
              <h3 className="font-semibold text-sm">Lorem Ipsum</h3>
              <p className="text-xs text-[var(--text-gray)]">
                Elit lorem ipsum dummy info.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
