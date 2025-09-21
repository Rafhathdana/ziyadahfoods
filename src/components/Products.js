
import React, { useMemo, useState } from "react";
import SectionTitle from "./atoms/SectionTitle";
import Badge from "./atoms/Badge";
import ProductCard from "./atoms/ProductCard";

const CATEGORIES = ["All", "Ice Creams", "Kulfi", "Ice Candies", "Sip-Up"];
const BRANDS = ["All Brands", "Fruitpopz", "Plummy"];

const DATA = [
  { id:1, name:"Fruitpopz Vanilla Supreme", brand:"Fruitpopz", category:"Ice Creams", price:180, image:"/hero-icecream.png",
    desc:"Signature vanilla made with Madagascar beans.", points:["Rich texture","Natural vanilla","No added water"] },
  { id:2, name:"Fruitpopz Chocolate Deluxe", brand:"Fruitpopz", category:"Ice Creams", price:190, image:"/hero-icecream.png",
    desc:"Deep cocoa with fudge swirls.", points:["Premium cocoa","Dense & creamy","Fan favorite"] },
  { id:3, name:"Plummy Classic Vanilla", brand:"Plummy", category:"Ice Creams", price:150, image:"/hero-icecream.png",
    desc:"Balanced & light vanilla.", points:["Medium-fat dairy","Light texture","Popular pick"] },
  { id:4, name:"Traditional Malai Kulfi", brand:"Plummy", category:"Kulfi", price:120, image:"/hero-icecream.png",
    desc:"Slow-cooked malai kulfi with rich flavour.", points:["Traditional recipe","Creamy taste","Stick format"] },
  { id:5, name:"Orange Ice Candy", brand:"Fruitpopz", category:"Ice Candies", price:60, image:"/hero-icecream.png",
    desc:"Refreshing orange flavored ice candy.", points:["Real fruit taste","Refreshing","Kids love it"] },
  { id:6, name:"Cola Sip-Up", brand:"Plummy", category:"Sip-Up", price:45, image:"/hero-icecream.png",
    desc:"Fun frozen cola with a zing.", points:["Fun & fizzy","On-the-go","Great for summers"] },
];

export default function Products() {
  const [cat, setCat] = useState("All");
  const [brand, setBrand] = useState("All Brands");

  const filtered = useMemo(() => {
    return DATA.filter(p =>
      (cat === "All" || p.category === cat) &&
      (brand === "All Brands" || p.brand === brand)
    );
  }, [cat, brand]);

  return (
    <div>
      {/* HERO */}
      <section
        className="relative h-[300px] flex items-end"
        style={{ backgroundImage: "url('/products-hero.png')", backgroundSize:'cover', backgroundPosition:'center' }}
      >
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative max-w-6xl mx-auto px-4 pb-10 text-white">
          <h1 className="text-4xl font-extrabold drop-shadow">Our <span className="text-white/90">Products</span></h1>
          <p className="text-white/90 max-w-2xl mt-2">Discover our complete range of premium frozen treats crafted with love and the finest ingredients.</p>
        </div>
      </section>

      {/* FILTERS */}
      <section className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map(c => (
            <button key={c} onClick={() => setCat(c)} className={`px-3 py-1 rounded-full border ${cat===c?"bg-[#183a66] text-white":"bg-white"}`}>{c}</button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 mt-3">
          {BRANDS.map(b => (
            <button key={b} onClick={() => setBrand(b)} className={`px-3 py-1 rounded-full border ${brand===b?"bg-[#183a66] text-white":"bg-white"}`}>{b}</button>
          ))}
        </div>
        <div className="mt-6 text-black/70">{filtered.length} Products Found</div>
      </section>

      {/* GRID */}
      <section className="max-w-6xl mx-auto px-4 pb-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(item => <ProductCard key={item.id} item={item} />)}
        </div>
      </section>

      {/* CATEGORIES STRIP */}
      <section className="bg-[#f7fbff] py-14">
        <div className="max-w-6xl mx-auto px-4">
          <SectionTitle title="Product Categories" subtitle="Explore our diverse range of frozen treats designed to satisfy every taste and occasion" />
          <div className="grid md:grid-cols-4 gap-6 mt-8">
            {[
              { title:"Ice Creams", detail:"32 Varieties" },
              { title:"Kulfi", detail:"18 Varieties" },
              { title:"Ice Candies", detail:"8 Flavors" },
              { title:"Sip-Up", detail:"6 Flavors" },
            ].map(c => (
              <div key={c.title} className="bg-white rounded-2xl p-6 text-center soft-shadow">
                <div className="text-2xl">🍧</div>
                <div className="font-semibold mt-2">{c.title}</div>
                <div className="text-black/60 text-sm">{c.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
