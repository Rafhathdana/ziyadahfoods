
import React from "react";
import Badge from "./Badge";
export default function BrandHighlight({ badge, tone="mint", title, subtitle, points=[], image, reverse=false, cta }) {
  return (
    <div className={`grid md:grid-cols-2 gap-8 items-center ${reverse ? "md:flex-row-reverse": ""}`}>
      <div className={`${reverse ? "md:order-2": ""}`}>
        <Badge tone={tone}>{badge}</Badge>
        <h3 className="text-2xl md:text-3xl font-bold mt-3">{title}</h3>
        <p className="text-black/70 mt-2">{subtitle}</p>
        <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2 mt-4 text-black/80">
          {points.map((p, i) => <li key={i}>• {p}</li>)}
        </ul>
        {cta}
      </div>
      <div className={`${reverse ? "md:order-1": ""}`}>
        <img src={image} alt={title} className="w-full rounded-2xl soft-shadow" />
      </div>
    </div>
  );
}
