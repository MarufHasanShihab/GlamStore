import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types"

export const ProductsContext = createContext(null)
const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
       const fetchProducts = async()=>{
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        setProducts(data)
       }
       fetchProducts()
    },[])
    return (
        <ProductsContext.Provider value={{products}}>
            {children}
        </ProductsContext.Provider>
    );
};

ProductProvider.propTypes = {
    children: PropTypes.node.isRequired
}


export default ProductProvider;