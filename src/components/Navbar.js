
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navClass = ({ isActive }) =>
    `px-4 py-2 rounded-full hover:bg-white/70 hover:text-chocolate transition ${
      isActive ? "bg-white text-chocolate" : "text-white"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-[#183a66]/95 backdrop-blur hero-scoop shadow">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-white font-extrabold text-xl">
          <span className="sprinkle">🍦</span>
          Ziyadah Foods
        </Link>
        <button className="md:hidden text-white text-2xl" onClick={() => setOpen(!open)} aria-label="Toggle menu">☰</button>
        <nav className={`md:flex items-center gap-2 ${open ? "block" : "hidden"} md:block`}>
          <NavLink to="/" end className={navClass}>Home</NavLink>
          <NavLink to="/about" className={navClass}>About Us</NavLink>
          <NavLink to="/brands" className={navClass}>Our Brands</NavLink>
          <NavLink to="/products" className={navClass}>Products</NavLink>
          <NavLink to="/franchise" className={navClass}>Franchise</NavLink>
          <NavLink to="/contact" className={navClass}>Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}
