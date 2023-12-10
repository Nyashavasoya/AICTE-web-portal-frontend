import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Registration = () => {
  const [instituteName, setInstituteName] = useState('');
  const [cpFirstName, setCpFirstName] = useState('');
  const [cpLastName, setCpLastName] = useState('');
  const [cpDesignation, setCpDesignation] = useState('');
  const [cpNumber, setCpNumber] = useState('');
  const [cpEmail, setCpEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState();
  const [address, setAddress] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);

  const navigate = useNavigate();

  const onSubmitHandler = () => {
    navigate('/payment-process');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const emailIdHandler = (confirmEmail) => {
    if(confirmEmail === setCpEmail){
      setConfirmEmail(confirmEmail);
    }
    else{
      alert("Wrong email");
    }
  }

  return (
    <div className="max-w-md mx-auto mt-8 p-4 border rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Registration Form</h2>
      <form onSubmit={handleSubmit}>
       
        <div className="mb-4">
          <label htmlFor="instituteName" className="block text-sm font-medium text-gray-600">
            Institute Name
          </label>
          <input
            type="text"
            id="instituteName"
            className="mt-1 p-2 border rounded w-full"
            value={instituteName}
            onChange={(e) => setInstituteName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="contact-person-fn" className="block text-sm font-medium text-gray-600">
            contact-person-first-name
          </label>
          <input
            type="text"
            id="cp-fname"
            className="mt-1 p-2 border rounded w-full"
            value={cpFirstName}
            onChange={(e) => setCpFirstName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="cp-ln" className="block text-sm font-medium text-gray-600">
            Contact-person-last-name
          </label>
          <input
            type="text"
            id="cp-lname"
            className="mt-1 p-2 border rounded w-full"
            value={cpLastName}
            onChange={(e) => setCpLastName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="cp-design" className="block text-sm font-medium text-gray-600">
            Contact-person-Designation
          </label>
          <input
            type="text"
            id="cp-designation"
            className="mt-1 p-2 border rounded w-full"
            value={cpDesignation}
            onChange={(e) => setCpDesignation(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-600">
            Address
          </label>
          <textarea
            id="address"
            rows="3"
            className="mt-1 p-2 border rounded w-full"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="cpEmail" className="block text-sm font-medium text-gray-600">
            Contact-person-Email
          </label>
          <input
            type="text"
            id="cp-email"
            className="mt-1 p-2 border rounded w-full"
            value={cpEmail}
            onChange={(e) => setCpEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="confirm-emailId" className="block text-sm font-medium text-gray-600">
            Confirm Email-Id
          </label>
          <input
            type="text"
            id="confirm-email"
            className="mt-1 p-2 border rounded w-full"
            value={confirmEmail}
            onChange={(e) => emailIdHandler(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="cp-num" className="block text-sm font-medium text-gray-600">
            Contact-person-Contact-number
          </label>
          <input
            type="text"
            id="cp-number"
            className="mt-1 p-2 border rounded w-full"
            value={cpNumber}
            onChange={(e) => setCpNumber(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <input
            type="checkbox"
            id="acceptTerms"
            className="mr-2"
            checked={acceptTerms}
            onChange={() => setAcceptTerms(!acceptTerms)}
          />
          <label htmlFor="acceptTerms" className="text-sm text-gray-600">
            I accept the terms and conditions
          </label>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          onClick={onSubmitHandler}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Registration;


