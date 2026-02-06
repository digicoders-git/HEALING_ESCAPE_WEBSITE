import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  HeartPulse,
  Activity,
  Bone,
  Brain,
  Stethoscope,
  Users,
  UserCheck,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Building2,
  Search,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "../components/PageHero";
import PremiumLoader from "../components/PremiumLoader";
import { getSpecialities } from "../apis/speciality";

const bannerSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2000",
    title: "Advanced Specialities",
    subtitle:
      "You can explore treatments category-wise and select the option that best matches your medical needs. All treatments listed are provided at NABH and JCI accredited hospitals in india.",
    buttonLabel: "Explore Treatments",
    buttonLink: "#treatments-start",
  },
];

const iconMap = {
  HeartPulse: <HeartPulse />,
  Activity: <Activity />,
  Bone: <Bone />,
  Brain: <Brain />,
  Stethoscope: <Stethoscope />,
  Users: <Users />,
  UserCheck: <UserCheck />,
};

const Specialities = () => {
  const [specialities, setSpecialities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [selectedSpec, setSelectedSpec] = useState(null);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 9,
    total: 0,
    pages: 1,
  });

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchQuery);
      setPagination((prev) => ({ ...prev, page: 1 })); // Reset to page 1 on search
    }, 500);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  useEffect(() => {
    const fetchSpecialities = async () => {
      try {
        setLoading(true);
        const response = await getSpecialities({
          page: pagination.page,
          limit: pagination.limit,
          search: debouncedSearch,
          isActive: true,
        });

        if (response.success) {
          setSpecialities(response.data || response.specialities || []);
          setPagination((prev) => ({
            ...prev,
            total: response.total,
            pages: response.pages,
          }));
        }
      } catch (error) {
        console.error("Error fetching specialities:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSpecialities();
  }, [pagination.page, debouncedSearch, pagination.limit]);

  if (loading) {
    return <PremiumLoader />;
  }

  return (
    <div className="bg-white">
      <PageHero slides={bannerSlides} />

      {/* 1. Intro Section */}
      {/* <section
        id="treatments-start"
        className="py-12 md:py-16 px-4 md:px-8 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary leading-[1.1] uppercase tracking-tighter italic lg:pb-10">
            Choosing the Right
            <span className="text-secondary"> Treatment</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="space-y-8 md:space-y-10">
              <div className="space-y-6">
              </div>
              <div className="space-y-4">
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                  Choosing the right treatment and the right medical team is the
                  most important step in your healing journey. At Healing
                  Escape, we make this easier by offering you access to verified
                  hospitals, experienced doctors, and transparent treatment
                  processes across all major medical specialities.
                </p>
                <p className="text-sm md:text-base text-slate-500 font-medium italic">
                  You can explore treatments category-wise and select the option
                  that best matches your medical needs. All treatments listed
                  are provided at NABH and JCI accredited hospitals in North
                  India.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: "🏥",
                  label: "Verified Hospitals",
                  desc: "NABH & JCI Accredited",
                },
                {
                  icon: "👨‍⚕️",
                  label: "Expert Doctors",
                  desc: "Experienced Specialists",
                },
                {
                  icon: "✅",
                  label: "Transparent Process",
                  desc: "Clear Treatment Plans",
                },
                {
                  icon: "🌍",
                  label: "All Specialities",
                  desc: "Comprehensive Care",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group flex flex-col items-center gap-3 p-6 bg-white rounded border border-slate-100 shadow-sm hover:shadow-xl hover:border-secondary/30 transition-all duration-500 text-center"
                >
                  <div className="text-3xl group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-primary uppercase tracking-wide mb-1">
                      {item.label}
                    </p>
                    <p className="text-[10px] text-slate-500 font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      <section className="py-12 md:py-16 px-4 md:px-8 bg-white text-center">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-20 space-y-4">
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary uppercase tracking-tighter italic">
              Key Treatment Categories
            </h2>
          </div>

          <div className="max-w-2xl mx-auto mb-12 relative group">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search
                className="text-slate-400 group-focus-within:text-secondary mb-1 transition-colors"
                size={20}
              />
            </div>
            <input
              type="text"
              placeholder="Search treatments (e.g. Heart, Orthopedics, Brain...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-4 bg-white border-2 border-slate-100 rounded focus:border-secondary transition-all outline-none shadow-sm hover:shadow-md text-primary font-medium"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {loading ? (
              <div className="col-span-full py-20 flex flex-col items-center justify-center gap-4">
                <Loader size={40} />
                <p className="text-slate-400 font-medium">
                  Loading treatments...
                </p>
              </div>
            ) : (
              specialities.map((spec, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  key={spec._id}
                  onClick={() => setSelectedSpec(spec)}
                  className="group relative h-[350px] rounded overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  <img
                    src={spec.image}
                    alt={spec.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />

                  <div className="absolute inset-0 p-8 flex flex-col justify-end text-left transition-transform duration-500">
                    <div className="space-y-3">
                      <div className="w-12 h-1 bg-secondary rounded-full transform origin-left" />
                      <h3 className="text-2xl font-bold text-white uppercase italic tracking-tight line-clamp-1">
                        {spec.title}
                      </h3>
                      <p className="text-white/80 text-sm font-medium line-clamp-2 transition-opacity duration-500">
                        {spec.description}
                      </p>
                      <div className="flex items-center gap-2 text-secondary font-bold text-xs uppercase tracking-[0.2em] transition-all duration-500">
                        View Details <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>

          {!loading && specialities.length === 0 && (
            <div className="py-20 text-center space-y-4">
              <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto text-slate-300">
                <Search size={40} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary italic uppercase">
                  No treatments found
                </h3>
                <p className="text-slate-500">
                  Try adjusting your search query
                </p>
              </div>
              <button
                onClick={() => setSearchQuery("")}
                className="text-secondary font-bold uppercase tracking-widest text-xs hover:underline cursor-pointer"
              >
                Clear Search
              </button>
            </div>
          )}

          {!loading && pagination.pages > 1 && (
            <div className="mt-16 flex items-center justify-center gap-4">
              <button
                disabled={pagination.page === 1}
                onClick={() =>
                  setPagination((prev) => ({ ...prev, page: prev.page - 1 }))
                }
                className="px-6 py-2 rounded-full border border-slate-200 text-sm font-bold uppercase tracking-widest text-primary hover:bg-slate-50 disabled:opacity-30 disabled:hover:bg-transparent transition-all cursor-pointer"
              >
                Prev
              </button>
              <div className="flex items-center gap-2">
                {[...Array(pagination.pages)].map((_, i) => (
                  <button
                    key={i + 1}
                    onClick={() =>
                      setPagination((prev) => ({ ...prev, page: i + 1 }))
                    }
                    className={`w-10 h-10 rounded-full text-sm font-bold transition-all ${
                      pagination.page === i + 1
                        ? "bg-primary text-white scale-110 shadow-lg cursor-pointer"
                        : "text-slate-400 hover:text-primary hover:bg-slate-50 cursor-pointer"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
              <button
                disabled={pagination.page === pagination.pages}
                onClick={() =>
                  setPagination((prev) => ({ ...prev, page: prev.page + 1 }))
                }
                className="px-6 py-2 rounded-full border border-slate-200 text-sm font-bold uppercase tracking-widest text-primary hover:bg-slate-50 disabled:opacity-30 disabled:hover:bg-transparent transition-all cursor-pointer"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>

      <AnimatePresence>
        {selectedSpec && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSpec(null)}
              className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl bg-white rounded overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            >
              {/* Image Side */}
              <div className="w-full md:w-1/2 relative h-[300px] md:h-auto">
                <img
                  src={selectedSpec.image}
                  alt={selectedSpec.title}
                  className="w-full h-full object-cover"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent md:bg-gradient-to-r" /> */}

                {/* Close Button Mobile */}
                <button
                  onClick={() => setSelectedSpec(null)}
                  className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-lg rounded-full text-white md:hidden cursor-pointer"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Content Side */}
              <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto custom-scrollbar">
                {/* Close Button Desktop */}
                <button
                  onClick={() => setSelectedSpec(null)}
                  className="absolute top-8 right-8 p-2 text-slate-400 hover:text-primary transition-colors hidden md:block cursor-pointer"
                >
                  <X size={28} />
                </button>

                <div className="space-y-8">
                  <div className="space-y-2">
                    <span className="text-secondary font-bold text-xs uppercase tracking-[0.3em]">
                      Treatment Detail
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-primary uppercase italic tracking-tighter leading-none">
                      {selectedSpec.title}
                    </h2>
                  </div>

                  <div className="space-y-6 text-left">
                    <div className="space-y-3">
                      <h4 className="text-sm font-bold text-primary uppercase tracking-widest flex items-center gap-2">
                        <div className="w-2 h-2 bg-secondary rounded-full" />
                        About Treatment
                      </h4>
                      <p className="text-slate-600 leading-relaxed font-medium">
                        {selectedSpec.description}
                      </p>
                    </div>

                    {selectedSpec.whatIs && (
                      <div className="space-y-3">
                        <h4 className="text-sm font-bold text-primary uppercase tracking-widest flex items-center gap-2">
                          <div className="w-2 h-2 bg-secondary rounded-full" />
                          Detailed Overview
                        </h4>
                        <p className="text-slate-500 text-sm leading-relaxed">
                          {selectedSpec.whatIs}
                        </p>
                      </div>
                    )}

                    {selectedSpec.whenRecommended && (
                      <div className="space-y-4">
                        <h4 className="text-sm font-bold text-primary uppercase tracking-widest flex items-center gap-2">
                          <div className="w-2 h-2 bg-secondary rounded-full" />
                          Recommended When
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {JSON.parse(selectedSpec.whenRecommended || "[]").map(
                            (tag, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-full text-[10px] font-bold text-slate-500 uppercase tracking-widest"
                              >
                                {tag}
                              </span>
                            ),
                          )}
                        </div>
                      </div>
                    )}

                    <div className="pt-8 border-t border-slate-100 flex items-center justify-between">
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                          Estimated Cost
                        </p>
                        <p className="text-2xl font-black text-primary italic">
                          {selectedSpec.costRange || "Contact for Price"}
                        </p>
                      </div>
                      <Link
                        to="/contact"
                        className="px-8 py-3 bg-primary text-white text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:bg-secondary transition-all cursor-pointer"
                      >
                        Inquire Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style
        dangerouslySetInnerHTML={{
          __html: `
          .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: #f1f1f1;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #e2e8f0;
            border-radius: 10px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #cbd5e1;
          }
        `,
        }}
      />
    </div>
  );
};

export default Specialities;
