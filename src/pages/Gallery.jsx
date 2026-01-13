import { useState } from "react";
import {
  X,
  Maximize2,
  Image as ImageIcon,
  ShieldCheck,
  Building2,
  Stethoscope,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import PageHero from "../components/PageHero";
import { galleryData, galleryCategories } from "../data/galleryData";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/framerVariants";

const bannerSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=2000",
    title: "Our Gallery",
    subtitle:
      "A Glimpse into Our Hospitals, Facilities, and Patient Care Journey",
    buttonLabel: "View Gallery",
    buttonLink: "#gallery-grid",
  },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages =
    activeCategory === "All"
      ? galleryData
      : galleryData.filter((img) => img.category === activeCategory);

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
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-5xl mx-auto space-y-10 relative z-10 text-center">
          <motion.div
            variants={fadeIn("down", 0.1)}
            className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-[10px] font-bold uppercase tracking-[0.3em]"
          >
            Visual Evidence
          </motion.div>
          <motion.h2
            variants={fadeIn("up", 0.2)}
            className="text-3xl md:text-7xl font-extrabold text-primary tracking-tighter uppercase italic leading-tight"
          >
            Transparency <span className="text-secondary">Builds Trust</span>
          </motion.h2>
          <motion.div
            variants={fadeIn("up", 0.3)}
            className="p-6 md:p-16 bg-white rounded-[2.5rem] md:rounded-[4rem] border border-slate-100 shadow-2xl"
          >
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
              Choosing a hospital in another country can be difficult if you
              cannot see the facilities in advance. Through our gallery, we show
              you the actual environment where treatment and recovery take
              place, so you can make your decision with clarity and confidence.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* 2. Gallery Grid */}
      <section
        id="gallery-grid"
        className="py-16 md:py-24 px-4 md:px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12 md:mb-20">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 md:px-8 md:py-3.5 rounded-xl md:rounded-2xl text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-white shadow-xl shadow-primary/20"
                    : "bg-slate-50 text-slate-400 border border-slate-100 hover:bg-slate-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid Layout */}
          <motion.div
            variants={staggerContainer(0.05, 0.1)}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((item, index) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={item.id}
                  onClick={() => setSelectedImage(item)}
                  className="group relative h-[300px] md:h-[400px] rounded-[2rem] md:rounded-[3rem] overflow-hidden cursor-pointer bg-slate-100"
                >
                  <img
                    src={item.image}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 md:group-hover:scale-100"
                    alt={item.caption}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end transform translate-y-6 md:translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="text-[10px] font-bold text-secondary uppercase tracking-[0.4em] mb-2 md:mb-4">
                        {item.category}
                      </span>
                      <h4 className="text-white text-lg md:text-xl font-bold uppercase tracking-tight italic leading-tight">
                        {item.caption}
                      </h4>
                      <div className="mt-4 md:mt-8 flex items-center gap-3 text-white/50 text-[10px] font-bold uppercase tracking-widest">
                        View Frame{" "}
                        <Maximize2 size={16} className="text-secondary" />
                      </div>
                    </div>
                  </div>

                  {/* Minimal Label when not hovered */}
                  <div className="md:hidden absolute bottom-4 left-4 right-4 p-3 bg-black/40 backdrop-blur-md rounded-xl border border-white/10">
                    <p className="text-[10px] font-bold text-white uppercase tracking-widest truncate">
                      {item.caption}
                    </p>
                  </div>

                  {/* Desktop Minimal Label */}
                  <div className="hidden md:block absolute bottom-6 left-6 right-6 p-4 bg-white/20 backdrop-blur-md rounded-2xl border border-white/20 opacity-100 group-hover:opacity-0 transition-opacity">
                    <p className="text-[10px] font-bold text-white uppercase tracking-widest truncate">
                      {item.caption}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredImages.length === 0 && (
            <div className="py-24 text-center space-y-6">
              <ImageIcon size={48} className="mx-auto text-slate-100" />
              <p className="text-slate-400 font-bold uppercase tracking-widest italic">
                No images found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* 3. Visual Content Promise */}
      <motion.section
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="py-16 md:py-24 px-4 md:px-8 bg-slate-900 overflow-hidden relative"
      >
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/5 blur-[120px] rounded-full translate-y-1/2" />
        <div className="max-w-7xl mx-auto relative z-10 text-center lg:text-left">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div
              variants={fadeIn("right", 0.2)}
              className="space-y-8 md:space-y-10"
            >
              <div className="inline-block px-5 py-2 bg-secondary/10 border border-secondary/20 rounded-full text-secondary text-[11px] font-bold uppercase tracking-widest">
                Our Visual Standard
              </div>
              <h2 className="text-3xl md:text-7xl font-extrabold text-white uppercase tracking-tighter italic leading-none">
                Our Commitment to <br />
                <span className="text-secondary">Transparency</span>
              </h2>
              <p className="text-white/50 text-lg md:text-xl font-light italic leading-relaxed">
                Our gallery is not just a collection of photos — it is a
                transparent window into the quality, care, and comfort that
                await you in India.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {[
                {
                  icon: <ShieldCheck />,
                  title: "Real Facilities",
                  desc: "All images are of real hospitals & care centers.",
                },
                {
                  icon: <Building2 />,
                  title: "Zero Stock",
                  desc: "Actual site photographs, never generic imagery.",
                },
                {
                  icon: <Stethoscope />,
                  title: "Clinical Reality",
                  desc: "Actual treatment environments shown.",
                },
                {
                  icon: <ChevronRight />,
                  title: "Honest Look",
                  desc: "Building confidence through genuine data.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn("up", 0.1 * (i + 1))}
                  className="p-8 md:p-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-[2.5rem] md:rounded-[3rem] space-y-4 shadow-2xl"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-secondary border border-white/10">
                    {item.icon}
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-[10px] md:text-[11px] font-bold text-white uppercase tracking-widest">
                      {item.title}
                    </h4>
                    <p className="text-[9px] md:text-[10px] text-white/40 font-medium leading-relaxed italic">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* 4. Lightbox View */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[200] bg-primary/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-20 transition-all animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-6 right-6 md:top-10 md:right-10 text-white/50 hover:text-white transition-colors">
            <X size={32} />
          </button>
          <div
            className="max-w-6xl w-full h-full relative flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              className="max-h-full max-w-full object-contain rounded-2xl md:rounded-3xl shadow-2xl"
              alt={selectedImage.caption}
            />
            {/* Caption on lightbox - hide on very small screens to avoid clutter */}
            <div className="hidden sm:block absolute bottom-6 md:bottom-10 left-6 md:left-10 right-6 md:right-10 p-6 md:p-10 bg-black/40 backdrop-blur-md rounded-[2rem] md:rounded-[3rem] border border-white/10 space-y-1 md:space-y-2 shadow-2xl">
              <span className="text-secondary font-bold text-[10px] md:text-xs uppercase tracking-[0.4em]">
                {selectedImage.category}
              </span>
              <h2 className="text-white text-xl md:text-3xl font-extrabold uppercase italic tracking-tighter">
                {selectedImage.caption}
              </h2>
            </div>
          </div>
        </div>
      )}

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animate-fade-in { animation: fade-in 0.5s ease-out; }
      `,
        }}
      />
    </div>
  );
};

export default Gallery;
