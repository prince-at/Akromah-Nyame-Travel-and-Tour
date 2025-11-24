import "../Pages/Css/PendingList.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

type Props = {
    
        id: string;
        fullName: string;
        dateOfBirth: string;
        gender: string;
        email: string;
        nationality: string;
        contactNumber: string;
        emergencyContact: string;
        currentAddress: string;
        destination: string;
        documentType: string;
        passportNumber: string;
        status: string;
        approvals: string;
        action: string;
    
}

const TableList = ({
    id,
    fullName,
    dateOfBirth,
    gender,
    email,
    nationality,
    contactNumber,
    emergencyContact,
    currentAddress,
    destination,
    documentType,   
    passportNumber,
    status,
    approvals,
    action          
}: Props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [state, setLocationState] = useState<Props | null>((location.state as Props) ?? null);
  // ...existing code...
  // const [users, setUsers] = useState<Props[]>([]);
  // useEffect(() => {
  //   // Fetch data or perform any necessary side effects
  //   axios.get('http://localhost:5000/getUsers')
  //   .then(akromanyametravels => setUsers(akromanyametravels.data))
  //   .catch(err => alert(err));
  // }, []);
  //locatin state
  useEffect(() => {
    setLocationState((location.state as Props) ?? null);
  }, [location.state]);

  const handleRowClick = () => {
    
      // navigate to a details page (adjust path as needed) and pass the row state
      navigate('/work-applications');
    
  };

  return (
    <>

  <div className="table-container">
    <span className="list">Pending Listings</span>
    <table className="table-list" >
      <thead className='thead'>
        <tr className="bg-gray-100 hover:bg-gray-50" >
          <th className="table-text">{id}</th>
          <th className="table-text">{fullName}</th>
        <th className="table-text">{dateOfBirth}</th>
          <th className="table-text">{gender}</th>
            <th className="table-text">{email}</th>
          <th className="table-text">{nationality}</th>
        
          <th className="table-text">{contactNumber}</th>
          <th className="table-text">{emergencyContact}</th>
          <th className="table-text">{currentAddress}</th>
          <th className="table-text">{passportNumber}</th>
          <th className="table-text">{destination}</th>
            <th className="table-text">{documentType}</th>
          <th className="table-text">{status}</th>
          <th className="table-text">{approvals}</th>
          <th className="table-text">{action}</th>
        </tr>
      </thead>
      <tbody className="hover:bg-gray-50">
        {state &&(
        <tr className="hover:bg-gray-50" onClick={handleRowClick}>
            <td className="border-b">{state.id}</td>
            <td className="border-b">{state.fullName}</td>
            <td className="border-b">{state.dateOfBirth}</td>
            <td className="border-b">{state.gender}</td>
             <td className="border-b">{state.email}</td>
            <td className="border-b">{state.nationality}</td>
            <td className="border-b">{state.contactNumber}</td>
            <td className="border-b">{state.emergencyContact}</td>
            <td className="border-b">{state.currentAddress}</td>
            <td className="border-b">{state.passportNumber}</td>
            <td className="border-b">{state.destination}</td>
            <td className="border-b">{state.documentType}</td>
            <td className="border-b">{state.status}</td>
            <td className="border-b">{state.approvals}</td>
            <td className="border-b">{state.action}</td>
          </tr>
          )}

      </tbody>
    </table>
  </div></> 
)
// ...existing code...
}

export default TableList