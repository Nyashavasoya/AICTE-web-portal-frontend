// HostelFacilitiesForm.js

import React, { useState } from 'react';

const HostelFacilitiesForm = () => {
  const [formData, setFormData] = useState({
    whetherTheHostelFacilitiyIsAvailable: false,
    girlsHostel: false,
    numberOfRooms: 0,
    hostelCapacity: 0,
    boysHostel: false,
    numberOfRoomsForBoys: 0,
    totalCapacity: 0,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for form submission or API call here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-gray-100 rounded-md">
      <h2 className="text-3xl font-bold mb-4">Hostel Amenities</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="whetherTheHostelFacilitiyIsAvailable" className="block text-gray-800 text-sm font-medium mb-2">
            Hostel Facility Availability
          </label>
          <input
            type="checkbox"
            id="whetherTheHostelFacilitiyIsAvailable"
            name="whetherTheHostelFacilitiyIsAvailable"
            checked={formData.whetherTheHostelFacilitiyIsAvailable}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="girlsHostel" className="block text-gray-800 text-sm font-medium mb-2">
            Girls Hostel
          </label>
          <input
            type="checkbox"
            id="girlsHostel"
            name="girlsHostel"
            checked={formData.girlsHostel}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="numberOfRooms" className="block text-gray-800 text-sm font-medium mb-2">
            Number of Rooms
          </label>
          <input
            type="number"
            id="numberOfRooms"
            name="numberOfRooms"
            value={formData.numberOfRooms}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="hostelCapacity" className="block text-gray-800 text-sm font-medium mb-2">
            Hostel Capacity
          </label>
          <input
            type="number"
            id="hostelCapacity"
            name="hostelCapacity"
            value={formData.hostelCapacity}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="boysHostel" className="block text-gray-800 text-sm font-medium mb-2">
            Boys Hostel
          </label>
          <input
            type="checkbox"
            id="boysHostel"
            name="boysHostel"
            checked={formData.boysHostel}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="numberOfRoomsForBoys" className="block text-gray-800 text-sm font-medium mb-2">
            Number of Rooms for Boys
          </label>
          <input
            type="number"
            id="numberOfRoomsForBoys"
            name="numberOfRoomsForBoys"
            value={formData.numberOfRoomsForBoys}
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="totalCapacity" className="block text-gray-800 text-sm font-medium mb-2">
            Total Capacity
          </label>
          <input
            type="number"
            id="totalCapacity"
            name="totalCapacity"
            value={formData.totalCapacity}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default HostelFacilitiesForm;
