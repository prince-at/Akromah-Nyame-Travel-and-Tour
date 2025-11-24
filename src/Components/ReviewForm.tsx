// ...existing code...
import React, { useState } from "react";
import "././Pages/Css/Booking.css";
import emailjs from 'emailjs-com';

type FormState = {
  name: string;
  email: string;
  rating: number;
  review: string;
};

const ReviewForm: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    rating: 0,
    review: "",
  });
  type FormErrors = Partial<Record<keyof FormState, string>>;
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = (): boolean => {
    const e: FormErrors = {}; 
    if (!form.name.trim()) e.name = "required.";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Enter a valid email.";
    if (form.rating < 1 || form.rating > 5) e.rating = "rate us.";
    if (form.review.trim().length < 10) e.review = "Review must be at least 10 characters.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (k: keyof FormState, v: string | number) => {
    setForm((s) => ({ ...s, [k]: v }));
    setErrors((prev) => ({ ...prev, [k]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    emailjs.send(
      'service_xjjnidk',
      'template_u72gfwm',
      form,
      'sxNXhhdmfs4PERfr5'
    )
    try {
      // Replace this with actual API call
      await new Promise((r) => setTimeout(r, 800));
      console.log("Review submitted:", form);
      setSuccess(true);
      setForm({ name: "", email: "", rating: 0, review: "" });
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      // handle error
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (

    <form className="review-form" onSubmit={handleSubmit} noValidate>
      <h3 className="rf-title">Leave a Review</h3>
        <div className="label-container">
      <span className="label">Name</span>
      <label className="input-group"> 
       
        <input    
          type="text"
          value={form.name}
          onChange={(e) => handleChange("name", e.target.value)}
          placeholder="Your name"
          aria-invalid={!!errors.name}
          
        />
        {errors.name && <small className="error">{errors.name}</small>}
      </label>
      </div>
      <div className="label-container">
      <span className="label">Email</span>
      <label className="input-group">
        <input
          type="email"
          value={form.email}
          onChange={(e) => handleChange("email", e.target.value)}
          placeholder="you@example.com"
          aria-invalid={!!errors.email}
          
        />
        {errors.email && <small className="error">{errors.email}</small>}
      </label></div>

      
        <div className="label-container">
          <span className="label">Review</span>
      <label className="input-group">
        
        <textarea
          value={form.review}
          onChange={(e) => handleChange("review", e.target.value)}
          placeholder="Tell others about your experience..."
          rows={5}
          aria-invalid={!!errors.review}
        />
        {errors.review && <small className="error">{errors.review}</small>}
      </label></div>
      <div className="group">
        <span className="label">Rating</span>
        <div className="stars" role="radiogroup" aria-label="Rating">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              type="button"
              key={n}
              className={`star ${form.rating >= n ? "on" : ""}`}
              aria-checked={form.rating === n}
              role="radio"
              onClick={() => handleChange("rating", n)}
            >
              ★
            </button>
          ))}
        </div>
        {errors.rating && <small className="error">{errors.rating}</small>}
      </div>

      <div className="form-actions">
        <button className="review-submitting-btn" type="submit" disabled={submitting}>
          {submitting ? "Submitting..." : "Submit Review"}
        </button>
        {success && <div className="success">Thank you — your review was submitted.</div>}
      </div>
    </form>
    
  );
};

export default ReviewForm;