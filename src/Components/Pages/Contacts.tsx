import "./Css/Contact.css";
import contact from "../../assets/telephone-and-hand.jpeg";
import ContactCompo from "../ContactCompo";
import { motion } from "framer-motion";

const Contacts = () => {
  return (
    <motion.div
    key={location.pathname}
     initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -100 }}
    transition={{ duration: 0.3 }}
    >
      <div className="contacts">
        <img src={contact} alt="Contact" className="contact-background-image" />
        <div>
          <h1 className="contact-header">For Jobs and University Admissions Abroad, <br/>Contact Us</h1>
        </div>
      </div>
      <div> 
        <ContactCompo />
      </div>
    </motion.div>
  );
};

export default Contacts;
