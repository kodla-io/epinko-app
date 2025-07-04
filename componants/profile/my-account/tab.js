import React, { useState } from "react";
import { FaCheckSquare } from "react-icons/fa";
import { IoIosAlert } from "react-icons/io";
import Billing from "../billing/form";

export default function MyAccount() {
  const [billingModalOpen, setBillingModalOpen] = useState(false);
  const [billingModalData, setBillingModalData] = useState({});

  const handleBillingCheckbox = (e) => {
    if (e.target.checked) {
      setBillingModalData({
        companyName: name + " " + surname,
        phone1: telNo,
      });
      setBillingModalOpen(true);
    }
  };

  const [name, setName] = useState("Epinko"); // default değerleri istersen özelleştirirsin
  const [surname, setsurname] = useState("Epinko");
  const [telNo, setTelNo] = useState("90555 555 5555");

  return (
    <div id="my-account">
      <div className="flex items-center space-x-4">
        <h2
          style={{ color: "var(--foreground)" }}
          className="text-white text-[30px] py-2 font-bold px-4"
        >
          HESABIM
        </h2>
        <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 to-green-500" />
      </div>
      <div className="bg-[var(--profile-tab-bg)] p-4 rounded-lg">
        <div className="flex md:flex-row flex-col space-x-4 mb-2 md:mb-4">
          <div className="flex-1">
            <label className="block text-sm mb-3">Ad</label>
            <input
              type="text"
              className="w-full p-3 rounded-lg text-white border-none focus:outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm mb-3">Soyad</label>
            <input
              type="text"
              className="w-full p-3 rounded-lg text-white border-none focus:outline-none"
              value={surname}
              onChange={(e) => setsurname(e.target.value)}
              disabled
            />
          </div>
        </div>

        <div className="flex md:flex-row flex-col space-x-4 mb-2 md:mb-4">
          <div className="flex-1">
            <label className="block text-sm mb-3">Kullanıcı adı</label>
            <input
              type="text"
              placeholder="@epinko"
              className="w-full p-3 rounded-lg text-white border-none focus:outline-none"
              disabled
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center mb-3 justify-between w-full">
              <label className="block text-sm">Telefon</label>
              <div className="flex items-center text-sm text-[var(--success)]">
                <FaCheckSquare className="w-4 h-4 mr-1" />
                <span>Doğrulandı</span>
              </div>
            </div>
            <input
              type="text"
              className="w-full p-3 rounded-lg text-white border-none focus:outline-none"
              value={telNo}
              onChange={(e) => setTelNo(e.target.value)}
              disabled
            />
          </div>
        </div>

        <div className="flex md:flex-row flex-col space-x-4 mb-2 md:mb-4">
          <div className="flex-1">
            <div className="flex items-center mb-3 justify-between w-full">
              <label className="block text-sm ">TC Kimlik Numarası</label>
              <div className="flex items-center text-sm text-[var(--alert)]">
                <IoIosAlert className="w-4 h-4 mr-1" />
                <span>Doğrula</span>
              </div>
            </div>
            <input
              type="text"
              placeholder="Kimlik Bilgilerinizi Doğrulayınız"
              className="w-full p-3 rounded-lg text-white border-none focus:outline-none"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center mb-3 justify-between w-full">
              <label className="block text-sm ">E-Mail Adresi</label>
              <div className="flex items-center text-sm text-[var(--success)]">
                <FaCheckSquare className="w-4 h-4 mr-1" />
                <span>Doğrulandı</span>
              </div>
            </div>
            <input
              type="text"
              placeholder="epinko@epinko.com.tr"
              className="w-full p-3 rounded-lg text-white border-none focus:outline-none"
              disabled
            />
          </div>
        </div>

        <label className="flex items-center gap-2 cursor-pointer select-none">
          <input
            type="checkbox"
            className="!w-4 !h-4"
            onChange={handleBillingCheckbox}
          />
          <span className="text-[var(--text-gray)] text-sm">
            Fatura Bilgilerimi Oluştur
          </span>
        </label>
      </div>
      <div className="mt-3">
        <Billing
          title="Fatura Adreslerim"
          externalModalOpen={billingModalOpen}
          externalModalData={billingModalData}
          onExternalModalClose={() => setBillingModalOpen(false)}
        />
      </div>
    </div>
  );
}
