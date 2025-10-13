import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navClass = ({ isActive }) =>
    `px-4 py-2 rounded-full hover:bg-prime/100 hover:text-white transition ${
      isActive ? "bg-prime text-white" : "text-prime"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-prime font-extrabold text-xl"
        >
          <span className="sprinkle">🍦</span>
          Ziyadah Foods
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-prime text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2">
          <NavLink to="/" end className={navClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={navClass}>
            About Us
          </NavLink>
          <NavLink to="/brands" className={navClass}>
            Our Brands
          </NavLink>
          <NavLink to="/products" className={navClass}>
            Products
          </NavLink>
          <NavLink to="/franchise" className={navClass}>
            Franchise
          </NavLink>
          <NavLink to="/contact" className={navClass}>
            Contact
          </NavLink>
        </nav>
      </div>

      {/* Mobile Nav Dropdown */}
      {open && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-100 absolute w-full left-0 top-[64px] z-40">
          <nav className="flex flex-col items-start p-4 space-y-2">
            <NavLink to="/" end className={navClass} onClick={() => setOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/about" className={navClass} onClick={() => setOpen(false)}>
              About Us
            </NavLink>
            <NavLink to="/brands" className={navClass} onClick={() => setOpen(false)}>
              Our Brands
            </NavLink>
            <NavLink to="/products" className={navClass} onClick={() => setOpen(false)}>
              Products
            </NavLink>
            <NavLink to="/franchise" className={navClass} onClick={() => setOpen(false)}>
              Franchise
            </NavLink>
            <NavLink to="/contact" className={navClass} onClick={() => setOpen(false)}>
              Contact
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}
