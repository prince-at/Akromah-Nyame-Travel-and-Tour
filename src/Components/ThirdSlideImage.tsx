import { useNavigate } from 'react-router-dom'
import travel from '../assets/After-School-Africa-USA-Visa-Application-Guide.jpg'
import './scene/SecondServiceSection.css'
function ThirdSlideImage() {
    const navigate = useNavigate();
  return (
    
         <div>
         <div className="each-slider-image-container">
        <img src={travel} alt='slider-image' className="slider-image"/>
        <h1 className="slider-title">TRAVELLING DOCUMENTS ASSISTANT.</h1>
        <p className="slider-text">Work VISA, Visit VISA, STUDENT VISA, Passport, Residency Permit ID, Flight ticket,</p>
        <button className="slider-button" onClick={() => navigate ('/document-form')}>Apply Now</button>
        </div>
    </div>
    
  )
}

export default ThirdSlideImage