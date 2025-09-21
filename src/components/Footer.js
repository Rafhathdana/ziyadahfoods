
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0f1c2e] text-white">
      <div className="max-w-6xl mx-auto px-4 pt-14 pb-10 grid md:grid-cols-3 gap-10">
        <div>
          <img src="/zf.png" alt="Ziyadah Foods Logo" className="h-22 w-22 object-contain"/>
          {/* <div className="flex items-center gap-2 font-bold text-lg">
            <span className="w-7 h-7 rounded-full bg-white/10"></span>
            Ziyadah Foods
          </div> */}
          <p className="text-white/75 mt-3">
            Delivering fine quality, exotic frozen treats since 2020. Made with premium natural ingredients under strict hygiene standards.
          </p>
          {/* <div className="flex gap-3 mt-4 text-xl">
            <a href="#" aria-label="Instagram">📷</a>
            <a href="#" aria-label="Facebook">👍</a>
            <a href="#" aria-label="Twitter">🐦</a>
            <a href="#" aria-label="LinkedIn">💼</a>
          </div> */}
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 bg-[#0c2342] rounded-full flex items-center justify-center hover:bg-[#0a1d35] transition-colors cursor-pointer"><i className="ri-facebook-fill text-lg"></i></a>
            <a href="#" className="w-10 h-10 bg-[#0c2342] rounded-full flex items-center justify-center hover:bg-[#0a1d35] transition-colors cursor-pointer"><i className="ri-instagram-line text-lg"></i></a>
            <a href="#" className="w-10 h-10 bg-[#0c2342] rounded-full flex items-center justify-center hover:bg-[#0a1d35] transition-colors cursor-pointer"><i className="ri-twitter-fill text-lg"></i></a>
            <a href="#" className="w-10 h-10 bg-[#0c2342] rounded-full flex items-center justify-center hover:bg-[#0a1d35] transition-colors cursor-pointer"><i className="ri-linkedin-fill text-lg"></i></a>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-white/80">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/products" className="hover:underline">Products</Link></li>
            <li><Link to="/franchise" className="hover:underline">Our Brands</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Contact Info</h4>
          <ul className="space-y-2 text-white/80">
            <li>Ziyadah Foods Private Limited<br/>Delhi, India</li>
            <li>+91 98705 43210</li>
            <li>info@ziyadahfoods.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4 text-sm text-white/70 flex justify-between">
          <span>© {new Date().getFullYear()} Ziyadah Foods Private Limited. All rights reserved.</span>
          <span>Made with ❤️ & React</span>
        </div>
      </div>
    </footer>
  );
}
