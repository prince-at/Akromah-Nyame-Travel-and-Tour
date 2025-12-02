import React, { useState } from "react";
import './Pages/Css/ApplyForm.css'; // Adjust the path as necessary
import online from "../assets/online-booking-traveling-plane-flight-concept.jpg"

import PhoneInput from "react-phone-input-2";
import emailjs from 'emailjs-com';
import { motion } from "framer-motion";
const DocumentForm = () => {
  const [showForm, setShowForm] = useState(true);
  
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    gender: "",
    email: "",
    nationality: "",
    phone: "",
    emergencyPhone: "",
    address: "",
    destination: "",
    documentType: "",
  });

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Submit Handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Application Submitted!");
    setShowForm(true);
    
    // CLEAR FORM HERE 🚀
    setFormData({
      fullName: "",
      dob: "",
      gender: "",
      email: "",
      nationality: "",
      phone: "",
      emergencyPhone: "",
      address: "",
      destination: "",
      documentType: "",
    });
    emailjs.send(
      'service_yyintso',
      'template_fecdh7h',
      formData,
      'I4Dp3q69BbXz8edQM'
    ).then(() => { 
        // setSubmitted(true);
      })
      .catch((error) => {
        console.error('Error sending bookings:', error);
      });
  };

  return (
    <motion.div className="main-document-form-container"
    key={location.pathname}
     initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -100 }}
    transition={{ duration: 0.3 }}
    >
      <div className="online-booking-study-container">
      <img src={online} alt="online-bookings" className="online-bookings"/>
      
      <h2 className="education">
        APPLY FOR YOUR TRAVELLING DOCUMENTS.
      </h2></div>
      <div className="form-wrapper">
        {showForm && (
          <div> 
            <div
              className="form-container"
              style={{
                height: "100%",
                paddingRight: "10px",
                maxWidth: "450px",
                margin: "0 auto",
              }}
            >
              <form onSubmit={handleSubmit}>
                {/* Full Name */}
                <label className="block text-gray-700 mb-2" htmlFor="name">Full Name </label>
                <div >
                 
                  <input type="text" placeholder="Full Name" required
                    className="w-full px-6 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                    value={formData.fullName}
                    onChange={(e) => updateField("fullName", e.target.value)}
                  />
                </div>

                {/* Date of Birth */}
                <label className="block text-gray-700 mb-2" htmlFor="date">Date of Birth </label>
                <div>
           
                  <input
                    
                    type="date"
                    placeholder="Date of Birth"
                    required
                    value={formData.dob}
                    onChange={(e) => updateField("dob", e.target.value)}
                     className="w-full px-6 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                  />
                </div>

                {/* Gender */}
                <label className="block text-gray-700 mb-2 mt-2" htmlFor="gender">Gender </label>
                <div >
                  
                  <select
                    
                    name="gender"
                    required
                     className="w-full px-6 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                    value={formData.gender}
                    onChange={(e) => updateField("gender", e.target.value)}
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Email */}
                <label className="block text-gray-700 mb-2 mt-2" htmlFor="email">Email </label>
                <div >
                  
                  <input type="email" placeholder="Email" required
                  
                     className="w-full px-6 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                    value={formData.email}
                    onChange={(e) => updateField("email", e.target.value)}
                  />
                </div>

                {/* Nationality */}
                <label className="block text-gray-700 mt-2 mb-2" htmlFor="nationality">Nationality </label>
                <div >
                  
                  <input type="text" placeholder="Nationality" required 
                    
                     className="w-full px-6 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                    value={formData.nationality}
                    onChange={(e) => updateField("nationality", e.target.value)}
                  />
                </div>

                {/* Contact Number */}
                <label className="block text-gray-700 mt-3 mb-3" htmlFor="number">Contact Number </label>
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
                    value={formData.phone}
                    onChange={(value) => updateField("phone", value)}
                  />
                </div>

                {/* Emergency Number */}
                <label className="block text-gray-700 mt-3 mb-3" htmlFor="number">Emergency Contact Number </label>
                <div >
                  
                  <PhoneInput
                    country={"us"}
                    placeholder={"Emergency Contact Number"}
                    inputProps={{
                      name: "emergency_phone",
                      required: true,
                    }}
                    containerClass="phone-container"
                    inputClass="phone-input"
                    buttonClass="country-dropdown"
                    dropdownClass="country-list"
                    value={formData.emergencyPhone}
                    onChange={(value) => updateField("emergencyPhone", value)}
                  />
                </div>

                {/* Address */}
                <label className="block text-gray-700 mt-3 mb-2" htmlFor="address">Current Address </label>
                <div >
                  
                  <input type="text" placeholder="Current Address" required 
                    
                     className="w-full px-6 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                    value={formData.address}
                    onChange={(e) => updateField("address", e.target.value)}
                  />
                </div>

                {/* Country */}
                <label className="block text-gray-700 mb-2 mt-2" htmlFor="destination">Destination(s) </label>
                <div >
                  
                  <input required type="text" placeholder="Destination" 
                     className="w-full px-6 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                    value={formData.destination}
                    onChange={(e) => updateField("destination", e.target.value)}
                  />
                </div>

                {/* Document Type */}
                <label className="block text-gray-700 mb-2 mt-2" htmlFor="name">Document Applying for </label>
                <div>
                 
                  <select required 
                   className="w-full px-6 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                    value={formData.documentType}
                    onChange={(e) => updateField("documentType", e.target.value)}
                  >
                    <option value="">Select Document Applying for</option>
                    <option value="Visit Visa">Visit Visa</option>
                    <option value="Student Visa">Student Visa</option>
                    <option value="Work Permit">Work Permit</option>
                    <option value="Residency Permit">Residency Permit</option>
                    <option value="Tourist Visa">Tourist Visa</option>
                    <option value="Diplomatic Visa">Diplomatic Visa</option>
                    <option value="Ghana Passport">Ghana Passport</option>
                  </select>
                </div>

                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 mt-4 shadow-lg transition focus:outline-none focus:ring-2 focus:ring-blue-400">Submit</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default DocumentForm;


