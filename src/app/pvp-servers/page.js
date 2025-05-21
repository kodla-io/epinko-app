"use client";

import { MdHealthAndSafety } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";

const Servers = [
  {
    resim: "https://placehold.co/150",
    imgText: "Knight-59",
    scaleAnimation: true,
    animationText: "YAYINDA",
    animationButtonColor: "var(--label1)",
    icon: <MdHealthAndSafety className="w-6 h-6" />,
    iconText: "Belirtilmemiş",
    iconSecond: <FaCalendarAlt className="w-6 h-6" />,
    iconSecondText: "2024-12-25	",
    iconThird: <FaCalendarAlt className="w-6 h-6" />,
    iconThirdText: "2024-12-25	",
    status: "PK SERVER",
    statusColor: "var(--label1)",
    system: "PC",
  },
  {
    resim: "https://placehold.co/150",
    imgText: "Knight-59",
    scaleAnimation: true,
    animationText: "YAYINDA",
    animationButtonColor: "var(--label1)",
    icon: <MdHealthAndSafety className="w-6 h-6" />,
    iconText: "Soacs",
    iconSecond: <FaCalendarAlt className="w-6 h-6" />,
    iconSecondText: "2024-12-25	",
    iconThird: <FaCalendarAlt className="w-6 h-6" />,
    iconThirdText: "2024-12-25	",
    status: "Myko",
    statusColor: "var(--label1)",
    system: "PC",
  },
  {
    resim: "https://placehold.co/150",
    imgText: "Knight-59",
    scaleAnimation: false,
    animationText: "YAKINDA",
    animationButtonColor: "var(--gray-text)",
    icon: <MdHealthAndSafety className="w-6 h-6" />,
    iconText: "Soacs",
    iconSecond: <FaCalendarAlt className="w-6 h-6" />,
    iconSecondText: "2024-12-25	",
    iconThird: <FaCalendarAlt className="w-6 h-6" />,
    iconThirdText: "2024-12-25	",
    status: "Myko",
    statusColor: "var(--label1)",
    system: "PC",
  },
  {
    resim: "https://placehold.co/150",
    imgText: "Knight-59",
    scaleAnimation: false,
    animationText: "YAKINDA",
    animationButtonColor: "var(--gray-text)",
    icon: <MdHealthAndSafety className="w-6 h-6" />,
    iconText: "RogACS",
    iconSecond: <FaCalendarAlt className="w-6 h-6" />,
    iconSecondText: "2024-12-25	",
    iconThird: <FaCalendarAlt className="w-6 h-6" />,
    iconThirdText: "2024-12-25	",
    status: "24x Homeko	",
    statusColor: "var(--label1)",
    system: "PC",
  },
];

const headers = [
  { key: "resim", label: "SERVER" },
  { key: "animation", label: "DURUM" },
  { key: "icon", label: "GÜVENLİK" },
  { key: "iconSecond", label: "Beta Tarihi	" },
  { key: "iconThird", label: "Official Tarihi	" },
  { key: "durum", label: "OYUN TÜRÜ" },
  { key: "system", label: "SİSTEM" },
];

import Table from "../../../componants/profile/table";

export default function PVPServers() {
  return (
    <div className="container m-auto space-y-2 py-4 md:py-12">
      <div className="flex items-center space-x-4 py-2">
        <h2
          style={{ color: "var(--foreground)" }}
          className="text-[30px] py-2 font-bold"
        >
          PVP SERVERLAR
        </h2>
        <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 hidden md:block to-green-500" />
      </div>
      <Table headers={headers} data={Servers} />
    </div>
  );
}
