import { useParams, Link } from "react-router-dom";
import {
  Stethoscope,
  MapPin,
  Clock,
  Hospital,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  GraduationCap,
  Trophy,
  Award,
  Activity,
  Phone,
  Mail,
  Globe,
  Upload,
  Send,
} from "lucide-react";
import { doctorsData } from "../data/doctorsData";

const DoctorDetail = () => {
  const { id } = useParams();
  const doctor = doctorsData.find((doc) => doc.id === parseInt(id));

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
      {/* 1. Profile Overview Section */}
      <section className="relative pt-32 pb-24 px-8 bg-slate-900 overflow-hidden">
        {/* Decorative Blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center lg:items-start text-center lg:text-left">
            {/* Image Side */}
            <div className="lg:w-1/3 w-full max-w-sm shrink-0">
              <div className="relative group">
                <div className="absolute inset-0 bg-secondary/20 rounded-[4rem] blur-2xl group-hover:bg-primary/30 transition-all duration-700" />
                <div className="relative rounded-[4rem] overflow-hidden border-8 border-white/10 shadow-2xl aspect-4/5">
                  <img
                    src={doctor.photo}
                    alt={doctor.name}
                    className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 scale-105 group-hover:scale-110"
                  />
                </div>
                {/* Floating Stat */}
                <div className="absolute -bottom-8 -right-8 bg-secondary text-white p-8 rounded-[2.5rem] shadow-2xl border-4 border-white inline-block animate-bounce-slow">
                  <p className="text-4xl font-black leading-none">
                    {doctor.experience}+
                  </p>
                  <p className="text-[10px] uppercase font-black tracking-widest mt-1">
                    Years Exp.
                  </p>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="lg:w-2/3 space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 text-secondary text-[11px] font-black uppercase tracking-widest">
                  <Stethoscope size={14} /> Expert Clinical Faculty
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-tight italic">
                  {doctor.name}
                </h1>
                <p className="text-secondary font-black text-xl uppercase tracking-widest">
                  {doctor.designation}
                </p>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <div className="flex items-center gap-2 text-white/60 font-medium">
                    <GraduationCap size={18} className="text-secondary" />{" "}
                    {doctor.qualification}
                  </div>
                  <div className="flex items-center gap-2 text-white/60 font-medium">
                    <MapPin size={18} className="text-secondary" />{" "}
                    {doctor.hospital.city}, India
                  </div>
                </div>
              </div>

              <div className="p-10 bg-white/5 backdrop-blur-md rounded-[3rem] border border-white/10">
                <p className="text-white/80 text-lg md:text-xl font-light leading-relaxed italic">
                  "{doctor.summary}"
                </p>
              </div>

              <div className="flex flex-wrap gap-6 pt-4">
                <a
                  href="#appointment"
                  className="bg-secondary text-white font-black py-5 px-10 rounded-3xl transition-all duration-500 uppercase tracking-widest text-xs shadow-2xl shadow-secondary/20 hover:scale-105 active:scale-95"
                >
                  Consult Now
                </a>
                <div className="flex items-center gap-4 text-white">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/10">
                    <Trophy size={20} className="text-secondary" />
                  </div>
                  <span className="text-sm font-black uppercase tracking-widest">
                    Board Certified
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Detailed Profile Sections Wrapper */}
      <section className="py-32 px-8 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-8 space-y-24">
            {/* About the Doctor */}
            <div id="about" className="space-y-8 animate-fade-in-up">
              <div className="flex items-center gap-6">
                <div className="w-16 h-1 bg-secondary rounded-full" />
                <h2 className="text-4xl font-black text-primary uppercase tracking-tight">
                  About {doctor.name}
                </h2>
              </div>
              <p className="text-xl text-slate-600 leading-relaxed font-medium">
                {doctor.about}
              </p>
              <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 flex items-start gap-8">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-xl flex items-center justify-center shrink-0">
                  <Award size={24} className="text-secondary" />
                </div>
                <p className="text-slate-500 italic leading-relaxed">
                  Dr. {doctor.name.split(" ").slice(-1)} regularly updates
                  his/her skills through medical conferences, workshops, and
                  international training programs.
                </p>
              </div>
            </div>

            {/* Experience & Expertise */}
            <div id="expertise" className="space-y-12 animate-fade-in-up">
              <div className="flex items-center gap-6">
                <div className="w-16 h-1 bg-secondary rounded-full" />
                <h2 className="text-4xl font-black text-primary uppercase tracking-tight">
                  Experience & Expertise
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <p className="text-lg text-slate-600 font-medium">
                    With over {doctor.experience} years of experience, Dr.{" "}
                    {doctor.name.split(" ").slice(-1)} has handled thousands of
                    complex cases, including high-risk and advanced-stage
                    conditions.
                  </p>
                  <p className="text-slate-500 font-medium italic">
                    Known for achieving high success rates and maintaining
                    international standards of patient safety and care.
                  </p>
                </div>
                <div className="bg-primary p-12 rounded-[3.5rem] text-white space-y-6 group hover:rotate-2 transition-all shadow-2xl">
                  <h4 className="text-xl font-bold uppercase tracking-widest text-secondary">
                    Expert Areas
                  </h4>
                  <ul className="space-y-4">
                    {doctor.expertise.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-4 text-white/90 font-black text-sm uppercase tracking-wide"
                      >
                        <div className="w-2 h-2 rounded-full bg-secondary" />{" "}
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Procedures & Treatments */}
            <div id="procedures" className="space-y-12 animate-fade-in-up">
              <div className="flex items-center gap-6">
                <div className="w-16 h-1 bg-secondary rounded-full" />
                <h2 className="text-4xl font-black text-primary uppercase tracking-tight">
                  Procedures & Treatments
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {doctor.procedures.map((proc, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-6 p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-secondary transition-all group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                      <Activity size={20} />
                    </div>
                    <span className="text-primary font-black uppercase text-xs tracking-widest leading-none">
                      {proc}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Section */}
            <div id="why" className="space-y-12 animate-fade-in-up">
              <div className="flex items-center gap-6">
                <div className="w-16 h-1 bg-secondary rounded-full" />
                <h2 className="text-4xl font-black text-primary uppercase tracking-tight">
                  Why Choose Dr. {doctor.name.split(" ").slice(1)}
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                {doctor.whyChoose.map((point, i) => (
                  <div key={i} className="flex items-start gap-4 p-4">
                    <div className="p-1 px-3 bg-secondary/10 text-secondary rounded-lg font-black shrink-0">
                      {i + 1}
                    </div>
                    <p className="text-slate-600 font-bold uppercase text-[11px] tracking-widest py-1 leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Area: Forms & Quick Info */}
          <div className="lg:col-span-4 space-y-12">
            {/* Hospital Card */}
            <div className="p-12 bg-slate-50 rounded-[4rem] border border-slate-100 space-y-8 sticky top-32 transition-all hover:bg-white hover:shadow-2xl hover:border-secondary/30 group">
              <div className="w-20 h-20 rounded-3xl bg-white flex items-center justify-center text-secondary shadow-xl transform group-hover:rotate-6 transition-transform">
                <Hospital size={36} />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-black text-primary uppercase tracking-tight">
                  Hospital Affiliation
                </h3>
                <div className="space-y-2">
                  <p className="text-secondary font-black text-lg">
                    {doctor.hospital.name}
                  </p>
                  <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">
                    {doctor.hospital.city}, India
                  </p>
                </div>
              </div>
              <div className="space-y-4 pt-6 border-t border-slate-200">
                <div className="flex flex-wrap gap-2">
                  {doctor.hospital.accreditation?.map((acc, i) => (
                    <span
                      key={i}
                      className="px-5 py-2 bg-primary text-white text-[10px] font-black rounded-xl uppercase tracking-widest shadow-lg"
                    >
                      {acc} Accredited
                    </span>
                  ))}
                </div>
                <ul className="space-y-3 pt-4">
                  {[
                    "Advanced Medical Technology",
                    "International Patient Desk",
                    "Clinical Excellence",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-slate-500 font-bold text-[10px] uppercase tracking-[0.2em]"
                    >
                      <CheckCircle2 size={12} className="text-secondary" />{" "}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Global Consultation Form Section */}
      <section
        id="appointment"
        className="py-32 px-8 bg-slate-50 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-12 text-center space-y-4 mb-16">
              <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-xs">
                Medical Consultation
              </h4>
              <h2 className="text-5xl md:text-7xl font-black text-primary tracking-tighter uppercase leading-none italic">
                Book a Consultation <br />{" "}
                <span className="text-secondary">with {doctor.name}</span>
              </h2>
              <p className="text-slate-500 font-medium max-w-2xl mx-auto pt-6 text-lg">
                If you would like to consult Dr.{" "}
                {doctor.name.split(" ").slice(-1)} or receive a treatment plan
                and cost estimate, please fill out the form below. Our team at
                Healing Escape will review your details and arrange a
                consultation at the earliest.
              </p>
            </div>

            <div className="lg:col-span-12">
              <div className="bg-white p-12 md:p-20 rounded-[4rem] shadow-2xl border border-slate-100 relative group">
                <div className="absolute top-0 right-20 w-32 h-32 bg-secondary/5 rounded-full -translate-y-1/2 animate-pulse" />

                <form className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-4">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-8 py-5 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:border-secondary transition-all font-bold placeholder:opacity-30"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-4">
                      Country
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Nigeria, Oman, USA"
                      className="w-full px-8 py-5 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:border-secondary transition-all font-bold placeholder:opacity-30"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-4">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-8 py-5 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:border-secondary transition-all font-bold placeholder:opacity-30"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-4">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 234 567 890"
                      className="w-full px-8 py-5 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:border-secondary transition-all font-bold placeholder:opacity-30"
                    />
                  </div>
                  <div className="md:col-span-2 space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-4">
                      Describe Medical Problem
                    </label>
                    <textarea
                      rows="4"
                      placeholder="Brief details about your condition..."
                      className="w-full px-8 py-5 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:border-secondary transition-all font-bold placeholder:opacity-30 resize-none"
                    />
                  </div>

                  {/* Upload Field */}
                  <div className="md:col-span-2">
                    <div className="border-2 border-dashed border-slate-200 rounded-3xl p-10 text-center space-y-4 hover:border-secondary transition-colors cursor-pointer group/upload bg-slate-50/50">
                      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-sm group-hover/upload:scale-110 transition-transform">
                        <Upload size={24} className="text-secondary" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-black text-primary uppercase tracking-widest">
                          Upload Medical Reports
                        </p>
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">
                          (PDF, Images, X-Rays - Max 10MB)
                        </p>
                      </div>
                      <input type="file" className="hidden" />
                    </div>
                  </div>

                  <div className="md:col-span-2 text-center pt-10">
                    <button
                      type="submit"
                      className="bg-primary text-white font-black py-6 px-16 rounded-4xl transition-all duration-500 uppercase tracking-[0.3em] text-xs shadow-2xl hover:bg-secondary hover:scale-105 active:scale-95 flex items-center gap-4 mx-auto"
                    >
                      Request Consultation <Send size={18} />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Healing Escape Assurance */}
      <section className="py-24 px-8 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="bg-primary rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/20 blur-[100px] rounded-full" />
            <div className="relative z-10 space-y-10">
              <div className="w-20 h-2 bg-secondary mx-auto rounded-full" />
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic">
                Our Commitment
              </h2>
              <p className="text-white/70 text-lg md:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
                At Healing Escape, we connect you not just with doctors — but
                with the right experts for your health, your safety, and your
                future. All our doctors are carefully verified and associated
                with reputed hospitals.
              </p>
              <div className="flex flex-wrap justify-center gap-10 opacity-60">
                {[
                  "Ethics First",
                  "No Commissions",
                  "Total Transparency",
                  "Patient Care",
                ].map((txt, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-black uppercase tracking-[0.4em]"
                  >
                    {txt}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-bounce-slow { animation: bounce-slow 4s infinite ease-in-out; }
      `,
        }}
      />
    </div>
  );
};

export default DoctorDetail;
