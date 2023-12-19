import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { formsFilledState } from './atoms';

const MoreLandInformationForm = () => {
  const [formsFilled, setFormsFilled] = useRecoilState(formsFilledState);
  const [formData, setFormData] = useState({
    landRegistrationNumber: '',
    dateOfRegistration: '',
    areaOfLand: '',
    khosraNumbers: '',
    plotNumber: '',
    landSituatedAt: '',
    landRegisteredInTheNameOf: '',
    ownershiporGovernanentLease: '',
    landUseCertificateIssued: false,
    landUseCertificationAuthority: '',
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
    setFormsFilled((prevFormsFilled) => prevFormsFilled + 1);
    
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Land Registration Number */}
        <div>
          <label htmlFor="landRegistrationNumber">Land Registration Number:</label>
          <input
            type="text"
            id="landRegistrationNumber"
            name="landRegistrationNumber"
            value={formData.landRegistrationNumber}
            onChange={handleChange}
          />
        </div>

        {/* Date of Registration */}
        <div>
          <label htmlFor="dateOfRegistration">Date of Registration:</label>
          <input
            type="date"
            id="dateOfRegistration"
            name="dateOfRegistration"
            value={formData.dateOfRegistration}
            onChange={handleChange}
          />
        </div>

        {/* Area of Land */}
        <div>
          <label htmlFor="areaOfLand">Area of Land(in sq meters):</label>
          <input
            type="text"
            id="areaOfLand"
            name="areaOfLand"
            value={formData.areaOfLand}
            onChange={handleChange}
          />
        </div>

        {/* Khosra Numbers */}
        <div>
          <label htmlFor="khosraNumbers">Khosra Numbers:</label>
          <input
            type="text"
            id="khosraNumbers"
            name="khosraNumbers"
            value={formData.khosraNumbers}
            onChange={handleChange}
          />
        </div>

        {/* Plot Number */}
        <div>
          <label htmlFor="plotNumber">Plot Number:</label>
          <input
            type="text"
            id="plotNumber"
            name="plotNumber"
            value={formData.plotNumber}
            onChange={handleChange}
          />
        </div>

        {/* Land Situated At */}
        <div>
          <label htmlFor="landSituatedAt">Land Situated At:</label>
          <input
            type="text"
            id="landSituatedAt"
            name="landSituatedAt"
            value={formData.landSituatedAt}
            onChange={handleChange}
          />
        </div>

        {/* Land Registered In The Name Of */}
        <div>
          <label htmlFor="landRegisteredInTheNameOf">Land Registered In The Name Of:</label>
          <input
            type="text"
            id="landRegisteredInTheNameOf"
            name="landRegisteredInTheNameOf"
            value={formData.landRegisteredInTheNameOf}
            onChange={handleChange}
          />
        </div>

        {/* Ownership or Government Lease */}
        <div>
          <label htmlFor="ownershiporGovernanentLease">Ownership or Government Lease:</label>
          <select
            id="ownershiporGovernanentLease"
            name="ownershiporGovernanentLease"
            value={formData.ownershiporGovernanentLease}
            onChange={handleChange}
          >
            <option value="">Select</option>
            {/* Add your options here */}
          </select>
        </div>

        {/* Land Use Certificate Issued */}
        <div>
          <label htmlFor="landUseCertificateIssued">Land Use Certificate Issued:</label>
          <input
            type="checkbox"
            id="landUseCertificateIssued"
            name="landUseCertificateIssued"
            checked={formData.landUseCertificateIssued}
            onChange={handleChange}
          />
        </div>

        {/* Land Use Certification Authority */}
        {formData.landUseCertificateIssued && (
          <div>
            <label htmlFor="landUseCertificationAuthority">Land Use Certification Authority:</label>
            <input
              type="text"
              id="landUseCertificationAuthority"
              name="landUseCertificationAuthority"
              value={formData.landUseCertificationAuthority}
              onChange={handleChange}
            />
          </div>
        )}

        {/* Submit Button */}
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default MoreLandInformationForm;
