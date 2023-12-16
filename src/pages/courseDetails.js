import React, { useState } from 'react';

const CourseDetailsForm = () => {
  const [formData, setFormData] = useState({
    programme: '',
    affiliatingUniversity: '',
    department: '',
    nameOfTheCourse: '',
    duration: '',
    levelOfCourse: '',
    yearStarted: '',
    shift: '',
    fullTimeorPartTime: '',
    intakeApplicableFor: '',
    applyingFor: '',
    modeOFCounduct: '',
    courseType: '',
  });

  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedData = [...submittedData, formData];
    setSubmittedData(updatedData);
    setFormData({
      programme: '',
      affiliatingUniversity: '',
      department: '',
      nameOfTheCourse: '',
      duration: '',
      levelOfCourse: '',
      yearStarted: '',
      shift: '',
      fullTimeorPartTime: '',
      intakeApplicableFor: '',
      applyingFor: '',
      modeOFCounduct: '',
      courseType: '',
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Course Programme Dropdown */}
        <div>
          <label>Select Programme:</label>
          <select
            name="programme"
            value={formData.programme}
            onChange={handleChange}
          >
            <option value="">Select Programme</option>
            <option value="Programme1">Programme 1</option>
            <option value="Programme2">Programme 2</option>
            {/* Add more options as needed */}
          </select>
        </div>

        {/* Affiliating University */}
        <div>
          <label>Affiliating University:</label>
          <input
            type="text"
            name="affiliatingUniversity"
            value={formData.affiliatingUniversity}
            onChange={handleChange}
          />
        </div>

        {/* Department */}
        <div>
          <label>Department:</label>
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
          />
        </div>

        {/* Name of the Course */}
        <div>
          <label>Name of the Course:</label>
          <input
            type="text"
            name="nameOfTheCourse"
            value={formData.nameOfTheCourse}
            onChange={handleChange}
          />
        </div>

        {/* Duration */}
        <div>
          <label>Duration (in years):</label>
          <input
            type="text"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
          />
        </div>

        {/* Level of Course Dropdown */}
        <div>
          <label>Select Level of Course:</label>
          <select
            name="levelOfCourse"
            value={formData.levelOfCourse}
            onChange={handleChange}
          >
            <option value="">Select Level</option>
            <option value="Undergraduate">Undergraduate</option>
            <option value="Postgraduate">Postgraduate</option>
            {/* Add more options as needed */}
          </select>
        </div>

        {/* Year Started */}
        <div>
          <label>Year Started:</label>
          <input
            type="text"
            name="yearStarted"
            value={formData.yearStarted}
            onChange={handleChange}
          />
        </div>

        {/* Shift Dropdown (only applicable when mode of conduct is regular) */}
        <div>
          <label>Select Shift:</label>
          <select
            name="shift"
            value={formData.shift}
            onChange={handleChange}
          >
            <option value="">Select Shift</option>
            <option value="Morning">Morning</option>
            <option value="Evening">Evening</option>
            {/* Add more options as needed */}
          </select>
        </div>

        {/* Full-Time or Part-Time Dropdown */}
        <div>
          <label>Select Full-Time or Part-Time:</label>
          <select
            name="fullTimeorPartTime"
            value={formData.fullTimeorPartTime}
            onChange={handleChange}
          >
            <option value="">Select Option</option>
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            {/* Add more options as needed */}
          </select>
        </div>

        {/* Intake Applicable For Dropdown */}
        <div>
          <label>Select Intake Applicable For:</label>
          <select
            name="intakeApplicableFor"
            value={formData.intakeApplicableFor}
            onChange={handleChange}
          >
            <option value="">Select Intake</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            {/* Add more options as needed */}
          </select>
        </div>

        {/* Applying For */}
        <div>
          <label>Applying For:</label>
          <input
            type="text"
            name="applyingFor"
            value={formData.applyingFor}
            onChange={handleChange}
          />
        </div>

        {/* Mode of Conduct Dropdown */}
        <div>
          <label>Select Mode of Conduct:</label>
          <select
            name="modeOFCounduct"
            value={formData.modeOFCounduct}
            onChange={handleChange}
          >
            <option value="">Select Mode of Conduct</option>
            <option value="Regular">Regular</option>
            <option value="Distance">Distance</option>
            {/* Add more options as needed */}
          </select>
        </div>

        {/* Course Type Dropdown */}
        <div>
          <label>Select Course Type:</label>
          <select
            name="courseType"
            value={formData.courseType}
            onChange={handleChange}
          >
            <option value="">Select Course Type</option>
            <option value="Type1">Type 1</option>
            <option value="Type2">Type 2</option>
            {/* Add more options as needed */}
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>

      {/* Display submitted data in a table */}
      {submittedData.length > 0 && (
        <div>
          <h2>Submitted Data</h2>
          <table border="1">
            <thead>
              <tr>
                <th>Programme</th>
                <th>Affiliating University</th>
                <th>Department</th>
                <th>Name of the Course</th>
                <th>Duration</th>
                <th>Level of Course</th>
                <th>Year Started</th>
                <th>Shift</th>
                <th>Full-Time or Part-Time</th>
                <th>Intake Applicable For</th>
                <th>Applying For</th>
                <th>Mode of Conduct</th>
                <th>Course Type</th>
              </tr>
            </thead>
            <tbody>
              {submittedData.map((data, index) => (
                <tr key={index}>
                  <td>{data.programme}</td>
                  <td>{data.affiliatingUniversity}</td>
                  <td>{data.department}</td>
                  <td>{data.nameOfTheCourse}</td>
                  <td>{data.duration}</td>
                  <td>{data.levelOfCourse}</td>
                  <td>{data.yearStarted}</td>
                  <td>{data.shift}</td>
                  <td>{data.fullTimeorPartTime}</td>
                  <td>{data.intakeApplicableFor}</td>
                  <td>{data.applyingFor}</td>
                  <td>{data.modeOFCounduct}</td>
                  <td>{data.courseType}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CourseDetailsForm;
