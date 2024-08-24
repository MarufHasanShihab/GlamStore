import PropTypes from "prop-types"
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

NavItem.propTypes = {
    containerStyle: PropTypes.string.isRequired
}

export default NavItem;