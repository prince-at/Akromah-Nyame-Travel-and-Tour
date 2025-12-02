
import air from '../assets/close-up-man-holding-tickets.jpg'
import '././scene/SecondServiceSection.css'

function ForthSlideImage() {
    
  return (
       <div>
         <div className="each-slider-image-container">
        <img src={air} alt='slider-image' className="slider-image"/>
        <h1 className="slider-title">BOOK YOUR FLIGHT WITH US</h1>
        <p className="slider-text">Whether you are planning a business trip, family vacation, or a spontaneous getaway — we ve got you covered. </p>
        <button className="slider-button" onClick={() => window.location.href= '/flight-form'}>Apply Now</button>
        </div>
    </div>
  )
}

export default ForthSlideImage