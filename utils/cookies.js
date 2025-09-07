import Cookies from 'js-cookie';

export const setCookie = (name, value, options = {}) => {
  try {
    // Güvenli varsayılan seçenekler
    const defaultOptions = {
      path: '/',
      expires: 7,
      sameSite: 'Strict',
      secure: process.env.NODE_ENV === 'production'
    };

    // Seçenekleri birleştir (güvenli şekilde)
    const cookieOptions = Object.assign({}, defaultOptions, options);

    // Değerin türüne göre işlem
    let processedValue = value;
    
    // Boolean değerler için string'e çevir
    if (typeof value === 'boolean') {
      processedValue = value.toString();
    }
    
    // Nesne ve dizi için JSON string'e çevir
    if (typeof value === 'object' && value !== null) {
      processedValue = JSON.stringify(value);
    }

    // Cookies'e kaydet (güvenli şekilde)
    try {
      // js-cookie kullanarak kaydet
      Cookies.set(name, processedValue, {
        path: cookieOptions.path,
        expires: cookieOptions.expires,
        sameSite: cookieOptions.sameSite,
        secure: cookieOptions.secure
      });
      console.log(`Cookie set: ${name}`, processedValue);
    } catch (jsCookieError) {
      console.error(`js-cookie set error for ${name}:`, jsCookieError);
      
      // Fallback: document.cookie kullanarak kaydet
      const cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(processedValue)}; ` +
        `path=${cookieOptions.path}; ` +
        `expires=${new Date(Date.now() + cookieOptions.expires * 24 * 60 * 60 * 1000).toUTCString()}; ` +
        `${cookieOptions.sameSite ? `SameSite=${cookieOptions.sameSite}; ` : ''}` +
        `${cookieOptions.secure ? 'Secure; ' : ''}`;
      
      document.cookie = cookieString;
      console.log(`Fallback cookie set: ${name}`, processedValue);
    }
  } catch (error) {
    console.error(`Cookie set error for ${name}:`, error);
    
    // Son çare: en basit şekilde cookie kaydetmeye çalış
    try {
      document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value.toString())}; path=/`;
    } catch (fallbackError) {
      console.error(`Final fallback cookie set error for ${name}:`, fallbackError);
    }
  }
};

export const getCookie = (name) => {
  try {
    const cookieValue = Cookies.get(name);
    
    if (cookieValue === undefined) {
      return null;
    }
    
    // Boolean kontrolü
    if (cookieValue === 'true') return true;
    if (cookieValue === 'false') return false;
    
    // JSON parse kontrolü
    try {
      return JSON.parse(cookieValue);
    } catch {
      // JSON parse başarısız olursa normal string olarak dön
      return cookieValue;
    }
  } catch (error) {
    console.error(`Cookie get error for ${name}:`, error);
    return null;
  }
};

export const removeCookie = (name) => {
  try {
    Cookies.remove(name, { path: '/' });
    console.log(`Cookie removed: ${name}`);
  } catch (error) {
    console.error(`Cookie remove error for ${name}:`, error);
    
    // Fallback mekanizması
    document.cookie = `${encodeURIComponent(name)}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
  }
};
