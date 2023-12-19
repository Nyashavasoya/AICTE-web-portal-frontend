import React, { useState } from 'react';

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    { title: 'Personalized Document Templates', description: 'The portal dynamically generates personalized, prefilled document templates, minimizing user effort and reducing errors. ' },
    { title: 'Handbook Assistant', description: 'Chatbot for dynamic and personalized user interaction. ' },
    { title: 'Fee Structure Generation', description: 'Customized fee structure document generated based on user preferences.' },
  ];

  return (
    <div className="flex h-screen">
      <div className="w-1/2 p-8">
        {/* Left side content */}
        <h1 className="text-4xl font-bold mb-8">Our Services</h1>

        <div className="flex flex-col gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative bg-white p-8 rounded-md ${
                hoveredService === index ? 'shadow-lg' : 'shadow'
              } transition duration-300 cursor-pointer`}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <h2
                className={`text-xl font-bold mb-4 transition duration-300 ${
                  hoveredService === index ? 'transform -translate-y-2' : ''
                }`}
              >
                {service.title}
              </h2>
              <p
                className={`text-gray-600 transform origin-bottom transition-all duration-300 ${
                  hoveredService === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-1/2 p-8">
        {/* Right side content */}
        {/* You can add additional content or components here */}
      </div>
    </div>
  );
};

export default Services;
