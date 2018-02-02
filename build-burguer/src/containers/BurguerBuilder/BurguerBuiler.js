import React, { Component } from 'react'
import Aux from '../../hoc/Aux'

import Burguer from '../../components/Burguer/Burguer'
import BuildControls from '../../components/Burguer/BuildControls/BuildControls'

class BurguerBuilder extends Component {

    constructor(props) {
        super(props)

        this.state = {
            ingredients: {
                salad: 1,
                bacon: 1,
                cheese: 0,
                meat: 0
            }
        }
    }

    render() {
        return (
            <Aux>
                <Burguer ingredients={this.state.ingredients}/>
                <BuildControls/>
            </Aux>
        )
    }

}

export default BurguerBuilder