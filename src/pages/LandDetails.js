import React, { useState } from 'react';

const LandDetailsForm = () => {
  const [formData, setFormData] = useState({
    location: '',
    latitude: '',
    longitude: '',
    totalAreaInAcres: '',
    numberOfPieces: '',
    lattitudeDegree: '',
    londitudeDegree: '',
    landRestrictedWith: '',
    landPieceArea1InAcres: '',
    latitudeMinute: '',
    longitudeMinute: '',
    ownwershipDetails: '',
    landPieceArea2InAcres: '',
    landUseCertificateIssuedBy: '',
    landUseCertificateIssueDate: '',
    landInNorthernHillyArea: false,
    isLandMortgated: false,
    mortgatedPurpose: '',
    dateIFRegistration: '',
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
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Select Location:</label>
          <select name="location" value={formData.location} onChange={handleChange}>
            <option value="">Select Location</option>
            <option value="Location1">Location 1</option>
            <option value="Location2">Location 2</option>
            {/* Add more options as needed */}
          </select>
        </div>

        {/* Latitude Dropdown */}
        <div>
          <label>Select Latitude:</label>
          <select name="latitude" value={formData.latitude} onChange={handleChange}>
            <option value="">Select Latitude</option>
            <option value="Latitude1">Latitude 1</option>
            <option value="Latitude2">Latitude 2</option>
            {/* Add more options as needed */}
          </select>
        </div>

        {/* Longitude Dropdown */}
        <div>
          <label>Select Longitude:</label>
          <select name="longitude" value={formData.longitude} onChange={handleChange}>
            <option value="">Select Longitude</option>
            <option value="Longitude1">Longitude 1</option>
            <option value="Longitude2">Longitude 2</option>
            {/* Add more options as needed */}
          </select>
        </div>

        {/* Total Area in Acres */}
        <div>
          <label>Total Area in Acres:</label>
          <input
            type="text"
            name="totalAreaInAcres"
            value={formData.totalAreaInAcres}
            onChange={handleChange}
          />
        </div>

        {/* Number of Pieces */}
        <div>
          <label>Number of Pieces:</label>
          <input
            type="text"
            name="numberOfPieces"
            value={formData.numberOfPieces}
            onChange={handleChange}
          />
        </div>

        {/* Latitude Degree */}
        <div>
          <label>Latitude Degree (0 - 90):</label>
          <input
            type="text"
            name="lattitudeDegree"
            value={formData.lattitudeDegree}
            onChange={handleChange}
          />
        </div>

        {/* Longitude Degree */}
        <div>
          <label>Longitude Degree (0 - 90):</label>
          <input
            type="text"
            name="londitudeDegree"
            value={formData.londitudeDegree}
            onChange={handleChange}
          />
        </div>

        {/* Land Restricted With */}
        <div>
          <label>Land Restricted With:</label>
          <input
            type="text"
            name="landRestrictedWith"
            value={formData.landRestrictedWith}
            onChange={handleChange}
          />
        </div>

        {/* Land Piece Area 1 in Acres */}
        <div>
          <label>Land Piece Area 1 in Acres:</label>
          <input
            type="text"
            name="landPieceArea1InAcres"
            value={formData.landPieceArea1InAcres}
            onChange={handleChange}
          />
        </div>

        {/* Latitude Minute */}
        <div>
          <label>Latitude Minute (0 - 60):</label>
          <input
            type="text"
            name="latitudeMinute"
            value={formData.latitudeMinute}
            onChange={handleChange}
          />
        </div>

        {/* Longitude Minute */}
        <div>
          <label>Longitude Minute (0 - 60):</label>
          <input
            type="text"
            name="longitudeMinute"
            value={formData.longitudeMinute}
            onChange={handleChange}
          />
        </div>

        {/* Ownership Details Dropdown */}
        <div>
          <label>Select Ownership Details:</label>
          <select name="ownwershipDetails" value={formData.ownwershipDetails} onChange={handleChange}>
            <option value="">Select Ownership Details</option>
            <option value="Ownership1">Ownership 1</option>
            <option value="Ownership2">Ownership 2</option>
            {/* Add more options as needed */}
          </select>
        </div>

        {/* Land Piece Area 2 in Acres (applicable if pieces are 2) */}
        {formData.numberOfPieces === '2' && (
          <div>
            <label>Land Piece Area 2 in Acres:</label>
            <input
              type="text"
              name="landPieceArea2InAcres"
              value={formData.landPieceArea2InAcres}
              onChange={handleChange}
            />
          </div>
        )}

        {/* Land Use Certificate Issued By */}
        <div>
          <label>Land Use Certificate Issued By:</label>
          <input
            type="text"
            name="landUseCertificateIssuedBy"
            value={formData.landUseCertificateIssuedBy}
            onChange={handleChange}
          />
        </div>

        {/* Land Use Certificate Issue Date */}
        <div>
          <label>Land Use Certificate Issue Date:</label>
          <input
            type="text"
            name="landUseCertificateIssueDate"
            value={formData.landUseCertificateIssueDate}
            onChange={handleChange}
          />
        </div>

        {/* Land in Northern Hilly Area Checkbox */}
        <div>
          <label>Land in Northern Hilly Area:</label>
          <input
            type="checkbox"
            name="landInNorthernHillyArea"
            checked={formData.landInNorthernHillyArea}
            onChange={handleChange}
          />
        </div>

        {/* Is Land Mortgaged Checkbox */}
        <div>
          <label>Is Land Mortgaged:</label>
          <input
            type="checkbox"
            name="isLandMortgated"
            checked={formData.isLandMortgated}
            onChange={handleChange}
          />
        </div>

        {/* Mortgaged Purpose (applicable when mortgaged is true) */}
        {formData.isLandMortgated && (
          <div>
            <label>Mortgaged Purpose:</label>
            <input
              type="text"
              name="mortgatedPurpose"
              value={formData.mortgatedPurpose}
              onChange={handleChange}
            />
          </div>
        )}

        {/* Date of Registration */}
        <div>
          <label>Date of Registration:</label>
          <input
            type="text"
            name="dateIFRegistration"
            value={formData.dateIFRegistration}
            onChange={handleChange}
          />
        </div>

        {/* Submit Button */}
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default LandDetailsForm;
