import React, { Component } from 'react';
import eventBus from '../../../../util/EventBus'
import newsServiceInstance, { newsLoadedEvent } from '../../../../services'
import SliderTemplates from '../SliderTemplates'


class NewsSlider extends Component {

    state = {
        news:[],
        setUpNewsList: (list) => {
            this.setState({ news: list.data })
          }
    }

    componentDidMount(){
        eventBus.registerEvent(newsLoadedEvent, this.state.setUpNewsList)
        newsServiceInstance.getNewsByInterval(this.props.start,this.props.end)
    }

    componentWillUnmount () {
        eventBus.unsubscribe(newsLoadedEvent)
      }

    render() {
        return (
            <div>
                <SliderTemplates items={this.state.news} type={this.props.type} settings={this.props.settings}/>
            </div>
        );
    }
}

export default NewsSlider;