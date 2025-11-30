import download from "../images-services/depositphotos_481390158-stock-photo-handsome-young-guy-holding-bunch1.jpg"
import VisionStatement from "../About-Us/VisionStatement";
import Staffs from "../About-Us/Staffs";
import Vision from "../About-Us/Vision";
import { FaGlobe, FaHeadset, FaUser, FaUsers } from "react-icons/fa";
import CountUp from "react-countup";
import TheBrains from "../TheBrains";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
    key={location.pathname} 
     initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -100 }}
    transition={{ duration: 0.3 }}
    > 
      <div className="about-us">
        <div className="image-container">
          <img src={download} alt="download" className="about-us-image" />{" "}
        </div>
        <div className="nyame-tnt">
         <h2 className="about-akromah-nyame"> ABOUT AKROMAH NYAME TRAVEL CONSULT</h2> </div>
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
    </motion.div>
  );
};

export default About;
