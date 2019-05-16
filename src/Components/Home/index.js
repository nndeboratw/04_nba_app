import React, { Component } from 'react';
import NewsSlider from '../widgets/Sliders/News';
import NewsList from '../widgets/Lists/News'


class Home extends Component {
    render() {
        return (
            <div>
                <NewsSlider 
                    type = "featured" 
                    start = {0} 
                    end = {3}
                    settings = {{
                        dots: false
                    }}/>
                <NewsList
                    type = "card"
                    start = {0}
                    amount = {4} 
                    loadmore = {true}/>
            </div>
        );
    }
}



export default Home;