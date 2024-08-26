import { createContext, useState } from "react";
import PropTypes from "prop-types"

export const CartContext= createContext(null)
const CartProvider = ({children}) => {
    const [carts, setCarts] = useState([])
    // handle add cart items
    const handleAddCart = (product)=>{
        const newItem = {...product, quantity: 1}
        const cartItem = carts.find(item => item.id === product.id)
        if(cartItem){
            const newCart = [...carts].map(item => {
                if(item.id === product.id){
                    return {...item, quantity: item.quantity + 1}
                }else{
                    return item
                }
            })
            setCarts(newCart)
        }else{
            setCarts([...carts,newItem])
        }
    }
    console.log(carts)

    // context value
    const contextValue = {
        handleAddCart,
        carts
    }
    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
};

CartProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default CartProvider;