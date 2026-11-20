
import React from "react";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/outline";

const Footer = () => {
  const navigation = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Pricelist", href: "#price" },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#1c2025] text-white">
      {/* Background Decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-64 bg-purple-500/[0.05] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-8">

        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-14">

          {/* Brand */}
          <div className="lg:col-span-2">
            <a
              href="#home"
              className="inline-block text-3xl font-extrabold tracking-tight mb-5"
            >
              LOOK<span className="text-purple-400">RAF</span>
              <span className="text-purple-400">.</span>
            </a>

            <p className="text-gray-400 text-sm leading-7 max-w-sm mb-6">
              LOOKRAF adalah tim jasa desain logo profesional yang siap
              membantu Anda membangun identitas visual bisnis yang unik,
              kreatif, dan berkesan.
            </p>

            {/* Social Media */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/dannprtma_"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram LOOKRAF"
                className="w-11 h-11 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-gray-300 hover:bg-purple-500 hover:text-white hover:border-purple-500 transition-all duration-300"
              >
                {/* Instagram SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="18"
                    cy="6"
                    r="0.8"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-bold mb-6">
              Quick Links
            </h4>

            <ul className="space-y-4">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-purple-300 hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base font-bold mb-6">
              Contact Us
            </h4>

            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <EnvelopeIcon className="w-5 h-5 flex-shrink-0 text-purple-400 mt-0.5" />

                <div>
                  <p className="text-xs text-gray-500 mb-1">Email</p>
                  <a
                    href="mailto:ferrynurkurni@gmail.com"
                    className="text-sm text-gray-300 hover:text-purple-300 transition-colors break-all"
                  >
                    ferrynurkurni@gmail.com
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <PhoneIcon className="w-5 h-5 flex-shrink-0 text-purple-400 mt-0.5" />

                <div>
                  <p className="text-xs text-gray-500 mb-1">WhatsApp</p>
                  <a
                    href="https://wa.me/6285747485067"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-300 hover:text-purple-300 transition-colors"
                  >
                    +62 857 4748 5067
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <MapPinIcon className="w-5 h-5 flex-shrink-0 text-purple-400 mt-0.5" />

                <div>
                  <p className="text-xs text-gray-500 mb-1">Service</p>
                  <p className="text-sm text-gray-300">
                    Logo Design & Branding
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-5 pt-7">
          <p className="text-xs text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} LOOKRAF. All Rights Reserved.
          </p>

          <p className="text-xs text-gray-500">
            Crafted with <span className="text-purple-400">♥</span> by LOOKRAF
          </p>

          {/* Back to Top */}
          <a
            href="#home"
            aria-label="Back to top"
            className="flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-purple-300 transition-colors group"
          >
            Back to Top

            <span className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center group-hover:bg-purple-500 group-hover:border-purple-500 group-hover:text-white transition-all">
              <ArrowUpIcon className="w-4 h-4" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
