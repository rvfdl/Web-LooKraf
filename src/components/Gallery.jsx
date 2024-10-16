// eslint-disable-next-line no-unused-vars
import React from 'react';

const Gallery = () => (
  <section id="gallery" className="pb-24 bg-[#212529] text-center">
    <h2 className="text-3xl font-bold mb-4 text-white">Gallery</h2>
    <br />
    <div className="overflow-hidden relative">
      <div className="flex animate-slide">
        {/* Repeat images for continuous effect */}
        {Array.from({ length: 5 }).map((_, index) => (
          <img
            key={index}
            src="/comingsoon.png"
            alt={`Logo ${index + 1}`}
            className="shadow-lg rounded-lg bg-white max-w-[150px] md:max-w-[200px] m-2"
          />
        ))}
        {/* Add the same images again for a seamless loop */}
        {Array.from({ length: 5 }).map((_, index) => (
          <img
            key={index + 5} // Ensure unique keys for each image
            src="/comingsoon.png"
            alt={`Logo ${index + 6}`}
            className="shadow-lg rounded-lg bg-white max-w-[150px] md:max-w-[200px] m-2"
          />
        ))}
      </div>
    </div>
  </section>
);

export default Gallery;
