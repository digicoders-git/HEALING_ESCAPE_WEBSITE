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
import Loader from "../components/Loader";
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
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader size={50} />
      </div>
    );
  }

  if (!doctor) {
    return (
      <div className="py-40 text-center space-y-8">
        <h2 className="text-4xl font-black text-primary">Doctor Not Found</h2>
        <Link
          to="/doctors"
          className="text-secondary font-bold uppercase tracking-widest border-b-2 border-secondary pb-1"
        >
          Back to Listing
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden bg-gradient-to-br from-primary to-primary/80 pt-[72px]">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/60 to-transparent" />
        
        <div className="relative h-full flex items-center px-4 md:px-8">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6">
            <div className="w-32 h-32 rounded-2xl overflow-hidden border-4 border-white/20 shrink-0">
              <img
                src={doctor.photo}
                alt={doctor.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left space-y-3">
              <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight">
                {doctor.name}
              </h1>
              <p className="text-secondary font-bold text-lg">
                {doctor.designation}
              </p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-white/80">
                <div className="flex items-center gap-2">
                  <GraduationCap size={16} className="text-secondary" />
                  <span className="text-sm">{doctor.qualification}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-secondary" />
                  <span className="text-sm">{doctor.hospital.city}, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
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
            <p className="text-slate-600 leading-relaxed">
              {doctor.about}
            </p>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                <Award size={20} className="text-secondary" />
              </div>
              <p className="text-slate-600 text-sm">
                Dr. {doctor.name.split(" ").slice(-1)} regularly updates skills through medical conferences and international training programs.
              </p>
            </div>
          </div>

          {/* Experience & Expertise */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-1 bg-secondary rounded-full" />
              <h2 className="text-xl font-bold text-primary uppercase italic">
                Experience & Expertise
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <p className="text-slate-600">
                  With over {doctor.experience} years of experience, Dr. {doctor.name.split(" ").slice(-1)} has handled thousands of complex cases.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg border border-slate-100">
                    <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <Users className="text-secondary" size={16} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase">Experience</p>
                      <p className="text-xs font-bold text-primary">{doctor.experience} Years</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg border border-slate-100">
                    <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <Shield className="text-secondary" size={16} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase">Success Rate</p>
                      <p className="text-xs font-bold text-primary">High</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg border border-slate-100">
                    <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <Star className="text-secondary" size={16} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase">Standards</p>
                      <p className="text-xs font-bold text-primary">International</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-primary rounded-2xl text-white space-y-3">
                <h4 className="text-lg font-bold uppercase italic text-secondary">
                  Expert Areas
                </h4>
                <div className="space-y-2">
                  {doctor.expertise.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                      <span className="text-sm text-white/90">{item}</span>
                    </div>
                  ))}
                </div>
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
                  <span className="text-sm text-slate-700">
                    {proc}
                  </span>
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
                {doctor.whyChoose?.length > 0 ? doctor.whyChoose.slice(0, 4).map((point, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-secondary shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700">
                      {point}
                    </p>
                  </div>
                )) : (
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
