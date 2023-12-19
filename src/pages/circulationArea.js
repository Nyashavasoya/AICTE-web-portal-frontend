// CirculationAreaForm.js
import { useRecoilState } from 'recoil';
import { formsFilledState } from './atoms';

import React, { useState } from 'react';

const CirculationAreaForm = () => {
  const [formsFilled, setFormsFilled] = useRecoilState(formsFilledState);
  const [formData, setFormData] = useState({
    areaType: '',
    averageCarpetArea: 0,
    flooring: false,
    paintingDone: '',
    electrificationAndLightning: '',
    buildingName: '',
    buildingNumber: 0,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData((prevData) => ({ ...prevData, [name]: newValue }));
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
          <label htmlFor="areaType" className="block text-sm font-medium text-gray-600">
            Area Type
          </label>
          <select
            id="areaType"
            name="areaType"
            value={formData.areaType}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          >
            <option value="">Select Area Type</option>
            <option value="Type1">Type 1</option>
            <option value="Type2">Type 2</option>
            {/* Add more options as needed */}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="averageCarpetArea" className="block text-sm font-medium text-gray-600">
            Average Carpet Area
          </label>
          <input
            type="number"
            id="averageCarpetArea"
            name="averageCarpetArea"
            value={formData.averageCarpetArea}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="flooring" className="block text-sm font-medium text-gray-600">
            Flooring
          </label>
          <input
            type="checkbox"
            id="flooring"
            name="flooring"
            checked={formData.flooring}
            onChange={handleChange}
            className="mt-1 p-2"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="paintingDone" className="block text-sm font-medium text-gray-600">
            Painting Done
          </label>
          <select
            id="paintingDone"
            name="paintingDone"
            value={formData.paintingDone}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          >
            <option value="">Select Painting Status</option>
            <option value="Ready">Ready</option>
            <option value="NotReady">Not Ready</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="electrificationAndLightning"
            className="block text-sm font-medium text-gray-600"
          >
            Electrification and Lightning
          </label>
          <select
            id="electrificationAndLightning"
            name="electrificationAndLightning"
            value={formData.electrificationAndLightning}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          >
            <option value="">Select Electrification Status</option>
            <option value="Ready">Ready</option>
            <option value="NotReady">Not Ready</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="buildingName" className="block text-sm font-medium text-gray-600">
            Building Name
          </label>
          <input
            type="text"
            id="buildingName"
            name="buildingName"
            value={formData.buildingName}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="buildingNumber" className="block text-sm font-medium text-gray-600">
            Building Number
          </label>
          <input
            type="number"
            id="buildingNumber"
            name="buildingNumber"
            value={formData.buildingNumber}
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

export default CirculationAreaForm;
