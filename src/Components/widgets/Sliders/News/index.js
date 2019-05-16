import React, { Component } from 'react';
import eventBus from '../../../../util/EventBus'
import newsServiceInstance, { highlightsLoadedEvent } from '../../../../services/news'
import SliderTemplates from '../SliderTemplates'


class NewsSlider extends Component {

    state = {
        news:[],
        setUpNewsList: (list) => {
            this.setState({ news: list.data })
          }
    }

    componentDidMount(){
        eventBus.registerEvent(highlightsLoadedEvent, this.state.setUpNewsList)
        newsServiceInstance.getHighlightsByInterval(this.props.start,this.props.end)
    }

    componentWillUnmount () {
        eventBus.unsubscribe(highlightsLoadedEvent)
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