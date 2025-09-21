
import React from "react";
import Badge from "./Badge";

export default function ProductCard({ item }) {
  return (
    <article className="bg-white rounded-2xl p-4 soft-shadow flex flex-col">
      <div className="relative">
        <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-xl" />
        <div className="absolute top-2 left-2"><Badge tone={item.brand === "Fruitpopz" ? "mint" : "red"}>{item.brand}</Badge></div>
      </div>
      <h3 className="mt-3 font-semibold text-lg">{item.name}</h3>
      <p className="text-black/60 text-sm mt-1 line-clamp-2">{item.desc}</p>
      <ul className="text-black/70 text-sm mt-3 space-y-1">
        {item.points?.slice(0,3).map((p, i) => <li key={i}>• {p}</li>)}
      </ul>
      <div className="mt-4 flex items-center justify-between">
        <span className="font-bold">₹{item.price}</span>
        <button className="btn-primary" onClick={() => alert(`Added ${item.name} to cart!`)}>Add to Cart</button>
      </div>
    </article>
  );
}
