import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";
// import landLogoo from "../../assets/landLogoo.png";
import landLogoo from "../assets/landLogoo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8 px-4 md:px-8 relative overflow-hidden">
      {/* 1. News/Notice Banner (Unique Medical Feature) */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="bg-secondary/10 border border-secondary/20 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-sm">
          <div className="flex items-center gap-4">
            <div className="bg-secondary p-3 rounded-xl text-white">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h4 className="font-bold text-sm uppercase tracking-widest text-secondary">
                Latest Notice & News
              </h4>
              <p className="text-white/70 text-xs mt-1">
                Free Medical Consultation Camp in Lucknow - January 2026.
                Register Now!
              </p>
            </div>
          </div>
          <button className="bg-secondary hover:bg-white hover:text-primary text-white font-bold py-3 px-8 rounded-xl text-[10px] uppercase tracking-widest transition-all shadow-xl shadow-secondary/20">
            View Offer Letter
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 relative z-10">
        {/* Column 1: About */}
        <div className="lg:col-span-1 space-y-6">
          <img
            src={landLogoo}
            alt="Healing Escape Global"
            className="h-10 w-auto brightness-200"
          />
          <p className="text-white/60 text-xs font-medium leading-relaxed">
            Your trusted bridge to India's premier healthcare. Connecting global
            patients with JCI & NABH accredited hospitals for ethical and
            affordable healing journeys.
          </p>
          <div className="flex items-center gap-3 text-secondary">
            <ShieldCheck size={16} />
            <span className="text-[9px] font-bold uppercase tracking-widest">
              NABH Partner Portal
            </span>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-6">
          <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-secondary border-b border-white/10 pb-2">
            Quick Links
          </h4>
          <ul className="space-y-3 text-white/80 text-xs font-bold">
            <li>
              <Link
                to="/"
                className="hover:text-secondary transition-colors inline-flex items-center gap-2"
              >
                <ExternalLink size={12} /> Find Hospitals
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className="hover:text-secondary transition-colors inline-flex items-center gap-2"
              >
                <ExternalLink size={12} /> Medical Visa Info
              </Link>
            </li>
            <li>
              <Link
                to="/journey"
                className="hover:text-secondary transition-colors inline-flex items-center gap-2"
              >
                <ExternalLink size={12} /> Patient Guide
              </Link>
            </li>
            <li>
              <Link
                to="/success-stories"
                className="hover:text-secondary transition-colors inline-flex items-center gap-2"
              >
                <ExternalLink size={12} /> Success Stories
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Treatments */}
        <div className="space-y-6">
          <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-secondary border-b border-white/10 pb-2">
            Treatments
          </h4>
          <ul className="space-y-3 text-white/80 text-xs font-bold">
            <li>
              <a href="#" className="hover:text-secondary transition-colors">
                Oncology Care
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-secondary transition-colors">
                Cardiac Surgery
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-secondary transition-colors">
                Organ Transplant
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-secondary transition-colors">
                IVF & Fertility
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-secondary transition-colors">
                Neuro Surgery
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div className="space-y-6">
          <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-secondary border-b border-white/10 pb-2">
            Contact Info
          </h4>
          <ul className="space-y-4">
            <li className="flex gap-3 text-white/90 text-xs">
              <MapPin size={16} className="text-secondary shrink-0" />
              <span>Lucknow, Uttar Pradesh, India - 226010</span>
            </li>
            <li className="flex items-center gap-3 text-white/90 text-xs">
              <Phone size={16} className="text-secondary shrink-0" />
              <span>+91 91404 05040</span>
            </li>
            <li className="flex items-center gap-3 text-white/90 text-xs">
              <Mail size={16} className="text-secondary shrink-0" />
              <span>info@healingescape.com</span>
            </li>
          </ul>
        </div>

        {/* Column 5: Social Media */}
        <div className="space-y-6">
          <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-secondary border-b border-white/10 pb-2">
            Social Connect
          </h4>
          <div className="flex gap-3">
            <a
              href="#"
              className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all"
            >
              <Twitter size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all"
            >
              <Linkedin size={18} />
            </a>
          </div>
          <div className="pt-4 p-4 rounded-xl bg-white/5 border border-white/10 text-[9px] font-bold text-white/40 uppercase tracking-widest text-center">
            Scan for Digital Brochure
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-white/80 text-[10px] font-bold uppercase tracking-[0.2em]">
          © 2026 Healing Escape Global. Design and Developed by{" "}
          <a
            target="_blank"
            href="https://digicoders.in"
            className="hover:text-secondary transition-colors"
          >
            #TeamDigicoders
          </a>
        </p>
        <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-white/80">
          <a href="#" className="hover:text-secondary transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-secondary transition-colors">
            Terms of Service
          </a>
          <a href="#" className="hover:text-secondary transition-colors">
            Cookie Policy
          </a>
        </div>
      </div>

      {/* Corporate Watermark */}
      <div className="absolute -bottom-10 -right-10 opacity-5 pointer-events-none select-none">
        <h2 className="text-[12rem] font-bold leading-none">HE</h2>
      </div>
    </footer>
  );
};

export default Footer;
