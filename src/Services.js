import React, { useState } from 'react';

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    { title: 'Service 1', description: 'Description for Service 1' },
    { title: 'Service 2', description: 'Description for Service 2' },
    { title: 'Service 3', description: 'Description for Service 3' },
  ];

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-1/2">
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
    </div>
  );
};

export default Services;
