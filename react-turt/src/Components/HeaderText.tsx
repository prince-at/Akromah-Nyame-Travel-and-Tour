import React, { useEffect, useState } from "react";
import { Navigate, NavLink } from "react-router-dom";

import companylogo from "././images-services/akromah-company-logo.png"// Adjust the path to your logo file

type Props = {  
  avatar: string;
  name: string;
  headText1: string;
  headText2: string;
  headText3: string;
  headText4: string;
  headText5: string; 
  headText6: string;
  // headText7: icon;
};

const HeaderText = ({
  headText1,
  headText2,
  headText3,
  headText4,
  headText5,
  headText6,
  // headText7,
}: Props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [goToNextPage, setGoToNextPage] = useState(false);

  if (goToNextPage) {
    <Navigate to="/About" />;
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const dropdownRef = React.useRef<HTMLUListElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false); // Close the dropdown if clicked outside
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <header>
      <nav className="header">
        <div className="companyLogo" >
          {" "}
          <NavLink to='/'>
          <img src={companylogo} alt="Company Logo" className="companyLogo" />
          </NavLink>
        </div>

        <div className="navMenu">
          <ul className="navList">
            <li className="text-size">{headText1}</li>
            <li
              className="text-size"
              onClick={() => {
                setGoToNextPage(true);
              }}
            >
              {headText2}
            </li>
            <div className="iconList">
              <li className="text-size3" onClick={toggleDropdown}>
                {headText3}
              </li>
              {isDropdownOpen && (
                <ul
                  className="dropdown"
                  ref={dropdownRef as React.RefObject<HTMLUListElement>}
                >
                  <a>
                    {" "}
                    <li>Work Aboard</li>
                  </a>
                  <hr />
                  <li>
                    <a href="#">Flight Ticket</a>
                  </li>
                  <hr />
                  <li>
                    <a href="#">Hotel Reservation</a>
                  </li>
                  <hr />
                  <li>
                    <a href="#">Travel Insurance</a>
                  </li>
                  <hr />
                  <li>
                    <a href="#">Visa Assistance</a>
                  </li>
                  <hr />
                  <li>
                    <a href="#">Passport Assistance</a>
                  </li>
                  <hr />
                  <li>
                    <a href="#">Birth Certificate</a>
                  </li>
                  <hr />
                  <li>
                    <a href="#">Study Abroad</a>
                  </li>
                </ul>
              )}
            </div>
            <li className="text-size">{headText4}</li>
            <li className="text-size">{headText5}</li>
            <li className="text-size">{headText6}</li>
            <ul> 
              
           
            <li className="hamburger-menu-item">Menu</li>
             </ul>
          </ul>
        </div>
        {/* <div className='buttons'><BookingButton textButton="Book Appointment" /></div> */}
      </nav>
    </header>
  );
};

export default HeaderText;
 
