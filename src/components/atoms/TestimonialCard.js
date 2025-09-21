
import React from "react";
export default function TestimonialCard({ person, role, text, stars = 5 }) {
  return (
    <div className="bg-white rounded-2xl p-5 soft-shadow">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-black/10" />
        <div>
          <div className="font-semibold">{person}</div>
          <div className="text-black/60 text-sm">{role}</div>
        </div>
      </div>
      <p className="text-black/70 mt-3">{text}</p>
      <div className="mt-2 text-[#ffb703]">{Array.from({length:stars}).map((_,i)=><span key={i}>★</span>)}</div>
    </div>
  );
}
