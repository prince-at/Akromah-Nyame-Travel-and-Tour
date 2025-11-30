import { FaArrowAltCircleRight } from 'react-icons/fa';
import '../../src/Components/Pages/TheBrains.css'
import { TheBrainsData } from "./TheBrainsData";
import image12 from '../../src/images/image-12.png'
import flight from '../../src/images/Blue_and_White_Minimalist_Flight_Ticket_Instagram_Post-removebg-preview.png'
import { useNavigate } from 'react-router-dom';




const TheBrains = () => { 
const navigate =useNavigate();
  return ( 
    
    <div className="vision-background-1">
      <div className="image-for-visit">
        <h1 className="do-wanna-miss">Meet the Brains</h1>
      </div>
      <div className="meet-container">
        <div className="adventure-header">
        {TheBrainsData.map((item, index) => {
          return(
          <div key={index} className="meet-text" >
            <div className="meet-image-container">
            <img src={item.photo} alt="meet-photo" className="meet-photo"/>
            <div className="meet-brains">
            <h2 className='let-this-texts'>{item.title}</h2>
            <p>{item.name}</p>
            </div> 
            </div>
            
          </div>
        )})}
        </div>
         <div className='adventure'>
        <div className='start-co'>
            <h1 className='ready-to-start'> Ready to start your Adventure?</h1>
            <p className='lets-create'>Let us help you create the perfect journey. Our travel experts are ready to craft your dream vacation.				</p>
            <button className='planning' onClick={() => navigate('/work-description')}>Start Planning
                <FaArrowAltCircleRight className='arrow-circle'/>
            </button>
        </div>
        <img src={flight} alt='flight' className='flight'/>
        <img src={image12} alt='image12' className='image12'/> 
      </div>
      </div>
     
    </div>
  );
};

export default TheBrains;
