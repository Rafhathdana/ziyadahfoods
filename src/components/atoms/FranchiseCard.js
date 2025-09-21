
import React from "react";

export default function FranchiseCard({ icon, title, bullets = [], footerLeft, footerRight, tone = "blue" }) {
  const colors = {
    blue: "border-[#183a66]/20",
    orange: "border-[#ff7a00]/20"
  };
  return (
    <div className={`bg-white rounded-2xl p-6 soft-shadow border ${colors[tone]}`}>
      <div className="flex items-center gap-3">
        <div className="text-2xl">{icon}</div>
        <h3 className="font-semibold text-lg">{title}</h3>
      </div>
      <ul className="mt-3 space-y-1 text-black/80">
        {bullets.map((b, i) => <li key={i}>• {b}</li>)}
      </ul>
      <div className="mt-4 flex items-center justify-between text-sm">
        <span className="font-semibold">{footerLeft}</span>
        <span className="font-semibold">{footerRight}</span>
      </div>
    </div>
  );
}
