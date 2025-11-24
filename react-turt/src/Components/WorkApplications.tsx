import {  NavLink } from 'react-router-dom'
import './Pages/Css/PendingList.css'
import WorkTable from './Tables/WorkTable'

const WorkApplications = () => {
  return (
    <div className='pending-listings'>
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
    </div>
  )
}

export default WorkApplications