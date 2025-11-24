import React, { useState } from "react";
import './Pages/Css/ApplyForm.css'; // Adjust the path as necessary
import online from "../assets/online-booking-traveling-plane-flight-concept.jpg"
import { FaBriefcase, FaCalendarAlt, FaEnvelope, FaFlag, FaGlobe, FaHome, FaPhone, FaUser } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import emailjs from 'emailjs-com';
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
        setSubmitted(true);
      })
      .catch((error) => {
        console.error('Error sending bookings:', error);
      });
  };

  return (
    <div className="main-document-form-container">
      <img src={online} alt="online-bookings" className="online-bookings"/>
      
      <h2 className="education">
        APPLY FOR YOUR TRAVELLING DOCUMENTS.
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
                  <input type="text" placeholder="Full Name" required
                    style={{ height: "40px", borderRadius: '5px' }} 
                    className="text-input-field"
                    value={formData.fullName}
                    onChange={(e) => updateField("fullName", e.target.value)}
                  />
                </div>

                {/* Date of Birth */}
                <h1 className="label-text">Date of Birth </h1>
                <div className="input-group">
                  <FaCalendarAlt className="input-icon" />
                  <input
                    style={{ height: "40px", borderRadius: '5px' }}
                    type="date"
                    placeholder="Date of Birth"
                    required
                    value={formData.dob}
                    onChange={(e) => updateField("dob", e.target.value)}
                    className="text-input-field"
                  />
                </div>

                {/* Gender */}
                <h1 className="label-text">Gender </h1>
                <div className="input-group">
                  <FaCalendarAlt className="input-icon" />
                  <select
                    style={{ height: "40px", borderRadius: '5px' }}
                    name="gender"
                    required
                    className="text-input-field"
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
                <h1 className="label-text">Email </h1>
                <div className="input-group">
                  <FaEnvelope className="input-icon" />
                  <input type="email" placeholder="Email" required
                    style={{ height: "40px", borderRadius: '5px' }}
                    className="text-input-field"
                    value={formData.email}
                    onChange={(e) => updateField("email", e.target.value)}
                  />
                </div>

                {/* Nationality */}
                <h1 className="label-text">Nationality </h1>
                <div className="input-group phone-input-wrapper">
                  <FaFlag className="input-icon" />
                  <input type="text" placeholder="Nationality" required 
                    style={{ height: "40px", borderRadius: '5px' }}
                    className="text-input-field"
                    value={formData.nationality}
                    onChange={(e) => updateField("nationality", e.target.value)}
                  />
                </div>

                {/* Contact Number */}
                <h1 className="label-text">Contact Number </h1>
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
                    value={formData.phone}
                    onChange={(value) => updateField("phone", value)}
                  />
                </div>

                {/* Emergency Number */}
                <h1 className="label-text">Emergency Contact Number </h1>
                <div className="input-group phone-input-wrapper">
                  <FaPhone className="input-icon" />
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
                <h1 className="label-text">Current Address </h1>
                <div className="input-group">
                  <FaHome className="input-icon" />
                  <input type="text" placeholder="Current Address" required 
                    style={{ height: "40px", borderRadius: '5px' }}
                    className="text-input-field"
                    value={formData.address}
                    onChange={(e) => updateField("address", e.target.value)}
                  />
                </div>

                {/* Country */}
                <h1 className="label-text">Destination(s) </h1>
                <div className="input-group">
                  <FaGlobe className="input-icon" />
                  <input required type="text" placeholder="Destination" 
                    style={{ height: "40px", borderRadius: '5px' }}
                    value={formData.destination}
                    onChange={(e) => updateField("destination", e.target.value)}
                  />
                </div>

                {/* Document Type */}
                <h1 className="label-text">Document Applying for </h1>
                <div className="input-group">
                  <FaBriefcase className="input-icon" />
                  <select required style={{ height: "40px", borderRadius: '5px' }}
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

                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DocumentForm;

function setSubmitted(arg0: boolean) {
  throw new Error("Function not implemented.");
}
