import React, { useState } from "react";

const PriceList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [packageType, setPackageType] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [slogan, setSlogan] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("");

  // Fungsi untuk membuka modal dan set jenis paket
  const handleOrderClick = (selectedPackage) => {
    setPackageType(selectedPackage);
    setIsModalOpen(true);
  };

  // Fungsi untuk mengirim pesan ke WhatsApp setelah form di-submit
  const handleSubmit = () => {
    if (!businessName || !description || !color) {
      alert("Nama usaha, deskripsi, dan warna tidak boleh kosong!");
      return;
    }

    const phoneNumber = "6285747485067"; // Ganti dengan nomor WhatsApp Anda
    let message = `Halo, saya tertarik dengan *${packageType}.* \n-------------------------------------------- \n*Nama Usaha:* ${businessName}.\n*Deskripsi:* ${description}.\n*Warna:* ${color}`;

    // Tambahkan slogan jika ada
    if (slogan) {
      message += `\n*Slogan:* ${slogan} \n--------------------------------------------`;
    }

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");

    // Tutup modal setelah pesan dikirim
    setIsModalOpen(false);
    resetForm();
  };

  // Fungsi untuk mereset form setelah submit
  const resetForm = () => {
    setBusinessName("");
    setSlogan("");
    setDescription("");
    setColor("");
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
      <div className="overflow-x-auto mx-4 md:mx-0">
        <div className="flex space-x-4 md:grid md:grid-cols-3 gap-8 text-black md:justify-items-center">
          <div className="bg-[#222222] border border-white shadow-black rounded-lg p-6 w-80 min-w-[300px]">
            <h3 className="text-xl font-bold mb-2 text-white text-center">
              Paket Basic
            </h3>
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

          <div className="bg-[#222222] border border-white shadow-black rounded-lg p-6 w-80 min-w-[300px]">
            <h3 className="text-xl font-bold mb-2 text-white text-center">
              Paket Standard
            </h3>
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

          <div className="bg-[#222222] border border-white shadow-black rounded-lg p-6 w-80 min-w-[300px]">
            <h3 className="text-xl font-bold mb-2 text-white text-center">
              Paket Premium
            </h3>
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

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full z-50 text-black">
            <h3 className="text-xl font-bold mb-4">Isi Informasi Pesanan</h3>
            <label className="block mb-2">Nama Usaha:</label>
            <input
              type="text"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg mb-4"
            />
            <label className="block mb-2">Slogan (opsional):</label>
            <input
              type="text"
              value={slogan}
              onChange={(e) => setSlogan(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg mb-4"
            />
            <label className="block mb-2">Deskripsi Usaha:</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg mb-4"
            />
            <label className="block mb-2">Warna yang Digunakan:</label>
            <input
              type="text"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg mb-4"
            />
            <div className="flex justify-end space-x-4">
              <button
                className="bg-gray-500 text-white py-2 px-4 rounded-lg"
                onClick={() => setIsModalOpen(false)}
              >
                Batal
              </button>
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded-lg"
                onClick={handleSubmit}
              >
                Kirim
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PriceList;
