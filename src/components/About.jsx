// eslint-disable-next-line no-unused-vars
import React from 'react';

const About = () => (
  <section id="about" className="py-32 bg-gradient-to-b from-[#0d6efd] to-[#212529]">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-center max-w-4xl">
      {/* Kolom Kiri - Gambar Logo */}
      <div className="md:w-1/2 mb-8 md:mb-0">
        <img
          src="/lookraflogohtm.png" // Ganti dengan path gambar logo Anda
          alt="Logo"
          className="w-full h-auto" // Atur ukuran dan gaya gambar sesuai kebutuhan
        />
      </div>

      {/* Kolom Kanan - Judul dan Deskripsi */}
      <div className="md:w-1/2 md:pl-8 text-center md:text-left">
        <h2 className="text-0xl font-bold mb-4 underline text-white">LOOKRAF</h2>
        <h2 className="font-bold mb-4 text-5xl text-white">Jasa Ngontol Logo Murah, Cepat dan Berkualitas</h2>
      </div>
    </div>
  </section>
);

export default About;
