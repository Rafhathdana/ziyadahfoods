
import React from "react";
export default function Timeline({ items = [] }) {
  return (
    <div className="relative max-w-3xl mx-auto">
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-black/10" />
      <ul className="space-y-6 relative z-10">
        {items.map((it, idx) => (
          <li key={idx} className={`flex ${idx % 2 ? "justify-end" : "justify-start"}`}>
            <div className="w-1/2 px-3">
              <div className="bg-white rounded-xl p-4 soft-shadow">
                <div className="font-semibold">{it.title}</div>
                <div className="text-black/70 text-sm mt-1">{it.desc}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
