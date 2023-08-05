import {useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {

  const [isCartShown, setCartShown] = useState(false);
  const showCartHandler=()=>{setCartShown(true)}
  const hideCartHandler=()=>{setCartShown(false)};

  return (
    <CartProvider>
      {isCartShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <Meals/>
    </CartProvider>
  );
}

export default App;
