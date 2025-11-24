import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaPhone } from 'react-icons/fa';
import watsapp from "./images-services/Download from pngedits.com - 10951.png"
import gmail from "./images-services/pngwing.com (3).png"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Replace with your form submission logic or API call
    console.log('Form submitted:', formData);
    setSubmitted(true);
    emailjs.send(
        'service_1llq84p',
        'template_sfrzqo9',
        formData,
        'TKq-F8d79Xf1rbS6t'
      )
      .then(() => { 
        setSubmitted(true);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };
//  /+233 50 231 1638 
  return (
    <div>
    <div className='contact-main-container'>
        <div className='phone-numbers'>
          <div className='contact-line-container'>
            <h1 className='contact-lines'> Office-Line</h1>
            <div className='contact-title-background'>
              <FaPhone size={15}/>
          <a href='tel:+233257344490' className='tel'>+233 257 34 4490 </a>
          </div>
        
        </div>

         <div className='contact-line-container'>
            <h1 className='contact-lines'> Office-Line</h1>
            <div className='contact-title-background'>
              <FaPhone size={15}/>
          <a href='tel:+233502311638 ' className='tel'>+233 50 231 1638 </a>
          </div>
        
        </div>

        <div className='contact-line-container'>
            <h1 className='contact-lines'>Whatsapp us</h1>
            <div className='contact-title-background'>
              <img src={watsapp} alt='whatsapp-icon' className='whatsapp-icon'/>
          <a href='tel:+233201613161' className='tel'>+233 201 61 3161</a>
          </div>
        
        </div>

        <br/>

      <div className='contact-line-container'>
            <h1 className='contact-lines'>Email</h1>
            <div className='contact-title-background'>
              <img src={gmail} alt='whatsapp-icon' className='whatsapp-icon'/>
          <a href='mailto:ant.consult@gmail.com' className='tel'>ant.consult@gmail.com</a>
          </div>
        
        </div>

       
        </div>

    <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-xl w-full py-5 " >
      <h2 className="text-2xl font-bold mb-4 text-center">Get in Touch with us</h2>
      {submitted ? (
        <p className="text-green-600 text-center">Thanks for reaching out! We'll get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border rounded p-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border rounded p-2"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            required
            className="border rounded p-2"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white rounded p-2 hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
    </div>
    </div>
  );
}
