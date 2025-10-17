
import { RiFacebookFill, RiInstagramLine, RiLinkedinFill, RiTwitterFill, RiTwitterXLine, RiWhatsappFill, RiWhatsappLine } from "@remixicon/react";
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0f1c2e] text-white">
      <div className="max-w-6xl mx-auto px-4 pt-14 pb-4 grid md:grid-cols-3 gap-10">
        <div className="flex flex-col items-center">
          <img src="/images/zf.png" alt="Ziyadah Foods Logo" className="h-48 w-48 object-contain"/>
          {/* <div className="flex items-center gap-2 font-bold text-lg">
            <span className="w-7 h-7 rounded-full bg-white/10"></span>
            Ziyadah Foods
          </div> */}
        </div>
          
        <div className="flex flex-col items-center">
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-white/80">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/products" className="hover:underline">Products</Link></li>
            <li><Link to="/franchise" className="hover:underline">Our Brands</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <h4 className="font-semibold mb-3">Contact Info</h4>
          <ul className="space-y-2 text-white/80 text-center">
            <li>Ziyadah Foods Private Limited<br/>Kerala, India</li>
            <li>+91 9961996246 </li>
            <li>operations@ziyadahfoods.com</li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 pb-4 text-sm text-white/70 flex items-center flex-col">
      <p className="text-white/75 mt-3 text-center font-semibold">
            Delivering fine quality, exotic frozen treats since 2020. Made with premium natural ingredients under strict hygiene standards.
          </p>
          <div className="flex space-x-4 mt-7">
            <a href="#" className="w-10 h-10 bg-[#0c2342] rounded-full flex items-center justify-center hover:bg-[#0a1d35] transition-colors cursor-pointer"><RiWhatsappLine size={22} color="white" /></a>
            <a href="#" className="w-10 h-10 bg-[#0c2342] rounded-full flex items-center justify-center hover:bg-[#0a1d35] transition-colors cursor-pointer"> <RiFacebookFill size={22} color="white" /></a>
            <a href="#" className="w-10 h-10 bg-[#0c2342] rounded-full flex items-center justify-center hover:bg-[#0a1d35] transition-colors cursor-pointer"><RiInstagramLine size={22} color="white" /></a>
            <a href="#" className="w-10 h-10 bg-[#0c2342] rounded-full flex items-center justify-center hover:bg-[#0a1d35] transition-colors cursor-pointer"><RiTwitterXLine size={22} color="white" /></a>
          </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4 text-sm text-white/70 flex items-center justify-center">
          <span>© {new Date().getFullYear()} Ziyadah Foods Private Limited. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
