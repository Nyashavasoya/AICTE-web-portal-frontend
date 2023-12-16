import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { statesData } from '../lib/states-districts';

const ContactPersonForm = ({contactPersonData}) => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    Title: '',
    firstName: '',
    middleName: '',
    lastName: '',
    address: '',
    state: '',
    district: '',
    town: '',
    postalCode: '',
    designation: '',
    STDcode: '',
    landlineNumber: '',
    mobileNumber: '',
    alternateMobileNumber: '',
    emailAddress: '',
    alternativeEmailAdress: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const isContactNumberValid = (contactNumber) => {
    const regex = /^[0-9]{10}$/;
    return regex.test(contactNumber);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isContactNumberValid(formData.mobileNumber)) {
      alert('Please enter a valid contact number.');
      return;
    }
    else if(!isContactNumberValid(formData.alternateMobileNumber)){
      alert('Please enter valid alternate mobile number');
      return;
    }

    else if(!isValidEmail(formData.emailAddress)){
      alert('Please enter valid email address');
      return;
    }

    else if(!isValidEmail(formData.alternativeEmailAdress)){
      alert('Please enter valid alternate email address');
    }


  };


  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-gray-100 rounded-md">
      <h2 className="text-3xl font-bold mb-4">Contact Person Details</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
        <label htmlFor="title">Title</label>
          <select
            id="title"
            name="Title"
            value={formData.Title}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Title</option>
            <option value="mr">Mr.</option>
            <option value="mrs">Mrs.</option>
            <option value="miss">Miss</option>
          </select> 
        </div>

        {/* First Name */}
        <div>
          <label className="block text-gray-800 text-sm font-medium mb-2">First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Middle Name */}
        <div>
          <label className="block text-gray-800 text-sm font-medium mb-2">Middle Name:</label>
          <input
            type="text"
            name="middleName"
            value={formData.middleName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Last Name */}
        <div>
          <label className="block text-gray-800 text-sm font-medium mb-2">Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

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

        <div>
          <label htmlFor=" town">Town</label>
          <input
            type="text"
            id="town"
            name="town"
            value={formData.town}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label htmlFor="postalCode">Pin-Code</label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="designation">Designation</label>
          <input
            type="text"
            id="designation"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="STDcode">STDcode</label>
          <input
            type="text"
            id="STDcode"
            name="STDcode"
            value={formData.STDcode}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

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

        <div>
          <label htmlFor="mobileNumber">Contact Number</label>
          <input
            type="text"
            id="mobileNumber"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="alternateMobileNumber">Alternate Mobile Number</label>
          <input
            type="text"
            id="alternateMobileNumber"
            name="alternateMobileNumber"
            value={formData.alternateMobileNumber}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="emailAddress">Email Address</label>
          <input
            type="text"
            id="emailAddress"
            name="emailAddress"
            value={formData.emailAddress}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="alternativeEmailAdress">Alternate Email Address</label>
          <input
            type="text"
            id="alternativeEmailAdress"
            name="alternativeEmailAdress"
            value={formData.alternativeEmailAdress}
            onChange={handleChange}
            className="w-full p-2 border rounded"
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

export default ContactPersonForm;