import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types"

export const CartContext = createContext(null)
const CartProvider = ({children}) => {
    const [carts, setCarts] = useState([]);
    const [total, setTotal] = useState(0)
    const [totalQuantity, setTotalQuantity] = useState(0)

    // total price calculating
    useEffect(()=>{
         const totalPrice = carts.reduce((prev, current) =>{
            return prev + current.price * current.quantity
         },0)
         setTotal(parseFloat(totalPrice).toFixed(2))
    },[carts])


    // total quantity calculation
    useEffect(()=>{
        const totalQuantity = carts.reduce((prev, current) =>{
           return prev + current.quantity 
        },0)
        setTotalQuantity(totalQuantity)
   },[carts])


    // add to cart
    const addToCart = (product)=>{
        const newProduct = {...product, quantity: 1}
        const cartItem = carts.find(item => item.id === product.id);
        if(cartItem){
            const newCarts = [...carts].map(item => {
                if(product.id === item.id){
                    return {...item, quantity: cartItem.quantity + 1}
                }else{
                    return item
                }
            })
            setCarts(newCarts)
        }else{
            setCarts([...carts, newProduct])
        }
    }

    // remove product from cart
    const removeProduct = (id)=>{
        const newCart = carts.filter(product => product.id !== id)
        setCarts(newCart)
    }

    // product quantity increment
    const incrementQuantity = (product)=>{
        addToCart(product)
    }
        

    // product quantity decrement
    const decrementQuantity = (id)=>{
        const cartItem = carts.find(item => item.id === id);
        if(cartItem){
            const newCarts = [...carts].map(product => {
                if(product.id === id){
                    return {...product, quantity: cartItem.quantity - 1}
                }
            })
            setCarts(newCarts)
        }
        if(cartItem.quantity <= 1){
            removeProduct(id)
        }
    }


    // clear cart
    const clearCart = ()=>{
        setCarts([])
    }


    // context value
    const contextValue = {
        addToCart,
        carts,
        removeProduct,
        incrementQuantity,
        decrementQuantity,
        total,
        clearCart,
        totalQuantity
    }
    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
};

CartProvider.propTypes ={
    children: PropTypes.node
}

export default CartProvider;