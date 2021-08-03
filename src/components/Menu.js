/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Menu.css';

const Menu = () => {
    return ( 
        <div className="menu">
            <nav>
                <ul>
                    <li>room</li>
                    <li><a href="#">home</a></li>
                    <li><a href="#">shop</a></li>
                    <li><a href="#">about</a></li>
                    <li><a href="#">contact</a></li>
                </ul>
            </nav>
        </div>
     );
}
 
export default Menu;