import { NavLink } from "react-router-dom";

const NavItem = ({containerStyle}) => {
    return (
        <nav className={`${containerStyle}`}>
            <NavLink to="/" className="active-link">Home</NavLink>
                <a href="#shop">Shop</a>
                <a href="#contact">Contact</a>
        </nav>
    );
};

export default NavItem;