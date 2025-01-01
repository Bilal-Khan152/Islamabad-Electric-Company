import React from 'react';

const BannersImages = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {[
        "https://iesco.com.pk/templates/iesco/images/loadshedding_schedule_04.png",
        "https://iesco.com.pk/images/downloads/SIFC.jpg",
        "https://iesco.com.pk/images/downloads/1link-eng.jpeg",
        "https://iesco.com.pk/templates/iesco/images/loadshedding-schedule.jpg",
        "https://iesco.com.pk/images/downloads/Net-Metering-Image.png",
        "https://iesco.com.pk/images/downloads/permon1.jpg",
        "https://iesco.com.pk/images/downloads/edb2.png",
        
        "https://iesco.com.pk/images/downloads/comp-red-mgt-img.jpg",
      ].map((src, index) => (
        <div
          key={index}
          className="
            hover:shadow-2xl hover:scale-105 flex items-center hover:border-blue-500
            transition-transform duration-300 ease-in-out
            bg-[#ecf0f1] rounded-md border-[1px] border-blue-900 shadow-lg
          "
        >
          <img
            className="cursor-pointer w-full h-auto object-cover rounded-md"
            src={src}
            alt={`Banner ${index + 1}`}
          />
        </div>
      ))}

      
    </div>
  );
};

export default BannersImages;
