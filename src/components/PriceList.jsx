
import React, { useState } from "react";
import {
  CheckIcon,
  XMarkIcon,
  SparklesIcon,
  StarIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

const packages = [
  {
    name: "Basic",
    price: "199.000",
    description: "Pilihan tepat untuk memulai identitas bisnis Anda.",
    concepts: "2 Konsep Desain",
    revisions: "Gratis Revisi 3x",
    popular: false,
    Icon: StarIcon,
    features: [
      "2 Konsep Desain",
      "Pengerjaan 1–2 Hari",
      "Gratis Revisi 3x",
      "Format File JPG & PNG",
      "Logo 100% Original",
    ],
  },
  {
    name: "Standard",
    price: "399.000",
    description: "Lebih banyak pilihan untuk identitas brand yang kuat.",
    concepts: "4 Konsep Desain",
    revisions: "Gratis Revisi 5x",
    popular: true,
    Icon: SparklesIcon,
    features: [
      "4 Konsep Desain",
      "Pengerjaan 1–2 Hari",
      "Gratis Revisi 5x",
      "Format File JPG & PNG",
      "Logo 100% Original",
    ],
  },
  {
    name: "Premium",
    price: "599.000",
    description: "Solusi lengkap untuk brand yang ingin tampil maksimal.",
    concepts: "6 Konsep Desain",
    revisions: "Gratis Revisi 7x",
    popular: false,
    Icon: RocketLaunchIcon,
    features: [
      "6 Konsep Desain",
      "Pengerjaan 1–2 Hari",
      "Gratis Revisi 7x",
      "Format File JPG & PNG",
      "Logo 100% Original",
    ],
  },
];

const PriceList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [packageType, setPackageType] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [slogan, setSlogan] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("");

  const handleOrderClick = (selectedPackage) => {
    setPackageType(selectedPackage);
    setIsModalOpen(true);
  };

  const resetForm = () => {
    setBusinessName("");
    setSlogan("");
    setDescription("");
    setColor("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!businessName.trim() || !description.trim() || !color.trim()) {
      alert("Nama usaha, deskripsi, dan warna tidak boleh kosong!");
      return;
    }

    const phoneNumber = "6285747485067";

    const message = `
Halo, saya tertarik dengan *${packageType}*.

--------------------------------
*INFORMASI PESANAN*
--------------------------------
*Nama Usaha:* ${businessName}
*Slogan:* ${slogan || "-"}
*Deskripsi Usaha:* ${description}
*Warna yang Diinginkan:* ${color}
--------------------------------

Mohon informasi lebih lanjut mengenai pemesanan. Terima kasih!
    `.trim();

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");

    setIsModalOpen(false);
    resetForm();
  };

  return (
    <section
      id="price"
      className="relative overflow-hidden bg-gradient-to-b from-[#252930] to-[#212529] text-white py-24 px-6"
    >
      {/* Background Decoration */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/[0.06] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-purple-300 text-xs md:text-sm font-semibold tracking-[0.3em] uppercase">
            Our Pricing
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-5">
            Pricelist
          </h2>

          <div className="w-16 h-1 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-indigo-400" />

          <p className="max-w-2xl mx-auto mt-6 text-gray-400 text-sm md:text-base leading-7">
            Pilih paket desain logo yang sesuai dengan kebutuhan bisnis Anda.
            Kami siap membantu menciptakan identitas visual yang unik dan
            profesional.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 items-stretch">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative group rounded-2xl p-[1px] transition-all duration-500 hover:-translate-y-2 ${
                pkg.popular
                  ? "bg-gradient-to-br from-purple-400 via-indigo-400 to-purple-600 shadow-[0_10px_45px_rgba(139,92,246,0.12)] md:scale-[1.04] md:my-0"
                  : "bg-white/10 hover:bg-purple-400/50"
              }`}
            >
              <div className="relative h-full flex flex-col bg-[#292e35] rounded-2xl p-7 md:p-8 overflow-hidden">

                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-[10px] font-bold tracking-wider px-4 py-2 rounded-bl-xl">
                    MOST POPULAR
                  </div>
                )}

                {/* Package Icon */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                  pkg.popular
                    ? "bg-purple-500/20 text-purple-300"
                    : "bg-white/[0.05] text-gray-300"
                }`}>
                  <pkg.Icon className="w-6 h-6" />
                </div>

                {/* Package Name */}
                <h3 className="text-2xl font-bold mb-2">
                  Paket {pkg.name}
                </h3>

                <p className="text-gray-400 text-sm leading-6 min-h-[48px]">
                  {pkg.description}
                </p>

                {/* Price */}
                <div className="mt-7 mb-7">
                  <span className="text-gray-400 text-sm">Mulai dari</span>

                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-gray-300 text-base font-medium">
                      Rp
                    </span>
                    <span className="text-4xl font-extrabold tracking-tight">
                      {pkg.price}
                    </span>
                  </div>
                </div>

                <div className="border-t border-white/10 mb-6" />

                {/* Features */}
                <div className="flex-1">
                  <p className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-5">
                    Yang Anda Dapatkan
                  </p>

                  <ul className="space-y-4">
                    {pkg.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-sm text-gray-300"
                      >
                        <span className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                          pkg.popular
                            ? "bg-purple-500/20 text-purple-300"
                            : "bg-white/10 text-gray-300"
                        }`}>
                          <CheckIcon className="w-3 h-3" />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Order Button */}
                <button
                  onClick={() => handleOrderClick(`Paket ${pkg.name}`)}
                  aria-label={`Pesan Paket ${pkg.name}`}
                  className={`w-full mt-9 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    pkg.popular
                      ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:shadow-lg hover:shadow-purple-500/20 hover:brightness-110"
                      : "bg-white/[0.07] border border-white/10 text-white hover:bg-purple-500 hover:border-purple-500"
                  }`}
                >
                  Order Now
                  <span className="ml-2">→</span>
                </button>

              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-14 text-center">
          <p className="text-gray-400 text-sm">
            Membutuhkan desain selain logo?
            <span className="text-purple-300 font-semibold ml-1">
              Hubungi kami untuk informasi lebih lanjut.
            </span>
          </p>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />

          {/* Modal Content */}
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="order-modal-title"
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-[#292e35] border border-white/10 rounded-2xl shadow-2xl p-6 md:p-8 animate-[fadeIn_0.2s_ease-out]"
          >

            {/* Modal Header */}
            <div className="flex justify-between items-start mb-7">
              <div>
                <span className="text-purple-300 text-xs font-semibold tracking-widest uppercase">
                  LOOKRAF ORDER
                </span>

                <h3
                  id="order-modal-title"
                  className="text-2xl font-bold mt-2"
                >
                  Informasi Pesanan
                </h3>

                <p className="text-gray-400 text-sm mt-2">
                  Paket pilihan: <span className="text-purple-300 font-semibold">{packageType}</span>
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition"
                aria-label="Tutup modal"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Nama Usaha <span className="text-purple-400">*</span>
                </label>
                <input
                  type="text"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="Contoh: Kopi Senja"
                  required
                  className="w-full bg-[#212529] border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-purple-400 transition placeholder:text-gray-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Slogan <span className="text-gray-500">(Opsional)</span>
                </label>
                <input
                  type="text"
                  value={slogan}
                  onChange={(e) => setSlogan(e.target.value)}
                  placeholder="Contoh: Taste the Happiness"
                  className="w-full bg-[#212529] border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-purple-400 transition placeholder:text-gray-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Deskripsi Usaha <span className="text-purple-400">*</span>
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Ceritakan tentang usaha dan konsep logo yang diinginkan..."
                  required
                  rows={3}
                  className="w-full bg-[#212529] border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-purple-400 transition placeholder:text-gray-600 resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Warna yang Diinginkan <span className="text-purple-400">*</span>
                </label>
                <input
                  type="text"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  placeholder="Contoh: Hitam, putih, dan emas"
                  required
                  className="w-full bg-[#212529] border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-purple-400 transition placeholder:text-gray-600"
                />
              </div>

              {/* Submit Buttons */}
              <div className="flex flex-col-reverse sm:flex-row gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 py-3 rounded-xl border border-white/10 text-gray-300 text-sm font-semibold hover:bg-white/5 transition"
                >
                  Batal
                </button>

                <button
                  type="submit"
                  className="flex-1 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-sm font-semibold hover:brightness-110 transition"
                >
                  Pesan via WhatsApp →
                </button>
              </div>

              <p className="text-center text-gray-500 text-xs">
                Informasi pesanan akan diteruskan melalui WhatsApp.
              </p>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default PriceList;
