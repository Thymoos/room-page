import React, {useState} from 'react';
import './Slider.css';
import img1 from '../images/desktop-image-hero-1.jpg';
import img2 from '../images/desktop-image-hero-2.jpg';
import img3 from '../images/desktop-image-hero-3.jpg';
import arrowLeft from '../images/icon-angle-left.svg';
import arrowRight from '../images/icon-angle-right.svg';
import arrow from '../images/icon-arrow.svg';

const slides = [
     {
        id: 0,
        h1: "Discover innovative ways to decorate",
        text: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
        img: img1
    },
    {
        id: 1,
        h1: "We are available all across the globe",
        text: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
        img: img2
    },
    {
        id: 2,
        h1: "Manufactured with the best materials",
        text: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
        img: img3
    }
]

const Slider = () => {

    const [slide, setSlide] = useState(slides[0]);

    const handleChangeLeft = () =>{
        const id = slide.id-1;

        if(id === -1){
            setSlide(slides[2]);
        }
        else{
            setSlide(slides[id]);
        }
    }

    const handleChangeRight = () =>{
        const id = slide.id+1;
        
        if(id === 3){
            setSlide(slides[0]);
        }
        else{
            setSlide(slides[id]);
        }
    }

    return ( 
        <div className="slider">
            <img src={slide.img} alt="our furniture" />
            <div className="arrows">
                <button onClick={handleChangeLeft}><img src={arrowLeft} alt="" /></button>
                <button onClick={handleChangeRight}><img src={arrowRight} alt="" /></button>
            </div>

            <div className="info">
                <h1>{slide.h1}</h1>
                <p>{slide.text}</p>
                <button>SHOP NOW <img src={arrow} alt="" /></button>
            </div>
        </div>
     );
}
 
export default Slider;