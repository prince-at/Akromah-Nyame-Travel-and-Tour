 import React, { useState } from "react";
 import './Pages/Css/ApplyForm.css'; // Adjust the path as necessary
 import online from "../assets/online-booking-traveling-plane-flight-concept.jpg"

 import PhoneInput from "react-phone-input-2";
 import emailjs from 'emailjs-com';
import { motion } from "framer-motion";
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
    <motion.div className="flight-main-form-container"
    key={location.pathname}
     initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -100 }}
    transition={{ duration: 0.3 }}
    >
      <div className="online-booking-flight-container">
          <img src={online} alt="online-bookings" className="online-flight-bookings"/>
        
           <h2 className="education">
                  APPLY FOR YOUR FLIGHT TICKET.
                </h2></div>
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
                  <label className="block text-gray-700 mb-2 " htmlFor="name">Full Name </label>
                  <div >
                    
                   
                    <input type="text" placeholder="Full Name" required
                    className="w-full px-6 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                    onChange={handleChange}
                    value={formData.fullName}
                    name="fullName"
                    />
                  </div>
    
                  {/* Date of Birth */}
                  <label className="block text-gray-700 mb-2 mt-2" htmlFor="dateOfBirth">Date of Birth </label>
                                <div >
                    
                    <input
                      
                      type="date"
                      name="dateOfBirth"
                      placeholder="Date of Birth"
                      required
                      onFocus={(e) => (e.target.type = "date")}
                      
                      className="w-full px-6 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                      onChange={handleChange}
                      value={formData.dateOfBirth}
                    />
                  </div>
                  {/* Email */}
                  <label className="block text-gray-700 mb-2 mt-2 " htmlFor="email">Email </label>
                  <div >
                    
                    <input type="email" placeholder="Email" required
                    className="w-full px-6 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                    onChange={handleChange} value={formData.email} 
                    name="email"/>
                  </div>
                  <label className="block text-gray-700 mb-2 mt-2" htmlFor="nationality">Nationality </label>
                  <div >
                    
                    <input type="text" placeholder="Nationality" required 
                    className="w-full px-6 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                    onChange={handleChange} value={formData.nationality}
                    name="nationality"/>
                  </div>
                  <label className="block text-gray-700 mb-2 mt-2" htmlFor="passportNumber">Passport Number</label>
                  <div >
                  
                    <input type="text" placeholder="Passport Number" required 
                    className="w-full px-6 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                    onChange={handleChange} value={formData.passportNumber}
                    name="passportNumber"/>
                  </div>
                  <label className="block text-gray-700 mb-2 mt-3" htmlFor="mobileNumber">Mobile Number</label>
                  <div >
                
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
                 <label className="block text-gray-700 mb-3 mt-3" htmlFor="emergencyContactNumber">Emergency Number </label>
                  
                   <div >
                   
                 
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
                  <label className="block text-gray-700 mb-2 mt-2" htmlFor="address">Current Address</label>
                  <div >
                    
                    
                    <input type="text" placeholder="Current Address" required 
                    className="w-full px-6 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                     onChange={handleChange} value={formData.currentAddress}
                    name="currentAddress" />
                  </div>

                  
                  <label className="block text-gray-700 mb-2 mt-2" htmlFor="destination">Destination</label>
                  <div >

                   {/* <h1 className="education">Flight Ticket Booking</h1> */}
                   <div >
                     
                        <input
                          type="text"
                          name="destination"
                          placeholder="Destination"
                          value={formData.destination}
                          required
                         className="w-full px-6 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                          onChange={handleChange}
                          
                        />
                    </div>  
                    <label className="block text-gray-700 mb-2 mt-2" htmlFor="date">Departure Date</label>
                    <div >
                        
                        <input
                          type="date"
                          name="departureDate"
                          placeholder="Departure date"
                          onFocus={(e) => (e.target.type = "date")}
                          
                          value={formData.departureDate}
                          required
                          className="w-full px-6 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                          onChange={handleChange}
                        />
                      </div>
                      
                      <label className="block text-gray-700 mb-2 mt-2" htmlFor="date">Return Date</label>
                        <div >
                          
                        <input
                          type="date"
                          name="returnDate"
                          placeholder="Return date"
                          onFocus={(e) => (e.target.type = "date")}
                         
                          value={formData.returnDate}
                          required
                          className="w-full px-6 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                          onChange={handleChange}
                        />
                       </div>
                    
                  </div>
                  <button type="submit"  disabled={submitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 mt-4 shadow-lg transition focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    {submitting? "submitting..":"submit" }
                  </button>
                  
                </form>
              </div>
            </div>
          )}
          </div>
        </motion.div>

   );
 };
 
 export default FlightBookings;

// function setSubmitted(arg0: boolean) {
//   throw new Error("Function not implemented.");
// }
 