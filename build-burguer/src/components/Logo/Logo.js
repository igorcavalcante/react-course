import React from 'react';
import burguerLogo from '../../assets/images/burger-logo.png'
import classes from './Logo.css'

const logo = props => {
    return (
        <div className={classes.Logo}>
            <img src={burguerLogo} alt="My burger"/> 
        </div>
    );
}

export default logo;