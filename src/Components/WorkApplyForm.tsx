import React, { useState } from "react";
import "./Pages/Css/ApplyForm.css";
import online from "../assets/online-booking-traveling-plane-flight-concept.jpg"

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {  useNavigate } from "react-router-dom";

import axios from "axios";
import emailjs from 'emailjs-com';
import { motion } from "framer-motion";

const WorkApplyForm = () => {
  const navigate = useNavigate();
  const [submitting , setSubmitting] =useState(false)
  const [showForm, setShowForm] = useState(true);
  const [formData, setFormData] = useState({
    fullName: "",
    dateOfBirth: "",
    gender: "",
    email: "",
    nationality: "",
    contact: "",
    emergencyNo: "",
    address: "",
    passportNo: "",
    destination: "",
    workType: "",
    date:""
  });
  

  const resetForm = () => {
    setFormData({
      fullName: "",
      dateOfBirth: "",
      gender: "",
      email: "",
      nationality: "",
      contact: "",
      emergencyNo: "",
      address: "",
      passportNo: "",
      destination: "",
      workType: "",
      date:""
    });
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData({
      fullName: "",
      dateOfBirth: "",
      gender: "",
      email: "",
      nationality: "",
      contact: "",
      emergencyNo: "",
      address: "",
      passportNo: "",
      destination: "",
      workType: "",
      date:""
    });
    setSubmitting(false);
    alert('Form Submitted')
    emailjs.send(
      'service_4vcat0d',
      'template_ybju78a',
      formData,
      'TKq-F8d79Xf1rbS6t'
    ).then(() => { 
 
      })
      .catch((error) => {
        console.error('Error sending bookings:', error);
      });
    const submissionData = {
      ...formData,
      fullName: formData.fullName,
      dateOfBirth: formData.dateOfBirth,
      gender: formData.gender,
      email: formData.email,
      nationality: formData.nationality,
      contactNumber: formData.contact,
      emergencyContact: formData.emergencyNo,
      currentAddress: formData.address,
      passportNumber: formData.passportNo,
      destination: formData.destination,
      workType: formData.workType,
      status: "Pending",
      approvals: "Awaiting",
      action: "Review",
    };

    try {
      const response = await axios.post('http://localhost:5000/api/applications', submissionData);
      
      if (response.status === 200 || response.status === 201) {
        alert("Application Submitted Successfully!"); 
        resetForm();
        setShowForm(false);
        navigate('/work-applications', { state: submissionData });
      } else {
        console.warn('Unexpected response status:', response.status);
        alert("Application submission returned unexpected status.");
      }
    } catch (error) { 
      console.error('Error submitting application:', error);
      alert("Error submitting application. Please try again.");
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handlePhoneChange = (value: string) => {
    setFormData(prev => ({ ...prev, contact: value }));
  };

  const handleEmergencyPhoneChange = (value: string) => {
    setFormData(prev => ({ ...prev, emergencyNo: value }));
  };
 
  return (
    <motion.div className="main-form-container"
    key={location.pathname}
     initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -100 }}
    transition={{ duration: 0.3 }}
    >
      <div className="online-booking-container">
      <img src={online} alt="online-bookings" className="online-bookings"/>
    
      <h2 className="education">
        APPLY TO WORK ABROAD.
      </h2>
      </div>

      <div className="form-wrapper">
        {showForm && (
          <div >
            <div
              className="form-container"
              style={{
                height: "100%",
                paddingRight: "10px",
                maxWidth: "450px",
                margin: "0 auto",
              }}
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}
                <label className="block text-gray-700 mb-2" htmlFor="name">Full Name </label>
                <div >
                  
                  <input 
                    type="text" 
                    name="fullName"
                    placeholder="Full Name" 
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    
                      className="w-full px-4 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                  />
                </div>

                {/* Date of Birth */}
                <label className="block text-gray-700 mb-2" htmlFor="date">Date of Birth</label>
                <div >
                 
                  <input
                    type="text"
                    name="dateOfBirth"
                  
                    placeholder="Date of Birth"
                    required
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    onFocus={(e) => (e.currentTarget.type = "date")}
                   
                    className="w-full px-4 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                  />
                </div>

                {/* Gender */}
                <label className="block text-gray-700 mb-2" htmlFor="gender">Gender</label>
                <div >
                 
                  <select 
                    name="gender" 
                    aria-label="Gender" 
                    required
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>

                {/* Email */}
                <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                <div>
                  
                  <input 
                    type="email" 
                    name="email"
                    placeholder="you@example.com" 
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                  />
                </div>

                {/* Nationality */}
                <label className="block text-gray-700 mb-2" htmlFor="nationality">Nationality</label>
                <div>
                  
                  <input 
                    type="text" 
                    name="nationality"
                    placeholder="Nationality" 
                    required
                    value={formData.nationality}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                  />
                </div>

                {/* Contact Number */}
                <label className="block text-gray-700 mb-2" htmlFor="number">Contact Number</label>
                <div   >
         
                  <PhoneInput
                    country={"us"}
                    value={formData.contact}
                    placeholder={"Enter phone number"}
                    inputProps={{
                      name: "contact",
                      required: true,
                    }}
                    containerClass="phone-container"
                    inputClass="phone-input"
                    buttonClass="country-dropdown"
                    dropdownClass="country-list"
                    onChange={handlePhoneChange}
                  />
                </div>

                {/* Emergency Contact Number */}
                <label className="block text-gray-700 mb-2" htmlFor="number">Emergency Number</label>
                
                <div   >
              
                  <PhoneInput
                    country={"us"}
                    value={formData.emergencyNo}
                    placeholder={"Emergency Contact Number"}
                    inputProps={{
                      name: "emergencyNo",
                      required: true,
                    }}
                    containerClass="phone-container"
                    inputClass="phone-input"
                    buttonClass="country-dropdown"
                    dropdownClass="country-list"
                    onChange={handleEmergencyPhoneChange}
                    
                  />
                </div>

                {/* Address */}
                <label className="block text-gray-700 mb-2" htmlFor="address">Current Address</label>
                <div>
                 
                  <input 
                    type="text" 
                    name="address"
                    placeholder="Current Address" 
                    required
                    value={formData.address}
                    onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                  />
                </div>

                {/* Destination Country */}
                <label className="block text-gray-700 mb-2" htmlFor="country">Destination Country</label>
                <div >
                  
                  <input 
                    type="text" 
                    name="destination"
                    placeholder="Enter Destination" 
                    required
                    value={formData.destination}
                    onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                  />
                </div>

                {/* Work Type */}
                <label className="block text-gray-700 mb-2" htmlFor="work">Work Applying for</label>
                <div>
            
                  <input 
                    type="text" 
                    name="workType"
                    placeholder="Enter your Work" 
                    required
                    value={formData.workType}
                    onChange={handleChange}
                   
                      className="w-full px-4 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                  />
                </div>

                <button type="submit" disabled={submitting} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6  shadow-lg transition focus:outline-none focus:ring-2 focus:ring-blue-400">
                  {submitting? "submitting...":"submit" }
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default WorkApplyForm;
 