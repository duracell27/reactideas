import React from 'react';
import {NavLink} from 'react-router-dom'


class Header extends React.Component {
  render(){
    return (
    <nav>
        <div className="logo">
            <NavLink to="/index">Ideas for life</NavLink>
        </div>
        <ul>
            <li><NavLink to="/index">Головна</NavLink></li>
            <li><NavLink to="/profile">Профіль (адмін)</NavLink></li>
        </ul>
    </nav>
    );
  }
}

export default Header;
