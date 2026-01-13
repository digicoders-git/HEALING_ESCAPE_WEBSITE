import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  Search,
  Calendar,
  Tag,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  BookOpen,
} from "lucide-react";
import PageHero from "../components/PageHero";
import { blogData, blogCategories } from "../data/blogData";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/framerVariants";

const bannerSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=2000",
    title: "Blog & Knowledge Hub",
    subtitle: "Trusted Medical Information for International Patients",
    buttonLabel: "Read Articles",
    buttonLink: "#blog-listing",
  },
];

const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredBlogs =
    activeCategory === "All"
      ? blogData
      : blogData.filter((blog) => blog.category === activeCategory);

  return (
    <div className="bg-white">
      <PageHero slides={bannerSlides} />

      {/* 1. Intro Section */}
      <motion.section
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden"
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
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-secondary/10 to-primary/10 text-secondary rounded-full text-[10px] font-bold uppercase tracking-[0.3em] border border-secondary/20">
                  Patient Awareness
                </div>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary leading-[1.1] uppercase tracking-tighter italic">
                  Trusted Knowledge <br />
                  <span className="text-secondary">for Your Journey</span>
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-secondary to-primary rounded-full" />
              </div>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                Travelling to another country for medical treatment can raise
                many questions and concerns. Through our blog, we aim to answer
                those questions and guide you at every step of your journey —
                from understanding your treatment options to planning your
                travel, choosing the right hospital, and recovering after
                treatment.
              </p>
            </motion.div>

            {/* Right Column - Key Topics */}
            <motion.div
              variants={fadeIn("left", 0.2)}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: "📖", label: "Treatment Options" },
                { icon: "✈️", label: "Travel Planning" },
                { icon: "🏥", label: "Hospital Selection" },
                { icon: "💊", label: "Recovery & Care" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group flex flex-col items-center gap-3 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-secondary/30 transition-all duration-500 text-center"
                >
                  <div className="text-3xl group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <p className="text-xs font-bold text-primary uppercase tracking-wide">
                    {item.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 2. Blog Listing Area */}
      <section
        id="blog-listing"
        className="py-16 md:py-24 px-4 md:px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16">
            {/* Sidebar Categories - Top on Mobile, Left on Desktop */}
            <div className="lg:col-span-4 space-y-8 md:space-y-12">
              <div className="lg:sticky lg:top-32 space-y-8 md:space-y-10">
                <div className="space-y-6">
                  <h3 className="text-xl font-extrabold text-primary uppercase tracking-tighter italic border-l-4 border-secondary pl-4">
                    Categories
                  </h3>
                  <div className="flex flex-wrap lg:flex-col gap-2 md:gap-3">
                    {blogCategories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`text-left px-5 py-2.5 md:px-6 md:py-3 rounded-xl md:rounded-2xl text-[10px] md:text-[11px] font-bold uppercase tracking-widest transition-all ${
                          activeCategory === cat
                            ? "bg-primary text-white shadow-xl shadow-primary/20"
                            : "bg-slate-50 text-slate-500 hover:bg-slate-100 border border-slate-100"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-8 md:p-10 bg-slate-900 rounded-[2.5rem] md:rounded-[3rem] text-white space-y-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 blur-[60px] rounded-full" />
                  <h4 className="text-lg font-bold uppercase tracking-tight italic">
                    Our Promise
                  </h4>
                  <p className="text-white/50 text-xs font-medium leading-relaxed">
                    We focus on clarity, honesty, and practical value rather
                    than medical jargon or promotional language.
                  </p>
                  <div className="pt-4 space-y-3">
                    {["Informative", "Accurate", "Safe Advice"].map((txt) => (
                      <div key={txt} className="flex items-center gap-2">
                        <CheckCircle2 size={14} className="text-secondary" />
                        <span className="text-[10px] font-bold uppercase tracking-widest">
                          {txt}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Articles Grid */}
            <div className="lg:col-span-8">
              <motion.div
                variants={staggerContainer(0.05, 0.1)}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
              >
                <AnimatePresence mode="popLayout">
                  {filteredBlogs.map((blog, index) => (
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4 }}
                      key={blog.id}
                    >
                      <Link
                        to={`/blogs/${blog.id}`}
                        className="block group bg-white rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-700 md:hover:-translate-y-2 h-full"
                      >
                        <div className="h-48 md:h-56 overflow-hidden relative">
                          <img
                            src={blog.image}
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                            alt={blog.title}
                          />
                          <div className="absolute top-4 left-4 px-4 py-2 bg-white/95 backdrop-blur-md rounded-xl text-[9px] font-bold uppercase tracking-widest text-primary border border-slate-100 shadow-lg">
                            {blog.category}
                          </div>
                        </div>
                        <div className="p-6 md:p-8 space-y-4 md:space-y-6">
                          <div className="flex items-center gap-2 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                            <Calendar size={12} className="text-secondary" />{" "}
                            {blog.date}
                          </div>
                          <h3 className="text-lg md:text-xl font-bold text-primary uppercase tracking-tight leading-tight group-hover:text-secondary transition-colors line-clamp-2 italic">
                            {blog.title}
                          </h3>
                          <p className="text-xs md:text-sm font-medium text-slate-500 line-clamp-3 leading-relaxed">
                            {blog.excerpt}
                          </p>
                          <div className="pt-2 md:pt-4 flex items-center gap-3 text-secondary font-bold uppercase text-[10px] tracking-widest md:group-hover:gap-5 transition-all">
                            Read More <ArrowRight size={16} />
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>

              {filteredBlogs.length === 0 && (
                <div className="py-20 text-center space-y-6">
                  <BookOpen size={48} className="mx-auto text-slate-100" />
                  <p className="text-slate-400 font-bold uppercase tracking-widest">
                    No articles found in this category.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Ethics Section */}
      <motion.section
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="py-16 md:py-24 px-4 md:px-8 bg-slate-50 border-t border-slate-100 text-center"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeIn("up", 0.1)}
            className="bg-white rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-20 shadow-xl border border-slate-100 space-y-10 md:space-y-12"
          >
            <div className="space-y-4 text-center">
              <h4 className="text-secondary font-bold uppercase tracking-[0.4em] text-[10px]">
                Knowledge Ethics
              </h4>
              <h2 className="text-3xl md:text-6xl font-extrabold text-primary uppercase tracking-tighter italic">
                Our Content Ethics
              </h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                "Patient Awareness",
                "No Exaggerated Claims",
                "Necessary Procedures Only",
                "Honest Guidance",
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeIn("up", 0.1 * (idx + 1))}
                  className="flex flex-col items-center gap-3 md:gap-4 text-center"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100 text-secondary">
                    <ShieldCheck size={24} />
                  </div>
                  <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-primary leading-tight">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* 5. Closing Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-white text-center">
        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
          <h2 className="text-2xl md:text-5xl font-extrabold text-primary uppercase tracking-tighter italic leading-tight">
            "Our blog is not just about information — it is about helping you
            make confident, safe, and well-informed healthcare decisions."
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

export default Blogs;
