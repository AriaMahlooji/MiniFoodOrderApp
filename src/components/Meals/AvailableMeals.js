import dummyMeals from '../../dummy/dummyMeals';
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';

const AvailableMeals=()=>{

        
       let mealsList = dummyMeals.meals.map(meal=><MealItem 
        key ={meal.id}
        id= {meal.id} 
        name ={meal.name} 
        description={meal.description} 
        price={meal.price}/>);
       return(
        <Card>
          <ul>
            <section className={classes.meals}>
              {mealsList}
            </section>
          </ul>
        </Card>
        )
}

export default AvailableMeals; 