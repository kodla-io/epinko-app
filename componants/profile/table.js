import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaPlusCircle, FaMinusCircle } from "react-icons/fa";

export default function AdvertTable({ headers, data }) {
  const [expandedRow, setExpandedRow] = useState(null);
  const [visibleCols, setVisibleCols] = useState(7);

  const handleResize = () => {
    const width = window.innerWidth;
    if (width < 640) setVisibleCols(2);
    else if (width < 768) setVisibleCols(2);
    else if (width < 1024) setVisibleCols(4);
    else if (width < 1280) setVisibleCols(5);
    else if (width < 1536) setVisibleCols(6);
    else setVisibleCols(headers.length);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleRow = (index) => {
    setExpandedRow(expandedRow === index ? null : index);
  };

  return (
    <table className="min-w-full text-left text-white bg-[var(--advert-list-bg)] rounded-sm">
      <thead>
        <tr>
          {headers.slice(0, visibleCols).map((header) => (
            <th key={header.key} className="p-4">
              {header.label}
            </th>
          ))}
          {visibleCols < headers.length && <th className="p-4"></th>}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <React.Fragment key={index}>
            <tr className="hover:bg-[#3A3B51] cursor-pointer">
              {headers.slice(0, visibleCols).map((header) => (
                <td key={header.key} className="p-4">
                  {header.key === "resim" ? (
                    <>
                      <div className="flex flex-nowrap items-center gap-2">
                        <img
                          src={item.resim}
                          alt="İlan"
                          className="w-16 h-16 rounded-sm object-cover"
                        />
                        <span>{item.imgText}</span>
                      </div>
                    </>
                  ) : header.key === "icon" ? (
                    <span className="flex gap-2 items-center">
                      {item.icon} {item.iconText}
                    </span>
                  ) : header.key === "iconSecond" ? (
                    <span className="flex gap-2 items-center">
                      {item.iconSecond} {item.iconSecondText}
                    </span>
                  ) : header.key === "iconThird" ? (
                    <span className="flex gap-2 items-center">
                      {item.iconThird} {item.iconThirdText}
                    </span>
                  ) : header.key === "durum" ? (
                    <div
                      className={`px-2 py-1 rounded font-semibold text-center`}
                      style={{
                        backgroundColor: item.statusColor,
                        color: item.statusTextColor,
                      }}
                    >
                      <span>{item.status}</span>
                    </div>
                  ) : header.key === "animation" ? (
                    <div
                      className={`px-2 py-1 rounded font-semibold text-center ${
                        item.scaleAnimation ? "pulse-scale" : ""
                      }`}
                      style={{
                        backgroundColor: item.animationButtonColor,
                      }}
                    >
                      <span>{item.animationText}</span>
                    </div>
                  ) : header.key === "actions" ? (
                    <div className="flex items-center gap-2">
                      <button onClick={() => handleSelectRequest(item.no)}>
                        <FaEdit />
                      </button>
                      <button onClick={() => alert(`Sil: ${item.no}`)}>
                        <FaTrash />
                      </button>
                    </div>
                  ) : header.key === "button" ? (
                    item.buttonActive ? (
                      <div>
                        <button
                          className="px-2 py-1 rounded-md"
                          onClick={() => alert(item.buttonTab)}
                          style={{
                            backgroundColor: item.buttonColor,
                          }}
                        >
                          <span>{item.buttonText}</span>
                        </button>
                      </div>
                    ) : (
                      <span>-------</span>
                    )
                  ) : (
                    item[header.key]
                  )}
                </td>
              ))}
              {visibleCols < headers.length && (
                <td onClick={() => toggleRow(index)} className="p-4">
                  <button>
                    {expandedRow === index ? (
                      <FaMinusCircle />
                    ) : (
                      <FaPlusCircle />
                    )}
                  </button>
                </td>
              )}
            </tr>

            {/* Genişletilen Satır */}
            <tr
              style={{
                maxHeight: expandedRow === index ? "1000px" : "0",
                opacity: expandedRow === index ? "1" : "0",
                overflow: "hidden",
                transition: "max-height 0.5s ease, opacity 0.5s ease",
              }}
            >
              <td
                colSpan={visibleCols + 1}
                className="bg-[var(--advert-list-bg)]"
              >
                {expandedRow === index &&
                  headers.slice(visibleCols).map((header) => (
                    <div
                      key={header.key}
                      className="mb-1 px-4 py-3 flex items-center gap-2"
                    >
                      <strong>{header.label}:</strong>{" "}
                      {header.key === "resim" ? (
                        <div className="flex flex-nowrap items-center gap-2">
                          <img
                            src={item.resim}
                            alt="İlan"
                            className="w-16 h-16 rounded-sm object-cover"
                          />
                          <span>{item.imgText}</span>
                        </div>
                      ) : header.key === "icon" ? (
                        <span className="flex gap-2 items-center">
                          {item.icon} {item.iconText}
                        </span>
                      ) : header.key === "iconSecond" ? (
                        <span className="flex gap-2 items-center">
                          {item.iconSecond} {item.iconSecondText}
                        </span>
                      ) : header.key === "iconThird" ? (
                        <span className="flex gap-2 items-center">
                          {item.iconThird} {item.iconThirdText}
                        </span>
                      ) : header.key === "durum" ? (
                        <span
                          style={{
                            backgroundColor: item.statusColor,
                            color: item.statusTextColor,
                          }}
                          className="px-2 py-1 rounded"
                        >
                          {item.status}
                        </span>
                      ) : header.key === "actions" ? (
                        <div className="flex items-center gap-2">
                          <button onClick={() => handleSelectRequest(item.no)}>
                            <FaEdit />
                          </button>
                          <button onClick={() => alert(`Sil: ${item.no}`)}>
                            <FaTrash />
                          </button>
                        </div>
                      ) : header.key === "button" ? (
                        item.buttonActive ? (
                          <div>
                            <button
                              className="px-2 py-1 rounded-md"
                              onClick={() => alert(item.buttonTab)}
                              style={{
                                backgroundColor: item.buttonColor,
                              }}
                            >
                              <span>{item.buttonText}</span>
                            </button>
                          </div>
                        ) : (
                          <span>-------</span>
                        )
                      ) : (
                        item[header.key]
                      )}
                    </div>
                  ))}
              </td>
            </tr>
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
}
