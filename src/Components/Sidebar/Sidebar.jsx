import { useContext } from "react";
import { SideContext } from "../../Context/SideContext";
import { IoMdArrowForward } from "react-icons/io";
import useCart from "../hooks/useCart";
import CartItem from "../CartItem/CartItem";
import { TbTrash } from "react-icons/tb";



const Sidebar = () => {
    const {open, handleClose} = useContext(SideContext)
    const {carts, total,clearCart, totalQuantity} = useCart()
    return (
        <div className={`${open ? "right-0":"-right-full"} w-full h-full bg-white fixed top-0 shadow-2xl sm:w-[55vw] md:w-[44] xl:max-w-[27vw] transition-all duration-300 x-20 lg:px-[35px] py-4 pb-6 `}>
            <div className="flexBetween py-6 mt-14 border-b">
            <div className="">Shopping Bag {totalQuantity}</div>
            {/* icon */}
            <div onClick={handleClose} className=" cursor-pointer w-8 h-8 bg-secondary rounded-full flexCenter text-white">
                <IoMdArrowForward className="text-2xl" />
            </div>
            </div>
            {/* carts item container */}
            <div className="flex flex-col gap-y-5 h-[335px] overflow-x-hidden overflow-y-auto">
                {carts.map(product => <CartItem key={product.id} product={product}/>)}
            </div>
             <div>
                <div className=" flexBetween pb-6">
            {/* total price */}
                <div>
                <span className="uppercase bold-16">Total = </span>
                <span>${total}</span>
                </div>
                {/* cart clear icon */}
                <TbTrash onClick={clearCart} className="text-2xl cursor-pointer"/>
            </div>
            <div className="flex flex-col gap-3">
                <button className="btn-light">View cart</button>
                <button className="btn-dark">Checkout</button>
            </div>
            </div>

        </div>
    );
};

export default Sidebar;