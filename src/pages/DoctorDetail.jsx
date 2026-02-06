import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  MapPin,
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  Award,
  Activity,
  Upload,
  Send,
  Star,
  Users,
  Shield,
} from "lucide-react";
import PremiumLoader from "../components/PremiumLoader";
import { getDoctorById } from "../apis/doctor";

const DoctorDetail = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const data = await getDoctorById(id);
        setDoctor(data.doctor);
      } catch (error) {
        console.error("Error fetching doctor:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDoctor();
  }, [id]);

  if (loading) {
    return <PremiumLoader />;
  }

  if (!doctor) {
    return (
      <div className="py-40 text-center space-y-8">
        <h2 className="text-4xl font-black text-primary">Doctor Not Found</h2>
        <Link
          to="/doctors"
          className="text-secondary font-bold uppercase tracking-widest border-b-2 border-secondary pb-1 cursor-pointer"
        >
          Back to Listing
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Improved Hero Section */}
      <section className="relative min-h-[45vh] flex items-center overflow-hidden bg-slate-50 pt-[10px]">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 skew-x-12 translate-x-20" />

        <div className="relative w-full px-4 md:px-8 py-10">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Larger Doctor Image */}
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-3xl overflow-hidden border-8 border-white shadow-2xl shrink-0 group">
              <img
                src={doctor.photo}
                alt={doctor.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="text-center md:text-left space-y-4">
              <div className="space-y-1">
                <h1 className="text-3xl md:text-5xl font-black text-primary leading-tight">
                  {doctor.name}
                </h1>
                <p className="text-secondary font-bold text-xl md:text-2xl">
                  {doctor.designation}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-slate-600">
                <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-slate-100 shadow-sm">
                  <GraduationCap size={18} className="text-secondary" />
                  <span className="text-sm font-bold">
                    {doctor.qualification}
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-slate-100 shadow-sm">
                  <MapPin size={18} className="text-secondary" />
                  <span className="text-sm font-bold">
                    {doctor.hospital.city}, India
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <button className="bg-primary text-white px-8 py-3 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-secondary transition-all shadow-lg hover:shadow-secondary/20 active:scale-95 cursor-pointer">
                  Book Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Restored to your version */}
      <section className="py-6 px-4 md:px-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-1 bg-secondary rounded-full" />
              <h2 className="text-xl font-bold text-primary uppercase italic">
                About Doctor
              </h2>
            </div>
            <p className="text-slate-600 leading-relaxed">{doctor.about}</p>
            {/* <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                <Award size={20} className="text-secondary" />
              </div>
              <p className="text-slate-600 text-sm">
                Dr. {doctor.name.split(" ").slice(-1)} regularly updates skills
                through medical conferences and international training programs.
              </p>
            </div> */}
          </div>

          {/* Experience & Expertise */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-1 bg-secondary rounded-full" />
                <h2 className="text-xl font-bold text-primary uppercase italic">
                  Experience & Expertise
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-slate-600 leading-relaxed">
                  With over {doctor.experience} years of experience,{" "}
                  {doctor.name} has handled thousands of complex cases,
                  providing world-class healthcare and clinical excellence.
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg border border-slate-100 min-w-[150px]">
                    <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <Users className="text-secondary" size={16} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase">
                        Experience
                      </p>
                      <p className="text-sm font-bold text-primary">
                        {doctor.experience} Years
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Expert Areas - Now Full Width to avoid blank space */}
            <div className="p-8 bg-primary rounded-2xl text-white shadow-xl space-y-4">
              <h4 className="text-xl font-bold uppercase italic text-secondary border-b border-white/10 pb-2">
                Expert Areas
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                {doctor.expertise.map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-sm text-white font-medium leading-relaxed">
                      {item.startsWith("•") ? item : `• ${item}`}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Procedures & Treatments */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-1 bg-secondary rounded-full" />
              <h2 className="text-xl font-bold text-primary uppercase italic">
                Procedures & Treatments
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {doctor.procedures.map((proc, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100 hover:border-secondary transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                    <Activity size={16} />
                  </div>
                  <span className="text-sm text-slate-700">{proc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose & Hospital Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Why Choose */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-1 bg-secondary rounded-full" />
                <h3 className="text-lg font-bold text-primary uppercase italic">
                  Why Choose Dr. {doctor.name.split(" ").slice(1)}
                </h3>
              </div>
              <div className="space-y-2">
                {doctor.whyChoose?.length > 0 ? (
                  doctor.whyChoose.slice(0, 4).map((point, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2
                        size={14}
                        className="text-secondary shrink-0 mt-0.5"
                      />
                      <p className="text-sm text-slate-700">{point}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-slate-600 text-sm">
                    Highly experienced and trusted by patients worldwide
                  </p>
                )}
              </div>
            </div>

            {/* Hospital Info */}
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-1 bg-secondary rounded-full" />
                <h3 className="text-lg font-bold text-primary uppercase italic">
                  Hospital Affiliation
                </h3>
              </div>
              <div className="space-y-2">
                <p className="text-secondary font-bold">
                  {doctor.hospital.name}
                </p>
                <p className="text-slate-500 text-sm">
                  {doctor.hospital.city}, India
                </p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {doctor.hospital.accreditation?.slice(0, 2).map((acc, i) => (
                    <span
                      key={i}
                      className="bg-secondary text-white px-2 py-1 rounded text-xs font-bold uppercase"
                    >
                      {acc}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Form Section */}
      {/* <section
        id="appointment"
        className="py-6 px-4 md:px-8 bg-slate-50"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-2 mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-primary uppercase italic">
              Book Consultation with <span className="text-secondary">{doctor.name}</span>
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto text-sm">
              Fill out the form below to receive a personalized consultation.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-lg border border-slate-100">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-slate-400">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-100 focus:outline-none focus:border-secondary text-sm"
                  placeholder="Your full name"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-slate-400">
                  Country
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-100 focus:outline-none focus:border-secondary text-sm"
                  placeholder="Your country"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-slate-400">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-100 focus:outline-none focus:border-secondary text-sm"
                  placeholder="Your email"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-slate-400">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-100 focus:outline-none focus:border-secondary text-sm"
                  placeholder="Your phone number"
                />
              </div>
              <div className="md:col-span-2 space-y-1">
                <label className="text-xs font-bold uppercase text-slate-400">
                  Medical Problem
                </label>
                <textarea
                  rows="2"
                  className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-100 focus:outline-none focus:border-secondary resize-none text-sm"
                  placeholder="Brief details about your condition..."
                />
              </div>
              <div className="md:col-span-2 space-y-1">
                <label className="text-xs font-bold uppercase text-slate-400">
                  Upload Reports
                </label>
                <div className="bg-slate-50 border border-slate-100 rounded-lg p-2 flex items-center justify-between cursor-pointer hover:border-secondary transition-colors">
                  <span className="text-xs text-slate-400">Select medical reports</span>
                  <Upload size={14} className="text-secondary" />
                </div>
              </div>

              <div className="md:col-span-2 text-center pt-2">
                <button
                  type="submit"
                  className="bg-primary hover:bg-secondary text-white font-bold py-2 px-6 rounded-lg transition-all uppercase text-sm flex items-center gap-2 mx-auto"
                >
                  Request Consultation <Send size={14} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default DoctorDetail;
