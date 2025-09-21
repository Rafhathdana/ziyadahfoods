
import React from "react";
export default function CompareTable({ rows }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-2xl soft-shadow overflow-hidden">
        <thead>
          <tr className="text-left bg-black/5">
            <th className="p-4">Features</th>
            <th className="p-4 text-mint">Fruitpopz</th>
            <th className="p-4 text-[#ff5a5f]">Plummy</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-t border-black/5">
              <td className="p-4 font-medium">{r.feature}</td>
              <td className="p-4">{r.fruitpopz}</td>
              <td className="p-4">{r.plummy}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
