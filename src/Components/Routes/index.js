import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from '../Home';
import NewsArticle from '../Articles/News/Post';
import VideoArticle from '../Articles/Video/Post';
import Layout from '../../hoc/Layout'

class Routes extends Component {
    
    render() {
        return ( 
            <Layout>
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/articles/:id' exact component={NewsArticle}/>
                    <Route path='/videos/:id' exact component={VideoArticle}/>
                </Switch>
            </Layout>
        );
    }
}

export default Routes;