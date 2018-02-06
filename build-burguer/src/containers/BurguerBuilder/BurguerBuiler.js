import React, { Component } from 'react'
import Aux from '../../hoc/Aux'

import Burguer from '../../components/Burguer/Burguer'
import BuildControls from '../../components/Burguer/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burguer/OrderSummary/OrderSummary'

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
            totalPrice : 0.0,
            canPurchase : false,
            purchasing: false
        }
    }

    addIngredient = type => () => {
        const newIngredients = { ...this.state.ingredients}
        newIngredients[type] = newIngredients[type] + 1
        const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type]

        this.setState({ingredients: newIngredients, totalPrice: newPrice})
        this.canPurchase(newIngredients)
    }

    removeIngredient = type => () => {
        const newIngredients = { ...this.state.ingredients}
        newIngredients[type] = newIngredients[type] - 1
        const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type]

        this.setState({ingredients: newIngredients, totalPrice: newPrice})
        this.canPurchase(newIngredients)
    }

    canPurchase = ingredients => {
        const canPurchase = Object.keys(ingredients).map(k => ingredients[k]).reduce((acc, el) => acc + el, 0) > 0
        this.setState({canPurchase})
    }

    purshaseHandler = () => {
        this.setState({purchasing: true})
    }

    render() {

        let disableds = {}
        Object.keys(this.state.ingredients).forEach( k => disableds[k] = this.state.ingredients[k] <= 0)

        return (
            <Aux>
                <Modal show={this.state.purchasing}><OrderSummary ingredients={this.state.ingredients}/></Modal>
                <Burguer ingredients={this.state.ingredients}/>
                <BuildControls 
                    canPurchase={this.state.canPurchase} 
                    totalPrice={this.state.totalPrice}
                    disableds={disableds}
                    addIngredient={this.addIngredient}
                    removeIngredient={this.removeIngredient}
                    ordered={this.purshaseHandler}
                />
            </Aux>
        )
    }

}

export default BurguerBuilder