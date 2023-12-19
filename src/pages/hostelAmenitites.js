// HostelFacilitiesForm.js

import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { formsFilledState } from './atoms';

const HostelFacilitiesForm = () => {
  const [formsFilled, setFormsFilled] = useRecoilState(formsFilledState);
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
    setFormsFilled((prevFormsFilled) => prevFormsFilled + 1);
  };

  return (
    <div className="container mx-auto mt-8">
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="whetherTheHostelFacilitiyIsAvailable" className="block text-sm font-medium text-gray-600">
            Hostel Facility Availability
          </label>
          <input
            type="checkbox"
            id="whetherTheHostelFacilitiyIsAvailable"
            name="whetherTheHostelFacilitiyIsAvailable"
            checked={formData.whetherTheHostelFacilitiyIsAvailable}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="girlsHostel" className="block text-sm font-medium text-gray-600">
            Girls Hostel
          </label>
          <input
            type="checkbox"
            id="girlsHostel"
            name="girlsHostel"
            checked={formData.girlsHostel}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="numberOfRooms" className="block text-sm font-medium text-gray-600">
            Number of Rooms
          </label>
          <input
            type="number"
            id="numberOfRooms"
            name="numberOfRooms"
            value={formData.numberOfRooms}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="hostelCapacity" className="block text-sm font-medium text-gray-600">
            Hostel Capacity
          </label>
          <input
            type="number"
            id="hostelCapacity"
            name="hostelCapacity"
            value={formData.hostelCapacity}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="boysHostel" className="block text-sm font-medium text-gray-600">
            Boys Hostel
          </label>
          <input
            type="checkbox"
            id="boysHostel"
            name="boysHostel"
            checked={formData.boysHostel}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="numberOfRoomsForBoys" className="block text-sm font-medium text-gray-600">
            Number of Rooms for Boys
          </label>
          <input
            type="number"
            id="numberOfRoomsForBoys"
            name="numberOfRoomsForBoys"
            value={formData.numberOfRoomsForBoys}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="totalCapacity" className="block text-sm font-medium text-gray-600">
            Total Capacity
          </label>
          <input
            type="number"
            id="totalCapacity"
            name="totalCapacity"
            value={formData.totalCapacity}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default HostelFacilitiesForm;
