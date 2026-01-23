import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/framerVariants";
import { useTranslation } from "react-i18next";

const AboutSnapshot = () => {
  const { t } = useTranslation();
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
            {/* Authentic Data Card */}
            {/* <motion.div
              variants={fadeIn("up", 0.4)}
              className="absolute -bottom-6 -left-6 z-20 bg-primary text-white p-6 rounded-2xl shadow-xl max-w-xs border-2 border-white"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-secondary" />
                  <p className="font-bold text-xs tracking-wide">
                    Patient-Centric Care
                  </p>
                </div>
                <p className="text-white/70 text-[10px] font-medium leading-relaxed">
                  Dedicated to connecting global patients with the absolute best
                  clinical outcomes in India.
                </p>
              </div>
            </motion.div> */}
          </motion.div>

          {/* Content Side */}
          <motion.div
            variants={fadeIn("left", 0.2)}
            className="lg:w-1/2 space-y-6"
          >
            <div className="space-y-3">
              <h4 className="text-secondary font-bold text-[12px] uppercase tracking-[0.25em] border-l-4 border-secondary pl-4">
                {t("institutional_profile")}
              </h4>
              <h2 className="text-2xl md:text-4xl font-bold text-primary leading-tight tracking-tight">
                Welcome to Healing Escape Global
              </h2>
              <div className="w-12 h-1 bg-secondary rounded-full" />
            </div>

            <div className="space-y-4 text-slate-600 font-medium leading-relaxed text-base">
              <p>{t("about_p1")}</p>
              <p className="text-sm md:text-base">{t("about_p2")}</p>
            </div>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-block bg-primary hover:bg-secondary text-white font-bold py-3 px-8 rounded-xl shadow-lg transition-all uppercase tracking-widest text-[13px]"
              >
                {t("company_profile")}
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSnapshot;
