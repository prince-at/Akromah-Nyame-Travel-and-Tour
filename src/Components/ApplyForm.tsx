import React, { useState } from "react";
import "./Pages/Css/ApplyForm.css";
import online from "../assets/online-booking-traveling-plane-flight-concept.jpg";

import emailjs from 'emailjs-com';

import {
  FaBook,
  FaBriefcase,
  FaCalendarAlt,
  FaEnvelope,
  FaFlag,
  FaGlobe,
  FaGraduationCap,
  FaHome,
  FaPhone,
  FaUser,
} from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";


const ApplyForm = () => {
  
  const [showForm] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    dateOfBirth: "",
    email: "",
    nationality: "",
    phone: "",
    emergencyContact: "",
    address: "",
    country: "",
    qualification: "",
    scholarship: "",
    program: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePhoneChange = (value: string, name: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // const submissionDataStudent = {
    //       ...formData,
    //       fullName: formData.fullName,
    //       dateOfBirth: formData.dateOfBirth,
    //       gender: formData.gender,
    //       email: formData.email,
    //       nationality: formData.nationality,
    //       contactNumber: formData.phone,
    //       emergencyContact: formData.emergencyContact,
    //       currentAddress: formData.address,
    //       country: formData.country,
    //       qualification: formData.qualification,
    //       scholarship: formData.scholarship,
    //       status: "Pending",
    //       approvals: "Awaiting",
    //       action: "Review",
    //     };
    
        // try {
        //   const response = await axios.post('http://localhost:5000/api/applications');
          
        //   if (response.status === 200 || response.status === 201) {
        //     alert("Application Submitted Successfully!"); 
        //     resetForm();
        //     setShowForm(false);
        //     // navigate('/work-applications', { state: submissionDataStudent });
        //   } else {
        //     console.warn('Unexpected response status:', response.status);
        //     alert("Application submission returned unexpected status.");
        //   }
        // } catch (error) { 
        //   console.error('Error submitting application:', error);
        //   alert("Error submitting application. Please try again.");
        // }

    
    alert("Application Submitted!");
    
    // Clear form data
    setFormData({
      fullName: "",
      gender: "",
      dateOfBirth: "",
      email: "",
      nationality: "",
      phone: "",
      emergencyContact: "",
      address: "",
      country: "",
      qualification: "",
      scholarship: "",
      program: "",
    });
    
    setSubmitting(false);
    emailjs.send(
      'service_jeaw816',
      'template_86hdhr5',
      formData,
      'HhqUyF1jUN-Tko0hm'
    ).then(() => { 
        
      })
      .catch((error) => {
        console.error('Error sending bookings:', error);
      });
  };

  return (
    <div className="main-study-form-container">
      <img src={online} alt="online-bookings" className="online-bookings" />

      <h2 className="education">APPLY TO STUDY ABROAD.</h2>
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
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    style={{ height: "40px", borderRadius: "5px" }}
                    className="text-input-field"
                  />
                </div>

                <h1 className="label-text">Gender </h1>
                <div className="input-group">
                  <FaUser className="input-icon" />
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    required
                    style={{ height: "40px", borderRadius: "5px" }}
                    className="text-input-field"
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>

                {/* Date of Birth */}
                <h1 className="label-text">Date of Birth </h1>
                <div className="input-group">
                  <FaCalendarAlt className="input-icon" />
                  <input
                    style={{ height: "40px", borderRadius: "5px" }}
                    type="text"
                    name="dateOfBirth"
                    placeholder="Date of Birth"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    required
                    onFocus={(e) => (e.target.type = "date")}
                    
                    className="text-input-field"
                  />
                </div>

                {/* Email */}
                <h1 className="label-text">Email </h1>
                <div className="input-group">
                  <FaEnvelope className="input-icon" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    style={{ height: "40px", borderRadius: "5px" }}
                    className="text-input-field"
                  />
                </div>

                <h1 className="label-text">Nationality </h1>
                <div className="input-group phone-input-wrapper">
                  <FaFlag className="input-icon" />
                  <input
                    type="text"
                    name="nationality"
                    placeholder="Nationality"
                    value={formData.nationality}
                    onChange={handleInputChange}
                    required
                    style={{ height: "40px", borderRadius: "5px" }}
                    className="text-input-field"
                  />
                </div>

                <h1 className="label-text">Contact</h1>
                <div className="input-group phone-input-wrapper">
                  <FaPhone className="input-icon" />
                  <PhoneInput
                    country={"us"}
                    value={formData.phone}
                    onChange={(value) => handlePhoneChange(value, "phone")}
                    placeholder={"Enter phone number"}
                    inputProps={{
                      name: "phone",
                      required: true,
                    }}
                    containerClass="phone-container"
                    inputClass="phone-input"
                    buttonClass="country-dropdown"
                    dropdownClass="country-list"
                  />
                </div>

                {/* Emergency Number */}
                <h1 className="label-text">Emergency Contact Number</h1>
                <div style={{ height: "0.5px" }}></div>
                <div className="input-group phone-input-wrapper">
                  <FaPhone className="input-icon" />
                  <PhoneInput
                    country={"us"}
                    value={formData.emergencyContact}
                    onChange={(value) => handlePhoneChange(value, "emergencyContact")}
                    placeholder={"Emergency Contact Number"}
                    inputProps={{
                      name: "emergencyContact",
                      required: true,
                    }}
                    containerClass="phone-container"
                    inputClass="phone-input"
                    buttonClass="country-dropdown"
                    dropdownClass="country-list"
                  />
                </div>

                {/* Address */}
                <h1 className="label-text">Current Address </h1>
                <div className="input-group">
                  <FaHome className="input-icon" />
                  <input
                    type="text"
                    name="address"
                    placeholder="Current Address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    style={{ height: "40px", borderRadius: "5px" }}
                    className="text-input-field"
                  />
                </div>

                {/* Country */}
                <h1 className="label-text">Country You Want to Study In </h1>
                <div className="input-group">
                  <FaGlobe className="input-icon" />
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                    className="text-input-field"
                    style={{ height: "40px", borderRadius: "5px" }}
                  >
                    <option value="">Select Country</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                    <option value="Germany">Germany</option>
                    <option value="France">France</option>
                  </select>
                </div>

                {/* Work */}
                <h1 className="label-text">What Qualification are you seeking?</h1>
                <div className="input-group">
                  <FaBriefcase className="input-icon" />
                  <select
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleInputChange}
                    required
                    className="text-input-field"
                    style={{ height: "40px", borderRadius: "5px" }}
                  >
                    <option value="">Qualification Seeking</option>
                    <option value="High-school">High School</option>
                    <option value="Bachelor's-degree">Bachelor's Degree</option>
                    <option value="Master's-degree">Master's Degree</option>
                    <option value="Doctorate-degree">Doctorate Degree</option>
                    <option value="PhD">PhD</option>
                  </select>
                </div>

                {/* Scholarship */}
                <h1 className="label-text">Scholarship Type</h1>
                <div className="input-group">
                  <FaGraduationCap className="input-icon" />
                  <select
                    name="scholarship"
                    value={formData.scholarship}
                    onChange={handleInputChange}
                    required
                    className="text-input-field"
                    style={{ height: "40px", borderRadius: "5px" }}
                  >
                    <option value="">Choose Scholarship type</option>
                    <option value="Fully Funded">Fully Funded</option>
                    <option value="Partially Funded">Partially Funded</option>
                    <option value="None">None</option>
                  </select>
                </div>

                {/* Program to Study */}
                <h1 className="label-text">Program to Study </h1>
                <div className="input-group">
                  <FaBook className="input-icon" />
                  <input
                    type="text"
                    name="program"
                    placeholder="Program to Study"
                    value={formData.program}
                    onChange={handleInputChange}
                    required
                    className="text-input-field"
                    style={{ height: "40px", borderRadius: "5px" }}
                  />
                </div>

                <button type="submit" disabled={submitting}>
                  {submitting ? "Submitting..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApplyForm;
 

