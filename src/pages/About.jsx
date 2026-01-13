import {
  ShieldCheck,
  Target,
  Eye,
  Activity,
  MapPin,
  BarChart3,
  HeartHandshake,
  Users,
  ArrowRight,
} from "lucide-react";
import PageHero from "../components/PageHero";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/framerVariants";

const bannerSlides = [
  {
    image:
      "https://d.newsweek.com/en/full/2591345/exterior-hospitals-emergency-department.jpg?w=1200&f=3671b140c403fe0e1fb501598cec585e",
    title: "About Healing Escape",
    subtitle: "Connecting the World to India’s Healthcare Excellence",
    buttonLabel: "Explore Services",
    buttonLink: "/services",
  },
  {
    image:
      "https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&q=60&w=1400",
    title: "World-Class Infrastructure",
    subtitle: "High-Tech Facilities & Internationally Accredited Hospitals",
    buttonLabel: "View Hospitals",
    buttonLink: "/hospitals",
  },
  {
    image:
      "https://images.unsplash.com/photo-1631815587646-b85a1bb027e1?auto=format&fit=crop&q=60&w=1400",
    title: "Expert Clinical Care",
    subtitle: "Bridging the Gap Between Patients and Global Specialists",
    buttonLabel: "Our Doctors",
    buttonLink: "/doctors",
  },
];

const About = () => {
  return (
    <div className="bg-white">
      {/* 1. Top Banner Slider */}
      <PageHero slides={bannerSlides} />

      {/* 2. Company Story */}
      <motion.section
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="py-12 md:py-16 bg-gradient-to-br from-white via-slate-50/30 to-white overflow-hidden relative"
      >
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div
              variants={fadeIn("right", 0.2)}
              className="space-y-8 text-center lg:text-left"
            >
              <div className="space-y-6">
                <h2 className="text-3xl md:text-5xl font-extrabold text-primary tracking-tight uppercase italic leading-none">
                  Our Story
                </h2>
                <div className="w-24 h-1.5 bg-gradient-to-r from-secondary to-primary rounded-full mx-auto lg:mx-0"></div>
              </div>
              <p className="text-slate-600 font-medium leading-relaxed text-base md:text-lg max-w-2xl mx-auto lg:mx-0">
                Healing Escape was founded on the simple belief that where you
                live should never determine the quality of healthcare you
                receive. We bridge the gap between world-class medical
                excellence and global patients
              </p>
            </motion.div>
            <motion.div
              variants={fadeIn("left", 0.2)}
              className="relative group px-4 md:px-0"
            >
              <div className="rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-4 md:border-8 border-white transform md:group-hover:scale-[1.02] transition-all duration-700 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000"
                  className="w-full h-[350px] md:h-[450px] object-cover"
                  alt="Clinical Coordination"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 3. Mission & Vision */}
      <motion.section
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="py-12 md:py-16 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden"
      >
        <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <motion.div
              variants={fadeIn("up", 0.1)}
              className="bg-gradient-to-br from-white to-slate-50/50 p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] border-2 border-slate-100 shadow-xl space-y-6 md:space-y-8 group hover:shadow-2xl hover:border-secondary/40 transition-all duration-500 overflow-hidden relative text-center md:text-left"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/5 rounded-full blur-3xl group-hover:bg-secondary/10 transition-all duration-500"></div>
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-secondary/15 to-secondary/5 rounded-[1.5rem] md:rounded-3xl flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-500 transform group-hover:rotate-12 group-hover:scale-110 mx-auto md:mx-0 border-2 border-secondary/20 shadow-lg">
                <Target size={32} className="md:w-10 md:h-10" />
              </div>
              <div className="space-y-3 md:space-y-4 relative z-10">
                <h3 className="text-2xl md:text-4xl font-bold text-primary uppercase tracking-tight italic">
                  Our Mission
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full mx-auto md:mx-0"></div>
                <p className="text-slate-600 font-medium text-sm md:text-lg leading-relaxed">
                  To empower international patients by providing transparent,
                  personalised, and end-to-end medical tourism services.
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.2)}
              className="bg-gradient-to-br from-white to-slate-50/50 p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] border-2 border-slate-100 shadow-xl space-y-6 md:space-y-8 group hover:shadow-2xl hover:border-primary/40 transition-all duration-500 overflow-hidden relative text-center md:text-left"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-500"></div>
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary/15 to-primary/5 rounded-[1.5rem] md:rounded-3xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 transform group-hover:-rotate-12 group-hover:scale-110 mx-auto md:mx-0 border-2 border-primary/20 shadow-lg">
                <Eye size={32} className="md:w-10 md:h-10" />
              </div>
              <div className="space-y-3 md:space-y-4 relative z-10">
                <h3 className="text-2xl md:text-4xl font-bold text-primary uppercase tracking-tight italic">
                  Our Vision
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-primary to-transparent rounded-full mx-auto md:mx-0"></div>
                <p className="text-slate-600 font-medium text-sm md:text-lg leading-relaxed">
                  To become a globally trusted bridge between patients and
                  world-class healthcare.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 4. Why We Exist */}
      <motion.section
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="py-12 md:py-16 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            variants={fadeIn("up", 0.1)}
            className="bg-primary rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-24 text-white relative overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,165,0,0.1),transparent_50%)]" />
            <div className="relative z-10 space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase leading-none italic">
                  Why We Exist
                </h2>
              </div>
              <div className="text-center max-w-4xl mx-auto space-y-10 md:space-y-12">
                <motion.p
                  variants={fadeIn("up", 0.3)}
                  className="text-xl md:text-4xl text-white font-black leading-tight italic"
                >
                  "We exist to turn medical fear into healing confidence."
                </motion.p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                  {[
                    "Simplify complexity",
                    "Eliminate anxiety",
                    "Ethical transparency",
                    "Clinical oversight",
                  ].map((text, i) => (
                    <motion.div
                      key={i}
                      variants={fadeIn("up", 0.1 * (i + 1))}
                      className="flex flex-col items-center gap-4 p-6 md:p-8 bg-white/5 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-colors group"
                    >
                      <div className="w-10 h-10 md:w-12 h-12 rounded-xl md:rounded-2xl bg-secondary flex items-center justify-center text-white shadow-lg transition-transform md:group-hover:scale-110">
                        <ArrowRight size={18} md:size={20} />
                      </div>
                      <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em]">
                        {text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* 5. Why North India Focus */}
      <motion.section
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="py-12 md:py-16 bg-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-12 md:gap-20 items-center">
            <motion.div
              variants={fadeIn("right", 0.2)}
              className="lg:w-1/2 space-y-8 md:space-y-10 text-center lg:text-left"
            >
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-extrabold text-primary tracking-tight uppercase leading-[0.9] italic">
                  North India <br />
                  <span className="text-secondary">Medical Hub</span>
                </h2>
              </div>
              <div className="space-y-6 md:space-y-8 text-slate-600 text-base md:text-lg font-medium leading-relaxed">
                <p>
                  Lucknow, New Delhi, and Gurugram form the most powerful
                  clinical ecosystem in the country.
                </p>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    "Highest Success Ratios",
                    "International Flight Hubs",
                    "Multi-Speciality Research",
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      variants={fadeIn("right", 0.1 * (i + 1))}
                      className="flex items-center gap-4 md:gap-6 bg-slate-50 p-4 md:p-6 rounded-2xl md:rounded-3xl border border-slate-100 shadow-sm md:hover:translate-x-4 transition-all duration-500 text-left"
                    >
                      <div className="bg-white p-3 md:p-4 rounded-xl md:rounded-2xl shadow-md text-secondary shrink-0">
                        <MapPin size={20} md:size={24} />
                      </div>
                      <span className="text-xs md:text-base font-bold text-primary uppercase tracking-wide leading-none">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn("left", 0.2)}
              className="lg:w-1/2 relative"
            >
              <div className="grid grid-cols-2 gap-4 md:gap-8 items-end">
                <div className="space-y-4 md:space-y-8">
                  <motion.img
                    variants={fadeIn("up", 0.3)}
                    src="https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&q=80&w=800"
                    className="w-full h-[350px] md:h-[500px] object-cover rounded-[2rem] md:rounded-[4rem] shadow-2xl border-2 border-white"
                    alt="Infrastructure"
                  />
                </div>
                <motion.img
                  variants={fadeIn("left", 0.5)}
                  src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&q=80&w=800"
                  className="w-full h-[350px] md:h-[500px] object-cover rounded-[2.5rem] md:rounded-[5rem] shadow-2xl border-2 border-white"
                  alt="Medical Hub"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 6. Industry Stats */}
      <motion.section
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="py-16 md:py-20 bg-primary relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-white mb-12 md:mb-20 text-center space-y-4">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              className="text-3xl md:text-5xl font-extrabold uppercase tracking-tighter text-white italic"
            >
              Global Scalability
            </motion.h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {[
              {
                label: "Market 2026",
                value: "$13B",
                icon: <BarChart3 size={32} md:size={40} />,
              },
              {
                label: "Yearly Patient",
                value: "600K+",
                icon: <Users size={32} md:size={40} />,
              },
              {
                label: "CAGR Growth",
                value: "21%",
                icon: <Activity size={32} md:size={40} />,
              },
              {
                label: "Global Trust",
                value: "100%",
                icon: <ShieldCheck size={32} md:size={40} />,
              },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeIn("up", 0.1 * (i + 1))}
                className="bg-white/5 border border-white/10 p-6 md:p-12 rounded-[2rem] md:rounded-[3.5rem] text-center space-y-2 md:space-y-4 shadow-2xl hover:bg-white/10 transition-all group"
              >
                <div className="text-secondary flex justify-center md:group-hover:-translate-y-2 transition-transform">
                  {stat.icon}
                </div>
                <h4 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-none italic">
                  {stat.value}
                </h4>
                <p className="text-white/40 text-[8px] md:text-[11px] font-bold uppercase tracking-[0.3em] leading-tight pt-2">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 7. Ethical Commitment */}
      <motion.section
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="py-12 md:py-16 bg-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            variants={fadeIn("up", 0.1)}
            className="bg-slate-50 rounded-[2.5rem] md:rounded-[5rem] p-8 md:p-24 border border-slate-100 grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-center shadow-inner relative overflow-hidden"
          >
            <motion.div
              variants={fadeIn("right", 0.2)}
              className="lg:col-span-7 space-y-10 md:space-y-12 text-center lg:text-left relative z-10"
            >
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-extrabold text-primary tracking-tight uppercase leading-[1.1] italic">
                  Pioneering <br /> Transparency
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {[
                  "Direct Hospital Billing",
                  "Verified Success Tracks",
                  "Patient Data Security",
                  "Zero-Conflict System",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeIn("right", 0.1 * (i + 1))}
                    className="flex items-center gap-4 md:gap-6 p-4 md:p-6 bg-white rounded-2xl md:rounded-3xl border border-slate-100 shadow-sm md:hover:border-secondary transition-colors text-left"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                      <ShieldCheck size={20} md:size={24} />
                    </div>
                    <span className="text-sm md:text-lg font-bold text-primary uppercase tracking-tight leading-none">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn("left", 0.2)}
              className="lg:col-span-5 relative z-10"
            >
              <img
                src="https://gitanjalihospital.com/wp-content/uploads/2024/10/DSC_1103-1.jpg"
                className="w-full h-[400px] md:h-[600px] rounded-[2.5rem] md:rounded-[5rem] object-cover shadow-2xl border-4 md:border-8 border-white"
                alt="Ethical Care"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* 8. Our Team */}
      <motion.section
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="py-12 md:py-16 bg-white pb-32 md:pb-40"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <div className="mb-16 md:mb-24 space-y-4">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              className="text-3xl md:text-5xl font-extrabold text-primary tracking-tighter uppercase leading-none italic"
            >
              The Human Edge
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-center">
            <motion.div
              variants={fadeIn("right", 0.2)}
              className="lg:col-span-7 space-y-10 md:space-y-12"
            >
              <motion.p
                variants={fadeIn("up", 0.3)}
                className="text-xl md:text-4xl font-extrabold text-primary text-center lg:text-left leading-tight italic"
              >
                Our growth is powered by doctors, case managers, and logistics
                experts.
              </motion.p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 text-center">
                {[
                  "Dedicated Case Managers",
                  "Verified Clinical Experts",
                  "Multilingual Coordinators",
                  "Specialized Support Staff",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeIn("up", 0.1 * (i + 1))}
                    className="flex flex-col items-center gap-4 bg-slate-50 p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] border border-slate-100 md:hover:bg-white md:hover:border-secondary transition-all shadow-sm group"
                  >
                    <HeartHandshake
                      size={40}
                      md:size={48}
                      className="text-primary md:group-hover:scale-110 transition-transform"
                    />
                    <span className="text-[12px] md:text-[14px] font-black uppercase tracking-widest text-primary pt-2 md:pt-4 leading-none italic">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn("left", 0.2)}
              className="lg:col-span-5"
            >
              <div className=" rounded-[2.5rem] md:rounded-[5rem] aspect-square flex flex-col items-center justify-center text-center text-white shadow-2xl relative overflow-hidden group">
                <Users
                  size={60}
                  md:size={80}
                  className="text-secondary mb-6 md:mb-8 transform md:group-hover:scale-110 transition-transform"
                />
                <img src='https://cdn.apollohospitals.com/delhi/2023/09/speciality_ah_11zon.webp' className="w-full h-[400px] md:h-[600px] rounded-[2.5rem] md:rounded-[5rem] object-cover shadow-2xl " />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
