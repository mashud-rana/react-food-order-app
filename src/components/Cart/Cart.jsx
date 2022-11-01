import { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import cartContext from "./../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const [cartItems, setCartItems] = useContext(cartContext);

  const totalAmount = cartItems.reduce((curNumber, item) => {
    return curNumber + item.price * item.amount;
  }, 0);

  const removeCartItemHandler = (id) => {
    const existingCartItemIndex=cartItems.findIndex(item=>item.id==id);
    const getExistingItem = cartItems[existingCartItemIndex];

    const updateItem = {
      ...getExistingItem,
      amount:getExistingItem.amount-1
    };

    cartItems[existingCartItemIndex] = updateItem;
    setCartItems((preVal) => [...preVal]);
  };

  const addCartIteHandler = (getItem) => {
    const existingCartItemIndex=cartItems.findIndex(item=>item.id==getItem['id']);
    const getExistingItem = cartItems[existingCartItemIndex];
    const updateItem = {
      ...getExistingItem,
      amount: getItem['amount'] + 1,
    };
    cartItems[existingCartItemIndex] = updateItem;
    setCartItems((preVal) => [...preVal]);

  };

  const deleteCartItemHandler=(id)=>{
    const updateCartItem=cartItems.filter(item=>item.id!=id);
    setCartItems([...updateCartItem]);
  }

  const cartItemsShow = (
    <ul className={classes["cart-items"]}>
      {cartItems.map((item) => (
        <CartItem
          disable={item.amount==1?true:false}
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onRemove={removeCartItemHandler}
          onAdd={addCartIteHandler}
          removeItem={deleteCartItemHandler}
        ></CartItem>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItemsShow}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button
          onClick={() => props.onClose()}
          className={classes["button--alt"]}
        >
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
