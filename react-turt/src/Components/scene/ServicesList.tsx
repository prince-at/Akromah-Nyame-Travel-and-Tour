
import WorkAbroad from "../../assets/School-Africa-USA-Visa-Application-Guides.jpg"
import StudyAbroad from "../../assets/Ben-Headers-7.png.jpg"
import TravelDocs from "../../assets/After-School-Africa-USA-Visa-Application-Guide.jpg"
import { FaBriefcase, FaGraduationCap, FaArrowRight , FaPlaneDeparture } from "react-icons/fa"; // Import icons


export const ServicesData= [
    {   image: WorkAbroad,
        title: 'Work Abroad',
        descripton: 'Contries for Work offers: Dubai, Canada, Austrialia, Luxembourg, Germany, ... ',
        button: 'Apply Now',
        text: 'APPLY FOR THE OPPORTUNITY TO WORK ABROAD.',
        icon: <FaBriefcase /> ,// Add icon for Work Abroad
        icons: <FaArrowRight /> ,// Add arrow left icon
        desc: 'We connect qualified individuals with reputable employers across industries globally such as hospitality, healthcare, construction, transportation, etc.'

    },
    {   image: StudyAbroad,
        title: 'Study Abroad',
        descripton: 'Contries for Study offers: USA, UK, GERMANY, NEW ZEALAND, ...',
        button: 'Apply Now',
        text: 'STUDY ABROAD SERVICES WITH / WITHOUT SCHOLARSHIPS.',
        icon: <FaGraduationCap />, // Add icon for Study Abroad
        desc: 'We provide comprehensive support for students seeking to study abroad, including university selection, application assistance, and visa guidance.',

    },
    {   image: TravelDocs,
        title: 'Documents',
        descripton: 'Documents: Work VISA, Visit VISA, STUDENT VISA, Passport, Residency Permit, ID, ...',
        button: 'Apply Now',
        icon: <FaPlaneDeparture/> ,// Add flight icon
        text: 'EVERYTHING YOU NEED TO TRAVEL WITH CONFIDENCE.',
        desc: 'We assist with all necessary travel documents, including visas, passports, and residency permits, etc. Ensuring a smooth travel experience.',

    }
]