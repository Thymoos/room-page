import React from 'react';
import './About.css';
import imageAboutDark from '../images/image-about-dark.jpg';
import imageAboutLight from '../images/image-about-light.jpg';

const About = () => {
    return ( 
        <div className="about">
            <img src={imageAboutDark} alt="dark furniture" />
            <div className="text">
                <h2>ABOUT OUR FURNITURE</h2>
                <p>Our multifunctional collection blends design and function to suit your individual taste.
                    Make each room unique, or pick a cohesive theme that best express your interests and what
                    inspires you. Find the furniture pieces you need, from traditional to contemporary styles
                    or anything in between. Product specialists are available to help you create your dream space.
                </p>
            </div>
            <img src={imageAboutLight} alt="very white furniture" />
        </div>
     );
}
 
export default About;