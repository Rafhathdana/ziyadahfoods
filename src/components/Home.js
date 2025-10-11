
import React from "react";
import { Link } from "react-router-dom";
import productsData from "../data/products.json";

export default function Home() {
  const previewProducts = productsData.slice(0, 3);
  return (
    <div>
      <section
        className="relative min-h-[100vh] flex items-center"
        style={{
          backgroundImage: " linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative max-w-6xl mx-auto px-4 py-20">
          <div className="max-w-2xl text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full mb-4 backdrop-blur">
              <span className="w-2 h-2 rounded-full bg-mint" />
              <span className="text-sm">Ziyadah Foods</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow">
              Premium Frozen <br className="hidden md:block" />
              <span className="text-pistachio/100">Treats & Delights</span>
            </h1>
            <p className="mt-4 text-white/90 max-w-xl">
              Delivering fine‑quality, exotic frozen treats made with premium natural ingredients since 2020.
              Experience the perfect blend of taste, health, and indulgence.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/products" className="btn-primary">Explore Products</Link>
              <a href="#why" className="btn-outline">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section id="why" className="bg-[#f7fbff] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="section-title">Why Choose Ziyadah Foods</h2>
          <p className="lead">
            Our commitment to quality, innovation, and customer satisfaction makes us the preferred choice for frozen treats across India.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              { title: "Natural Ingredients", desc: "Made with 100% premium natural ingredients. Free from artificial additives and preservatives for pure, authentic flavours.", icon: "🍃" },
              { title: "Quality Assurance", desc: "Strict hygiene standards and quality control measures at every stage ensure the highest quality products every time.", icon: "🛡️" },
              { title: "Health Conscious", desc: "Sugar‑free options enriched with prebiotics and probiotics for gut health, making indulgence guilt‑free.", icon: "❤️" },
            ].map((f) => (
              <article key={f.title} className="glass rounded-2xl p-6 soft-shadow">
                <div className="text-3xl">{f.icon}</div>
                <h3 className="mt-3 font-semibold text-lg">{f.title}</h3>
                <p className="text-black/70 mt-1">{f.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

   {/* PRODUCTS PREVIEW */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="section-title">Our Products</h2>
          <p className="lead">
            Explore our most popular frozen treats made with love and the finest ingredients.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {previewProducts.map((item) => (
              <div
                key={item.id}
                className="bg-[#f7fbff] rounded-2xl p-6 soft-shadow text-center"
              >
                 <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-xl" />
                <h3 className="mt-3 font-semibold text-lg">{item.name}</h3>
                <p className="text-black/60 text-sm">{item.brand}</p>
                <p className="text-[#183a66] font-semibold mt-2">
                  ₹{item.price}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/products" className="btn-primary inline-block">
              View All Products
            </Link>
          </div>
        </div>
      </section>


      {/* BRANDS */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="section-title">Our Premium Brands</h2>
          <p className="lead">
            Discover our flagship brands crafted with precision and passion to deliver exceptional frozen treats.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-10">
            <div className="brand-card brand-fruit">
              <h3 className="text-2xl">Fruitpopz</h3>
              <p className="text-white/90 mt-1">Premium Dairy Ice Cream</p>
              <p className="text-white/80 mt-2">100% dairy ice, no added water, premium ingredients</p>
              <a href="#" className="btn-outline mt-6">Learn More</a>
            </div>
            <div className="brand-card brand-plummy">
              <h3 className="text-2xl">Plummy</h3>
              <p className="text-white/90 mt-1">Medium Fat Dairy Ice Cream</p>
              <p className="text-white/80 mt-2">Perfect balance of creaminess and lightness</p>
              <a href="#" className="btn-outline mt-6">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="bg-[#0b2343] text-white">
        <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "4+", label: "Years Experience" },
            { value: "50+", label: "Product Varieties" },
            { value: "100+", label: "Retail Outlets" },
            { value: "1M+", label: "Happy Customers" },
          ].map((s) => (
            <div key={s.label} className="stat">
              <div className="value">{s.value}</div>
              <div className="label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0f1c2e] text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 text-center">
          <h2 className="section-title text-white">Ready to Experience Premium Frozen Treats?</h2>
          <p className="max-w-2xl mx-auto text-white/80 mt-3">
            Join thousands of satisfied customers who trust Ziyadah Foods for their frozen dessert needs. Taste the difference quality makes.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Link to="/products" className="btn-primary">Shop Now</Link>
            <Link to="/contact" className="btn-outline">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
