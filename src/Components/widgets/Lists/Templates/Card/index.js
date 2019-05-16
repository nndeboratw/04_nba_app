
import React from 'react';
import {Link} from 'react-router-dom'
import '../../list.css'

const CardTemplate = (props) =>  {
   
    return (
       <div>
           <div className="newsList_item">
                <Link to = {`/articles/${props.item.id}`}>
                    <h2>{props.item.title}</h2>
                </Link>        
           </div>
       </div>
    )
}

export default CardTemplate;