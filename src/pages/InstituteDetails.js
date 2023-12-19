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

  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-gray-100 rounded-md">
      <h2 className="text-3xl font-bold mb-4">Institue Details</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="currentApplicationNumber" className="block text-gray-800 text-sm font-medium mb-2">currentApplicationNumber</label>
          <input
            type="number"
            id="currentApplicationNumber"
            name="currentApplicationNumber"
            value={formData.currentApplicationNumber}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="applicationType" className="block text-gray-800 text-sm font-medium mb-2">applicationType</label>
          <input
            type="number"
            id="applicationType"
            name="applicationType"
            value={formData.applicationType}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="currentStatus" className="block text-gray-800 text-sm font-medium mb-2">currentStatus</label>
          <input
            type="number"
            id="currentStatus"
            name="currentStatus"
            value={formData.currentStatus}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="subStatus" className="block text-gray-800 text-sm font-medium mb-2">subStatus</label>
          <input
            type="number"
            id="subStatus"
            name="subStatus"
            value={formData.subStatus}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="academicYear" className="block text-gray-800 text-sm font-medium mb-2">academicYear</label>
          <input
            type="date"
            id="academicYear"
            name="academicYear"
            value={formData.academicYear}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="applicationOpenedDate" className="block text-gray-800 text-sm font-medium mb-2">applicationOpenedDate</label>
          <input
            type="date"
            id="applicationOpenedDate"
            name="applicationOpenedDate"
            value={formData.applicationOpenedDate}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="applicationSubmittedDate" className="block text-gray-800 text-sm font-medium mb-2">applicationSubmittedDate</label>
          <input
            type="date"
            id="applicationSubmittedDate"
            name="applicationSubmittedDate"
            value={formData.applicationSubmittedDate}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="reopenedApplicationDate" className="block text-gray-800 text-sm font-medium mb-2">reopenedApplicationDate</label>
          <input
            type="date"
            id="reopenedApplicationDate"
            name="reopenedApplicationDate"
            value={formData.reopenedApplicationDate}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="appealRequestDate" className="block text-gray-800 text-sm font-medium mb-2">appealRequestDate</label>
          <input
            type="date"
            id="appealRequestDate"
            name="appealRequestDate"
            value={formData.appealRequestDate}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="applicationDontReceived" className="block text-gray-800 text-sm font-medium mb-2">applicationDontReceived</label>
          <input
            type="number"
            id="applicationDontReceived"
            name="applicationDontReceived"
            value={formData.applicationDontReceived}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
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
