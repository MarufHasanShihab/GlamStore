import { useContext } from "react";
import { SideContext } from "../../Context/SideContext";
import { IoMdArrowForward } from "react-icons/io";
import { CartContext } from "../../Context/CartContext";
import CartItem from "../CartItem/CartItem";


const Sidebar = () => {
    const {open, handleClose} = useContext(SideContext)
    const {carts} = useContext(CartContext)
    return (
        <div className={`${open ? "right-0":"-right-full"} w-full h-full bg-white fixed top-0 shadow-2xl sm:w-[55vw] md:w-[44] xl:max-w-[27vw] transition-all duration-300 x-20 lg:px-[35px]`}>
            <div className="flexBetween py-6 mt-14 border-b">
            <div className="">Shopping Bag (0)</div>
            {/* icon */}
            <div onClick={handleClose} className=" cursor-pointer w-8 h-8 bg-secondary rounded-full flexCenter text-white">
                <IoMdArrowForward className="text-2xl" />
            </div>
            </div>
            {/* carts item container */}
            <div>
                {
                    carts?.map(cart => <CartItem key={cart.id} cart={cart}/>)
                }
            </div>
        </div>
    );
};

export default Sidebar;