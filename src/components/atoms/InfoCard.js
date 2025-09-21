
import React from "react";
export default function InfoCard({ title, children }) {
  return (
    <div className="bg-white rounded-2xl p-6 soft-shadow">
      <h3 className="font-semibold text-lg">{title}</h3>
      <div className="text-black/70 mt-2">{children}</div>
    </div>
  );
}
