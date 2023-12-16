import React, { useState } from 'react';

const ProgramDetailsForm = () => {
  const [formData, setFormData] = useState({
    programme: '',
    anyOtherNewProgram: '',
    yearOfStart: '',
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
      anyOtherNewProgram: '',
      yearOfStart: '',
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Programme Dropdown */}
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

        {/* Any Other New Program */}
        <div>
          <label>
            <input
              type="text"
              name="anyOtherNewProgram"
              value={formData.anyOtherNewProgram}
              onChange={handleChange}
              placeholder="Any Other New Program"
            />
          </label>
        </div>

        {/* Year of Start - Calendar */}
        <div>
          <label>
            <input
              type="date"
              name="yearOfStart"
              value={formData.yearOfStart}
              onChange={handleChange}
            />
          </label>
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
                <th>Any Other New Program</th>
                <th>Year of Start</th>
              </tr>
            </thead>
            <tbody>
              {submittedData.map((data, index) => (
                <tr key={index}>
                  <td>{data.programme}</td>
                  <td>{data.anyOtherNewProgram}</td>
                  <td>{data.yearOfStart}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ProgramDetailsForm;
