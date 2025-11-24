
import picture from "../images/WhatsApp Image 2025-06-29 at 3.08.04 PM.jpeg"; 

const Portfolio = () => {

  return (
    <div className="full-container-portfolio">
      <div className="portfolio-text-container">
        <img src={picture} alt={picture} className="uk-picture" />
        <div className="portfolio-stack">
           
          <div className="our-portfolio-container">
            <h1 className="our-portfolio">WHY US?</h1>
            <div className="portfolio-text-1">
              {" "}
              Crafting Unforgettable Memories
            </div>
            <span className="portfolio-text-2">Visit our Portfolio</span>
            
          </div>
          <button className="portfolio-button" onClick={() => (window.location.href = '/blog')}>See Portfolio</button>
        </div>
      </div> 
    </div>
  );
};

export default Portfolio;
