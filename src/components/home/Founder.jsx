import { Quote, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/framerVariants";

const Founder = () => {
  return (
    <section className="py-12 bg-slate-50 relative overflow-hidden">
      <motion.div
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-7xl mx-auto px-4 md:px-8"
      >
        <div className="bg-white rounded p-8 md:p-12 shadow-xl border border-slate-50 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              variants={fadeIn("right", 0.2)}
              className="lg:col-span-4 relative group"
            >
              <div className="relative rounded overflow-hidden aspect-[4/5] border-4 border-slate-50 shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=1000"
                  alt="Founder"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              </div>
              <motion.div
                variants={fadeIn("up", 0.4)}
                className="absolute -bottom-4 -right-4 bg-secondary p-4 rounded shadow-lg text-white border-2 border-white"
              >
                <Quote size={24} />
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeIn("left", 0.2)}
              className="lg:col-span-8 space-y-6"
            >
              <div className="space-y-2">
                <h4 className="text-secondary font-bold text-[10px] uppercase tracking-[0.2em]">
                  Leadership
                </h4>
                <h2 className="text-2xl md:text-3xl font-bold text-primary tracking-tight">
                  Vision & Integrity
                </h2>
                <p className="text-slate-400 font-bold uppercase tracking-widest text-[9px] italic tracking-tighter">
                  A Message from our founder
                </p>
                <div className="w-12 h-1 bg-secondary rounded-full" />
              </div>

              <div className="space-y-4">
                <p className="text-lg md:text-xl text-slate-700 font-bold leading-relaxed italic">
                  "At Healing Escape, we are committed to ethical practices and
                  service excellence."
                </p>
                <p className="text-slate-500 font-medium text-sm leading-relaxed">
                  Healing Escape is founded by{" "}
                  <span className="text-primary font-bold">Shubham Singh</span>,
                  a multidisciplinary entrepreneur with international exposure
                  in law and healthcare operations. He leads with a mission to
                  transform the medical tourism experience for international
                  patients.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Founder;
