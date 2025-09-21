
import React from "react";
export default function StatStrip({ items }) {
  return (
    <section className="bg-[#0b2343] text-white">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-3xl md:text-4xl font-extrabold">{s.value}</div>
            <div className="text-white/80 text-sm mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
