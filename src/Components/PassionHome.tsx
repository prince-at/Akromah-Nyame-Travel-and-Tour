import { FaArrowRight, FaCheckCircle } from 'react-icons/fa'
import '../../src/Components/Pages/Css/PassionHome.css'
import image6 from '../images/image-6.png'
import interviewsImage from '../images/WhatsApp Image 2025-06-29 at 3.08.04 PM.jpeg'
import { useNavigate } from 'react-router-dom'

const PassionHome = () => {
  const navigate = useNavigate();

  return (  
    <div className='passion-home-container'>
        <div className='passion-home-content'>
            <img src={image6} alt='About us' className='image-6' />
            <div className='passion-home-title'>
                <h1 className='passion-about'>About us</h1>
                <h2 className='journey-passion'>Your Journey, Our Passion</h2>
                <p className='passion-description'>We believe that travel is more than just visiting new places; 
                    it's about creating memories, experiencing diverse cultures, 
                    and discovering the wonders of the world. With years of experience in the travel industry, 
                    our dedicated team is committed to providing exceptional travel experiences tailored to 
                    your unique desires and needs.</p>
                    <div className='image-with-text'>
                        <img src={interviewsImage} alt='interviews' className='interviews-image'/>
                        <div className='passion-home-icons'>
                            <div className='icon-n-text'>
                                <FaCheckCircle style={{ color: '#4caf50', fontSize: '1.5rem', marginRight: '8px' }} />
                                <span className='icon-text'>Budget-Friendly</span>

                            </div>
                            <div className='icon-n-text'><FaCheckCircle style={{ color: '#4caf50', fontSize: '1.5rem', marginRight: '8px' }} />
                               <span className='icon-text'>Luxurious Getaways</span>
                              </div>
                             <div className='icon-n-text'><FaCheckCircle style={{ color: '#4caf50', fontSize: '1.5rem', marginRight: '8px' }} />
                               <span className='icon-text'>Trusted Local Guides</span>
                              </div>
                              <button className='passion-button' onClick={() => navigate( '/about')}>Learn More
                                <FaArrowRight style={{ marginLeft: '10px', fontSize: '1.1rem', verticalAlign: 'middle' }} />
                              </button>
                        </div>
                    </div>

            </div>

        </div>
    </div>
  )
}

export default PassionHome