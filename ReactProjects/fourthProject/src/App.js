import logo from './logo.svg';
import './App.css';
import Header from "./Components/Meals/Header/Header";
import MealSummary from "./Components/Meals/MealSummary/MealSummary";
import AvailableMeals from "./Components/Meals/AvailableMeals/AvailableMeals";
import Cart from './Components/Meals/Cart/CartModal/Cart';
import { useState } from 'react';
import CartProvider from './Components/Store/CartProvider';

function App() {
  
const [isCartShown,setIsCartShown] = useState(false);

const CartVisibilityHandler = isVisible =>{
  console.log()
  setIsCartShown(isVisible);
}

  return (
    <CartProvider>
      {isCartShown && <Cart onClick={CartVisibilityHandler}></Cart>}
      <Header  onClick={CartVisibilityHandler}></Header>
      <MealSummary/>
      <AvailableMeals/>

    </CartProvider>
  );
}

export default App;
