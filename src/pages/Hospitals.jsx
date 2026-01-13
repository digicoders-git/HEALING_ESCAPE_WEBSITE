import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Search,
  ChevronDown,
  ChevronRight,
  ShieldCheck,
  Building2,
  CheckCircle2,
  UserCheck,
  SlidersHorizontal,
  X,
} from "lucide-react";
import PageHero from "../components/PageHero";
import {
  hospitalsData,
  citiesList,
  hospitalSpecialities,
  accreditationList,
} from "../data/hospitalsData";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/framerVariants";

// Custom Modern Dropdown Component
const CustomDropdown = ({ label, options, value, onChange, icon: Icon }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative flex-1" ref={dropdownRef}>
      <label className="hidden md:block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 ml-1">
        {label}
      </label>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between bg-white border ${
          isOpen
            ? "border-secondary ring-4 ring-secondary/5"
            : "border-slate-100"
        } px-4 py-3 md:px-5 md:py-4 rounded-xl md:rounded-2xl transition-all duration-300 group`}
      >
        <div className="flex items-center gap-2 md:gap-3">
          <span className="text-secondary opacity-60">
            <Icon size={14} className="md:w-4 md:h-4" />
          </span>
          <span className="text-[12px] md:text-[13px] font-bold text-primary truncate">
            {value === "All"
              ? label.includes("City")
                ? "All Cities"
                : label.includes("Speciality")
                ? "All Specialities"
                : "All Accreditations"
              : value}
          </span>
        </div>
        <ChevronDown
          size={14}
          className={`text-slate-300 transition-transform duration-500 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute top-full left-0 w-full mt-2 bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-100 p-2 z-[60] transition-all duration-300 origin-top ${
          isOpen
            ? "opacity-100 scale-100 visible"
            : "opacity-0 scale-95 invisible"
        }`}
      >
        <div className="max-h-[250px] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-200 pr-1">
          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => {
                onChange(opt);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-[11px] md:text-[12px] font-bold transition-all ${
                value === opt
                  ? "bg-secondary text-white"
                  : "text-slate-600 hover:bg-slate-50 hover:text-primary"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const Hospitals = () => {
  const [cityFilter, setCityFilter] = useState("All");
  const [specFilter, setSpecFilter] = useState("All");
  const [accFilter, setAccFilter] = useState("All");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const filteredHospitals = hospitalsData.filter((hosp) => {
    const cityMatch = cityFilter === "All" || hosp.city === cityFilter;
    const specMatch =
      specFilter === "All" || hosp.specialities.includes(specFilter);
    const accMatch =
      accFilter === "All" || hosp.accreditations.includes(accFilter);
    return cityMatch && specMatch && accMatch;
  });

  const bannerSlides = [
    {
      image:
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000",
      title: "Trusted Hospital Network",
      subtitle:
        "Connecting You with World-Class Healthcare Infrastructure in India",
      buttonLabel: "Explore Hospitals",
      buttonLink: "#listing-start",
    },
  ];

  return (
    <div className="bg-white">
      <PageHero slides={bannerSlides} />

      {/* 1. Desktop Filter Section */}
      <section className="hidden lg:block sticky top-[56px] z-50 bg-white/95 backdrop-blur-lg border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex items-end gap-6">
            <div className="flex-1 grid grid-cols-3 gap-4">
              <CustomDropdown
                label="Select City"
                options={citiesList}
                value={cityFilter}
                onChange={setCityFilter}
                icon={MapPin}
              />
              <CustomDropdown
                label="Select Speciality"
                options={hospitalSpecialities}
                value={specFilter}
                onChange={setSpecFilter}
                icon={Building2}
              />
              <CustomDropdown
                label="Select Accreditation"
                options={accreditationList}
                value={accFilter}
                onChange={setAccFilter}
                icon={ShieldCheck}
              />
            </div>
            <div className="shrink-0 pb-1">
              <button
                onClick={() => {
                  setCityFilter("All");
                  setSpecFilter("All");
                  setAccFilter("All");
                }}
                className="px-8 py-4 bg-slate-50 hover:bg-secondary hover:text-white text-slate-400 font-bold uppercase tracking-widest text-[10px] transition-all rounded-2xl border border-slate-100"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Mobile Filter Floating Trigger */}
      <div className="lg:hidden fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] w-full max-w-[200px] px-4">
        <button
          onClick={() => setIsMobileFilterOpen(true)}
          className="w-full bg-primary text-white py-4 rounded-2xl shadow-2xl flex items-center justify-center gap-3 font-bold uppercase tracking-[0.2em] text-[11px] border border-white/10"
        >
          <SlidersHorizontal size={18} className="text-secondary" /> Filter
        </button>
      </div>

      {/* 3. Mobile Filter Drawer */}
      <div
        className={`lg:hidden fixed inset-0 z-[200] transition-all duration-500 ${
          isMobileFilterOpen ? "visible" : "invisible"
        }`}
      >
        <div
          className={`absolute inset-0 bg-primary/60 backdrop-blur-md transition-opacity duration-500 ${
            isMobileFilterOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMobileFilterOpen(false)}
        />
        <div
          className={`absolute bottom-0 left-0 w-full bg-white rounded-t-[3rem] md:rounded-t-[3.5rem] p-8 pb-12 transition-transform duration-500 max-h-[90vh] overflow-y-auto ${
            isMobileFilterOpen ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <div className="w-12 h-1.5 bg-slate-100 rounded-full mx-auto mb-8" />
          <div className="flex justify-between items-center mb-10">
            <h3 className="text-xl font-extrabold text-primary uppercase tracking-tighter italic">
              Filters
            </h3>
            <button
              onClick={() => setIsMobileFilterOpen(false)}
              className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400"
            >
              <X size={20} />
            </button>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-2">
                Location
              </label>
              <CustomDropdown
                label="City"
                options={citiesList}
                value={cityFilter}
                onChange={setCityFilter}
                icon={MapPin}
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-2">
                Speciality
              </label>
              <CustomDropdown
                label="Speciality"
                options={hospitalSpecialities}
                value={specFilter}
                onChange={setSpecFilter}
                icon={Building2}
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-2">
                Accreditation
              </label>
              <CustomDropdown
                label="Accreditation"
                options={accreditationList}
                value={accFilter}
                onChange={setAccFilter}
                icon={ShieldCheck}
              />
            </div>
            <button
              onClick={() => setIsMobileFilterOpen(false)}
              className="w-full py-5 rounded-2xl bg-primary text-white font-bold uppercase tracking-widest text-[10px]"
            >
              Show Results
            </button>
          </div>
        </div>
      </div>

      {/* 4. Page Content */}
      <section
        id="listing-start"
        className="py-16 md:py-24 px-4 md:px-8 bg-slate-50"
      >
        <div className="max-w-7xl mx-auto space-y-12 md:space-y-16">
          <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-extrabold text-primary uppercase tracking-tighter italic">
                Verified <span className="text-secondary">Hospitals</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-500 font-medium italic">
                Internationally accredited facilities selected for clinical
                excellence.
              </p>
            </div>
            <div className="flex items-center gap-4 bg-white px-6 py-3 rounded-2xl border border-slate-200 w-fit">
              <span className="text-secondary font-extrabold text-2xl">
                {filteredHospitals.length}
              </span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                Facilities Found
              </span>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.05, 0.1)}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          >
            <AnimatePresence mode="popLayout">
              {filteredHospitals.map((hosp, index) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={hosp.id}
                >
                  <Link
                    to={`/hospital/${hosp.id}`}
                    className="block group bg-white rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border border-slate-200 hover:shadow-2xl transition-all duration-700 md:hover:-translate-y-2 h-full"
                  >
                    <div className="relative h-56 md:h-64 overflow-hidden">
                      <img
                        src={hosp.image}
                        alt={hosp.name}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      <div className="absolute top-4 right-4 flex flex-col gap-2">
                        {hosp.accreditations.map((acc) => (
                          <span
                            key={acc}
                            className="bg-secondary text-white px-3 py-1.5 rounded-xl text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-center"
                          >
                            {acc}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="p-8 md:p-10 space-y-6">
                      <div className="flex items-center gap-2 text-slate-400">
                        <MapPin size={14} className="text-secondary" />
                        <span className="text-[10px] font-bold uppercase tracking-widest">
                          {hosp.city}
                        </span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-primary italic uppercase tracking-tight group-hover:text-secondary transition-colors line-clamp-1">
                        {hosp.name}
                      </h3>
                      <div className="flex flex-wrap gap-2 h-16 md:h-20 overflow-hidden content-start">
                        {hosp.specialities.map((spec) => (
                          <span
                            key={spec}
                            className="bg-slate-50 text-slate-500 px-3 py-1 rounded-lg text-[9px] font-bold uppercase tracking-widest border border-slate-100"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                      <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-secondary" />
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                            Verified
                          </span>
                        </div>
                        <span className="text-secondary font-bold text-[10px] uppercase tracking-widest flex items-center gap-2 md:group-hover:gap-4 transition-all">
                          Details <ChevronRight size={14} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredHospitals.length === 0 && (
            <div className="py-24 md:py-40 text-center">
              <Search size={48} className="mx-auto text-slate-100 mb-6" />
              <h3 className="text-xl font-bold text-primary uppercase italic">
                No hospitals found matching your criteria.
              </h3>
            </div>
          )}
        </div>
      </section>

      {/* 5. Assurance Section */}
      <motion.section
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="py-16 md:py-24 px-4 md:px-8 bg-white border-t border-slate-100"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            variants={fadeIn("right", 0.2)}
            className="space-y-10 md:space-y-12"
          >
            <div className="w-16 h-1 bg-secondary rounded-full" />
            <h2 className="text-3xl md:text-6xl font-extrabold text-primary uppercase tracking-tighter italic leading-none">
              Quality <span className="text-secondary">Assurance</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {[
                {
                  icon: <ShieldCheck />,
                  title: "Verified Hospitals",
                  desc: "We only work with JCI/NABH accredited facilities.",
                },
                {
                  icon: <Building2 />,
                  title: "Advanced Tech",
                  desc: "Hospitals equipped with latest medical technology.",
                },
                {
                  icon: <CheckCircle2 />,
                  title: "Patient Focus",
                  desc: "Dedicated care teams for international patients.",
                },
                {
                  icon: <UserCheck />,
                  title: "Clinical Excellence",
                  desc: "Highly qualified and board certified doctors.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn("up", 0.1 * (i + 1))}
                  className="flex gap-4 items-start"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-secondary border border-slate-100 shrink-0">
                    {item.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-primary">
                      {item.title}
                    </h4>
                    <p className="text-[9px] md:text-[10px] text-slate-400 leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            className="p-8 md:p-20 bg-slate-900 rounded-[2.5rem] md:rounded-[4rem] text-white space-y-8 md:space-y-10 relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 blur-[80px] rounded-full" />
            <motion.p
              variants={fadeIn("up", 0.3)}
              className="text-2xl md:text-3xl font-light italic leading-relaxed text-white/80"
            >
              "Healing Escape ensures you access the finest medical
              infrastructure in India with complete transparency."
            </motion.p>
            <div className="pt-8 md:pt-10 border-t border-white/5">
              <Link
                to="/contact"
                className="inline-block bg-secondary text-white px-10 py-4 md:px-12 md:py-5 rounded-xl md:rounded-2xl text-[10px] md:text-[11px] font-bold uppercase tracking-widest hover:bg-white hover:text-primary transition-all shadow-lg"
              >
                Inquire Now
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.6s ease-out forwards; }
      `,
        }}
      />
    </div>
  );
};

export default Hospitals;
