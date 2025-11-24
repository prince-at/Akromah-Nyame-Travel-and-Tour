import React, { useState } from "react";
import "./Pages/Css/ApplyForm.css";
import online from "../assets/online-booking-traveling-plane-flight-concept.jpg"
import { FaBriefcase, FaCalendarAlt, FaEnvelope, FaFlag, FaGlobe, FaHome, FaPhone, FaUser } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {  useNavigate } from "react-router-dom";
import { FaGenderless } from "react-icons/fa6";
import axios from "axios";
import emailjs from 'emailjs-com';

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
    <div className="main-form-container">
      <img src={online} alt="online-bookings" className="online-bookings"/>
    
      <h2 className="education">
        APPLY TO WORK ABROAD.
      </h2>

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
                <h1 className="label-text">Full Name </h1>
                <div className="input-group">
                  <FaUser className="input-icon" />
                  <input 
                    type="text" 
                    name="fullName"
                    placeholder="Full Name" 
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    style={{ height: "40px", borderRadius: '5px' }} 
                    className="text-input-field"
                  />
                </div>

                {/* Date of Birth */}
                <h1 className="label-text">Date of Birth</h1>
                <div className="input-group">
                  <FaCalendarAlt className="input-icon" />
                  <input
                    type="text"
                    name="dateOfBirth"
                    style={{ height: "40px", borderRadius: '5px' }}
                    placeholder="Date of Birth"
                    required
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    onFocus={(e) => (e.currentTarget.type = "date")}
                   
                    className="text-input-field"
                  />
                </div>

                {/* Gender */}
                <h1 className="label-text">Gender</h1>
                <div className="input-group">
                  <FaGenderless className="input-icon" />
                  <select 
                    name="gender" 
                    aria-label="Gender" 
                    required
                    value={formData.gender}
                    onChange={handleChange}
                    style={{ height: "40px", borderRadius: '5px' }}
                    className="text-input-field"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>

                {/* Email */}
                <h1 className="label-text">Email</h1>
                <div className="input-group">
                  <FaEnvelope className="input-icon" />
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Email" 
                    required
                    value={formData.email}
                    onChange={handleChange}
                    style={{ height: "40px", borderRadius: '5px' }}
                    className="text-input-field" 
                  />
                </div>

                {/* Nationality */}
                <h1 className="label-text">Nationality</h1>
                <div className="input-group phone-input-wrapper">
                  <FaFlag className="input-icon" />
                  <input 
                    type="text" 
                    name="nationality"
                    placeholder="Nationality" 
                    required
                    value={formData.nationality}
                    onChange={handleChange}
                    style={{ height: "40px", borderRadius: '5px' }}
                    className="text-input-field"
                  />
                </div>

                {/* Contact Number */}
                <h1 className="label-text">Contact Number</h1>
                <div className="input-group phone-input-wrapper">
                  <FaPhone className="input-icon" />
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
                <h1 className="label-text">Emergency Contact Number</h1>
                <div style={{ height: '0.5px' }}></div>
                <div className="input-group phone-input-wrapper">
                  <FaPhone className="input-icon" />
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
                <h1 className="label-text">Current Address</h1>
                <div className="input-group">
                  <FaHome className="input-icon" />
                  <input 
                    type="text" 
                    name="address"
                    placeholder="Current Address" 
                    required
                    value={formData.address}
                    onChange={handleChange}
                    style={{ height: "40px", borderRadius: '5px' }}
                    className="text-input-field"
                  />
                </div>

                {/* Destination Country */}
                <h1 className="label-text">Destination Country</h1>
                <div className="input-group">
                  <FaGlobe className="input-icon" />
                  <input 
                    type="text" 
                    name="destination"
                    placeholder="Enter Destination" 
                    required
                    value={formData.destination}
                    onChange={handleChange}
                    style={{ height: "40px", borderRadius: '5px' }}
                    className="text-input-field"
                  />
                </div>

                {/* Work Type */}
                <h1 className="label-text">Work Applying for</h1>
                <div className="input-group">
                  <FaBriefcase className="input-icon" />
                  <input 
                    type="text" 
                    name="workType"
                    placeholder="Enter your Work" 
                    required
                    value={formData.workType}
                    onChange={handleChange}
                    style={{ height: "40px", borderRadius: '5px' }}
                    className="text-input-field"
                  />
                </div>

                <button type="submit" disabled={submitting} >
                  {submitting? "submitting...":"submit" }
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkApplyForm;
 