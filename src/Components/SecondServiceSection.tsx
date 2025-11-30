import "./scene/SecondServiceSection.css" 
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import 'swiper/swiper.css';
import 'swiper/swiper-bundle.css';

import FirstSlideImage from "./FirstSlideImage";
import SecondSlideImage from "./SecondSlideImage";
import ThirdSlideImage from "./ThirdSlideImage";
import ForthSlideImage from "./ForthSlideImage";
import FifthSlideImage from "./FifthSlideImage";

 
const SecondServiceSection = () => {  
    
    
  return (
    <div className="slider-wrapper" style={{ width: "100%",  justifyContent: "center", alignItems: "center", paddingTop: '50px',
         paddingBottom:"20px"}}
     >
       
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
            
            
                    <SwiperSlide style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                        <div className= "service-section" >
                            <FirstSlideImage/>

                         
                        </div>
                    </SwiperSlide>
             

            <SwiperSlide style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                    <div className= "service-section" >
                    <SecondSlideImage/>
                    </div>
            </SwiperSlide>
            <SwiperSlide style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                <div className= "service-section">
                    <ThirdSlideImage/>
                </div>
            </SwiperSlide>
            <SwiperSlide style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                <div className= "service-section">
                    <ForthSlideImage/>
                </div>
            </SwiperSlide>
            <SwiperSlide style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                <div className= "service-section">
                    <FifthSlideImage/>
                </div>
            </SwiperSlide>
            </div>
               
        </div>
   </Swiper>
   </div>
   {/* SwiperSlide for mobile view */}


   <div className="second-services-swiper-container-mobile-view">
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={200}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 8000 }}
        loop={true}
        style={{ width: "100%", height: "90%" }}
        
    >
   
    <div className='cover-service-container'>
        
        <div className="slider-all-sections">
            
              <SwiperSlide style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                        <div className= "service-section" >
                            <FirstSlideImage/>

                         
                        </div>
                    </SwiperSlide>
             

            <SwiperSlide style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                    <div className= "service-section" >
                    <SecondSlideImage/>
                    </div>
            </SwiperSlide>
            <SwiperSlide style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                <div className= "service-section">
                    <ThirdSlideImage/>
                </div>
            </SwiperSlide>
            <SwiperSlide style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                <div className= "service-section">
                    <ForthSlideImage/>
                </div>
            </SwiperSlide>
            <SwiperSlide style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                <div className= "service-section">
                    <FifthSlideImage/>
                </div>
            </SwiperSlide>
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
            
              <SwiperSlide style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                        <div className= "service-section" >
                            <FirstSlideImage/>

                         
                        </div>
                    </SwiperSlide>
             

            <SwiperSlide style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                    <div className= "service-section" >
                    <SecondSlideImage/>
                    </div>
            </SwiperSlide>
            <SwiperSlide style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                <div className= "service-section">
                    <ThirdSlideImage/>
                </div>
            </SwiperSlide>
            <SwiperSlide style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                <div className= "service-section">
                    <ForthSlideImage/>
                </div>
            </SwiperSlide>
            <SwiperSlide style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                <div className= "service-section">
                    <FifthSlideImage/>
                </div>
            </SwiperSlide>
            </div>
               
        </div>
   </Swiper>
   </div>
   </div>

  )
}

export default SecondServiceSection