import { useReducer } from "react";
import cartContext from "./cart-context";

const defaultCart={
    items:[],
    totalAmount:0
}

const cartReducer=(state, action)=>{
    if(action.type==='ADD'){
        const updatedTotalAmount=state.totalAmount+ action.item.price*action.item.amount;
        const existingCartItemIndex=state.items.findIndex((item)=>item.id===action.id);
        const existingCartItem=state.items[existingCartItemIndex];
        let updatedItems;
        if(existingCartItem){
            const updatedItem={
                ...existingCartItem,
                sizeL:existingCartItem.sizeL,
                sizeM:existingCartItem.sizeM,
                sizeS:existingCartItem.sizeS,
                amount:existingCartItem.amount+action.item.amount
            }
            updatedItems=[...state.items];
            updatedItems[existingCartItemIndex]=updatedItem;
        }
        else{
            updatedItems=state.items.concat(action.item)
        }
        return{
            items:updatedItems,
            totalAmount:updatedTotalAmount
        }
    }
    
}
function cartProvider(){
    const [cartState, dispatchCart]=useReducer(cartReducer,defaultCart)

    const addItemToCartHandler=(item)=>{
        dispatchCart({type:'ADD', item:item})
    }
    const removeItemFromCartHandler=(id)=>{
        dispatchCart({type:'REMOVE', id:id})
    }
    const CartContext={
        items:cartState.items,
        totalAmount,
        addItem:addItemToCartHandler,
        removeItem:removeItemFromCartHandler
    }
    return(
        <cartContext.Provider value={CartContext}>
            {props.children}
        </cartContext.Provider>
    )
}

export default cartProvider;