import React from "react";
import { FaEdit } from "react-icons/fa";
import Switch from "./switch";

const FormItem = ({
  type = "text",
  value,
  onChange,
  placeholder,
  Icon,
  isSwitch = false,
  switchValue = false,
  onSwitchChange,
}) => {
  return (
    <div className="relative w-full">
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full bg-[#1C1E29] text-white border border-gray-700 px-4 pr-12 py-2 rounded-md`}
      />

      {isSwitch ? (
        <div className="absolute right-2 top-1/2 -translate-y-1/2">
          <Switch checked={switchValue} onChange={onSwitchChange} />
        </div>
      ) : Icon ? (
        <Icon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      ) : null}
    </div>
  );
};

export default FormItem;
