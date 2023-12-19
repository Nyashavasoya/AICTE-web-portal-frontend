import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { formsFilledState } from '../pages/atoms'; // Adjust the import path


const Dashboard = () => {

  const formsFilled = useRecoilValue(formsFilledState);
  const [progress, setProgress] = useState(0);

  // const progress = 40;

  useEffect(() => {
    // Calculate progress when formsFilled state changes
    const totalForms = 21;
    const newProgress = (formsFilled / totalForms) * 100;
    setProgress(newProgress);
  }, [formsFilled]);

  const data = {
    labels: ['Progress', 'Remaining'],
    datasets: [
      {
        data: [progress, 100 - progress],
        backgroundColor: ['indigo', '#ccc'],
        borderWidth: 0, // Set to 0 to remove the border
      },
    ],
  };

  const options = {
    cutout: '10%', // Adjust the size of the center hole
    rotation: -0.5 * Math.PI, // Rotate to start at the top
    circumference: 2 * Math.PI, // Control the length of the circumference
    maintainAspectRatio: false, // Ensure the chart maintains its aspect ratio
  };

  return (
    <div className="flex h-screen">
      {/* Main Content */}
      <div className="flex bg-gray-200 p-4 rounded-md shadow-md mt-2 h-72">
        {/* Doughnut Chart */}
        <div className="w-64 h-64">
          <Doughnut data={data} options={options} />
        </div>


        {/* Text next to the Circular Progress Tracker */}
        <div className="flex flex-col">
          <h2 className="text-lg font-bold mb-2">Progress</h2>
          <p>Scrutiny Review: --</p>
          <br/>
          <p>EVC Review: --</p>
        </div>
      </div>


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
