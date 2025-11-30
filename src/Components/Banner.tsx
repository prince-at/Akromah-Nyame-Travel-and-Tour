import planephoto from "././images-services/photo-1725977098424-19ea46553f231.jpg"  ;
import "./scene/Banner.css";  
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import roadmap from "././images-services/roadmap.jpg";
import buildings from "././images-services/building.jpg";
import 'swiper/swiper.css';
import 'swiper/swiper-bundle.css';

import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";


const Banner = () => {
  const navigate =useNavigate(); 
  return (
    <div>
 
       <Swiper 
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={15}
        slidesPerView={1}
        navigation={false}
        pagination={{ clickable: true }}
        autoplay={{ delay: 8000 }}
        loop={true} 
        style={{height:'70%'}}
       >
      {/* <div className='akroma-nyame'>
                <h1 className='antnt'> WORK OR STUDY IN UAE, EUROPE, AUSTRALIA ETC..</h1>
            </div> */}

      <div className="ban-co">
        <SwiperSlide>
        <img src={planephoto} alt="bannerImage" className="banner" />
        <h1 className="antnt">
          {" "}
          WORK OR STUDY IN UAE, EUROPE, AUSTRALIA, CANADA, UK, ETC..
        </h1>
        <div className="uae-test">
        <h1 className="visa-guaranteed" >
          VISA ASSISTANCE & ADMISSIONS GUARANTEED </h1>
          <button className='banner-button' onClick={()=>window.location.href='/contact'}>
            
            Get in Touch </button>
       </div>
        </SwiperSlide>
        <SwiperSlide>
        <img src={roadmap} alt="bannerImage" className="banner" />
        <h1 className="antnt">
          {" "}
          WORK OR STUDY IN UAE, EUROPE, AUSTRALIA, CANADA, UK, ETC..
        </h1>
        <div className="uae-test">
        <h1 className="visa-guaranteed" >
          VISA ASSISTANCE & ADMISSIONS GUARANTEED </h1>
            
          <button className='banner-button' onClick={()=>navigate("/contact")}>Get in Touch </button>
          
       </div>
        </SwiperSlide>
        <SwiperSlide>
        <img src={buildings} alt="bannerImage" className="banner" />
        <h1 className="antnt">
          {" "}
          WORK OR STUDY IN UAE, EUROPE, AUSTRALIA, CANADA, UK, ETC..
        </h1>
        <div className="uae-test">
        <h1 className="visa-guaranteed">
          VISA ASSISTANCE & ADMISSIONS GUARANTEED </h1>
          <button className='banner-button' onClick={()=>navigate("/contact")}>Get in Touch </button>
       </div>
        </SwiperSlide>
        
       
      </div>
      </Swiper>
    
    </div>
  );
};

export default Banner;
