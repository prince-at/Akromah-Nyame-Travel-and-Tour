// import { useState } from 'react';
import './Pages/Css/IncomingReviews.css'
import yelp from '../images/yelp-free-img.png'
import instagram from '../images/tripadvisorlogo1-free-img1.png'
import google from '../images/google-reviews-free-img.png'
import facebook from '../images/fb-free-imng.png'
import tiktok from '../images/tripadvisorlogo1-free-img2.png'
 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay} from "swiper/modules";
// import "swiper/css";
// import "swiper/css/bundle";
// import "swiper/css/autoplay"; 
import 'swiper/swiper.css';
import 'swiper/swiper-bundle.css';
// import 'swiper/modules/autoplay.css';
const reviews = [
  {
    pic: 'S',
    star: '⭐⭐⭐⭐⭐',
    name: "– Sarah M., Hospitality Worker in Dubai",
    review: "They helped me secure a job in hospitality overseas, handled all my visa paperwork, and guided me through the relocation process. I couldn’t have asked for a smoother journey.",
  },
  {
  pic: 'R',
  star: '⭐⭐⭐⭐⭐',
    name: "— Rebecca N., Student & Barista in Toronto",
    review: "As a student, I was nervous about moving to Canada, but the agency helped me find a school, work permit, and part-time job. Everything was well organized. They re the reason I am succeeding today.",
  },
  {
    pic: 'E',
    star: '⭐⭐⭐⭐⭐',
    name: "— Elvis M., Waiter in Dubai",
    review: "Within just a few weeks, I was placed at a luxury resort in Dubai.  handled my documents, interviews, and orientation. I'm gaining amazing international experience, and I'm truly grateful.",
  },
];
const IncomingReviews = () => {
  // const reviewsRef = useRef<HTMLDivElement>(null);
  // const [isAnimated, setIsAnimated] = useState(false);

  // useEffect(() => {
  //   const checkOverflow = () => {
  //     if (reviewsRef.current) {
  //       setIsAnimated(reviewsRef.current.scrollWidth > reviewsRef.current.clientWidth);
  //     }
  //   };
  //   checkOverflow();
  //   window.addEventListener('resize', checkOverflow);
  //   return () => window.removeEventListener('resize', checkOverflow);
  // }, []);

  return (
    <>
 

  <div className='swiper-incoming-review' style={{ height: "100%",width: "90%", justifyContent: "center", alignItems: "center" }}>
      <div style={{justifyContent:'center', alignItems:'center'}}>
    <h1 className='Incoming'>Incoming Reviews</h1></div>
    <Swiper 
         modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1} 
        navigation={false}
        pagination={{ clickable: true }}
        autoplay={{ delay: 8000 }}
        loop={true} 
        style={{height:'90%'}}
    >
    <div className='portfolio-container'>

    <div className='incomingReviews-container'>

        <div className='incoming-reviews'>
           
            {reviews.map((review, index) => {
                return (
                    <SwiperSlide style={{width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                    <div key={index} className='incoming-review-card'>
                        <div className='incoming-person-review'>
                            <div className='letter-T'>{review.pic}</div>
                        </div>
                        
                        <p className="incoming-review-text">"{review.review}"</p>
                        <div className='incoming-star'>
                            {review.star}
                        </div>
                        <p className="incoming-review-name">— {review.name}</p>
                        
                        
                    </div>
                    </SwiperSlide>
                );
            })}
            
        </div>
        
        
        {/* <div className='incoming-reviews-only'>
        <div className="incoming-review-card">
        <button onClick={prevSlide}>◀</button>
      
        <p className="incoming-review-text">"{reviews[currentIndex].review}"</p>
        <button onClick={nextSlide}>▶</button>

      </div>
      <p className="incoming-review-name">— {reviews[currentIndex].name}</p>
      
        </div> */}
        

     
    </div>
      
    
    </div>
    </Swiper>
    </div>
     <div className='social-media-logos'>
            <img src={yelp} alt='yelp' className='yelp-logo' />
            <img src={instagram} alt='yelp' className='yelp-logo' />
            <img src={google} alt='yelp' className='yelp-logo' />
            <img src={facebook} alt='yelp' className='yelp-logo' />
            <img src={tiktok} alt='yelp' className='yelp-logo' />
        </div>
    </>
  )

}

export default IncomingReviews