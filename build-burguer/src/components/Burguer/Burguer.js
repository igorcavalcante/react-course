import React from 'react';
import classes from './Burguer.css'

import BurguerIngredient from './BurguerIngredients/BurguerIngredient'

const burguer = (props) => {

    const calcIngredients = () => {
        const ingredients = Object.keys(props.ingredients).map(k =>
            [...Array(props.ingredients[k])].map((_, i) => <BurguerIngredient key={i} type={k} />)
        ).reduce((acc, value) => acc.concat(value))

        if (ingredients.length == 0) {
            return <p>Please start inserting ingredients</p>
        } else {
            return ingredients
        }
    }

    return (
        <div className={classes.Burguer}>
            <BurguerIngredient type="bread-top" />
            {calcIngredients()}
            <BurguerIngredient type="bread-bottom" />
        </div>
    );
};

export default burguer;