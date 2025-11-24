import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: '',
    offers: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    console.log('Booking Details:', formData);
    setSubmitted(true);
    emailjs.send( 
      'service_gaq4176',
      'template_xmq9ubl',
      formData,
      'HhqUyF1jUN-Tko0hm'
    ).then(() => { 
        setSubmitted(true);
      })
      .catch((error) => {
        console.error('Error sending bookings:', error);
      });
    // You can also send this to a backend or API endpoint here
  };

  return (
    <div className="max-w-2xl mx-auto p-8 h-full bg-white  shadow-lg mt-12 border-2 border-gray-100">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Book Your Appointment</h2>

      {submitted ? (
        <div className="text-center p-4 bg-green-100 border border-green-300 text-green-700  shadow-md">
          <p className="text-lg font-semibold">Thank you! Your booking was submitted, we'll be expecting you.</p>
        </div>
      ) : ( 
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
            />
          </div>

          {/* Date */}
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="date">Select Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
            />
          </div>

          {/* Time */}
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="time">Select Time</label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
            />
          </div>

          {/* Guests */}
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="guests">Number of Guests</label>
            <input
              type="number"
              id="guests"
              name="guests"
              placeholder="e.g., 4"
              min="1"
              max="20"
              value={formData.guests}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
            />
          </div>

          {/* Reason / Offer */}
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="offers" >Reason / Special Requests</label>
            <input
              type="text"
              id="offers"
              name="offers"
              placeholder="Reason"
              value={formData.offers}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
              required
           />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6  shadow-lg transition focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Confirm Booking
          </button>
        </form>
      )}
    </div>
 
);
 } 