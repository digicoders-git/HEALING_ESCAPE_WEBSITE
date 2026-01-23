import { ShieldCheck, Globe, Users2, Stethoscope } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/framerVariants";

const stats = [
  {
    icon: <ShieldCheck size={36} />,
    title: "NABH & JCI Accredited",
    desc: "Partnered with India's highest-tier accredited medical institutions.",
  },
  {
    icon: <Globe size={36} />,
    title: "International Reach",
    desc: "Managing patient flows from 15+ countries across 3 continents.",
  },
  {
    icon: <Users2 size={36} />,
    title: "Specialist Access",
    desc: "Direct coordination with 500+ board-certified super-specialists.",
  },
  {
    icon: <Stethoscope size={36} />,
    title: "Clinical Trust",
    desc: "Standardized protocols ensuring optimal post-surgical outcomes.",
  },
];

const TrustBadges = () => {
  return (
    <section className="py-12 bg-primary relative z-30 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/10 rounded-full translate-y-1/2 -translate-x-1/2" />

      <motion.div
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-7xl mx-auto px-4 md:px-8 relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/10">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={fadeIn("up", 0.1)}
              className="flex flex-col items-center text-center px-6 group"
            >
              <div className="text-secondary mb-4 transform group-hover:scale-110 transition-transform duration-500">
                {stat.icon}
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-white text-lg uppercase tracking-wider">
                  {stat.title}
                </h3>
                <p className="text-white/60 text-sm font-medium leading-relaxed">
                  {stat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TrustBadges;
