import React from "react";
import { Link } from "react-router-dom";
import productsData from "../data/products.json";
import { RiHeartLine, RiLeafLine, RiShieldCheckLine } from "@remixicon/react";

export default function Home() {
  const previewProducts = productsData.slice(0, 3);
  return (
    <div>
      <section
        className="relative min-h-[100vh] flex items-center"
        style={{
          backgroundImage:
            " linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('/images/bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" />
        {/* <div className="relative max-w-6xl mx-auto px-4 py-20">
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
              Delivering fine‑quality, exotic frozen treats made with premium
              natural ingredients since 2020. Experience the perfect blend of
              taste, health, and indulgence.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/products" className="btn-primary">
                Explore Products
              </Link>
              <a href="#why" className="btn-outline">
                Learn More
              </a>
            </div>
          </div>
        </div> */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-full">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Premium Frozen
              <span className="block text-pistachio">
                Treats &amp; Delights
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
              Delivering fine-quality, exotic frozen treats made with premium
              natural ingredients since 2020. Experience the perfect blend of
              taste, health, and indulgence.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a className="btn-primary" href="/products">
                Explore Products
              </a>
              <a href="/brands" className="btn-outline z-10">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section id="why" className="bg-[#f7fbff] py-16">
        <div className="max-w-6xl mx-auto px-4 ">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
            Why Choose Ziyadah Foods
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-16">
            Our commitment to quality, innovation, and customer satisfaction
            makes us the preferred choice for frozen treats across India.
          </p>

          {/* <div className="grid md:grid-cols-3 gap-6 mt-10">
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
          </div> */}
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#0c2342] rounded-full flex items-center justify-center mb-6">
                <RiLeafLine size={36} color="white" />
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">
                Natural Ingredients
              </h3>
              <p class="text-gray-600 leading-relaxed">
                Made with 100% premium natural ingredients, free from artificial
                additives and preservatives for pure, authentic flavors.
              </p>
            </div>
            <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div class="w-16 h-16 bg-[#0c2342] rounded-full flex items-center justify-center mb-6">
                <RiShieldCheckLine size={36} color="white" />
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">
                Quality Assurance
              </h3>
              <p class="text-gray-600 leading-relaxed">
                Strict hygiene standards and quality control measures at every
                stage ensure the highest quality products every time.
              </p>
            </div>
            <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div class="w-16 h-16 bg-[#0c2342] rounded-full flex items-center justify-center mb-6">
                <RiHeartLine size={36} color="white" />
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">
                Health Conscious
              </h3>
              <p class="text-gray-600 leading-relaxed">
                Sugar-free options enriched with prebiotics and probiotics for
                gut health, making indulgence guilt-free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS PREVIEW */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
            Our Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-16">
            Explore our most popular frozen treats made with love and the finest
            ingredients.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {previewProducts.map((item) => (
              <div
                key={item.id}
                className="bg-[#f7fbff] rounded-2xl p-6 soft-shadow text-center"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 object-cover rounded-xl"
                />
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
            Our Premium Brands
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-16">
            Discover our flagship brands crafted with precision and passion to
            deliver exceptional frozen treats.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div class="relative overflow-hidden rounded-3xl shadow-2xl group">
              <div class="absolute inset-0 bg-[#03bfa4]/90"></div>
              <img
                alt="Fruitpopz Premium Ice Cream"
                class="w-full h-80 object-cover object-top"
                src="https://readdy.ai/api/search-image?query=Premium%20dairy%20ice%20cream%20with%20rich%20creamy%20texture%2C%20multiple%20colorful%20scoops%2C%20elegant%20presentation%2C%20professional%20food%20photography%2C%20luxurious%20frozen%20dessert%20display%2C%20vibrant%20colors%20and%20appetizing%20appearance%2C%20clean%20background%20highlighting%20the%20premium%20quality&amp;width=600&amp;height=400&amp;seq=fruitpopz-brand&amp;orientation=landscape"
              />
              <div class="absolute inset-0 flex items-center justify-center p-8">
                <div class="text-center text-white">
                  <h3 class="text-4xl font-bold mb-4">Fruitpopz</h3>
                  <p class="text-lg mb-6 opacity-90">Premium Dairy Ice Cream</p>
                  <p class="text-sm opacity-80 mb-6">
                    100% dairy fat, no added water, premium ingredients
                  </p>
                  <a
                    class="bg-white text-[#03bfa4] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer"
                    href="https://www.fruitpopz.com/"
                    data-discover="true"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div class="relative overflow-hidden rounded-3xl shadow-2xl group">
              <div class="absolute inset-0 bg-[#ec1e2a]/90"></div>
              <img
                alt="Plummy Medium-Fat Ice Cream"
                class="w-full h-80 object-cover object-top"
                src="https://readdy.ai/api/search-image?query=Medium-fat%20dairy%20ice%20cream%20with%20balanced%20texture%2C%20colorful%20variety%20of%20flavors%2C%20accessible%20and%20affordable%20looking%20frozen%20treats%2C%20family-friendly%20ice%20cream%20presentation%2C%20vibrant%20and%20appealing%20display%2C%20clean%20background%20with%20multiple%20flavor%20options&amp;width=600&amp;height=400&amp;seq=plummy-brand&amp;orientation=landscape"
              />
              <div class="absolute inset-0 flex items-center justify-center p-8">
                <div class="text-center text-white">
                  <h3 class="text-4xl font-bold mb-4">Plummy</h3>
                  <p class="text-lg mb-6 opacity-90">
                    Medium-Fat Dairy Ice Cream
                  </p>
                  <p class="text-sm opacity-80 mb-6">
                    Perfect balance of creaminess and lightness
                  </p>
                  <a
                    class="bg-white text-[#ec1e2a] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer"
                    href="https://www.plummy.com/"
                    data-discover="true"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="grid md:grid-cols-2 gap-8 mt-10 text-center">
            <div className="brand-card brand-fruit">
            
              <h3 className="text-4xl font-bold mb-4">Fruitpopz</h3>
              <p className="text-lg mb-6 opacity-90">Premium Dairy Ice Cream</p>
              <p className="text-white/80">
                100% dairy ice, no added water, premium ingredients
              </p>
              <a href="#" className="btn-outline mt-6">
                Learn More
              </a>
            </div>
            <div className="brand-card brand-plummy">
              <h3 className="text-4xl font-bold mb-4">Plummy</h3>
              <p className="text-lg mb-6 opacity-90">Medium Fat Dairy Ice Cream</p>
              <p className="text-white/80">
                Perfect balance of creaminess and lightness
              </p>
              <a href="#" className="btn-outline mt-6">
                Learn More
              </a>
            </div>
          </div> */}
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="bg-[#0b2343] text-white">
        <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "4+", label: "Years Experience" },
            { value: "60+", label: "Product Varieties" },
            { value: "20+", label: "Retail Outlets" },
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
        <div className="max-w-6xl mx-auto px-4 pt-16 text-center">
          <h2 className="section-title text-white">
            Ready to Experience Premium Frozen Treats?
          </h2>
          <p className="max-w-2xl mx-auto text-white/80 mt-3">
            Join thousands of satisfied customers who trust Ziyadah Foods for
            their frozen dessert needs. Taste the difference quality makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center mt-8">
              <a className="btn-primary" href="/products">
                Shop Now
              </a>
              <a href="/contact" className="btn-outline">
                Contact Us
              </a>
            </div>
        </div>
      </section>
    </div>
  );
}
