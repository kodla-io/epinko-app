// API Konfigürasyon Yönetimi
export const API_CONFIG = {
  // Environment variables
  VERSION: process.env.NEXT_PUBLIC_API_VERSION || 'v1',
  BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://epinko.kodlademo.com/api',
  
  // Full URL
  get FULL_URL() {
    return `${this.BASE_URL}/${this.VERSION}`;
  },
  
  // Versiyon kontrolü
  isVersion(version) {
    return this.VERSION === version;
  },
  
  // Versiyon geçmişi
  VERSIONS: {
    v1: {
      name: 'Version 1',
      deprecated: false,
      endpoints: {
        auth: '/auth',
        user: '/user',
      }
    },
    v2: {
      name: 'Version 2', 
      deprecated: false,
      endpoints: {
        auth: '/auth',
        user: '/user',
        games: '/games',
      }
    },
    v3: {
      name: 'Version 3',
      deprecated: false,
      endpoints: {
        auth: '/auth',
        user: '/user', 
        games: '/games',
        adverts: '/adverts',
        cart: '/cart',
      }
    }
  },
  
  // Mevcut versiyon bilgisi
  getCurrentVersion() {
    return this.VERSIONS[this.VERSION] || this.VERSIONS.v1;
  },
  
  // Endpoint oluşturma
  createEndpoint(path) {
    return `${this.FULL_URL}${path}`;
  },
  
  // Versiyon değiştirme (development için)
  setVersion(version) {
    if (this.VERSIONS[version]) {
      this.VERSION = version;
      return true;
    }
    return false;
  }
};

// API durumu kontrolü
export const checkApiStatus = async () => {
  try {
    const response = await fetch(`${API_CONFIG.FULL_URL}/health`);
    return response.ok;
  } catch (error) {
    console.error('API durumu kontrol edilemedi:', error);
    return false;
  }
};

// Versiyon uyumluluğu kontrolü
export const checkVersionCompatibility = (requiredVersion) => {
  const currentVersion = API_CONFIG.VERSION;
  const versionOrder = ['v1', 'v2', 'v3'];
  
  const currentIndex = versionOrder.indexOf(currentVersion);
  const requiredIndex = versionOrder.indexOf(requiredVersion);
  
  return currentIndex >= requiredIndex;
};
