import { useContext } from "react";
import { ProductsContext } from "../../Context/ProductContext";
import ProductCard from "../ProductCard/ProductCard";


const Shop = () => {
    const {products} = useContext(ProductsContext)
    // filtering  only means and women category product
    const filterProducts = products.filter(item => {
        return(
            item.category === "men's clothing" || item.category === "women's clothing"
        )
    })
    return (
        <section id="shop" className="max-padd-container py-20 bg-[#f8f7f4]">
            <h3 className="h3">Our Products</h3>
            <hr className="h-[2px] md:w-1/2 max-w-96 bg-gradient-to-l from-transparent via-black to-black mb-24 border-none rounded" />
            {/* Product container  */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mx-auto">
                {
                    filterProducts?.map(product => <ProductCard key={product.id} product={product}/>)
                }
            </div>
        </section>
    );
};

export default Shop;