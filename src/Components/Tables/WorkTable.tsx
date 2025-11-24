import "../Pages/Css/PendingList.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
// import { useLocation } from 'react-router-dom';



type Props = {
        fullName: string;
        dateOfBirth: string;
        gender: string;
        email: string;
        nationality: string; 
        contactNumber: string;
        emergencyContact: string;
        currentAddress: string;
        passportNumber: string;
        destination: string;
        workType: string;
        status: string;
        approvals: string;
        action: string;
        // date: string;
    
}

const TableList = ({
    fullName,
    dateOfBirth,
    gender,
    email,
    nationality,
    contactNumber,
    emergencyContact,
    currentAddress,
    passportNumber,
    destination,
    workType,
    status,
    approvals,
    action,
    // date
}: Props) => {
  // const location = useLocation();
  // const [submissions, setSubmissions] = useState<Props[]>([]);
  const [applications] = useState<Props[]>([]);


  // useEffect(() => {
  //   const fetchApplications = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:5000/api/applications');
  //       setApplications(response.data);
  //       setLoading(false);
  //     } catch (err) {
  //       console.error('Error fetching applications:', err);
  //       setError('Failed to load applications');
  //       setLoading(false);
  //     }
  //   };
  //   fetchApplications();
  // }, []);
  //   if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error}</div>;




  return (
    <>

  <div className="table-container">
    <span className="list">Pending Listings</span>
    <table className="table-list" >
      <thead className='thead'>
        <tr className="bg-gray-100 hover:bg-gray-50" >
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
          <th className="table-text">{workType}</th>
          <th className="table-text">{status}</th>
          <th className="table-text">{approvals}</th>
          <th className="table-text">{action}</th>
          {/* <th className="table-text">{date}</th> */}
        </tr>
      </thead>
      <tbody className="hover:bg-gray-50">
        {applications.map((app, index) => (
          <tr key={index} className="hover:bg-gray-50">
            <td className="border-b">{app.fullName}</td>
            <td className="border-b">{app.gender}</td>
            <td className="border-b">{app.email}</td>
            <td className="border-b">{app.nationality}</td>
            <td className="border-b">{app.contactNumber}</td>
            <td className="border-b">{app.emergencyContact}</td>
            <td className="border-b">{app.currentAddress}</td>
            <td className="border-b">{app.passportNumber}</td>
            <td className="border-b">{app.destination}</td>
            <td className="border-b">{app.workType}</td>
            <td className="border-b">{app.status}</td>
            <td className="border-b">{app.approvals}</td>
            <td className="border-b">{app.action}</td>
            {/* <td className="border-b">{app.date}</td> */}
          </tr>
        ))}

      </tbody>
    </table>
  </div></> 
)
// ...existing code...
}

export default TableList




// import "../Pages/Css/PendingList.css"
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useEffect, useState } from 'react';
// import axios from "axios";


// type Props = {
//         fullName: string;
//         dateOfBirth: string;
//         gender: string;
//         email: string;
//         nationality: string; 
//         contactNumber: string;
//         emergencyContact: string;
//         currentAddress: string;
//         passportNumber: string;
//         destination: string;
//         workType: string;
//         status: string;
//         approvals: string;
//         action: string;
//         // date: string;
    
// }

// const TableList = ({
//     fullName,
//     dateOfBirth,
//     gender,
//     email,
//     nationality,
//     contactNumber,
//     emergencyContact,
//     currentAddress,
//     passportNumber,
//     destination,
//     workType,
//     status,
//     approvals,
//     action,
    
// }: Props) => {
 
//   const [applications, setApplications] = useState<Props[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchApplications = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/applications');
//         setApplications(response.data);
//         setLoading(false);
//       } catch (err) {
//         console.error('Error fetching applications:', err);
//         setError('Failed to load applications');
//         setLoading(false);
//       }
//     };
//     fetchApplications();
//   }, []);
//     if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

  


//   return (
//     <>

//   <div className="table-container">
//     <span className="list">Pending Listings</span>
//     <table className="table-list" >
//       <thead className='thead'>
//         <tr className="bg-gray-100 hover:bg-gray-50" >
//           <th className="table-text">{fullName}</th>
//           <th className="table-text">{dateOfBirth}</th>
//           <th className="table-text">{gender}</th>
//           <th className="table-text">{email}</th>
//           <th className="table-text">{nationality}</th>
//           <th className="table-text">{contactNumber}</th>
//           <th className="table-text">{emergencyContact}</th>
//           <th className="table-text">{currentAddress}</th>
//           <th className="table-text">{passportNumber}</th>
//           <th className="table-text">{destination}</th>
//           <th className="table-text">{workType}</th>
//           <th className="table-text">{status}</th>
//           <th className="table-text">{approvals}</th>
//           <th className="table-text">{action}</th>
          
//         </tr>
//       </thead>
//       <tbody className="hover:bg-gray-50">
//         {applications.map((app, index) => (
//           <tr key={index} className="hover:bg-gray-50">
//             <td className="border-b">{app.fullName}</td>
//             <td className="border-b">{app.gender}</td>
//             <td className="border-b">{app.email}</td>
//             <td className="border-b">{app.nationality}</td>
//             <td className="border-b">{app.contactNumber}</td>
//             <td className="border-b">{app.emergencyContact}</td>
//             <td className="border-b">{app.currentAddress}</td>
//             <td className="border-b">{app.passportNumber}</td>
//             <td className="border-b">{app.destination}</td>
//             <td className="border-b">{app.workType}</td>
//             <td className="border-b">{app.status}</td>
//             <td className="border-b">{app.approvals}</td>
//             <td className="border-b">{app.action}</td>
            
//           </tr>
//         ))}

//       </tbody>
//     </table>
//   </div></> 
// )
// .
// }

// export default TableList