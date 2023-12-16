import React, { useState } from 'react';

const InfrastructuralAreaForm = () => {
  const [formData, setFormData] = useState({
    roomType: '',
    roomID: '',
    areaOfRoom: 0,
    readinessOfFlooring: '',
    readinessOfWallAndPainting: '',
    readinessOfElectrificationAndLighting: '',
    readinessOfFurnitureOrFixtures: '',
    airConditioning: '',
    buildingName: '',
    buildingNumber: 0,
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
          <label htmlFor="roomType" className="block text-sm font-medium text-gray-600">
            Room Type
          </label>
          <select
            id="roomType"
            name="roomType"
            value={formData.roomType}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          >
            <option value="">Select Option</option>
            {/* Add options based on your requirement */}
          </select>
        </div>

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
          <label htmlFor="areaOfRoom" className="block text-sm font-medium text-gray-600">
            Area of Room (in sq feet)
          </label>
          <input
            type="number"
            id="areaOfRoom"
            name="areaOfRoom"
            value={formData.areaOfRoom}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="readinessOfFlooring" className="block text-sm font-medium text-gray-600">
            Readiness of Flooring
          </label>
          <select
            id="readinessOfFlooring"
            name="readinessOfFlooring"
            value={formData.readinessOfFlooring}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          >
            <option value="">Select Option</option>
            {/* Add options based on your requirement */}
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="readinessOfWallAndPainting"
            className="block text-sm font-medium text-gray-600"
          >
            Readiness of Wall and Painting
          </label>
          <select
            id="readinessOfWallAndPainting"
            name="readinessOfWallAndPainting"
            value={formData.readinessOfWallAndPainting}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          >
            <option value="">Select Option</option>
            {/* Add options based on your requirement */}
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="readinessOfElectrificationAndLighting"
            className="block text-sm font-medium text-gray-600"
          >
            Readiness of Electrification and Lighting
          </label>
          <select
            id="readinessOfElectrificationAndLighting"
            name="readinessOfElectrificationAndLighting"
            value={formData.readinessOfElectrificationAndLighting}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          >
            <option value="">Select Option</option>
            {/* Add options based on your requirement */}
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="readinessOfFurnitureOrFixtures"
            className="block text-sm font-medium text-gray-600"
          >
            Readiness of Furniture or Fixtures
          </label>
          <select
            id="readinessOfFurnitureOrFixtures"
            name="readinessOfFurnitureOrFixtures"
            value={formData.readinessOfFurnitureOrFixtures}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          >
            <option value="">Select Option</option>
            {/* Add options based on your requirement */}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="airConditioning" className="block text-sm font-medium text-gray-600">
            Air Conditioning
          </label>
          <select
            id="airConditioning"
            name="airConditioning"
            value={formData.airConditioning}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          >
            <option value="">Select Option</option>
            {/* Add options based on your requirement */}
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

export default InfrastructuralAreaForm;
