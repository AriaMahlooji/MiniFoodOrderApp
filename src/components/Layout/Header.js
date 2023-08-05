import React from "react";
import mealsImage from '../../assets/meals.jpg'
import classes from '../Layout/Header.module.css'
import HeaderCartButton from "./HeaderCartButton";

const Header=(props)=>{
    return <React.Fragment>
        <header className={classes.header}>
            <h1>Saman Meals</h1>
            <HeaderCartButton onShowCart={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img alt="" src={mealsImage}/>
        </div>
    </React.Fragment>
}

export default Header;