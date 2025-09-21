
import React, { useState } from "react";

export default function FAQAccordion({ items = [] }) {
  const [open, setOpen] = useState(null);
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {items.map((it, idx) => (
        <div key={idx} className="bg-white rounded-2xl p-5 soft-shadow">
          <button
            className="w-full text-left font-semibold flex items-center justify-between"
            onClick={() => setOpen(open === idx ? null : idx)}
            aria-expanded={open === idx}
          >
            {it.q}
            <span className="text-xl">{open === idx ? "−" : "+"}</span>
          </button>
          {open === idx && <p className="text-black/70 mt-2">{it.a}</p>}
        </div>
      ))}
    </div>
  );
}
