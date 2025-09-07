"use client";

import { Suspense, useEffect, useState } from "react";
import ProfileTabs from "../../../componants/profile/profile-tabs";
import { useRouter } from "next/navigation";
import { toastUtils } from "../../../utils/toast";
import apiService from "../../../services/api";
import { authUtils } from "../../../utils/auth";

export default function ProfilePage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        // Login durumunu çoklu kaynaklardan kontrol et
        const isLoggedIn = 
          localStorage.getItem('_is_logged_in') === 'true' || 
          sessionStorage.getItem('_is_logged_in') === 'true' || 
          document.cookie.includes('is_logged_in=true');

        // console.log('Login State Check:', {
        //   isLoggedIn,
        //   localStorageLoginState: localStorage.getItem('_is_logged_in'),
        //   sessionStorageLoginState: sessionStorage.getItem('_is_logged_in'),
        //   cookieLoginState: document.cookie.includes('is_logged_in=true')
        // });

        // Login durumu kontrolü
        if (!isLoggedIn) {
          // console.error('Not logged in, redirecting to login', {
          //   localStorageLoginState: localStorage.getItem('_is_logged_in'),
          //   sessionStorageLoginState: sessionStorage.getItem('_is_logged_in'),
          //   cookieLoginState: document.cookie.includes('is_logged_in=true')
          // });
          
          toastUtils.apiError('Lütfen giriş yapın');
          router.push('/login');
          return;
        }

        // Kullanıcı bilgilerini çek ve konsola yazdır
        try {
          const response = await apiService.getUserProfile();
          console.log('Kullanıcı Profil Bilgileri:', response.data);
          
          // Kullanıcı verilerini state'e kaydet
          if (response.data && response.data.data) {
            setUserData(response.data.data);
            
            // Kullanıcı verilerini localStorage'a kaydet
            localStorage.setItem('_user_data', JSON.stringify(response.data.data));
          }
        } catch (profileError) {
          console.error('Profil bilgileri çekilirken hata:', profileError);
          
          // Hata durumunda localStorage'dan kullanıcı verilerini al
          const storedUserData = localStorage.getItem('_user_data');
          if (storedUserData) {
            try {
              const parsedUserData = JSON.parse(storedUserData);
              setUserData(parsedUserData);
              console.log('Kullanıcı verileri localStorage\'dan yüklendi');
            } catch (parseError) {
              console.error('Stored user data parse error:', parseError);
              toastUtils.apiError('Kullanıcı verileri yüklenemedi');
            }
          } else {
            toastUtils.apiError('Profil bilgileri alınamadı');
          }
        }
      } catch (error) {
        console.error("Profil sayfası erişim hatası:", error);
        toastUtils.apiError('Bir hata oluştu');
        router.push('/login');
      } finally {
        // Loading state'i her durumda kapat
        setIsLoading(false);
      }
    };

    // Sayfa yüklendiğinde ve her değişiklikte kontrol et
    checkAuthentication();
  }, [router]);

  // Loading state'i kontrol et
  if (isLoading) {
    return <div>Yükleniyor...</div>;
  }

  // Her durumda içeriği göster
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProfileTabs data={userData} />
    </Suspense>
  );
}
