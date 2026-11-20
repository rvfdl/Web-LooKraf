
import React from "react";

const services = [
  {
    number: "01",
    title: "Kualitas Desain Terbaik",
    description:
      "Setiap logo dirancang dengan memperhatikan detail, kreativitas, dan karakter bisnis agar menghasilkan identitas visual yang berkesan.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l2.2 5.8L20 11l-5.8 2.2L12 19l-2.2-5.8L4 11l5.8-2.2L12 3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 15l1.2 2.8L23 19l-2.8 1.2L19 23l-1.2-2.8L15 19l2.8-1.2L19 15z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Revisi Logo Gratis",
    description:
      "Kami memberikan kesempatan revisi agar hasil akhir sesuai dengan ekspektasi, kebutuhan, dan identitas brand Anda.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7v5h-5M4 17v-5h5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.6 9a7 7 0 0112.8-2L20 12M4 12l1.6 5a7 7 0 0012.8-2" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Garansi Kepuasan",
    description:
      "Kepuasan klien menjadi prioritas kami. Kami berkomitmen memberikan hasil terbaik sesuai kesepakatan layanan.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l8 3v5c0 5-3.4 8.5-8 10-4.6-1.5-8-5-8-10V6l8-3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
];

const Services = () => (
  <section
    id="services"
    className="relative overflow-hidden py-24 px-6 bg-[#212529] text-white"
  >
    {/* Background Decoration */}
    <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

    <div className="relative max-w-6xl mx-auto">
      {/* Section Heading */}
      <div className="text-center mb-16">
        <span className="text-purple-400 text-sm font-semibold tracking-[0.3em] uppercase">
          What We Offer
        </span>

        <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-5">
          Our Services
        </h2>

        <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full" />

        <p className="max-w-2xl mx-auto mt-6 text-gray-400 text-sm md:text-base leading-relaxed">
          Kami menyediakan layanan pembuatan logo profesional untuk membantu
          membangun identitas visual bisnis yang unik, kreatif, dan berkesan.
        </p>
      </div>

      {/* Services Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        {services.map((service) => (
          <div
            key={service.number}
            className="group relative p-[1px] rounded-2xl bg-white/10 hover:bg-gradient-to-br hover:from-purple-500 hover:via-indigo-500 hover:to-purple-400 transition-all duration-500"
          >
            <div className="relative h-full min-h-[300px] bg-[#272c32] rounded-2xl p-8 flex flex-col overflow-hidden transition-all duration-500 group-hover:bg-[#2b3038]">
              
              {/* Number */}
              <span className="absolute top-6 right-7 text-5xl font-bold text-white/[0.04] group-hover:text-purple-400/10 transition-colors duration-500">
                {service.number}
              </span>

              {/* Icon */}
              <div className="relative w-16 h-16 flex items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 border border-purple-400/20 group-hover:bg-purple-500 group-hover:text-white group-hover:scale-110 transition-all duration-500">
                {service.icon}
              </div>

              {/* Content */}
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4 group-hover:text-purple-300 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-400 text-sm leading-7">
                  {service.description}
                </p>
              </div>

              {/* Bottom Decoration */}
              <div className="mt-auto pt-8 flex items-center gap-2 text-purple-400 text-xs font-semibold tracking-wider">
                <span className="w-6 h-[1px] bg-purple-400 group-hover:w-12 transition-all duration-500" />
                LOOKRAF DESIGN
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
