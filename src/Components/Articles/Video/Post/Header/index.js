import React from 'react';
import TeamInfo from '../../../TeamInfo'

const Header = (props) => {
    const teamInfo = (teamData) => {
        return teamData? (
            <TeamInfo team={teamData}/>
        ):null;

    }

    return (
        <div>
            {teamInfo(props.teamData)}
        </div>
    );
}


export default Header;