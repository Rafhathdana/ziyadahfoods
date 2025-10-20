import React, { useMemo, useState } from "react";
import SectionTitle from "./atoms/SectionTitle";
import ProductCard from "./atoms/ProductCard";
import productsData from "../data/products.json";

const CATEGORIES = ["All", "Ice Creams", "Kulfi", "Ice Candies", "Sip-Up"];
const BRANDS = ["All Brands", "Fruitpopz", "Plummy"];

export default function Products() {
  const [cat, setCat] = useState("All");
  const [brand, setBrand] = useState("All Brands");

  const filtered = useMemo(() => {
    return productsData.filter(
      (p) =>
        (cat === "All" || p.category === cat) &&
        (brand === "All Brands" || p.brand === brand)
    );
  }, [cat, brand]);

  return (
    <div>
      {/* HERO */}
      <section
        className="relative py-32 bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("/images/Brand.jpg")',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Our <span className="text-white">Products</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Discover our complete range of premium frozen treats crafted with
            love and the finest ingredients.
          </p>
        </div>
      </section>

      {/* FILTERS */}
      <section className="pt-12 bg-gray-100 sticky top-10 z-40 pb-6 border-b border-gray-200 shadow-sm">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="flex flex-wrap gap-3">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 flex items-center space-x-2 whitespace-nowrap cursor-pointer   border border-gray-200 ${
                    cat === c ? "bg-[#183a66] text-white" : "bg-white text-gray-700"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              {BRANDS.map((b) => (
                <button
                  key={b}
                  onClick={() => setBrand(b)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 flex items-center space-x-2 whitespace-nowrap cursor-pointer   border border-gray-200  ${
                    brand === b ? "bg-[#183a66] text-white" : "bg-white text-gray-700"
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 my-4">
          {filtered.length} Products Found
        </h2>
      </div>

      {/* GRID */}
      <section className="max-w-6xl mx-auto px-4 pb-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* CATEGORIES STRIP */}
      {/* <section class="py-24 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold text-gray-900 mb-6">
              Product Categories
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our diverse range of frozen treats designed to satisfy
              every taste and occasion
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <div class="w-16 h-16 bg-[#0c2342] rounded-full flex items-center justify-center mx-auto mb-6">
                <i class="ri-ice-cream-line text-white text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-4">Ice Creams</h3>
              <p class="text-gray-600 mb-4">
                Premium dairy ice creams in classic and innovative flavors
              </p>
              <div class="text-sm text-[#0c2342] font-semibold">
                8+ Varieties
              </div>
            </div>
            <div class="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <div class="w-16 h-16 bg-[#0c2342] rounded-full flex items-center justify-center mx-auto mb-6">
                <i class="ri-cup-line text-white text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-4">Kulfis</h3>
              <p class="text-gray-600 mb-4">
                Traditional Indian frozen desserts with authentic flavors
              </p>
              <div class="text-sm text-[#0c2342] font-semibold">
                5+ Varieties
              </div>
            </div>
            <div class="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <div class="w-16 h-16 bg-[#0c2342] rounded-full flex items-center justify-center mx-auto mb-6">
                <i class="ri-candy-line text-white text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-4">Ice Candies</h3>
              <p class="text-gray-600 mb-4">
                Refreshing fruit-flavored ice candies perfect for hot days
              </p>
              <div class="text-sm text-[#0c2342] font-semibold">6+ Flavors</div>
            </div>
            <div class="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <div class="w-16 h-16 bg-[#0c2342] rounded-full flex items-center justify-center mx-auto mb-6">
                <i class="ri-drink-2-line text-white text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-4">Sip-Ups</h3>
              <p class="text-gray-600 mb-4">
                Fun frozen drinks with exciting flavors and colors
              </p>
              <div class="text-sm text-[#0c2342] font-semibold">4+ Flavors</div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
