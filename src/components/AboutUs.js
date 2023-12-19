import React, { useEffect, useRef } from 'react';
import './AboutUs.css'; // Import your CSS file

const AboutUs = () => {
  const words = ['Us', 'AICTE', 'Approvals'];
  const wordIndex = useRef(0);
  const h1Ref = useRef(null)

  useEffect(() => {
    const typeWriter = async (text, fnCallback) => {
      const h1 = h1Ref.current;
      if (h1) {
        for (let i = 0; i <= text.length; i++) {
          setTimeout(() => {
            h1.innerHTML = text.substring(0, i) + '<span class="cursor" aria-hidden="true"></span>';
            if (i === text.length && typeof fnCallback === 'function') {
              setTimeout(fnCallback, 700);
            }
          }, i * 100);
        }
      }
    };

    const startTextAnimation = async i => {
      if (i >= words.length) {
        // Reset to the beginning after reaching the end
        i = 0;
        await new Promise(resolve => setTimeout(resolve, 2000));
      }

      if (i < words.length) {
        await typeWriter(`${words[i]}`, async () => {
          await new Promise(resolve => setTimeout(resolve, 2000));
          startTextAnimation(i + 1);
        });
      }
    };

    startTextAnimation(0);
  }, []);

  return (
    <div className="container mx-auto my-8 px-4 lg:px-8 py-8 bg-gray-100">
      <div className="typewriter-container flex">
        {/* Left side (About Us) */}
        <div className="p-8 text-indigo-500 text-8xl">
          <h1>About</h1>
          <div className="text-2xl"><br/></div>
          <div className="typewriter p-8 text-indigo-500 text-8xl">
            <h1 ref={h1Ref} className='typewriter-text'></h1>
          </div>
        </div>

        {/* Right side container with text */}
        <div className="right-container text-2xl absolute top-21 right-8 w-1/3 text-right ">
          <p>
            All India Council for Technical Education (AICTE) was set up in November 1945 as a national-level Apex Advisory Body to conduct a survey on the facilities available for technical education and to promote development in the country in a coordinated and integrated manner.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
