import {useEffect, useState} from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai' // Replace 'some-icon-library' with the actual library name
import { SliderData } from './SliderData';



const Slider = () => {
    const [currentIndex, setCurrentSlide] = useState(0);
    const sliderLength = SliderData.length;
    const autoScroll = true;
    let slideTime = 8000;
    let slideInterval: NodeJS.Timeout;
    const nextSlide = () => {
        setCurrentSlide(currentIndex===sliderLength-1 ? 0: currentIndex +1);
    };
    const prevSlide = () => {
        setCurrentSlide(currentIndex===0 ? sliderLength-1: currentIndex -1);
    };
    function auto() {
        slideInterval = setInterval(nextSlide, slideTime);
    }
    useEffect(() => {
        setCurrentSlide(0);
        
    },[])

    useEffect(() => {
        if(autoScroll) {
            auto();
        }
        return () => clearInterval(slideInterval);
        
    },[currentIndex]);

  return ( 
    <div >
        <div className='empty-cont'></div>
    <div className='slider-container'>
     <div className='slider'>
        
        <AiOutlineArrowLeft className='leftArrow'onClick={
            nextSlide
        } />
        <AiOutlineArrowRight className='rightArrow' onClick={prevSlide}/>
       

        {SliderData.map((slide, index) => {
                return (
                    <div className={index === currentIndex ? 'slide-active' : 'slide'} key={index}>
                        {index === currentIndex && (
                            <div>
                                <img src={slide.image} alt='slide' className='slede'/>
                                <div className='content'> 
                                    <h1 className='title-slide'>{slide.title}</h1>
                                    <p>{slide.description}</p>
                                    <hr/>
                                    <button className='--btn--btn-primary'>Learn More</button>
                                </div>
                               
                            </div>
                        )}
                    </div>
                )
            }
            )
        }
        </div>
        </div>
        </div>
    )
    
}

export default Slider