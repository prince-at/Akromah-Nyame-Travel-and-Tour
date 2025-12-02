import serviceImage from "../../Components/images-services/front-view-young-female.jpg"
import "./Css/Services.css"; 
import travelDoc from "../../Components/images-services/day-office-travel-agency-1.jpg"
import travelDoc2 from "../../Components/images-services/place-flying-sunset-skies.jpg";
import SecondServiceSection from "../SecondServiceSection";
import FormBanner from "../FormBanner";
import  serviceImag3 from "../../Components/images-services/close-up-man-holding-ticket.jpg"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import 'swiper/swiper.css';
import 'swiper/swiper-bundle.css';

import { FaBriefcase, FaGraduationCap, FaPassport, FaPlaneDeparture } from "react-icons/fa";
import ReviewForm from "../ReviewForm";

import { motion } from "framer-motion";

const Services = () => {

  return (
    <motion.div className="services-page-background"
    key={location.pathname}
     initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -100 }}
    transition={{ duration: 0.3 }}
    >
       
     <div className="services">
        <img src={serviceImage} alt="service-image" className="service-image" />
        <div className="empowering"> 
          <h1 className="service-text-page"> - SERVICES - </h1>
          EMPOWERING TALENT. ENABLING TRAVEL. BUILDING GLOBAL CAREERS.
          {/* <h1 className='services-title'>Our Services</h1> */}
        </div> 
        
      </div>
     <div className="services-form-list">
           <FormBanner/>

        </div>
      <div>
        <div>

          <div>
          <div className="service-main-container">
            <div className="service-title-container">
              
                <Swiper 
                  modules={[Navigation, Pagination, Autoplay]} 
                  spaceBetween={50}
                  slidesPerView={1}
                  navigation={true} 
                  pagination={{ clickable: true }} 
                  autoplay={{ delay: 8000 }} 
                  loop={true}
                  style={{ width: "100%", height: "100%" }} 
                  > 
              

                  <SwiperSlide> 
                  <img
                    src={serviceImag3}
                    alt="service-slide-1"
                    className="service-image2"
                  /> 
                   <h1 className="text-on-expertise">
                    Our Expertise: Crafting-results Driven Campaigns for our
                    Traveling Agency. 
                  </h1>
                </SwiperSlide>

                <SwiperSlide>
                  <img
                    src={travelDoc}
                    alt="service-slide-2"
                    className="service-image2"
                  />
                  <h1 className="text-on-expertise">
                    Crafting-results: Flight Ticket, Visit Visa, Student Visa, Fully Funded Scholarship opportunity, 
                    etc, assured.
                  </h1>
                </SwiperSlide>

                <SwiperSlide>
                  <img
                    src={travelDoc2}
                    alt="service-slide-3"
                    className="service-image2"
                  />
                  <h1 className="text-on-expertise">
                    Crafting-assurance: We standby you each day of travelling process and ensure a safe trip,
                    assist you settle at your destination.
                  </h1>
                </SwiperSlide>
                
                 </Swiper>
             
             
              
              <div className="stack-image-container">
                <div className="stack-image-cont-1">
                 
                  
                  <img
                    src={travelDoc}
                    alt="travelDoc"
                    className="travel-doc-image"
                  />
               
                 
                  
                  <div className="hover-overlay">
                    <p className="hover-text">
                      We Assist all your Traveling Documents:<br/>
                     
                      Flight Ticket, Visa, Passport, Work Permit, Residency
                      Permit & ID, ETC
                    </p>
                  </div>
                </div>
                <div className="stack-image-cont-1">
                  <img
                    src={travelDoc2}
                    alt="travel-doc"
                    className="travel-doc-image"
                  />
                  <div className="hover-overlay">
                    <p className="hover-text">
                      Do you want to Travel to any part of World for :
                      <br />
                      Work, Study, Visit, or Tour?
                    </p>
                  </div>
                </div>
              </div>
             
            </div> 
            
          </div>
          </div>
          
           <div className="services-written-session">
            
            <div className="services-image-text-session">
              
              <div className="services-first-row">
               <FaPlaneDeparture className="services-list-icons" size={18}/>
               <span className="service-text-title">1. Travel Consultation & Visa Assistance</span>
               <span className="services-list-text"><br/>We simplify your travel experience by handling 
                every detail — from visa processing to flight booking.
                 Our team ensures your application is accurate, timely, 
                and stress-free.</span>
                <ul>

                    <li className="services-list-text">- Personalized travel consultation.</li>

                    <li className="services-list-text">- Tourist, student, and work visa applications.</li>

                    <li className="services-list-text">- Flight itinerary and travel insurance support.</li>

                    <li className="services-list-text">-Embassy interview preparation.</li>
                </ul>

              </div>
               <div className="services-second-row">
               <FaBriefcase className="services-list-icons" size={18}/>
               <span className="service-text-title">2. Overseas Job Placement</span>
               <span className="services-list-text">
                <br/>Looking to start a new career abroad?
                We connect qualified candidates with trusted international
                employers and ensure compliance with all migration and labor regulations.
               </span>
               <ul>
                <li className="services-list-text">- Job matching and recruitment support.</li>
                <li className="services-list-text">- Work permit processing.</li> 

               <li className="services-list-text">- Pre-departure orientation.</li>

                <li className="services-list-text">- Ongoing support after arrival.</li>
                </ul>

              </div>
              <div className="services-first-row">
               <FaGraduationCap className="services-list-icons" size={18}/>
               <span className="service-text-title">3. Study Abroad Guidance</span>
               <span className="services-list-text">
                <br/>Choose from top institutions worldwide with our expert counseling.
                We guide you through every step — from admission to arrival.
               </span>
               <ul>
                <li className="services-list-text">- School and course selection.</li>
                <li className="services-list-text">- Application and documentation support.</li>

                <li className="services-list-text">- Visa and scholarship assistance.</li>

                <li className="services-list-text">- Accommodation and travel arrangements</li>
               </ul>

              </div>
               <div className="services-second-row">
                <FaPassport className="services-list-icons" size={18}/>
                <span className="service-text-title">4. Document Processing & Legal Support</span>
                <span className="services-list-text">
                  <br/>We assist with all your document needs — making 
                  international procedures simple and secure.
                </span>
                <ul>
                  <li className="services-list-text">- Passport applications and renewals.</li>
                  <li className="services-list-text">- Police clearance certificates</li>
                  <li className="services-list-text">- Invitation and sponsorship letters</li>
                  <li className="services-list-text">- Legalization and authentication</li>
                </ul>
                {/* <h1 className="services-second-row-text"></h1>
                <span className="services-second-row-paragraph"></span> */}
                </div>

            </div>

              </div>
                <div className="service-mobile-cover"> 
              <div className="services-mobile-view">
                <div className="services-mobile-first-row">
                  <div className="services-mobile-inner-text">
                    <div className="service-mobile-text-view">
                       <FaPlaneDeparture className="services-list-icons" size={18}/>
               <span className="service-text-title">1. Travel Consultation & Visa Assistance</span>
               <span className="services-list-text"><br/>We simplify your travel experience by handling 
                every detail — from visa processing to flight booking.
                 Our team ensures your application is accurate, timely, 
                and stress-free.</span>
                <ul>

                    <li className="services-list-text">- Personalized travel consultation.</li>

                    <li className="services-list-text">- Tourist, student, and work visa applications.</li>

                    <li className="services-list-text">- Flight itinerary and travel insurance support.</li>

                    <li className="services-list-text">-Embassy interview preparation.</li>
                </ul>
                    </div>
                    <div className="service-mobile-text-view">
                      <FaBriefcase className="services-list-icons" size={18}/>
               <span className="service-text-title">2. Overseas Job Placement</span>
               <span className="services-list-text">
                <br/>Looking to start a new career abroad?
                We connect qualified candidates with trusted international
                employers and ensure compliance with all migration and labor regulations.
               </span>
               <ul>
                <li className="services-list-text">- Job matching and recruitment support.</li>
                <li className="services-list-text">- Work permit processing.</li> 

               <li className="services-list-text">- Pre-departure orientation.</li>

                <li className="services-list-text">- Ongoing support after arrival.</li>
                </ul>
                    </div>
                  </div>
                  <div className="services-mobile-inner-text">
                    <div className="service-mobile-text-view"> 
                       <FaGraduationCap className="services-list-icons" size={18}/>
               <span className="service-text-title">3. Study Abroad Guidance</span>
               <span className="services-list-text">
                <br/>Choose from top institutions worldwide with our expert counseling.
                We guide you through every step — from admission to arrival.
               </span>
               <ul>
                <li className="services-list-text">- School and course selection.</li>
                <li className="services-list-text">- Application and documentation support.</li>

                <li className="services-list-text">- Visa and scholarship assistance.</li>

                <li className="services-list-text">- Accommodation and travel arrangements</li>
               </ul>
                    </div>
                    <div className="service-mobile-text-view"> 
                      <FaPassport className="services-list-icons" size={18}/>
                <span className="service-text-title">4. Document Processing & Legal Support</span>
                <span className="services-list-text">
                  <br/>We assist with all your document needs — making 
                  international procedures simple and secure.
                </span>
                <ul>
                  <li className="services-list-text">- Passport applications and renewals.</li>
                  <li className="services-list-text">- Police clearance certificates</li>
                  <li className="services-list-text">- Invitation and sponsorship letters</li>
                  <li className="services-list-text">- Legalization and authentication</li>
                </ul>
                    </div>
                  </div>
                  
              </div>
              </div>
              </div>
          <SecondServiceSection />
          <div className="services-booking-forms">
            <div className="service-booking-form-row">
              
            <ReviewForm/>
            <motion.div className="service-row-column"
            key={location.pathname}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            >
              <h1>Get in Touch with us</h1>
              <button onClick={()=>window.location.href='/book'} className="appoint-book-hover">Book Appointment</button>
              <button onClick={()=>window.location.href='/contact'} className="appoint-book-hover">Contact us</button>
            </motion.div>
          </div> 
          </div>
        </div>
      
      </div>

      
      
    </motion.div>
  );
};

export default Services;
