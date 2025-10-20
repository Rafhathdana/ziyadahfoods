import React, { useState } from "react";
import SectionTitle from "./atoms/SectionTitle";
import FAQAccordion from "./atoms/FAQAccordion";
import { RiFacebookBoxLine, RiFacebookLine, RiInstagramLine, RiMailLine, RiMapPinLine, RiPhoneLine, RiTimeLine, RiTwitterXLine, RiWhatsappLine, RiYoutubeLine } from "@remixicon/react";

const FAQS = [
  {
    q: "What makes your ice cream premium?",
    a: "Fruitpopz uses 100% dairy with minimum 10% fat for richness and quality. We avoid added water and artificial fillers.",
  },
  {
    q: "Do you offer franchise opportunities?",
    a: "Yes! We provide end-to-end support including training, marketing, and supply chain. Contact our franchise team for details.",
  },
  {
    q: "Are your products available for bulk orders?",
    a: "Absolutely. We cater to events, parties, and retail businesses. Contact our sales team for pricing and volume discounts.",
  },
  {
    q: "Do you have sugar-free options?",
    a: "Yes—premium sugar-free variants with prebiotics and probiotics for gut health, without compromising on taste.",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "General Inquiry",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div>
      {/* HERO */}
      <section
        class="relative py-32 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(12, 35, 66, 0.6), rgba(30, 58, 95, 0.8)), url(/images/contact.jpg)",
        }}
      >
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 class="text-5xl md:text-6xl font-bold text-white mb-8">
            Get In <span class="text-[#cc9c25]">Touch</span>
          </h1>
          <p class="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            We'd love to hear from you. Send us a message and we'll respond as
            soon as possible.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 class="text-4xl font-bold text-gray-900 mb-8">
                Contact Information
              </h2>
              <p class="text-lg text-gray-600 mb-12 leading-relaxed">
                Ready to experience our premium frozen treats? Get in touch with
                us for orders, franchise opportunities, or any questions you may
                have.
              </p>
              <div class="space-y-8">
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-[#0c2342] rounded-full flex items-center justify-center flex-shrink-0">
                    <RiMapPinLine size={24} color="white" />
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">
                      Head Office
                    </h3>
                    <p class="text-gray-600 leading-relaxed">
                      Ziyadah Foods Private Limited
                      <br />
                      New Delhi, India
                      <br />
                      PIN: 110001
                    </p>
                  </div>
                </div>
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-[#0c2342] rounded-full flex items-center justify-center flex-shrink-0">
                    <RiPhoneLine size={24} color="white" />
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">
                      Phone Numbers
                    </h3>
                    <p class="text-gray-600">
                      Sales: +91 98765 43210
                      <br />
                      Support: +91 98765 43211
                      <br />
                      Franchise: +91 98765 43212
                    </p>
                  </div>
                </div>
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-[#0c2342] rounded-full flex items-center justify-center flex-shrink-0">
                    <RiMailLine size={24} color="white" />
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">
                      Email Addresses
                    </h3>
                    <p class="text-gray-600">
                      General: info@ziyadahfoods.com
                      <br />
                      Sales: sales@ziyadahfoods.com
                      <br />
                      Support: support@ziyadahfoods.com
                    </p>
                  </div>
                </div>
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-[#0c2342] rounded-full flex items-center justify-center flex-shrink-0">
                   <RiTimeLine size={24} color="white" />
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">
                      Business Hours
                    </h3>
                    <p class="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 9:00 AM - 4:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              <div class="mt-12">
                <h3 class="text-xl font-semibold text-gray-900 mb-6">
                  Follow Us
                </h3>
                <div class="flex space-x-4">
                  <a
                    href="#"
                    class="w-12 h-12 bg-[#0c2342] rounded-full flex items-center justify-center hover:bg-[#0a1d35] transition-colors cursor-pointer"
                  >
                   <RiFacebookLine size={24} color="white" />
                  </a>
                  <a
                    href="#"
                    class="w-12 h-12 bg-[#0c2342] rounded-full flex items-center justify-center hover:bg-[#0a1d35] transition-colors cursor-pointer"
                  >
                   <RiInstagramLine size={24} color="white" />
                  </a>
                  <a
                    href="#"
                    class="w-12 h-12 bg-[#0c2342] rounded-full flex items-center justify-center hover:bg-[#0a1d35] transition-colors cursor-pointer"
                  >
                   <RiTwitterXLine size={24} color="white" />
                  </a>
                 
                  <a
                    href="#"
                    class="w-12 h-12 bg-[#0c2342] rounded-full flex items-center justify-center hover:bg-[#0a1d35] transition-colors cursor-pointer"
                  >
                    <RiWhatsappLine size={24} color="white" />
                  </a>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 p-8 rounded-3xl shadow-xl">
              <h2 class="text-3xl font-bold text-gray-900 mb-8">
                Send Us a Message
              </h2>
              <form id="contact-form" class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      for="name"
                      class="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      id="name"
                      required=""
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0c2342] focus:border-transparent transition-all duration-300 text-sm"
                      placeholder="Enter your full name"
                      type="text"
                      value=""
                      name="name"
                    />
                  </div>
                  <div>
                    <label
                      for="email"
                      class="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
                      required=""
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0c2342] focus:border-transparent transition-all duration-300 text-sm"
                      placeholder="Enter your email address"
                      type="email"
                      value=""
                      name="email"
                    />
                  </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      for="phone"
                      class="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0c2342] focus:border-transparent transition-all duration-300 text-sm"
                      placeholder="Enter your phone number"
                      type="tel"
                      value=""
                      name="phone"
                    />
                  </div>
                  <div>
                    <label
                      for="inquiryType"
                      class="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Inquiry Type
                    </label>
                    <div class="relative">
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0c2342] focus:border-transparent transition-all duration-300 text-sm pr-8 appearance-none bg-white cursor-pointer"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="orders">Product Orders</option>
                        <option value="franchise">Franchise Opportunity</option>
                        <option value="support">Customer Support</option>
                        <option value="feedback">Feedback</option>
                      </select>
                      <i class="ri-arrow-down-s-line absolute right-3 top-3 text-gray-400 pointer-events-none"></i>
                    </div>
                  </div>
                </div>
                <div>
                  <label
                    for="subject"
                    class="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    id="subject"
                    required=""
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0c2342] focus:border-transparent transition-all duration-300 text-sm"
                    placeholder="Enter the subject of your message"
                    type="text"
                    value=""
                    name="subject"
                  />
                </div>
                <div>
                  <label
                    for="message"
                    class="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required=""
                    rows="6"
                    maxlength="500"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0c2342] focus:border-transparent transition-all duration-300 resize-none text-sm"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                  <div class="text-right text-xs text-gray-500 mt-1">
                    0/500 characters
                  </div>
                </div>
                <button
                  type="submit"
                  class="w-full bg-[#0c2342] text-white py-4 rounded-lg font-semibold hover:bg-[#0a1d35] transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
                >
                  <div class="flex items-center justify-center">
                    <i class="ri-send-plane-line text-xl mr-2"></i>Send Message
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      {/* <section className="max-w-6xl mx-auto px-4">
        <SectionTitle
          title="Find Us"
          subtitle="Visit our head office or one of our retail locations across India"
        />
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mt-10">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.48346631687!2d77.06889754725782!3d28.52725110779911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1703847294847!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Ziyadah Foods Location"></iframe>
        </div>
      </section> */}

      {/* FAQ */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <SectionTitle
          title="Frequently Asked Questions"
          subtitle="Quick answers about our products and services"
        />
        <div className="mt-6">
          <FAQAccordion items={FAQS} />
        </div>
      </section>
    </div>
  );
}
