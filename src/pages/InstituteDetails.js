import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const InstituteDetails = () => {

    const navigate = useNavigate();

  const [formData, setFormData] = useState({
    currentApplicationNumber: 0,
    applicationType: '',
    currentStatus: '',
    subStatus: '',
    academicYear: 0,
    applicationOpenedDate: '',
    applicationSubmittedDate: '',
    reopenedApplicationDate: '',
    appealRequestDate: '',
    applicationDontReceived: false,
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
   navigate('/contact-person-details')
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="currentApplicationNumber">currentApplicationNumber</label>
          <input
            type="number"
            id="currentApplicationNumber"
            name="currentApplicationNumber"
            value={formData.currentApplicationNumber}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label htmlFor="applicationType">applicationType</label>
          <input
            type="number"
            id="applicationType"
            name="applicationType"
            value={formData.applicationType}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label htmlFor="currentStatus">currentStatus</label>
          <input
            type="number"
            id="currentStatus"
            name="currentStatus"
            value={formData.currentStatus}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label htmlFor="subStatus">subStatus</label>
          <input
            type="number"
            id="subStatus"
            name="subStatus"
            value={formData.subStatus}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label htmlFor="academicYear">academicYear</label>
          <input
            type="date"
            id="academicYear"
            name="academicYear"
            value={formData.academicYear}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="applicationOpenedDate">applicationOpenedDate</label>
          <input
            type="date"
            id="applicationOpenedDate"
            name="applicationOpenedDate"
            value={formData.applicationOpenedDate}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label htmlFor="applicationSubmittedDate">applicationSubmittedDate</label>
          <input
            type="date"
            id="applicationSubmittedDate"
            name="applicationSubmittedDate"
            value={formData.applicationSubmittedDate}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="reopenedApplicationDate">reopenedApplicationDate</label>
          <input
            type="date"
            id="reopenedApplicationDate"
            name="reopenedApplicationDate"
            value={formData.reopenedApplicationDate}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="appealRequestDate">appealRequestDate</label>
          <input
            type="date"
            id="appealRequestDate"
            name="appealRequestDate"
            value={formData.appealRequestDate}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="applicationDontReceived">applicationDontReceived</label>
          <input
            type="number"
            id="applicationDontReceived"
            name="applicationDontReceived"
            value={formData.applicationDontReceived}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default InstituteDetails;
