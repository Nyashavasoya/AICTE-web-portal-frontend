import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { formsFilledState } from './atoms';

const LaboratoryDetailsForm = () => {
  const [formsFilled, setFormsFilled] = useRecoilState(formsFilledState);
  const [formData, setFormData] = useState({
    Programme: '',
    department: '',
    Course: '',
    Level: '',
    isItResearchCabForPGCourses: false,
    nameOfTheLaboratory: '',
    lobMeyerEquipments: '',
    buildingName: '',
    buildingNumber: '',
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
    // Handle form submission logic here
    console.log(formData);
    setFormsFilled((prevFormsFilled) => prevFormsFilled + 1);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Programme */}
        <div>
          <label htmlFor="Programme">Programme:</label>
          <select
            id="Programme"
            name="Programme"
            value={formData.Programme}
            onChange={handleChange}
          >
            {/* Add your programme options here */}
            <option value="programme1">Programme 1</option>
            <option value="programme2">Programme 2</option>
            {/* Add more options as needed */}
          </select>
        </div>

        {/* Department */}
        <div>
          <label htmlFor="department">Department:</label>
          <select
            id="department"
            name="department"
            value={formData.department}
            onChange={handleChange}
          >
            {/* Add your department options here */}
            <option value="department1">Department 1</option>
            <option value="department2">Department 2</option>
            {/* Add more options as needed */}
          </select>
        </div>

        {/* Course */}
        <div>
          <label htmlFor="Course">Course:</label>
          <select
            id="Course"
            name="Course"
            value={formData.Course}
            onChange={handleChange}
          >
            {/* Add your course options here */}
            <option value="course1">Course 1</option>
            <option value="course2">Course 2</option>
            {/* Add more options as needed */}
          </select>
        </div>

        {/* Level */}
        <div>
          <label htmlFor="Level">Level:</label>
          <select
            id="Level"
            name="Level"
            value={formData.Level}
            onChange={handleChange}
          >
            {/* Add your level options here */}
            <option value="level1">Level 1</option>
            <option value="level2">Level 2</option>
            {/* Add more options as needed */}
          </select>
        </div>

        {/* Research Lab for PG Courses */}
        <div>
          <label>
            <input
              type="checkbox"
              id="isItResearchCabForPGCourses"
              name="isItResearchCabForPGCourses"
              checked={formData.isItResearchCabForPGCourses}
              onChange={handleChange}
            />
            Is it a Research Lab for PG Courses?
          </label>
        </div>

        {/* Name of the Laboratory */}
        <div>
          <label htmlFor="nameOfTheLaboratory">Name of the Laboratory:</label>
          <input
            type="text"
            id="nameOfTheLaboratory"
            name="nameOfTheLaboratory"
            value={formData.nameOfTheLaboratory}
            onChange={handleChange}
          />
        </div>

        {/* Lab Meyer Equipments */}
        <div>
          <label htmlFor="lobMeyerEquipments">Lab Meyer Equipments:</label>
          <input
            type="text"
            id="lobMeyerEquipments"
            name="lobMeyerEquipments"
            value={formData.lobMeyerEquipments}
            onChange={handleChange}
          />
        </div>

        {/* Building Name */}
        <div>
          <label htmlFor="buildingName">Building Name:</label>
          <input
            type="text"
            id="buildingName"
            name="buildingName"
            value={formData.buildingName}
            onChange={handleChange}
          />
        </div>

        {/* Building Number */}
        <div>
          <label htmlFor="buildingNumber">Building Number:</label>
          <input
            type="number"
            id="buildingNumber"
            name="buildingNumber"
            value={formData.buildingNumber}
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

export default LaboratoryDetailsForm;
