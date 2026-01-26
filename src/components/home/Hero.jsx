import { useState, useRef } from "react";
import { ChevronDown, ShieldCheck, Globe, Activity } from "lucide-react";
import { motion } from "framer-motion";
import ModernSelect from "../ModernSelect";
import homeVideo from "../../assets/homeVideo.mp4";
import { fadeIn, staggerContainer } from "../../utils/framerVariants";
import { createFreeConsultation } from "../../apis/enquiry";
import { toast } from "react-toastify";
import countries from "world-countries";
import jci from "../../assets/home/jci.png";
import nabh from "../../assets/home/nabh.png";

const countryOptions = countries
  .map((c) => {
    const root = c.idd?.root || "";
    const suffix = c.idd?.suffixes?.length === 1 ? c.idd.suffixes[0] : "";
    return {
      value: c.name.common,
      label: c.name.common,
      code: root + suffix,
    };
  })
  .filter((c) => c.code !== "") // Filter out countries without dial codes
  .sort((a, b) => a.label.localeCompare(b.label)); // A-Z sort

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [formData, setFormData] = useState({
    fullName: "",
    country: "",
    city: "",
    countryCode: "+91",
    mobile: "",
    clinicalRequirement: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef(null);

  const handleMouseMove = (e) => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePos({ x, y });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await createFreeConsultation(formData);

      if (response.success) {
        toast.success(
          "Enquiry submitted successfully! We will contact you soon.",
        );
        // Reset form
        setFormData({
          fullName: "",
          country: "",
          city: "",
          countryCode: "+91",
          mobile: "",
          clinicalRequirement: "",
        });
      }
    } catch (error) {
      console.error("Error submitting enquiry:", error);
      toast.error("Failed to submit enquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[100vh] md:min-h-[90vh] lg:h-[88vh] py-16 md:py-20 lg:py-0 flex items-center overflow-hidden bg-primary"
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
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/10 to-transparent" />
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

      <motion.div
        variants={staggerContainer(0.2, 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-20 w-full"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Left Side: Compact High-Impact Content */}
          <div className="lg:col-span-7 space-y-5 md:space-y-6 text-center lg:text-left">
            <motion.div
              variants={fadeIn("right", 0.2)}
              className="space-y-3 md:space-y-4"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                Connecting the World to{" "}
                <span className="text-secondary">India’s Healthcare</span>{" "}
                Excellence
              </h1>
            </motion.div>
            <motion.p
              variants={fadeIn("right", 0.3)}
              className="text-sm sm:text-base md:text-lg text-white/90 font-medium max-w-xl leading-relaxed mx-auto lg:mx-0"
            >
              Your trusted partner for world-class, affordable medical treatment
              in India. We help international patients access top hospitals,
              leading doctors, and seamless medical journeys across India —
              especially North India.
            </motion.p>

            <motion.div
              variants={fadeIn("right", 0.4)}
              className="flex flex-wrap gap-4 md:gap-6 justify-center lg:justify-start"
            >
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                  <ShieldCheck size={16} className="text-secondary" />
                  <img src={jci} alt="" />
                </div>
                <span className="text-lg font-bold text-secondary uppercase tracking-widest">
                  JCI Accredited
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                  <Globe size={16} className="text-secondary" />
                  <img src={nabh} alt="" />
                </div>
                <span className="text-lg font-bold text-secondary uppercase tracking-widest">
                  NABH
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Inquiry Form */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="rounded shadow-2xl p-6 sm:p-7 md:p-8 w-full max-w-md mx-auto relative overflow-hidden">
              <div className="absolute inset-0 z-0">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-217359f488d5?auto=format&fit=crop&q=80&w=1000"
                  alt="Clinical Environment"
                  className="w-full h-full object-cover blur-[4px] scale-110"
                />
                <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />
              </div>

              <div className="relative z-10">
                <div className="mb-5 md:mb-6">
                  <h3 className="text-lg sm:text-xl font-bold text-primary leading-tight uppercase tracking-tight">
                    Get Free Consultation
                  </h3>
                  <p className="text-slate-500 text-[11px] sm:text-[12px] font-bold uppercase tracking-widest mt-1">
                    Verified Response Center
                  </p>
                </div>

                <form
                  className="space-y-3 sm:space-y-3.5"
                  onSubmit={handleSubmit}
                >
                  <div className="space-y-3 sm:space-y-3.5">
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="w-full py-3 sm:py-3.5 px-4 sm:px-5 rounded border border-white bg-white/80 focus:outline-none focus:ring-4 focus:ring-primary/5 transition-all text-sm font-semibold text-slate-700 placeholder:text-slate-400"
                      required
                    />

                    <div className="grid grid-cols-2 gap-3">
                      <ModernSelect
                        options={countryOptions}
                        value={formData.country}
                        onChange={(value) => {
                          const selected = countryOptions.find(
                            (opt) => opt.value === value,
                          );
                          setFormData((prev) => ({
                            ...prev,
                            country: value,
                            countryCode: selected?.code || prev.countryCode,
                          }));
                        }}
                        placeholder="Country"
                        className="w-full"
                      />

                      <input
                        type="text"
                        placeholder="City"
                        value={formData.city}
                        onChange={(e) =>
                          setFormData({ ...formData, city: e.target.value })
                        }
                        className="w-full py-3 sm:py-3.5 px-4 sm:px-5 rounded border border-white bg-white/80 focus:outline-none text-sm font-semibold text-slate-700"
                      />
                    </div>

                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={formData.countryCode}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            countryCode: e.target.value,
                          })
                        }
                        className="w-14 sm:w-16 py-3 sm:py-3.5 px-2 rounded border border-white bg-white/80 text-center text-sm font-bold text-primary"
                      />
                      <input
                        type="text"
                        placeholder="Mobile Number"
                        value={formData.mobile}
                        onChange={(e) =>
                          setFormData({ ...formData, mobile: e.target.value })
                        }
                        className="flex-1 py-3 sm:py-3.5 px-4 sm:px-5 rounded border border-white bg-white/80 focus:outline-none text-sm font-semibold text-slate-700"
                        required
                        maxLength="15"
                      />
                    </div>

                    <textarea
                      placeholder="Clinical requirement..."
                      rows="2"
                      value={formData.clinicalRequirement}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          clinicalRequirement: e.target.value,
                        })
                      }
                      className="w-full py-3 sm:py-3.5 px-4 sm:px-5 rounded border border-white bg-white/80 focus:outline-none text-sm font-semibold text-slate-700 resize-none placeholder:text-slate-400"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-secondary text-white font-bold py-3.5 sm:py-4 rounded shadow-lg transition-all uppercase tracking-widest text-[12px] sm:text-[13px] mt-3 sm:mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Submitting..." : "Send Enquiry"}
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
