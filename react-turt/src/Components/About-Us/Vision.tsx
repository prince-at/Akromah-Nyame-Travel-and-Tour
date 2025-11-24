
import "../Pages/Vision.css";

import { TrendingData } from "../TrendingData";

const Vision = () => { 
  return (
    <div className="vision-background-3"> 
      <div className="image-for-visit">
        <h1 className="do-wanna-miss">Destinations You Don’t Wanna Miss</h1>
      </div>
      <div className="japan-container">
        {TrendingData.map((item, index) => {
          return(
          <div key={index} className="center-text" >
            <div className="japan-image-container">
            <img src={item.photo} alt="japan-photo" className="japan-photo"/>
            <div className="japan-title">
            <h2>{item.title}</h2>
            </div>
            </div>
            
          </div>
        )})}
        
      </div>
      
     
    </div>
  );
};

export default Vision;
