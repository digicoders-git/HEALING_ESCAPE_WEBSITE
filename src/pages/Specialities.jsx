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
        className="py-16 md:py-24 px-4 md:px-8 bg-slate-50 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-5xl mx-auto space-y-10 relative z-10 text-center">
          <div className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-[10px] font-bold uppercase tracking-[0.3em]">
            Comprehensive Care
          </div>
          <h2 className="text-3xl md:text-6xl font-extrabold text-primary leading-tight uppercase tracking-tighter italic">
            Choosing the Right <span className="text-secondary">Treatment</span>
          </h2>
          <div className="p-6 md:p-16 bg-white rounded-[2.5rem] md:rounded-[3.5rem] border border-slate-100 shadow-2xl space-y-6 md:space-y-8">
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
              Choosing the right treatment and the right medical team is the
              most important step in your healing journey. At Healing Escape, we
              make this easier by offering you access to verified hospitals,
              experienced doctors, and transparent treatment processes across
              all major medical specialities.
            </p>
            <p className="text-slate-500 font-medium pt-8 border-t border-slate-50 italic text-sm md:text-base">
              You can explore treatments category-wise and select the option
              that best matches your medical needs. All treatments listed are
              provided at NABH and JCI accredited hospitals in North India.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Key Treatment Categories Grid */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-white text-center">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-20 space-y-4">
            <h4 className="text-secondary font-bold uppercase tracking-[0.4em] text-[10px]">
              Medical Excellence
            </h4>
            <h2 className="text-3xl md:text-6xl font-extrabold text-primary uppercase tracking-tighter italic">
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

      {/* 3. Assurance Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-slate-900 overflow-hidden relative">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="bg-white/5 backdrop-blur-md rounded-[2.5rem] md:rounded-[4rem] border border-white/10 p-8 md:p-24 space-y-12 md:space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
              <div className="space-y-6 md:space-y-8">
                <div className="w-16 h-1 bg-secondary rounded-full" />
                <h2 className="text-3xl md:text-6xl font-extrabold text-white uppercase tracking-tighter italic leading-none">
                  Our Commitment to{" "}
                  <span className="text-secondary">Ethical Guidance</span>
                </h2>
                <p className="text-white/60 text-lg md:text-xl font-light italic">
                  At Healing Escape, we don't just offer treatments — we offer
                  trusted, safe, and well-planned healthcare solutions designed
                  around your needs.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                {[
                  {
                    icon: <ShieldCheck />,
                    title: "Medically Necessary",
                    desc: "We recommend treatments only when required.",
                  },
                  {
                    icon: <Building2 />,
                    title: "Verified Entities",
                    desc: "Connecting you with JCI/NABH accredited providers.",
                  },
                  {
                    icon: <CheckCircle2 />,
                    title: "Full Transparency",
                    desc: "Clear treatment planning and fixed cost estimates.",
                  },
                  {
                    icon: <UserCheck />,
                    title: "Patient First",
                    desc: "Every decision is made keeping your health in focus.",
                  },
                ].map((item, i) => (
                  <div key={i} className="space-y-3 md:space-y-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/10 flex items-center justify-center text-secondary border border-white/10">
                      {item.icon}
                    </div>
                    <h4 className="text-[10px] md:text-[11px] font-bold text-white uppercase tracking-widest">
                      {item.title}
                    </h4>
                    <p className="text-[10px] text-white/40 font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
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
