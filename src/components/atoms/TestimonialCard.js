
import React from "react";
export default function TestimonialCard({ image,person, role, text, stars = 5 }) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-xl">
      <div className="flex items-center gap-3 mb-6">
        {/* <div className="w-14 h-14 rounded-full bg-gray-300" /> */}
        <img alt="Franchise Owner" className="w-16 h-16 rounded-full object-cover object-top mr-4" src={image} />
        <div>
          <div className="text-xl font-bold text-gray-900">{person}</div>
          <div className="text-gray-600">{role}</div>
        </div>
      </div>
      <p className="text-gray-600 mt-3">{text}</p>
      <div className="mt-2 text-prime text-2xl">{Array.from({length:stars}).map((_,i)=><span key={i}>★</span>)}</div>
    </div>
  );
}
