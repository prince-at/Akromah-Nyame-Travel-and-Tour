import React, { useState } from "react";
import './Pages/Css/ApplyForm.css';
import online from "../assets/online-booking-traveling-plane-flight-concept.jpg"
import { FaBed, FaEnvelope, FaFlag, FaGenderless,  FaHome, FaHotel, FaPassport, FaPhone, FaPlane, FaPlaneArrival, FaPlaneDeparture, FaUser } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import emailjs from 'emailjs-com';

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
    <div className="main-hotel-form-container">
       <img src={online} alt="online-bookings" className="online-bookings"/>
          
             <h2 className="education">
                    APPLY FOR HOTEL RESERVATION
                  </h2>
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
              <h1 className="label-text">Full Name </h1>
              <div className="input-group">
                <FaUser className="input-icon" />
              <input
                type="text"
                name="fullName"
                placeholder="Full Name (as on passport)"
                required
                value={formData.fullName}
                onChange={handleChange}
                style={{ height: "40px", borderRadius: '5px' }} 
                className="text-input-field"
              /></div>
              <h1 className="label-text">Gender </h1>
                 <div className="input-group">
                  <FaGenderless className="input-icon" />
              <select
                name="gender"
                required
                className="country-select"
                value={formData.gender}
                onChange={handleChange}
                style={{ height: "40px", borderRadius: '5px' }}
              >
                <option value="">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              </div>
              <h1 className="label-text">Nationality </h1>
              <div className="input-group">
                <FaFlag className="input-icon" />
              <input
                style={{ height: "40px", borderRadius: '5px' }}
                className="text-input-field"
                type="text"
                name="nationality"
                placeholder="Nationality"
                required
                value={formData.nationality}
                onChange={handleChange}
              />
              </div>
              <h1 className="label-text">Email </h1>
              <div className="input-group phone-input-wrapper">
                  <FaEnvelope className="input-icon" />
              <input
                style={{ height: "40px", borderRadius: '5px' }}
                className="text-input-field"
                type="email"
                name="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleChange}
              /></div>
              <h1 className="label-text">Phone Number </h1>
              <div className="input-group phone-input-wrapper"> 
                <FaPhone className="input-icon" />
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
              <h1 className="label-text">Emergency Phone Number </h1>
                <div className="input-group phone-input-wrapper"> 
                <FaPhone className="input-icon" />
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

              <h1 className="label-text">Smoking Allergies</h1>
              <div className="input-group">
                <FaFlag className="input-icon" />
              <select
                name="smokingAllergies"
                required
                className="country-select"
                value={formData.smokingAllergies}
                onChange={handleChange}
                 style={{ height: "40px", borderRadius: '5px' }}
              >
                <option value="">Smoking Allergies </option>
                <option value="Yes">Yes</option>
                <option value="Partially">Partially</option>
                <option value="No">No</option>
              </select>
              </div>
              <h1 className="label-text">Current Address </h1>
              <div className="input-group">
                 <FaHome className="input-icon" />
              <input
                type="text"
                name="currentAddress"
                placeholder="Current Address"
                required
                value={formData.currentAddress}
                onChange={handleChange}
                style={{ height: "40px", borderRadius: '5px' }}
                className="text-input-field"
              />
              </div>
              <h1 className="label-text">Passport Number</h1>
              {/* <h1 className="certificate">Travelling Details</h1> */}
              <div className="input-group">
                <FaPassport className="input-icon" />
              <input
                type="text"
                name="passportNumber"
                placeholder="Valid Passport Number"
                required
                value={formData.passportNumber}
                onChange={handleChange}
                 style={{ height: "40px", borderRadius: '5px' }}
                className="text-input-field"
              />
              </div>
              <h1 className="label-text">Destination Country & City </h1>
              <div className="input-group">
                 <FaPlane className="input-icon" />
              <input
                type="text"
                name="destination"
                placeholder="Destination Country & City"
                required
                value={formData.destination}
                onChange={handleChange}
                style={{ height: "40px", borderRadius: '5px' }}
                className="text-input-field"
              />
              </div>
              <h1 className="check-ins">Check-in Date</h1>
              <div className="input-group">
                
                <FaPlaneArrival className="input-icon" />
           
                
                <input
                  type="date"
                  name="checkInDate"
                  required
                  value={formData.checkInDate}
                  onChange={handleChange}
                  style={{ height: "40px", borderRadius: '5px' }}
                  className="text-input-field"
                />
              
              </div>
               <h1 className="check-ins">Check-out Date</h1>
              <div className="input-group">
               
                <FaPlaneDeparture className="input-icon" />
             
                
                <input
                  type="date"
                  name="checkOutDate"
                  required
                  value={formData.checkOutDate}
                  onChange={handleChange}
                  style={{ height: "40px", borderRadius: '5px' }}
                  className="text-input-field"
                />
              
              </div>
              <h1 className="label-text">Room Type </h1>

              <div className="input-group">
                <FaHotel className="input-icon" />
              <select
                name="roomType"
                required
                className="country-select"
                value={formData.roomType}
                onChange={handleChange}
                style={{ height: "40px", borderRadius: '5px' }}
                
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
                  style={{ height: "40px", borderRadius: '5px' }}
                  className="text-input-field"
                />
              )}
              <h1 className="label-text">Bed Preference</h1>
              <div  className="input-group">
                <FaBed className="input-icon" />
              <select
                name="bedPreference"
                required
                className="country-select"
                value={formData.bedPreference}
                onChange={handleChange}
                  style={{ height: "40px", borderRadius: '5px' }}
              >
                <option value="">Bed preference</option>
                <option value="King size">King size</option>
                <option value="Queen size">Queen size</option>
                <option value="Twin">Twin</option>
                <option value="Normal">Normal</option>
              </select>
              </div>
              <h1 className="check-ins">
                Do you have a specific Hotel you want?
              </h1>
              <div  className="input-group">
                <FaHotel className="input-icon" />
              <select
                name="specificHotel"
                required
                className="country-select"
                value={formData.specificHotel}
                onChange={handleChange}
                style={{ height: "40px", borderRadius: '5px' }}
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
                />
              )}
             
              <button type="submit" disabled={submitting}>
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
    </div>
  );
};

export default HotelReservationForm;



