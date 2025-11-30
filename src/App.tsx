import {
  BrowserRouter as Router,

  NavLink,
} from "react-router-dom";
import "./App.css";
import logo from '././Components/images-services/akromah-company-logo.png'; // Adjust the path to your logo image
import menuicon from "././Components/images-services/menu_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg"
import closemenu from "././Components/images-services/close_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg"

// Import the Services component
// Import the About component

const headText1 = "Home"; // Define headText1 with an appropriate value
const headText2 = "About"; // Define headText2
const headText3 = "Service"; // Define headText3
const headText4 = "Contact"; // Define headText4
const headText5 = "Blog"; // Define headText5
const headText6 = "Book"; // Define headText6
// const headText7 = "Menu"; // Define headText7

import { useState, useEffect } from "react";

import FooterPage from "./Components/FooterPage";

import SpinningEffect from "./Components/Loader";
import AnimatedRoute from "./Components/AnimatedRoute";



function App() {

  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [transitionLoading, setTransitionLoading] =useState(false);

  useEffect(() => {
  setTransitionLoading(true);

  const timer = setTimeout(() => {
    setTransitionLoading(false);
  }, 3000); // SAME as framer-motion transition duration

  return () => clearTimeout(timer);
}, [location.pathname]);

  const toggleMenu= () => {
    setIsOpen(!isOpen);
  };

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    },3000)
  },[] )

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Adjust scroll position as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
    <div>
    {
      loading?  (<SpinningEffect/>) :
    (
      <div>
        {transitionLoading && (
  <div className="transition-loader">
    <SpinningEffect />
  </div>
)}
      <Router>
        <nav className={`header ${scrolled ? "scrolled" : ""}`}>
          <div>
            {" "}
            <img src={logo} alt="Company Logo" className="companyLogo" />
          </div>
          <div className="navMenu">
          <ul className={`navList ${isOpen ? "open" : ""}`}>
              <li>
                <NavLink to="/" className= {({isActive})=> isActive? 'text-size active':'text-size'} 
                
                >
                  {headText1}
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={({isActive})=> isActive? 'text-size active':'text-size'}>
                  {headText2}
                </NavLink>
              </li>
              <div className="iconList">
                <li>
                  <NavLink to="/services" className={({isActive})=> isActive? 'text-size active':'text-size'}>
                    {headText3}
                  </NavLink>
                </li>
              </div>
              <li>
                <NavLink to="/contact" className={({isActive})=> isActive? 'text-size active':'text-size'}>
                  {headText4}
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog" className={({isActive})=> isActive? 'text-size active':'text-size'}>
                  {headText5}
                </NavLink>
              </li>
              <li>
                <NavLink to="/book" className={({isActive})=> isActive? 'text-size active':'text-size'}>
                  {headText6}
                </NavLink>
              </li>
               <li className="job-listings">
                <NavLink to="/work-description" className={({isActive})=> isActive? 'text-size-job active':'text-size-job'}>
                  Job Listings
                </NavLink>
              </li>
            </ul>
            <div className="sidebar">
             
            <li className="hamburger-menu-item" onClick={toggleMenu}>
              {/* <FaBars className="menu-icons" /> */}
              <img src={menuicon} alt="menu-icon" className={`menu-icon ${isOpen ? "open" : ""}`}/>
              <div className={`mobile-sidebar ${isOpen ? "open" : "check"}`} onClick={toggleMenu}>
              <img src={closemenu} />
            </div>
            </li>
            </div>
            
          </div>
          {/* <div className='buttons'><BookingButton textButton="Book" /></div> */}
        </nav>

        <div>
          <AnimatedRoute/>
        </div>
        <div>
          <div className="footer-container">
            <FooterPage />
          </div>
        </div>
      </Router>
      </div>)
      }
      </div>
    </>
  );
}

export default App;
