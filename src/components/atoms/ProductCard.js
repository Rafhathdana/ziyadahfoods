
import React from "react";
import Badge from "./Badge";

export default function ProductCard({ item }) {
  return (
    <article className="bg-white rounded-2xl shadow-lg hover:shadow-xl overflow-hidden group p-4">
      <div className="relative">
        <img src={item.image} alt={item.name} className="w-full h-60 object-cover rounded-xl" />
        <div className="absolute top-2 left-2"><Badge tone={item.brand === "Fruitpopz" ? "mint" : "red"}>{item.brand}</Badge></div>
      </div>
      <h3 className="mt-3 font-semibold text-lg">{item.name}</h3>
      <p className="text-black/60 text-sm mt-1 line-clamp-2 mb-4">{item.desc}</p>
      <ul className="flex flex-wrap gap-2 mb-4">
        {item.points?.slice(0,3).map((p, i) => <li key={i} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"> {p}</li>)}
      </ul>
      <div className="mt-4 flex items-center justify-between">
        <span className="font-bold">₹{item.price}</span>
        <button className="btn-primary" onClick={() => alert(`Added ${item.name} to cart!`)}>Add to Cart</button>
      </div>
    </article>
  );
}
