import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Stethoscope,
  MapPin,
  Clock,
  Hospital as HospitalIcon,
  Search,
  CheckCircle2,
  ChevronRight,
  SlidersHorizontal,
  X,
  UserCheck,
  ShieldCheck,
} from "lucide-react";
import PageHero from "../components/PageHero";
import { doctorsData, specialitiesList } from "../data/doctorsData";

const bannerSlides = [
  {
    image:
      "https://media.istockphoto.com/id/1321691574/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B4%D1%80%D1%83%D0%B6%D0%B5%D0%BB%D1%8E%D0%B1%D0%BD%D1%8B%D0%B9-%D0%B2%D1%80%D0%B0%D1%87-%D1%80%D0%B0%D0%B7%D0%B3%D0%BE%D0%B2%D0%B0%D1%80%D0%B8%D0%B2%D0%B0%D0%B5%D1%82-%D1%81-%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D0%BE%D0%B9-%D1%81%D1%82%D0%B0%D1%80%D1%88%D0%B5%D0%B9-%D0%BF%D0%B0%D1%86%D0%B8%D0%B5%D0%BD%D1%82%D0%BA%D0%BE%D0%B9-%D0%BE%D1%82%D0%B4%D1%8B%D1%85%D0%B0%D1%8E%D1%89%D0%B5%D0%B9-%D0%B2-%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D0%BB%D0%B8-%D0%BE%D0%B1%D1%8A%D1%8F%D1%81%D0%BD%D1%8F%D0%B5%D1%82.jpg?s=612x612&w=0&k=20&c=N3owHj8_iguVgjtFCkEOmin-LX2jDSb2SROqBDweb70=",
    title: "World-Class Specialists",
    subtitle: "Find the Right Doctor for Your Treatment in India",
    buttonLabel: "Explore Specialities",
    buttonLink: "#listing-start",
  },
];

const Doctors = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const filteredDoctors =
    activeFilter === "All"
      ? doctorsData
      : doctorsData.filter((doc) => doc.speciality === activeFilter);

  return (
    <div className="bg-white">
      <PageHero slides={bannerSlides} />

      {/* 1. Header Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px] -z-10" />
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-6">
          <div className="w-16 md:w-24 h-1.5 bg-secondary rounded-full" />
          <h2 className="text-3xl md:text-8xl font-extrabold text-primary uppercase tracking-tighter italic leading-none">
            Expert Medical <br />
            <span className="text-secondary">Specialists</span>
          </h2>
          <p className="text-lg md:text-2xl text-slate-500 font-medium max-w-3xl leading-relaxed italic">
            "Our doctors are leaders in their respective fields, with years of
            experience in treating complex medical cases and international
            patients."
          </p>
        </div>
      </section>

      {/* 2. Filter Section - Desktop Sticky */}
      <section
        id="listing-start"
        className="hidden lg:block sticky top-[56px] z-50 bg-white/95 backdrop-blur-lg border-b border-slate-100 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {specialitiesList.map((spec) => (
              <button
                key={spec}
                onClick={() => setActiveFilter(spec)}
                className={`px-6 py-2.5 rounded-2xl text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${
                  activeFilter === spec
                    ? "bg-primary text-white shadow-xl shadow-primary/20 scale-105"
                    : "bg-slate-50 text-slate-500 hover:bg-slate-100 border border-slate-100"
                }`}
              >
                {spec}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Mobile Filter Floating Trigger */}
      <div className="lg:hidden fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] w-full max-w-[200px] px-4 text-center">
        <button
          onClick={() => setIsMobileFilterOpen(true)}
          className="w-full bg-primary text-white py-4 rounded-2xl shadow-2xl flex items-center justify-center gap-3 font-bold uppercase tracking-[0.2em] text-[10px] border border-white/10"
        >
          <SlidersHorizontal size={18} className="text-secondary shrink-0" />{" "}
          Specialty Filter
        </button>
      </div>

      {/* 4. Mobile Filter Drawer */}
      <div
        className={`lg:hidden fixed inset-0 z-[200] transition-all duration-500 ${
          isMobileFilterOpen ? "visible" : "invisible"
        }`}
      >
        <div
          className={`absolute inset-0 bg-primary/60 backdrop-blur-md transition-opacity duration-500 ${
            isMobileFilterOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMobileFilterOpen(false)}
        />
        <div
          className={`absolute bottom-0 left-0 w-full bg-white rounded-t-[2.5rem] md:rounded-t-[3.5rem] p-6 md:p-8 pb-10 transition-transform duration-500 h-[70vh] flex flex-col ${
            isMobileFilterOpen ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <div className="w-12 h-1.5 bg-slate-100 rounded-full mx-auto mb-6 shrink-0" />
          <div className="flex justify-between items-center mb-8 shrink-0">
            <h3 className="text-xl font-extrabold text-primary uppercase tracking-tighter italic">
              Specialties
            </h3>
            <button
              onClick={() => setIsMobileFilterOpen(false)}
              className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto pr-1 space-y-2 scrollbar-thin scrollbar-thumb-slate-200">
            {specialitiesList.map((spec) => (
              <button
                key={spec}
                onClick={() => {
                  setActiveFilter(spec);
                  setIsMobileFilterOpen(false);
                }}
                className={`w-full text-left px-5 py-3.5 rounded-xl text-[11px] font-bold uppercase tracking-widest transition-all ${
                  activeFilter === spec
                    ? "bg-secondary text-white shadow-lg"
                    : "bg-slate-50 text-slate-500 border border-slate-100"
                }`}
              >
                {spec}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 5. Doctors Grid Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-slate-50/50">
        <div className="max-w-7xl mx-auto space-y-12 md:space-y-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-extrabold text-primary uppercase tracking-tighter italic leading-tight">
                Leading <span className="text-secondary">Clinicians</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-500 font-medium italic">
                Selected for their board certifications, success rates and
                ethical practice.
              </p>
            </div>
            <div className="flex items-center gap-4 bg-white px-6 py-3 rounded-2xl border border-slate-200 w-fit">
              <span className="text-secondary font-extrabold text-2xl">
                {filteredDoctors.length}
              </span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                Doctors Found
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {filteredDoctors.map((doctor, index) => (
              <div
                key={doctor.id}
                className="group bg-white rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border border-slate-200 hover:shadow-2xl transition-all duration-700 md:animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Image Section */}
                <div className="relative h-72 md:h-80 overflow-hidden bg-slate-100">
                  <img
                    src={doctor.photo}
                    alt={doctor.name}
                    className="w-full h-full object-cover transition-all duration-1000 grayscale group-hover:grayscale-0 md:group-hover:scale-110"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-5 left-5 px-3 py-1.5 md:px-4 md:py-2 bg-white/95 backdrop-blur-md rounded-lg md:rounded-xl text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-primary border border-slate-100 shadow-lg">
                    {doctor.speciality}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 md:p-10 space-y-6 md:space-y-8">
                  <div className="space-y-2">
                    <h3 className="text-xl md:text-2xl font-bold text-primary italic uppercase tracking-tight group-hover:text-secondary transition-colors line-clamp-1">
                      {doctor.name}
                    </h3>
                    <p className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed">
                      {doctor.qualification}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 md:gap-6 pt-6 border-t border-slate-50">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-secondary">
                        <Clock size={14} className="md:w-4 md:h-4" />
                        <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest">
                          Experience
                        </span>
                      </div>
                      <p className="text-base md:text-lg font-bold text-primary italic">
                        {doctor.experience}+ Yrs
                      </p>
                    </div>
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-secondary">
                        <HospitalIcon size={14} className="md:w-4 md:h-4" />
                        <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest">
                          Location
                        </span>
                      </div>
                      <p className="text-xs md:text-sm font-bold text-slate-500 line-clamp-1 italic">
                        {doctor.hospital.name}
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 flex items-center justify-between gap-4">
                    <Link
                      to={`/doctor/${doctor.id}`}
                      className="flex-1 bg-primary text-white text-center py-4 md:py-5 rounded-xl md:rounded-2xl font-bold text-[10px] uppercase tracking-widest shadow-xl hover:bg-secondary transition-all flex items-center justify-center gap-2 md:gap-3"
                    >
                      View Profile <ChevronRight size={14} />
                    </Link>
                    <Link
                      to="/contact"
                      className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-slate-50 flex items-center justify-center text-secondary border border-slate-100 hover:bg-secondary hover:text-white transition-all shadow-sm"
                    >
                      <Stethoscope size={18} md:size={20} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredDoctors.length === 0 && (
            <div className="py-24 md:py-40 text-center">
              <Search size={48} className="mx-auto text-slate-100 mb-6" />
              <h3 className="text-lg md:text-xl font-bold text-primary uppercase italic">
                No doctors found matching your criteria.
              </h3>
            </div>
          )}
        </div>
      </section>

      {/* 6. Assurance Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="space-y-10 md:space-y-12">
            <div className="w-16 h-1 bg-secondary rounded-full" />
            <h2 className="text-3xl md:text-6xl font-extrabold text-primary uppercase tracking-tighter italic leading-none">
              Medical <span className="text-secondary">Excellence</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {[
                {
                  icon: <ShieldCheck />,
                  title: "Carefully Verified",
                  desc: "Every doctor is vetted for clinical credentials & ethics.",
                },
                {
                  icon: <HospitalIcon />,
                  title: "Top Hospitals",
                  desc: "Associated with India's most reputed medical centers.",
                },
                {
                  icon: <CheckCircle2 />,
                  title: "Ethical Practice",
                  desc: "Committed to honest guidance and patient-first care.",
                },
                {
                  icon: <UserCheck />,
                  title: "Patient Focused",
                  desc: "Experienced in managing international patient journeys.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 items-start p-2 rounded-2xl md:hover:bg-slate-50 transition-all border border-transparent"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-slate-50 flex items-center justify-center text-secondary border border-slate-100 shrink-0">
                    {item.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-primary">
                      {item.title}
                    </h4>
                    <p className="text-[9px] md:text-[10px] text-slate-400 leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="p-8 md:p-20 bg-slate-900 rounded-[2.5rem] md:rounded-[4rem] text-white space-y-8 md:space-y-10 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 blur-[80px] rounded-full" />
            <p className="text-2xl md:text-3xl font-light italic leading-relaxed text-white/80">
              "We connect you only with the top 1% of medical experts who meet
              the highest standards of medical expertise and ethics."
            </p>
            <div className="pt-8 md:pt-10 border-t border-white/5">
              <Link
                to="/contact"
                className="inline-block bg-secondary text-white px-10 py-4 md:px-12 md:py-5 rounded-xl md:rounded-2xl text-[10px] md:text-[11px] font-bold uppercase tracking-widest hover:bg-white hover:text-primary transition-all shadow-lg"
              >
                Inquire Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.6s ease-out forwards; }
        .scrollbar-thin::-webkit-scrollbar { width: 4px; }
        .scrollbar-thumb-slate-200::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
      `,
        }}
      />
    </div>
  );
};

export default Doctors;
