import React from 'react';
import classes from './NavigationItem.css'

const NavigationItem = props => {
    return (
        <li className={classes.NavigationItem}>
            <a href={props.link} active={props.active}>{props.children}</a>
        </li>
    );
};

export default NavigationItem;