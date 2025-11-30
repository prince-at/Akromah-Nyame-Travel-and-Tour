import { FaBriefcase, FaFlag, FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa";
import { useState } from "react";
import "../Components/Pages/Css/FormBanner.css";
import { FaEnvelope } from "react-icons/fa6";
import emailjs from 'emailjs-com';

const FormBanner = () => {  
  const [showForm, setShowForm] = useState(true); 
  const [formData, setFormData] = useState({
    offer: "Select-offer",
    destination: "", 
    requestType: "",
    requirements: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Request Submitted! Kindly check your mail in few minutes for details!");
    setShowForm(true);
    emailjs.send(
      'service_40419sj',
      'template_sw2dvsr',
      formData,
      'I4Dp3q69BbXz8edQM'
    ).then(() => {
        setSubmitted(true);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
    // Clear form data
    setFormData({
      offer: "Select-offer",
      destination: "",
      requestType: "",
      requirements: "",
      email: "",
    }); 
  };

  return (
    <div className="banna-form-container">
      <div className="main-banner-forms">
        {showForm && (
          <div className="full-form-cont">
            
            <form className="apply-form" onSubmit={handleSubmit}>
              <div className="submit-forms">
                <div className="check-list">
                  <div className="inner-check-list">
                    <div className="check-list">
                      <FaBriefcase className="check-list-icons" />
                      <select
                        className="input-check-list-offers"
                        required
                        value={formData.offer}
                        onChange={(e) => setFormData({ ...formData, offer: e.target.value })}
                      >
                        <option value="Select-offer" className="select-offer">Select Offer</option>
                        <option value="study" className="select-offer">Study Abroad (Scholarship)</option>
                        <option value="work" className="select-offer">Work Abroad</option>
                        <option value="visit" className="select-offer">Visit Visa</option>
                        <option value="australia" className="select-offer">Passport Assistant</option>
                        <option value="ticketing" className="select-offer">Ticketing</option>
                        <option value="tourist" className="select-offer">Tourist Visa</option>
                        <option value="resident" className="select-offer">Residency Permit</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="check-list">
                  <FaPlaneDeparture className="check-list-icons" />
                  <input
                    type="text"
                    id="offer1"
                    placeholder="Destination"
                    required
                    className="input-check-list-offers"
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  />
                </div>
                <div className="check-list">
                  <FaPlaneArrival className="check-list-icons" />
                  <select
                    className="input-check-list-offers"
                    required
                    value={formData.requestType}
                    onChange={(e) => setFormData({ ...formData, requestType: e.target.value })}
                  >
                    <option value="" className="select-offer">Choose</option>
                    <option value="Request Available Job" className="select-offer">Request Available Job</option>
                    <option value="Request Available Scholarship" className="select-offer">Request Available Scholarship</option>
                    <option value="Request Visit Visa" className="select-offer">Request Visit Visa</option>
                    <option value="Request Residency Permit" className="select-offer">Request Residency Permit</option>
                  </select>
                </div>
                <div className="check-list">
                  <FaFlag className="check-list-icons" />
                  <select
                    className="input-check-list-offers"
                    required
                    value={formData.requirements}
                    onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                  >
                    <option value="" className="select-offer">Select</option>
                    <option value="Request Requirements" className="select-offer">Request Requirements</option>
                  </select>
                </div>
                <div className="check-list">
                  <FaEnvelope className="check-list-icons" />
                  <input
                    type="text"
                    id="offer1"
                    placeholder="Email"
                    required
                    className="input-check-list-offers"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="check-list">
                  <button type="submit" className="check-submitted">Make Request</button>
                </div>
              </div>
            </form>
          </div>
        )}
        {submitted && (
          <div className="submission-success">
            Request submitted — please check your email in few minutes for details.
          </div>
        )}
      </div>
    </div>
  );
};

export default FormBanner;