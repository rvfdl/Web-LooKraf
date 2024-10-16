// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

const Header = () => {
  // State untuk toggle navigasi mobile
  const [isOpen, setIsOpen] = useState(false);
  // State untuk transparansi header
  const [isTransparent, setIsTransparent] = useState(true);

  // Fungsi untuk membuka atau menutup navigasi di perangkat mobile
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Efek untuk mendeteksi scroll dan mengubah transparansi header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsTransparent(false); // Ubah menjadi tidak transparan saat scroll
      } else {
        setIsTransparent(true); // Ubah kembali menjadi transparan saat scroll ke atas
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Membersihkan event listener saat komponen di-unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`bg-[#212529] text-white p-4 md:p-6 sticky top-0 z-50 w-full transition-opacity duration-300 ${isTransparent ? 'opacity-100' : 'opacity-80'}`}>
      <div className="flex justify-between items-center max-w-full mx-auto">
        {/* Bagian Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold ml-2">LOOKRAF</h1>
        </div>

        {/* Tombol Hamburger Menu untuk Mobile */}
        <div className="relative md:hidden ml-auto"> {/* Ensure ml-auto is here */}
          <button onClick={toggleMenu} className="focus:outline-none bg-transparent p-2 rounded">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>

          {/* Dropdown Menu digabungkan dengan tombol hamburger */}
          {isOpen && (
            <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1" role="none">
                <a href="#about" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" onClick={toggleMenu}>About</a>
                <a href="#services" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" onClick={toggleMenu}>Services</a>
                <a href="#process" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" onClick={toggleMenu}>Process</a>
                <a href="#price" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" onClick={toggleMenu}>Pricelist</a>
                <a href="#gallery" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" onClick={toggleMenu}>Gallery</a>
              </div>
            </div>
          )}
        </div>

        {/* Navigasi Link - Responsif */}
        <nav className={`text-white ${isOpen ? 'block md:hidden' : 'hidden'} md:flex md:space-x-4`}>
          {/* Menu Link untuk Desktop */}
          <div className="hidden md:flex md:space-x-4">
            <a href="#about" className="hover:underline text-white">About</a>
            <a href="#services" className="hover:underline text-white">Services</a>
            <a href="#process" className="hover:underline text-white">Process</a>
            <a href="#price" className="hover:underline text-white">Pricelist</a>
            <a href="#gallery" className="hover:underline text-white">Gallery</a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
