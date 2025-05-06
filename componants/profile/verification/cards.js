"use client";

import React from "react";

const Verification = ({ title }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Email Doğrulama */}
        <div
          className="roulded-lg"
          style={{
            backgroundImage:
              "linear-gradient(135deg, var(--success), transparent 20%, transparent 80%, var(--success))",
            padding: "4px", // p-1 karşılığı
          }}
        >
          <div className="p-4 bg-[var(--list-box)] h-full rounded-lg text-white text-center">
            <h2 className="text-[55px] font-bold text-[var(--success)]">V1</h2>
            <p className="text-lg font-semibold mt-2">EMAIL DOĞRULAMA</p>
            <div className="text-xs mt-2 text-[var(--success)]">
              <p>Emailiniz başarılı şekilde doğrulandı.</p>
              <p>Doğrulanma Tarihi: 10/12/2022</p>
            </div>
          </div>
        </div>

        {/* Telefon Doğrulama */}
        <div
          className="roulded-lg"
          style={{
            backgroundImage:
              "linear-gradient(135deg, var(--alert), transparent 20%, transparent 80%, var(--alert))",
            padding: "4px", // p-1 karşılığı
          }}
        >
          <div className="p-4 bg-[var(--list-box)] h-full rounded-lg text-white text-center">
            <h2 className="text-[55px] font-bold text-[var(--alert)]">V2</h2>
            <p className="text-lg font-semibold mt-2">TELEFON DOĞRULAMA</p>
            <p className="mt-2 text-xs text-[var(--alert)]">
              Lütfen telefon numaranızı doğrulayınız.
            </p>
          </div>
        </div>

        {/* Kimlik Doğrulama */}
        <div
          className="roulded-lg"
          style={{
            backgroundImage:
              "linear-gradient(135deg, var(--success), transparent 20%, transparent 80%, var(--success))",
            padding: "4px", // p-1 karşılığı
          }}
        >
          <div className="p-4 bg-[var(--list-box)] h-full rounded-lg text-white text-center">
            <h2 className="text-[55px] font-bold text-[var(--success)]">V3</h2>
            <p className="text-lg font-semibold mt-2">KİMLİK DOĞRULAMA</p>
            <div className="text-xs mt-2 text-[var(--success)]">
              <p>TC kimlik numaranız başarılı şekilde doğrulandı.</p>
              <p>Doğrulanma Tarihi: 10/12/2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verification;
