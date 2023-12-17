import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      
        {/* Main content of the dashboard */}
        {/* You can add your charts, widgets, etc., here */}

        {/* Notice Board on the Right */}
        <div className="bg-gray-200 p-4 ml-auto w-1/4 rounded-md shadow-md">
          <h2 className="text-xl font-bold mb-4">Notice Board</h2>
          {/* Add your notice board content here */}
          <ul>
            <li className="mb-2">
              <div className="bg-blue-200 text-blue-800 p-2 rounded-md">Important:</div>
              Notice 1 - Lorem ipsum dolor sit amet.
            </li>
            <li className="mb-2">
              <div className="bg-green-200 text-green-800 p-2 rounded-md">Update:</div>
              Notice 2 - Consectetur adipiscing elit.
            </li>
            <li className="mb-2">
              <div className="bg-yellow-200 text-yellow-800 p-2 rounded-md">Reminder:</div>
              Notice 3 - Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </li>
          </ul>
        </div>
      </div>
  );
}

export default Dashboard;
