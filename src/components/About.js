import React from "react";
import SectionTitle from "./atoms/SectionTitle";
import FeatureCard from "./atoms/FeatureCard";
import InfoCard from "./atoms/InfoCard";
import Timeline from "./atoms/Timeline";
import { RiAwardLine, RiBuilding2Line, RiCrosshair2Line, RiCustomerService2Line, RiEyeLine, RiGlobalLine, RiHeart2Line, RiHeartPulseLine, RiLeafLine, RiLightbulbLine, RiRocket2Line, RiShieldCheckLine, RiTrophyLine, RiVerifiedBadgeLine } from "@remixicon/react";

export default function About() {
  return (
    <div>
      {/* HERO */}
      <section
        className="relative h-[480px] flex items-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.4), rgba(245, 248, 252, 1)),url('/images/aboutus.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative max-w-6xl mx-auto px-4 pb-10 text-white text-center">
          <h1 className="text-6xl font-bold drop-shadow">
            About <span className="text-prime">Ziyadah Foods</span>
          </h1>
          <p className="text-prime max-w-3xl mt-2 text-xl font-semibold">
            Since 2020, we’ve been dedicated to delivering fine-quality, exotic
            frozen treats that combine premium natural ingredients with strict
            hygiene standards.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-2 gap-8 items-start">
        <div class="prose prose-lg text-gray-600 space-y-6">
          <p class="text-lg leading-relaxed">
            <strong>ZIYADAH FOODS PRIVATE LIMITED</strong>, incorporated in
            2020, is dedicated to delivering fine-quality, exotic frozen treats
            such as Ice Creams, Kulfis, Ice Candies, and Sip-Ups. Every product
            is made using premium natural ingredients, prepared under strict
            hygiene standards, and offered at an affordable price.
          </p>
          <p class="text-lg leading-relaxed">
            We are now expanding our presence through our own retail outlets as
            well as Business Franchisee Outlets across India. Our mission is to
            foster a healthy food culture by offering pure, high-quality, and
            adulteration-free products that satisfy diverse consumer tastes.
          </p>
          <p class="text-lg leading-relaxed">
            Our journey is built on innovation, quality, and customer delight,
            with a focus on building strong, trustworthy brands that stand for
            both taste and health.
          </p>
        </div>
        {/* <div>
          <h2 className="text-2xl font-bold mb-3">Our Story</h2>
          <p className="text-black/80 leading-relaxed">
            <span className="font-semibold">ZIYADAH FOODS PRIVATE LIMITED</span>, incorporated in 2020, is dedicated to delivering fine-quality, exotic frozen treats such as Ice Creams, Kulfi, Ice Candies, and Sip-Ups. Every product is made using premium natural ingredients, prepared under strict hygiene standards, and offered at an affordable price.
          </p>
          <p className="text-black/80 leading-relaxed mt-4">
            We are now expanding our presence through our own retail outlets as well as Business Franchise Outlets across India. Our mission is to foster a healthy food culture by offering pure, high-quality, and adulteration-free products that satisfy diverse consumer tastes.
          </p>
        </div> */}
        <div>
          <img
            src="/images/"
            alt="Happy customers enjoying ice cream"
            className="rounded-2xl soft-shadow"
          />
        </div>
      </section>

      {/* VISION/MISSION */}
      <section class="py-24 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div class="bg-white p-12 rounded-3xl shadow-xl">
              <div class="w-16 h-16 bg-[#0c2342] rounded-full flex items-center justify-center mb-8">
                <RiEyeLine size={28} color="white" />
              </div>
              <h3 class="text-3xl font-bold text-gray-900 mb-6">Our Vision</h3>
              <p class="text-lg text-gray-600 leading-relaxed">
                To emerge as a global leader in the FMCG segment, recognized for
                our ability to meet challenging delivery expectations, offer
                premium-quality products, and innovate in diverse frozen dessert
                categories — becoming a benchmark for excellence in the
                industry.
              </p>
            </div>
            <div class="bg-white p-12 rounded-3xl shadow-xl">
              <div class="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-8">
                <RiCrosshair2Line size={28} color="white" />
              </div>
              <h3 class="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p class="text-lg text-gray-600 leading-relaxed">
                To accelerate growth through excellence in manufacturing and
                distribution of frozen treats, particularly Sip-Ups, Ice
                Candies, Ice Creams, and Kulfis, by leveraging the latest
                technology for timely delivery, operational efficiency, cost
                leadership, and a "can do it better" attitude — ultimately
                achieving global market leadership.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-6">
        <InfoCard title="Our Vision">
          To emerge as a global leader in the FMCG segment, recognized for our ability to meet challenging delivery expectations, offer premium-quality products, and innovate in diverse frozen dessert categories — becoming a benchmark for excellence in the industry.
        </InfoCard>
        <InfoCard title="Our Mission">
          To accelerate growth through excellence in manufacturing and distribution of frozen treats, particularly Sip-Ups, Ice Candies, Ice Creams, and Kulfi; by leveraging the latest technology for timely delivery, operational efficiency, cost leadership, and a “can do it better” attitude — ultimately achieving global market leadership.
        </InfoCard>
      </section> */}

      {/* CORE VALUES */}
      {/* <section className="py-16">
        <SectionTitle
          title="Our Core Values"
          subtitle="The principles that guide everything we do at Ziyadah Foods"
        />
        <div className="max-w-5xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <FeatureCard
            icon="🛡️"
            title="Quality First"
            desc="Premium ingredients and strict quality control in every product we make."
          />
          <FeatureCard
            icon="💡"
            title="Innovation"
            desc="Continuously developing new flavors and products to delight our customers."
          />
          <FeatureCard
            icon="🌿"
            title="Natural"
            desc="Using only natural ingredients without artificial additives or preservatives."
          />
          <FeatureCard
            icon="🤝"
            title="Customer Focus"
            desc="Putting customer satisfaction and delight at the center of everything we do."
          />
        </div>
      </section> */}
      <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at Ziyadah Foods
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="text-center group">
              <div class="w-20 h-20 bg-[#0c2342] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <RiHeart2Line size={28} color="white" />
              </div>
              <h4 class="text-xl font-bold text-gray-900 mb-4">
                Quality First
              </h4>
              <p class="text-gray-600">
                Premium ingredients and strict quality control in every product
                we make.
              </p>
            </div>
            <div class="text-center group">
              <div class="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <RiLightbulbLine size={28} color="white" />
              </div>
              <h4 class="text-xl font-bold text-gray-900 mb-4">Innovation</h4>
              <p class="text-gray-600">
                Continuously developing new flavors and products to delight our
                customers.
              </p>
            </div>
            <div class="text-center group">
              <div class="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <RiLeafLine size={28} color="white" />
              </div>
              <h4 class="text-xl font-bold text-gray-900 mb-4">Natural</h4>
              <p class="text-gray-600">
                Using only natural ingredients without artificial additives or
                preservatives.
              </p>
            </div>
            <div class="text-center group">
              <div class="w-20 h-20 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <RiCustomerService2Line size={28} color="white" />
              </div>
              <h4 class="text-xl font-bold text-gray-900 mb-4">
                Customer Focus
              </h4>
              <p class="text-gray-600">
                Putting customer satisfaction and delight at the center of
                everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUALITY PROMISE */}
      <section class="py-24 bg-gradient-to-r from-[#0c2342]/5 to-[#1e3a5f]/5">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Commitment to <span class="text-[#0c2342]">Quality</span>
            </h2>
          </div>
          <div class="bg-white rounded-3xl shadow-2xl p-12">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <img
                  alt="Quality Control Process"
                  class="rounded-2xl shadow-lg object-cover object-top w-full h-80"
                  src="https://readdy.ai/api/search-image?query=Food%20quality%20control%20laboratory%20with%20scientists%20testing%20frozen%20desserts%2C%20premium%20quality%20assurance%20processes%2C%20clean%20white%20lab%20environment%2C%20professional%20food%20testing%20equipment%2C%20quality%20control%20measures%20in%20ice%20cream%20production&amp;width=600&amp;height=400&amp;seq=quality-control&amp;orientation=landscape"
                />
              </div>
              <div>
                <h3 class="text-3xl font-bold text-gray-900 mb-8">
                  Our Quality Promise
                </h3>
                <div class="space-y-6">
                  <p class="text-lg text-gray-600 leading-relaxed">
                    At Ziyadah Foods, we believe that indulgence should never
                    come at the cost of health or quality. We maintain strict
                    quality control measures at every stage — from sourcing
                    ingredients to production and distribution.
                  </p>
                  <p class="text-lg text-gray-600 leading-relaxed">
                    Every product carrying the Fruitpopz or Plummy name meets
                    our promise of purity, taste, and value. Our commitment
                    extends beyond just great taste to ensuring complete
                    customer satisfaction and trust.
                  </p>
                  <div class="flex items-center space-x-4 text-[#0c2342]">
                    <RiVerifiedBadgeLine size={28} color="#0c2342" />
                    <span class="text-lg font-semibold">
                      ISO Certified Manufacturing Process
                    </span>
                  </div>
                  <div class="flex items-center space-x-4 text-[#0c2342]">
                    <RiShieldCheckLine size={28} color="#0c2342" />
                    <span class="text-lg font-semibold">
                      100% Natural Ingredients
                    </span>
                  </div>
                  <div class="flex items-center space-x-4 text-[#0c2342]">
                    <RiAwardLine size={28} color="#0c2342" />
                    <span class="text-lg font-semibold">
                      Premium Quality Standards
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="max-w-6xl mx-auto px-4 py-10">
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
      </section> */}

      {/* JOURNEY */}
      {/* <section className="py-16 bg-[#f7fbff]">
        <SectionTitle
          title="Our Journey"
          subtitle="From inception to becoming a trusted name in frozen treats"
        />
        <div className="mt-10 px-4">
          <Timeline
            items={[
              {
                title: "2020 - Company Founded",
                desc: "Ziyadah Foods Private Limited incorporated with a vision to deliver premium frozen treats.",
              },
              {
                title: "2021 - Brand Launch",
                desc: "Launched Fruitpopz and Plummy brands with premium dairy ice cream varieties.",
              },
              {
                title: "2022 - Expansion",
                desc: "Expanded to 50+ retail outlets across major Indian cities with franchise partnerships.",
              },
              {
                title: "2023 - Recognition",
                desc: "Achieved 1M+ satisfied customers and received quality excellence awards.",
              },
              {
                title: "2024 - Innovation",
                desc: "Introduced health-conscious variants with prebiotics and probiotics for wellness.",
              },
            ]}
          />
        </div>
      </section> */}
      <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Journey
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              From inception to becoming a trusted name in frozen treats
            </p>
          </div>
          <div class="relative">
            <div class="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-[#0c2342]"></div>
            <div class="space-y-16">
              <div class="relative flex items-center">
                <div class="flex-1 text-right pr-8">
                  <div class="bg-[#0c2342]/5 p-6 rounded-2xl shadow-lg">
                    <h3 class="text-xl font-bold text-gray-900 mb-2">
                      2020 - Company Founded
                    </h3>
                    <p class="text-gray-600">
                      Ziyadah Foods Private Limited incorporated with a vision
                      to deliver premium frozen treats.
                    </p>
                  </div>
                </div>
                <div class="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#0c2342] rounded-full flex items-center justify-center">
                  <RiBuilding2Line size={22} color="white" />
                </div>
                <div class="flex-1 pl-8"></div>
              </div>
              <div class="relative flex items-center">
                <div class="flex-1 pr-8"></div>
                <div class="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#0c2342] rounded-full flex items-center justify-center">
                  <RiRocket2Line size={22} color="white" />
                </div>
                <div class="flex-1 text-left pl-8">
                  <div class="bg-[#1e3a5f]/10 p-6 rounded-2xl shadow-lg">
                    <h3 class="text-xl font-bold text-gray-900 mb-2">
                      2021 - Brand Launch
                    </h3>
                    <p class="text-gray-600">
                      Launched Fruitpopz and Plummy brands with premium dairy
                      ice cream varieties.
                    </p>
                  </div>
                </div>
              </div>
              <div class="relative flex items-center">
                <div class="flex-1 text-right pr-8">
                  <div class="bg-[#0c2342]/5 p-6 rounded-2xl shadow-lg">
                    <h3 class="text-xl font-bold text-gray-900 mb-2">
                      2022 - Expansion
                    </h3>
                    <p class="text-gray-600">
                      Expanded to 50+ retail outlets across major Indian cities
                      with franchise partnerships.
                    </p>
                  </div>
                </div>
                <div class="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#0c2342] rounded-full flex items-center justify-center">
                  <RiGlobalLine size={22} color="white" />
                </div>
                <div class="flex-1 pl-8"></div>
              </div>
              <div class="relative flex items-center">
                <div class="flex-1 pr-8"></div>
                <div class="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#0c2342] rounded-full flex items-center justify-center">
                  <RiTrophyLine size={22} color="white" />
                </div>
                <div class="flex-1 text-left pl-8">
                  <div class="bg-[#1e3a5f]/10 p-6 rounded-2xl shadow-lg">
                    <h3 class="text-xl font-bold text-gray-900 mb-2">
                      2023 - Recognition
                    </h3>
                    <p class="text-gray-600">
                      Achieved 1M+ satisfied customers and received quality
                      excellence awards.
                    </p>
                  </div>
                </div>
              </div>
              <div class="relative flex items-center">
                <div class="flex-1 text-right pr-8">
                  <div class="bg-[#0c2342]/5 p-6 rounded-2xl shadow-lg">
                    <h3 class="text-xl font-bold text-gray-900 mb-2">
                      2024 - Innovation
                    </h3>
                    <p class="text-gray-600">
                      Introduced health-conscious variants with prebiotics and
                      probiotics for wellness.
                    </p>
                  </div>
                </div>
                <div class="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#0c2342] rounded-full flex items-center justify-center">
                  <RiHeartPulseLine size={22} color="white" />
                </div>
                <div class="flex-1 pl-8"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
