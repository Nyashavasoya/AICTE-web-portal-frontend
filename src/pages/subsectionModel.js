import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { formsFilledState } from './atoms';

const SubSectionForm = () => {
  const [formsFilled, setFormsFilled] = useRecoilState(formsFilledState);
  const [formData, setFormData] = useState({
    minorityInstitute: false,
    typeOfMinistry: '',
    nameOfMinority: '',
    nameOfMinorityOfLinguistic: '',
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
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    setFormsFilled((prevFormsFilled) => prevFormsFilled + 1);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Minority Institute */}
      <div>
        <label className="block mb-1">Minority Institute:</label>
        <input
          type="checkbox"
          name="minorityInstitute"
          checked={formData.minorityInstitute}
          onChange={handleChange}
          className="mr-2"
        />
        <span>Yes, the institute is a minority institute</span>
      </div>

      {/* Type of Ministry (only applicable when minority is true) */}
      {formData.minorityInstitute && (
        <div>
          <label className="block mb-1">Type of Ministry:</label>
          <input
            type="text"
            name="typeOfMinistry"
            value={formData.typeOfMinistry}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
      )}

      {/* Name of Minority (only applicable when minority is true) */}
      {formData.minorityInstitute && (
        <div>
          <label className="block mb-1">Name of Minority:</label>
          <input
            type="text"
            name="nameOfMinority"
            value={formData.nameOfMinority}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
      )}

      {/* Name of Minority of Linguistic (only applicable when minority is true) */}
      {formData.minorityInstitute && (
        <div>
          <label className="block mb-1">
            Name of Minority of Linguistic:
          </label>
          <input
            type="text"
            name="nameOfMinorityOfLinguistic"
            value={formData.nameOfMinorityOfLinguistic}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
      )}

      <button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default SubSectionForm;
