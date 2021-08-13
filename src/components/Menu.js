/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Menu.css';

import hamburger from '../images/icon-hamburger.svg';
import close from '../images/icon-close.svg';

const Menu = () => {
    return ( 
        <div className="menu">

            <button className="mobile-menu"><img src={hamburger} alt="" /></button>

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