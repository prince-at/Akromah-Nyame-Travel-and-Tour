import  { useState } from 'react'
import ReviewForm from './ReviewForm';
import { FaHeart, FaRegHeart, FaStar } from 'react-icons/fa';
import { CountriesList, countriesList1, countriesList2 } from './scene/CountryList';



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
    <div>
            
            <div className="availability-check-countries-container">

              <div className="working-department"> 
                          {CountriesList.map((country, index) => {
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
                                    
                                    onClick={() => (window.location.href = country.id)}
                                  >
                                    {country.button}
                                  </button>
                                  </div>
                              </div>
                             
                            ); 
                          })}
                        </div> 
              
                        <div className="working-department"> 
                          {countriesList1.map((country, index) => {
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
                                    
                                    onClick={() => (window.location.href = country.id)}
                                  >
                                    {country.button}
                                  </button>
                                  </div>
                              </div>
                             
                            ); 
                          })}
                        </div>
              
                        <div className="working-department"> 
                          {countriesList2.map((country, index) => {
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
                                    
                                    onClick={() => (window.location.href = country.id)}
                                  >
                                    {country.button}
                                  </button>
                                  </div>
                              </div>
                             
                            ); 
                          })}
                        </div>
           
           <div className="availability-check-countries">
            <ReviewForm/>
            
                         

           </div>
           
           </div>
    </div>
  )
}

export default MoreJobs