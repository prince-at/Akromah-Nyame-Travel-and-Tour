import {  NavLink } from 'react-router-dom'
import './Pages/Css/PendingList.css'
import WorkTable from './Tables/WorkTable'
import { motion } from 'framer-motion'

const WorkApplications = () => {
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
            <div
              className= 'log-out'
              
            >
              Log out
            </div>
          </div>
        </div>
        <WorkTable 
          fullName='FullName'
          dateOfBirth='DateOfBirth'
          gender='Gender'
          email='Email'
          nationality='Nationality'
          contactNumber='Contact'
          emergencyContact='EmergencyNo'
          currentAddress='currentAddress'
          passportNumber='PassportNo'
          destination='Destination'
          workType='WorkType' 
          status='Status'
          approvals='Approvals'
         action='Action'
        //  date='Date'
        />
      </div>
    </motion.div>
  )
}

export default WorkApplications