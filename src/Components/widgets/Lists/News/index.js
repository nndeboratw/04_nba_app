import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import newsServiceInstance, { newsLoadedEvent } from '../../../../services'
import eventBus from '../../../../util/EventBus'
import ListTemplates from '../Templates'

class NewsList extends Component {

    state = {
        items:[],
        start: this.props.start,
        amount: this.props.amount,
        end: this.props.start + this.props.amount
    }

    setUpNewsList = (list) => {
        this.setState({ items: [...this.state.items,...list.data] })
    }

    componentDidMount(){
        
        eventBus.registerEvent(newsLoadedEvent, this.setUpNewsList)
        newsServiceInstance.getNewsByInterval(this.state.start,this.state.end)
    }

    componentWillUnmount () {
        eventBus.unsubscribe(newsLoadedEvent)
      }


    render() {
        return (
            <div>
                <ListTemplates items={this.state.items} type={this.props.type}/>
            </div>
        );
    }
}

export default NewsList;