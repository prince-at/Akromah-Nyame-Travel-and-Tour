import { AvailabiltyCheckList3 } from "./AvailabiltycheckList"
import './Pages/Css/AvailabilityCheckPage.css'

import asiaWorkers from '../images/banner-engineer-team-high-five-260nw-2570693013.jpg'
import MoreJobs from "./MoreJobs"
 
 
const AvailabilityCheckAsia = () => {
 
  return (
    <div >
        <div >
            <div className="availability-check-header">
                <img src={asiaWorkers} alt="Availability Check" className="availability-check-image-background" />
                <h1 className="availability-check-title">JOBS AVAILABLE - ASIA </h1>
            </div>
            <div className="availability-check-list-container">
                {AvailabiltyCheckList3.map((item, index) => {
                    return (
                        <div className="availability-check-list" key={index}>
                            <img src={item.image} alt="Job" className="availability-check-image" />
                            <div className="availability-check-details">
                            <li className="availability-check-item-1" onClick={() => (window.location.href='/contact')} style={{ cursor: 'pointer' }}>{item.title}</li>
                            <li className="availability-check-item">{item.location}</li>
                            <li className="availability-check-item">{item.availability}</li>
                            <li className="availability-check-item" onClick={() => (window.location.href='/contact')} style={{ cursor: 'pointer' }}>{item.contact}</li>
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

export default AvailabilityCheckAsia;