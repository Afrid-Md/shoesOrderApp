import classes from './Cart.module.css';
import cartContext from '../CartContext/cart-context';
import { useContext } from 'react';
function Cart(props){
    const cartCtx=useContext(cartContext);
    
    return(
        <div className={classes.cart}>
        <ul>
            {cartCtx.items.map(item=>(
                <li>{item.name} {item.sizeL} {item.sizeM} {item.sizeS} {item.price}</li>
            ))

            }
            
        </ul>
        <div className={classes.button}>
        <button onClick={props.onClose}>Close</button>
        <button>Order</button>
        </div>
        </div>
        
    )
}
export default Cart;