import React, { useState } from "react";
import './Pages/Css/ApplyForm.css';
import online from "../assets/online-booking-traveling-plane-flight-concept.jpg"

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import emailjs from 'emailjs-com';
import { motion } from "framer-motion";

const HotelReservationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    nationality: "",
    email: "",
    contactNumber: "",
    alternateContactNumber: "",
    emergencyContact: "",
    currentAddress: "",
    passportNumber: "",
    destination: "",
    checkInDate: "",
    checkOutDate: "",
    roomType: "",
    otherRoom: "",
    bedPreference: "",
    smokingAllergies: "",
    specificHotel: "",
    otherSpecificHotel: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [showForm] = useState(true);
  const [pending] = useState(false);
  const [submitting, setSubmitting] = useState(false)
  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  alert("Form submitted successfully!");
  setFormData({
        fullName: "",
        gender: "",
        nationality: "",
        email: "",
        contactNumber: "",
        alternateContactNumber: "",
        emergencyContact: "",
        currentAddress: "",
        passportNumber: "",
        destination: "",
        checkInDate: "",
        checkOutDate: "",
        roomType: "",
        otherRoom: "",
        bedPreference: "",
        smokingAllergies: "",
        specificHotel: "",
        otherSpecificHotel: "",

  });

  // try {
  //   const res = await fetch("http://localhost:5000/api/submit", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(formData),
  //   });

  //   // Log response for debugging
  //   const responseText = await res.text();
  //   console.log("Response status:", res.status);
  //   console.log("Response body:", responseText);

  //   if (res.ok) { 
  //     alert("Form submitted successfully!");
  //     setFormData({
  //       fullName: "",
  //       gender: "",
  //       nationality: "",
  //       email: "",
  //       contactNumber: "",
  //       alternateContactNumber: "",
  //       emergencyContact: "",
  //       currentAddress: "",
  //       passportNumber: "",
  //       destination: "",
  //       checkInDate: "",
  //       checkOutDate: "",
  //       roomType: "",
  //       otherRoom: "",
  //       bedPreference: "",
  //       smokingAllergies: "",
  //       specificHotel: "",
  //       otherSpecificHotel: "",
  //     });
  //     setPending(true);
  //   } else {
  //     alert(`Error submitting form. Status: ${res.status}\n${responseText}`);
  //   }
  // } catch (error: any) {
  //   console.error("Network error:", error);
  //   alert(`Network error: ${error.message || error}`);
  // }
  setSubmitting(false);
  emailjs.send(
    'service_url9kc2',
    'template_ikrmv7q',
    formData,
    'sxNXhhdmfs4PERfr5'
  ).then(() => { 
        // setSubmitted(true);
      })
      .catch((error) => {
        console.error('Error sending bookings:', error);
      });
};
  return ( 
    <motion.div className="main-hotel-form-container">
      <div className="online-booking-hotel-container">
       <img src={online} alt="online-bookings" className="online-bookings"/>
          
             <h2 className="education">
                    APPLY FOR HOTEL RESERVATION
                  </h2></div>
      {/* <button onClick={() => setShowForm(true)} className="apply-now">
        Apply for Hotel Reservation
      </button> */}
      <div className="form-wrapper">
      {showForm && (
        <div>
        {/* <div className="form-modal"> */}
          <div
            className="form-container"
            style={{
              // maxHeight: "95vh",
              // overflowY: "auto",
              // scrollbarWidth: "thin",
              // scrollbarColor: "#888 #f1f1f1",
              // paddingRight: "10px",
              // maxWidth: "450px",
              // margin: "0 auto",
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
              <label className="block text-gray-700 mb-2" htmlFor="name">Full Name </label>
              <div>
                
              <input
                type="text"
                name="fullName"
                placeholder="Full Name (as on passport)"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-6 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
              /></div>
              <label className="block text-gray-700 mb-2 mt-2" htmlFor="gender">Gender </label>
                 <div >
                  
              <select
                name="gender"
                required
                className="w-full px-6 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                value={formData.gender}
                onChange={handleChange}
               
              >
                <option value="">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              </div>
              <label className="block text-gray-700 mb-2 mt-2" htmlFor="nationality">Nationality </label>
              <div >
              
              <input
                className="w-full px-6 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                type="text"
                name="nationality"
                placeholder="Nationality"
                required
                value={formData.nationality}
                onChange={handleChange}
              />
              </div>
              <label className="block text-gray-700 mb-2 mt-2" htmlFor="email">Email </label>
              <div >
                  
              <input
                className="w-full px-6 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                type="email"
                name="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleChange}
              /></div>
              <label className="block text-gray-700 mb-3 mt-3" htmlFor="number">Phone Number </label>
              <div > 
                
              <PhoneInput
               country={"us"}
              placeholder={"Enter phone number"}
              inputProps={{
                name: "phone",
                required: true,
              }}
              containerClass="phone-container"
              inputClass="phone-input"
              buttonClass="country-dropdown"
              dropdownClass="country-list"
                // type="number"
                // name="contactNumber"
                // placeholder="Contact Number"
                // className="country-select"
                value={formData.contactNumber}
                onChange={(phone) => setFormData({ ...formData, contactNumber: phone })}
                //
                // onChange={handleChange}
                
              />
              </div>
              <label className="block text-gray-700 mb-3 mt-3" htmlFor="number">Emergency Phone Number </label>
                <div > 
              
              <PhoneInput
               country={"us"}
              placeholder={"Emergency phone number"}
              inputProps={{
                name: "phone",
                required: true,
              }}
              containerClass="phone-container"
              inputClass="phone-input"
              buttonClass="country-dropdown"
              dropdownClass="country-list"
                // type="number"
                // name="contactNumber"
                // placeholder="Contact Number"
                // className="country-select"
                value={formData.alternateContactNumber}
                onChange={(phone) => setFormData({ ...formData, alternateContactNumber: phone })}
                //
                // onChange={handleChange}
                
              />
              </div>

              <label className="block text-gray-700 mb-2 mt-3" htmlFor="smoke">Smoking Allergies</label>
              <div >
                
              <select
                name="smokingAllergies"
                required
                className="w-full px-6 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                value={formData.smokingAllergies}
                onChange={handleChange}
                 
              >
                <option value="">Smoking Allergies </option>
                <option value="Yes">Yes</option>
                <option value="Partially">Partially</option>
                <option value="No">No</option>
              </select>
              </div>
              <label className="block text-gray-700 mb-2 mt-2" htmlFor="number">Current Address </label>
              <div>
                 
              <input
                type="text"
                name="currentAddress"
                placeholder="Current Address"
                required
                value={formData.currentAddress}
                onChange={handleChange}
                className="w-full px-6 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
              />
              </div>
              <label className="block text-gray-700 mb-2 mt-2" htmlFor="number">Passport Number</label>
              {/* <h1 className="certificate">Travelling Details</h1> */}
              <div >
               
              <input
                type="text"
                name="passportNumber"
                placeholder="Valid Passport Number"
                required
                value={formData.passportNumber}
                onChange={handleChange}
                 className="w-full px-6 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
              />
              </div>
              <label className="block text-gray-700 mb-2 mt-2" htmlFor="country">Destination Country & City </label>
              <div>
                 
              <input
                type="text"
                name="destination"
                placeholder="Destination Country & City"
                required
                value={formData.destination}
                onChange={handleChange}
                className="w-full px-6 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
              />
              </div>
              <label className="block text-gray-700 mb-2 mt-2" htmlFor="date">Check-in Date</label>
              <div >
                
                
            
                
                <input
                  type="date"
                  name="checkInDate"
                  required
                  value={formData.checkInDate}
                  onChange={handleChange}
                  className="w-full px-6 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                />
              
              </div>
               <label className="block text-gray-700 mb-2 mt-2" htmlFor="date">Check-out Date</label>
              <div >
               
                
             
                
                <input
                  type="date"
                  name="checkOutDate"
                  required
                  value={formData.checkOutDate}
                  onChange={handleChange}
                  className="w-full px-6 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                />
              
              </div>
              <label className="block text-gray-700 mb-2 mt-2" htmlFor="name">Room Type </label>

              <div>
                
              <select
                name="roomType"
                required
                className="w-full px-6 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                value={formData.roomType}
                onChange={handleChange}
                
                
              >
                <option value="">Room type</option>
                <option value="Single">Single</option>
                <option value="Double">Double</option>
                <option value="Suite">Suite</option>
                <option value="Other">Other</option>
              </select>
              </div>
              
              {formData.roomType === "Other" && (
                <input
                  type="text"
                  name="otherRoom"
                  required
                  placeholder="Enter Room type"
                  value={formData.otherRoom}
                  onChange={handleChange}
                className="w-full px-6 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                />
              )}
              <label className="block text-gray-700 mb-2 mt-2" htmlFor="name">Bed Preference</label>
              <div >
                
              <select
                name="bedPreference"
                required
                className="w-full px-6 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                value={formData.bedPreference}
                onChange={handleChange}
                
              >
                <option value="">Bed preference</option>
                <option value="King size">King size</option>
                <option value="Queen size">Queen size</option>
                <option value="Twin">Twin</option>
                <option value="Normal">Normal</option>
              </select>
              </div>
              <label className="block text-gray-700 mb-2 mt-2" htmlFor="name">
                Do you have a specific Hotel you want?
              </label>
              <div >
                
              <select
                name="specificHotel"
                required
                className="w-full px-6 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                value={formData.specificHotel}
                onChange={handleChange}
                
              >
                <option value="">Hotel Preferences</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              </div>
              {formData.specificHotel === "Yes" && (
                <input
                  type="text"
                  name="otherSpecificHotel"
                  required
                  placeholder="Enter Hotel Name & Address"
                  value={formData.otherSpecificHotel}
                  onChange={handleChange}
                  className="w-full px-6 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                />
              )}
             
              <button type="submit" disabled={submitting} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 mt-4 shadow-lg transition focus:outline-none focus:ring-2 focus:ring-blue-400">
                {submitting? 'submitting..':'submit'}
              </button>
            </form>
          </div>
        
        </div>
      )}
      </div>
      {pending && (
        <div
          className="pending-message"
          style={{
            marginTop: "20px",
            color: "orange",
            fontWeight: "bold",
          }}
        >
          Your hotel reservation is pending approval.
        </div>
      )}
    </motion.div>
  );
};

export default HotelReservationForm;



