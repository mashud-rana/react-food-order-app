import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

import { useContext,useEffect,useState } from "react";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
    const [cartItems,setCartItems]=useContext(CartContext);
    const price =`$${props.price.toFixed(2)}`;

    const addToCartHandler=(amount)=>{
      const existingCartItemIndex=cartItems.findIndex(item=>item.id==props.id);
      if(existingCartItemIndex!=-1){
        const getExistingItem=cartItems[existingCartItemIndex];
        const updateItem={
          ...getExistingItem,
          amount:amount+getExistingItem.amount
        }
        cartItems[existingCartItemIndex]=updateItem;
        setCartItems(preVal=>[...preVal]);
      }else{
        setCartItems(preVal=>[...preVal,{
          id:props.id,
          name:props.name,
          amount:amount,
          price:props.price
        }]);
      }
      
    };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} id={props.id}></MealItemForm>
      </div>
    </li>
  );
};

export default MealItem;
