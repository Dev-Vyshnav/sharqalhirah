"use client";

import { useState } from "react";

export default function ContactSection() {
  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We specialize in steel warehouse construction and poultry farm project setups, including certified installation of equipment.",
    },
    {
      question: "Where are you located?",
      answer:
        "We are based in Dubai, UAE, and operate throughout the GCC region.",
    },
    {
      question: "Do you work with international brands?",
      answer:
        "Yes, we collaborate with leading global brands like Jansen, Techno, Salmet, Big Dutchman, and more.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="contact" className="bg-gray-100 py-20 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">
          Let’s Make Something Great Together!
        </h2>
      </div>

      {/* Contact Details + Map */}
      <div className="flex flex-col md:flex-row justify-center gap-12 max-w-6xl mx-auto mb-20">
        <div className="md:w-1/2 space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-700">
              Location
            </h3>
            <p className="text-gray-600 leading-relaxed">
             
SHARQ AL HIRAH TECH. CONT.<br />
Sharjah, uae P.O. Box : 61189
              
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-700">
              Telephone
            </h3>
            <p
              className="text-gray-600 cursor-pointer"
              onClick={() => (window.location.href = "tel:+97165357381")}
            >
              +971 50 479 5956
            </p>
            <h3 className="text-lg font-semibold mb-2 text-gray-700">Mobile</h3>
            <p
              className="text-gray-600 cursor-pointer"
              onClick={() => (window.location.href = "tel:+971569240131")}
            >
              +971 56 924 0131
            </p>
            <p
              className="text-gray-600 cursor-pointer"
              onClick={() => (window.location.href = "tel:+971505378083")}
            >
              +971 50 537 8083
            </p>
            <p
              className="text-gray-600 cursor-pointer"
              onClick={() => (window.location.href = "tel:+971503920571")}
            >
              +971 50 392 0571
            </p>
          </div>
        </div>
        <div className="md:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.1182965762587!2d55.44451187608404!3d25.30022927764486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5fa35c722a89%3A0xeb597a9a9a5da67!2sSharq%20Al%20Hirah%20Tech.%20Cont!5e0!3m2!1sen!2sin!4v1761767441345!5m2!1sen!2sin"
            width="100%"
            height="300"
            allowFullScreen
            loading="lazy"
            className="rounded-lg border-0 shadow-md"
          ></iframe>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">
          Frequently Asked Questions
        </h3>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border rounded-md bg-white">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full text-left px-4 py-3 font-medium text-gray-800 hover:bg-gray-50"
              >
                {faq.question}
              </button>
              {openIndex === idx && (
                <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
