import React from 'react';
import Slick from 'react-slick'
import './slides.css'
// import {Link} from 'react-router-dom'
import ArticlesTemplate from './Articles'

const SliderTemplates = (props) =>{
    let template = null;
    const settings = {
        dots: true,
        infinite: true,
        arroes: false,
        speed: 500,
        slidesToShow: 1,
        slidesTScroll:1,
        ...props.settings 
    }
        switch(props.type){
            case ('featured'):
                template = props.items.map( (item,i) => {
                    return (
                        <div key={i}>
                            <ArticlesTemplate item={item}/>
                        </div>
                    )
                })
                break;
            default:
                template = null;
    }   
        return (

            <Slick {...settings}>
                {template}
            </Slick>
        )
}

export default SliderTemplates;