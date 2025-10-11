
import React from "react";
import SectionTitle from "./atoms/SectionTitle";
import BrandHighlight from "./atoms/BrandHighlight";
import CompareTable from "./atoms/CompareTable";
import Badge from "./atoms/Badge";
import { Link } from "react-router-dom";

export default function Brands() {
  return (
    <div>
      {/* HERO */}
      <section
        className="relative h-[320px] flex items-end"
        style={{ backgroundImage: "url('/images/brands-hero.png')", backgroundSize: 'cover', backgroundPosition:'center' }}
      >
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative max-w-6xl mx-auto px-4 pb-10 text-white">
          <h1 className="text-4xl font-extrabold drop-shadow">Our Premium <span className="text-white/90">Brands</span></h1>
          <p className="text-white/90 max-w-2xl mt-2">Discover our flagship brands crafted with precision, passion, and premium ingredients to deliver exceptional frozen treats.</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-14 space-y-16">
        <BrandHighlight
          badge="Premium Brand"
          tone="mint"
          title="Fruitpopz"
          subtitle="Fruitpopz is our flagship brand, crafted with 100% dairy, no added water, and premium ingredients. Lower overrun yields dense, rich scoops with intense flavor."
          points={[
            "Dairy Goodness",
            "Health-Conscious Choices",
            "Natural & Clean Label",
            "Wide Flavor Portfolio"
          ]}
          image="/images/hero-icecream.png"
          cta={<Link to="/products" className="btn-primary mt-4 inline-flex">Explore Fruitpopz Products</Link>}
        />
        <BrandHighlight
          badge="Balanced Choice"
          tone="red"
          title="Plummy"
          subtitle="Plummy offers the perfect balance of creaminess and lightness with medium-fat dairy base and a delightful texture."
          points={[
            "Balanced Indulgence",
            "Affordable Luxury",
            "Hot Dairy Base",
            "Popular & Seasonal"
          ]}
          image="/images/hero-icecream.png"
          reverse
          cta={<Link to="/products" className="btn-primary mt-4 inline-flex">Explore Plummy Products</Link>}
        />
      </section>

      <section className="py-12 bg-[#f7fbff]">
        <div className="max-w-6xl mx-auto px-4">
          <SectionTitle title="Compare Our Brands" subtitle="Choose the perfect ice cream experience that matches your preference and lifestyle" />
          <div className="mt-8">
            <CompareTable
              rows={[
                { feature: "Milk Fat Content", fruitpopz: "Minimum 10%", plummy: "7.5% - 10%" },
                { feature: "Texture", fruitpopz: "Rich & Creamy", plummy: "Balanced & Light" },
                { feature: "Price Point", fruitpopz: "Premium", plummy: "Accessible" },
                { feature: "Target Audience", fruitpopz: "Luxury Seekers", plummy: "Everyday Indulgers" },
                { feature: "Health Options", fruitpopz: "Sugar-free with Probiotics", plummy: "Balanced Nutrition" },
                { feature: "Flavour Variety", fruitpopz: "Classic & Innovative", plummy: "Popular & Seasonal" },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="bg-[#0f1c2e] text-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <SectionTitle title="Our Brand Promise" subtitle="Whether Fruitpopz or Plummy, you’re guaranteed the same commitment to quality, natural ingredients, and exceptional taste." className="text-white" />
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              { icon: "🏅", title: "Premium Quality", desc: "Only the finest ingredients in every product." },
              { icon: "🏭", title: "Trusted Manufacturing", desc: "Strict hygiene and quality control standards." },
              { icon: "😊", title: "Customer Satisfaction", desc: "Delighting customers with every experience." },
            ].map((f) => (
              <div key={f.title} className="bg-white/10 rounded-2xl p-6">
                <div className="text-3xl">{f.icon}</div>
                <div className="font-semibold mt-2">{f.title}</div>
                <div className="text-white/80 text-sm mt-1">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
