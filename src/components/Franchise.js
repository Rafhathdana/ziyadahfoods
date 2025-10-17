import React, { useState } from "react";
import SectionTitle from "./atoms/SectionTitle";
import FeatureCard from "./atoms/FeatureCard";
import FranchiseCard from "./atoms/FranchiseCard";
import TestimonialCard from "./atoms/TestimonialCard";
import {
  RiTrophyFill,
  RiAwardLine,
  RiHeartLine,
  RiRocketLine,
  RiMapPinLine,
  RiShieldCheckLine,
  RiTruckLine,
  RiStoreLine,
  RiCheckLine,
  RiGraduationCapLine,
  RiStore3Line,
  RiMegaphoneLine,
  RiCustomerService2Line,
} from "@remixicon/react";

const TESTIMONIALS = [
  {
    person: "Raj Patel",
    image: "https://readdy.ai/api/search-image?query=Professional%20Indian%20businessman%20smiling%20confidently%2C%20successful%20franchise%20owner%20portrait%2C%20business%20success%20story%2C%20entrepreneur%20in%20formal%20attire%2C%20trustworthy%20business%20person&width=80&height=80&seq=franchise-owner-1&orientation=squarish",
    role: "Retail Outlet, Vadodara",
    text: "Sales grew steadily; customers love the premium taste. The franchise team made onboarding simple and efficient.",
    stars: 5,
  },
  {
    person: "Priya Sharma",
    image:"https://readdy.ai/api/search-image?query=Professional%20Indian%20businesswoman%20smiling%20warmly%2C%20successful%20female%20franchise%20owner%2C%20confident%20entrepreneur%20portrait%2C%20business%20success%20achievement%2C%20professional%20woman%20in%20business%20attire&width=80&height=80&seq=franchise-owner-2&orientation=squarish",
    role: "Franchisee, Pune",
    text: "The brand recognition and quality products helped us build a loyal customer base quickly.",
    stars: 5,
  },
  {
    person: "Amit Kumar",
    image:"https://readdy.ai/api/search-image?query=Professional%20Indian%20businessman%20with%20friendly%20smile%2C%20successful%20franchise%20partner%2C%20business%20owner%20achievement%20story%2C%20confident%20entrepreneur%20portrait%2C%20successful%20business%20person&width=80&height=80&seq=franchise-owner-3&orientation=squarish",
    role: "Distributor, Lucknow",
    text: "Supply chain and training support are top-notch. Great margins and repeat customers.",
    stars: 5,
  },
];

export default function Franchise() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    investment: "",
    business: "",
    location: "",
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
      <section class="relative py-32 bg-cover bg-center" style={{ backgroundImage: "linear-gradient(rgba(12, 35, 66, 0.8), rgba(30, 58, 95, 0.8)), url(&quot;https://readdy.ai/api/search-image?query=Successful%20franchise%20business%20partnership%2C%20modern%20retail%20store%20front%20with%20ice%20cream%20shop%2C%20business%20opportunity%20concept%2C%20professional%20entrepreneurs%20meeting%2C%20franchise%20expansion%20and%20growth%20opportunity&amp;width=1920&amp;height=800&amp;seq=franchise-hero&amp;orientation=landscape&quot;)" }}>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 class="text-5xl md:text-6xl font-bold text-white mb-8">Franchise <span class="text-orange-300">Opportunities</span></h1>
          <p class="text-xl md:text-2xl text-gray-100 max-w-4xl mx-auto leading-relaxed mb-6">Join the Ziyadah Foods family and be part of our mission to bring premium frozen treats to every corner of India.</p>
          <p class="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">Build a profitable business with our proven franchise model.</p>
          <div class="mt-12">
            <a href="#apply" class="bg-[#0c2342] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#944907] transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer">Apply Now</a>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}

      <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span class="text-[#0c2342]">Ziyadah Foods</span>{" "}
              Franchise?
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Partner with a growing brand that values quality, innovation, and
              profitability.
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="text-center bg-[#0c2342]/5 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div class="w-20 h-20 bg-[#0c2342] rounded-full flex items-center justify-center mx-auto mb-6">
                <RiTrophyFill size={32} color="white" />
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">
                Proven Business Model
              </h3>
              <p class="text-gray-600 leading-relaxed">
                Join a successful franchise system with established operational
                procedures and proven profitability.
              </p>
            </div>
            <div class="text-center bg-orange-50 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div class="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <RiAwardLine size={32} color="white" />
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">
                Premium Brand
              </h3>
              <p class="text-gray-600 leading-relaxed">
                Leverage the strength of our premium brands - Fruitpopz and
                Plummy - with strong market recognition.
              </p>
            </div>
            <div class="text-center bg-blue-50 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div class="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <RiHeartLine size={32} color="white" />
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">
                Complete Support
              </h3>
              <p class="text-gray-600 leading-relaxed">
                Get comprehensive training, marketing support, and ongoing
                operational assistance from our expert team.
              </p>
            </div>
            <div class="text-center bg-green-50 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div class="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <RiShieldCheckLine size={32} color="white" />
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">
                Quality Assurance
              </h3>
              <p class="text-gray-600 leading-relaxed">
                Benefit from our strict quality control measures and premium
                ingredient sourcing standards.
              </p>
            </div>
            <div class="text-center bg-indigo-50 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div class="w-20 h-20 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <RiRocketLine size={32} color="white" />
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">
                Growing Market
              </h3>
              <p class="text-gray-600 leading-relaxed">
                Enter the expanding frozen treats market with products that meet
                modern health-conscious consumer demands.
              </p>
            </div>
            <div class="text-center bg-purple-50 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div class="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <RiMapPinLine size={32} color="white" />
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">
                Territory Protection
              </h3>
              <p class="text-gray-600 leading-relaxed">
                Enjoy exclusive territorial rights and protection from
                competition within your designated area.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MODELS */}
      <section class="py-24 bg-gradient-to-r from-[#0c2342]/5 to-[#1e3a5f]/5">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Franchise Models
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the franchise model that best fits your investment capacity
              and business goals.
            </p>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div class="bg-white p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow duration-300 border-2 border-[#0c2342]/20">
              <div class="text-center mb-8">
                <div class="w-20 h-20 bg-[#0c2342] rounded-full flex items-center justify-center mx-auto mb-6">
                  <RiStoreLine size={32} color="white" />
                </div>
                <h3 class="text-3xl font-bold text-gray-900 mb-3">
                  Retail Outlet Franchise
                </h3>
                <p class="text-gray-600 text-lg">
                  Own and operate your own Ziyadah Foods retail outlet with
                  complete range of products and dedicated customer service.
                </p>
              </div>
              <div class="space-y-4 mb-8">
                <div class="flex items-center text-gray-600">
                  <RiCheckLine size={24} color="#0c2342" className="mr-3" />
                  <span>200-400 sq ft area required</span>
                </div>
                <div class="flex items-center text-gray-600">
                  <RiCheckLine size={24} color="#0c2342" className="mr-3" />
                  <span>Complete store setup</span>
                </div>
                <div class="flex items-center text-gray-600">
                  <RiCheckLine size={24} color="#0c2342" className="mr-3" />
                  <span>Marketing support</span>
                </div>
                <div class="flex items-center text-gray-600">
                  <RiCheckLine size={24} color="#0c2342" className="mr-3" />
                  <span>Training &amp; operations manual</span>
                </div>
              </div>
              <div class="border-t pt-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
                  <div>
                    <p class="text-sm text-gray-500 mb-1">Investment</p>
                    <p class="text-2xl font-bold text-[#0c2342]">₹5-8 Lakhs</p>
                  </div>
                  <div>
                    <p class="text-sm text-gray-500 mb-1">ROI</p>
                    <p class="text-2xl font-bold text-[#0c2342]">
                      25-35% annually
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-white p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow duration-300 border-2 border-orange-200">
              <div class="text-center mb-8">
                <div class="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <RiTruckLine size={32} color="white" />
                </div>
                <h3 class="text-3xl font-bold text-gray-900 mb-3">
                  Distribution Franchise
                </h3>
                <p class="text-gray-600 text-lg">
                  Become a distributor for your region and supply our products
                  to multiple retail outlets, restaurants, and institutions.
                </p>
              </div>
              <div class="space-y-4 mb-8">
                <div class="flex items-center text-gray-600">
                  <RiCheckLine size={24} color="orange-500" className="mr-3" />
                  <span>1000-2000 sq ft warehouse</span>
                </div>
                <div class="flex items-center text-gray-600">
                  <RiCheckLine size={24} color="orange-500" className="mr-3" />
                  <span>Cold storage setup</span>
                </div>
                <div class="flex items-center text-gray-600">
                  <RiCheckLine size={24} color="orange-500" className="mr-3" />
                  <span>Delivery vehicle</span>
                </div>
                <div class="flex items-center text-gray-600">
                  <RiCheckLine size={24} color="orange-500" className="mr-3" />
                  <span>Territory rights</span>
                </div>
              </div>
              <div class="border-t pt-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
                  <div>
                    <p class="text-sm text-gray-500 mb-1">Investment</p>
                    <p class="text-2xl font-bold text-orange-500">
                      ₹15-25 Lakhs
                    </p>
                  </div>
                  <div>
                    <p class="text-sm text-gray-500 mb-1">ROI</p>
                    <p class="text-2xl font-bold text-orange-500">
                      30-40% annually
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUPPORT & TRAINING */}
      <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Complete{" "}
              <span class="text-[#0c2342]">Support &amp; Training</span>
            </h2>
            <p class="text-xl text-gray-600 max-w-4xl mx-auto">
              We provide comprehensive support to ensure your franchise success
              from day one. Our proven training programs and ongoing assistance
              help you build and grow a profitable business.
            </p>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                alt="Franchise Training Program"
                class="rounded-3xl shadow-2xl object-cover object-top w-full h-96"
                src="https://readdy.ai/api/search-image?query=Professional%20business%20training%20session%20with%20franchise%20owners%2C%20modern%20training%20facility%2C%20business%20mentorship%20and%20support%2C%20team%20of%20trainers%20helping%20new%20franchise%20partners%2C%20comprehensive%20business%20education%20program&amp;width=600&amp;height=400&amp;seq=franchise-training&amp;orientation=landscape"
              />
            </div>
            <div>
              <h3 class="text-3xl font-bold text-gray-900 mb-8">
                Initial Training Program
              </h3>
              <div class="space-y-6">
                <div class="flex items-start space-x-4">
                  <div class="w-8 h-8 bg-[#0c2342] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <RiGraduationCapLine size={18} color="white" />
                  </div>
                  <div>
                    <h4 class="text-xl font-semibold text-gray-900 mb-2">
                      Comprehensive 2-week training
                    </h4>
                    <p class="text-gray-600">
                      Covering operations, customer service, inventory
                      management, and business administration.
                    </p>
                  </div>
                </div>
                <div class="flex items-start space-x-4">
                  <div class="w-8 h-8 bg-[#0c2342] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <RiStore3Line size={18} color="white" />
                  </div>
                  <div>
                    <h4 class="text-xl font-semibold text-gray-900 mb-2">
                      Store Setup Assistance
                    </h4>
                    <p class="text-gray-600">
                      Complete store design, equipment installation, and
                      interior setup with our expert team.
                    </p>
                  </div>
                </div>
                <div class="flex items-start space-x-4">
                  <div class="w-8 h-8 bg-[#0c2342] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <RiMegaphoneLine size={18} color="white" />
                  </div>
                  <div>
                    <h4 class="text-xl font-semibold text-gray-900 mb-2">
                      Marketing Support
                    </h4>
                    <p class="text-gray-600">
                      Launch campaigns, promotional materials, digital
                      marketing, and ongoing brand support.
                    </p>
                  </div>
                </div>
                <div class="flex items-start space-x-4">
                  <div class="w-8 h-8 bg-[#0c2342] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <RiTruckLine size={18} color="white" />
                  </div>
                  <div>
                    <h4 class="text-xl font-semibold text-gray-900 mb-2">
                      Supply Chain
                    </h4>
                    <p class="text-gray-600">
                      Reliable product supply, inventory management, and
                      logistics support nationwide.
                    </p>
                  </div>
                </div>
                <div class="flex items-start space-x-4">
                  <div class="w-8 h-8 bg-[#0c2342] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <RiCustomerService2Line size={18} color="white" />
                  </div>
                  <div>
                    <h4 class="text-xl font-semibold text-gray-900 mb-2">
                      Ongoing Support
                    </h4>
                    <p class="text-gray-600">
                      24/7 helpline, regular business reviews, and continuous
                      guidance for growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-12 bg-[#f7fbff]">
        <div className="max-w-6xl mx-auto px-4">
          <SectionTitle
            title="Success Stories"
            subtitle="Hear from our successful franchise partners across India"
          />
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.person} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* APPLY FORM */}
      <section id="apply" className="max-w-4xl mx-auto px-4 py-16">
        <SectionTitle
          title="Apply for Franchise"
          subtitle="Take the first step towards owning a successful Ziyadah Foods franchise"
        />
        <div className="bg-white rounded-2xl p-6 md:p-8 soft-shadow mt-6">
          {sent ? (
            <p className="text-mint">
              Thanks! Our franchise team will contact you soon.
            </p>
          ) : (
            <form className="grid gap-3" onSubmit={onSubmit}>
              <div className="grid md:grid-cols-2 gap-3">
                <input
                  className="rounded-xl border px-3 py-2"
                  placeholder="Full name"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  required
                />
                <input
                  className="rounded-xl border px-3 py-2"
                  placeholder="Email address"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  required
                />
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                <input
                  className="rounded-xl border px-3 py-2"
                  placeholder="Phone number"
                  name="phone"
                  value={form.phone}
                  onChange={onChange}
                />
                <input
                  className="rounded-xl border px-3 py-2"
                  placeholder="Investment capacity (₹)"
                  name="investment"
                  value={form.investment}
                  onChange={onChange}
                />
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                <input
                  className="rounded-xl border px-3 py-2"
                  placeholder="Business experience"
                  name="business"
                  value={form.business}
                  onChange={onChange}
                />
                <input
                  className="rounded-xl border px-3 py-2"
                  placeholder="Preferred location (city)"
                  name="location"
                  value={form.location}
                  onChange={onChange}
                />
              </div>
              <textarea
                className="rounded-xl border px-3 py-2"
                rows="4"
                placeholder="Additional information"
                name="message"
                value={form.message}
                onChange={onChange}
              />
              <button className="btn-primary justify-center">
                Submit Franchise Application
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
