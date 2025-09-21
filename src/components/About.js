
import React from "react";
import SectionTitle from "./atoms/SectionTitle";
import FeatureCard from "./atoms/FeatureCard";
import InfoCard from "./atoms/InfoCard";
import Timeline from "./atoms/Timeline";

export default function About() {
  return (
    <div>
      {/* HERO */}
      <section
        className="relative h-[320px] flex items-end"
        style={{ backgroundImage: "url('/about-hero.png')", backgroundSize: 'cover', backgroundPosition:'center' }}
      >
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative max-w-6xl mx-auto px-4 pb-10 text-white">
          <h1 className="text-4xl font-extrabold drop-shadow">About <span className="text-white/90">Ziyadah Foods</span></h1>
          <p className="text-white/90 max-w-2xl mt-2">Since 2020, we’ve been dedicated to delivering fine-quality, exotic frozen treats that combine premium natural ingredients with strict hygiene standards.</p>
        </div>
      </section>

      {/* STORY */}
      <section className="max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-2xl font-bold mb-3">Our Story</h2>
          <p className="text-black/80 leading-relaxed">
            <span className="font-semibold">ZIYADAH FOODS PRIVATE LIMITED</span>, incorporated in 2020, is dedicated to delivering fine-quality, exotic frozen treats such as Ice Creams, Kulfi, Ice Candies, and Sip-Ups. Every product is made using premium natural ingredients, prepared under strict hygiene standards, and offered at an affordable price.
          </p>
          <p className="text-black/80 leading-relaxed mt-4">
            We are now expanding our presence through our own retail outlets as well as Business Franchise Outlets across India. Our mission is to foster a healthy food culture by offering pure, high-quality, and adulteration-free products that satisfy diverse consumer tastes.
          </p>
        </div>
        <div>
          <img src="/hero-icecream.png" alt="Happy customers enjoying ice cream" className="rounded-2xl soft-shadow" />
        </div>
      </section>

      {/* VISION/MISSION */}
      <section className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-6">
        <InfoCard title="Our Vision">
          To emerge as a global leader in the FMCG segment, recognized for our ability to meet challenging delivery expectations, offer premium-quality products, and innovate in diverse frozen dessert categories — becoming a benchmark for excellence in the industry.
        </InfoCard>
        <InfoCard title="Our Mission">
          To accelerate growth through excellence in manufacturing and distribution of frozen treats, particularly Sip-Ups, Ice Candies, Ice Creams, and Kulfi; by leveraging the latest technology for timely delivery, operational efficiency, cost leadership, and a “can do it better” attitude — ultimately achieving global market leadership.
        </InfoCard>
      </section>

      {/* CORE VALUES */}
      <section className="py-16">
        <SectionTitle title="Our Core Values" subtitle="The principles that guide everything we do at Ziyadah Foods" />
        <div className="max-w-5xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <FeatureCard icon="🛡️" title="Quality First" desc="Premium ingredients and strict quality control in every product we make." />
          <FeatureCard icon="💡" title="Innovation" desc="Continuously developing new flavors and products to delight our customers." />
          <FeatureCard icon="🌿" title="Natural" desc="Using only natural ingredients without artificial additives or preservatives." />
          <FeatureCard icon="🤝" title="Customer Focus" desc="Putting customer satisfaction and delight at the center of everything we do." />
        </div>
      </section>

      {/* QUALITY PROMISE */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <SectionTitle title="Commitment to Quality" />
        <div className="bg-white rounded-2xl p-6 md:p-8 grid md:grid-cols-2 gap-6 soft-shadow mt-6">
          <img src="/about-hero.png" alt="Lab quality" className="rounded-xl soft-shadow" />
          <div>
            <h3 className="text-xl font-semibold">Our Quality Promise</h3>
            <p className="text-black/70 mt-2">
              We maintain strict quality control measures at every stage — from sourcing ingredients to production and distribution — so every product carries our promise of purity, taste, and value.
            </p>
            <ul className="mt-4 space-y-2 text-black/80">
              <li>• ISO Certified Manufacturing Process</li>
              <li>• 100% Natural Ingredients</li>
              <li>• Premium Quality Standards</li>
            </ul>
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="py-16 bg-[#f7fbff]">
        <SectionTitle title="Our Journey" subtitle="From inception to becoming a trusted name in frozen treats" />
        <div className="mt-10 px-4">
          <Timeline
            items={[
              { title: "2020 - Company Founded", desc: "Ziyadah Foods Private Limited incorporated with a vision to deliver premium frozen treats." },
              { title: "2021 - Brand Launch", desc: "Launched Fruitpopz and Plummy brands with premium dairy ice cream varieties." },
              { title: "2022 - Expansion", desc: "Expanded to 50+ retail outlets across major Indian cities with franchise partnerships." },
              { title: "2023 - Recognition", desc: "Achieved 1M+ satisfied customers and received quality excellence awards." },
              { title: "2024 - Innovation", desc: "Introduced health-conscious variants with prebiotics and probiotics for wellness." },
            ]}
          />
        </div>
      </section>
    </div>
  );
}
