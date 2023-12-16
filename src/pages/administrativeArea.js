// AdministrativeAreaForm.js

import React, { useState } from 'react';

const AdministrativeAreaForm = () => {
  const [formData, setFormData] = useState({
    roomID: '',
    roomType: '',
    area: 0,
    buildingName: '',
    buildingNumber: 0,
    readinessofFlooring: '',
    readinessofWallAndPainting: '',
    readinessofElectrificationAndLightning: '',
    readinessofFurniture: '',
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
    <div className="container mx-auto mt-8">
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="roomID" className="block text-sm font-medium text-gray-600">
            Room ID
          </label>
          <input
            type="text"
            id="roomID"
            name="roomID"
            value={formData.roomID}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="roomType" className="block text-sm font-medium text-gray-600">
            Room Type
          </label>
          <input
            type="text"
            id="roomType"
            name="roomType"
            value={formData.roomType}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="area" className="block text-sm font-medium text-gray-600">
            Area (in sq feet)
          </label>
          <input
            type="number"
            id="area"
            name="area"
            value={formData.area}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
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

        <div className="mb-4">
          <label htmlFor="readinessofFlooring" className="block text-sm font-medium text-gray-600">
            Readiness of Flooring
          </label>
          <input
            type="text"
            id="readinessofFlooring"
            name="readinessofFlooring"
            value={formData.readinessofFlooring}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="readinessofWallAndPainting" className="block text-sm font-medium text-gray-600">
            Readiness of Wall and Painting
          </label>
          <input
            type="text"
            id="readinessofWallAndPainting"
            name="readinessofWallAndPainting"
            value={formData.readinessofWallAndPainting}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="readinessofElectrificationAndLightning" className="block text-sm font-medium text-gray-600">
            Readiness of Electrification and Lightning
          </label>
          <input
            type="text"
            id="readinessofElectrificationAndLightning"
            name="readinessofElectrificationAndLightning"
            value={formData.readinessofElectrificationAndLightning}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="readinessofFurniture" className="block text-sm font-medium text-gray-600">
            Readiness of Furniture
          </label>
          <input
            type="text"
            id="readinessofFurniture"
            name="readinessofFurniture"
            value={formData.readinessofFurniture}
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

export default AdministrativeAreaForm;
