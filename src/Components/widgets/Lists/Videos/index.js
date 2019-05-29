import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import eventBus from '../../../../util/EventBus';
import newsServiceInstance, {teamsLoadedEvent, videosLoadedEvent} from '../../../../services/news';
import ListTemplates from '../Templates';
import Buttons from '../../Buttons';
import './videos.css'


class VideosList extends Component {

    state = {
        isLoadingTeams: true,
        isLoadingVideos: true,
        start: this.props.start,
        amount: this.props.amount,
        end: this.props.start + this.props.amount,
        teams: [],
        videos: [],
        setUpTeams: (teamsList) => {
            this.setState({teams: teamsList.data, isLoadingTeams: false})
        },
        setUpVideos: (videosList) => {
            this.setState({ videos: [...this.state.videos,...videosList.data], isLoadingVideos: false })
        }

    }

    componentDidMount(){
        eventBus.registerEvent(teamsLoadedEvent, this.state.setUpTeams);
        eventBus.registerEvent(videosLoadedEvent, this.state.setUpVideos);

        newsServiceInstance.getVideosByInterval(this.state.start, this.state.end);
        newsServiceInstance.getTeams()

    }

    componentWillMount(){
        eventBus.unsubscribe(teamsLoadedEvent);
        eventBus.unsubscribe(videosLoadedEvent);

    }

    loadMore = () => {
        let start = this.state.end;
        let end = this.state.end + this.state.amount;
        newsServiceInstance.getVideosByInterval(start,end);
        this.setState({
            start: start,
            end: end
        })
    }

    renderTitle = () => {
        return this.props.title ?
        <h3><strong>NBA</strong> VÍDEOS</h3>
        : null
    }
    renderButton = () => {
        return this.props.loadmore ? 
        <Buttons
            type = "loadmore"
            loadmore= {() => this.loadMore()}
            cta = "Load More Videos"/>
        :
        <Buttons
        type = "linkTo"
        cta = "More Videos"
        linkTo = "/videos"/>
    }


    render () {
        return (
          (this.state.isLoadingVideos || this.state.isLoadingTeams)
            ? <div>
              <FontAwesome name="clock-o"/>
            </div>
            : this.afterLoaded()
        )
      }
    
    afterLoaded() {
        
        return (
            <div className="videosList_wrapper">
                {this.renderTitle()}
                <ListTemplates items={this.state.videos} type={this.props.type} teams={this.state.teams}/>
                {this.renderButton()}
            </div>
            
            
        );
    }
}

export default VideosList;