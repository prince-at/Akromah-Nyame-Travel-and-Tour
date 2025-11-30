import { useNavigate } from 'react-router-dom'
import workOutSide from '../assets/School-Africa-USA-Visa-Application-Guides.jpg'
import '././scene/SecondServiceSection.css'
function FirstSlideImage() {
    const navigate =useNavigate();
  return (
    <div>
        <div className="each-slider-image-container">
        <img src={workOutSide} alt='slider-image' className="slider-image"/>
        <h1 className="slider-title">OUR WORK ABROAD OFFER</h1>
        <p className="slider-text">Choose your dream work in any of these Countries: Dubai, Canada, Austrialia, Luxembourg, Germany, etc.</p>
        <button className="slider-button" onClick={() => navigate ('/work-form')}>Apply Now</button>
        </div>

        
    </div>
  )
}

export default FirstSlideImage