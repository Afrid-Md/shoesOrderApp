import Header from './Components/Items/Header';
import './App.css';
import Form from './Components/Form/Form';
import Items from './Components/Items/Items';
import { useState } from 'react';
import Cart from './Components/Cart/Cart';
import cartContext from './Components/CartContext/cart-context';
function App() {
  const [cart, HideCart]=useState(false);
  const[items, setItems]=useState([]);

  const addHandler=(Name,Des,Price,L,M,S)=>{
    setItems((prev)=>
      [...prev, {name:Name, description:Des, price:Price, sizeL:L, sizeM:M, sizeS:S}]
    )
  }

  const cartHander=()=>{
    HideCart(true);
  }

  const closeHanlder=()=>{
    HideCart(false);
  }
  return (
    <cartContext>
        <Header onClick={cartHander}/>
        <Form onAdd={addHandler}/>
        <Items items={items}/>
        <center>{cart && <Cart onClose={closeHanlder}/>}</center>
    </cartContext>
  );
}

export default App;
