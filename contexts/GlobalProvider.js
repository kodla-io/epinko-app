'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import { authUtils } from '../utils/auth';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [isLoadingState, setIsLoadingState] = useState(false);
  const [isUserLogin, setIsUserLogin] = useState(false);
  const [globalUserData, setGlobalUserData] = useState({});

  // Sayfa yüklendiğinde mevcut oturum bilgilerini kontrol et
  useEffect(() => {
    const checkAuthStatus = () => {
      const loginState = localStorage.getItem('_is_logged_in') === 'true' || 
                         sessionStorage.getItem('_is_logged_in') === 'true' || 
                         document.cookie.includes('is_logged_in=true');
      const userData = localStorage.getItem('_user_data') || 
                       sessionStorage.getItem('_user_data');

      console.log('Global Provider Comprehensive Auth Check:', {
        loginState, 
        userData: !!userData,
        currentIsUserLogin: isUserLogin
      });

      // Login state ve kullanıcı verisi varsa login durumunu true yap
      if (loginState) {
        // Force login state to true
        if (!isUserLogin) {
          console.log('Forcing login state to true');
          setIsUserLogin(true);
        }
        
        // Kullanıcı verisi varsa güncelle
        if (userData) {
          try {
            const parsedUserData = JSON.parse(userData);
            setGlobalUserData(parsedUserData);
          } catch (error) {
            console.error('User data parse error:', error);
          }
        }
      } else {
        // Login state yoksa login durumunu false yap
        if (isUserLogin) {
          console.log('Forcing login state to false');
          setIsUserLogin(false);
        }
        
        setGlobalUserData({});
        authUtils.logout();
      }
    };

    // Sayfa yüklendiğinde ve her değişiklikte kontrol et
    checkAuthStatus();

    // Depolama değişikliklerini dinle (farklı sekmelerde senkronizasyon için)
    const handleStorageChange = (event) => {
      // Sadece auth ile ilgili değişiklikleri dinle
      if (['_login_token', '_user_data', '_is_logged_in', 'auth_token', 'user_data', 'is_logged_in'].includes(event.key)) {
        console.log('Storage change detected:', event.key);
        checkAuthStatus();
      }
    };

    // Storage event listener ekle
    window.addEventListener('storage', handleStorageChange);

    // Tarayıcı odağı değiştiğinde de kontrol et
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        checkAuthStatus();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []); // Boş dependency array: sadece mount ve unmount anında çalış

  // Login durumu değiştiğinde auth utility'lerini güncelle
  useEffect(() => {
    if (isUserLogin) {
      // Kullanıcı giriş yaptığında login state ve kullanıcı bilgilerini kaydet
      authUtils.setLoginState(true);
      
      // Eğer global user data boş değilse kaydet
      if (Object.keys(globalUserData).length > 0) {
        authUtils.setUserData(globalUserData);
      }
    } else {
      // Çıkış yapıldığında tüm bilgileri temizle
      authUtils.logout();
    }
  }, [isUserLogin, globalUserData]);

  return (
    <GlobalContext.Provider
      value={{
        isLoadingState,
        setIsLoadingState,
        isUserLogin,
        setIsUserLogin,
        globalUserData,
        setGlobalUserData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
