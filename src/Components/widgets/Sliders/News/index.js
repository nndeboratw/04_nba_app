import React, { Component } from 'react';
import eventBus from '../../../../util/EventBus'
import newsServiceInstance, { newsAllLoadedEvent } from '../../../../services'


class NewsSlider extends Component {

    state = {
        news:[],
        setUpNewsList: (list) => {
            this.setState({ news: list.data })
          }
    }

    componentDidMount(){
        eventBus.registerEvent(newsAllLoadedEvent, this.state.setUpNewsList)
        newsServiceInstance.getAllNews()
    }

    render() {
        return (
            <div>
                SLIDER
            </div>
        );
    }
}

export default NewsSlider;