import { AvailabilityCheckList4 } from "./AvailabiltycheckList"
import './Pages/Css/AvailabilityCheckPage.css' 
import europeWork from '../images/poland6527d10f85752.jpg'
import MoreJobs from "./MoreJobs"


 

const AvailabilityCheckEurope = () => {


  return (
    <div >
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
                            <li className="availability-check-item-1" onClick={() => (window.location.href='/contact')} style={{ cursor: 'pointer' }}>{item.title}</li>
                            <li className="availability-check-item">{item.location}</li>
                            <li className="availability-check-item">{item.availability}</li>
                            <li className="availability-check-item" onClick={() => (window.location.href='/contact')} style={{ cursor: 'pointer' }}>{item.contact}</li>
                            <button className="availbility-contact" onClick={()=>window.location.href="/contact"}> {item.button}</button>
                            </div>
                        </div>
                    )
                })}
               
            </div>
          <MoreJobs/>
        </div>
    </div>
  )
}

export default AvailabilityCheckEurope;