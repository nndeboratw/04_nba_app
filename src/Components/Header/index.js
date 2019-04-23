import React from 'react';
import {Link} from 'react-router-dom';
import './header.css';
import FontAwesome from 'react-fontawesome';
import SideNav from '../SideNavigation'
const Header = (props) => {

    const navBars = () =>  (
        <div className='bars'>
            <FontAwesome 
                onClick={props.onOpenNav}
                name="bars"
                style={{
                    color:'#dfdfdf',
                    padding:'10px',
                    cursor:'pointer'
                }}
            />
        </div>
    )
    const logo = () => (
        
        <Link to="/" className='logo'>
            <img alt="nba logo"src="/images/nba_logo.png"/>
        </Link>
    )
    
    return (
        <header className='header'>
            <SideNav {...props}/>
            <div className='headerOpt'>
                {navBars()}
                {logo()}
            </div>
        </header>
    )
}

export default Header;