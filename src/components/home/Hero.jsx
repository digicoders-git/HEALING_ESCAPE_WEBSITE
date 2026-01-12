import { useState, useRef } from "react";
import { ChevronDown, ShieldCheck, Globe, Activity } from "lucide-react";
import homeVideo from "../../assets/homeVideo.mp4";

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const sectionRef = useRef(null);

  const handleMouseMove = (e) => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePos({ x, y });
    }
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative h-[90vh] md:h-[88vh] flex items-center overflow-hidden bg-primary"
    >
      {/* Video Background with Masking */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-50"
        >
          <source src={homeVideo} type="video/mp4" />
        </video>
        {/* Deep Gradient Masks */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/60 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent" />
      </div>

      {/* Dynamic Lighting Hover Effect (Mirroring About Page) - MAX INTENSITY */}
      <div
        className="absolute inset-0 z-10 pointer-events-none transition-all duration-300"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(29, 182, 76, 0.2) 0%, transparent 50%)`,
        }}
      />
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(255, 255, 255, 0.2) 0%, transparent 30%)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-20 w-full mb-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Compact High-Impact Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-secondary px-4 py-1.5 rounded-lg shadow-lg">
              <Activity size={14} className="text-white animate-pulse" />
              <p className="text-[10px] font-bold text-white uppercase tracking-widest leading-none">
                Global Medical Portal
              </p>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                Connecting the World to{" "}
                <span className="text-secondary">India’s Healthcare</span>{" "}
                <br />
                Excellence
              </h1>
              <p className="text-base md:text-lg text-white/90 font-medium max-w-xl leading-relaxed">
                Your trusted partner for world-class, affordable medical
                treatment in India. We help international patients access top
                hospitals, leading doctors, and seamless medical journeys across
                India — especially North India.
              </p>
            </div>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                  <ShieldCheck size={16} className="text-secondary" />
                </div>
                <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">
                  JCI Accredited
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                  <Globe size={16} className="text-secondary" />
                </div>
                <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">
                  Global Support
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: Inquiry Form */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="rounded-3xl shadow-2xl p-8 w-full max-w-md border-b-4 border-primary relative overflow-hidden">
              <div className="absolute inset-0 z-0">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-217359f488d5?auto=format&fit=crop&q=80&w=1000"
                  alt="Clinical Environment"
                  className="w-full h-full object-cover blur-[4px] scale-110"
                />
                <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />
              </div>

              <div className="relative z-10">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-primary leading-tight uppercase tracking-tight">
                    Get Free Medical Consultation
                  </h3>
                  <p className="text-slate-500 text-[9px] font-bold uppercase tracking-widest mt-1">
                    Verified Response Center
                  </p>
                </div>

                <form className="space-y-3">
                  <div className="space-y-3">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full py-3.5 px-5 rounded-xl border border-white bg-white/80 focus:outline-none focus:ring-4 focus:ring-primary/5 transition-all text-sm font-semibold text-slate-700 placeholder:text-slate-400"
                    />

                    <div className="grid grid-cols-2 gap-3">
                      <div className="relative">
                        <select className="w-full py-3.5 px-5 rounded-xl border border-white bg-white/80 focus:outline-none appearance-none text-sm font-semibold text-slate-700 cursor-pointer">
                          <option>Country</option>
                          <option>Kenya</option>
                          <option>Nigeria</option>
                          <option>UAE</option>
                        </select>
                        <ChevronDown
                          size={14}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                        />
                      </div>
                      <input
                        type="text"
                        placeholder="City"
                        className="w-full py-3.5 px-5 rounded-xl border border-white bg-white/80 focus:outline-none text-sm font-semibold text-slate-700"
                      />
                    </div>

                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="+91"
                        className="w-16 py-3.5 px-2 rounded-xl border border-white bg-white/80 text-center text-sm font-bold text-primary"
                      />
                      <input
                        type="text"
                        placeholder="Mobile Number"
                        className="flex-1 py-3.5 px-5 rounded-xl border border-white bg-white/80 focus:outline-none text-sm font-semibold text-slate-700"
                      />
                    </div>

                    <textarea
                      placeholder="Clinical requirement..."
                      rows="2"
                      className="w-full py-3.5 px-5 rounded-xl border border-white bg-white/80 focus:outline-none text-sm font-semibold text-slate-700 resize-none placeholder:text-slate-400"
                    ></textarea>
                  </div>

                  <button className="w-full bg-primary hover:bg-secondary text-white font-bold py-4 rounded-xl shadow-lg transition-all uppercase tracking-widest text-[11px] mt-2">
                    Send Enquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
