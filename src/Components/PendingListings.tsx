
import { NavLink, useNavigate } from 'react-router-dom'
import "../Components/Pages/Css/PendingList.css"
import HotelTable from './Tables/HotelTable'
import { motion } from 'framer-motion';

const PendingListings = () => {
  const navigate =useNavigate();
 return ( 
    <motion.div className='pending-listings'
    key={location.pathname}
     initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -100 }}
    transition={{ duration: 0.3 }}
    >
      <div className='pending-list-item'>
        <div>
          <div className='ta-caption'>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'pending-list-title active' : 'pending-list-title'
              }
              to="/study-applications"
            >
              Study
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'pending-list-title active' : 'pending-list-title'
              }
              to="/work-applications"
            >
              Work
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'pending-list-title active' : 'pending-list-title'
              }
              to="/documents-applications"
            >
              Documents
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'pending-list-title active' : 'pending-list-title'
              }
              to="/visa-applications"
            >
              Flight Ticket
            </NavLink>
            
             <NavLink
              className={({ isActive }) =>
                isActive ? 'pending-list-title active' : 'pending-list-title'
              }
              to="/hotel"
            >
              Hotel
            </NavLink>
            <div onClick ={()=> navigate('login')}
              className= 'log-out'
              
            >
              Log out
            </div>
          </div>
        </div>
        <HotelTable
        id='ID'
          fullName='FullName'
          gender='Gender'
          nationality='Nationality'
          email='Email'
          contactNumber='Contact'
          emergencyContact='EmergencyNo.'
          currentAddress='Address'
          passportNumber='PassportNo.'
          destination='Destination'
          checkInDate='CheckInDate'
          checkOutDate='CheckOutDate'
          roomType='RoomType'
          otherRoom='OtherRoom'
          bedPreference='BedPreference'
          status='Status'
          approvals='Approvals'
          action='Action' />
        
      </div>
    </motion.div>
  )
}

export default PendingListings