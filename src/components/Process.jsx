
import React from "react";
import {
  ChatBubbleLeftRightIcon,
  DocumentCheckIcon,
  CreditCardIcon,
  ArrowTrendingUpIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";

const processData = [
  {
    Icon: ChatBubbleLeftRightIcon,
    number: "01",
    title: "Konsultasi Awal",
    description:
      "Diskusikan kebutuhan, konsep, dan ide logo yang sesuai dengan identitas bisnis Anda.",
  },
  {
    Icon: DocumentCheckIcon,
    number: "02",
    title: "Mengisi Formulir",
    description:
      "Lengkapi formulir pemesanan untuk memberikan informasi detail mengenai desain yang diinginkan.",
  },
  {
    Icon: CreditCardIcon,
    number: "03",
    title: "Pembayaran",
    description:
      "Lakukan pembayaran sesuai paket layanan yang telah dipilih untuk memulai proses desain.",
  },
  {
    Icon: ArrowTrendingUpIcon,
    number: "04",
    title: "Pengerjaan",
    description:
      "Tim kami mulai merancang logo berdasarkan konsep dan kebutuhan yang telah disepakati.",
  },
  {
    Icon: CheckBadgeIcon,
    number: "05",
    title: "Revisi & Final",
    description:
      "Logo memasuki tahap revisi hingga hasil akhir siap dan sesuai dengan ekspektasi Anda.",
  },
];

const Process = () => (
  <section
    id="process"
    className="relative overflow-hidden bg-gradient-to-b from-[#212529] to-[#252930] text-white py-24 px-6"
  >
    {/* Background Decoration */}
    <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/[0.06] rounded-full blur-[120px] pointer-events-none" />

    <div className="relative max-w-6xl mx-auto">

      {/* Heading */}
      <div className="text-center mb-16">
        <span className="text-purple-300 text-xs md:text-sm font-semibold tracking-[0.3em] uppercase">
          How It Works
        </span>

        <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-5">
          Proses Pemesanan
        </h2>

        <div className="w-16 h-1 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-indigo-400" />

        <p className="mt-6 text-gray-400 text-sm md:text-base">
          Anti ribet, proses secepat <span className="text-white font-semibold">kilat.</span>
          <br className="hidden md:block" />
          Ikuti lima langkah mudah untuk mendapatkan logo impian Anda.
        </p>
      </div>

      {/* Desktop Timeline */}
      <div className="hidden md:grid grid-cols-5 gap-5">
        {processData.map(({ Icon, number, title, description }, index) => (
          <div key={number} className="relative group">

            {/* Connector */}
            {index !== processData.length - 1 && (
              <div className="absolute top-10 left-[65%] w-[90%] h-px bg-gradient-to-r from-purple-400/60 to-gray-600/20" />
            )}

            {/* Card */}
            <div className="relative h-full min-h-[290px] bg-[#2a2f36] border border-white/[0.08] rounded-2xl p-5 transition-all duration-300 hover:-translate-y-2 hover:border-purple-400/50 hover:shadow-[0_10px_35px_rgba(139,92,246,0.10)]">

              <div className="flex justify-between items-center mb-8">
                <div className="w-12 h-12 rounded-xl bg-purple-400/10 border border-purple-400/20 flex items-center justify-center text-purple-300 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>

                <span className="text-3xl font-bold text-white/[0.08]">
                  {number}
                </span>
              </div>

              <h3 className="font-bold text-base mb-3 group-hover:text-purple-300 transition-colors">
                {title}
              </h3>

              <p className="text-gray-400 text-xs leading-6">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Timeline */}
      <div className="md:hidden max-w-lg mx-auto">
        <div className="space-y-5">
          {processData.map(({ Icon, number, title, description }, index) => (
            <div key={number} className="relative flex gap-5 group">

              {/* Timeline Line */}
              {index !== processData.length - 1 && (
                <div className="absolute left-6 top-14 -bottom-5 w-px bg-gradient-to-b from-purple-400/60 to-gray-600/20" />
              )}

              {/* Icon */}
              <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-xl bg-[#303640] border border-purple-400/30 flex items-center justify-center text-purple-300 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                <Icon className="w-6 h-6" />
              </div>

              {/* Content */}
              <div className="flex-1 bg-[#2a2f36] border border-white/[0.08] rounded-xl p-5 group-hover:border-purple-400/40 transition-all duration-300">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-base group-hover:text-purple-300 transition-colors">
                    {title}
                  </h3>
                  <span className="text-xs font-bold text-purple-300/50">
                    {number}
                  </span>
                </div>

                <p className="text-gray-400 text-xs leading-6">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-14 text-center">
        <p className="text-gray-500 text-xs tracking-wider">
          <span className="text-purple-300">✦</span> SIMPLE PROCESS, CREATIVE RESULT
        </p>
      </div>

    </div>
  </section>
);

export default Process;
