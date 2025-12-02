import React, { useState } from "react";
import "./Pages/Css/ApplyForm.css";
import online from "../assets/online-booking-traveling-plane-flight-concept.jpg";

import emailjs from 'emailjs-com';
 
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { motion } from "framer-motion";


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
    <motion.div className="main-study-form-container"
    key={location.pathname}
     initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -100 }}
    transition={{ duration: 0.3 }}
    >
      <div className="online-booking-study-container">
      <img src={online} alt="online-bookings" className="online-bookings" />

      <h2 className="education">APPLY TO STUDY ABROAD.</h2>
      </div>
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
               
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    
                     className="w-full px-6 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                  />
                </div>

                
                <div >
                 <label className="block text-gray-700 mb-2" htmlFor="gender">Gender </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>

                {/* Date of Birth */}
                <label className="block text-gray-700 mb-2" htmlFor="date">Date of Birth </label>
                <div >
                  
                  <input
                   
                    type="text"
                    name="dateOfBirth"
                    placeholder="Date of Birth"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    required
                    onFocus={(e) => (e.target.type = "date")}
                    
                     className="w-full px-6 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                  />
                </div>

                {/* Email */}
                <label className="block text-gray-700 mb-2" htmlFor="email">Email </label>
                <div>
                  
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                     className="w-full px-6 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                  />
                </div>

                <label className="block text-gray-700 mb-2" htmlFor="nationality">Nationality </label>
                <div >
                  
                  <input
                    type="text"
                    name="nationality"
                    placeholder="Nationality"
                    value={formData.nationality}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                  />
                </div>

                <label className="block text-gray-700 mb-2 mt-2" htmlFor="number">Contact</label>
                <div >
           
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
                <label className="block text-gray-700 mb-3 mt-3" htmlFor="name">Emergency Number</label>
                
                <div >
                 
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
                <label className="block text-gray-700 mb-2 mt-3" htmlFor="address">Current Address </label>
                <div >
               
                  <input
                    type="text"
                    name="address"
                    placeholder="Current Address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                     className="w-full px-6 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                  />
                </div>

                {/* Country */}
                <label className="block text-gray-700 mb-2 mt-2" htmlFor="country">Country You Want to Study In </label>
                <div>
                 
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
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
                <label className="block text-gray-700 mb-2 mt-2" htmlFor="name">Qualification seeking?</label>
                <div >
                
                  <select
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleInputChange}
                    required
                     className="w-full px-6 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                  >
                    <option value="Choose" >Choose</option>
                    <option value="High-school">High School</option>
                    <option value="Bachelor's-degree">Bachelor's Degree</option>
                    <option value="Master's-degree">Master's Degree</option>
                    <option value="Doctorate-degree">Doctorate Degree</option>
                    <option value="PhD">PhD</option>
                  </select>
                </div>

                {/* Scholarship */}
                <label className="block text-gray-700 mb-2 mt-2" htmlFor="name">Scholarship Type</label>
                <div>
                  
                  <select
                    name="scholarship"
                    value={formData.scholarship}
                    onChange={handleInputChange}
                    required
                     className="w-full px-6 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                  >
                    <option value="">Choose Scholarship type</option>
                    <option value="Fully Funded">Fully Funded</option>
                    <option value="Partially Funded">Partially Funded</option>
                    <option value="None">None</option>
                  </select>
                </div>

                {/* Program to Study */}
                <label className="block text-gray-700 mb-2 mt-2" htmlFor="program">Program to Study </label>
                <div >
                  
                  <input
                    type="text"
                    name="program"
                    placeholder="Program to Study"
                    value={formData.program}
                    onChange={handleInputChange}
                    required
                     className="w-full px-6 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                  />
                </div>

                <button type="submit" disabled={submitting} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 mt-4 shadow-lg transition focus:outline-none focus:ring-2 focus:ring-blue-400">
                  {submitting ? "Submitting..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ApplyForm;
 

