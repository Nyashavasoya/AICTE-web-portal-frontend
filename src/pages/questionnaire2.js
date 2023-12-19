import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { formsFilledState } from './atoms';

const QuestionnaireForm = () => {
  const [formsFilled, setFormsFilled] = useRecoilState(formsFilledState);
  const [formData, setFormData] = useState({
    whetherTheInstituteIsHavingApprovalFromCOAorPCIorAAC: false,
    ifYesPleaseSelectApprovedProgram: '',
    whetheTheInstituteIsANonTechnicalInstituteSeekingApprovalForMBAorMCA: false,
    ifYouAreOnExistingInstitutionRunningPGDMorPGCM: null,
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
      {/* Whether the Institute is having approval */}
      <div>
        <label>
          <input
            type="checkbox"
            name="whetherTheInstituteIsHavingApprovalFromCOAorPCIorAAC"
            checked={formData.whetherTheInstituteIsHavingApprovalFromCOAorPCIorAAC}
            onChange={handleChange}
          />
          Whether the Institute is having approval from COA or PCI or AAC
        </label>
      </div>

      {/* If yes, please select approved program */}
      {formData.whetherTheInstituteIsHavingApprovalFromCOAorPCIorAAC && (
        <div>
          <label>Select Approved Program:</label>
          <select
            name="ifYesPleaseSelectApprovedProgram"
            value={formData.ifYesPleaseSelectApprovedProgram}
            onChange={handleChange}
          >
            <option value="">Select Program</option>
            <option value="Program1">Program 1</option>
            <option value="Program2">Program 2</option>
            {/* Add more options as needed */}
          </select>
        </div>
      )}

      {/* Whether the Institute is a non-technical institute seeking approval for MBA or MCA */}
      <div>
        <label>
          <input
            type="checkbox"
            name="whetheTheInstituteIsANonTechnicalInstituteSeekingApprovalForMBAorMCA"
            checked={formData.whetheTheInstituteIsANonTechnicalInstituteSeekingApprovalForMBAorMCA}
            onChange={handleChange}
          />
          Whether the Institute is a non-technical institute seeking approval for MBA or MCA
        </label>
      </div>

      {/* If you are an existing institution running PGDM or PGCM */}
      <div>
        <label>
          <input
            type="number"
            name="ifYouAreOnExistingInstitutionRunningPGDMorPGCM"
            value={formData.ifYouAreOnExistingInstitutionRunningPGDMorPGCM || ''}
            onChange={handleChange}
            placeholder="Number"
          />
          If you are an existing institution running PGDM or PGCM (Number)
        </label>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default QuestionnaireForm;
