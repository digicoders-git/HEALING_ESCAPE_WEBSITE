import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Play,
  Clock,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Video,
} from "lucide-react";
import PageHero from "../components/PageHero";
import { videoData, videoCategories } from "../data/videoData";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/framerVariants";

const bannerSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=2000",
    title: "Video Gallery",
    subtitle: "See Real Stories, Real Care, and Real Medical Journeys",
    buttonLabel: "Watch Videos",
    buttonLink: "#video-grid",
  },
];

const Videos = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredVideos =
    activeCategory === "All"
      ? videoData
      : videoData.filter((v) => v.category === activeCategory);

  return (
    <div className="bg-white">
      <PageHero slides={bannerSlides} />

      {/* 1. Intro Section */}
      <motion.section
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="py-16 md:py-24 px-4 md:px-8 bg-slate-50 relative overflow-hidden text-center"
      >
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-4xl mx-auto space-y-10 relative z-10">
          <motion.div
            variants={fadeIn("down", 0.1)}
            className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-[10px] font-bold uppercase tracking-[0.3em]"
          >
            Visual Transparency
          </motion.div>
          <motion.h2
            variants={fadeIn("up", 0.2)}
            className="text-3xl md:text-6xl font-extrabold text-primary leading-tight uppercase tracking-tighter italic"
          >
            See the Real <span className="text-secondary">Process & Care</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.3)}
            className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium"
          >
            Travelling to another country for medical treatment can feel
            uncertain if you do not know what to expect. Through our videos, we
            show you the real process, real hospitals, real doctors, and real
            support system behind Healing Escape.
          </motion.p>
          <motion.div
            variants={staggerContainer(0.05, 0.2)}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 pt-8 text-left"
          >
            {[
              "Understand your journey",
              "See quality of facilities",
              "Learn directly from doctors",
              "Hear from real patients",
            ].map((benefit, i) => (
              <motion.div
                key={i}
                variants={fadeIn("up", 0.1)}
                className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-slate-100 italic font-bold text-slate-400 text-[10px] uppercase tracking-widest shadow-sm"
              >
                <CheckCircle2 size={14} className="text-secondary shrink-0" />{" "}
                {benefit}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* 2. Video Grid Section */}
      <section
        id="video-grid"
        className="py-16 md:py-24 px-4 md:px-8 bg-white text-center"
      >
        <div className="max-w-7xl mx-auto">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12 md:mb-20">
            {videoCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 md:px-6 md:py-3 rounded-xl md:rounded-2xl text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-white shadow-xl shadow-primary/20"
                    : "bg-slate-50 text-slate-400 border border-slate-100 hover:bg-slate-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div
            variants={staggerContainer(0.05, 0.1)}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          >
            <AnimatePresence mode="popLayout">
              {filteredVideos.map((video, index) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={video.id}
                >
                  <Link
                    to={`/videos/${video.id}`}
                    className="block group bg-white rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-700 md:hover:-translate-y-2 h-full"
                  >
                    <div className="relative h-[200px] md:h-[250px] overflow-hidden">
                      <img
                        src={video.thumbnail}
                        className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                        alt={video.title}
                      />
                      <div className="absolute inset-0 bg-primary/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-14 h-14 md:w-16 md:h-16 bg-secondary text-white rounded-full flex items-center justify-center shadow-2xl scale-75 group-hover:scale-100 transition-transform">
                          <Play size={24} fill="currentColor" />
                        </div>
                      </div>
                      <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/95 backdrop-blur-md rounded-lg text-[8px] md:text-[9px] font-bold uppercase tracking-widest shadow-lg">
                        {video.category}
                      </div>
                      <div className="absolute bottom-4 right-4 px-2.5 py-1 bg-primary/80 backdrop-blur-md rounded-lg text-white text-[8px] md:text-[9px] font-bold flex items-center gap-1.5">
                        <Clock size={10} /> {video.duration}
                      </div>
                    </div>

                    <div className="p-8 md:p-10 space-y-4 md:space-y-6 text-left">
                      <h3 className="text-lg md:text-xl font-bold text-primary italic uppercase tracking-tight group-hover:text-secondary transition-colors line-clamp-2 leading-tight">
                        {video.title}
                      </h3>
                      <p className="text-xs md:text-sm font-medium text-slate-500 leading-relaxed line-clamp-2">
                        {video.description}
                      </p>
                      <div className="pt-2 md:pt-4 flex items-center gap-3 text-secondary md:group-hover:gap-5 transition-all text-[10px] md:text-[11px] font-bold uppercase tracking-widest">
                        Watch Video <ArrowRight size={18} />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredVideos.length === 0 && (
            <div className="py-24 text-center space-y-6">
              <Video size={48} className="mx-auto text-slate-100" />
              <p className="text-slate-400 font-bold uppercase tracking-widest italic">
                No videos found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* 3. Ethics & Promise */}
      <motion.section
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="py-16 md:py-24 px-4 md:px-8 bg-slate-900 overflow-hidden relative"
      >
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full" />
        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-12 md:space-y-16">
          <motion.div variants={fadeIn("down", 0.1)} className="space-y-4">
            <h4 className="text-secondary font-bold uppercase tracking-[0.4em] text-[10px]">
              Visual Ethics
            </h4>
            <h2 className="text-3xl md:text-6xl font-extrabold text-white uppercase tracking-tighter italic">
              Our Video Promise
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                title: "Real Professionals",
                desc: "We only show real hospitals & doctors.",
              },
              {
                title: "No Exaggeration",
                desc: "Truthful reporting of processes.",
              },
              {
                title: "No Guarantees",
                desc: "Educational & awareness focused.",
              },
              {
                title: "Transparency",
                desc: "Revealing the real Healing Escape.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeIn("up", 0.1 * (i + 1))}
                className="p-8 md:p-10 bg-white/5 backdrop-blur-md rounded-[2.5rem] md:rounded-[3rem] border border-white/10 space-y-4 text-center"
              >
                <ShieldCheck size={32} className="text-secondary mx-auto" />
                <h4 className="text-[10px] md:text-[11px] font-bold text-white uppercase tracking-widest">
                  {item.title}
                </h4>
                <p className="text-[9px] md:text-[10px] text-white/40 font-medium leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 4. Closing Line */}
      <section className="py-20 md:py-32 px-4 md:px-8 bg-white text-center">
        <div className="max-w-4xl mx-auto space-y-8 md:space-y-10">
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
          <h2 className="text-2xl md:text-5xl font-extrabold text-primary uppercase tracking-tighter italic leading-none">
            "Our videos are not made to impress you — they are made to help you
            understand, trust, and confidently plan your medical journey."
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

export default Videos;
