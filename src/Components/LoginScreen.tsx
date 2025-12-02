import  { useState } from "react";
import '../Components/Pages/Css/LoginScreen.css';

import { motion } from "framer-motion";


const LoginScreen = () => {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <motion.div className="login-screen"
    
    key={location.pathname}
     initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -100 }}
    transition={{ duration: 0.3 }}>
      <div className='login-container'>
        <div className='login-form-container'>
          <form className='login-form'>
            <div className='login-input-group'>
              <label htmlFor="email" className='login-label'>Username or Email </label>
              <input type="text" id="email" name="email" required className='login-input' placeholder='email'/>
            </div>
            <div className='login-input-group'>
              <label htmlFor="password" className='login-label'>Password:</label>
              <div style={{ display: "flex", alignItems: "center" }}>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  required
                  className='login-input'
                  placeholder='password'
                  style={{ flex: 1 }}
                  
                /> <button
      type="button"
      onClick={() => setShowPassword((prev) => !prev)}
      style={{
        marginLeft: "8px",
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: 0,
        display: "flex",
        alignItems: "center"
      }}
      tabIndex={-1}
      aria-label={showPassword ? "Hide password" : "Show password"}
    >
      {showPassword ? (
        // Eye closed SVG
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M3 3l18 18" stroke="currentColor" strokeLinecap="round"/>
          <path d="M17.94 17.94A10.94 10.94 0 0 1 12 19c-5 0-9.27-3.11-10.94-7.5a10.97 10.97 0 0 1 2.11-3.36M9.53 9.53A3.5 3.5 0 0 0 12 15.5c1.38 0 2.63-.78 3.24-1.94M14.47 14.47A3.5 3.5 0 0 1 12 8.5c-.38 0-.74.07-1.08.18" stroke="currentColor"/>
        </svg>
      ) : (
        // Eye open SVG
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" stroke="currentColor"/>
          <circle cx="12" cy="12" r="3" stroke="currentColor"/>
        </svg>
      )}
    </button>
              </div>
            </div>
            <div className='login-button-container'>
              <h1>Admin only</h1>
              <button type="submit" className='login-button' onClick={() => window.location.href='/hotel'}>Login</button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  )
}

export default LoginScreen