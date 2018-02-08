import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem'
import classes from './NavigationItems.css'

const navigationItems = props => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link={"/"} active>Burguer</NavigationItem>
            <NavigationItem link={"/"}>Checkout</NavigationItem>
        </ul>
    );
}

export default navigationItems;