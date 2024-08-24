import { FaLink, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { id, image, category, title, description, price,rating } = product || {};
  return (
    <div className="bg-white ring ring-slate-900/5 rounded-xl group">
      <div className="bg-white flexCenter m-1.5  py-10 rounded-xl ring ring-slate-200/20 shadow-sm relative">
        <img src={image} width={122} height={122} alt="productImg" className="object-contain aspect-square" />
        {/* new tg */}
        <span className={id ==1 || id==2 || id==3 ? "flex text-xs fobt-bold bg-[#e3f7fa] p-2 rounded-full absolute top-3 left-3": "hidden"}>NEW</span>
        <span className="flexCenter gap-x-1 text-sm font-bold bg-[#e3f7fa] p-1 px-2 rounded-full absolute top-3 left-3" ><FaStar className="text-yellow-500" />{rating.rate}</span>
        {/* cart btn */}
        <div className="absolute -bottom-4 right-3 flexCenter flex-col gap-2 bg-white p-1 rounded-full ring-1 ring-slate-900/5">
            <Link to={`/product/${id}`}>
            <FaLink className=""/>
            </Link>
        </div>
      </div>
      <div>
        <h5>{category}</h5>
        <h2>{title}</h2>
        <p>{description.slice(0,50)}</p>
      </div>
      <div>
        <h6>${price}</h6>
        <p>sales{rating.count}</p>
      </div>
    </div>
  );
};

export default ProductCard;
