
import React from 'react';
import {Link} from 'react-router-dom';
import './videocard.css';
import CardInfo from '../CardInfo';

const VideoCardTemplate = (props) =>  {
   
    return (
       <div>
           <Link to = {`/videos/${props.item.id}`}>
                <div className="videoListItem_wrapper">
                    <div 
                        className="left"
                        style={{
                            background: `url(/images/videos/${props.item.image})`
                        }}
                    >
                        <div></div>
                    </div>
                    <div className="right">
                        <CardInfo team={props.team} date={props.item.date}/>
                        <h2>{props.item.title}</h2>
                    </div>
                </div>
            </Link>        
        </div>
    )
}

export default VideoCardTemplate;