/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react';
import './Menu.css';

import hamburger from '../images/icon-hamburger.svg';
import close from '../images/icon-close.svg';

const Menu = () => {

    const [active, setActive] = useState(false);

    const handleMenu = () => {
        const element = document.getElementById("menu");
        element.classList.toggle("active");

        setActive(prevState => !prevState);
    }

    return ( 
        <div id="menu">
            <button onClick={handleMenu} className="mobile-menu"><img src={active ? close : hamburger} alt="" /></button>

            <nav>
                <ul>
                    <li>room</li>
                    <li><a>home</a></li>
                    <li><a>shop</a></li>
                    <li><a>about</a></li>
                    <li><a>contact</a></li>
                </ul>
            </nav>
            <div className="shade"></div>
        </div>
     );
}
 
export default Menu;