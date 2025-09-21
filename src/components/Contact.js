
import React, { useState } from "react";
import SectionTitle from "./atoms/SectionTitle";
import FAQAccordion from "./atoms/FAQAccordion";

const FAQS = [
  { q: "What makes your ice cream premium?", a: "Fruitpopz uses 100% dairy with minimum 10% fat for richness and quality. We avoid added water and artificial fillers." },
  { q: "Do you offer franchise opportunities?", a: "Yes! We provide end-to-end support including training, marketing, and supply chain. Contact our franchise team for details." },
  { q: "Are your products available for bulk orders?", a: "Absolutely. We cater to events, parties, and retail businesses. Contact our sales team for pricing and volume discounts." },
  { q: "Do you have sugar-free options?", a: "Yes—premium sugar-free variants with prebiotics and probiotics for gut health, without compromising on taste." },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", topic: "General Inquiry", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => { e.preventDefault(); setSent(true); };

  return (
    <div>
      {/* HERO */}
      <section
        className="relative h-[280px] flex items-end"
        style={{ backgroundImage: "url('/contact-hero.png')", backgroundSize:'cover', backgroundPosition:'center' }}
      >
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative max-w-6xl mx-auto px-4 pb-10 text-white">
          <h1 className="text-4xl font-extrabold drop-shadow">Get In <span className="text-white/90">Touch</span></h1>
          <p className="text-white/90">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
      </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <ul className="space-y-4 text-black/80">
            <li><strong>Head Office</strong><br/>Ziyadah Foods Private Limited, Delhi, India</li>
            <li><strong>Phone Numbers</strong><br/>Support: +91 98705 43210<br/>Franchise: +91 98705 43219</li>
            <li><strong>Email Addresses</strong><br/>Sales: sales@ziyadahfoods.com<br/>Support: support@ziyadahfoods.com<br/>Franchise: franchise@ziyadahfoods.com</li>
            <li><strong>Business Hours</strong><br/>Mon–Fri: 9:00 AM – 6:00 PM • Sat: 10:00 AM – 4:00 PM • Sun: Closed</li>
          </ul>
          <div className="flex gap-3 text-xl mt-6">
            <a href="#" aria-label="Instagram">📷</a>
            <a href="#" aria-label="Facebook">👍</a>
            <a href="#" aria-label="Twitter">🐦</a>
            <a href="#" aria-label="LinkedIn">💼</a>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 soft-shadow">
          <h3 className="font-semibold text-lg">Send Us a Message</h3>
          {sent ? (
            <p className="text-mint mt-3">Thanks! We received your message and will reply soon.</p>
          ) : (
            <form className="grid gap-3 mt-3" onSubmit={onSubmit}>
              <div className="grid grid-cols-2 gap-3">
                <input className="rounded-xl border px-3 py-2" placeholder="Full name" name="name" value={form.name} onChange={onChange} required />
                <input className="rounded-xl border px-3 py-2" placeholder="Email address" name="email" type="email" value={form.email} onChange={onChange} required />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <input className="rounded-xl border px-3 py-2" placeholder="Phone number" name="phone" value={form.phone} onChange={onChange} />
                <select className="rounded-xl border px-3 py-2" name="topic" value={form.topic} onChange={onChange}>
                  <option>General Inquiry</option>
                  <option>Franchise</option>
                  <option>Bulk Orders</option>
                  <option>Support</option>
                </select>
              </div>
              <input className="rounded-xl border px-3 py-2" placeholder="Subject" name="subject" value={form.subject} onChange={onChange} />
              <textarea className="rounded-xl border px-3 py-2" rows="4" placeholder="Message" name="message" value={form.message} onChange={onChange} />
              <button className="btn-primary justify-center">Send Message</button>
            </form>
          )}
        </div>
      </section>

      {/* MAP */}
      <section className="max-w-6xl mx-auto px-4">
        <SectionTitle title="Find Us" subtitle="Visit our head office or one of our retail locations across India" />
        <div className="bg-white rounded-2xl h-64 mt-6 soft-shadow flex items-center justify-center text-black/50">
          Map goes here (embed your Google Map)
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <SectionTitle title="Frequently Asked Questions" subtitle="Quick answers about our products and services" />
        <div className="mt-6">
          <FAQAccordion items={FAQS} />
        </div>
      </section>
    </div>
  );
}
