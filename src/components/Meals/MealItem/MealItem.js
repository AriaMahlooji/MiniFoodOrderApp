import { useContext } from 'react';
import classes from '../MealItem/MealItem.module.css'
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';


const MealItem=(props)=>{
    const price = `$${props.price.toFixed(2)}`
    const cartCTX = useContext(CartContext);

    const addToCartHandler=(amount)=>{
        cartCTX.addItem({
            id: props.id,
            amount: amount,
            price: props.price,
            name: props.name
        });
    }

    return <li className={classes.meal}>
        <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
            <MealItemForm onAddToCart={addToCartHandler} {...props}/>
        </div>
    </li>
}

export default MealItem;