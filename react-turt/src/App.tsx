import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import "./App.css";
import logo from '././Components/images-services/akromah-company-logo.png'; // Adjust the path to your logo image
import menuicon from "././Components/images-services/menu_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg"
import closemenu from "././Components/images-services/close_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg"
import ListCountry from "./Components/ListCountry";
import About from "./Components/Pages/About";
import Services from "./Components/Pages/Services"; // Import the Services component
// Import the About component

const headText1 = "Home"; // Define headText1 with an appropriate value
const headText2 = "About"; // Define headText2
const headText3 = "Service"; // Define headText3
const headText4 = "Contact"; // Define headText4
const headText5 = "Blog"; // Define headText5
const headText6 = "Book"; // Define headText6
// const headText7 = "Menu"; // Define headText7

import { useState, useEffect } from "react";
import Portfolio from "./Components/Portfolio";
import Blog from "./Components/Pages/Blog";
import BookingPage from "./Components/Pages/BookingPage";

import WorkAbroadBlog from "./Components/Pages/WorkAbroadBlog";
import StudyAbroadBlog from "./Components/Pages/StudyAbroadBlog";
import HotelBlog from "./Components/Pages/HotelBlog";
import Banner from "./Components/Banner";
import WorkDescription from "./Components/WorkDescription";
import ApplyStudyAbroad from "./Components/ApplyStudyAbroad";
import PassionHome from "./Components/PassionHome";
import PlaceToStudy from "./Components/PlaceToStudy";
import IncomingReviewContainer from "./Components/IncomingReviewContainer";
import Contacts from "./Components/Pages/Contacts";
import FooterPage from "./Components/FooterPage";
import AvailableCheckPage2 from "./Components/AvailableCheckPage2";
import Uae from "./Components/Uae";
import AvailabilityCheckAsia from "./Components/AvailabilityCheckAsia";
import AvailabilityCheckEurope from "./Components/AvailabilityCheckEurope";
import LoginScreen from "./Components/LoginScreen";
import PendingListings from "./Components/PendingListings";
import PendingStudy from "./Components/PendingStudy";
import DocumentsApplication from "./Components/DocumentsApplication";
import WorkApplications from "./Components/WorkApplications";
import StudyApplication from "./Components/StudyApplication";
import WorkApplyForm from "./Components/WorkApplyForm";
import ApplyForm from "./Components/ApplyForm";
import HotelReservationForm from "./Components/HotelReservationForm";
import DocumentForm from "./Components/DocumentForm";
import FlightBookings from "./Components/FlightBookings";
import FormBanner from "./Components/FormBanner";
import SpinningEffect from "./Components/Loader";


function App() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true)

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
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <ul>
                    <Banner />{" "}
                  </ul>
                  {/* <ul>
                  <MarqueeText />
                </ul> */}
                  <ul>
                    <FormBanner />
                  </ul>

                 
                  <div>
                    <ListCountry />
                  </div>



                  <div>
                    <PassionHome />
                  </div>
                  <div>
                    <PlaceToStudy />
                  </div>
                  <div>{/* <PlaceToStudySecondSection /> */}</div>
                  <div className="portfolio-sticky-cover">
                    <Portfolio />
                  </div>
                  
                  <div className="incoming-view-background-cover">
                    <IncomingReviewContainer />
                  </div>
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contacts />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/book" element={<BookingPage />} />
            <Route path="/work-abroad" element={<WorkAbroadBlog />} />
            <Route path="/study-abroad" element={<StudyAbroadBlog />} />
            <Route path="/hotel-reservation" element={<HotelBlog />} />
            <Route path="/work-description" element={<WorkDescription />} />
            <Route
              path="/study-abroad-details"
              element={<ApplyStudyAbroad />}
            />
            <Route
              path="/study-abroad-details"
              element={<ApplyStudyAbroad />}
            />
            <Route path="/uae/" element={<Uae />} />
            <Route path="/australia/" element={<AvailableCheckPage2 />} />
            <Route path="/asia" element={<AvailabilityCheckAsia />} />
            <Route path="/europe" element={<AvailabilityCheckEurope />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/hotel" element={<PendingListings />} />
            <Route path="/visa-applications" element={<PendingStudy />} />
            <Route
              path="/documents-applications"
              element={<DocumentsApplication />}
            />
            <Route path="/work-applications" element={<WorkApplications />} />
            <Route path="/study-applications" element={<StudyApplication />} />
            <Route path="/work-form" element={<WorkApplyForm />} />
            <Route path="/form-1" element={<ApplyForm />} />
            <Route path="/hotel-form" element={<HotelReservationForm />} />
            <Route path="/document-form" element={<DocumentForm />} />
            <Route path="/flight-form" element={<FlightBookings />} />
          </Routes>
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
