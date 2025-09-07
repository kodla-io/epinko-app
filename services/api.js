import axios from "axios";
import { getCookie } from "../utils/cookies";
import { API_CONFIG } from "../utils/apiConfig";
import { authUtils } from '../utils/auth';

// CORS sorununu çözmek için direkt URL kullan
const BASE_URL = "/api/v1";

// Axios instance oluştur
const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Request interceptor - her istekte token ekle
api.interceptors.request.use(
  (config) => {
    const token = getCookie("auth_token");
    console.log('Request Interceptor Token Check:', {
      cookieToken: !!token,
      tokenLength: token ? token.length : 0,
      fullConfig: config.url
    });
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor - hata yönetimi
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      console.log("Token geçersiz, kullanıcı logout ediliyor");
    }
    return Promise.reject(error);
  }
);

// API fonksiyonları - Auth işlemleri
export const apiService = {
  // Auth işlemleri
  login: (credentials) => {
    return axios.post(`https://epinko.kodlademo.com/api/v1/login`, credentials, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });
  },

  register: (userData) => {
    const data = {
      name: userData.name || '',
      surname: userData.surname || 'deneme',
      email: userData.email,
      nickname: userData.nickname,
      password: userData.password,
      password_confirm: userData.password_confirm,
      sozlesme: "1", // Sözleşme onayı
      reference: userData.reference || "", // Referans kodu (opsiyonel)
    };

    return axios.post(`https://epinko.kodlademo.com/api/v1/register`, data, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });
  },

  logout: () => api.post("/auth/logout"),

  // Kullanıcı işlemleri
  getUserProfile: () => {
    // Önce localStorage'dan kullanıcı verilerini al
    const storedUserData = localStorage.getItem('_user_data');
    
    let token = null;
    try {
      if (storedUserData) {
        const parsedUserData = JSON.parse(storedUserData);
        token = parsedUserData.api_token;
        
        console.log('Token retrieval from localStorage:', {
          tokenFound: !!token,
          tokenLength: token ? token.length : 0
        });
      }
    } catch (parseError) {
      console.error('User data parse error:', parseError);
    }

    // Eğer token yoksa hata fırlat
    if (!token) {
      console.error('No token found for user profile request');
      return Promise.reject(new Error('Authentication token is missing'));
    }

    // Token ile birlikte isteği gönder
    return api.get(`https://epinko.kodlademo.com/api/v1/user/profile`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  },
  updateUserProfile: (data) => api.put("/user/profile", data),

  // Test işlemleri
  healthCheck: () => api.get("/info"),

  // OAuth işlemleri
  googleOAuthInit: () => {
    return axios.post(`https://epinko.kodlademo.com/api/v1/auth/google/init`, {}, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });
  },

  twitchOAuthInit: () => {
    return axios.post(`https://epinko.kodlademo.com/api/v1/auth/twitch/init`, {}, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });
  },

  // Email doğrulama
  verifyEmailToken: (token) => {
    return axios.get(`https://epinko.kodlademo.com/api/v1/verify-email/${token}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });
  },
};

// API bilgilerini export et
export const apiConfig = {
  version: API_CONFIG.VERSION,
  baseUrl: API_CONFIG.BASE_URL,
  fullUrl: BASE_URL,
  currentVersion: API_CONFIG.getCurrentVersion(),
};

export default apiService;
