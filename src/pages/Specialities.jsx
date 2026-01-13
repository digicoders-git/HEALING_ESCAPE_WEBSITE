import { Link } from "react-router-dom";
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
  CheckCircle2,
} from "lucide-react";
import PageHero from "../components/PageHero";
import { specialitiesData } from "../data/specialitiesData";

const bannerSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2000",
    title: "Advanced Specialities",
    subtitle: "World-Class Medical Treatments in India with Trusted Experts",
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
  return (
    <div className="bg-white">
      <PageHero slides={bannerSlides} />

      {/* 1. Intro Section */}
      <section
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
            {/* Left Column - Content */}
            <div className="space-y-8 md:space-y-10">
              <div className="space-y-6">
                {/* Badge Removed */}
                
                {/* <div className="w-20 h-1 bg-gradient-to-r from-secondary to-primary rounded-full" /> */}
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

            {/* Right Column - Feature Cards */}
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
                  className="group flex flex-col items-center gap-3 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-secondary/30 transition-all duration-500 text-center"
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
      </section>

      {/* 2. Key Treatment Categories Grid */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-white text-center">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-20 space-y-4">
            {/* Badge Removed */}
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary uppercase tracking-tighter italic">
              Key Treatment Categories
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {specialitiesData.map((spec, index) => (
              <Link
                to={`/speciality/${spec.id}`}
                key={spec.id}
                className="group bg-white rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-700 md:hover:-translate-y-4 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-[200px] md:h-[250px] overflow-hidden">
                  <img
                    src={spec.image}
                    alt={spec.title}
                    className="w-full h-full object-cover transition-all duration-1000 scale-105 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-primary/95 via-primary/40 to-transparent opacity-80" />

                  {/* Icon Overlay */}
                  <div className="absolute top-6 left-6 md:top-8 md:left-8 w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 group-hover:bg-secondary group-hover:border-secondary transition-all">
                    {iconMap[spec.icon] || <Activity />}
                  </div>
                </div>

                <div className="p-8 md:p-10 space-y-5 md:space-y-6 text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-primary uppercase tracking-tight leading-tight group-hover:text-secondary transition-colors italic">
                    {spec.title}
                  </h3>
                  <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed line-clamp-2">
                    {spec.description}
                  </p>
                  <div className="pt-4 md:pt-6 flex items-center gap-3 text-secondary group-hover:gap-5 transition-all">
                    <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest">
                      Explore Procedure
                    </span>
                    <ArrowRight size={18} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
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

export default Specialities;
