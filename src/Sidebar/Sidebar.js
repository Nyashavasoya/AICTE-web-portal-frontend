// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom'; // If you are using React Router
import './Sidebar.css'; // Adjust the path based on your project structure
import './logo.jpeg';


const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Organization Logo */}
      <div className="logo">
        <img src="logo.jpeg" alt="Organization Logo" />
      </div>

      {/* Sidebar Navigation */}
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/application-process">Application Process</Link></li>
        <li><Link to="/chat-with-handbook">Chat with Handbook</Link></li>
        <li><Link to="/my-documents">My Documents</Link></li>
        <li><Link to="/payments">Payments</Link></li>
        <li><Link to="/progress-tracker">Progress Tracker</Link></li>
        <li><Link to="/notice">Notice</Link></li>
        <li><Link to="/calendar">Calendar</Link></li>
      </ul>

      {/* Logout Button */}
      <div className="logout">
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Sidebar;
