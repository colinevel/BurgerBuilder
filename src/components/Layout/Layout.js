import React, { Component } from 'react';
import styles from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import Sidedrawer from "../Navigation/SideDrawer/SideDrawer";

export default class Layout extends Component {

    state = {
        showSideDrawer: true
    };

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }


    render() {

        return (
            <React.Fragment>
            <Toolbar />
            <Sidedrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
            <div>Toolbar, Sidedrawer, Backdrop</div>
            <main className={styles.Content}>
                {this.props.children}
            </main>
            </React.Fragment>
        )

    }

}

