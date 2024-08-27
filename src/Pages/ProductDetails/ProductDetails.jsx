import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../Context/ProductContext";
import useCart from './../../Components/hooks/useCart';
import Sidebar from "../../Components/Sidebar/Sidebar";


const ProductDetails = () => {
    const {id} = useParams()
    const {products} = useContext(ProductsContext);
    const {addToCart} = useCart()
    const product = products.find(product => product.id === parseInt(id));
    const {image, title, price, description} = product || {};

    return (
        <div className="max-padd-container py-28 xs:py-32">
            <div className="flex flex-col xl:flex-row">
                <div className="flex-1 flexCenter">
                    <img src={image} width={255} height={255} className="object-contain aspect-square p-1"/>
                </div>
                <div className="flex-1">
                    <h3 className="h3">{title}</h3>
                    <h5 className="bold-24">${price}</h5>
                    <p className="my-8">{description}</p>
                    <button onClick={()=> addToCart(product)} className="btn-dark">Add to Cart</button>
                </div>
            </div>
            <Sidebar/>
        </div>
    );
};

export default ProductDetails;