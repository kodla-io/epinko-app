"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { apiService } from '../../../services/api';
import { toastUtils } from '../../../utils/toast';

export default function MembershipVerification() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get('token');
  const [verificationStatus, setVerificationStatus] = useState('pending');
  const hasVerifiedRef = useRef(false);

  useEffect(() => {
    // Daha önce doğrulama yapılmışsa tekrar yapma
    if (hasVerifiedRef.current || !token) return;

    const verifyToken = async () => {
      // Doğrulama başladığını işaretle
      hasVerifiedRef.current = true;

      try {
        console.log('🔍 Token Doğrulama İşlemi Başladı:', token);
        
        const response = await apiService.verifyEmailToken(token);
        
        console.log('✅ Token Doğrulama Sonucu:', response.data);
        console.log('✅ Tam Yanıt:', response);

        if (response.data.success) {
          console.log('✅ Doğrulama Başarılı');
          setVerificationStatus('success');
          toastUtils.apiSuccess(response.data.message || 'Hesabınız başarıyla doğrulandı');
          
          // 2 saniye sonra ana sayfaya yönlendir
          setTimeout(() => {
            router.push('/');
          }, 2000);
        } else {
          console.error('❌ Doğrulama Başarısız:', response.data.message);
          setVerificationStatus('error');
          toastUtils.apiError(response.data.message || 'Hesap doğrulama başarısız');
          
          // 2 saniye sonra ana sayfaya yönlendir
          setTimeout(() => {
            router.push('/');
          }, 2000);
        }
      } catch (error) {
        console.error('❌ Token Doğrulama Hatası:', error);
        console.error('❌ Hata Detayları:', {
          status: error.response?.status,
          data: error.response?.data,
          message: error.message
        });

        setVerificationStatus('error');
        
        // Detaylı hata bilgisi
        const errorMessage = error.response?.data?.message || 
                             error.response?.data?.error || 
                             error.message || 
                             'Bir hata oluştu';
        
        toastUtils.apiError(errorMessage);
        
        // 2 saniye sonra ana sayfaya yönlendir
        setTimeout(() => {
          router.push('/');
        }, 2000);
      }
    };

    verifyToken();
  }, [token, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--background)]">
      <div className="text-center p-8 rounded-lg bg-[var(--advert-card-bg)] shadow-lg max-w-md w-full">
        <div className="flex justify-center mb-6">
          <div className="animate-spin w-16 h-16 border-4 border-t-4 border-t-[var(--success)] border-gray-200 rounded-full"></div>
        </div>
        <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">
          {verificationStatus === 'pending' && 'Hesabınız Doğrulanıyor'}
          {verificationStatus === 'success' && 'Hesap Doğrulama Başarılı'}
          {verificationStatus === 'error' && 'Hesap Doğrulama Başarısız'}
        </h2>
        <p className="text-[var(--text-gray)] mb-4">
          {verificationStatus === 'pending' && 'Lütfen bir dakikanızı ayırın, hesap doğrulama işlemi devam ediyor.'}
          {verificationStatus === 'success' && 'Hesabınız başarıyla doğrulandı. Ana sayfaya yönlendiriliyorsunuz.'}
          {verificationStatus === 'error' && 'Hesap doğrulama sırasında bir hata oluştu. Ana sayfaya yönlendiriliyorsunuz.'}
        </p>
      </div>
    </div>
  );
}
