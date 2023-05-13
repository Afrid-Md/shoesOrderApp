import classes from './Button.module.css';
import CartIcon from "../Cart/CartIcon"
function Button(props){
    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>0</span>
        </button>
    )
}
export default Button;