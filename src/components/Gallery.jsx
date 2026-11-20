
import React from "react";

const galleryItems = [
  { id: 1, title: "Logo Design 01" },
  { id: 2, title: "Logo Design 02" },
  { id: 3, title: "Logo Design 03" },
  { id: 4, title: "Logo Design 04" },
  { id: 5, title: "Logo Design 05" },
];

const Gallery = () => (
  <section
    id="gallery"
    className="relative overflow-hidden bg-gradient-to-b from-[#212529] to-[#252930] text-white py-24"
  >
    {/* Background Decoration */}
    <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/[0.05] rounded-full blur-[120px] pointer-events-none" />

    <div className="relative">

      {/* Heading */}
      <div className="text-center px-6 mb-14">
        <span className="text-purple-300 text-xs md:text-sm font-semibold tracking-[0.3em] uppercase">
          Our Creative Works
        </span>

        <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-5">
          Gallery
        </h2>

        <div className="w-16 h-1 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-indigo-400" />

        <p className="max-w-xl mx-auto mt-6 text-gray-400 text-sm md:text-base leading-7">
          Explore our creative journey and discover the visual identity
          crafted with creativity, passion, and attention to detail.
        </p>
      </div>

      {/* Gallery Marquee */}
      <div className="relative overflow-hidden">

        {/* Left Gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 z-10 bg-gradient-to-r from-[#212529] to-transparent pointer-events-none" />

        {/* Right Gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 z-10 bg-gradient-to-l from-[#212529] to-transparent pointer-events-none" />

        <div className="flex w-max animate-slide hover:[animation-play-state:paused]">
          {[...galleryItems, ...galleryItems].map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="group relative flex-shrink-0 w-[200px] h-[200px] md:w-[260px] md:h-[260px] mx-3 rounded-2xl overflow-hidden bg-[#2a2f36] border border-white/10 hover:border-purple-400/50 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <img
                src="/comingsoon.png"
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-purple-300 text-[10px] font-semibold tracking-[0.2em] uppercase">
                  LOOKRAF PORTFOLIO
                </span>

                <h3 className="text-white font-bold text-sm md:text-base mt-1">
                  {item.title}
                </h3>
              </div>

              {/* Number */}
              <span className="absolute top-4 right-4 text-white/70 text-xs font-semibold tracking-wider">
                {String(item.id).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center mt-12 px-6">
        <p className="text-gray-500 text-xs tracking-wider">
          <span className="text-purple-300">✦</span>
          MORE CREATIVE WORKS COMING SOON
          <span className="text-purple-300"> ✦</span>
        </p>
      </div>

    </div>
  </section>
);

export default Gallery;
