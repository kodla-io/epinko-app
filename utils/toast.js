import { toast } from 'react-toastify';

export const toastUtils = {
  // Başarı mesajları
  success: (message, options = {}) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      ...options
    });
  },

  // Hata mesajları
  error: (message, options = {}) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      ...options
    });
  },

  // Uyarı mesajları
  warning: (message, options = {}) => {
    toast.warning(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      ...options
    });
  },

  // Bilgi mesajları
  info: (message, options = {}) => {
    toast.info(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      ...options
    });
  },

  // API hata mesajları için özel fonksiyon
  apiError: (error, defaultMessage = "Bir hata oluştu") => {
    let message = defaultMessage;
    
    if (error.response?.data?.message) {
      message = error.response.data.message;
    } else if (error.response?.data?.errors) {
      // Validation errors
      const errorMessages = Object.values(error.response.data.errors).flat();
      message = errorMessages.join(', ');
    } else if (error.message) {
      message = error.message;
    } else if (error.code === 'ERR_NETWORK') {
      message = "Ağ bağlantısı hatası. Lütfen internet bağlantınızı kontrol edin.";
    } else if (error.code === 'ERR_CANCELED') {
      message = "İstek iptal edildi.";
    }

    toast.error(message);
  },

  // Başarılı işlemler için özel fonksiyon
  apiSuccess: (message = "İşlem başarılı") => {
    toast.success(message);
  }
};
