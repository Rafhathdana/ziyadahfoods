
import React from "react";
export default function Badge({ children, tone = "mint" }) {
  const tones = {
    mint: "bg-mint/15 text-mint border-mint/30",
    red: "bg-[#ff5a5f]/10 text-[#ff5a5f] border-[#ff5a5f]/30",
    blue: "bg-[#183a66]/10 text-[#183a66] border-[#183a66]/30",
    gray: "bg-black/5 text-black/60 border-black/10",
  };
  return (
    <span className={`inline-block text-xs px-2.5 py-1 rounded-full border ${tones[tone] || tones.gray}`}>
      {children}
    </span>
  );
}
