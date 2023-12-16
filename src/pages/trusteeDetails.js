import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TrusteeDetailsForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    since: '',
    till: '',
    mobileNo: 0,
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-gray-100 rounded-md">
      <h2 className="text-3xl font-bold mb-4">Trustee Details</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-gray-800 text-sm font-medium mb-2">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Designation */}
        <div>
          <label className="block text-gray-800 text-sm font-medium mb-2">Designation:</label>
          <input
            type="text"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Since */}
        <div>
          <label className="block text-gray-800 text-sm font-medium mb-2">Since:</label>
          <input
            type="text"
            name="since"
            value={formData.since}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Till */}
        <div>
          <label className="block text-gray-800 text-sm font-medium mb-2">Till:</label>
          <input
            type="text"
            name="till"
            value={formData.till}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Mobile Number */}
        <div>
          <label className="block text-gray-800 text-sm font-medium mb-2">Mobile Number:</label>
          <input
            type="number"
            name="mobileNo"
            value={formData.mobileNo}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-800 text-sm font-medium mb-2">Email:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default TrusteeDetailsForm;
