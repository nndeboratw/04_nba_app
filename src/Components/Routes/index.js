import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import Home from '../Home'
import Layout from '../../hoc/Layout'

class Routes extends Component {
    
    render() {
        return ( 
            <Layout>
                <Switch>
                    <Route path='/' exact component={Home}></Route>
                </Switch>
            </Layout>
        );
    }
}

export default Routes;