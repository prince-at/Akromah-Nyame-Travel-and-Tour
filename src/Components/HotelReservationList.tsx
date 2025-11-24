import { button, desc } from "framer-motion/client";
import flight from "../../src/images/close-up-man-prepared-traveling.jpg"
import hotel from "../../src/assets/receptionist-elegant-suit-work-hours-with-customer.jpg"
import passport from "../../src/assets/After-School-Africa-USA-Visa-Application-Guide.jpg"
import { FaBriefcase, FaGraduationCap, FaArrowRight , FaPlaneDeparture } from "react-icons/fa"; // Import icons


export const HotelReservationData= [
    {   image1: flight,
        title1:'Flight Ticket',
        descripton1: 'Contries for Work offers: Dubai, Canada, Austrialia, Luxembourg, Germany, ... ',
        button1: 'Apply Now',
        text1: 'APPLY FOR THE OPPORTUNITY TO WORK ABROAD.',
        icon1: <FaBriefcase /> ,// Add icon for Work Abroad
        icons1: <FaArrowRight /> ,// Add arrow left icon
        desc1: 'We connect qualified individuals with reputable employers across industries globally such as hospitality, healthcare, construction, transportation, etc.'

    },
    {   image1: hotel,
        title1: 'Hotel Reservation',
        descripton1: 'Contries for Study offers: USA, UK, GERMANY, NEW ZEALAND, ...',
        button1: 'Apply Now',
        text1: 'STUDY ABROAD SERVICES WITH / WITHOUT SCHOLARSHIPS.',
        icon1: <FaGraduationCap />, // Add icon for Study Abroad
        desc1: 'We provide comprehensive support for students seeking to study abroad, including university selection, application assistance, and visa guidance.',

    },
    {   image1: passport,
        title1: 'Passport & Visa',
        descripton1: 'Documents: Work VISA, Visit VISA, STUDENT VISA, Passport, Residency Permit, ID, ...',
        button1: 'Apply Now',
        icon1: <FaPlaneDeparture/> ,// Add flight icon
        text1: 'EVERYTHING YOU NEED TO TRAVEL WITH CONFIDENCE.',
        desc1: 'We assist with all necessary travel documents, including visas, passports, and residency permits, etc. Ensuring a smooth travel experience.',

    }
]