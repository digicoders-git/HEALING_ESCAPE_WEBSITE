import {
  Search,
  ChevronDown,
  Menu,
  X,
  Phone,
  Mail,
  Globe,
  PlayCircle,
  Image as ImageIcon,
  BookOpen,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import landLogo from "../assets/landLogo.png";
import landLogoo from "../assets/landLogoo.png";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 1. Top Utility Bar - Not Sticky (Will scroll away) */}
      <div className="hidden lg:block bg-primary text-white py-2 px-8 text-[11px] font-bold tracking-widest border-b border-white/5 relative z-[110]">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-8 items-center">
            <span className="flex items-center gap-2 hover:text-secondary cursor-pointer transition-colors uppercase">
              <BookOpen size={14} className="text-secondary" /> Blogs
            </span>
            <span className="flex items-center gap-2 hover:text-secondary cursor-pointer transition-colors uppercase">
              <PlayCircle size={14} className="text-secondary" /> Videos
            </span>
            <span className="flex items-center gap-2 hover:text-secondary cursor-pointer transition-colors uppercase">
              <ImageIcon size={14} className="text-secondary" /> Gallery
            </span>
          </div>
          <div className="flex gap-8 items-center">
            <span className="flex items-center gap-2">
              <Mail size={14} className="text-secondary" />{" "}
              info@healingescape.com
            </span>
            <span className="flex items-center gap-2">
              <Phone size={14} className="text-secondary" /> +91 91404 05040
            </span>
            <div className="h-4 w-px bg-white/20 mx-2" />
            <span className="flex items-center gap-2 hover:text-secondary cursor-pointer transition-colors uppercase">
              <Globe size={14} /> EN <ChevronDown size={12} />
            </span>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation - Sticky (Will stay at top) */}
      <nav
        className={`w-full sticky top-0 z-[100] transition-all duration-500 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-lg shadow-lg py-2 border-b border-slate-100"
            : "bg-white py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="shrink-0">
            <img
              src={landLogoo}
              alt="Healing Escape Global"
              className={`transition-all duration-500 h-auto ${
                isScrolled ? "w-[160px] md:w-[200px]" : "w-[160px] md:w-[200px]"
              }`}
            />
          </Link>

          {/* Desktop Nav Items - Normal Weight */}
          <div className="hidden xl:flex items-center gap-1 sm:ml-8">
            <NavMenuLink
              to="/"
              label="Home"
              active={location.pathname === "/"}
            />
            <NavMenuLink
              to="/about-us"
              label="About Us"
              active={location.pathname === "/about-us"}
            />
            <NavDropdown label="Hospitals" />
            <NavDropdown label="Doctors" />
            <NavDropdown label="Treatments" />
            <NavMenuLink to="/services" label="Services" />
            <NavMenuLink to="/journey" label="Journey" />
            <NavDropdown label="Knowledge" />
          </div>

          {/* Search & Enquiry CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <button className="text-primary hover:text-secondary transition-colors p-2 rounded-full hover:bg-slate-50">
              <Search size={22} strokeWidth={2} />
            </button>
            <button className="bg-secondary hover:bg-primary text-white font-bold py-3 px-8 rounded-2xl shadow-xl shadow-secondary/20 transition-all duration-500 text-xs uppercase tracking-widest whitespace-nowrap text-center">
              Enquiry
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden p-2 text-primary focus:outline-none bg-slate-50 rounded-xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X size={28} strokeWidth={2} />
            ) : (
              <Menu size={28} strokeWidth={2} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar Navigation */}
      <div
        className={`fixed inset-0 bg-white/95 backdrop-blur-xl z-[150] xl:hidden transition-all duration-500 ${
          isOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0 invisible"
        }`}
      >
        <div className="p-8 pt-12 h-full flex flex-col">
          <div className="flex justify-between items-center mb-10">
            <Link to="/" onClick={() => setIsOpen(false)}>
              <img src={landLogoo} alt="Logo" className="w-[150px]" />
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="p-3 bg-slate-100 rounded-full text-primary"
            >
              <X size={28} />
            </button>
          </div>

          <div className="space-y-1 overflow-y-auto pr-2 flex-1">
            <MobileNavLink
              to="/"
              label="Home"
              active={location.pathname === "/"}
              onClick={() => setIsOpen(false)}
            />
            <MobileNavLink
              to="/about-us"
              label="About Us"
              active={location.pathname === "/about-us"}
              onClick={() => setIsOpen(false)}
            />
            <MobileNavDropdown label="Our Hospitals" />
            <MobileNavDropdown label="Top Doctors" />
            <MobileNavDropdown label="Medical Specialties" />
            <MobileNavLink
              to="/services"
              label="Global Services"
              onClick={() => setIsOpen(false)}
            />
            <MobileNavLink
              to="/journey"
              label="Patient Journey"
              onClick={() => setIsOpen(false)}
            />
            <MobileNavDropdown label="Portal Knowledge" />

            <div className="h-px bg-slate-100 my-8" />

            <div className="grid grid-cols-2 gap-3 pb-6">
              <UtilityItem icon={<BookOpen size={16} />} label="Blogs" />
              <UtilityItem icon={<PlayCircle size={16} />} label="Videos" />
              <UtilityItem icon={<ImageIcon size={16} />} label="Gallery" />
              <UtilityItem icon={<Globe size={16} />} label="English" />
            </div>
          </div>

          <div className="pt-6">
            <button className="w-full bg-secondary text-white font-bold py-5 rounded-2xl shadow-xl shadow-secondary/20 uppercase tracking-widest text-sm">
              Contact Us / Enquiry
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

/* Components */

const NavMenuLink = ({ to, label, active }) => (
  <Link
    to={to}
    className={`px-3 py-2 text-[12px] font-bold uppercase tracking-wide transition-all relative group whitespace-nowrap ${
      active ? "text-primary" : "text-slate-600 hover:text-primary"
    }`}
  >
    {label}
    <span
      className={`absolute bottom-0 left-3 right-3 h-[2px] bg-secondary rounded-full transform transition-all duration-300 ${
        active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
      }`}
    />
  </Link>
);

const NavDropdown = ({ label }) => (
  <div className="relative group px-3 py-2 cursor-pointer">
    <div className="flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-wide text-slate-600 group-hover:text-primary transition-all whitespace-nowrap">
      {label}{" "}
      <ChevronDown
        size={14}
        className="group-hover:translate-y-1 transition-transform text-slate-400 group-hover:text-secondary"
      />
    </div>
    <div className="absolute top-full left-0 w-64 bg-white/95 backdrop-blur-xl shadow-2xl rounded-2xl border border-slate-100 p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 translate-y-2 group-hover:translate-y-0 z-[101]">
      <DropdownItem label="Browse by Category" />
      <DropdownItem label="Most Popular Choices" />
      <DropdownItem label="International Centers" />
    </div>
  </div>
);

const DropdownItem = ({ label }) => (
  <a
    href="#"
    className="block px-4 py-2.5 text-[11px] font-bold text-slate-600 hover:bg-primary hover:text-white rounded-xl transition-all duration-300 uppercase tracking-wider"
  >
    {label}
  </a>
);

const MobileNavLink = ({ to, label, active, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className={`block py-4 text-xl font-bold uppercase tracking-wide transition-all ${
      active
        ? "text-primary border-l-4 border-secondary pl-3"
        : "text-slate-500"
    }`}
  >
    {label}
  </Link>
);

const MobileNavDropdown = ({ label }) => (
  <div className="py-4 border-b border-slate-100 group">
    <div className="flex items-center justify-between text-xl font-bold uppercase tracking-wide text-slate-500 group-hover:text-primary transition-colors">
      {label}{" "}
      <ChevronDown
        size={22}
        className="text-slate-300 group-hover:text-secondary transition-colors"
      />
    </div>
  </div>
);

const UtilityItem = ({ icon, label }) => (
  <div className="flex items-center justify-center gap-2 text-slate-500 font-bold text-[10px] uppercase tracking-widest bg-slate-50 p-4 rounded-xl border border-slate-100 active:bg-primary transition-all">
    {icon} {label}
  </div>
);

export default Navbar;
