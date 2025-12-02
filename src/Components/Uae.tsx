import { AvailabiltyCheckList } from "./AvailabiltycheckList";
import "./Pages/Css/AvailabilityCheckPage.css";
import uaeWorkers from "../images/petrofac-uae-jobs-1700x397.webp";
import MoreJobs from "./MoreJobs";

import { motion } from "framer-motion";

const Uae = () => { 

  return (
    <motion.div className="availability-check-main-container"
     key={location.pathname}
     initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.3 }}
    >
      <div>
        <div className="availability-check-header">
          <img
            src={uaeWorkers}
            alt="Availability Check"
            className="availability-check-image-background"
          />
          <div className="availability-job-container">
            <h1 className="availability-check-title">JOBS AVAILABLE - UAE </h1>
          </div>
        </div>
        <div className="availability-check-list-container">
          {AvailabiltyCheckList.map((item, index) => {
            return (
              <div className="availability-check-list" key={index}>
                <img
                  src={item.image}
                  alt="Job"
                  className="availability-check-image"
                />
                <div className="availability-check-details">
                  <button
                    className="availability-check-item-1"
                    onClick={() => window.location.href="/contact"}
                    style={{ cursor: "pointer" }}
                  >
                    {item.title}
                  </button>
                  <li className="availability-check-item">{item.location}</li>
                  <li className="availability-check-item">
                    {item.availability}
                  </li>
                  {/* <button
                    className="availability-check-item"
                    onClick={() => window.location.href="/contact"}
                    style={{ cursor: "pointer" }}
                  >
                    {item.contact}
                  </button> */}
                  <button className="availbility-contact"
                  onClick={()=>window.location.href='/contact'}
                  >
                    {" "}
                    {item.button}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className='place-center'>
        <MoreJobs />
        </div>
      </div>
    </motion.div>
  );
};

export default Uae;
