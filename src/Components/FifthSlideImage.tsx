import { useNavigate } from 'react-router-dom'
import hotel from '../assets/receptionist-elegant-suit-work-hours-with-customer.jpg'
import '././scene/SecondServiceSection.css'

function FifthSlideImage() {
    const navigate =useNavigate();
  return (
  <div className="each-slider-image-container">
        <img src={hotel} alt='slider-image' className="slider-image"/>
        <h1 className="slider-title">HOTEL RESERVATION ABROAD</h1>
        <p className="slider-text">Lets reserve the best relaxation and comfortable hotel rooms for you as you travel Abroad.</p>
        <button className="slider-button" onClick={() => navigate ('/hotel-form')}>Apply Now</button>
        </div>
  )
}

export default FifthSlideImage