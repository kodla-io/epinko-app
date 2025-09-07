import { setCookie, getCookie, removeCookie } from './cookies';

export const authUtils = {
  // Token işlemleri
  setToken: (token) => {
    try {
      // Token'ı birden fazla yöntemle kaydet
      const safeToken = token.toString();
      
      // localStorage'a kaydet
      localStorage.setItem('_login_token', safeToken);
      
      // Session Storage'a kaydet
      sessionStorage.setItem('_login_token', safeToken);
      
      // Cookie'ye kaydet
      setCookie('auth_token', safeToken, { 
        path: '/', 
        maxAge: 30 * 24 * 60 * 60 // 30 gün
      });
      
      // Window nesnesine de kaydet
      if (typeof window !== 'undefined') {
        window.loginToken = safeToken;
      }
      
      console.log('Token successfully stored', {
        localStorageStored: !!localStorage.getItem('_login_token'),
        sessionStorageStored: !!sessionStorage.getItem('_login_token'),
        cookieStored: !!getCookie('auth_token')
      });
      
      // Login state'i de true olarak ayarla
      authUtils.setLoginState(true);
    } catch (error) {
      console.error('Token storage error:', error);
      
      // Fallback mekanizmaları
      try {
        // Basit string olarak kaydet
        localStorage.setItem('_login_token', token);
      } catch (fallbackError) {
        console.error('Fallback token storage error:', fallbackError);
      }
    }
  },
  
  getToken: () => {
    try {
      // Öncelik sırası: 
      // 1. window nesnesi
      // 2. localStorage (şifrelenmiş)
      // 3. sessionStorage
      // 4. cookie

      // Window nesnesinden kontrol et
      if (typeof window !== 'undefined' && window.loginToken) {
        console.log('Token retrieved from window:', {
          tokenSource: 'window',
          tokenLength: window.loginToken.length
        });
        return window.loginToken;
      }
      
      // localStorage'dan şifrelenmiş token'ı al
      const localStorageToken = localStorage.getItem('_login_token');
      if (localStorageToken) {
        const decodedToken = atob(localStorageToken);
        console.log('Token retrieved from localStorage:', {
          tokenSource: 'localStorage',
          tokenLength: decodedToken.length
        });
        return decodedToken;
      }
      
      // Session Storage'dan kontrol et
      const sessionToken = sessionStorage.getItem('_login_token');
      if (sessionToken) {
        console.log('Token retrieved from sessionStorage:', {
          tokenSource: 'sessionStorage',
          tokenLength: sessionToken.length
        });
        return sessionToken;
      }
      
      // Cookie'den kontrol et
      const cookieToken = getCookie('auth_token');
      if (cookieToken) {
        console.log('Token retrieved from cookie:', {
          tokenSource: 'cookie',
          tokenLength: cookieToken.length
        });
        return cookieToken;
      }
      
      console.warn('No token found in any storage');
      return null;
    } catch (error) {
      console.error('Token retrieval error:', error);
      return null;
    }
  },
  
  removeToken: () => {
    // Tüm token depolama yerlerinden sil
    localStorage.removeItem('_login_token');
    sessionStorage.removeItem('_login_token');
    removeCookie('auth_token');
    
    // Window nesnesinden de sil
    if (typeof window !== 'undefined') {
      delete window.loginToken;
    }
  },
  
  // Kullanıcı bilgileri
  setUserData: (userData) => {
    try {
      // Kullanıcı verisini JSON olarak kaydet
      const stringifiedUserData = JSON.stringify(userData);
      
      // localStorage'a kaydet
      localStorage.setItem('_user_data', stringifiedUserData);
      
      // Session Storage'a kaydet
      sessionStorage.setItem('_user_data', stringifiedUserData);
      
      // Cookie'ye kaydet
      setCookie('user_data', stringifiedUserData, { 
        path: '/', 
        maxAge: 30 * 24 * 60 * 60 // 30 gün
      });
      
      // Window nesnesine de kaydet
      if (typeof window !== 'undefined') {
        window.userData = userData;
      }
      
      console.log('User data successfully stored', {
        localStorageStored: !!localStorage.getItem('_user_data'),
        sessionStorageStored: !!sessionStorage.getItem('_user_data'),
        cookieStored: !!getCookie('user_data')
      });
    } catch (error) {
      console.error('User data storage error:', error);
      
      // Fallback mekanizmaları
      try {
        // Basit string olarak kaydet
        localStorage.setItem('_user_data', JSON.stringify({
          email: userData.email,
          nickname: userData.nickname,
          user_id: userData.user_id
        }));
      } catch (fallbackError) {
        console.error('Fallback user data storage error:', fallbackError);
      }
    }
  },
  
  getUserData: () => {
    try {
      // Window nesnesinden kontrol et
      if (typeof window !== 'undefined' && window.userData) {
        return window.userData;
      }
      
      // localStorage'dan şifrelenmiş kullanıcı verisini al
      const localStorageUserData = localStorage.getItem('_user_data');
      if (localStorageUserData) {
        return JSON.parse(atob(localStorageUserData));
      }
      
      // Cookie'den kontrol et
      const cookieUserData = getCookie('user_data');
      if (cookieUserData) {
        return cookieUserData;
      }
      
      console.warn('No user data found in any storage');
      return null;
    } catch (error) {
      console.error('User data retrieval error:', error);
      return null;
    }
  },
  
  removeUserData: () => {
    localStorage.removeItem('_user_data');
    removeCookie('user_data');
    
    // Window nesnesinden de sil
    if (typeof window !== 'undefined') {
      delete window.userData;
    }
  },
  
  // Login durumu
  setLoginState: (isLoggedIn) => {
    try {
      // localStorage'a kaydet
      localStorage.setItem('_is_logged_in', JSON.stringify(isLoggedIn));
      
      // Cookie'ye kaydet
      setCookie('is_logged_in', JSON.stringify(isLoggedIn), { 
        path: '/', 
        maxAge: 30 * 24 * 60 * 60 // 30 gün
      });
      
      // Window nesnesine de kaydet
      if (typeof window !== 'undefined') {
        window.isLoggedIn = isLoggedIn;
      }
      
      console.log('Login state successfully stored:', isLoggedIn);
    } catch (error) {
      console.error('Login state storage error:', error);
    }
  },
  
  getLoginState: () => {
    try {
      // Window nesnesinden kontrol et
      if (typeof window !== 'undefined' && window.isLoggedIn !== undefined) {
        return window.isLoggedIn;
      }
      
      // localStorage'dan kontrol et
      const localStorageState = localStorage.getItem('_is_logged_in');
      if (localStorageState !== null) {
        return JSON.parse(localStorageState);
      }
      
      // Cookie'den kontrol et
      const cookieState = getCookie('is_logged_in');
      if (cookieState !== null) {
        return cookieState;
      }
      
      console.warn('No login state found');
      return false;
    } catch (error) {
      console.error('Login state retrieval error:', error);
      return false;
    }
  },
  
  // Login durumu kontrolü
  isAuthenticated: () => {
    const token = authUtils.getToken();
    const loginState = authUtils.getLoginState();
    const userData = authUtils.getUserData();
    
    console.log('Authentication Check:', {
      token: !!token,
      loginState,
      userData: !!userData
    });
    
    return !!(token && loginState && userData);
  },
  
  // Logout işlemi
  logout: () => {
    // Tüm login bilgilerini temizle
    authUtils.removeToken();
    authUtils.removeUserData();
    authUtils.setLoginState(false);
  },
};
