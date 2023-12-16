// ComputationalFacilitiesForm.js

import React, { useState } from 'react';

const ComputationalFacilitiesForm = () => {
  const [formData, setFormData] = useState({
    PClaptopsExclusivelyAvailableToStudents: 0,
    PClaptopsAvailableInLibrary: 0,
    PClaptopsAvailableInAdministrativeOffice: 0,
    PClaptopsAvailableForFacultyMember: 0,
    numberOfPcInLanguageLab: 0,
    internetBandwidthInMbps: 0,
    numberOfLegalApplicationSoftware: 0,
    printersAvailableToStudents: 0,
    numberOfA1SizeColorPrinter: 0,
    numberOfLegalSystemSoftware: 0,
    numberOfOpenSourceSoftware: 0,
    numberOfPropsitory: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for form submission or API call here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container mx-auto mt-8">
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="PClaptopsExclusivelyAvailableToStudents" className="block text-sm font-medium text-gray-600">
            PCs/Laptops Exclusively Available to Students
          </label>
          <input
            type="number"
            id="PClaptopsExclusivelyAvailableToStudents"
            name="PClaptopsExclusivelyAvailableToStudents"
            value={formData.PClaptopsExclusivelyAvailableToStudents}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="PClaptopsAvailableInLibrary" className="block text-sm font-medium text-gray-600">
            PCs/Laptops Available in Library
          </label>
          <input
            type="number"
            id="PClaptopsAvailableInLibrary"
            name="PClaptopsAvailableInLibrary"
            value={formData.PClaptopsAvailableInLibrary}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="PClaptopsAvailableInAdministrativeOffice" className="block text-sm font-medium text-gray-600">
            PCs/Laptops Available in Administrative Office
          </label>
          <input
            type="number"
            id="PClaptopsAvailableInAdministrativeOffice"
            name="PClaptopsAvailableInAdministrativeOffice"
            value={formData.PClaptopsAvailableInAdministrativeOffice}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="PClaptopsAvailableForFacultyMember" className="block text-sm font-medium text-gray-600">
            PCs/Laptops Available for Faculty Member
          </label>
          <input
            type="number"
            id="PClaptopsAvailableForFacultyMember"
            name="PClaptopsAvailableForFacultyMember"
            value={formData.PClaptopsAvailableForFacultyMember}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="numberOfPcInLanguageLab" className="block text-sm font-medium text-gray-600">
            Number of PCs in Language Lab
          </label>
          <input
            type="number"
            id="numberOfPcInLanguageLab"
            name="numberOfPcInLanguageLab"
            value={formData.numberOfPcInLanguageLab}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="internetBandwidthInMbps" className="block text-sm font-medium text-gray-600">
            Internet Bandwidth (in Mbps)
          </label>
          <input
            type="number"
            id="internetBandwidthInMbps"
            name="internetBandwidthInMbps"
            value={formData.internetBandwidthInMbps}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="numberOfLegalApplicationSoftware" className="block text-sm font-medium text-gray-600">
            Number of Legal Application Software
          </label>
          <input
            type="number"
            id="numberOfLegalApplicationSoftware"
            name="numberOfLegalApplicationSoftware"
            value={formData.numberOfLegalApplicationSoftware}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="printersAvailableToStudents" className="block text-sm font-medium text-gray-600">
            Printers Available to Students
          </label>
          <input
            type="number"
            id="printersAvailableToStudents"
            name="printersAvailableToStudents"
            value={formData.printersAvailableToStudents}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="numberOfA1SizeColorPrinter" className="block text-sm font-medium text-gray-600">
            Number of A1 Size Color Printer
          </label>
          <input
            type="number"
            id="numberOfA1SizeColorPrinter"
            name="numberOfA1SizeColorPrinter"
            value={formData.numberOfA1SizeColorPrinter}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="numberOfLegalSystemSoftware" className="block text-sm font-medium text-gray-600">
            Number of Legal System Software
          </label>
          <input
            type="number"
            id="numberOfLegalSystemSoftware"
            name="numberOfLegalSystemSoftware"
            value={formData.numberOfLegalSystemSoftware}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="numberOfOpenSourceSoftware" className="block text-sm font-medium text-gray-600">
            Number of Open Source Software
          </label>
          <input
            type="number"
            id="numberOfOpenSourceSoftware"
            name="numberOfOpenSourceSoftware"
            value={formData.numberOfOpenSourceSoftware}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="numberOfPropsitory" className="block text-sm font-medium text-gray-600">
            Number of Repositories
          </label>
          <input
            type="number"
            id="numberOfPropsitory"
            name="numberOfPropsitory"
            value={formData.numberOfPropsitory}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ComputationalFacilitiesForm;
