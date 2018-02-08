import React, {Component} from 'react'
import Aux from '../../hoc/Aux'
import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../SideDrawer/SideDrawer'

class Layout extends Component {

    state = {
        sideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({sideDrawer: false})
    }

    sideDrawerOpenHandler = () => {
        this.setState({sideDrawer: true})
    }

    render() {
        return (
            <Aux>
                <SideDrawer open={this.state.sideDrawer} closed={this.sideDrawerClosedHandler}/>
                <Toolbar openSideDrawer={this.sideDrawerOpenHandler}/>
                <main className={classes.Content}> {this.props.children} </main>
            </Aux>
        )
    }
}

export default Layout

