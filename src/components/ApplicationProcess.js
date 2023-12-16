// ApplicationProcess.js

import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { FaDotCircle } from "react-icons/fa";

const FormNavItem = ({ to, iconClass, formName }) => {
  const { pathname } = useLocation();
  const isActive = pathname.includes(to);

  return (
    <li className="mr-6">
      <Link to={to} className={`flex items-center hover:opacity-75 ${isActive ? 'text-blue-500' : ''}`}>
      {React.cloneElement(iconClass, { className: `mr-2` })}
        {isActive && <span className="hidden md:inline">{formName}</span>}
      </Link>
    </li>
  );
};


const ApplicationProcess = () => {

  return (
    <div>
      {/* Header Bar */}
      <nav className="bg-white p-4">
        <ul className="flex">
          
            <FormNavItem to="/application-process/institute-details" iconClass={<FaDotCircle />} formName="Institute Details"/>
          
          
           <FormNavItem to="/application-process/more-institute-details" iconClass={<FaDotCircle />} formName="More Institute Details" />
          
          
           <FormNavItem to="/application-process/subsection" iconClass={<FaDotCircle />} formName="Subsection-Model" />
          
          
           <FormNavItem to="/application-process/organisation-details" iconClass={<FaDotCircle />} formName="Organisation Details" />
          
          
           <FormNavItem to="/application-process/trustee-details" iconClass={<FaDotCircle />} formName="Trustee Details" />
          
          
           <FormNavItem to="/application-process/contact-person-details" iconClass={<FaDotCircle />} formName="Contact Person Details" />
          
          
           <FormNavItem to="/application-process/questionnaire" iconClass={<FaDotCircle />} formName="Questionnaire" />
          
          
           <FormNavItem to="/application-process/program-details" iconClass={<FaDotCircle />} formName="Program Details" />
          
          
           <FormNavItem to="/application-process/course-details" iconClass={<FaDotCircle />} formName="Course Details" />
          
          
           <FormNavItem to="/application-process/land-details" iconClass={<FaDotCircle />} formName="Land Details" />
          
          
           <FormNavItem to="/application-process/more-land-details" iconClass={<FaDotCircle />} formName="More Land Details" />
          
          
           <FormNavItem to="/application-process/building-details" iconClass={<FaDotCircle />} formName="Building Details" />
          
          
           <FormNavItem to="/application-process/more-building-details" iconClass={<FaDotCircle />} formName="More Building Details" />
          
          
           <FormNavItem to="/application-process/laboratory-details" iconClass={<FaDotCircle />} formName="Laboratory Details" />
          
          
           <FormNavItem to="/application-process/administrativeArea-details" iconClass={<FaDotCircle />} formName="Administrative Area Details" />
          
          
           <FormNavItem to="/application-process/amenititesArea-details" iconClass={<FaDotCircle />} formName="Amenitites Area Details" />
          
          
           <FormNavItem to="/application-process/circulationArea-details" iconClass={<FaDotCircle />} formName="Circulation Area Details" />
          
          
           <FormNavItem to="/application-process/instructionalArea-details" iconClass={<FaDotCircle />} formName="Instructional Area Details" />
          
          
           <FormNavItem to="/application-process/infrastructuralArea-details" iconClass={<FaDotCircle />} formName="Infrastructural Area Details" />
          
          
           <FormNavItem to="/application-process/hostelfacilities-details" iconClass={<FaDotCircle />} formName="Hostel Facilites Details" />
          
          
           <FormNavItem to="/application-process/computationalfacilities-details" iconClass={<FaDotCircle />} formName="Computational Facilities Details" />
          
          
          {/* Add more links for other forms */}
        </ul>
      </nav>

      {/* Content Area */}
      <div className="container mx-auto mt-8">
        <Outlet />
      </div>
    </div>
  );
};

export default ApplicationProcess;
