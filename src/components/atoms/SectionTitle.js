
import React from "react";
export default function SectionTitle({ title, subtitle, className = "" }) {
  return (
    <div className={`text-center ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
      {subtitle && <p className="text-black/70 max-w-3xl mx-auto mt-3">{subtitle}</p>}
    </div>
  );
}
