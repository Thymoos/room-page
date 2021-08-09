import React from 'react';
import './Slider.css';
import img1 from '../images/desktop-image-hero-1.jpg';

const Slider = () => {
    return ( 
        <div className="slider">
            <img src={img1} alt="our furniture" />
            <div className="arrows">
                <button>{"<"}</button>
                <button>&gt;</button>
            </div>

            <div className="info">
                <h1>Discover innovative ways to decorate</h1>
                <p>We provide unmatched quality, comfort, and style for property owners across the country. 
                Our experts combine form and function in bringing your vision to life. Create a room in your 
                own style with our collection and make your property a reflection of you and what you love.
                </p>
                <button>SHOP NOW</button>
            </div>
        </div>
     );
}
 
export default Slider;