
import classes from './HeaderCartButton.module.css'
import CartIcon from './../Cart/CartIcon'


import { Fragment,useContext,useEffect,useState } from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {

    const [cartItems,setCartItems]=useContext(CartContext);
    const [btnClasses,setBtnClassesHandler]=useState(classes.button);
    const numberOfCartItems=cartItems.reduce((curNumber,item)=>{
        return curNumber+item.amount;
    },0);

    useEffect(() => {
        setBtnClassesHandler(classes.button+' '+classes.bump );

        setTimeout(() => {
            setBtnClassesHandler(classes.button);
        }, 300);

      },[cartItems]);

    

    return ( 
        <Fragment>
            <button onClick={()=>props.onClick()} className={btnClasses}>
                <span className={classes.icon}>
                    <CartIcon/>
                </span>
                <span>
                    Your Cart
                </span>
                <span className={classes.badge}>
                    {numberOfCartItems}
                </span>
            </button>
        </Fragment>
     );
}
 
export default HeaderCartButton;