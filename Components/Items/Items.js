import { useContext } from "react"
import cartContext from "../CartContext/cart-context"
 function Items(props){
    const cartctx=useContext(cartContext);
    const items = props.items.map((item)=>(
        <li id={Math.random()}>{item.name} {item.description} Rs.{item.price} <button onClick={cartctx.addItem(item)}>Buy Large({item.sizeL})</button>
        <button>Buy Medium({item.sizeM})</button>
        <button>Buy Small({item.sizeS})</button></li>)
    )
    return(
        <ul>
            {items}
        </ul>
    )
 }

 export default Items