import React, { useState } from 'react';
import { statesData } from '../lib/states-districts';

const OrganisationDetailsForm = () => {
  const [formData, setFormData] = useState({
    nameOfInstitute: '',
    typeOfInstitute: '',
    registeredWith: '',
    registrationDate: '',
    organisationAddress: '',
    pin: '',
    PAN: '',
    state: '',
    district: '',
    town: '',
    organisationWebsite: '',
    STDcode: '',
    landlineNumber: '',
  });

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Name of Institute */}
      <div>
        <label className="block mb-1">Name of Institute:</label>
        <input
          type="text"
          name="nameOfInstitute"
          value={formData.nameOfInstitute}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-2"
          required
        />
      </div>

      {/* Type of Institute (dropdown) */}
      <div>
        <label className="block mb-1">Type of Institute:</label>
        {/* Replace 'options' with your actual dropdown options */}
        <select
          name="typeOfInstitute"
          value={formData.typeOfInstitute}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-2"
          required
        >
          <option value="">Select Type</option>
          <option value="Type1">Type 1</option>
          <option value="Type2">Type 2</option>
          {/* Add more options as needed */}
        </select>
      </div>

      {/* Registered With */}
      <div>
        <label className="block mb-1">Registered With:</label>
        <input
          type="text"
          name="registeredWith"
          value={formData.registeredWith}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-2"
          required
        />
      </div>

      {/* Registration Date (calendar) */}
      <div>
        <label className="block mb-1">Registration Date:</label>
        <input
          type="date"
          name="registrationDate"
          value={formData.registrationDate}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-2"
          required
        />
      </div>

      {/* Organisation Address */}
      <div>
        <label className="block mb-1">Organisation Address:</label>
        <textarea
          name="organisationAddress"
          value={formData.organisationAddress}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-2"
          required
        ></textarea>
      </div>

      {/* PIN (6 digits only) */}
      <div>
        <label className="block mb-1">PIN:</label>
        <input
          type="text"
          name="pin"
          value={formData.pin}
          onChange={handleChange}
          pattern="[0-9]{6}"
          title="Please enter 6 digits"
          className="w-full border border-gray-300 rounded-md p-2"
          required
        />
      </div>

      {/* PAN (Alphanumeric) */}
      <div>
        <label className="block mb-1">PAN:</label>
        <input
          type="text"
          name="PAN"
          value={formData.PAN}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-2"
          required
        />
      </div>

      {/* State */}
      <div>
          <label htmlFor="state">State</label>
          <select
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Select State</option>
            {statesData.states.map((stateObj) => (
              <option key={stateObj.state} value={stateObj.state}>
                {stateObj.state}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="district">District</label>
          <select
            id="district"
            name="district"
            value={formData.district}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Select District</option>
            {formData.state &&
              statesData.states
                .find((stateObj) => stateObj.state === formData.state)
                .districts.map((district) => (
                  <option key={district} value={district}>
                    {district}
                  </option>
                ))}
          </select>
        </div>

      {/* Town */}
      <div>
        <label className="block mb-1">Town:</label>
        <input
          type="text"
          name="town"
          value={formData.town}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-2"
          required
        />
      </div>

      {/* Organisation Website */}
      <div>
        <label className="block mb-1">Organisation Website:</label>
        <input
          type="url"
          name="organisationWebsite"
          value={formData.organisationWebsite}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-2"
        />
      </div>

      {/* STD Code (6 digits max) */}
      <div>
        <label className="block mb-1">STD Code:</label>
        <input
          type="text"
          name="STDcode"
          value={formData.STDcode}
          onChange={handleChange}
          pattern="[0-9]{1,6}"
          title="Please enter 6 digits or less"
          className="w-full border border-gray-300 rounded-md p-2"
        />
      </div>

      {/* Landline Number (5-10 digits) */}
      <div>
        <label className="block mb-1">Landline Number:</label>
        <input
          type="tel"
          name="landlineNumber"
          value={formData.landlineNumber}
          onChange={handleChange}
          pattern="[0-9]{5,10}"
          title="Please enter between 5 and 10 digits"
          className="w-full border border-gray-300 rounded-md p-2"
        />
      </div>

      <button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default OrganisationDetailsForm;
