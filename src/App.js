import { Fragment,useState } from 'react';

import Header from './components/Layout/Header.jsx'
import Meals from './components/Meals/Meals.jsx';
import Cart from './components/Cart/Cart'
import CartProvider from './store/Cart-Provider'

function App() {
  const [cartIsShow, setCartIsShown]=useState(false);

  const showCartHandler=()=>{
    setCartIsShown(true);
  };

  const hideCartHandler=()=>{
    setCartIsShown(false);
  }
  return (
    <CartProvider>
      {cartIsShow && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}></Header>
      <main>
         <Meals></Meals>
      </main>
     
    </CartProvider>
  );
}

export default App;
