import React from 'react';
import '../slides.css'
import {Link} from 'react-router-dom'

const ArticlesTemplate = (props) =>{
            
        return (

            <div className="featured_item">
                 <div className="featured_image"
                    style = {{
                        background: `url(../../../images/articles/${props.item.image})`
                    }}>
                </div>
                <Link to={`/articles/${props.item.id}`}>
                    <div className="featured_caption">
                    {props.item.title}
                    </div>
                </Link> 
            </div>
            
        )
}

export default ArticlesTemplate;