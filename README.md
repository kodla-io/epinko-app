# Epinko App - API Bağlantısı

Bu proje, e-pin satış platformu için API bağlantısı zemini hazırlanmıştır.

## Kurulum

```bash
npm install
npm run dev
```

## API Yapısı

### Services
- `services/index.js` - Temel fetch fonksiyonları
- `services/api.js` - Axios tabanlı API servisleri (Auth odaklı)

### Utils
- `utils/cookies.js` - Cookie yönetimi
- `utils/auth.js` - Kimlik doğrulama yardımcıları
- `utils/apiConfig.js` - API konfigürasyon yönetimi

### Hooks
- `hooks/useApi.js` - Genel API çağrıları için hook

### Contexts
- `contexts/GlobalProvider.js` - Global state yönetimi (Auth odaklı)

## API Versiyonlama

Proje API versiyonlama desteği ile gelir. Environment variables ile kontrol edilir:

### Environment Variables

```env
# API Base URL
NEXT_PUBLIC_API_BASE_URL=https://api.epinko.com/api

# API Version (v1, v2, v3)
NEXT_PUBLIC_API_VERSION=v1
```

### Desteklenen Versiyonlar

- **v1**: Temel auth ve user işlemleri
- **v2**: Auth, user + games işlemleri  
- **v3**: Auth, user, games + adverts, cart işlemleri

### Versiyon Kontrolü

```javascript
import { API_CONFIG, checkVersionCompatibility } from '../utils/apiConfig';

// Mevcut versiyon
console.log(API_CONFIG.VERSION); // 'v1'

// Versiyon kontrolü
if (API_CONFIG.isVersion('v2')) {
  // v2 özellikleri
}

// Uyumluluk kontrolü
if (checkVersionCompatibility('v2')) {
  // v2+ özellikleri kullanılabilir
}
```

## API Endpoints (Mevcut)

### Auth
- `POST /auth/login` - Giriş
- `POST /auth/register` - Kayıt
- `POST /auth/logout` - Çıkış

### User
- `GET /user/profile` - Kullanıcı profili
- `PUT /user/profile` - Profil güncelleme

## Kullanım Örnekleri

### API Service Kullanımı
```javascript
import { apiService, apiConfig } from '../services/api';

// API bilgilerini görüntüle
console.log('API Version:', apiConfig.version);
console.log('API URL:', apiConfig.fullUrl);

// Login
const login = async (credentials) => {
  try {
    const response = await apiService.login(credentials);
    return response.data;
  } catch (error) {
    console.error('Login hatası:', error);
  }
};

// Register
const register = async (userData) => {
  try {
    const response = await apiService.register(userData);
    return response.data;
  } catch (error) {
    console.error('Kayıt hatası:', error);
  }
};
```

### Auth Utils Kullanımı
```javascript
import { authUtils } from '../utils/auth';

// Token kaydet
authUtils.setToken('your-token-here');

// Token al
const token = authUtils.getToken();

// Kullanıcı giriş yapmış mı kontrol et
const isLoggedIn = authUtils.isAuthenticated();

// Çıkış yap
authUtils.logout();
```

### Global Context Kullanımı
```javascript
import { useGlobalContext } from '../contexts/GlobalProvider';

const MyComponent = () => {
  const { 
    isUserLogin, 
    setIsUserLogin, 
    globalUserData, 
    setGlobalUserData,
    isLoadingState,
    setIsLoadingState 
  } = useGlobalContext();

  // Kullanım...
};
```

### API Durumu Kontrolü
```javascript
import { checkApiStatus } from '../utils/apiConfig';

const checkApi = async () => {
  const isOnline = await checkApiStatus();
  if (isOnline) {
    console.log('API çalışıyor');
  } else {
    console.log('API erişilemiyor');
  }
};
```

## Notlar

- API URL'sini environment variables ile ayarlayın
- Token yönetimi otomatik olarak yapılır
- Hata yönetimi merkezi olarak yapılır
- Loading state'leri otomatik olarak yönetilir
- Şu an sadece Auth işlemleri hazır, diğer endpoint'ler ihtiyaç duyuldukça eklenecek
- API versiyonlama ile farklı API versiyonları arasında geçiş yapabilirsiniz
