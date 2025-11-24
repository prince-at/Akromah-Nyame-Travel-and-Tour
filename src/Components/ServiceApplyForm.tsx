import React, { useState } from "react";
import './Pages/Css/ApplyForm.css'; // Adjust the path as necessary

const ServiceApplyForm = () => {
  const [showForm, setShowForm] = useState(false);
 
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Application Submitted!");
    setShowForm(false);
  };

  return (
    <div>
      <button onClick={() => setShowForm(true)} className="apply-now">
        Apply to Study Abroad
      </button>

     {showForm && (
  <div className="form-modal">
    <div
      className="form-container"
      style={{
        maxHeight: '95vh',
        overflowY: 'auto',
        scrollbarWidth: 'thin',
        scrollbarColor: '#888 #f1f1f1',
        
        paddingRight: '10px',
        maxWidth: '450px',
        margin: '0 auto',
      }}
    >
      <span className="close" onClick={() => setShowForm(false)}>
        &times;
      </span>
      <h2 className="education">Please Submit form for further Processing.</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Full Name" required />
        <input type="text" placeholder="Date of Birth" required />
        <input type="email" placeholder="Email" required />
        <input type="number" placeholder="Contact Number" required pattern="[0-9]+" inputMode="numeric"/>
        <input type="number" placeholder="Alternate Contact Number" required pattern="[0-9]+" inputMode="numeric"/>
        <input type="text" placeholder="Current Address" required />
        <input type="text" placeholder="Permanent Address" required />
        <select required className="country-select">
          <option value="">Select Country</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="Canada">Canada</option>
          <option value="Australia">Australia</option>
          <option value="Germany">Germany</option>
          <option value="France">France</option>
          <option value="Japan">Japan</option>
          <option value="China">China</option>
          <option value="India">India</option>
          <option value="South Africa">South Africa</option>
          {/* Add more countries as needed */}
        </select>
        <h1 className="certificate">What Certificate do you have?</h1>
        <select required className="country-select">
            
          <option value="">Qualification Held</option>
          <option value="High-school">High School</option>
          <option value="Bachelor's-degree">Bachelor's Degree</option>
          <option value="Master's-degree">Master's Degree</option>
        </select>
        <h1 className="certificate">Which Qualification are you going for?</h1>
        <select required className="country-select">
          <option value="">Qualification Seeking</option>
          <option value="High-school">Bachelor's Degree</option>
          <option value="Bachelor's-degree">Master's Degree</option>
          <option value="phd">PhD</option>
        </select>
        <h1 className="certificate">Are you Seeking for Scholarship Opportunity?</h1>
         <select required className="country-select">
          <option value="">Choose Scholarship type</option>
          <option value="High-school">Fully Funded</option>
          <option value="Bachelor's-degree">Partially Funded</option>
          <option value="Bachelor's-degree">None</option>
        </select>
         <input type="text" placeholder="Program to Study" required />
         <h1 className="certificate">Upload Document (Certificate, Transcript, etc.)</h1>
        <input type="file" accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" required />
        <textarea placeholder="Why are you applying?"  />
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
)}
    </div>
  );
};

export default ServiceApplyForm;
