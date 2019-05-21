import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import CardTemplate from './Card'
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
    
    let template = null;
    switch (props.type) {
        case 'card':
            template = props.items.map((item,i) => (
                <CSSTransition
                    classNames={{
                        enter:"newsList_wrapper",
                        enterActive:"newsList_wrapper_enter"
                    }}
                    timeout = {500}
                    key = {i}
                    >
                    <div >
                        <CardTemplate item={item} team={teamName(item.team, props.teams)}/>
                    </div>
                </CSSTransition>
                
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