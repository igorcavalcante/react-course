import React, { Component } from 'react'
import Aux from '../../hoc/Aux'

import Burguer from '../../components/Burguer/Burguer'
import BuildControls from '../../components/Burguer/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 2.0,
    cheese: 1.0,
    meat: 5.0
}

class BurguerBuilder extends Component {

    constructor(props) {
        super(props)

        this.state = {
            ingredients: {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0
            },
            totalPrice : 0.0
        }
    }

    addIngredient = type => () => {
        const newIngredients = { ...this.state.ingredients}
        newIngredients[type] = newIngredients[type] + 1
        const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type]

        this.setState({ingredients: newIngredients, totalPrice: newPrice})
    }

    removeIngredient = type => () => {
        const newIngredients = { ...this.state.ingredients}
        newIngredients[type] = newIngredients[type] - 1
        const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type]

        this.setState({ingredients: newIngredients, totalPrice: newPrice})
    }

    render() {

        let disableds = {}
        Object.keys(this.state.ingredients).forEach( k => disableds[k] = this.state.ingredients[k] <= 0)

        return (
            <Aux>
                <Burguer ingredients={this.state.ingredients}/>
                <BuildControls disableds={disableds} addIngredient={this.addIngredient} removeIngredient={this.removeIngredient}/>
            </Aux>
        )
    }

}

export default BurguerBuilder