import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-tertiary max-padd-container text-white py-12 rounded-xl "
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-center md:items-start">
          <Link to="/">
            <h3 className="bold-20 mb-3">
              Glam<span className="text-secondary">Store</span>
            </h3>
          </Link>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            voluptatibus animi aspernatur odit ad excepturi ipsa quo eum, harum
            inventore?
          </p>
        </div>
        <div>
          {/* quick links */}
          <h4 className="bold-20 mb-3">Quick Links</h4>
          <ul className="spacke-y-2 regular-15 text-gray-30">
            <li>
              <Link to="/" className="hover:text-secondary">
                Home
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-secondary">
                Categories
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-secondary">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-secondary">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        {/* E-commerce links */}
        <div className="flex flex-col ">
          <h4 className="bold-20 mb-3">Ecommerce Links</h4>
          <ul className="spacke-y-2 regular-15 text-gray-30">
            <li>
              <Link to="/" className="hover:text-secondary">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-secondary">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-secondary">
                Shipping Policy
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-secondary">
                Return Policy
              </Link>
            </li>
          </ul>
        </div>
        {/* contact informations */}
        <div className="flex flex-col">
          <h4 className="bold-20 mb-3">Contact Us</h4>
          <p>
            Email:{""}
            <a
              href="mailto:support@glamsotre.com"
              className="hover:text-secondary"
            >
              support@glamsotre.com
            </a>
          </p>
          <p>
            Phone:{""}
            <a href="tel:+1234567890" className="hover:text-secondary">
              1234567890
            </a>
          </p>
          <p>Address: 123 Glam Street, City, Country</p>
        </div>
      </div>
      {/* copyrignt */}
      <div className="flex justify-center  mt-8">
      <div>
      <hr className="h-[1px]  w-[350px] md:w-[600px] max-w-screen-sm  my-4 border-white" />
        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()} GlamSotre | All rights reserved
        </p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
