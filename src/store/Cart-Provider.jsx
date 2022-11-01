import { useState } from "react";
import CartContext from "./cart-context";



const CartProvider = (props) => {

    const [cartItems,setCartItems]=useState([]);

    return ( 
        <CartContext.Provider value={[cartItems,setCartItems]}>
            {props.children}
        </CartContext.Provider>
     );
}
 
export default CartProvider;