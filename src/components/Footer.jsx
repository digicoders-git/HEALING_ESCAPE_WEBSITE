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
  Youtube,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import landLogoo from "../assets/landLogoo.png";
import { fadeIn, staggerContainer } from "../utils/framerVariants";

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-8 px-4 md:px-8 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-secondary/40 to-transparent"></div>
      <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl"></div>

      {/* 1. News/Notice Banner (Unique Medical Feature) */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeIn("up", 0.1)}
        className="max-w-7xl mx-auto mb-0"
      >
        {/* <div className="bg-gradient-to-r from-secondary/15 to-secondary/5 border border-secondary/30 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-sm shadow-2xl shadow-secondary/10 relative overflow-hidden hover:border-secondary/50 transition-all duration-500">
          <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
          <div className="flex items-center gap-5 z-10">
            <div className="bg-gradient-to-br from-secondary to-secondary/80 p-4 rounded-2xl text-white shadow-xl hover:scale-110 transition-transform duration-300">
              <ShieldCheck size={28} />
            </div>
            <div>
              <h4 className="font-bold text-sm uppercase tracking-[0.25em] text-secondary mb-2">
                Latest Notice & News
              </h4>
              <p className="text-white/80 text-sm font-medium leading-relaxed">
                Free Medical Consultation Camp in Lucknow - January 2026.
                Register Now!
              </p>
            </div>
          </div>
          <button className="bg-secondary hover:bg-white hover:text-primary text-white font-bold py-4 px-10 rounded-xl text-xs uppercase tracking-[0.2em] transition-all duration-300 shadow-2xl shadow-secondary/30 hover:shadow-white/20 hover:scale-105 z-10">
            View Offer Letter
          </button>
        </div> */}
      </motion.div>

      <motion.div
        variants={staggerContainer(0.1, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 relative z-10"
      >
        {/* Column 1: About */}
        <motion.div
          variants={fadeIn("up", 0.1)}
          className="lg:col-span-1 space-y-7"
        >
          <div className="relative inline-block group">
            <img
              src={landLogoo}
              alt="Healing Escape Global"
              className="h-12 w-auto brightness-200 transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute -bottom-2 left-0 w-20 h-1 bg-linear-to-r from-secondary via-secondary/50 to-transparent rounded-full"></div>
          </div>
          <p className="text-white/70 text-base font-medium leading-relaxed">
            Your trusted bridge to India&apos;s premier healthcare. Connecting
            global patients with JCI & NABH accredited hospitals for ethical and
            affordable healing journeys.
          </p>
          {/* <div className="flex items-center gap-3 bg-secondary/10 px-4 py-3 rounded-xl border border-secondary/20 hover:bg-secondary/15 hover:border-secondary/30 transition-all duration-300">
            <ShieldCheck size={18} className="text-secondary" />
            <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-secondary">
              NABH Partner Portal
            </span>
          </div> */}
        </motion.div>

        {/* Column 2: Quick Links */}
        <motion.div variants={fadeIn("up", 0.2)} className="space-y-7">
          <div className="relative pb-4">
            <h4 className="font-bold text-sm uppercase tracking-[0.25em] text-white">
              Quick Links
            </h4>
            <div className="absolute bottom-0 left-0 w-16 h-1 bg-secondary rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-8 h-1 bg-white/30 rounded-full"></div>
          </div>
          <ul className="space-y-4 text-white/80 text-base font-medium">
            <li>
              <Link
                to="/hospitals"
                className="hover:text-secondary transition-all duration-300 inline-flex items-center gap-3 hover:gap-4 group"
              >
                <ExternalLink
                  size={14}
                  className="text-secondary group-hover:rotate-45 transition-transform duration-300"
                />
                <span>Find Hospitals</span>
              </Link>
            </li>
            <li>
              <Link
                to="/journey"
                className="hover:text-secondary transition-all duration-300 inline-flex items-center gap-3 hover:gap-4 group"
              >
                <ExternalLink
                  size={14}
                  className="text-secondary group-hover:rotate-45 transition-transform duration-300"
                />
                <span>Medical Visa Info</span>
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-secondary transition-all duration-300 inline-flex items-center gap-3 hover:gap-4 group"
              >
                <ExternalLink
                  size={14}
                  className="text-secondary group-hover:rotate-45 transition-transform duration-300"
                />
                <span>Our Services</span>
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className="hover:text-secondary transition-all duration-300 inline-flex items-center gap-3 hover:gap-4 group"
              >
                <ExternalLink
                  size={14}
                  className="text-secondary group-hover:rotate-45 transition-transform duration-300"
                />
                <span>Hospital Gallery</span>
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Column 3: Legal Links */}
        <motion.div variants={fadeIn("up", 0.3)} className="space-y-7">
          <div className="relative pb-4">
            <h4 className="font-bold text-sm uppercase tracking-[0.25em] text-white">
              Legal Links
            </h4>
            <div className="absolute bottom-0 left-0 w-16 h-1 bg-secondary rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-8 h-1 bg-white/30 rounded-full"></div>
          </div>
          <ul className="space-y-4 text-white/80 text-base font-medium">
            <li>
              <Link
                to="/privacy-policy"
                className="hover:text-secondary transition-all duration-300 hover:translate-x-2 inline-block"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/terms-of-service"
                className="hover:text-secondary transition-all duration-300 hover:translate-x-2 inline-block"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                to="/cookie-policy"
                className="hover:text-secondary transition-all duration-300 hover:translate-x-2 inline-block"
              >
                Cookie Policy
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Column 4: Contact Info */}
        <motion.div variants={fadeIn("up", 0.4)} className="space-y-7">
          <div className="relative pb-4">
            <h4 className="font-bold text-sm uppercase tracking-[0.25em] text-white">
              Contact Info
            </h4>
            <div className="absolute bottom-0 left-0 w-16 h-1 bg-secondary rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-8 h-1 bg-white/30 rounded-full"></div>
          </div>
          <ul className="space-y-5">
            <li className="flex gap-4 text-white/90 text-base group hover:text-secondary transition-colors duration-300">
              <MapPin
                size={18}
                className="text-secondary shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300"
              />
              <span className="leading-relaxed">
                Lucknow, Uttar Pradesh, India - 226010
              </span>
            </li>
            <li className="flex items-center gap-4 text-white/90 text-base group hover:text-secondary transition-colors duration-300">
              <Phone
                size={18}
                className="text-secondary shrink-0 group-hover:scale-110 transition-transform duration-300"
              />
              <a href="tel:+91 9506666642">+91 9506666642</a>
            </li>
            <li className="flex items-center gap-4 text-white/90 text-base group hover:text-secondary transition-colors duration-300">
              <Mail
                size={18}
                className="text-secondary shrink-0 group-hover:scale-110 transition-transform duration-300"
              />
              <a href="mailto:contactus@healingesacpeglobal.com">contactus@healingesacpeglobal.com</a>
            </li>
          </ul>
        </motion.div>

        {/* Column 5: Social Media */}
        <motion.div variants={fadeIn("up", 0.5)} className="space-y-7">
          <div className="relative pb-4">
            <h4 className="font-bold text-sm uppercase tracking-[0.25em] text-white">
              Social Connect
            </h4>
            <div className="absolute bottom-0 left-0 w-16 h-1 bg-secondary rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-8 h-1 bg-white/30 rounded-full"></div>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              { Icon: Facebook, href: "#" },
              { Icon: Twitter, href: "#" },
              { Icon: Instagram, href: "#" },
              { Icon: Linkedin, href: "#" },
              { Icon: Youtube, href: "#" },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-lg group"
              >
                <social.Icon
                  size={18}
                  className="group-hover:text-white transition-colors"
                />
              </a>
            ))}
          </div>
          {/* <div className="pt-6 p-5 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 text-[10px] font-bold text-white/60 uppercase tracking-[0.2em] text-center backdrop-blur-sm hover:border-secondary/30 transition-all duration-300">
            Scan for Digital Brochure
          </div> */}
        </motion.div>
      </motion.div>

      {/* Bottom Bar */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeIn("up", 0.6)}
        className="max-w-7xl mx-auto mt-10 pt-10 border-t border-white/10 flex items-center justify-center relative"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-px bg-linear-to-r from-transparent via-secondary to-transparent"></div>
        <p className="text-white/80 text-sm font-medium tracking-[0.15em] text-center">
          © 2026 Healing Escape Global. Design and Developed by{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://digicoders.in"
            className="hover:text-secondary transition-colors duration-300 font-bold"
          >
            #TeamDigiCoders
          </a>
        </p>
      </motion.div>

      {/* Corporate Watermark */}
      <div className="absolute -bottom-20 -right-20 opacity-[0.03] pointer-events-none select-none">
        <h2 className="text-[18rem] font-bold leading-none tracking-tighter">
          HE
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
