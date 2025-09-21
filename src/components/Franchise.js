
import React, { useState } from "react";
import SectionTitle from "./atoms/SectionTitle";
import FeatureCard from "./atoms/FeatureCard";
import FranchiseCard from "./atoms/FranchiseCard";
import TestimonialCard from "./atoms/TestimonialCard";

const VALUES = [
  { icon: "📈", title: "Proven Business Model", desc: "A data-backed franchise system with standard operating procedures to ensure success and profitability." },
  { icon: "🏅", title: "Premium Brand", desc: "Leverage the strong equity of our premium, modern identity across market categories." },
  { icon: "🧰", title: "Complete Support", desc: "Store setup guidance, marketing assistance, supply chain, and operations playbook." },
  { icon: "🛡️", title: "Quality Assurance", desc: "Strict hygiene and quality control ensure consistent standards." },
  { icon: "📊", title: "Growing Market", desc: "Rising demand for frozen treats with health-conscious choices." },
  { icon: "📍", title: "Territory Protection", desc: "Enjoy exclusive rights and protected zones for your designated area." },
];

const MODELS = [
  { icon: "🏬", title: "Retail Outlet Franchise", bullets: ["200–400 sq ft area required", "POS and staff training", "Marketing support", "Training & operations manual"], footerLeft: "Investment: ₹5–8 Lakhs", footerRight: "ROI: 25–35% annually", tone: "blue" },
  { icon: "🚚", title: "Distribution Franchise", bullets: ["1000+ sq ft warehouse", "Cold chain setup", "Delivery vehicle", "City/Regional rights"], footerLeft: "Investment: ₹15–25 Lakhs", footerRight: "ROI: 30–40% annually", tone: "orange" },
];

const TESTIMONIALS = [
  { person: "Raj Patel", role: "Retail Outlet, Vadodara", text: "Sales grew steadily; customers love the premium taste. The franchise team made onboarding simple and efficient.", stars: 5 },
  { person: "Priya Sharma", role: "Franchisee, Pune", text: "The brand recognition and quality products helped us build a loyal customer base quickly.", stars: 5 },
  { person: "Amit Kumar", role: "Distributor, Lucknow", text: "Supply chain and training support are top-notch. Great margins and repeat customers.", stars: 5 },
];

export default function Franchise() {
  const [form, setForm] = useState({ name:"", email:"", phone:"", investment:"", business:"", location:"", message:"" });
  const [sent, setSent] = useState(false);
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => { e.preventDefault(); setSent(true); };

  return (
    <div>
      {/* HERO */}
      <section
        className="relative h-[300px] flex items-end"
        style={{ backgroundImage: "url('/franchise-hero.png')", backgroundSize:'cover', backgroundPosition:'center' }}
      >
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative max-w-6xl mx-auto px-4 pb-10 text-white">
          <h1 className="text-4xl font-extrabold drop-shadow">Franchise <span className="text-white/90">Opportunities</span></h1>
          <p className="text-white/90 max-w-2xl mt-2">Join the Ziyadah Foods family and be part of our mission to bring premium frozen treats to every corner of India.</p>
          <a href="#apply" className="btn-outline inline-flex mt-4">Apply Now</a>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-14">
        <SectionTitle title="Why Choose Ziyadah Foods Franchise?" subtitle="Partner with a growing brand that values quality, innovation, and profitability." />
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6 mt-8">
          {VALUES.map(v => <FeatureCard key={v.title} icon={v.icon} title={v.title} desc={v.desc} />)}
        </div>
      </section>

      {/* MODELS */}
      <section className="max-w-6xl mx-auto px-4">
        <SectionTitle title="Franchise Models" subtitle="Choose the model that best fits your investment and business goals." />
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {MODELS.map(m => <FranchiseCard key={m.title} {...m} />)}
        </div>
      </section>

      {/* SUPPORT & TRAINING */}
      <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-start">
        <div>
          <img src="/franchise-hero.png" alt="Training" className="rounded-2xl soft-shadow" />
        </div>
        <div>
          <h3 className="text-xl font-semibold">Complete Support & Training</h3>
          <ul className="mt-3 space-y-2 text-black/80">
            <li>• Comprehensive 2-week training</li>
            <li>• Store setup assistance</li>
            <li>• Marketing support & digital onboarding</li>
            <li>• Robust supply chain</li>
            <li>• Ongoing growth guidance</li>
          </ul>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-12 bg-[#f7fbff]">
        <div className="max-w-6xl mx-auto px-4">
          <SectionTitle title="Success Stories" subtitle="Hear from our successful franchise partners across India" />
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {TESTIMONIALS.map(t => <TestimonialCard key={t.person} {...t} />)}
          </div>
        </div>
      </section>

      {/* APPLY FORM */}
      <section id="apply" className="max-w-6xl mx-auto px-4 py-16">
        <SectionTitle title="Apply for Franchise" subtitle="Take the first step towards owning a successful Ziyadah Foods franchise" />
        <div className="bg-white rounded-2xl p-6 md:p-8 soft-shadow mt-6">
          {sent ? (
            <p className="text-mint">Thanks! Our franchise team will contact you soon.</p>
          ) : (
            <form className="grid gap-3" onSubmit={onSubmit}>
              <div className="grid md:grid-cols-2 gap-3">
                <input className="rounded-xl border px-3 py-2" placeholder="Full name" name="name" value={form.name} onChange={onChange} required />
                <input className="rounded-xl border px-3 py-2" placeholder="Email address" name="email" type="email" value={form.email} onChange={onChange} required />
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                <input className="rounded-xl border px-3 py-2" placeholder="Phone number" name="phone" value={form.phone} onChange={onChange} />
                <input className="rounded-xl border px-3 py-2" placeholder="Investment capacity (₹)" name="investment" value={form.investment} onChange={onChange} />
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                <input className="rounded-xl border px-3 py-2" placeholder="Business experience" name="business" value={form.business} onChange={onChange} />
                <input className="rounded-xl border px-3 py-2" placeholder="Preferred location (city)" name="location" value={form.location} onChange={onChange} />
              </div>
              <textarea className="rounded-xl border px-3 py-2" rows="4" placeholder="Additional information" name="message" value={form.message} onChange={onChange} />
              <button className="btn-primary justify-center">Submit Franchise Application</button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
