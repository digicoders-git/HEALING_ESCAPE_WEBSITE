import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
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
import Loader from "../components/Loader";
import { getSpecialities } from "../apis/speciality";

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
  const [specialities, setSpecialities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSpecialities = async () => {
      try {
        const data = await getSpecialities({ page: 1, limit: 50 });
        setSpecialities(data.specialities || []);
      } catch (error) {
        console.error("Error fetching specialities:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSpecialities();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader size={50} />
      </div>
    );
  }

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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {specialities.map((spec, index) => (
              <Link
                to={`/speciality/${spec._id}`}
                key={spec._id}
                className="group bg-white rounded overflow-hidden border border-slate-100 hover:shadow-2xl hover:border-secondary/20 transition-all duration-700 md:hover:-translate-y-2 animate-fade-in-up relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-[180px] md:h-[200px] overflow-hidden">
                  <img
                    src={spec.image}
                    alt={spec.title}
                    className="w-full h-full object-cover transition-all duration-1000 scale-105 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
                  
                  
                  
                  {/* Category Badge */}
                  <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                    <span className="text-white text-xs font-bold uppercase tracking-widest">
                      Treatment
                    </span>
                  </div>
                </div>

                <div className="p-5 space-y-4 text-left">
                  <h3 className="text-lg font-bold text-primary uppercase tracking-tight leading-tight group-hover:text-secondary transition-colors italic line-clamp-2">
                    {spec.title}
                  </h3>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed line-clamp-3">
                    {spec.description}
                  </p>
                  <div className="pt-2 flex items-center gap-2 text-secondary group-hover:gap-4 transition-all">
                    <span className="text-xs font-bold uppercase tracking-widest">
                      Explore
                    </span>
                    <ArrowRight size={16} />
                  </div>
                </div>
                
                {/* Hover Gradient Border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-secondary/0 via-secondary/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
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
