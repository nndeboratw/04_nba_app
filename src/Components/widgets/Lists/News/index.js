import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import newsServiceInstance, { newsLoadedEvent, teamsLoadedEvent } from '../../../../services/news';
import eventBus from '../../../../util/EventBus';
import ListTemplates from '../Templates';
import Buttons from '../../Buttons';

class NewsList extends Component {

    state = {
        items:[],
        isLoadingNews: true,
        isLoadingTeams: true,
        start: this.props.start,
        amount: this.props.amount,
        end: this.props.start + this.props.amount,
        setUpNewsList: (list) => {
            this.setState({ items: [...this.state.items,...list.data], isLoadingNews: false })
        },
        setUpTeamsList: (list) => {
            this.setState({teams: list.data, isLoadingTeams: false})
        }
    }
    
    componentDidMount(){
        eventBus.registerEvent(newsLoadedEvent, this.state.setUpNewsList)
        newsServiceInstance.getNewsByInterval(this.state.start,this.state.end)

        eventBus.registerEvent(teamsLoadedEvent, this.state.setUpTeamsList)
        newsServiceInstance.getTeams()
    }

    componentWillUnmount () {
        eventBus.unsubscribe(newsLoadedEvent)
        eventBus.unsubscribe(teamsLoadedEvent)
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

    render () {
        return (
          (this.state.isLoadingNews || this.state.isLoadingTeams)
            ? <div>
              <FontAwesome name="clock-o"/>
            </div>
            : this.afterLoaded()
        )
      }
    
    afterLoaded() {
        
        return (
            <div>
                <ListTemplates items={this.state.items} type={this.props.type} teams={this.state.teams}/>
                <Buttons
                    type = "loadmore"
                    loadmore= {() => this.loadMore()}
                    cta = "Load More News"/>
            </div>
            
            
        );
    }
}

export default NewsList;