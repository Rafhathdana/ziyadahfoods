import React from "react";
import { Link } from "react-router-dom";
import {
  RiAwardLine,
  RiCustomerServiceLine,
  RiDropLine,
  RiHeartLine,
  RiHeartPulseLine,
  RiLeafLine,
  RiPaletteLine,
  RiPriceTag3Line,
  RiScalesLine,
  RiShieldCheckLine,
} from "@remixicon/react";

export default function Brands() {
  return (
    <div>
      {/* HERO */}
      <section
        className="relative py-32 bg-cover bg-center"
        style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/images/Brand.jpg")' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Our Premium <span className="text-mint">Brands</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Discover our flagship brands crafted with precision, passion, and
            premium ingredients to deliver exceptional frozen treats.
          </p>
        </div>
      </section>

      <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div class="inline-flex items-center bg-[#03bfa4]/10 px-4 py-2 rounded-full mb-8">
                <span class="text-[#03bfa4] font-semibold">Premium Brand</span>
              </div>
              <h2 class="text-5xl font-bold mb-8">
                <span class="text-[#03bfa4]">Fruitpopz</span>
              </h2>
              <p class="text-2xl text-gray-700 mb-8 font-medium">
                Premium Dairy Ice Cream
              </p>
              <div class="prose prose-lg text-gray-600 space-y-6 mb-12">
                <p class="text-lg leading-relaxed">
                  Fruitpopz is our flagship brand, crafted with 100% dairy fat,
                  no added water, and only premium ingredients. We never
                  compromise on quality, ensuring each scoop delivers authentic
                  flavor, rich creaminess, and an indulgent experience.
                </p>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div class="flex items-start space-x-4">
                  <div class="w-8 h-8 bg-[#03bfa4]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <RiDropLine size={20} color="#03bfa4" />
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 mb-1">
                      Pure Dairy Goodness
                    </h4>
                    <p class="text-gray-600 text-sm">
                      Minimum 10% milk fat, no vegetable oil substitutes
                    </p>
                  </div>
                </div>
                <div class="flex items-start space-x-4">
                  <div class="w-8 h-8 bg-[#03bfa4]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <RiLeafLine size={20} color="#03bfa4" />
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 mb-1">
                      Natural &amp; Clean-Label
                    </h4>
                    <p class="text-gray-600 text-sm">
                      Free from artificial additives, premium natural
                      ingredients
                    </p>
                  </div>
                </div>
                <div class="flex items-start space-x-4">
                  <div class="w-8 h-8 bg-[#03bfa4]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <RiHeartPulseLine size={20} color="#03bfa4" />
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 mb-1">
                      Health-Conscious Choices
                    </h4>
                    <p class="text-gray-600 text-sm">
                      Sugar-free variants with prebiotics and probiotics
                    </p>
                  </div>
                </div>
                <div class="flex items-start space-x-4">
                  <div class="w-8 h-8 bg-[#03bfa4]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <RiPaletteLine size={20} color="#03bfa4" />
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 mb-1">
                      Wide Flavor Portfolio
                    </h4>
                    <p class="text-gray-600 text-sm">
                      Classics to innovative blends, regular and sugar-free
                    </p>
                  </div>
                </div>
              </div>
              <a
                class="bg-[#03bfa4] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#028a73] transition-all duration-300 shadow-lg whitespace-nowrap cursor-pointer inline-block"
                href="/preview/74327824-4636-4a1f-93ce-3bbb94a7038f/2206306/products"
                data-discover="true"
              >
                Explore Fruitpopz Products
              </a>
            </div>
            <div class="relative">
              <div class="absolute inset-0 bg-[#03bfa4]/20 rounded-3xl transform rotate-3"></div>
              <img
                alt="Fruitpopz Premium Ice Cream"
                class="relative rounded-3xl shadow-2xl object-cover object-top w-full h-96"
                src="https://readdy.ai/api/search-image?query=Premium%20dairy%20ice%20cream%20Fruitpopz%20brand%20showcase%2C%20multiple%20colorful%20scoops%20with%20rich%20creamy%20texture%2C%20elegant%20presentation%2C%20luxury%20frozen%20dessert%20display%2C%20vibrant%20flavors%2C%20professional%20food%20photography%20with%20clean%20background%20highlighting%20premium%20quality&amp;width=600&amp;height=600&amp;seq=fruitpopz-detail&amp;orientation=squarish"
              />
            </div>
          </div>
        </div>
      </section>

      <section class="py-24 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div class="lg:order-2">
              <div class="inline-flex items-center bg-[#ec1e2a]/10 px-4 py-2 rounded-full mb-8">
                <span class="text-[#ec1e2a] font-semibold">
                  Balanced Choice
                </span>
              </div>
              <h2 class="text-5xl font-bold mb-8">
                <span class="text-[#ec1e2a]">Plummy</span>
              </h2>
              <p class="text-2xl text-gray-700 mb-8 font-medium">
                Medium-Fat Dairy Ice Cream
              </p>
              <div class="prose prose-lg text-gray-600 space-y-6 mb-12">
                <p class="text-lg leading-relaxed">
                  Plummy offers the perfect balance of creaminess and lightness,
                  with a milk fat content between 2.5% and 10%. It retains the
                  richness of real dairy while being an everyday indulgence at
                  an accessible price point.
                </p>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div class="flex items-start space-x-4">
                  <div class="w-8 h-8 bg-[#ec1e2a]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <RiScalesLine size={20} color="#ec1e2a" />
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 mb-1">
                      Balanced Indulgence
                    </h4>
                    <p class="text-gray-600 text-sm">
                      Creamy texture without the heaviness of high-fat ice cream
                    </p>
                  </div>
                </div>
                <div class="flex items-start space-x-4">
                  <div class="w-8 h-8 bg-[#ec1e2a]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <RiDropLine size={20} color="#ec1e2a" />
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 mb-1">
                      Real Dairy Base
                    </h4>
                    <p class="text-gray-600 text-sm">
                      Made with pure dairy fat for authentic taste
                    </p>
                  </div>
                </div>
                <div class="flex items-start space-x-4">
                  <div class="w-8 h-8 bg-[#ec1e2a]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <RiPriceTag3Line size={20} color="#ec1e2a" />
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 mb-1">
                      Affordable Luxury
                    </h4>
                    <p class="text-gray-600 text-sm">
                      Premium flavors at competitive prices
                    </p>
                  </div>
                </div>
                <div class="flex items-start space-x-4">
                  <div class="w-8 h-8 bg-[#ec1e2a]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <RiHeartLine size={20} color="#ec1e2a" />
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 mb-1">
                      Popular &amp; Seasonal
                    </h4>
                    <p class="text-gray-600 text-sm">
                      Loved by both children and adults
                    </p>
                  </div>
                </div>
              </div>
              <a
                class="bg-[#ec1e2a] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#c71620] transition-all duration-300 shadow-lg whitespace-nowrap cursor-pointer inline-block"
                href="/preview/74327824-4636-4a1f-93ce-3bbb94a7038f/2206306/products"
                data-discover="true"
              >
                Explore Plummy Products
              </a>
            </div>
            <div class="relative lg:order-1">
              <div class="absolute inset-0 bg-[#ec1e2a]/20 rounded-3xl transform -rotate-3"></div>
              <img
                alt="Plummy Medium-Fat Ice Cream"
                class="relative rounded-3xl shadow-2xl object-cover object-top w-full h-96"
                src="https://readdy.ai/api/search-image?query=Plummy%20medium-fat%20dairy%20ice%20cream%20display%2C%20balanced%20creamy%20texture%2C%20colorful%20variety%20of%20flavors%2C%20accessible%20and%20family-friendly%20frozen%20treats%2C%20vibrant%20appealing%20presentation%2C%20clean%20background%20with%20multiple%20flavor%20options%20showing%20affordability&amp;width=600&amp;height=600&amp;seq=plummy-detail&amp;orientation=squarish"
              />
            </div>
          </div>
        </div>
      </section>

      <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Compare Our Brands
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect ice cream experience that matches your
              preferences and lifestyle
            </p>
          </div>
          <div class="bg-gray-50 rounded-3xl p-8 overflow-x-auto">
            <table class="w-full text-left">
              <thead>
                <tr class="border-b border-gray-200">
                  <th class="pb-4 text-lg font-semibold text-gray-900">
                    Features
                  </th>
                  <th class="pb-4 text-lg font-semibold text-[#03bfa4] text-center">
                    Fruitpopz
                  </th>
                  <th class="pb-4 text-lg font-semibold text-[#ec1e2a] text-center">
                    Plummy
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr>
                  <td class="py-4 font-medium text-gray-900">
                    Milk Fat Content
                  </td>
                  <td class="py-4 text-center text-[#03bfa4]">Minimum 10%</td>
                  <td class="py-4 text-center text-[#ec1e2a]">2.5% - 10%</td>
                </tr>
                <tr>
                  <td class="py-4 font-medium text-gray-900">Texture</td>
                  <td class="py-4 text-center text-[#03bfa4]">
                    Rich &amp; Creamy
                  </td>
                  <td class="py-4 text-center text-[#ec1e2a]">
                    Balanced &amp; Light
                  </td>
                </tr>
                <tr>
                  <td class="py-4 font-medium text-gray-900">Price Point</td>
                  <td class="py-4 text-center text-[#03bfa4]">Premium</td>
                  <td class="py-4 text-center text-[#ec1e2a]">Accessible</td>
                </tr>
                <tr>
                  <td class="py-4 font-medium text-gray-900">
                    Target Audience
                  </td>
                  <td class="py-4 text-center text-[#03bfa4]">
                    Luxury Seekers
                  </td>
                  <td class="py-4 text-center text-[#ec1e2a]">
                    Everyday Families
                  </td>
                </tr>
                <tr>
                  <td class="py-4 font-medium text-gray-900">Health Options</td>
                  <td class="py-4 text-center text-[#03bfa4]">
                    Sugar-free with Probiotics
                  </td>
                  <td class="py-4 text-center text-[#ec1e2a]">
                    Balanced Nutrition
                  </td>
                </tr>
                <tr>
                  <td class="py-4 font-medium text-gray-900">Flavor Variety</td>
                  <td class="py-4 text-center text-[#03bfa4]">
                    Classic &amp; Innovative
                  </td>
                  <td class="py-4 text-center text-[#ec1e2a]">
                    Popular &amp; Seasonal
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section class="py-24 bg-[#0c2342]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-8">
            Our Brand Promise
          </h2>
          <p class="text-xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            Whether you choose Fruitpopz or Plummy, you're guaranteed the same
            commitment to quality, natural ingredients, and exceptional taste
            that defines Ziyadah Foods.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <RiAwardLine size={26} color="white" />
              </div>
              <h3 class="text-xl font-semibold text-white mb-2">
                Premium Quality
              </h3>
              <p class="text-white/90">
                Only the finest ingredients in every product
              </p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <RiShieldCheckLine size={26} color="white" />
              </div>
              <h3 class="text-xl font-semibold text-white mb-2">
                Trusted Manufacturing
              </h3>
              <p class="text-white/90">
                Strict hygiene and quality control standards
              </p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <RiCustomerServiceLine size={26} color="white" />
              </div>
              <h3 class="text-xl font-semibold text-white mb-2">
                Customer Satisfaction
              </h3>
              <p class="text-white/90">
                Delighting customers with every experience
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
