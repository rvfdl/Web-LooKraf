// eslint-disable-next-line no-unused-vars
import React from "react";

const Services = () => (
  <section id="services" className="text-center py-24 bg-[#212529] text-white">
    <h2 className="text-3xl font-bold mb-4">Services</h2>
    <div className="flex justify-center">
      <hr className="w-20" />
    </div>
    <br />
    <p className="mx-4 md:mx-60 mb-4 text-sm md:text-base">
      Kami menyediakan layanan pembuatan logo yang unik dan sesuai dengan
      identitas bisnis Anda.
    </p>

    {/* Overflow untuk mobile, atur agar responsif */}
    <div className="overflow-x-auto md:overflow-hidden mx-4">
      <div className="flex space-x-10 snap-x snap-mandatory p-10 md:justify-center">
        <div
          className="bg-[#212529] w-64 p-6 shadow-lg rounded-lg flex flex-col items-center min-w-[280px] snap-start transition-transform duration-200 hover:scale-105"
          style={{ boxShadow: "0 4px 10px rgba(255, 255, 255, 0.8)" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-24 mb-4"
            aria-label="Quality and Client Satisfaction"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
            />
          </svg>
          <h3 className="text-xl font-bold text-center">
            Mengutamakan Kualitas Logo & Kepuasan Klien
          </h3>
        </div>

        <div
          className="bg-[#212529] w-64 p-6 shadow-lg rounded-lg flex flex-col items-center min-w-[280px] snap-start transition-transform duration-200 hover:scale-105"
          style={{ boxShadow: "0 4px 10px rgba(255, 255, 255, 0.8)" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-24 mb-4"
            aria-label="Free Logo Revision"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
            />
          </svg>
          <h3 className="text-xl font-bold mb-2">Revisi Logo Gratis</h3>
        </div>

        <div
          className="bg-[#212529] w-64 p-6 shadow-lg rounded-lg flex flex-col items-center min-w-[280px] snap-start transition-transform duration-200 hover:scale-105"
          style={{ boxShadow: "0 4px 10px rgba(255, 255, 255, 0.8)" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-24 mb-4"
            aria-label="Satisfaction Guaranteed or Money Back"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
            />
          </svg>
          <h3 className="text-xl font-bold mb-2">
            Dijamin Kepuasan atau Uang Kembali
          </h3>
        </div>
      </div>
    </div>
  </section>
);

export default Services;
