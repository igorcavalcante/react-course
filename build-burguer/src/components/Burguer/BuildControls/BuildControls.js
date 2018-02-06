import React from 'react';
import BuildControl from './BuildControl/BuildControl'

import classes from './BuildControls.css'

const BuildControls = props => {
    const controls = [
        {label: "Salad", type: "salad"},
        {label: "Cheese", type: "cheese"},
        {label: "Bacon", type: "bacon"},
        {label: "Meat", type: "meat"}
    ]

    return (
        <div className={classes.BuildControls}>
            <p>Order price: <strong>{props.totalPrice.toFixed(2)}</strong></p>
            {controls.map(control =>
                <BuildControl 
                    add={props.addIngredient(control.type)}
                    rem={props.removeIngredient(control.type)}
                    key={control.label}
                    label={control.label}
                    disabled = {props.disableds[control.type]}
                />
            )}
            <button onClick={props.ordered} disabled={!props.canPurchase} className={classes.OrderButton}>PURCHASE NOW</button>
        </div>
    );
};

export default BuildControls;