import { NavLink } from 'react-router-dom'
import './Pages/Css/PendingList.css'
import DocumentTable from './Tables/DocumentTable'
import { motion } from 'framer-motion'

const DocumentsApplication = () => {
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
                to="/study-applications"
                className={({ isActive }) =>
                    isActive ? 'pending-list-title active' : 'pending-list-title'
                }
            >
                Study
            </NavLink>
            <NavLink
                to="/work-applications"
                className={({ isActive }) =>
                    isActive ? 'pending-list-title active' : 'pending-list-title'
                }
            >
                Work
            </NavLink>
            <NavLink
                to="/documents-applications"
                className={({ isActive }) =>
                    isActive ? 'pending-list-title active' : 'pending-list-title'
                }
            >
                Documents
            </NavLink>
            <NavLink
                to="/visa-applications"
                className={({ isActive }) =>
                    isActive ? 'pending-list-title active' : 'pending-list-title'
                }
            >
                Flight Ticket
            </NavLink>
            <NavLink
                to="/hotel"
                className={({ isActive }) =>
                    isActive ? 'pending-list-title active' : 'pending-list-title'
                }
            >
                Hotel
            </NavLink>
            <div
              className= 'log-out'
              
            >
              Log out
            </div>
            </div></div>
            <DocumentTable 
                id='ID '
                fullName='FullName'
                dateOfBirth='DateOfBirth'
                gender='Gender'
                email='Email'
                nationality='Nationality'
                contactNumber='Contact'
                emergencyContact='EmergencyNo.'
                currentAddress='Address'
                passportNumber='PassportNo.'
                destination='Destination'
                documentType='DocumentType'
                status='Status'
                approvals='Approvals'
                action='Action'
            />
        </div>
    </motion.div> 
  )
}

export default DocumentsApplication