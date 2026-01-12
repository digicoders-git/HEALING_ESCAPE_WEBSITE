import { useState, useRef, useEffect } from "react";
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
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const bannerSlides = [
  {
    image:
      "https://d.newsweek.com/en/full/2591345/exterior-hospitals-emergency-department.jpg?w=1200&f=3671b140c403fe0e1fb501598cec585e",
    title: "About Healing Escape",
    subtitle: "Connecting the World to India’s Healthcare Excellence",
  },
  {
    image:
      "https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&q=60&w=1400",
    title: "World-Class Infrastructure",
    subtitle: "High-Tech Facilities & Internationally Accredited Hospitals",
  },
  {
    image:
      "https://images.unsplash.com/photo-1631815587646-b85a1bb027e1?auto=format&fit=crop&q=60&w=1400",
    title: "Expert Clinical Care",
    subtitle: "Bridging the Gap Between Patients and Global Specialists",
  },
];

const About = () => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const bannerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (bannerRef.current) {
      const rect = bannerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePos({ x, y });
    }
  };

  return (
    <div className="bg-white">
      {/* 1. Top Banner Slider - SMOOTH FADE TRANSITION */}
      <section
        ref={bannerRef}
        onMouseMove={handleMouseMove}
        className="relative h-[72vh] md:h-[82vh] w-full overflow-hidden bg-primary"
      >
        {/* Dynamic Lighting Hover Effect - Subtle Intensity */}
        <div
          className="absolute inset-0 z-30 pointer-events-none transition-all duration-300"
          style={{
            background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(29, 182, 76, 0.2) 0%, transparent 50%)`,
          }}
        />
        <div
          className="absolute inset-0 z-30 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(255, 255, 255, 0.2) 0%, transparent 30%)`,
          }}
        />

        <Swiper
          modules={[Autoplay, Navigation, Pagination, EffectFade]}
          effect={"fade"}
          fadeEffect={{ crossFade: true }}
          speed={1500}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          loop={true}
          className="h-full w-full"
        >
          {bannerSlides.map((slide, index) => (
            <SwiperSlide
              key={index}
              className="relative h-full w-full overflow-hidden"
            >
              {/* Image Container */}
              <div className="absolute inset-0 z-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover animate-optimized-zoom"
                  loading={index === 0 ? "eager" : "lazy"}
                />
                {/* Modern Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-primary/95 via-primary/60 to-transparent" />
              </div>

              {/* Text Content */}
              <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
                <div className="space-y-6 max-w-4xl">
                  <div className="flex items-center justify-center gap-4 mb-2 animate-text-reveal [animation-delay:200ms]">
                    <div className="w-10 h-0.5 bg-secondary rounded-full" />
                    <span className="text-secondary font-black text-[10px] uppercase tracking-[0.5em]">
                      Healing Escape Global
                    </span>
                    <div className="w-10 h-0.5 bg-secondary rounded-full" />
                  </div>
                  <h1 className="text-3xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter uppercase leading-[1] animate-text-reveal [animation-delay:400ms]">
                    {slide.title}
                  </h1>
                  <div className="max-w-xl mx-auto border-t border-white/20 pt-6 animate-text-reveal [animation-delay:600ms]">
                    <p className="text-white/80 text-sm md:text-xl font-bold tracking-widest uppercase mb-8">
                      {slide.subtitle}
                    </p>
                    <button className="bg-secondary hover:bg-white hover:text-primary text-white font-black py-4 px-12 rounded-2xl shadow-xl transition-all duration-500 uppercase tracking-widest text-xs border-2 border-secondary hover:border-white">
                      Explore Services
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <style
          dangerouslySetInnerHTML={{
            __html: `
          .swiper-pagination-bullet { background: #ffffff !important; opacity: 0.2; width: 8px; height: 8px; }
          .swiper-pagination-bullet-active { background: #1db64c !important; opacity: 1; width: 30px; border-radius: 4px; }
          .swiper-button-next, .swiper-button-prev { color: #ffffff !important; opacity: 0.3; transform: scale(0.6); transition: 0.3s; }
          .swiper-button-next:hover, .swiper-button-prev:hover { opacity: 1; color: #1db64c !important; }
        `,
          }}
        />
      </section>

      {/* 2. Company Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-3">
                <h4 className="text-secondary font-bold text-xs uppercase tracking-[0.3em] bg-secondary/10 px-6 py-2 rounded-full inline-block">
                  Authentic Narrative
                </h4>
                <h2 className="text-4xl md:text-6xl font-bold text-primary tracking-tight uppercase">
                  Our Story
                </h2>
              </div>
              <div className="space-y-6 text-slate-600 font-medium leading-relaxed text-sm md:text-lg">
                <p>
                  Healing Escape was founded on the simple belief that where you
                  live should never determine the quality of healthcare you
                  receive.
                </p>
                <div className="bg-slate-50 border-l-8 border-secondary p-8 rounded-2xl shadow-sm transform hover:-translate-y-1 transition-transform">
                  <p className="italic text-primary font-bold text-xl">
                    "We bridge the gap between world-class medical excellence
                    and global patients."
                  </p>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="rounded-[3rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)] border-8 border-slate-50 transform group-hover:scale-[1.02] transition-transform duration-700">
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000"
                  className="w-full h-[550px] object-cover"
                  alt="Clinical Coordination"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-primary text-white p-10 rounded-3xl shadow-2xl flex items-center gap-6 border-4 border-white">
                <ShieldCheck size={48} className="text-secondary" />
                <div className="text-left font-bold uppercase tracking-widest leading-none">
                  <p className="text-3xl text-secondary">Trust</p>
                  <p className="text-[10px] opacity-60 mt-1">Legacy of Care</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-xl space-y-8 group hover:shadow-2xl transition-all hover:border-secondary overflow-hidden relative text-center md:text-left">
              <div className="w-20 h-20 bg-secondary/10 rounded-3xl flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all transform group-hover:rotate-6 mx-auto md:mx-0">
                <Target size={40} />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-primary uppercase tracking-tight">
                  Our Mission
                </h3>
                <p className="text-slate-500 font-medium text-base leading-relaxed">
                  To empower international patients by providing transparent,
                  personalised, and end-to-end medical tourism services.
                </p>
              </div>
            </div>
            <div className="bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-xl space-y-8 group hover:shadow-2xl transition-all hover:border-primary overflow-hidden relative text-center md:text-left">
              <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all transform group-hover:-rotate-6 mx-auto md:mx-0">
                <Eye size={40} />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-primary uppercase tracking-tight">
                  Our Vision
                </h3>
                <p className="text-slate-500 font-medium text-base leading-relaxed">
                  To become a globally trusted bridge between patients and
                  world-class healthcare.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why We Exist */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="bg-primary rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-12 text-center space-y-4">
                <h4 className="text-secondary font-bold text-xs uppercase tracking-[0.5em] border-b border-white/10 pb-4 inline-block">
                  Deep Core Logic
                </h4>
                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-none">
                  Why We Exist
                </h2>
              </div>
              <div className="lg:col-span-12 text-center max-w-4xl mx-auto space-y-12">
                <p className="text-xl md:text-4xl text-white font-black leading-tight">
                  "We exist to turn medical fear into healing confidence."
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    "Simplify complexity",
                    "Eliminate anxiety",
                    "Ethical transparency",
                    "Clinical oversight",
                  ].map((text, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center gap-4 p-8 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                        <ArrowRight size={20} />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-[0.2em]">
                        {text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why North India Focus */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2 space-y-10 text-center lg:text-left">
              <div className="space-y-4">
                <h4 className="text-secondary font-bold text-[12px] uppercase tracking-[0.4em] border-l-8 border-secondary pl-6 inline-block">
                  Institutional Focus
                </h4>
                <h2 className="text-4xl md:text-6xl font-bold text-primary tracking-tight uppercase leading-[0.9]">
                  North India <br />
                  <span className="text-secondary">Medical Hub</span>
                </h2>
              </div>
              <div className="space-y-8 text-slate-600 text-base md:text-xl font-medium leading-relaxed">
                <p>
                  Lucknow, New Delhi, and Gurugram form the most powerful
                  clinical ecosystem in the country.
                </p>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    "Highest Patient Success Ratios",
                    "International Flight Hubs",
                    "Multi-Speciality Research Centers",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-6 bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-sm hover:translate-x-4 transition-all duration-500"
                    >
                      <div className="bg-white p-4 rounded-2xl shadow-md text-secondary">
                        <MapPin size={24} />
                      </div>
                      <span className="text-sm md:text-lg font-bold text-primary uppercase tracking-wide leading-none">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="grid grid-cols-2 gap-8 items-end">
                <div className="space-y-8">
                  <img
                    src="https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&q=80&w=800"
                    className="w-full h-80 object-cover rounded-[4rem] shadow-2xl border-2 border-white"
                    alt="Infrastructure"
                  />
                  <div className="bg-secondary p-10 rounded-[4rem] text-white text-center shadow-xl">
                    <p className="text-5xl font-black tracking-tighter leading-none">
                      HQ
                    </p>
                    <p className="text-[10px] font-bold uppercase tracking-[0.4em] mt-2">
                      Lucknow Oversight
                    </p>
                  </div>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&q=80&w=800"
                  className="w-full h-[500px] object-cover rounded-[5rem] shadow-2xl border-2 border-white"
                  alt="Medical Hub"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Industry Stats */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-white mb-20 text-center space-y-4">
            <h4 className="text-secondary font-bold text-xs uppercase tracking-[0.6em]">
              Market Dynamics
            </h4>
            <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter text-white">
              Global Scalability
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                label: "Market 2026",
                value: "$13B",
                icon: <BarChart3 size={40} />,
              },
              {
                label: "Yearly Patients",
                value: "600K+",
                icon: <Users size={40} />,
              },
              {
                label: "CAGR Growth",
                value: "21%",
                icon: <Activity size={40} />,
              },
              {
                label: "Global Trust",
                value: "100%",
                icon: <ShieldCheck size={40} />,
              },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 p-12 rounded-[3.5rem] text-center space-y-4 shadow-2xl hover:bg-white/10 transition-all group"
              >
                <div className="text-secondary flex justify-center group-hover:-translate-y-2 transition-transform">
                  {stat.icon}
                </div>
                <h4 className="text-5xl font-black text-white tracking-tighter leading-none">
                  {stat.value}
                </h4>
                <p className="text-white/40 text-[11px] font-bold uppercase tracking-[0.3em] leading-tight pt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Ethical Commitment */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="bg-slate-50 rounded-[5rem] p-12 md:p-24 border border-slate-100 grid grid-cols-1 lg:grid-cols-12 gap-20 items-center shadow-inner relative overflow-hidden">
            <div className="lg:col-span-7 space-y-12 text-center lg:text-left relative z-10">
              <div className="space-y-4">
                <h4 className="text-secondary font-bold text-[12px] uppercase tracking-[0.5em] px-8 py-3 bg-white rounded-full inline-block shadow-sm">
                  Strict Ethics
                </h4>
                <h2 className="text-4xl md:text-6xl font-bold text-primary tracking-tight uppercase leading-[1.1]">
                  Pioneering <br /> Transparency
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {[
                  "No Hidden Costs - Direct Hospital Billing",
                  "Verified Clinical Success Track Records",
                  "Patient Data Security (HIPAA Standards)",
                  "Zero-Conflict Referral System",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-6 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:border-secondary transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all shrink-0">
                      <ShieldCheck size={24} />
                    </div>
                    <span className="text-sm md:text-lg font-bold text-primary uppercase tracking-tight leading-none">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 relative z-10">
              <img
                src="https://images.unsplash.com/photo-1542884748-2b87b36c6b90?auto=format&fit=crop&q=80&w=800"
                className="w-full h-[600px] rounded-[5rem] object-cover shadow-2xl border-4 border-white"
                alt="Ethical Care"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 8. Our Team */}
      <section className="py-16 bg-white pb-40">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-24 space-y-4">
            <h4 className="text-secondary font-bold text-[12px] uppercase tracking-[0.6em]">
              Workforce Quality
            </h4>
            <h2 className="text-5xl md:text-7xl font-bold text-primary tracking-tighter uppercase leading-none">
              The Human Edge
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-7 space-y-12">
              <p className="text-2xl md:text-4xl font-bold text-primary text-center lg:text-left leading-tight">
                Our growth is powered by doctors, case managers, and logistics
                experts.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center">
                {[
                  "Dedicated Case Managers",
                  "Verified Clinical Experts",
                  "Multilingual Coordinators",
                  "Specialized Support Staff",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-4 bg-slate-50 p-10 rounded-[3rem] border border-slate-100 hover:bg-white hover:border-secondary transition-all shadow-sm group"
                  >
                    <HeartHandshake
                      size={48}
                      className="text-primary group-hover:scale-110 transition-transform"
                    />
                    <span className="text-[14px] font-black uppercase tracking-widest text-primary pt-4 leading-none">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-primary p-16 rounded-[5rem] aspect-square flex flex-col items-center justify-center text-center text-white shadow-2xl relative overflow-hidden group">
                <Users
                  size={80}
                  className="text-secondary mb-8 transform group-hover:scale-110 transition-transform"
                />
                <h4 className="text-2xl font-black uppercase tracking-[0.2em] leading-none">
                  High Velocity <br /> Team
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
