import {
  Stethoscope,
  ClipboardList,
  Plane,
  Languages,
  HeartHandshake,
  UserRoundCheck,
  Hospital,
  Heart,
} from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/framerVariants";

const services = [
  {
    icon: <Stethoscope size={28} />,
    title: "Clinical Opinions",
    desc: "Expert evaluation from senior institutional specialists.",
  },
  {
    icon: <Hospital size={28} />,
    title: "Clinical Proposals",
    desc: "A prospective, randomized, double-blind study to evaluate the safety.",
  },
  {
    icon: <ClipboardList size={28} />,
    title: "Pre-Travel Planning",
    desc: "Comprehensive roadmap for a seamless medical journey.",
  },
  {
    icon: <Plane size={28} />,
    title: "Visa Assistance",
    desc: "Priority Medical Visa (M-Visa) documentation support.",
  },
  {
    icon: <Languages size={28} />,
    title: "Interpreters",
    desc: "Professional medical translation to bridge communication.",
  },
  {
    icon: <UserRoundCheck size={28} />,
    title: "Concierge Support",
    desc: "Dedicated patient coordinators for on-ground assistance.",
  },
  {
    icon: <HeartHandshake size={28} />,
    title: "Post-Discharge",
    desc: "Extended follow-up care management after your return.",
  },
  // {
  //   icon: <Heart size={28} />,
  //   title: "Complete Recovery",
  //   desc: "Extended follow-up care management after your return.",
  // },
];

const Services = () => {
  return (
    <section className="py-16 bg-primary text-white overflow-hidden relative">
      <motion.div
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-7xl mx-auto px-4 md:px-8 relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            variants={fadeIn("right", 0.2)}
            className="lg:col-span-4 space-y-6 text-center lg:text-left"
          >
            <div className="space-y-4">
              <h2 className="text-2xl md:text-4xl font-bold leading-tight">
                End to End Patient Support
              </h2>
              <p className="text-white/60 font-medium leading-relaxed text-base">
                We manage clinical complexity so you focus on healing.<br/>
                Provides seamless assistance from initial diagnosis and treatment initiation through long-term therapy, ensuring patients feel supported throughout their entire healthcare journey. <br />
                Offers crucial support through insurance verification, prior authorization assistance, and financial programs (copay/assistance) to make treatments affordable.
                Providing, nurse, hotlines, medication, reminders, and, education, on disease, management to improve, patient, outcomes.
                 Coordinated efforts between providers and patients, reducing, treatment, dropouts. 
              </p>
            </div>
          </motion.div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeIn("up", 0.1)}
                  className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all group"
                >
                  <div className="text-secondary mb-3 transform group-hover:-translate-y-1 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-white text-lg mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-white/50 text-sm font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
              <motion.div className="p-5 border-2 border-dashed border-secondary text-primary flex flex-col justify-center items-center text-center rounded">
            <Heart size={24} className="text-secondary mb-2 animate-pulse" />
            <h3 className="font-bold text-xs uppercase tracking-widest text-secondary">
              Complete Recovery
            </h3>
          </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
