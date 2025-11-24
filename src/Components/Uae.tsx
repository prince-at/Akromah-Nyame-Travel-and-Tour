import { AvailabiltyCheckList } from "./AvailabiltycheckList";
import "./Pages/Css/AvailabilityCheckPage.css";
import uaeWorkers from "../images/petrofac-uae-jobs-1700x397.webp";
import MoreJobs from "./MoreJobs";

const Uae = () => { 
  return (
    <div className="availability-check-main-container">
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
                  <li
                    className="availability-check-item-1"
                    onClick={() => (window.location.href = "/contact")}
                    style={{ cursor: "pointer" }}
                  >
                    {item.title}
                  </li>
                  <li className="availability-check-item">{item.location}</li>
                  <li className="availability-check-item">
                    {item.availability}
                  </li>
                  <li
                    className="availability-check-item"
                    onClick={() => (window.location.href = "/contact")}
                    style={{ cursor: "pointer" }}
                  >
                    {item.contact}
                  </li>
                  <button className="availbility-contact">
                    {" "}
                    {item.button}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <MoreJobs />
      </div>
    </div>
  );
};

export default Uae;
