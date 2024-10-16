// eslint-disable-next-line no-unused-vars
import React from "react";

const PriceList = () => {
  // Fungsi untuk mengarahkan ke WhatsApp dengan pesan yang sudah diatur
  const handleOrderClick = (packageType) => {
    const phoneNumber = "+6285747485067"; // Ganti dengan nomor WhatsApp Anda
    const message = `Halo, saya tertarik dengan ${packageType}`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section id="price" className="text-white bg-[#212529] py-24">
      <h2 className="text-3xl font-bold text-center mb-4">Pricelist</h2>
      <div className="flex justify-center">
        <hr className="w-20" />
      </div>
      <br />
      <p className="text-0xl mb-8 text-center">
        Ini adalah pricelist untuk jasa desain logo kami. Untuk desain lainnya,
        bisa kontak langsung ke kami.
      </p>
      {/* Mengatur overflow untuk tampilan mobile */}
      <div className="overflow-x-auto mx-4 md:mx-0">
        <div className="flex space-x-4 md:grid md:grid-cols-3 gap-8 text-black md:justify-items-center">
          {/* Paket Basic */}
          <div className="bg-[#222222] border border-white shadow-black rounded-lg p-6 w-80 min-w-[300px]">
            <h3 className="text-xl font-bold mb-2 text-white text-center">Paket Basic</h3>
            <p className="text-white text-center">Rp 199.000</p>
            <br />
            <hr className="border-white" />
            <br />
            <ul className="list-none text-white">
              <li>2 Konsep Desain</li>
              <li>Pengerjaan 1-2 Hari</li>
              <li>Gratis Revisi 3x</li>
              <li>Format File JPG & PNG</li>
              <li>Logo 100% ORI</li>
            </ul>
            <br />
            <hr className="border-white" />
            <br />
            <div className="text-center">
              <button
                className="bg-[#0d6efd] hover:bg-[#ADD8E6] text-white py-2 px-4 rounded-lg transition duration-200"
                onClick={() => handleOrderClick("Paket Basic")}
                aria-label="Pesan Paket Basic"
              >
                Order Now
              </button>
            </div>
          </div>

          {/* Paket Standard */}
          <div className="bg-[#222222] border border-white shadow-black rounded-lg p-6 w-80 min-w-[300px]">
            <h3 className="text-xl font-bold mb-2 text-white text-center">Paket Standard</h3>
            <p className="text-white text-center">Rp 399.000</p>
            <br />
            <hr className="border-white" />
            <br />
            <ul className="list-none text-white">
              <li>4 Konsep Desain</li>
              <li>Pengerjaan 1-2 Hari</li>
              <li>Gratis Revisi 5x</li>
              <li>Format File JPG & PNG</li>
              <li>Logo 100% ORI</li>
            </ul>
            <br />
            <hr className="border-white" />
            <br />
            <div className="text-center">
              <button
                className="bg-[#0d6efd] hover:bg-[#ADD8E6] text-white py-2 px-4 rounded-lg transition duration-200"
                onClick={() => handleOrderClick("Paket Standard")}
                aria-label="Pesan Paket Standard"
              >
                Order Now
              </button>
            </div>
          </div>

          {/* Paket Premium */}
          <div className="bg-[#222222] border border-white shadow-black rounded-lg p-6 w-80 min-w-[300px]">
            <h3 className="text-xl font-bold mb-2 text-white text-center">Paket Premium</h3>
            <p className="text-white text-center">Rp 599.000</p>
            <br />
            <hr className="border-white" />
            <br />
            <ul className="list-none text-white">
              <li>6 Konsep Desain</li>
              <li>Pengerjaan 1-2 Hari</li>
              <li>Gratis Revisi 7x</li>
              <li>Format File JPG & PNG</li>
              <li>Logo 100% ORI</li>
            </ul>
            <br />
            <hr className="border-white" />
            <br />
            <div className="text-center">
              <button
                className="bg-[#0d6efd] hover:bg-[#ADD8E6] text-white py-2 px-4 rounded-lg transition duration-200"
                onClick={() => handleOrderClick("Paket Premium")}
                aria-label="Pesan Paket Premium"
              >
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceList;
