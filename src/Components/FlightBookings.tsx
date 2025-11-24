 import React, { useState } from "react";
 import './Pages/Css/ApplyForm.css'; // Adjust the path as necessary
 import online from "../assets/online-booking-traveling-plane-flight-concept.jpg"
import {FaCalendarAlt, FaEnvelope, FaFlag, FaHome, FaPassport, FaPhone, FaPlane, FaPlaneArrival, FaPlaneDeparture, FaUser } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
 import emailjs from 'emailjs-com';
 const FlightBookings = () => {
   const [showForm, setShowForm] = useState(true);
   const [submitting,setSubmitting] =useState(false);
  const [formData, setFormData] = useState({
    fullName:"",
    dateOfBirth: "",
    email: "",
    nationality: "",
    passportNumber: "",
    mobileNumber: "",
    emergencyContactNumber: "",
    currentAddress: "",
    destination: "",
    departureDate: "",
    returnDate: "",
   })
 
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
     e.preventDefault();
     alert("Application Submitted!");
     setShowForm(true);
 
     setSubmitting(false);
     setFormData({
    fullName:"",
    dateOfBirth: "",
    email: "",
    nationality: "",
    passportNumber: "",
    mobileNumber: "",
    emergencyContactNumber: "",
    currentAddress: "",
    destination: "",
    departureDate: "",
    returnDate: "",
     })
     emailjs.send(
      'service_odl8t5m',
      'template_i2583ek',
      formData,
      'M68aObfpu2mXD27xn'
     ).then(() => { 
        // setSubmitted(true);
      })
      .catch((error) => {
        console.error('Error sending bookings:', error);
      });
   };
   const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
   }
   
   // Handler for react-phone-input-2 which provides (value, data, event, formattedValue)
   const handlePhoneChange = (value: string) => {
     setFormData(prev => ({ ...prev, mobileNumber: value }));
   };

   // Separate handler for emergency contact phone
   const handleEmergencyPhoneChange = (value: string) => {
     setFormData(prev => ({ ...prev, emergencyContactNumber: value }));
   };
 
   return (
    <div className="flight-main-form-container">
          <img src={online} alt="online-bookings" className="online-flight-bookings"/>
        
           <h2 className="education">
                  APPLY FOR YOUR FLIGHT TICKET.
                </h2>
          {/* <button onClick={() => setShowForm(true)} className="apply-now">
            Apply to Work Abroad
          </button> */}
          <div className="form-wrapper">
          {showForm && (
            <div >
              <div
                className="form-container"
                style={{
                  // maxHeight: "100vh",
                  // overflowY: "auto",
                  // scrollbarWidth: "thin",
                  // scrollbarColor: "#888 #f1f1f1",
                  height: "100%",
                  paddingRight: "10px",
                  maxWidth: "450px",
                  margin: "0 auto",
                 
                }}
              >
                {/* <span className="close" onClick={() => setShowForm(false)}>
                  &times;
                </span> */}
               
                <form onSubmit={handleSubmit}>
                  {/* Full Name */}
                  <h1 className="label-text">Full Name </h1>
                  <div className="input-group">
                    
                    <FaUser className="input-icon" />
                    <input type="text" placeholder="Full Name" required
                    style={{ height: "40px", borderRadius: '5px' }} 
                    className="text-input-field" onChange={handleChange}
                    value={formData.fullName}
                    name="fullName"
                    />
                  </div>
    
                  {/* Date of Birth */}
                  <h1 className="label-text">Date of Birth </h1>
                                <div className="input-group">
                    <FaCalendarAlt className="input-icon" />
                    <input
                      style={{ height: "40px", borderRadius: '5px' }}
                      type="date"
                      name="dateOfBirth"
                      placeholder="Date of Birth"
                      required
                      onFocus={(e) => (e.target.type = "date")}
                      
                      className="text-input-field"
                      onChange={handleChange}
                      value={formData.dateOfBirth}
                    />
                  </div>
                  {/* Email */}
                  <h1 className="label-text">Email </h1>
                  <div className="input-group">
                    <FaEnvelope className="input-icon" />
                    <input type="email" placeholder="Email" required
                    style={{ height: "40px", borderRadius: '5px' }}
                    className="text-input-field" onChange={handleChange} value={formData.email} 
                    name="email"/>
                  </div>
                  <h1 className="label-text">Nationality </h1>
                  <div className="input-group phone-input-wrapper">
                    <FaFlag className="input-icon" />
                    <input type="text" placeholder="Nationality" required 
                    style={{ height: "40px", borderRadius: '5px' }}
                    className="text-input-field" onChange={handleChange} value={formData.nationality}
                    name="nationality"/>
                  </div>
                  <h1 className="label-text">Passport Number</h1>
                  <div className="input-group phone-input-wrapper">
                    <FaPassport className="input-icon" />
                    <input type="text" placeholder="Passport Number" required 
                    style={{ height: "40px", borderRadius: '5px' }}
                    className="text-input-field" onChange={handleChange} value={formData.passportNumber}
                    name="passportNumber"/>
                  </div>
                  <h1 className="label-text">Mobile Number</h1>
                  <div className="input-group phone-input-wrapper">
                <FaPhone className="input-icon" />
                <PhoneInput
                  country={"us"}
                  placeholder={"Enter phone number"}
                  inputProps={{
                    name: "mobile number",
                    required: true,
                    
                  
                  }}
                  containerClass="phone-container"
                  inputClass="phone-input"
                  buttonClass="country-dropdown"
                  dropdownClass="country-list"
                  onChange={handlePhoneChange}
                  value={formData.mobileNumber}
                />
              </div>
                 <h1 className="label-text">Emergency Number </h1>
                  <div style={{ height: '0.5px' }}></div>
                   <div className="input-group phone-input-wrapper">
                   
                <FaPhone className="input-icon" />
                <PhoneInput
                  country={"us"}
                  placeholder={"Emergency Contact Number"}
                  inputProps={{
                    name: "emergency number",
                    required: true,
                  }}
                  containerClass="phone-container"
                  inputClass="phone-input"
                  buttonClass="country-dropdown"
                  dropdownClass="country-list"
                  onChange={handleEmergencyPhoneChange}
                  value={formData.emergencyContactNumber}
                />
              </div>
    
                  {/* Address */}
                  <h1 className="label-text">Current Address</h1>
                  <div className="input-group">
                    
                    <FaHome className="input-icon" />
                    <input type="text" placeholder="Current Address" required 
                    style={{ height: "40px", borderRadius: '5px' }}
                    className="text-input-field" onChange={handleChange} value={formData.currentAddress}
                    name="currentAddress" />
                  </div>

                  
                  <h1 className="label-text">Destination</h1>
                  <div >

                   {/* <h1 className="education">Flight Ticket Booking</h1> */}
                   <div className="input-group">
                      <FaPlane className="input-icon" />
                        <input
                          type="text"
                          name="destination"
                          placeholder="Destination"
                          value={formData.destination}
                          required
                          style={{ height: "40px", borderRadius: '5px' }}
                          className="text-input-field"
                          onChange={handleChange}
                          
                        />
                    </div>  
                    <h1 className="label-text">Departure Date</h1>
                    <div className="input-group">
                        <FaPlaneDeparture className="input-icon" />
                        <input
                          type="date"
                          name="departureDate"
                          placeholder="Departure date"
                          onFocus={(e) => (e.target.type = "date")}
                          
                          value={formData.departureDate}
                          required
                          style={{ height: "40px", borderRadius: '5px' }}
                          className="text-input-field"
                          onChange={handleChange}
                        />
                      </div>
                      
                      <h1 className="label-text">Return Date</h1>
                        <div className="input-group">
                          <FaPlaneArrival className="input-icon" />
                        <input
                          type="date"
                          name="returnDate"
                          placeholder="Return date"
                          onFocus={(e) => (e.target.type = "date")}
                         
                          value={formData.returnDate}
                          required
                          style={{ height: "40px", borderRadius: '5px' }}
                          className="text-input-field"
                          onChange={handleChange}
                        />
                       </div>
                    
                  </div>
                  <button type="submit" className="submit" disabled={submitting} >
                    {submitting? "submitting..":"submit" }
                  </button>
                  
                </form>
              </div>
            </div>
          )}
          </div>
        </div>

   );
 };
 
 export default FlightBookings;

// function setSubmitted(arg0: boolean) {
//   throw new Error("Function not implemented.");
// }
 