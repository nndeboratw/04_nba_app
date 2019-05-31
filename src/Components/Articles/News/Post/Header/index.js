import React from 'react';
import TeamInfo from '../../../TeamInfo'
import PostData from '../../../PostData'
import '../../../articles.css'

const Header = (props) =>  {
   

    const postData = (date,author) => {
        return (<PostData data={{date,author}}/>);
    }
    const teamInfo = (teamData) => {
        return teamData? (
            <TeamInfo team={teamData}/>
        ):null;

    }

    return (
        <div>
            {teamInfo(props.teamData)}
            {postData(props.date, props.author)}
            
        </div>
    );
}


export default Header;