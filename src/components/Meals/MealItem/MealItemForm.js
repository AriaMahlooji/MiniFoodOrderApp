import { useContext, useRef } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';
import CartContext from '../../../store/cart-context'


const MealItemForm =(props)=>{
    const cartContext = useContext(CartContext);
    const inputRef = useRef();
    const addHandler=(event)=>{
        event.preventDefault();
        let amount = +inputRef.current.value;
        props.onAddToCart(amount);
    }
    return(
        <form className={classes.form}>
            <Input label= 'Amount' input={{
                id:"amount",
                type:'number',
                step:'1',
                min:'1',
                max:'5',
                defaultValue:'1'
            }} ref={inputRef}/>
            <button onClick={addHandler}>+ Add</button>
        </form>
    )
}

export default MealItemForm;