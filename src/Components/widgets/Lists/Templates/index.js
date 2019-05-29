import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import CardTemplate from './Card'
import VideoCardTemplate from './Card/Video'
import '../list.css'


const ListTemplates = (props) => {
    const teamName = (teamId, teams) => {
        
        let team = teams.find((item)=>{
            return item.id===teamId
        })
        if(team){
            return team.name
        }
    }

    const renderCard = (item, id) => {
        return (
        <CSSTransition
            classNames={{
                enter:"newsList_wrapper",
                enterActive:"newsList_wrapper_enter"
            }}
            timeout = {500}
            key = {id}
            >
            <div >
                <CardTemplate item={item} team={teamName(item.team, props.teams)}/>
            </div>
        </CSSTransition>
        )
    }

    const renderVideoCard = (item, id) => {
        return (
        <CSSTransition
            classNames={{
                enter:"newsList_wrapper",
                enterActive:"newsList_wrapper_enter"
            }}
            timeout = {500}
            key = {id}
            >
            <div >
                <VideoCardTemplate item={item} team={teamName(item.team, props.teams)}/>
            </div>
        </CSSTransition>
        )
    }
    
    let template = null;
    switch (props.type) {
        case 'card':
            template = props.items.map((item,id) => (
                renderCard(item,id)
            ))
            break;
        case 'video-card':
            template = props.items.map((item,id) => (
                renderVideoCard(item,id)
            )) 
            break;
        default:
        template = null;
            break;
    }
    return (
        <div>
            <TransitionGroup
                    component = "div"
                    className = "list"
                    >
                    {template}
            </TransitionGroup>  
        </div>
    )
  
}

export default ListTemplates;