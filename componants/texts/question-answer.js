import React from "react";

const QuestionAnswer = () => {
  return (
    <div className="container m-auto p-4">
      <div className="flex items-center space-x-4">
        <h2
          style={{ color: "var(--foreground)" }}
          className="text-white text-[30px] py-2 font-bold"
        >
          Sıkça Sorulan Sorular
        </h2>
        <div className="flex-1 flex-wrap h-[2px] bg-gradient-to-r from-orange-500 to-green-500" />
      </div>
      <div className="text-[var(--foreground)] ">
        <div
          className="mb-4 p-4 rounded-lg bg-[var(--advert-card-bg)]"
        >
          <h2 className="text-xl text-[var(--foreground)] font-bold">
            Hesap.com.tr üzerinden UC ID yükleme nasıl gerçekleştirilir?
          </h2>
          <p className="mt-2 text-[var(--text-gray)]">
            Hesap.com.tr'de UC ID yüklemek oldukça basittir. İlk olarak,
            hesap.com.tr'ye giriş yapın ve PUBG UC satın alma bölümünü bulun.
            İhtiyacınıza göre bir UC miktarı seçin ve ödeme işlemini tamamlayın.
            Daha sonra, size verilen UC kodunu PUBG oyununda 'Kod Kullan'
            bölümüne girin ve UC'nizin hesabınıza yüklendiğini görün. Unutmayın,
            bazen işlem birkaç dakika sürebilir, bu yüzden sabırlı olun.
          </p>
        </div>
        <div
          className="mb-4 p-4 rounded-lg bg-[var(--advert-card-bg)]"
        >
          <h2 className="text-xl text-[var(--foreground)] font-bold">
            UC ID yüklerken hangi bilgilere ihtiyacım var?
          </h2>
          <p className="mt-2 text-[var(--text-gray)]">
            UC ID yüklerken, genellikle PUBG kullanıcı adınız ve PUBG ID'niz
            gereklidir. Bu bilgiler, hesap.com.tr üzerinden UC satın aldıktan
            sonra sizden istenecektir. Bu bilgiler, doğru hesaba UC'nin
            yüklenmesini sağlar. Bilgilerinizi doğru ve eksiksiz girdiğinizden
            emin olun.
          </p>
        </div>
        <div
          className="mb-4 p-4 rounded-lg bg-[var(--advert-card-bg)]"
        >
          <h2 className="text-xl text-[var(--foreground)] font-bold">
            Hesap.com.tr üzerinden UC ID yükleme güvenli mi?
          </h2>
          <p className="mt-2 text-[var(--text-gray)]">
            Evet, hesap.com.tr üzerinden UC ID yükleme işlemi tamamen
            güvenlidir. Hesap.com.tr, kullanıcıların kişisel bilgilerini ve
            finansal işlemlerini korumak için çeşitli güvenlik önlemleri alır.
            Ayrıca, hizmetlerimiz tamamen yasaldır ve PUBG'nin hizmet şartlarına
            uygundur.
          </p>
        </div>
        <div
          className="mb-4 p-4 rounded-lg bg-[var(--advert-card-bg)]"
        >
          <h2 className="text-xl text-[var(--foreground)] font-bold">
            UC ID yüklemesi ne kadar süre alır?
          </h2>
          <p className="mt-2 text-[var(--text-gray)]">
            UC yüklemesi genellikle hızlı bir işlemdir. Ancak, yoğunluk ve diğer
            faktörlere bağlı olarak yükleme süresi değişebilir. Genellikle,
            satın alım işleminden sonra UC'nin hesabınıza yüklenmesi birkaç
            dakika ile bir saat arasında bir süre alabilir. Eğer UC'niz uzun bir
            süre boyunca hesabınıza yüklenmezse, Hesap.com.tr müşteri hizmetleri
            ile iletişime geçmeniz önerilir.
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuestionAnswer;
