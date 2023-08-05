import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState={
    items:[],
    totalAmount:0
}
const cartReducer = (state, action)=>{
    let updatedItem;
    let updatedItems;
    if(action.type==='ADD_ITEM')
    {
        const updatedTotalAmount = (+state.totalAmount) + (+action.item.price * +action.item.amount); 
        const existsItemToBeAddedId= state.items.findIndex(item=> item.id === action.item.id);
        const existsItemToBeAdded = state.items[existsItemToBeAddedId]
        
        if(existsItemToBeAdded)
        {
            updatedItem={
                ...existsItemToBeAdded,
                amount: existsItemToBeAdded.amount + action.item.amount
            }

            updatedItems = [...state.items];
            updatedItems[existsItemToBeAddedId] = updatedItem;
        }
        else{
            updatedItem = {...action.item};
            updatedItems = state.items.concat(action.item);
        }

        return{
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }

    if(action.type==="REMOVE_ITEM")
    {
        const itemToBeRemovedId= state.items.findIndex(item=> item.id === action.id);
        const itemToBeRemoved = state.items[itemToBeRemovedId]
        const updatedTotalAmount = (+state.totalAmount) - (+itemToBeRemoved.price); 
        
        

        if(itemToBeRemoved.amount === 1)
        {
            updatedItems = state.items.filter(item=> item.id !== action.id);
        }
        else
        {
            updatedItem = {...itemToBeRemoved, amount:itemToBeRemoved.amount-1}
            updatedItems = [...state.items];
            updatedItems[itemToBeRemovedId] = updatedItem;
        }
        return{
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }

    return defaultCartState;
}

const CartProvider = (props)=>{

    const [cartState, dispatchCartAction]=useReducer(cartReducer, defaultCartState);

    const addItemHandler =(item)=>{
        dispatchCartAction({type:'ADD_ITEM', item:item})
    };
    const removeItemHandler =(id)=>{
        dispatchCartAction({type:'REMOVE_ITEM', id:id})
    };

    const cartContext ={
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem:removeItemHandler
    }
    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;