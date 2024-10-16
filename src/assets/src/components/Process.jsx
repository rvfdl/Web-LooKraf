// eslint-disable-next-line no-unused-vars
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
    text: "Konsultasi Awal",
  },
  {
    Icon: DocumentCheckIcon,
    text: "Mengisi Formulir",
  },
  {
    Icon: CreditCardIcon,
    text: "Pembayaran",
  },
  {
    Icon: ArrowTrendingUpIcon,
    text: "Pengerjaan",
  },
  {
    Icon: CheckBadgeIcon,
    text: "Tahap Revisi - Final",
  },
];

const Process = () => (
  <section id="process" className="bg-[#212529] text-white py-24">
    <h2 className="text-3xl font-bold mb-4 text-center">Proses Pemesanan</h2>
    <div className="flex justify-center">
      <hr className="w-20" />
    </div>
    <br />
    <div className="flex justify-center space-x-1 mb-4">
      <p className="font-bold">Anti</p>
      <p>Ribet, Proses Secepat</p>
      <p className="font-bold">Kilat.</p>
    </div>
    <div className="flex flex-col items-center max-w-md mx-auto mt-16">
      <ul className="space-y-8">
        {processData.map(({ Icon, text }, index) => (
          <li key={index} className="relative flex items-center group">
            <div className="flex items-center space-x-4 text-left">
              <div className="flex-shrink-0 w-10 h-10">
                <Icon className="w-full h-full text-white transition duration-200 group-hover:text-blue-400" aria-label={text} />
              </div>
              <div>
                <p className="text-base font-medium">{text}</p>
              </div>
            </div>
            {index < processData.length - 1 && (
              <div
                className="absolute top-8 left-5 transform -translate-x-1/2 h-12 w-0.5 bg-gray-300"
                aria-hidden="true"
              ></div>
            )}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Process;
