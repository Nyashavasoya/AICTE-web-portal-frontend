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
    <div>
      <form onSubmit={handleSubmit}>
        {/* Building Details */}
        <div>
          <label htmlFor="buildingDetails">Building Details:</label>
          <select
            id="buildingDetails"
            name="buildingDetails"
            value={formData.buildingDetails}
            onChange={handleChange}
          >
            <option value="">Select</option>
            {/* Add your options here */}
          </select>
        </div>

        {/* Total Built-Up Area Ready */}
        <div>
          <label htmlFor="totalBuiltUpAreaReady">Total Built-Up Area Ready (in sq feet):</label>
          <input
            type="text"
            id="totalBuiltUpAreaReady"
            name="totalBuiltUpAreaReady"
            value={formData.totalBuiltUpAreaReady}
            onChange={handleChange}
          />
        </div>

        {/* Activities in the Building Other Than Courses Approved by AICTE */}
        <div>
          <label htmlFor="activitiesInTheBuildingOtherThanCoursesApprovedByAICTE">
            Activities in the Building Other Than Courses Approved by AICTE:
          </label>
          <textarea
            id="activitiesInTheBuildingOtherThanCoursesApprovedByAICTE"
            name="activitiesInTheBuildingOtherThanCoursesApprovedByAICTE"
            value={formData.activitiesInTheBuildingOtherThanCoursesApprovedByAICTE}
            onChange={handleChange}
          />
        </div>

        {/* Whether Access Circulation Area and Toilet Area Are Maintained As Per National Building Code Norms */}
        <div>
          <label htmlFor="whetherAccessCirculationAreaAndToiletAreaAreMaintainedAsPerNationalBuildingCodeNorms">
            Whether Access Circulation Area and Toilet Area Are Maintained As Per National Building Code Norms:
          </label>
          <input
            type="checkbox"
            id="whetherAccessCirculationAreaAndToiletAreaAreMaintainedAsPerNationalBuildingCodeNorms"
            name="whetherAccessCirculationAreaAndToiletAreaAreMaintainedAsPerNationalBuildingCodeNorms"
            checked={formData.whetherAccessCirculationAreaAndToiletAreaAreMaintainedAsPerNationalBuildingCodeNorms}
            onChange={handleChange}
          />
        </div>

        {/* Total Carpet Area Instructional Ready */}
        <div>
          <label htmlFor="totalCarpetAreaInstructionalReady">Total Carpet Area Instructional Ready (in sq feet):</label>
          <input
            type="text"
            id="totalCarpetAreaInstructionalReady"
            name="totalCarpetAreaInstructionalReady"
            value={formData.totalCarpetAreaInstructionalReady}
            onChange={handleChange}
          />
        </div>

        {/* Total Carpet Area Administrative Ready */}
        <div>
          <label htmlFor="totalCarpetAreaAdministrativeReady">Total Carpet Area Administrative Ready (in sq feet):</label>
          <input
            type="text"
            id="totalCarpetAreaAdministrativeReady"
            name="totalCarpetAreaAdministrativeReady"
            value={formData.totalCarpetAreaAdministrativeReady}
            onChange={handleChange}
          />
        </div>

        {/* Access and Circulation Area */}
        <div>
          <label htmlFor="accessAndCirculationArea">Access and Circulation Area (in sq feet):</label>
          <input
            type="text"
            id="accessAndCirculationArea"
            name="accessAndCirculationArea"
            value={formData.accessAndCirculationArea}
            onChange={handleChange}
          />
        </div>

        {/* Total Built-Up Area Planned */}
        <div>
          <label htmlFor="totalBuiltUpAreaPlanned">Total Built-Up Area Planned (in sq feet):</label>
          <input
            type="text"
            id="totalBuiltUpAreaPlanned"
            name="totalBuiltUpAreaPlanned"
            value={formData.totalBuiltUpAreaPlanned}
            onChange={handleChange}
          />
        </div>

        {/* Total Carpet Area Amenities Ready */}
        <div>
          <label htmlFor="totalCarpetAreaAmenitiesReady">Total Carpet Area Amenities Ready (in sq feet):</label>
          <input
            type="text"
            id="totalCarpetAreaAmenitiesReady"
            name="totalCarpetAreaAmenitiesReady"
            value={formData.totalCarpetAreaAmenitiesReady}
            onChange={handleChange}
          />
        </div>

        {/* Submit Button */}
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default BuildingDetailsForm;
