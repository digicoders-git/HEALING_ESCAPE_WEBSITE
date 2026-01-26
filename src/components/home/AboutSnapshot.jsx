import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/framerVariants";

const AboutSnapshot = () => {
  return (
    <section className="py-12 bg-white overflow-hidden">
      <motion.div
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-7xl mx-auto px-4 md:px-8"
      >
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Visual Side */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-4xl overflow-hidden shadow-xl border-4 border-slate-50">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000"
                alt="Doctor with patient"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            variants={fadeIn("left", 0.2)}
            className="lg:w-1/2 space-y-6"
          >
            <div className="space-y-3">
              <h4 className="text-secondary font-bold text-[12px] uppercase tracking-[0.25em] border-l-4 border-secondary pl-4">
                Institutional Profile
              </h4>
              <h2 className="text-2xl md:text-4xl font-bold text-primary leading-tight tracking-tight">
                Welcome to Healing Escape Global
              </h2>
              <div className="w-12 h-1 bg-secondary rounded-full" />
            </div>

            <div className="space-y-4 text-slate-600 font-medium leading-relaxed text-base">
              <p>
                We operate as a bridge between international healthcare seekers
                and India’s premier medical institutions.
              </p>
              <p className="text-sm md:text-base">
                Our operations are built on three core pillars: Clinical
                Transparency, Ethical Facilitation, and Uncompromising Patient
                Support.
              </p>
            </div>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-block bg-primary hover:bg-secondary text-white font-bold py-3 px-8 rounded-xl shadow-lg transition-all uppercase tracking-widest text-[13px]"
              >
                Company Profile
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSnapshot;
