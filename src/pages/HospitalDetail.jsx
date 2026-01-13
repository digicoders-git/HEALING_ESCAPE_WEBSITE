import { useParams, Link } from "react-router-dom";
import {
  Building2,
  MapPin,
  Stethoscope,
  ShieldCheck,
  Award,
  CheckCircle2,
  Activity,
  CloudRain,
  Globe,
  Phone,
  Mail,
  Upload,
  Send,
  ChevronRight,
  UserCheck,
  Zap,
  Hotel,
} from "lucide-react";
import { hospitalsData } from "../data/hospitalsData";
import { doctorsData } from "../data/doctorsData";

const HospitalDetail = () => {
  const { id } = useParams();
  const hospital = hospitalsData.find((h) => h.id === parseInt(id));

  // Find doctors associated with this hospital name
  const associatedDoctors = doctorsData.filter(
    (doc) => doc.hospital.name === hospital?.name
  );

  if (!hospital) {
    return (
      <div className="py-40 text-center space-y-8">
        <h2 className="text-4xl font-black text-primary">Hospital Not Found</h2>
        <Link
          to="/hospitals"
          className="text-secondary font-bold uppercase tracking-widest border-b-2 border-secondary pb-1"
        >
          Back to Listing
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* 1. Hero Section - Custom Large Banner */}
      <section className="relative h-[65vh] w-full overflow-hidden bg-primary pt-[72px]">
        <img
          src={hospital.image}
          className="w-full h-full object-cover"
          alt={hospital.name}
        />
        <div className="absolute inset-0 bg-linear-to-t from-primary/95 via-primary/50 to-transparent" />

        <div className="absolute inset-0 flex items-end px-8 pb-24">
          <div className="max-w-7xl mx-auto w-full space-y-6">
            <div className="flex flex-wrap gap-3">
              <div className="flex flex-wrap gap-3">{/* Badges Removed */}</div>
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none italic">
              {hospital.name}
            </h1>
            <div className="flex items-center gap-4 text-white/80">
              <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                <MapPin size={20} className="text-secondary" />
              </div>
              <p className="text-2xl font-bold tracking-tight">
                {hospital.city}, India
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Grid Content Sections */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24">
          <div className="lg:col-span-8 space-y-32">
            {/* About Section */}
            <div id="about" className="space-y-10">
              <div className="flex items-center gap-6">
                <div className="w-16 h-1 bg-secondary rounded-full" />
                <h2 className="text-4xl font-black text-primary uppercase tracking-tight">
                  About {hospital.name}
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-2xl text-slate-700 leading-relaxed font-black uppercase tracking-tighter italic">
                  {hospital.about}
                </p>
                <p className="text-xl text-slate-500 leading-relaxed font-medium">
                  {hospital.description}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10">
                <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 flex items-start gap-6 group hover:bg-white hover:shadow-2xl transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-xl flex items-center justify-center text-secondary shrink-0">
                    <UserCheck size={28} />
                  </div>
                  <p className="text-slate-500 font-medium italic">
                    Strong team of experienced doctors and skilled nursing staff
                    dedicated to international standards.
                  </p>
                </div>
                <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 flex items-start gap-6 group hover:bg-white hover:shadow-2xl transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-xl flex items-center justify-center text-secondary shrink-0">
                    <Award size={28} />
                  </div>
                  <p className="text-slate-500 font-medium italic">
                    Maintaining high standards of hygiene, safety, and globally
                    accepted clinical care protocols.
                  </p>
                </div>
              </div>
            </div>

            {/* Departments Section */}
            <div id="departments" className="space-y-12">
              <div className="flex items-center gap-6">
                <div className="w-16 h-1 bg-secondary rounded-full" />
                <h2 className="text-4xl font-black text-primary uppercase tracking-tight">
                  Centres of Excellence
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {hospital.departments.map((dep, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-secondary transition-all group hover:bg-white"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white shadow-md flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all shrink-0">
                      <Activity size={18} />
                    </div>
                    <span className="text-primary font-black uppercase text-[10px] tracking-widest leading-tight">
                      {dep}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Infrastructure Section */}
            <div id="infrastructure" className="space-y-12">
              <div className="flex items-center gap-6">
                <div className="w-16 h-1 bg-secondary rounded-full" />
                <h2 className="text-4xl font-black text-primary uppercase tracking-tight">
                  Infrastructure & Facilities
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-8">
                  <p className="text-lg text-slate-500 font-medium leading-relaxed">
                    {hospital.name} is built to meet international healthcare
                    standards and is equipped with state-of-the-art
                    infrastructure designed to ensure patient comfort and
                    safety.
                  </p>
                  <div className="space-y-4">
                    {hospital.infrastructure.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm"
                      >
                        <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                          <Zap size={16} />
                        </div>
                        <p className="text-sm font-bold text-slate-600 uppercase tracking-wide leading-relaxed">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative rounded-[4rem] overflow-hidden group">
                  <img
                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000"
                    alt="Hospital Infrastructure"
                    className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 scale-105 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:opacity-0 transition-opacity" />
                </div>
              </div>
            </div>

            {/* Doctors Section - Direct Link */}
            <div id="doctors" className="space-y-12">
              <div className="flex items-center gap-6">
                <div className="w-16 h-1 bg-secondary rounded-full" />
                <h2 className="text-4xl font-black text-primary uppercase tracking-tight">
                  Our Specialists at This Hospital
                </h2>
              </div>

              {associatedDoctors.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {associatedDoctors.map((doc, idx) => (
                    <Link
                      to={`/doctor/${doc.id}`}
                      key={idx}
                      className="group flex items-center gap-6 p-6 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:border-secondary hover:bg-white transition-all"
                    >
                      <div className="w-24 h-24 rounded-3xl overflow-hidden shrink-0 border-4 border-white shadow-xl">
                        <img
                          src={doc.photo}
                          alt={doc.name}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-lg font-black text-primary uppercase tracking-tighter italic group-hover:text-secondary transition-colors">
                          {doc.name}
                        </h4>
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                          {doc.speciality}
                        </p>
                        <div className="flex items-center gap-1 text-secondary">
                          <span className="text-[10px] font-black uppercase">
                            View Profile
                          </span>
                          <ChevronRight size={14} />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="p-12 bg-slate-50 rounded-[3rem] border border-slate-100 text-center space-y-6">
                  <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">
                    We have a team of highly experienced and qualified doctors
                    associated with this hospital.
                  </p>
                  <Link
                    to="/doctors"
                    className="inline-flex items-center gap-3 bg-primary text-white px-10 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest"
                  >
                    Explore All Specialists <ArrowRight size={14} />
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar Area */}
          <div className="lg:col-span-4 space-y-12">
            {/* Why Choose Sidebar */}
            <div className="p-12 bg-primary rounded-[4rem] text-white space-y-10 shadow-2xl sticky top-32">
              <div className="flex items-center gap-6">
                <div className="w-12 h-1 bg-secondary rounded-full" />
                <h3 className="text-2xl font-black uppercase tracking-tighter italic">
                  Why Choose Us?
                </h3>
              </div>
              <div className="space-y-6">
                {hospital.whyChoose.map((point, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-secondary shrink-0 group-hover:scale-110 transition-transform">
                      <CheckCircle2 size={16} />
                    </div>
                    <p className="text-sm font-black text-white/80 uppercase tracking-widest leading-relaxed pt-1">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
              <div className="pt-10 border-t border-white/10">
                <h4 className="text-secondary font-black text-xl mb-4 italic">
                  International Desk
                </h4>
                <p className="text-white/60 text-sm font-medium leading-relaxed">
                  Dedicated support coordinating treatments for international
                  patients seamlessly.
                </p>
              </div>
            </div>

            {/* Services for International Patients */}
            <div className="p-12 bg-slate-50 rounded-[4rem] border border-slate-100 space-y-10 group hover:border-secondary transition-all">
              <div className="flex items-center gap-6">
                <div className="w-12 h-1 bg-secondary rounded-full" />
                <h3 className="text-2xl font-black text-primary uppercase tracking-tighter italic">
                  Global Support
                </h3>
              </div>
              <div className="space-y-6">
                {hospital.internationalServices.map((service, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-xl bg-white shadow-xl flex items-center justify-center text-secondary shrink-0">
                      <Globe size={16} />
                    </div>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                      {service}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Enquiry Form Section */}
      <section
        id="enquiry"
        className="py-12 md:py-16 px-4 md:px-8 bg-slate-50 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-12 text-center space-y-4 mb-20">
              {/* Badge Removed */}
              <h2 className="text-3xl md:text-5xl font-black text-primary tracking-tighter uppercase leading-none italic">
                Request Treatment <br />{" "}
                <span className="text-secondary">at {hospital.name}</span>
              </h2>
              <p className="text-slate-500 font-medium max-w-2xl mx-auto pt-8 text-lg">
                If you would like to receive a treatment plan, cost estimate, or
                consult a specialist at {hospital.name}, please fill out the
                form below. Our team at Healing Escape will review your case
                immediately.
              </p>
            </div>

            <div className="lg:col-span-12">
              <div className="bg-white p-12 md:p-24 rounded-[5rem] shadow-2xl border border-slate-100 relative group overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full" />

                <form className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 ml-4">
                      Patient Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-10 py-6 rounded-3xl bg-slate-50 border border-slate-100 focus:outline-none focus:border-secondary font-bold placeholder:opacity-30"
                      placeholder="Full Name..."
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 ml-4">
                      Country of Residence
                    </label>
                    <input
                      type="text"
                      className="w-full px-10 py-6 rounded-3xl bg-slate-50 border border-slate-100 focus:outline-none focus:border-secondary font-bold placeholder:opacity-30"
                      placeholder="e.g. Ethiopia, Oman..."
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 ml-4">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-10 py-6 rounded-3xl bg-slate-50 border border-slate-100 focus:outline-none focus:border-secondary font-bold placeholder:opacity-30"
                      placeholder="Email Address..."
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 ml-4">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      className="w-full px-10 py-6 rounded-3xl bg-slate-50 border border-slate-100 focus:outline-none focus:border-secondary font-bold placeholder:opacity-30"
                      placeholder="Phone Number..."
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 ml-4">
                      Preferred Speciality
                    </label>
                    <select className="w-full px-10 py-6 rounded-3xl bg-slate-50 border border-slate-100 focus:outline-none focus:border-secondary font-bold text-slate-400">
                      <option>Select Speciality...</option>
                      <option>Cardiology</option>
                      <option>Oncology</option>
                      <option>Orthopaedics</option>
                    </select>
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 ml-4">
                      Upload Reports (PDF/JPG)
                    </label>
                    <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 flex items-center justify-between group/upload cursor-pointer hover:border-secondary transition-all">
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                        Select Files
                      </span>
                      <Upload size={18} className="text-secondary" />
                    </div>
                  </div>
                  <div className="md:col-span-2 space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 ml-4">
                      Message / Clinical Questions
                    </label>
                    <textarea
                      rows="4"
                      className="w-full px-10 py-6 rounded-3xl bg-slate-50 border border-slate-100 focus:outline-none focus:border-secondary font-bold placeholder:opacity-30 resize-none"
                      placeholder="Details about your condition..."
                    />
                  </div>

                  <div className="md:col-span-2 text-center pt-10">
                    <button
                      type="submit"
                      className="bg-primary hover:bg-secondary text-white font-black py-7 px-20 rounded-[2.5rem] transition-all duration-500 uppercase tracking-[0.4em] text-xs shadow-2xl flex items-center gap-6 mx-auto hover:scale-105 active:scale-95"
                    >
                      Request Medical Opinion <Send size={20} />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Assurance Section */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-900 rounded-[5rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/10 blur-[100px] rounded-full animate-pulse" />
            <div className="relative z-10 space-y-12">
              <div className="w-24 h-2 bg-secondary mx-auto rounded-full" />
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic leading-none">
                Our Selection Promise
              </h2>
              <p className="text-white/60 text-xl md:text-3xl font-light max-w-4xl mx-auto leading-relaxed">
                At Healing Escape, we connect you only with hospitals that meet
                the highest standards of safety, quality, and medical excellence
                — because your health deserves nothing less.
              </p>
              <div className="flex flex-wrap justify-center gap-12 pt-8">
                {[
                  "Quality Checked",
                  "No Commissions",
                  "Verified Outcomes",
                  "Patient First",
                ].map((txt, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">
                      {txt}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HospitalDetail;
