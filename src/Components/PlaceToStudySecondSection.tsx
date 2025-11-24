import { FaHeart, FaRegHeart } from "react-icons/fa";
import { StudyOffer } from "./StudyOffer";
import { useState } from "react";
import '../../src/Components/Pages/Css/PlaceToStudy.css'



const PlaceToStudySecondSection = () => {
  const [liked, setLiked] = useState<boolean[]>(Array(StudyOffer.length).fill(false));

  const handleLike = (index: number) => {
    setLiked(prevLiked => {
      const newLiked = [...prevLiked];
      newLiked[index] = !newLiked[index];
      return newLiked;
    });
  };

  return (
    <div className='place-to-study-container'>
                   <div className='abroad-container'>
            <div className='study-list1'>
                          {StudyOffer.map((country, index) => {
                              
                            return (
                              <div key={index} className='study-item1'>
                                <div className='study-abroad-image'>
                                <img src={country.pictureOfStudy} alt='country-name' className='study-country-images' />
                                <div className='heart-icon-2' onClick={() => handleLike(index)} style={{ cursor: 'pointer' }}>
                                    {liked[index] ? (
                                      <FaHeart className="like-icon-2" style={{ color: 'red', marginLeft: '6px', fontSize: '1.5rem' , }} />
                                    ) : (
                                      <FaRegHeart className="like-icon-2" style={{ borderColor: 'gray', marginLeft: '7px', fontSize: '1.4rem' }} />
                                    )}
                                  </div>
                                  <p className='study-text-on-image'>{country.text}</p>
                                </div>
                                {/* <div className='span-text'>
                                  <span className='work-country'>{country.name}</span>
                                  <span>{country.title}</span>
                                  <span className='process-duration'>{country.process}</span>
                                  <button className='country-button'>{country.button}</button>
            
            
                                </div> */}
                                
                              </div>
                            );
                          })}
                            
                        </div>

        </div>
    </div>
  )
}

export default PlaceToStudySecondSection