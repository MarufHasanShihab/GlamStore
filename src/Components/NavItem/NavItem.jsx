import PropTypes from "prop-types"
import { Link } from "react-router-dom";
const NavItem = ({containerStyle}) => {
    return (
        <nav className={`${containerStyle}`}>
            <Link to="/" className="active-link" >Home</Link>
                <a href="#shop">Shop</a>
                <a href="#contact">Contact</a>
        </nav>
    );
};

NavItem.propTypes = {
    containerStyle: PropTypes.string.isRequired
}

export default NavItem;