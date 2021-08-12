import React, {useState, useEffect} from 'react';
import './Slider.css';
import img1 from '../images/desktop-image-hero-1.jpg';
import img2 from '../images/desktop-image-hero-2.jpg';
import img3 from '../images/desktop-image-hero-3.jpg';
import arrowLeft from '../images/icon-angle-left.svg';
import arrowRight from '../images/icon-angle-right.svg';
import arrow from '../images/icon-arrow.svg';
import mobileImg1 from '../images/mobile-image-hero-1.jpg';
import mobileImg2 from '../images/mobile-image-hero-2.jpg';
import mobileImg3 from '../images/mobile-image-hero-3.jpg';

const slides = [
     {
        id: 0,
        h1: "Discover innovative ways to decorate",
        text: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
        imgDesktop: img1,
        imgMobile: mobileImg1
    },
    {
        id: 1,
        h1: "We are available all across the globe",
        text: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
        imgDesktop: img2,
        imgMobile: mobileImg2
    },
    {
        id: 2,
        h1: "Manufactured with the best materials",
        text: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
        imgDesktop: img3,
        imgMobile: mobileImg3
    }
]

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

const Slider = () => {

    const [slide, setSlide] = useState(slides[0]);
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

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

    useEffect(() => {
        function handleResize() {
          setWindowDimensions(getWindowDimensions());
        }
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);
    

    return ( 
        <div className="slider">
            <div className="main-img-wrapper">
            <img src={windowDimensions.width <= 375 ? slide.imgMobile : slide.imgDesktop} alt="our furniture" />
            <div className="arrows">
                <button onClick={handleChangeLeft}><img src={arrowLeft} alt="" /></button>
                <button onClick={handleChangeRight}><img src={arrowRight} alt="" /></button>
            </div>
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