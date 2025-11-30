import { AvailabilityCheckList4 } from "./AvailabiltycheckList"
import './Pages/Css/AvailabilityCheckPage.css' 
import europeWork from '../images/poland6527d10f85752.jpg'
import MoreJobs from "./MoreJobs"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"


 

const AvailabilityCheckEurope = () => {
const navigate =useNavigate();

  return (
    <motion.div 
    key={location.pathname}
     initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -100 }}
    transition={{ duration: 0.3 }}
    >
        <div >
            <div className="availability-check-header">
                <img src={europeWork} alt="Availability Check" className="availability-check-image-background" />
                <h1 className="availability-check-title">JOBS AVAILABLE - EUROPE </h1>
            </div>
            <div className="availability-check-list-container">
                {AvailabilityCheckList4.map((item, index) => {
                    return (
                        <div className="availability-check-list" key={index}>
                            <img src={item.image} alt="Job" className="availability-check-image" />
                            <div className="availability-check-details">
                            <button className="availability-check-item-1" onClick={() => navigate('/contact')} style={{ cursor: 'pointer' }}>{item.title}</button>
                            <li className="availability-check-item">{item.location}</li>
                            <li className="availability-check-item">{item.availability}</li>
                            <button className="availability-check-item" onClick={() => navigate('/contact')} style={{ cursor: 'pointer' }}>{item.contact}</button>
                            <button className="availbility-contact" onClick={()=> navigate("/contact")}> {item.button}</button>
                            </div>
                        </div>
                    )
                })}
               
            </div>
          <MoreJobs/>
        </div>
    </motion.div>
  )
}

export default AvailabilityCheckEurope;