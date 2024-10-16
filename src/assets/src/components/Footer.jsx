// eslint-disable-next-line no-unused-vars
import React from "react";

const Footer = () => (
  <footer className="bg-gradient-to-b from-[#212529] to-[#0d6efd] text-white p-6 w-full">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Column 1: Company Name */}
      <div className="">
        <h3 className="text-xl font-bold mb-2">LooKraf</h3>
        <p>
          LooKraf adalah tim jasa desain logo yang akan membantu anda untuk
          menemukan desain logo yang cocok untuk usaha anda.
        </p>
      </div>

      {/* Column 2: Contact Information */}
      <div className="">
        <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
        <p>
          Email:{" "}
          <a
            href="mailto:ferrynurkurni@gmail.com"
            className="text-white underline"
          >
            ferrynurkurni@gmail.com
          </a>
        </p>
        <p>
          Phone:{" "}
          <a href="https://wa.me/+6285747485067" className="text-white underline">
            +62 857 4748 5067
          </a>
        </p>
      </div>

      {/* Column 3: Social Media */}
      <div>
        <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
        <p>
          <a
            href="https://instagram.com/dannprtma_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline"
          >
            Instagram
          </a>
        </p>
      </div>
    </div>

    {/* Credit Section */}
    <div className="mt-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
      <p>© 2024 LooKraf. All Rights Reserved.</p>
    </div>
  </footer>
);

export default Footer;
