import { Route, Routes, useLocation } from "react-router-dom"
import About from "./Pages/About"
import Services from "./Pages/Services"
import Contacts from "./Pages/Contacts"
import Blog from "./Pages/Blog"
import BookingPage from "./Pages/BookingPage"
import WorkAbroadBlog from "./Pages/WorkAbroadBlog"
import StudyAbroadBlog from "./Pages/StudyAbroadBlog"
import HotelBlog from "./Pages/HotelBlog"
import WorkDescription from "./WorkDescription"
import ApplyStudyAbroad from "./ApplyStudyAbroad"
import Uae from "./Uae"
import AvailableCheckPage2 from "./AvailableCheckPage2"
import AvailabilityCheckAsia from "./AvailabilityCheckAsia"
import AvailabilityCheckEurope from "./AvailabilityCheckEurope"
import LoginScreen from "./LoginScreen"
import PendingListings from "./PendingListings"
import PendingStudy from "./PendingStudy"
import DocumentsApplication from "./DocumentsApplication"
import WorkApplications from "./WorkApplications"
import StudyApplication from "./StudyApplication"
import WorkApplyForm from "./WorkApplyForm"
import ApplyForm from "./ApplyForm"
import HotelReservationForm from "./HotelReservationForm"
import DocumentForm from "./DocumentForm"
import FlightBookings from "./FlightBookings"
import { AnimatePresence } from "framer-motion"
import Home from "./Home"
 

function AnimatedRoute() {
    const location =useLocation();
  return (
    <div>
        <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={<Home/>}
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
            {/* <Route
              path="/study-abroad-details"
              element={<ApplyStudyAbroad />}
            /> */}
       
            <Route path="/uae" element={<Uae/>} />
            <Route path="/australia" element={<AvailableCheckPage2 />} />
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
          </AnimatePresence>
    </div>
  )
}

export default AnimatedRoute