import "./Css/Booking.css";
import BookPicture from "../../assets/online-booking-traveling-plane-flight-concept.jpg";
import BookingForm from "../BookingForm";
import { motion } from "framer-motion";

const BookingPage = () => {
  return ( 
    <motion.div
    key={location.pathname}
     initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -100 }}
    transition={{ duration: 0.3 }}
    >
      <div className="booking-page">
        <img src={BookPicture} alt="book-picture" className="book-picture" />

        <div className="work-hours">
          <div className="work-hour-list">
            <h1 className="work-hours-title">Work Hours</h1>
            <p className="days-of-work">Monday -- 9am to 6pm </p>
            <p className="days-of-work">Tuesday -- 9am to 6pm </p>
            <p className="days-of-work">Wednesday -- 9am to 6pm </p>
            <p className="days-of-work">Thursday -- 9am to 5pm </p>
            <p className="days-of-work">Friday -- 9am to 6pm </p>
            <p className="days-of-work">Saturday -- 9am to 5pm </p>
          </div>
        </div>
      </div>
      <div>
        <BookingForm />{" "}
      </div>
    </motion.div>
  );
};

export default BookingPage;
