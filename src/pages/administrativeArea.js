// AdministrativeAreaForm.js

import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { formsFilledState } from './atoms';

const AdministrativeAreaForm = () => {

  const [formsFilled, setFormsFilled] = useRecoilState(formsFilledState);
  const [formData, setFormData] = useState({
    roomID: '',
    roomType: '',
    area: 0,
    buildingName: '',
    buildingNumber: 0,
    readinessofFlooring: '',
    readinessofWallAndPainting: '',
    readinessofElectrificationAndLightning: '',
    readinessofFurniture: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
  
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleDeficiency = () => {
    console.log(formData.roomType);
    console.log(formData.area);

    if(formData.roomType === 'Principal/Director Office'){
        if(formData.area < 30){
            alert('The area of Principal/Director office must be more than or equal to 30 square meters');
            return true;
        }
    }

    else if(formData.roomType === 'Board Room'){
        if(formData.area < 20){
            alert('The area of board room must be more than or equal to 20 square meters');
            return true;
        }
    }

    else if(formData.roomType === 'Office All Inclusive'){
        if(formData.area < 150){
            alert('The number of offices in the "Office All Inclusive" should not be less than 150');
            return true;
        }
    }

    else if(formData.roomType === 'Department Offices/ Cabin for Head of Dept'){
        if(formData.area < 160){
            alert("The area of department offices/cabin for head of dept must be more than or equal to 160 square meters");
            return true;
        }
    }

    else if(formData.roomType === 'Central Store'){
        if(formData.area < 30){
            alert("The area of central store can not be less than 30 square meters");
            return true;
        }
    }

    else if(formData.roomType === 'Maintenance'){
        if(formData.area < 10){
            alert("The area of maintenance workshop can not be less than 10 square meters");
            return true;
        }
    }

    else if(formData.roomType === 'Security'){
        if(formData.area < 10){
            alert("The area of security room can not be less than 10 square meters");
            return true;
        }
    }

    else if(formData.roomType === 'HouseKeeping'){
        if(formData.area < 10){
            alert("The area of house keeping room can not be less than 10 square meters");
            return true;
        }
    }

    else if(formData.roomType === 'Pantry for Staff/Faculty'){
        if(formData.area < 10){
            alert("The area of pantry should be at least 10 square meter.");
            return true;
        }
    }

    else if(formData.roomType === 'Exam Control Office'){
        if(formData.area < 30){
            alert("The area of Examination control office should be minimum 30 sqr.meter.");
            return true;
        }
    }

    else if(formData.roomType === 'Training Placement Office'){
        if(formData.area < 30){
            alert("The area of Training and Placement Office should be minimum 30 sqr.meters.");
            return true;
        }
    }

    return false;
  }
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const hasDeficiency = handleDeficiency();
    if(hasDeficiency){
        return;
    }
    setFormsFilled((prevFormsFilled) => prevFormsFilled + 1);
  };

  return (
    <div className="container mx-auto mt-8">
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="roomID" className="block text-sm font-medium text-gray-600">
            Room ID
          </label>
          <input
            type="text"
            id="roomID"
            name="roomID"
            value={formData.roomID}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
            <label htmlFor="roomType" className="block text-sm font-medium text-gray-600">
                Room Type
            </label>
            <select
                id="roomType"
                name="roomType"
                value={formData.roomType}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
            >
                <option value="Principal/Director Office">Principal/Director Office</option>
                <option value="Board Room">Board Room</option>
                <option value="Office All Inclusive">Office All Inclusive</option>
                <option value="Department Offices/ Cabin for Head of Dept">Department Offices/ Cabin for Head of Dept</option>
                <option value="Central Store">Central Store</option>
                <option value="Maintenance">Maintenance</option>
                <option value="Security">Security</option>
                <option value="HouseKeeping">HouseKeeping</option>
                <option value="Pantry for Staff/Faculty">Pantry for Staff/Faculty</option>
                <option value="Exam Control Office">Exam Control Office</option>
                <option value="Training Placement Office">Training Placement Office</option>
                {/* Add more options as needed */}
            </select>
        </div>


        <div className="mb-4">
          <label htmlFor="area" className="block text-sm font-medium text-gray-600">
            Area (in sq feet)
          </label>
          <input
            type="number"
            id="area"
            name="area"
            value={formData.area}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="buildingName" className="block text-sm font-medium text-gray-600">
            Building Name
          </label>
          <input
            type="text"
            id="buildingName"
            name="buildingName"
            value={formData.buildingName}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="buildingNumber" className="block text-sm font-medium text-gray-600">
            Building Number
          </label>
          <input
            type="number"
            id="buildingNumber"
            name="buildingNumber"
            value={formData.buildingNumber}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="readinessofFlooring" className="block text-sm font-medium text-gray-600">
            Readiness of Flooring
          </label>
          <input
            type="text"
            id="readinessofFlooring"
            name="readinessofFlooring"
            value={formData.readinessofFlooring}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="readinessofWallAndPainting" className="block text-sm font-medium text-gray-600">
            Readiness of Wall and Painting
          </label>
          <input
            type="text"
            id="readinessofWallAndPainting"
            name="readinessofWallAndPainting"
            value={formData.readinessofWallAndPainting}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="readinessofElectrificationAndLightning" className="block text-sm font-medium text-gray-600">
            Readiness of Electrification and Lightning
          </label>
          <input
            type="text"
            id="readinessofElectrificationAndLightning"
            name="readinessofElectrificationAndLightning"
            value={formData.readinessofElectrificationAndLightning}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="readinessofFurniture" className="block text-sm font-medium text-gray-600">
            Readiness of Furniture
          </label>
          <input
            type="text"
            id="readinessofFurniture"
            name="readinessofFurniture"
            value={formData.readinessofFurniture}
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

export default AdministrativeAreaForm;
