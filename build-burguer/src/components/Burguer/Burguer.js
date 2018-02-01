import React from 'react';
import classes from './Burguer.css'

import BurguerIngredient from './BurguerIngredients/BurguerIngredient'

const burguer = (props) => {
    return (
        <div className={classes.Burguer}>
            <BurguerIngredient type="bread-top"/> 
            <BurguerIngredient type="salad"/> 
            <BurguerIngredient type="cheese"/> 
            <BurguerIngredient type="meat"/> 
            <BurguerIngredient type="bread-bottom"/> 
        </div>
    );
};

export default burguer;