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

const Register = () => {
  const router = useRouter();
  const { setIsLoadingState, setGlobalUserData, setIsUserLogin } = useGlobalContext();

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    nickname: "",
    password: "",
    password_confirm: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
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

    if (!formData.name) {
      newErrors.name = "Ad gerekli";
    } else if (formData.name.length < 2) {
      newErrors.name = "Ad en az 2 karakter olmalı";
    }

    if (!formData.surname) {
      newErrors.surname = "Soyad gerekli";
    } else if (formData.surname.length < 2) {
      newErrors.surname = "Soyad en az 2 karakter olmalı";
    }

    if (!formData.email) {
      newErrors.email = "Email adresi gerekli";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Geçerli bir email adresi girin";
    }

    if (!formData.nickname) {
      newErrors.nickname = "Kullanıcı adı gerekli";
    } else if (formData.nickname.length < 3) {
      newErrors.nickname = "Kullanıcı adı en az 3 karakter olmalı";
    }

    if (!formData.password) {
      newErrors.password = "Şifre gerekli";
    } else if (formData.password.length < 6) {
      newErrors.password = "Şifre en az 6 karakter olmalı";
    }

    if (!formData.password_confirm) {
      newErrors.password_confirm = "Şifre tekrarı gerekli";
    } else if (formData.password !== formData.password_confirm) {
      newErrors.password_confirm = "Şifreler eşleşmiyor";
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
      console.log("Register isteği gönderiliyor:", formData);
      const response = await apiService.register(formData);
      console.log("Register response:", response.data);
      
      if (response.data.success) {
        console.log("Kayıt başarılı:", response.data);
        toastUtils.apiSuccess(response.data.message || "Kayıt işlemi başarıyla tamamlandı!");
        
        if (response.data.data?.token) {
          authUtils.setToken(response.data.data.token);
        }
        if (response.data.data?.user) {
          authUtils.setUserData(response.data.data.user);
          setGlobalUserData(response.data.data.user);
        }
        setIsUserLogin(true);
        router.push("/");
      } else {
        toastUtils.apiError(response.data.message || "Kayıt işlemi başarısız");
      }
    } catch (error) {
      console.error("Kayıt hatası detayı:", error);
      
      const errorMessage = error.response?.data?.message || error.message;
      toastUtils.apiError(error, `Kayıt hatası: ${errorMessage}`);
      
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

  // Google OAuth ile kayıt
  const handleGoogleRegister = async () => {
    try {
      setIsLoadingState(true);
      
      // Google OAuth init isteği gönder
      const response = await apiService.googleOAuthInit();
      console.log("Google OAuth init response:", response.data);
      
      if (response.data.success && response.data.data?.auth_url) {
        // Popup aç ve Google OAuth URL'ine yönlendir
        const popup = window.open(
          response.data.data.auth_url,
          'googleOAuth',
          'width=500,height=600,scrollbars=yes,resizable=yes'
        );
        
        // Popup'dan gelen mesajları dinle
        const handleMessage = (event) => {
          if (event.origin !== window.location.origin) return;
          
          if (event.data.type === 'GOOGLE_OAUTH_SUCCESS') {
            // Başarılı OAuth sonrası işlemler
            console.log("Google OAuth başarılı:", event.data);
            popup.close();
            window.removeEventListener('message', handleMessage);
            
            // Kullanıcıyı giriş yapmış olarak işaretle
            if (event.data.token) {
              authUtils.setToken(event.data.token);
            }
            if (event.data.user) {
              authUtils.setUserData(event.data.user);
              setGlobalUserData(event.data.user);
            }
            setIsUserLogin(true);
            router.push("/");
            
          } else if (event.data.type === 'GOOGLE_OAUTH_ERROR') {
            // OAuth hatası
            console.error("Google OAuth hatası:", event.data);
            popup.close();
            window.removeEventListener('message', handleMessage);
            toastUtils.apiError("Google ile giriş yapılamadı");
          }
        };
        
        window.addEventListener('message', handleMessage);
        
        // Popup kapandığında event listener'ı temizle
        const checkClosed = setInterval(() => {
          if (popup.closed) {
            clearInterval(checkClosed);
            window.removeEventListener('message', handleMessage);
          }
        }, 1000);
        
      } else {
        toastUtils.apiError("Google OAuth başlatılamadı");
      }
      
    } catch (error) {
      console.error("Google OAuth hatası:", error);
      toastUtils.apiError("Google ile giriş yapılamadı");
    } finally {
      setIsLoadingState(false);
    }
  };

  // Twitch OAuth ile kayıt
  const handleTwitchRegister = async () => {
    try {
      setIsLoadingState(true);
      
      // Twitch OAuth init isteği gönder
      const response = await apiService.twitchOAuthInit();
      console.log("Twitch OAuth init response:", response.data);
      
      if (response.data.success && response.data.data?.auth_url) {
        // Popup aç ve Twitch OAuth URL'ine yönlendir
        const popup = window.open(
          response.data.data.auth_url,
          'twitchOAuth',
          'width=500,height=600,scrollbars=yes,resizable=yes'
        );
        
        // Popup'dan gelen mesajları dinle
        const handleMessage = (event) => {
          if (event.origin !== window.location.origin) return;
          
          if (event.data.type === 'TWITCH_OAUTH_SUCCESS') {
            // Başarılı OAuth sonrası işlemler
            console.log("Twitch OAuth başarılı:", event.data);
            popup.close();
            window.removeEventListener('message', handleMessage);
            
            // Kullanıcıyı giriş yapmış olarak işaretle
            if (event.data.token) {
              authUtils.setToken(event.data.token);
            }
            if (event.data.user) {
              authUtils.setUserData(event.data.user);
              setGlobalUserData(event.data.user);
            }
            setIsUserLogin(true);
            router.push("/");
            
          } else if (event.data.type === 'TWITCH_OAUTH_ERROR') {
            // OAuth hatası
            console.error("Twitch OAuth hatası:", event.data);
            popup.close();
            window.removeEventListener('message', handleMessage);
            toastUtils.apiError("Twitch ile giriş yapılamadı");
          }
        };
        
        window.addEventListener('message', handleMessage);
        
        // Popup kapandığında event listener'ı temizle
        const checkClosed = setInterval(() => {
          if (popup.closed) {
            clearInterval(checkClosed);
            window.removeEventListener('message', handleMessage);
          }
        }, 1000);
        
      } else {
        toastUtils.apiError("Twitch OAuth başlatılamadı");
      }
      
    } catch (error) {
      console.error("Twitch OAuth hatası:", error);
      toastUtils.apiError("Twitch ile giriş yapılamadı");
    } finally {
      setIsLoadingState(false);
    }
  };

  return (
    <div
      id="register"
      style={{ color: "var(--foreground)" }}
      className="container m-auto flex flex-col md:flex-row text-white my-6"
    >
      {/* Sağ Kutu (Giriş Formu) - Mobilde üstte */}
      <div className="w-full md:w-3/7 flex items-center justify-center p-8 order-1 md:order-2">
        <div className="w-full">
          <div className="flex justify-between mb-1 md:mb-8">
            <div>
              <h2 className="text-2xl text-white mb-1">Merhaba</h2>
              <h1 className="text-5xl font-bold mb-6">Kayıt Ol</h1>
            </div>
            <div className="text-sm mt-4 flex flex-wrap flex-col justify-start items-end">
              Üye Misin?{" "}
              <span className="text-blue-400 hover:underline cursor-pointer">
                <Link href="/login"> Giriş Yap</Link>
              </span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="w-full space-y-4">
            <div className="mb-3 md:mb-6 flex flex-wrap space-x-2">
              <div className="w-full md:flex-1">
                <label className="block text-lg mb-3">Ad</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Adınız"
                  className={`w-full px-2 py-4 md:px-4 md:py-6 rounded-lg text-white border-none focus:outline-none ${
                    errors.name ? 'border-red-500 border' : ''
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div className="w-full md:flex-1">
                <label className="block text-lg mb-3">Soyad</label>
                <input
                  type="text"
                  name="surname"
                  value={formData.surname}
                  onChange={handleInputChange}
                  placeholder="Soyadınız"
                  className={`w-full px-2 py-4 md:px-4 md:py-6 rounded-lg text-white border-none focus:outline-none ${
                    errors.surname ? 'border-red-500 border' : ''
                  }`}
                />
                {errors.surname && (
                  <p className="text-red-500 text-sm mt-1">{errors.surname}</p>
                )}
              </div>
            </div>

            <div className="mb-3 md:mb-6 flex flex-wrap space-x-2">
              <div className="w-full md:flex-1">
                <label className="block text-lg mb-3">Kullanıcı Adı</label>
                <input
                  type="text"
                  name="nickname"
                  value={formData.nickname}
                  onChange={handleInputChange}
                  placeholder="Kullanıcı adı"
                  className={`w-full px-2 py-4 md:px-4 md:py-6 rounded-lg text-white border-none focus:outline-none ${
                    errors.nickname ? 'border-red-500 border' : ''
                  }`}
                />
                {errors.nickname && (
                  <p className="text-red-500 text-sm mt-1">{errors.nickname}</p>
                )}
              </div>

              <div className="w-full md:flex-1">
                <label className="block text-lg mb-3">Email Adresi</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Adresi"
                  className={`w-full px-2 py-4 md:py-6 rounded-lg text-white border-none focus:outline-none ${
                    errors.email ? 'border-red-500 border' : ''
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="mb-3 md:mb-6 flex flex-wrap space-x-2">
              <div className="w-full md:flex-1">
                <label className="block text-lg mb-3">Şifre</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Şifre"
                  className={`w-full px-2 py-4 md:px-4 md:py-6 rounded-lg text-white border-none focus:outline-none ${
                    errors.password ? 'border-red-500 border' : ''
                  }`}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                )}
              </div>

              <div className="w-full md:flex-1">
                <label className="block text-lg mb-3">Şifre Tekrar</label>
                <input
                  type="password"
                  name="password_confirm"
                  value={formData.password_confirm}
                  onChange={handleInputChange}
                  placeholder="Şifre Tekrar"
                  className={`w-full px-2 py-4 md:px-4 md:py-6 rounded-lg text-white border-none focus:outline-none ${
                    errors.password_confirm ? 'border-red-500 border' : ''
                  }`}
                />
                {errors.password_confirm && (
                  <p className="text-red-500 text-sm mt-1">{errors.password_confirm}</p>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mb-2 bg-[var(--primary)] hover:opacity-80 transition-colors py-3 rounded-lg text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Kayıt Olunuyor..." : "Üye Ol"}
            </button>
          </form>

          <div className="flex w-full flex-wrap md:flex-nowrap gap-2">
            {/* Google Login */}
            <button 
              onClick={handleGoogleRegister}
              className="w-full md:w-1/2 bg-white text-black py-3 rounded-lg hover:opacity-80 transition text-black font-semibold flex items-center gap-2 justify-center shadow-md"
            >
              <FcGoogle className="w-8 h-8" />
              <span>Google ile Kayıt Ol</span>
            </button>

            {/* Twitch Login */}
            <button 
              onClick={handleTwitchRegister}
              className="w-full md:w-1/2 bg-[var(--label4)] text-white py-3 rounded-lg hover:opacity-80 transition text-white font-semibold flex items-center gap-2 justify-center"
            >
              <IoLogoTwitch className="w-8 h-8" />
              <span>Twitch ile Kayıt Ol</span>
            </button>
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

export default Register;
