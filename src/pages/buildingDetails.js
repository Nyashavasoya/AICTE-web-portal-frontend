import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { formsFilledState } from './atoms';

const BuildingDetailsForm = () => {
  const [formsFilled, setFormsFilled] = useRecoilState(formsFilledState);
  const [formData, setFormData] = useState({
    buildingDetails: '',
    totalBuiltUpAreaReady: '',
    activitiesInTheBuildingOtherThanCoursesApprovedByAICTE: '',
    whetherAccessCirculationAreaAndToiletAreaAreMaintainedAsPerNationalBuildingCodeNorms: false,
    totalCarpetAreaInstructionalReady: '',
    totalCarpetAreaAdministrativeReady: '',
    accessAndCirculationArea: '',
    totalBuiltUpAreaPlanned: '',
    totalCarpetAreaAmenitiesReady: '',
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
    setFormsFilled((prevFormsFilled) => prevFormsFilled + 1);
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-gray-100 rounded-md">
      <h2 className="text-3xl font-bold mb-4">Building Details</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Building Details */}
        <div>
          <label htmlFor="buildingDetails" className="block text-gray-800 text-sm font-medium mb-2">Building Details:</label>
          <select
            id="buildingDetails"
            name="buildingDetails"
            value={formData.buildingDetails}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          >
            <option value="">Select</option>
            {/* Add your options here */}
          </select>
        </div>

        {/* Total Built-Up Area Ready */}
        <div>
          <label htmlFor="totalBuiltUpAreaReady" className="block text-gray-800 text-sm font-medium mb-2">Total Built-Up Area Ready (in sq feet):</label>
          <input
            type="text"
            id="totalBuiltUpAreaReady"
            name="totalBuiltUpAreaReady"
            value={formData.totalBuiltUpAreaReady}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Activities in the Building Other Than Courses Approved by AICTE */}
        <div>
          <label htmlFor="activitiesInTheBuildingOtherThanCoursesApprovedByAICTE" className="block text-gray-800 text-sm font-medium mb-2">
            Activities in the Building Other Than Courses Approved by AICTE:
          </label>
          <textarea
            id="activitiesInTheBuildingOtherThanCoursesApprovedByAICTE"
            name="activitiesInTheBuildingOtherThanCoursesApprovedByAICTE"
            value={formData.activitiesInTheBuildingOtherThanCoursesApprovedByAICTE}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Whether Access Circulation Area and Toilet Area Are Maintained As Per National Building Code Norms */}
        <div>
          <label htmlFor="whetherAccessCirculationAreaAndToiletAreaAreMaintainedAsPerNationalBuildingCodeNorms" className="block text-gray-800 text-sm font-medium mb-2">
            Whether Access Circulation Area and Toilet Area Are Maintained As Per National Building Code Norms:
          </label>
          <input
            type="checkbox"
            id="whetherAccessCirculationAreaAndToiletAreaAreMaintainedAsPerNationalBuildingCodeNorms"
            name="whetherAccessCirculationAreaAndToiletAreaAreMaintainedAsPerNationalBuildingCodeNorms"
            checked={formData.whetherAccessCirculationAreaAndToiletAreaAreMaintainedAsPerNationalBuildingCodeNorms}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Total Carpet Area Instructional Ready */}
        <div>
          <label htmlFor="totalCarpetAreaInstructionalReady" className="block text-gray-800 text-sm font-medium mb-2">Total Carpet Area Instructional Ready (in sq feet):</label>
          <input
            type="text"
            id="totalCarpetAreaInstructionalReady"
            name="totalCarpetAreaInstructionalReady"
            value={formData.totalCarpetAreaInstructionalReady}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Total Carpet Area Administrative Ready */}
        <div>
          <label htmlFor="totalCarpetAreaAdministrativeReady" className="block text-gray-800 text-sm font-medium mb-2">Total Carpet Area Administrative Ready (in sq feet):</label>
          <input
            type="text"
            id="totalCarpetAreaAdministrativeReady"
            name="totalCarpetAreaAdministrativeReady"
            value={formData.totalCarpetAreaAdministrativeReady}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Access and Circulation Area */}
        <div>
          <label htmlFor="accessAndCirculationArea" className="block text-gray-800 text-sm font-medium mb-2">Access and Circulation Area (in sq feet):</label>
          <input
            type="text"
            id="accessAndCirculationArea"
            name="accessAndCirculationArea"
            value={formData.accessAndCirculationArea}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Total Built-Up Area Planned */}
        <div>
          <label htmlFor="totalBuiltUpAreaPlanned" className="block text-gray-800 text-sm font-medium mb-2">Total Built-Up Area Planned (in sq feet):</label>
          <input
            type="text"
            id="totalBuiltUpAreaPlanned"
            name="totalBuiltUpAreaPlanned"
            value={formData.totalBuiltUpAreaPlanned}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Total Carpet Area Amenities Ready */}
        <div>
          <label htmlFor="totalCarpetAreaAmenitiesReady" className="block text-gray-800 text-sm font-medium mb-2">Total Carpet Area Amenities Ready (in sq feet):</label>
          <input
            type="text"
            id="totalCarpetAreaAmenitiesReady"
            name="totalCarpetAreaAmenitiesReady"
            value={formData.totalCarpetAreaAmenitiesReady}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default BuildingDetailsForm;
