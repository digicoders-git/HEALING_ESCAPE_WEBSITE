import { useState, useRef, useEffect } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Upload,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  Building2,
  Globe,
  User,
  Smartphone,
} from "lucide-react";
import PageHero from "../components/PageHero";
import { specialitiesData } from "../data/specialitiesData";
import { citiesList } from "../data/hospitalsData";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/framerVariants";

const bannerSlides = [
  {
    image:
      "https://media.istockphoto.com/id/984666526/ru/%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE/%D0%B0%D1%84%D1%80%D0%BE-%D0%B0%D0%BC%D0%B5%D1%80%D0%B8%D0%BA%D0%B0%D0%BD%D1%81%D0%BA%D0%B8%D0%B9-%D0%B4%D0%BE%D0%BA%D1%82%D0%BE%D1%80-%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D1%83%D1%8E%D1%89%D0%B8%D0%B9-%D0%BF%D0%BB%D0%B0%D0%BD%D1%88%D0%B5%D1%82-%D0%B4%D0%BB%D1%8F-%D0%BF%D1%80%D0%BE%D1%81%D0%BC%D0%BE%D1%82%D1%80%D0%B0-%D0%B2-%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%BD%D0%B5%D1%82%D0%B5.jpg?s=640x640&k=20&c=uWkVtCzJttjo3JLuIor7_NUXEbN6GgGho1dEsrrkN9k=",
    title: "Contact Us",
    subtitle: "We Are Here to Guide You at Every Step of Your Medical Journey",
    buttonLabel: "Send Enquiry",
    buttonLink: "#enquiry-form",
  },
];

const FormDropdown = ({
  label,
  options,
  value,
  onChange,
  icon: Icon,
  placeholder,
}) => {
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
    <div className="relative space-y-2" ref={dropdownRef}>
      <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 ml-4">
        {label}
      </label>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between bg-slate-50 border ${
          isOpen
            ? "border-secondary ring-4 ring-secondary/5"
            : "border-slate-100"
        } px-6 md:px-8 py-4 md:py-5 rounded-[1.5rem] md:rounded-3xl transition-all duration-300 group`}
      >
        <div className="flex items-center gap-3 md:gap-4 overflow-hidden">
          <span className="text-secondary opacity-60 shrink-0">
            <Icon size={18} />
          </span>
          <span
            className={`text-sm font-bold truncate ${
              value ? "text-primary" : "text-slate-400 opacity-60"
            }`}
          >
            {value || placeholder}
          </span>
        </div>
        <ChevronDown
          size={18}
          className={`text-slate-300 transition-transform duration-500 shrink-0 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute top-full left-0 w-full mt-2 bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-100 p-3 md:p-4 z-[60] transition-all duration-300 origin-top ${
          isOpen
            ? "opacity-100 scale-100 visible"
            : "opacity-0 scale-95 invisible"
        }`}
      >
        <div className="max-h-[250px] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-200 pr-1">
          {options.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => {
                onChange(opt);
                setIsOpen(false);
              }}
              className={`w-full text-left px-5 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl text-[11px] md:text-[12px] font-bold transition-all ${
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

const Contact = () => {
  const [treatment, setTreatment] = useState("");
  const [city, setCity] = useState("");

  const treatmentOptions = specialitiesData.map((s) => s.title);

  return (
    <div className="bg-white">
      <PageHero slides={bannerSlides} />

      {/* 1. Intro Section */}
      <motion.section
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="py-12 md:py-16 px-4 md:px-8 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left Column - Content */}
            <motion.div
              variants={fadeIn("right", 0.2)}
              className="space-y-8 md:space-y-10"
            >
              <div className="space-y-6">
                {/* Badge Removed */}
                <h2 className="text-3xl md:text-5xl font-extrabold text-primary leading-[1.1] uppercase tracking-tighter italic">
                  Connect with <br />
                  <span className="text-secondary">Healing Escape</span>
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-secondary to-primary rounded-full" />
              </div>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                Our team is here to listen to you, understand your medical
                needs, and guide you honestly and professionally at every step
                of your journey to recovery.
              </p>
            </motion.div>

            {/* Right Column - Quick Contact Cards */}
            <motion.div
              variants={fadeIn("left", 0.2)}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {[
                {
                  icon: <Phone size={24} />,
                  label: "Call Us",
                  value: "+91 9506666642",
                },
                {
                  icon: <Mail size={24} />,
                  label: "Email Us",
                  value: "shubhamsinghs24@outlook.com",
                },
                {
                  icon: <MapPin size={24} />,
                  label: "Visit Us",
                  value: "Lucknow, India",
                },
                {
                  icon: <Clock size={24} />,
                  label: "Working Hours",
                  value: "Mon-Sat: 10AM-7PM",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group flex flex-col items-center gap-3 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-secondary/30 transition-all duration-500"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary/10 to-primary/10 flex items-center justify-center border border-secondary/20 text-secondary group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                      {item.label}
                    </p>
                    <p className="text-sm font-bold text-primary">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 2. Main Contact Form Area */}
      <section
        id="enquiry-form"
        className="py-12 md:py-16 px-4 md:px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
            {/* Left Side: Contact Info */}
            <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              className="lg:col-span-4 space-y-10"
            >
              <div className="space-y-8 md:space-y-10">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-primary uppercase tracking-tighter italic border-l-4 border-secondary pl-4">
                    Contact Details
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 md:gap-8">
                    {[
                      {
                        icon: <MapPin size={20} />,
                        label: "Location",
                        val: "Lucknow, Uttar Pradesh, India",
                      },
                      {
                        icon: <Phone size={20} />,
                        label: "Phone",
                        val: "+91 9506666642",
                      },
                      {
                        icon: <Mail size={20} />,
                        label: "Email",
                        val: "shubhamsinghs24@outlook.com",
                      },
                      {
                        icon: <Clock size={20} />,
                        label: "Hours",
                        val: "Mon - Sat: 10AM - 7PM (IST)",
                      },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 group">
                        <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-secondary border border-slate-100 group-hover:bg-secondary group-hover:text-white transition-all">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                            {item.label}
                          </p>
                          <p className="text-sm font-bold text-primary italic">
                            {item.val}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-8 md:p-10 bg-slate-900 rounded-[2.5rem] md:rounded-[3rem] text-white space-y-6 relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 blur-[60px] rounded-full" />
                  <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 blur-[60px] rounded-full" />
                  {/* Badge Removed */}
                  <div className="space-y-4">
                    {[
                      "Response to every enquiry",
                      "Honest & ethical guidance",
                      "Complete confidentiality",
                    ].map((txt, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 size={14} className="text-secondary" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">
                          {txt}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side: Form */}
            <motion.div
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              className="lg:col-span-8"
            >
              <div className="bg-white">
                <div className="space-y-10 md:space-y-12">
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-primary uppercase tracking-tighter italic">
                      Send Your Enquiry
                    </h3>
                    <p className="text-slate-500 font-medium">
                      Fill in the medical details and our experts will get back
                      to you shortly.
                    </p>
                  </div>

                  <form className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 ml-4">
                        Full Name
                      </label>
                      <div className="relative">
                        <User
                          size={18}
                          className="absolute left-6 md:left-8 top-1/2 -translate-y-1/2 text-secondary opacity-60"
                        />
                        <input
                          type="text"
                          className="w-full pl-14 md:pl-16 pr-6 md:pr-8 py-4 md:py-5 rounded-2xl md:rounded-3xl bg-slate-50 border border-slate-100 focus:outline-none focus:border-secondary font-bold text-sm"
                          placeholder="Your Name"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 ml-4">
                        Country
                      </label>
                      <div className="relative">
                        <Globe
                          size={18}
                          className="absolute left-6 md:left-8 top-1/2 -translate-y-1/2 text-secondary opacity-60"
                        />
                        <input
                          type="text"
                          className="w-full pl-14 md:pl-16 pr-6 md:pr-8 py-4 md:py-5 rounded-2xl md:rounded-3xl bg-slate-50 border border-slate-100 focus:outline-none focus:border-secondary font-bold text-sm"
                          placeholder="e.g. Oman, Kenya"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 ml-4">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail
                          size={18}
                          className="absolute left-6 md:left-8 top-1/2 -translate-y-1/2 text-secondary opacity-60"
                        />
                        <input
                          type="email"
                          className="w-full pl-14 md:pl-16 pr-6 md:pr-8 py-4 md:py-5 rounded-2xl md:rounded-3xl bg-slate-50 border border-slate-100 focus:outline-none focus:border-secondary font-bold text-sm"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 ml-4">
                        Phone / WhatsApp
                      </label>
                      <div className="relative">
                        <Smartphone
                          size={18}
                          className="absolute left-6 md:left-8 top-1/2 -translate-y-1/2 text-secondary opacity-60"
                        />
                        <input
                          type="tel"
                          className="w-full pl-14 md:pl-16 pr-6 md:pr-8 py-4 md:py-5 rounded-2xl md:rounded-3xl bg-slate-50 border border-slate-100 focus:outline-none focus:border-secondary font-bold text-sm"
                          placeholder="WhatsApp Number"
                        />
                      </div>
                    </div>

                    <FormDropdown
                      label="Select Treatment"
                      options={treatmentOptions}
                      value={treatment}
                      onChange={setTreatment}
                      icon={Building2}
                      placeholder="Select Speciality"
                    />
                    <FormDropdown
                      label="Preferred City"
                      options={citiesList}
                      value={city}
                      onChange={setCity}
                      icon={MapPin}
                      placeholder="Any City"
                    />

                    <div className="md:col-span-2 space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 ml-4">
                        How can we help you?
                      </label>
                      <textarea
                        rows="4"
                        className="w-full px-6 md:px-8 py-4 md:py-6 rounded-2xl md:rounded-3xl bg-slate-50 border border-slate-100 focus:outline-none focus:border-secondary font-bold text-sm resize-none"
                        placeholder="Describe your medical condition..."
                      />
                    </div>

                    <div className="md:col-span-2 space-y-6">
                      <div className="p-6 md:p-8 border-2 border-dashed border-slate-100 rounded-[2rem] bg-slate-50 text-center hover:border-secondary transition-all cursor-pointer group/upload">
                        <Upload
                          size={24}
                          className="text-secondary mx-auto mb-3 group-hover:scale-110 transition-transform"
                        />
                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                          Upload Medical Reports (PDF/JPG)
                        </p>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-primary hover:bg-secondary text-white font-bold py-5 md:py-6 rounded-xl md:rounded-2xl transition-all duration-500 uppercase tracking-[0.4em] text-[10px] md:text-[11px] shadow-2xl flex items-center justify-center gap-4 md:gap-6 group/btn"
                      >
                        Request Opinion{" "}
                        <Send
                          size={18}
                          className="group-hover/btn:translate-x-2 transition-transform"
                        />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Steps Area */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto space-y-12 md:space-y-16">
          <div className="text-center space-y-4">
            {/* Badge Removed */}
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary uppercase tracking-tighter italic">
              What Happens Next?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              "Expert Review of Medical Reports",
              "Case Evaluation by Specialists",
              "Selection of Best Hospital Options",
              "Receive Detailed Treatment Plan",
            ].map((step, idx) => (
              <div
                key={idx}
                className="relative group text-center space-y-4 md:space-y-6"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl md:rounded-3xl flex items-center justify-center text-secondary border border-slate-100 mx-auto group-hover:bg-secondary group-hover:text-white transition-all shadow-xl">
                  <span className="text-3xl md:text-4xl font-extrabold italic opacity-30">
                    0{idx + 1}
                  </span>
                </div>
                <p className="text-[9px] md:text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed px-4">
                  {step}
                </p>
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-[1px] bg-slate-100 -z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Map Section */}
      <motion.section
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="py-12 md:py-16 px-4 md:px-8 bg-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            variants={fadeIn("right", 0.2)}
            className="space-y-8 md:space-y-10 text-center lg:text-left"
          >
            <div className="w-16 h-1 bg-secondary rounded-full mx-auto lg:mx-0" />
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary uppercase tracking-tighter italic leading-none">
              Find Us in <br className="hidden md:block" />{" "}
              <span className="text-secondary">Lucknow</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-500 font-medium italic leading-relaxed">
              Our office is located in Lucknow, a major medical hub of North
              India, with easy connectivity to leading hospitals across the
              country.
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-4 md:gap-6">
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-secondary border border-slate-100 shrink-0">
                <ShieldCheck size={24} />
              </div>
              <p className="text-[10px] font-bold text-primary uppercase tracking-widest italic">
                Official Healing Escape HQ
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.2)}
            className="h-[350px] md:h-[500px] w-full bg-slate-100 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border-4 md:border-8 border-slate-50 shadow-2xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227822.6037221524!2d80.77769805023176!3d26.84859648069349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1768289417351!5m2!1sen!2sin"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </motion.section>

      <section className="py-12 md:py-16 px-4 md:px-8 bg-white text-center">
        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
          <h2 className="text-2xl md:text-5xl font-extrabold text-primary uppercase tracking-tighter italic leading-tight">
            "Your journey to better health begins with a simple message."
          </h2>
        </div>
      </section>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
      `,
        }}
      />
    </div>
  );
};

export default Contact;
