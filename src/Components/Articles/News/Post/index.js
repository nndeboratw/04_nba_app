import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import '../../articles.css';
import newsServiceInstance, {teamByIdLoadedEvent, newsByIdLoadedEvent} from '../../../../services/news';
import eventBus from '../../../../util/EventBus';
import Header from './Header'
import Body from './Body'

class NewsArticle
 extends Component {

    state = {
        articleID: this.props.match.params.id,
        team: this.props.team,
        isLoadingTeam: !this.props.team,
        article: this.props.article,
        isLoadingArticle: this.props.article,
        setUpArticle: (articleData) => {
            this.setState({ article: articleData.data, isLoadingArticle: false })
            newsServiceInstance.getTeamById(articleData.data.team)
        },
        setUpTeam: (teamData) => {
            this.setState({ team: teamData.data, isLoadingTeam: false })
        }
    }

    
    componentDidMount() {
        
        eventBus.registerEvent(teamByIdLoadedEvent, this.state.setUpTeam);
        eventBus.registerEvent(newsByIdLoadedEvent, this.state.setUpArticle);
        if (!this.state.article)
        {
            newsServiceInstance.getNewsById(this.state.articleID)
        }
    }

    componentWillUnmount() {
        eventBus.unsubscribe(teamByIdLoadedEvent);
        eventBus.unsubscribe(newsByIdLoadedEvent);
    }

    render () {
        
        return (
          (this.state.isLoadingArticle || this.state.isLoadingTeam)
            ? <div>
              <FontAwesome name="clock-o"/>
            </div>
            : this.afterLoaded()
        )
      }
    
    afterLoaded() {
        
        return (
            <div className="articleWrapper">
                <Header 
                    teamData = {this.state.team}
                    author = {this.state.article.author}
                    date = {this.state.article.date}
                />
                <Body
                    article = {this.state.article}/>
                
            </div>
            
            
        );
    }
}

export default NewsArticle;