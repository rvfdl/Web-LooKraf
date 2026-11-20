
import React, { useState, useEffect } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Pricelist", href: "#price" },
    { name: "Gallery", href: "#gallery" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Menutup menu ketika link diklik
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#1c2025]/95 backdrop-blur-xl shadow-lg shadow-black/10 border-b border-white/5 py-3"
          : "bg-[#212529]/70 backdrop-blur-md py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a
            href="#home"
            onClick={closeMenu}
            className="text-2xl font-extrabold tracking-tight text-white group"
          >
            Loo
            <span className="text-purple-400 group-hover:text-purple-300 transition-colors">
              Kraf
            </span>
            <span className="text-purple-400">.</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-sm font-medium text-gray-400 hover:text-white transition-colors duration-300 group"
              >
                {item.name}

                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-purple-400 rounded-full transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA Desktop */}
          <div className="hidden lg:block">
            <a
              href="https://wa.me/6285747485067"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-purple-500/10 border border-purple-400/30 text-purple-300 text-sm font-semibold hover:bg-purple-500 hover:text-white hover:border-purple-500 transition-all duration-300"
            >
              Let's Talk
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 17L17 7M7 7h10v10"
                />
              </svg>
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={isOpen}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white hover:bg-purple-500/20 hover:border-purple-400/30 transition-all duration-300"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 7h16M4 12h16M4 17h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? "max-h-[500px] opacity-100 mt-5"
              : "max-h-0 opacity-0 mt-0"
          }`}
        >
          <nav className="p-3 rounded-2xl bg-[#252a30] border border-white/10 shadow-xl">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:bg-purple-500/10 transition-all duration-200"
              >
                {item.name}

                <span className="text-purple-400">↗</span>
              </a>
            ))}

            <div className="border-t border-white/10 mt-2 pt-3">
              <a
                href="https://wa.me/6285747485067"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-purple-500 text-white text-sm font-semibold hover:bg-purple-400 transition-colors"
              >
                Let's Talk
                <span>↗</span>
              </a>
            </div>
          </nav>
        </div>

      </div>
    </header>
  );
};

export default Header;
