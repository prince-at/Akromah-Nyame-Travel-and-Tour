import  { useState } from 'react'
import ReviewForm from './ReviewForm';
import { FaHeart, FaRegHeart, FaStar } from 'react-icons/fa';
import { CountriesList, countriesList1Divided, countriesList1Divided1, countriesList2Divided, countriesList2Divided2, countriesListDivided, countriesListDivided1 } from './scene/CountryList';

import '././Pages/Css/More.css'
import { motion } from 'framer-motion';



const MoreJobs = () => {


  const [liked, setLiked] = useState<boolean[]>(CountriesList.map(() => false));

  const handleLike = (index: number) => {
    setLiked((prevLiked) => {
      const updatedLiked = [...prevLiked];
      updatedLiked[index] = !updatedLiked[index];
      return updatedLiked;
    });
  };

   const renderStars = (rating: number) => {
      return (
        <div className="star-rating">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={i < rating ? "star filled" : "star empty"}
              style={{fontSize:"28px"}}
            />
          ))}
        </div>
      );
    };


  return (

    <motion.div 
    key={location.pathname}
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -100 }}
    transition={{ duration: 0.3 }}
    >
            
            <div className="availability-check-countries-container">
              <div className='related-job-offer'>
                <h2 className='related'>RELATED JOB OFFER</h2>
              </div>
                
              <div className="working-department">
            
                        <div className='place-center'> 
                          {countriesListDivided1.map((country, index) => {
                            return (
                              
                              <div key={index} className="country-item">
                                <div className="container-for-image">
                                  <img
                                    src={country.image}
                                    alt={`${country.name} flag`}
                                    className="country-images"
                                  />
                                  
                                </div>
                                <div className="span-text">
                                  <div className="span-icon-column">
              
                                    <div
                                    className="heart-icon"
                                    onClick={() => handleLike(index)}
                                    style={{ cursor: "pointer" }}
                                  >
                                    {liked[index] ? (
                                      <FaHeart
                                        className="like-icon"
                                        style={{
                                          color: "white",
                                          
                                          fontSize: "1.5rem",
                                        }}
                                      />
                                    ) : (
                                      <FaRegHeart
                                        className="like-icon"
                                        style={{
                                          borderColor: "gray",
                                          
                                          fontSize: "1.4rem",
                                        }}
                                      />
                                    )}
                                  </div>
                                  </div>
                                  <div className="span-text-column-row">
                                    
                                    <div className="span-text-column-only-1">
                                     
                                  
                                  
                                    </div>
                                    <div className="span-text-column-only-2">
                                      <span className="work-country">{country.name}</span>
                                       {renderStars((country as any).rating || 4)}
                                       <span className="span-title-text">{country.title}</span>
                                        <span className="process-duration" onClick={()=>window.location.href="/work-description"}>{country.jobs}</span>
                                    </div>
                                  </div>
              
                                </div>
                              
                                 <div className="country-button">
                                  <button
                                  className="country-button-text"
                                    
                                    onClick={() => window.location.href='/uae'}
                                  >
                                    {country.button}
                                  </button>
                                  </div>
                              </div>
                             
                            ); 
                          })}
                          </div>
                           <div className='place-center' > 
                          {countriesListDivided.map((country, index) => {
                            return (
                              
                              <div key={index} className="country-item">
                                <div className="container-for-image">
                                  <img
                                    src={country.image}
                                    alt={`${country.name} flag`}
                                    className="country-images"
                                  />
                                  
                                </div>
                                <div className="span-text">
                                  <div className="span-icon-column">
              
                                    <div
                                    className="heart-icon"
                                    onClick={() => handleLike(index)}
                                    style={{ cursor: "pointer" }}
                                  >
                                    {liked[index] ? (
                                      <FaHeart
                                        className="like-icon"
                                        style={{
                                          color: "white",
                                          
                                          fontSize: "1.5rem",
                                        }}
                                      />
                                    ) : (
                                      <FaRegHeart
                                        className="like-icon"
                                        style={{
                                          borderColor: "gray",
                                          
                                          fontSize: "1.4rem",
                                        }}
                                      />
                                    )}
                                  </div>
                                  </div>
                                  <div className="span-text-column-row">
                                    
                                    <div className="span-text-column-only-1">
                                     
                                  
                                  
                                    </div>
                                    <div className="span-text-column-only-2">
                                      <span className="work-country">{country.name}</span>
                                       {renderStars((country as any).rating || 4)}
                                       <span className="span-title-text">{country.title}</span>
                                        <span className="process-duration" onClick={()=>window.location.href="/work-description"}>{country.jobs}</span>
                                    </div>
                                  </div>
              
                                </div>
                              
                                 <div className="country-button">
                                  <button
                                  className="country-button-text"
                                    
                                    onClick={() => window.location.href='/australia'}
                                  >
                                    {country.button}
                                  </button>
                                  </div>
                              </div>
                             
                            ); 
                          })}
                          </div>
                        </div> 
              
                        <div className="working-department">
                        <div className='place-center'> 
                          {countriesList1Divided1.map((country, index) => {
                            return (
                              
                              <div key={index} className="country-item">
                                <div className="container-for-image">
                                  <img
                                    src={country.image}
                                    alt={`${country.name} flag`}
                                    className="country-images"
                                  />
                                  
                                </div>
                                <div className="span-text">
                                  <div className="span-icon-column">
              
                                    <div
                                    className="heart-icon"
                                    onClick={() => handleLike(index)}
                                    style={{ cursor: "pointer" }}
                                  >
                                    {liked[index] ? (
                                      <FaHeart
                                        className="like-icon"
                                        style={{
                                          color: "white",
                                          
                                          fontSize: "1.5rem",
                                        }}
                                      />
                                    ) : (
                                      <FaRegHeart
                                        className="like-icon"
                                        style={{
                                          borderColor: "gray",
                                          
                                          fontSize: "1.4rem",
                                        }}
                                      />
                                    )}
                                  </div>
                                  </div>
                                  <div className="span-text-column-row">
                                    
                                    <div className="span-text-column-only-1">
                                     
                                  
                                  
                                    </div>
                                    <div className="span-text-column-only-2">
                                      <span className="work-country">{country.name}</span>
                                       {renderStars((country as any).rating || 4)}
                                       <span className="span-title-text">{country.title}</span>
                                        <span className="process-duration" onClick={()=>window.location.href="/work-description"}>{country.jobs}</span>
                                    </div>
                                  </div>
              
                                </div>
                              
                                 <div className="country-button">
                                  <button
                                  className="country-button-text"
                                    
                                    onClick={() => window.location.href='/asia'}
                                  >
                                    {country.button}
                                  </button>
                                  </div>
                              </div>
                             
                            ); 
                          })}
                          </div>
                           <div className='place-center' > 
                          {countriesList1Divided.map((country, index) => {
                            return (
                              
                              <div key={index} className="country-item">
                                <div className="container-for-image">
                                  <img
                                    src={country.image}
                                    alt={`${country.name} flag`}
                                    className="country-images"
                                  />
                                  
                                </div>
                                <div className="span-text">
                                  <div className="span-icon-column">
              
                                    <div
                                    className="heart-icon"
                                    onClick={() => handleLike(index)}
                                    style={{ cursor: "pointer" }}
                                  >
                                    {liked[index] ? (
                                      <FaHeart
                                        className="like-icon"
                                        style={{
                                          color: "white",
                                          
                                          fontSize: "1.5rem",
                                        }}
                                      />
                                    ) : (
                                      <FaRegHeart
                                        className="like-icon"
                                        style={{
                                          borderColor: "gray",
                                          
                                          fontSize: "1.4rem",
                                        }}
                                      />
                                    )}
                                  </div>
                                  </div>
                                  <div className="span-text-column-row">
                                    
                                    <div className="span-text-column-only-1">
                                     
                                  
                                  
                                    </div>
                                    <div className="span-text-column-only-2">
                                      <span className="work-country">{country.name}</span>
                                       {renderStars((country as any).rating || 4)}
                                       <span className="span-title-text">{country.title}</span>
                                        <span className="process-duration" onClick={()=>window.location.href="/work-description"}>{country.jobs}</span>
                                    </div>
                                  </div>
              
                                </div>
                              
                                 <div className="country-button">
                                  <button
                                  className="country-button-text"
                                    
                                    onClick={() => window.location.href='/europe'}
                                  >
                                    {country.button}
                                  </button>
                                  </div>
                              </div>
                             
                            ); 
                          })}
                          </div>
                        </div> 
              
                        <div className="working-department"> 
                          <div className='place-center'>
                          {countriesList2Divided2.map((country, index) => {
                            return (
                              
                              <div key={index} className="country-item">
                                <div className="container-for-image">
                                  <img
                                    src={country.image}
                                    alt={`${country.name} flag`}
                                    className="country-images"
                                  />
                                  
                                </div>
                                <div className="span-text">
                                  <div className="span-icon-column">
              
                                    <div
                                    className="heart-icon"
                                    onClick={() => handleLike(index)}
                                    style={{ cursor: "pointer" }}
                                  >
                                    {liked[index] ? (
                                      <FaHeart
                                        className="like-icon"
                                        style={{
                                          color: "white",
                                          
                                          fontSize: "1.5rem",
                                        }}
                                      />
                                    ) : (
                                      <FaRegHeart
                                        className="like-icon"
                                        style={{
                                          borderColor: "gray",
                                          
                                          fontSize: "1.4rem",
                                        }}
                                      />
                                    )}
                                  </div>
                                  </div>
                                  <div className="span-text-column-row">
                                    
                                    <div className="span-text-column-only-1">
                                     
                                  
                                  
                                    </div>
                                    <div className="span-text-column-only-2">
                                      <span className="work-country">{country.name}</span>
                                       {renderStars((country as any).rating || 4)}
                                       <span className="span-title-text">{country.title}</span>
                                        <span className="process-duration" onClick={()=>window.location.href="/work-description"}>{country.jobs}</span>
                                    </div>
                                  </div>
              
                                </div>
                              
                                 <div className="country-button">
                                  <button
                                  className="country-button-text"
                                    
                                    onClick={() => window.location.href='/europe'}
                                  >
                                    {country.button}
                                  </button>
                                  </div>
                              </div>
                             
                            ); 
                          })}</div>
                           <div className='place-center'>
                          {countriesList2Divided.map((country, index) => {
                            return (
                              
                              <div key={index} className="country-item">
                                <div className="container-for-image">
                                  <img
                                    src={country.image}
                                    alt={`${country.name} flag`}
                                    className="country-images"
                                  />
                                  
                                </div>
                                <div className="span-text">
                                  <div className="span-icon-column">
              
                                    <div
                                    className="heart-icon"
                                    onClick={() => handleLike(index)}
                                    style={{ cursor: "pointer" }}
                                  >
                                    {liked[index] ? (
                                      <FaHeart
                                        className="like-icon"
                                        style={{
                                          color: "white",
                                          
                                          fontSize: "1.5rem",
                                        }}
                                      />
                                    ) : (
                                      <FaRegHeart
                                        className="like-icon"
                                        style={{
                                          borderColor: "gray",
                                          
                                          fontSize: "1.4rem",
                                        }}
                                      />
                                    )}
                                  </div>
                                  </div>
                                  <div className="span-text-column-row">
                                    
                                    <div className="span-text-column-only-1">
                                     
                                  
                                  
                                    </div>
                                    <div className="span-text-column-only-2">
                                      <span className="work-country">{country.name}</span>
                                       {renderStars((country as any).rating || 4)}
                                       <span className="span-title-text">{country.title}</span>
                                        <span className="process-duration" onClick={()=>window.location.href="/work-description"}>{country.jobs}</span>
                                    </div>
                                  </div>
              
                                </div>
                              
                                 <div className="country-button">
                                  <button
                                  className="country-button-text"
                                    
                                    onClick={() => window.location.href='/europe'}
                                  >
                                    {country.button}
                                  </button>
                                  </div>
                              </div>
                             
                            ); 
                          })}</div>
                          
                        </div>
                          
           <div className="availability-check-countries">
            <ReviewForm/>
            
                         

           </div>
           
           </div>

    </motion.div>
   
  )
}

export default MoreJobs