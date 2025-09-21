
import React from "react";
export default function FeatureCard({ icon, title, desc }) {
  return (
    <article className="glass rounded-2xl p-6 soft-shadow">
      <div className="text-3xl">{icon}</div>
      <h3 className="mt-3 font-semibold text-lg">{title}</h3>
      <p className="text-black/70 mt-1">{desc}</p>
    </article>
  );
}
