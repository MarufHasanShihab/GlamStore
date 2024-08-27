import { FaLink, FaPlus, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import useCart from "../hooks/useCart";

const ProductCard = ({ product }) => {
  const { id, image, category, title, description, price, rating } =
    product || {};
    const {addToCart} = useCart()
  return (
    <div className="bg-white ring ring-slate-900/5 rounded-xl group">
      <div className="bg-white flexCenter m-1.5  py-10 rounded-xl ring ring-slate-200/20 shadow-sm relative">
        <img
          src={image}
          width={122}
          height={122}
          alt="productImg"
          className="object-contain aspect-square"
        />
        {/* new tg */}
        <span
          className={
            id == 1 || id == 2 || id == 3
              ? "flex text-xs fobt-bold bg-[#e3f7fa] p-2 rounded-full absolute top-3 left-3"
              : "hidden"
          }
        >
          NEW
        </span>
        <span className="flexCenter gap-x-1 text-sm font-bold bg-[#e3f7fa] p-1 px-2 rounded-full absolute top-3 right-3">
          <FaStar className="text-yellow-500" />
          {rating.rate}
        </span>
        {/* cart btn */}
        <div className="absolute -bottom-4 right-3 flexCenter flex-col gap-2 bg-white p-1 rounded-full ring-1 ring-slate-900/5">
          <Link
            to={`/product/${id}`}
            className="hidden group-hover:flex transition-all duration-300"
          >
            <FaLink className="bg-secondary text-white h-7 w-7 p-1.5 rounded-full cursor-pointer" />
          </Link>
          <FaPlus onClick={()=> addToCart(product)} className="bg-secondary text-white h-7 w-7 p-1.5 rounded-full cursor-pointer" />
        </div>
      </div>
      <div className="p-3">
        <h5 className="medium text-gray-900/50 mb-1">{category}</h5>
        <h2 className="bold-15 mb-1 line-clamp-1">{title}</h2>
        <p className="line-clamp-2">{description.slice(0, 55)+"...."}</p>

        <div className="flexBetween my-1">
          <h6 className="bold-16 text-secondary">${price}</h6>
          <p className="text-xs">sales{rating.count}</p>
        </div>
      </div>
    </div>
  );
};
ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;
