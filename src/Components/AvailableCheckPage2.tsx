import './Pages/Css/AvailabilityCheckPage.css'
import australiaWorkers from '../images/aus-occupation-list-img-02-min-1024x352.jpg' 
import { AvailabiltyCheckList2 } from './AvailabiltycheckList'
import MoreJobs from './MoreJobs'



const AvailabilityCheckPage = () => {
  
  return (
    <div > 
        <div >
            <div className="availability-check-header">
                <img src={australiaWorkers} alt="Availability Check" className="availability-check-image-background-cover" />
                <h1 className="availability-check-title">JOBS AVAILABLE - AUSTRALIA </h1>
            </div>
            <div className="availability-check-list-container">
                {AvailabiltyCheckList2.map((item, index) => {
                    return (
                        <div className="availability-check-list" key={index}>
                            <img src={item.image} alt="Job" className="availability-check-image" />
                            <div className="availability-check-details">
                            <li className="availability-check-item-1" onClick={() => window.location.href='/contact'} style={{ cursor: 'pointer' }}>{item.title}</li>
                            <li className="availability-check-item">{item.location}</li>
                            <li className="availability-check-item">{item.availability}</li>
                            <li className="availability-check-item" onClick={() => window.location.href='/contact'} style={{ cursor: 'pointer' }}>{item.contact}</li>
                            <button className="availbility-contact" onClick={()=>window.location.href="/contact"}> {item.button}</button>
                            </div>
                        </div> 
                    )
                })}
               
            </div>
        {/* put component here */}
           <MoreJobs/>

  
        </div>
    </div>
  )
}

export default AvailabilityCheckPage