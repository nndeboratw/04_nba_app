import React, { Component } from 'react';
import NewsSlider from '../widgets/Sliders/News';


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
            </div>
        );
    }
}



export default Home;