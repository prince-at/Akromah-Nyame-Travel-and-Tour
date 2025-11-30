import { Link, useNavigate } from "react-router-dom"
import logo from "././images-services/akromah-company-logo.png"; // Adjust the path as needed
import './Pages/Css/Footer.css'
import Subscribe from "./Subscribe";
import Reviews from "./Reviews";
 

const FooterPage = () => {
  const navigate =useNavigate();
  return (
    <>
    <div className="footer-desktop">
    <footer className="footer">
          <div className="footer-content">
            <div className="footer-row">
          <div className="footer-logo">
           
            <img src={logo} alt="Company Logo" className="footer-logo-img" />
             <Reviews/>
             
          </div>
          <div className="footer-links">
            <h2 className="sub-news">Access Forms</h2>
            <Link to="/form-1" className="apply-links">Apply to Study Abroad</Link>
            <Link to="/work-form" className="apply-links">Apply to Work Abroad</Link>
            <Link to="/document-form" className="apply-links">Apply for Documents</Link>
            <Link to="/hotel-form" className="apply-links">Apply for Hotel Booking</Link>
             <Link to="/flight-form" className="apply-links">Apply for Flight Ticket</Link>
          </div>
          <div className="footer-contact">
            <h2 className="sub-news">Contact:</h2>
            <p>Located: Accra, Nungua Market </p>
            <div className="contacts-box">
            <p className="contact-mptel">Email: </p>
            <a href="mailto:ant.consult@gmail.com"  style={{color:"white"}}>ant.consult@gmail.com</a>
            </div>
            <div className="contacts-box">
            <p className="contact-mptel">Office: </p>
            <a href="tel:+233257344490" style={{color:"white"}}>+233 257 34 4490</a>
            </div>
            <div className="contacts-box">
            <p className="contact-mptel">Phone: </p>
            <a href="tel:+233502311638"  style={{color:"white"}} >+233 50 231 1638</a>
            </div>
            </div>
            <div className="footer-social">
            <h2 className="sub-news">Follow Us</h2>
            <a href="https://facebook.com/akromanyame" target="_blank" rel="noopener noreferrer"> <p style={{color:"white"}}>Facebook</p></a>
            <p>TikTok <a href="https://twitter.com/akromanyame" target="_blank" rel="noopener noreferrer"></a></p>
            <p>Instagram <a href="https://instagram.com/akromanyame" target="_blank" rel="noopener noreferrer"></a></p>
            <span className="footer-account" onClick={() => navigate('/login')}> Account</span>
            </div>
            <div className="footer-subscribe">
            <h2 className="sub-news">Subscribe to Our Newsletter</h2>
            <p>Stay updated with our latest offers and travel tips.</p>
            <span className="newsletter-footer-subscribe"><Subscribe/></span>
            </div>
          </div>
        
          <div className="footer-copy">
            &copy; {new Date().getFullYear()} Akroma Nyame Travel and Tour. All rights reserved.
           
          </div>
          
        </div>
    </footer>
    </div>

    <div className="footer-tablet">
      <footer className="footer">
          <div className="footer-content">
            <div className="footer-content-column">
                 <div className="footer-links">
            <h2 className="sub-news">Access Forms</h2>
            <Link to="/form-1" className="apply-links">Apply to Study Abroad</Link>
            <Link to="/work-form" className="apply-links">Apply to Work Abroad</Link>
            <Link to="/document-form" className="apply-links">Apply for Documents</Link>
            <Link to="/hotel-form" className="apply-links">Apply for Hotel Booking</Link>
             <Link to="/flight-form" className="apply-links">Apply for Flight Ticket</Link>
                </div>
                <Reviews/>
                 <div className="footer-logo">
                  
            <img src={logo} alt="Company Logo" className="footer-logo-img" />
                </div>
                  
                </div>
            <div className="footer-content-column">
              <div className="footer-contact">
            <h2 className="sub-news">Contact:</h2>
            <p >Located: Accra, Nungua Market </p>
            <div className="contacts-box">
            <p className="contact-mptel">Email: </p>
            <a href="mailto:ant.consult@gmail.com"  style={{color:"white"}}>ant.consult@gmail.com</a>
            </div>
            <div className="contacts-box">
            <p className="contact-mptel">Office: </p>
            <a href="tel:+233257344490" style={{color:"white"}}>+233 257 34 4490</a>
            </div>
            <div className="contacts-box">
            <p className="contact-mptel">Phone: </p>
            <a href="tel:+233502311638" className="phone-numbers" style={{color:"white"}} >+233 50 231 1638</a>
            </div>
            </div>
            <div className="footer-subscribe">
            <h2 className="sub-news">Subscribe to Our Newsletter</h2>
            <p>Stay updated with our latest offers and travel tips.</p>
            <span className="newsletter-footer-subscribe"><Subscribe/></span>
            </div>
              </div>

              <div className="footer-content-column">
                   <div className="footer-social">
                  <h2 className="sub-news">Follow Us</h2>
                  <p>Facebook <a href="https://facebook.com/akromanyame" target="_blank" rel="noopener noreferrer"></a></p>
                  <p>TikTok <a href="https://twitter.com/akromanyame" target="_blank" rel="noopener noreferrer"></a></p>
                  <p>Instagram <a href="https://instagram.com/akromanyame" target="_blank" rel="noopener noreferrer"></a></p>
                  <span className="footer-account" onClick={() =>navigate('/login')}> Account</span>
                  </div>

              </div>
              </div>
        
          <div className="footer-copy">
            &copy; {new Date().getFullYear()} Akroma Nyame Travel and Tour. All rights reserved.
           
          </div>
          
        
    </footer>

    </div>
    </>
  )
}

export default FooterPage