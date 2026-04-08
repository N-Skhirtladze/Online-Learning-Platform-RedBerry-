import { useState } from "react";
import { slide1, slide2, slide3, rigthArrow, leftArrow } from "../assets"

const HeroSlider = () => {
    const [slide, setSlide] = useState(0);

    const handleRightArrow = () => {
        if(slide  < 2) {
            setSlide(prev => prev + 1);
        }
    }

    const handleLeftArrow = () => {
        if(slide > 0) {
            setSlide(prev => prev - 1);
        }
    }

    return (
        <div className="hero-slider">
            <div className="slides" style={{transform: `translateX(-${slide * 100}%)`}}>
                <div className="slide1 slide">
                    <img src={slide1} alt="" className="slider-img" />
                    <button className="slider-btn slider-btn1">Browse Courses</button>
                </div>
                <div className="slide2 slide">
                    <img src={slide2} alt="" />
                    <p className="slide-title">Pick up where you left off</p>
                    <p className="slide-text">Your learning journey is already in progress. Continue your enrolled courses, track your progress, and stay on track toward completing your goals.</p>
                    <button className="slider-btn slider-btn2">Start Learning</button>
                </div>
                <div className="slide3 slide">
                    <img src={slide3} alt="" />
                    <p className="slide-title">Learn together, grow faster</p>
                    <button className="slider-btn slider-btn3">Learn More</button>
                </div>
            </div>
            <div className="slider-arrows">
                <img src={leftArrow} alt="" onClick={handleLeftArrow} style={{opacity: slide == 0 ? "0.5" : "1"}}/>
                <img src={rigthArrow} alt="" onClick={handleRightArrow} style={{opacity: slide == 2 ? "0.5" : "1"}}/>
            </div>
            <div className="slider-dots">
                <span className="dot" onClick={() => setSlide(0)} style={{backgroundColor: slide==0 ? "#F5F5F5" : "#C1BCBC80"}}></span>
                <span className="dot" onClick={() => setSlide(1)} style={{backgroundColor: slide==1 ? "#F5F5F5" : "#C1BCBC80"}}></span>
                <span className="dot"  onClick={() => setSlide(2)}  style={{backgroundColor: slide==2 ? "#F5F5F5" : "#C1BCBC80"}}></span>
            </div>
        </div>
    )
}

export default HeroSlider;