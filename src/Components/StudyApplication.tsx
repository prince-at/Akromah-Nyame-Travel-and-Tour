import { NavLink } from 'react-router-dom'
import './Pages/Css/PendingList.css'

import StudyTable from './Tables/StudyTable'

const PendingStudy = () => {
  return (
    <div className='pending-listings'>
        <div className='pending-list-item'>
               <div>
        <div className='ta-caption'>
            <NavLink
                to="/study-applications"
                className={({ isActive }) =>
                    isActive ? 'pending-list-title active' : 'pending-list-title'
                }
            >Study</NavLink>
            <NavLink
                to="/work-applications"
                className={({ isActive }) =>
                    isActive ? 'pending-list-title active' : 'pending-list-title'
                }
            >Work</NavLink>
            <NavLink
                to="/documents-applications"
                className={({ isActive }) =>
                    isActive ? 'pending-list-title active' : 'pending-list-title'
                }
            >Documents</NavLink>
            <NavLink
                to="/visa-applications"
                className={({ isActive }) =>
                    isActive ? 'pending-list-title active' : 'pending-list-title'
                }
            >Flight Ticket</NavLink>
            <NavLink
                to="/hotel"
                className={({ isActive }) =>
                    isActive ? 'pending-list-title active' : 'pending-list-title'
                }
            >Hotel</NavLink>
            <div
              className= 'log-out'
              
            >
              Log out
            </div>
            </div></div>
            <StudyTable 
                id='ID '
                fullName='FullName'
                gender='Gender'
                dateOfBirth='DateOfBirth'
                email='Email'
                nationality='Nationality'
                contactNumber='Contact'
                emergencyContact='EmergencyNo.'
                currentAddress='Address'
                passportNumber='PassportNo.'
                destination='Destination'
                qualificationSeeking='QualificationSeeking'
                scholarship='Scholarship'
                programType='ProgramType'
                status='Status'
                approvals='Approvals'
                action='Action'
            />
        </div>
    </div>
  )
}

export default PendingStudy