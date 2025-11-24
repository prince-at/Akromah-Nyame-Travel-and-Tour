
import { MainServices } from "./scene/CountryList"
import "./scene/SecondServiceSection.css"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// ✅ Import Swiper styles (bundle covers everything)

import "swiper/css"; 
import "swiper/css/bundle";

import "swiper/css/autoplay"; 

 
const SecondServiceSection = () => { 
    
  return (
    <div className="slider-wrapper" style={{ width: "100%",  justifyContent: "center", alignItems: "center", paddingTop: '50px',
         paddingBottom:"20px"
     }}>
       
    <div className="slider-background"> 
        <p className="our-services-text">All -- Services </p>
        </div>
        <div className="second-services-swiper-container">
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={4}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 8000 }}
        loop={true}
        style={{ width: "100%", height: "90%" }}
        
    >
   
    <div className='cover-service-container'>
        
        <div className="slider-all-sections">
            
            {MainServices.map((slide, index)=>{
                
                return(
                    <SwiperSlide style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                        <div key={index} className= "service-section" >

                            <div className="each-slider-image-container">
                                <img src={slide.image} alt='slider-image' className="slider-image"/>
                                <h1 className="slider-title">{slide.title}</h1>
                                <p className="slider-text">{slide.text}</p>
                                <button className="slider-button" onClick={() => (window.location.href = slide.id)}>{slide.button}</button>
                        </div>

                        </div>
                    </SwiperSlide>
                )
            })
            }
            </div>
               
        </div>
   </Swiper>
   </div>
   {/* SwiperSlide for mobile view */}


   <div className="second-services-swiper-container-mobile-view">
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={200}
        slidesPerView={2}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 8000 }}
        loop={true}
        style={{ width: "100%", height: "90%" }}
        
    >
   
    <div className='cover-service-container'>
        
        <div className="slider-all-sections">
            
            {MainServices.map((slide, index)=>{
                
                return(
                    <SwiperSlide style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                        <div key={index} className= "service-section" >

                            <div>
                                <img src={slide.image} alt='slider-image' className="slider-image"/>
                                <h1 className="slider-title">{slide.title}</h1>
                                <p className="slider-text">{slide.text}</p>
                                <button className="slider-button" onClick={() => (window.location.href = slide.id)}>{slide.button}</button>
                        </div>

                        </div>
                    </SwiperSlide>
                )
            })
            }
            </div>
               
        </div>
   </Swiper>
   </div>
{/* Swiper slide for small tablet view */}
    <div className="swiper-tablet-view">
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={200}
        slidesPerView={2}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 8000 }}
        loop={true}
        style={{ width: "100%", height: "90%" }}
        
    >
   
    <div className='cover-service-container'>
        
        <div className="slider-all-sections">
            
            {MainServices.map((slide, index)=>{
                
                return(
                    <SwiperSlide style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                        <div key={index} className= "service-section" >

                            <div>
                                <img src={slide.image} alt='slider-image' className="slider-image"/>
                                <h1 className="slider-title">{slide.title}</h1>
                                <p className="slider-text">{slide.text}</p>
                                <button className="slider-button" onClick={() => (window.location.href = slide.id)}>{slide.button}</button>
                        </div>

                        </div>
                    </SwiperSlide>
                )
            })
            }
            </div>
               
        </div>
   </Swiper>
   </div>
   </div>

  )
}

export default SecondServiceSection