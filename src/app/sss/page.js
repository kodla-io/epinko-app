"use client";

import React, { useState } from "react";
import {
  FaQuestion,
  FaRegListAlt,
  FaMoneyCheckAlt,
  FaPlus,
  FaMinus,
} from "react-icons/fa";

const SSS = () => {
  const tabsData = [
    { name: "Lorem Ipsum", icon: <FaQuestion /> },
    { name: "Diğer Konu", icon: <FaRegListAlt /> },
    { name: "Başka Konu", icon: <FaRegListAlt /> },
    { name: "Nakit Çek", icon: <FaMoneyCheckAlt /> },
  ];

  const contentData = {
    "Lorem Ipsum": [
      {
        question: "Lorem Ipsum nedir?",
        answer:
          "Lorem Ipsum, matbaacılık ve dizgi endüstrisinde kullanılan bir taslak metin olarak hizmet veren bir satır boşluğu olan, keyfi bir Latince kelimeler yekunu.",
      },
      {
        question: "Lorem Ipsum nasıl kullanılır?",
        answer:
          "Dizgi ya da grafik tasarımında yer tutucu metin olarak kullanılır.",
      },
    ],
    "Diğer Konu": [
      {
        question: "Bu konu neden önemli?",
        answer:
          "Bu konunun önemi metin yerleşimini ve font seçimlerini daraltmadan tasarım yapabilme özgürlüğü sunar.",
      },
      {
        question: "Bu konudan hangi avantajlar sağlanır?",
        answer: "Dikkat dağıtıcı ögeleri minimize ederek odaklanmayı arttırır.",
      },
    ],
    "Başka Konu": [
      {
        question: "Bu konunun tarihçesi nedir?",
        answer:
          "Tarihi 1500'lü yıllara kadar uzanır ve geliştirilen dizgi makineleri ile birlikte kullanımı yaygınlaşmıştır.",
      },
      {
        question: "Bu konu modern çağda nasıl kullanılır?",
        answer:
          "Özellikle web ve grafik tasarımda sıkça karşılaşılan bir yer tutucu metin.",
      },
    ],
    "Nakit Çek": [
      {
        question: "Nakit Çek nasıl alınır?",
        answer:
          "Finansal işlemler sonrası bankalardan veya atm'lerden elle yazılıp verilen çekle alınabilir.",
      },
      {
        question: "Nakit Çek kullanmanın avantajları nelerdir?",
        answer:
          "Kolaylıkla ödeme yapabilme imkanı sağlar ve postamatikler ile kolayca işlem yapılabilir.",
      },
    ],
  };
  const [openQuestions, setOpenQuestions] = useState({});
  const [activeTab, setActiveTab] = useState(tabsData[0].name);

  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="my-16">
      <div className="container m-auto">
        <div className="flex flex-wrap md:flex-nowrap">
          {/* Sol kısım: Tablar */}
          <div className="bg-[var(--advert-list-bg)] p-4 min-w-[100%] mb-3 md:min-w-[200px]">
            <h2 className="text-xl mb-4 text-[var(--success)]">
              SIKÇA SORULAN SORULAR
            </h2>
            <ul>
              {tabsData.map((tab, index) => (
                <li
                  key={index}
                  className={`flex items-center p-2 my-2 cursor-pointer rounded ${
                    activeTab === tab.name
                      ? "text-[var(--success)] bg-gray-700"
                      : ""
                  }`}
                  onClick={() => setActiveTab(tab.name)}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.name}
                </li>
              ))}
            </ul>
          </div>
          {/* Sağ kısım: İçerik */}
          <div className="flex-1 p-4">
            {(contentData[activeTab] || []).map((content, index) => (
              <div
                key={index}
                className="mb-4 rounded-lg overflow-hidden transition-all duration-300 bg-[var(--advert-list-bg)]"
              >
                <div
                  className="flex justify-between items-center p-4 cursor-pointer border-b border-gray-300"
                  onClick={() => toggleQuestion(index)}
                >
                  <h2 className="font-semibold">{content.question}</h2>
                  <span>{openIndex === index ? <FaMinus /> : <FaPlus />}</span>
                </div>

                <div
                  className={`px-4 overflow-hidden transition-all duration-500 ${
                    openIndex === index ? "max-h-96 py-4" : "max-h-0"
                  }`}
                >
                  <p className="text-sm">{content.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SSS;
