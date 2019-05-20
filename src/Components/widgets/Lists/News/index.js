import React, { Component } from 'react';
import newsServiceInstance, { newsLoadedEvent } from '../../../../services/news'
import eventBus from '../../../../util/EventBus'
import ListTemplates from '../Templates'
import Buttons from '../../Buttons'

class NewsList extends Component {

    state = {
        items:[],
        start: this.props.start,
        amount: this.props.amount,
        end: this.props.start + this.props.amount,
        setUpNewsList: (list) => {
            this.setState({ items: [...this.state.items,...list.data] })
        }
    }
    
    componentDidMount(){
        eventBus.registerEvent(newsLoadedEvent, this.state.setUpNewsList)
        newsServiceInstance.getNewsByInterval(this.state.start,this.state.end)
    }

    componentWillUnmount () {
        eventBus.unsubscribe(newsLoadedEvent)
      }

   
    loadMore = () => {
        let start = this.state.end;
        let end = this.state.end + this.state.amount;
        newsServiceInstance.getNewsByInterval(start,end);
        this.setState({
            start: start,
            end: end
        })
    }

    
    render() {
        return (
            <div>
                <ListTemplates items={this.state.items} type={this.props.type}/>
                <Buttons
                    type = "loadmore"
                    loadmore= {() => this.loadMore()}
                    cta = "Load More News"/>
            </div>
            
            
        );
    }
}

export default NewsList;