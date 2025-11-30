// import { useState } from "react";
// import { FaStar } from "react-icons/fa";

// function MoreImage() {
//      const [liked, setLiked] = useState<boolean[]>(CountriesList.map(() => false));
    
//       const handleLike = (index: number) => {
//         setLiked((prevLiked) => {
//           const updatedLiked = [...prevLiked];
//           updatedLiked[index] = !updatedLiked[index];
//           return updatedLiked;
//         });
//       };
    
//        const renderStars = (rating: number) => {
//           return (
//             <div className="star-rating">
//               {[...Array(5)].map((_, i) => (
//                 <FaStar
//                   key={i}
//                   className={i < rating ? "star filled" : "star empty"}
//                   style={{fontSize:"28px"}}
//                 />
//               ))}
//             </div>
//           );
//         };
    
//   return (
//     <div>
//         {CountriesList.map((country, index) => {
                                    
//                 <div key={index} className="country-item">
//                 <div className="container-for-image">
//                     <img
//                         src={dubai}
//                         alt={`${country.name} flag`}
//                          className="country-images"
//                         />
//                        </div>
//                     <div className="span-text">
//                      <div className="span-icon-column">
                      
//                         <div
//                         className="heart-icon"
//                         onClick={() => handleLike(index)}
//                                             style={{ cursor: "pointer" }}
//                                           >
//                                             {liked[index] ? (
//                                               <FaHeart
//                                                 className="like-icon"
//                                                 style={{
//                                                   color: "white",
                                                  
//                                                   fontSize: "1.5rem",
//                                                 }}
//                                               />
//                                             ) : (
//                                               <FaRegHeart
//                                                 className="like-icon"
//                                                 style={{
//                                                   borderColor: "gray",
                                                  
//                                                   fontSize: "1.4rem",
//                                                 }}
//                                               />
//                                             )}
//                                           </div>
//                                           </div>
//                                           <div className="span-text-column-row">
                                            
//                                             <div className="span-text-column-only-1">
                                             
                                          
                                          
//                                             </div>
//                                             <div className="span-text-column-only-2">
//                                               <span className="work-country">{country.name}</span>
//                                                {renderStars((country as any).rating || 4)}
//                                                <span className="span-title-text">{country.title}</span>
//                                                 <span className="process-duration" onClick={()=>navigate("/work-description")}>{country.jobs}</span>
//                                             </div>
//                                           </div>
                      
//                                         </div>
                                      
//                                          <div className="country-button">
//                                           <button
//                                           className="country-button-text"
                                            
//                                             onClick={() => navigate('/uae')}
//                                           >
//                                             {country.button}
//                                           </button>
//                                           </div>
//                                       </div>
                                     
                                    
//                                   })}
//     </div>
//   )
// }

// export default MoreImage