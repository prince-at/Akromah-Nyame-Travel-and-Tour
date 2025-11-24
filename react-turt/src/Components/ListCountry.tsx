import { FaArrowRight, FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import "././Pages/Css/ListCountry.css";
import { CountriesList, countriesList1, countriesList2 } from "./scene/CountryList";

import { useState } from "react";


const ListCountry = () => {
  const [liked, setLiked] = useState<boolean[]>(CountriesList.map(() => false));

  const handleLike = (index: number) => {
    setLiked((prevLiked) => {
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
    <div>
      <div className="list-country-container">
        {/* ...existing code... */}
        <div className="country1">
           <div className="see-more-button">
          <h1 className="opportunity">OUR JOB OFFER</h1>
          <div className="see-more-button-inner">
            <button style={{ fontSize: "1rem" }} className="view-more-works"
            onClick={() => (window.location.href ='/uae')}>see more</button>
            <FaArrowRight
              className="arrow-icon"
              style={{ fontSize: ".7rem", color: "black", marginLeft: "10px" }}
            /></div>
          </div>
          <div className="swiper-desktop-view">
          
          <div className="working-department"> 
            {CountriesList.map((country, index) => {
              return (
                
                <div key={index} className="country-item">
                  <div className="container-for-image"
                  
                  >
                    <img
                      src={country.image}
                      alt={`${country.name} flag`}
                      className="country-images"
                      onClick={()=>window.location.href="/work-description"}
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
                        <span className="work-country" onClick={()=>window.location.href="/work-description"}>{country.name}</span>
                         {renderStars((country as any).rating || 4)}
                         <span className="span-title-text" >{country.title}</span>
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
          
            </div>
          </div>

          {/* ...existing code... */}
        </div>
       
    </div>
  );
};

export default ListCountry; 