import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/webName.png'
import './Header.css'

const Header = () => {
    const activeNavStyle = {
        fontWeight: "bold",
        color: 'black',
        // backgroundColor: 'rgba(143, 170, 250, 0.692)',
        borderBottom: '4px solid royalblue',
        padding: '15px',
    }
    return (
        <div >
            <nav className="header ">
                <div className='logo'>
                    <img src={logo} alt="" />
                </div>
                <div className="menu">
                    <NavLink to="/home" activeStyle={activeNavStyle}>Home</NavLink>
                    <NavLink to="/services" activeStyle={activeNavStyle}>Services</NavLink>
                    <NavLink to="/about" activeStyle={activeNavStyle}>About us</NavLink>
                    <NavLink to="/facilities" activeStyle={activeNavStyle}>Facilities</NavLink>
                </div>
            </nav>
        </div>
    );
};

export default Header;