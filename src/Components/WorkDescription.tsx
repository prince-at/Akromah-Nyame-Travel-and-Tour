import "././Pages/Css/WorkDescription.css"
import desc from "../assets/School-Africa-USA-Visa-Application-Guides.jpg"

import { motion } from "framer-motion";


const WorkDescription = () => {
   
    
  return (
    <motion.div className="work-description-full-page"> 
        <div className="work-description-full-page">
              
            <div className="desc-im"> 
                <img src={desc} alt="Work Description" className="im-for-desc"/>
                <div className="work-types-title">
                <h1 className="work-description-title">WORK TYPE</h1>
                <p className="hiring">We are recruiting workers for the following hospitality positions to countries
                        such as: Dubai, Qatar, Germany, Canada, Saudi Arabia, Norway, Italy, Australia, Schengen and other part of Europe</p>
                </div> 
            </div> 
            <div className="long-line-for-test">
                <div className="line">
                    <h1 className="list-head">HOSPITALITY POSITIONS:</h1>
                     <ul className="desc-list">
                         
                        <li>Hotel Receptionist</li>
                        <li>Hotel Manager</li>
                        <li>Hotel Housekeeper</li>
                        <li>Hotel Waiter/Waitress</li>
                        <li>Hotel Chef/Cook</li>
                        <li>Hotel Bartender</li>
                        <li>Hotel Security Personnel</li>
                        <li>Hotel Maintenance Staff</li>
                        <li>Hotel Concierge</li>
                        <li>Home care </li>
                        <li>Cleaner</li>
                    </ul>
                    <h1 className="list-head">HEAVY EQUIPMENT & MACHINERY</h1>
                   <ul className="desc-list">
                            <li>General Laborer</li>
                            <li>Construction Worker</li>
                            <li>Skilled Laborer</li>
                            <li>Site Foreman / Supervisor</li>
                            <li>Construction Manager</li>
                            <li>Project Manager</li>
                            <li>Site Engineer</li>
                            <li>Estimator</li>
                            <li>Surveyor</li>
                            <li>Safety Officer / Health & Safety Manager </li>
                        </ul>
                         <div className="applies-container">
                    <button className="apply-for-work" onClick={()=>window.location.href="/work-form"}>Apply Now</button>
                    <button className="apply-for-work" onClick={() => window.location.href='/contact'}>Contact</button>
                </div>
                </div>
                <div className="line">
                    <h1 className="list-head">CONSTRUCTION POSITIONS:</h1>
                    <ul className="desc-list">
                        
                        <li>Carpenter</li>
                        <li>Electrician</li>
                            <li>General Laborer</li>
                            <li>Construction Worker</li>
                            <li>Skilled Laborer</li>
                            <li>Site Foreman / Supervisor</li>
                            <li>Construction Manager</li>
                            <li>Project Manager</li>
                            <li>Site Engineer</li>
                            <li>Estimator</li>
                            <li>Surveyor</li>
                            <li>Safety Officer / Health & Safety Manager </li>
                        </ul>
                        <h1 className="list-head">SPECIALIZED ROLES</h1>
                    <ul className="desc-list">
                        <li>Concrete Finisher</li>
                        <li>Steel Fixer</li>
                        <li>Pipelayer</li>
                        <li>Insulation Installer</li>
                        <li>Demolition Worker</li>
                        <li>Asphalt Worker</li>
                        <li>Waterproofing Specialist</li>
                        <li>Window/Door Installer</li>
                    </ul>
                     <div className="applies-container2">
                    <button className="apply-for-work" onClick={()=>window.location.href="/work-form"}>Apply Now</button>
                    <button className="apply-for-work" onClick={() => window.location.href='/contact'}>Contact</button>
                </div>
                </div>
                <div className="line">
                    <h1 className="list-head">SKILLED TRADES </h1>
                    <ul className="desc-list">
                        <li>Carpenter</li>
                        <li>Electrician</li>
                        <li>Plumber</li>
                        <li>Welder</li>
                        <li>HVAC Technician</li>
                        <li>Mason / Bricklayer</li>
                        <li>Painter</li>
                        <li>Drywaller / Plasterer</li>
                        <li>Roofer</li>
                        <li>Tiler</li>
                        <li>Welder</li>
                        <li>Scaffolder </li>
                    </ul>
                    <h1 className="list-head"> OTHER</h1>
                    <ul className="desc-list">
                          <li>Dispatcher</li>
                        <li>Bus Driver (Public, School, Charter)</li>
                        <li>Delivery Driver</li>
                        <li>Nurse</li>
                        <li>Teacher</li>
                        
                        
                    </ul>
                    <div className="applies-container3">
                    <button className="apply-for-work" onClick={()=>window.location.href="/work-form"}>Apply Now</button>
                    <button className="apply-for-work" onClick={() => window.location.href='/contact'}>Contact</button>
                </div>
                </div>
                

            </div>
           
        </div>
        
    </motion.div>
  )
}

export default WorkDescription