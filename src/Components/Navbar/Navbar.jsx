import { Link } from "react-router-dom";
import NavItem from "../NavItem/NavItem";
import { useContext, useEffect, useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { GiShoppingBag } from "react-icons/gi";
import { SideContext } from "../../Context/SideContext";


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState(false);
    const {open, setOpen} = useContext(SideContext)
    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            window.scrollY > 40 ? setActive(true): setActive(false)
        })
    },[])
    return (
        <nav className={`fixed left-0 right-0 w-full  max-padd-container flexBetween z-10 transition-all duration-300 ${active ? "bg-white shadow-md py-4": "bg-transparent p-3"} `}>
            {/* nav logo */}
            <Link to="/">
            <h4 className="bold-24">Glam<span className="text-secondary">Store</span></h4>
            </Link>
            {/* nav right */}
            <div className="flexBetween gap-x-8 md:gap-x-20">
            {/* Nav Item for Desktop Devices*/}
            <NavItem containerStyle={"hidden md:flex gap-x-5 xl:gap-x-10 medium-15"} />
            {/* Nav Item for mobile devices */}
            <NavItem containerStyle={`${menuOpen ? "flex items-start flex-col gap-y-10 fixed top-20 right-8 p-12 bg-white rounded-3xl w-64 medium-16 ring-1 ring-slate-900/5 shadow-md transition-all duration-300 ": "flex item-start flex-col gap-y-12 fixed top-10 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 -right-[100%]"}`}/>
            {/* menu toggle button */}
            <div onClick={()=>setMenuOpen(!menuOpen)} className="md:hidden text-2xl hover:text-secondary cursor-pointer gap-x-3 sm:gap-x-8">
                {menuOpen ? <MdClose/>:<MdMenu/>}
            </div>
            {/* shopping bag */}
            <Link onClick={()=>setOpen(!open)} className="flex relative">
            <GiShoppingBag className="text-[25px]"/>
            <span className="bg-secondary text-white text-sm absolute -top-2.5 -right-2.5 flexCenter w-5 h-5 rounded-full shadow-md">0</span>
            </Link>
            {/* login button */}
            <button className="btn-outline rounded-full hover:bg-secondary hover:text-white hover:border-secondary transition-all duration-300">Login</button>
            </div>
        </nav>
    );
};

export default Navbar;