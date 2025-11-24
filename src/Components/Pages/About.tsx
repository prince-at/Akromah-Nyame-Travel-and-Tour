import download from "../../images/depositphotos_481390158-stock-photo-handsome-young-guy-holding-bunch.jpg";
import VisionStatement from "../About-Us/VisionStatement";
import Staffs from "../About-Us/Staffs";
import Vision from "../About-Us/Vision";
import { FaGlobe, FaHeadset, FaUser, FaUsers } from "react-icons/fa";
import CountUp from "react-countup";
import TheBrains from "../TheBrains";

const About = () => {
  return (
    <div> 
      <div className="about-us">
        <div className="image-container">
          <img src={download} alt="download" className="about-us-image" />{" "}
        </div>
        <div className="nyame-tnt">
          ABOUT AKROMAH NYAME TRAVEL CONSULT </div>
      </div>
      <div className="experiencex-field">
        <div className="experiencex">
          <div className="experience-item">
            <div className="for-icons">
              <FaUser className="icon-col" />
            </div>
            <h1 className="experience-title">
              <CountUp
                start={0}
                end={10}
                duration={2.75}
                
              ></CountUp>
              +</h1>
            <p className="experience-text">Experience</p>
          </div>
          <div className="experience-item">
            <div className="for-icons">
              <FaGlobe  className="icon-col" />
            </div>
            <h1 className="experience-title">
              <CountUp  
                start={0}
                end={500}
                duration={2.75}>

              </CountUp>
              +</h1>
            <p className="experience-text">Destinations</p>
          </div>
          <div className="experience-item">
            <div className="for-icons">
              <FaHeadset  className="icon-col" />
            </div>
            <h1 className="experience-title">
              <CountUp 
                start={0}
                end={24}
                duration={2.75}>

              </CountUp>
              / <CountUp start={0}
                end={7}
                duration={2.75}>
                
              </CountUp>
              
              +</h1>
            <p className="experience-text">Customer Service</p>
          </div>
          <div className="experience-item">
            <div className="for-icons">
              <FaUsers className="icon-col" />
            </div>
            <h1 className="experience-title">
              <CountUp 
                start={0}
                end={98}
                duration={2.75}
              ></CountUp>
              %</h1>
            <p className="experience-text">Happy clients</p>
          </div>
        </div>
      </div>
      <div>
        <VisionStatement />
        <Staffs />
        <Vision />
        <TheBrains />
        {/* <Subscribe/> */}
      </div>
    </div>
  );
};

export default About;
