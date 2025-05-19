// components/ProductCard.jsx
import { FaRegEye } from "react-icons/fa";
import Link from "next/link";
import { AiOutlineSafety } from "react-icons/ai";

const ProductCard = ({ data }) => {
  return (
    <Link href="#">
      <div className="p-2 rounded-t-md bg-[var(--advert-card-bg)]">
        <div className="overflow-hidden">
          <div className="relative">
            <img
              src={data.image}
              alt={`Card ${data.title}`}
              className="w-full h-full object-cover min-h-[155px] max-h-[155px] md:min-h-[202px] md:max-h-[202px] bg-gradient-to-tl rounded-md"
            />
            {data.isVitrin && (
              <span
                className="absolute top-[75px] left-[-21px] text-white w-[135px] text-center py-[2px] px-[30px] text-xs font-bold transform -rotate-45 origin-top-left"
                style={{ backgroundColor: data.vitrinColor }}
              >
                {data.vitrinText}
              </span>
            )}
            <div className="absolute top-2 right-2">
              <AiOutlineSafety className="w-8 h-8" />
            </div>
          </div>
          <div className="text-white p-2 w-full">
            <h3 className="text-sm font-bold clamp-2 max-h-[40px] min-h-[40px] text-left">
              {data.title}
            </h3>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center border-t border-t-[var(--advert-card-border)] bg-[var(--advert-card-bg)]">
        <div className="text-md font-bold text-white p-2">
          {data.price.toFixed(2)}₺
        </div>
        <div className="p-2">
          <div className="flex items-center rounded-full bg-[#20c65c33] text-[var(--success)] p-1">
            <FaRegEye className="w-4 h-4 mr-1" />
            <span className="text-[11px]">{data.viewCount}</span>
          </div>
        </div>
      </div>
      <div className="relative bg-[var(--advert-card-bg)] rounded-b-md">
        <div className="flex items-center w-full (bg-[#0000007a]) p-2">
          <img
            src={data.sellerImage}
            alt="Seller"
            className="!w-6 !h-6 rounded-md"
          />
          <div className="ml-2">
            <p className="text-sm font-bold truncate max-w-[60px] md:max-w-[100%]">
              {data.sellerName}
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 p-0">
          <img
            src={data.categoryImage}
            alt="Category"
            className="!w-10 !h-10 rounded-md"
          />
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
