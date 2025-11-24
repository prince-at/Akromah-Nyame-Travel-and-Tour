import { FaArrowRight, FaHeart, FaRegHeart, FaStar } from 'react-icons/fa';
import '../../src/Components/Pages/Css/PlaceToStudy.css'
import { PlaceToStudyData, PlaceToStudyData1 } from './PlaceToStudyList';
import { useState } from 'react';


const PlaceToStudy = () => {
  const [liked, setLiked] = useState<boolean[]>(Array(PlaceToStudyData.length).fill(false));
 
  const handleLike = (index: number) => {
    setLiked(prevLiked => {
      const newLiked = [...prevLiked];
      newLiked[index] = !newLiked[index];
      return newLiked;
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
    <>
    <div className='place-to-study-container'> 
        <div className='abroad-container'>
        <div className='place-to-study-header'>
          <div className='where-to-study'>
            <div>
            {/* <h1 className='choose-why'>Choose where to Study. </h1> */}
            <p className='place-to-study'>Our Study Abroad offer</p></div>
             <p className='certificate-of-study'>Let's help you with the top university abroad you can study.
                Degree Programmes, Master's Programmes, PhD Programmes, and more. fully funded scholarships opportunities available.<br/>
               <div className='study-touch-container'> <span className='study-touch' onClick={()=> window.location.href="/contact"}>Get in Touch</span></div>
             </p>
             
             
             </div>
             
           
         
        </div> 
        
            <div className='study-abroad-list-container'>
         <div className="working-department"> 
                    {PlaceToStudyData.map((country, index) => {
                      return (
                        
                        <div key={index} className="country-item"
                        onClick={()=>window.location.href='/study-abroad-details'}
                        >
                          <div className="container-for-image">
                            <img
                              src={country.studyPicture1}
                              alt={`${country.title} flag`}
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
                            
                              <div className="span-text-column-only-2">
                                <span className="work-country" onClick={() => (window.location.href = '/study-abroad-details')}>{country.title}</span>
                                 {renderStars((country as any).rating || 4)}
                                 <span className="span-title-text">{country.program}</span>
                                  <span className="process-duration" onClick={()=>window.location.href="/study-abroad-details"}>{country.button}</span>
                                  
                              </div>
                            </div>
        
                          </div>
                        
                           <div className="country-button">
                            <button
                            className="country-button-text"
                              
                              onClick={() => (window.location.href = '/form-1')}
                            >
                              {country.jobs}
                            </button>
                            </div>
                        </div>
                       
                      ); 
                    })}
                  </div> 
                  </div>
        
                     <div className='study-abroad-list-container'>
         <div className="working-department"> 
                    {PlaceToStudyData1.map((country, index) => {
                      return (
                        
                        <div key={index} className="country-item">
                          <div className="container-for-image"
                          onClick={()=>window.location.href='/study-abroad-details'}
                          >
                            <img
                              src={country.studyPicture1}
                              alt={`${country.title} flag`}
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
                                <span className="work-country" onClick={() => (window.location.href = '/study-abroad-details')}>{country.title}</span>
                                 {renderStars((country as any).rating || 4)}
                                 <span className="span-title-text">{country.program}</span>
                                  <span className="process-duration" onClick={()=>window.location.href="/study-abroad-details"}>{country.button}</span>
                                  
                              </div>
                            </div>
        
                          </div>
                        
                           <div className="country-button">
                            <button
                            className="country-button-text"
                              
                              onClick={() => (window.location.href = '/form-1')}
                            >
                              {country.jobs}
                            </button>
                            </div>
                        </div>
                       
                      ); 
                    })}
                  </div> 
                  </div>
        </div>
        

    </div>
       <div className='more-to-see'onClick={()=> (window.location.href = '/study-abroad-details') }>
                  
                          <p>See more</p>
                          <FaArrowRight className='right'/>
                        </div>
    </>
  )
}

export default PlaceToStudy