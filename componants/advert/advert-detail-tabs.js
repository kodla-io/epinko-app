import { useState } from "react";
import {
  FaClipboardList,
  FaStar,
  FaQuestionCircle,
  FaCommentDots,
  FaGavel,
} from "react-icons/fa";

const tabs = [
  { id: 1, label: "İlan Açıklaması", icon: <FaClipboardList /> },
  { id: 2, label: "Lorem Ipsum", icon: <FaStar /> },
  { id: 3, label: "Soru Cevap", icon: <FaQuestionCircle /> },
  { id: 4, label: "Satıcı Yorumları", icon: <FaCommentDots /> },
  { id: 5, label: "Satın Alma Kuralları", icon: <FaGavel /> },
];

const MultipleTabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="container mx-auto my-8">
      <div className="w-full">
        {/* Tabs */}
        <div className="flex overflow-x-auto bg-[var(--advert-list-bg)] rounded-t-lg px-2 py-3 gap-2 scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-md whitespace-nowrap transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-[#3f3f5e]"
                  : "bg-[#2a2a3b] hover:bg-[#3a3a50]"
              }`}
            >
              {tab.icon}
              <span className="text-sm font-medium">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-[var(--advert-list-bg)] p-4 rounded-b-lg max-h-[200px] min-h-[200px] mt-1">
          <p>
            {`Bu ${
              tabs.find((t) => t.id === activeTab).label
            } içeriğidir. Buradaki yazıları istediğiniz gibi değiştirebilirsiniz. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MultipleTabs;
