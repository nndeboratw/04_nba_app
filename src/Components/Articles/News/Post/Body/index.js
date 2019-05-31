import React from 'react';

const Body = (props) =>  {
   
    return (
        <div className="articleBody">
            <h1>{props.article.title}</h1>
            <div className="articleImage"
                style= {{
                    background: `url('/images/articles/${props.article.image}`
                }}>
            </div>
            <div className="articleText">
                {props.article.body}
            </div>
        </div>
    );
}


export default Body;