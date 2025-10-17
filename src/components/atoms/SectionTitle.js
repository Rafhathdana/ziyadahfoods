
import React from "react";
export default function SectionTitle({ title, subtitle, className = "" }) {
  return (
    <div className={`text-center ${className}`}>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{title}</h2>
      {subtitle && <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>}
    </div>
  );
}
