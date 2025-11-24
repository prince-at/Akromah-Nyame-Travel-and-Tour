import "./Css/Contact.css";
import contact from "../../assets/telephone-and-hand.jpeg";
import ContactCompo from "../ContactCompo";

const Contacts = () => {
  return (
    <>
      <div className="contacts">
        <img src={contact} alt="Contact" className="contact-background-image" />
        <div>
          <h1 className="contact-header">Contact Us</h1>
        </div>
      </div>
      <div> 
        <ContactCompo />
      </div>
    </>
  );
};

export default Contacts;
