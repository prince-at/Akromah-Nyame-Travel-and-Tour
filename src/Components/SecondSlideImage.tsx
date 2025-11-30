import { useNavigate } from 'react-router-dom'
import study from '../assets/Ben-Headers-7.png.jpg'
import '././scene/SecondServiceSection.css'

function SecondSlideImage() {
    const navigate = useNavigate();
  return (
    <div>
         <div className="each-slider-image-container">
        <img src={study} alt='slider-image' className="slider-image"/>
        <h1 className="slider-title">OUR STUDY OFFER ABROAD</h1>
        <p className="slider-text">secure admission to Study in USA, UK, GERMANY, NEW ZEALAND, Canada, ETC. with fully funded scholarships.</p>
        <button className="slider-button" onClick={() => navigate ('/form-1')}>Apply Now</button>
        </div>
    </div>
  )
}

export default SecondSlideImage