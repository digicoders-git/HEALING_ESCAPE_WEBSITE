import {
  Stethoscope,
  ClipboardList,
  Plane,
  Languages,
  HeartHandshake,
  UserRoundCheck,
} from "lucide-react";

const services = [
  {
    icon: <Stethoscope size={28} />,
    title: "Clinical Opinions",
    desc: "Expert evaluation from senior institutional specialists.",
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
];

const Services = () => {
  return (
    <section className="py-16 bg-primary text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-4 space-y-6 text-center lg:text-left">
            <div className="space-y-3">
              <h4 className="text-secondary font-bold text-[10px] uppercase tracking-[0.3em]">
                Our Core
              </h4>
              <h2 className="text-2xl md:text-4xl font-bold leading-tight">
                Patient Support
              </h2>
              <p className="text-white/60 font-medium leading-relaxed text-sm">
                We manage clinical complexity so you focus on healing.
              </p>
            </div>
            <button className="bg-secondary text-white font-bold py-3 px-8 rounded-xl shadow-lg uppercase tracking-widest text-[9px] hover:bg-white hover:text-primary transition-all">
              Details Explore
            </button>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all group"
                >
                  <div className="text-secondary mb-3 transform group-hover:-translate-y-1 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-white text-base mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-white/50 text-[10px] font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
