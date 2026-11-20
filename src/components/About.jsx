
import React from "react";

const About = () => (
  <section
    id="about"
    className="relative overflow-hidden py-24 md:py-32 px-6 bg-gradient-to-b from-[#292d32] via-[#24282d] to-[#212529] text-white"
  >
    {/* Background Decoration */}
    <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-purple-500/[0.05] blur-[100px] pointer-events-none" />
    <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-white/[0.03] blur-[100px] pointer-events-none" />

    <div className="relative container mx-auto max-w-6xl">
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">

        {/* Logo */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative group max-w-md">
            <div className="absolute inset-0 bg-purple-400/10 blur-3xl rounded-full opacity-50 group-hover:opacity-100 transition duration-500" />

            <img
              src="/lookraflogohtm.png"
              alt="LOOKRAF Logo"
              className="relative w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">

          <span className="inline-flex items-center gap-3 text-purple-300/80 text-xs md:text-sm font-semibold tracking-[0.3em] uppercase mb-5">
            <span className="w-8 h-[1px] bg-purple-400/70" />
            About Us
          </span>

          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            LOOKRAF
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-gray-400">
              Design Studio
            </span>
          </h2>

          <p className="text-gray-400 text-sm md:text-base leading-8 max-w-lg mx-auto md:mx-0 mb-8">
            Jasa desain logo profesional dengan harga terjangkau,
            proses pengerjaan yang cepat, dan kualitas terbaik.
            Kami membantu membangun identitas visual yang unik
            dan mencerminkan karakter bisnis Anda.
          </p>

          {/* Decorative Line */}
          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="w-12 h-[2px] bg-purple-400/70 rounded-full" />
            <span className="text-gray-500 text-xs tracking-[0.2em] font-medium">
              CREATIVE • UNIQUE • PROFESSIONAL
            </span>
          </div>

        </div>
      </div>
    </div>
  </section>
);

export default About;
