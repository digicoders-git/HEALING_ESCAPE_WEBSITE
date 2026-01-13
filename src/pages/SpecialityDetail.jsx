import { useParams, Link } from "react-router-dom";
import {
  HeartPulse,
  Activity,
  ChevronRight,
  Stethoscope,
  ShieldCheck,
  Globe,
  Clock,
  Zap,
  CheckCircle2,
  ArrowRight,
  Send,
  Upload,
  MapPin,
  Building2,
} from "lucide-react";
import { specialitiesData } from "../data/specialitiesData";
import { hospitalsData } from "../data/hospitalsData";

const SpecialityDetail = () => {
  const { id } = useParams();
  const treatment = specialitiesData.find((s) => s.id === id);

  // Filter hospitals that offer this speciality
  const offeringHospitals = hospitalsData.filter((h) =>
    h.specialities.some((s) =>
      s.toLowerCase().includes(treatment?.title.split(" ")[0].toLowerCase())
    )
  );

  if (!treatment) {
    return (
      <div className="py-40 text-center space-y-8">
        <h2 className="text-4xl font-extrabold text-primary">
          Treatment Not Found
        </h2>
        <Link
          to="/specialities"
          className="text-secondary font-bold uppercase tracking-widest border-b-2 border-secondary pb-1"
        >
          Back to Specialities
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* 1. Hero Section - Custom Large Banner */}
      <section className="relative h-[60vh] w-full overflow-hidden bg-primary pt-[72px]">
        <img
          src={treatment.image}
          className="w-full h-full object-cover"
          alt={treatment.title}
        />
        <div className="absolute inset-0 bg-linear-to-t from-primary/95 via-primary/50 to-transparent" />

        <div className="absolute inset-0 flex items-end px-8 pb-20">
          <div className="max-w-7xl mx-auto w-full space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-3">
                {/* Badge Removed */}
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white uppercase tracking-tighter leading-none italic">
              {treatment.title}
            </h1>
            <p className="text-white/70 text-xl md:text-2xl font-medium max-w-3xl leading-relaxed italic">
              Access world-class medical excellence and clinical skill in India.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Structured Content Sections */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-8 space-y-32">
            {/* What is this Treatment? */}
            <div className="space-y-10 group animate-fade-in-up">
              <div className="flex items-center gap-6">
                <div className="w-16 h-1 bg-secondary rounded-full" />
                <h2 className="text-4xl font-extrabold text-primary uppercase tracking-tight italic">
                  What is {treatment.title}?
                </h2>
              </div>
              <p className="text-xl text-slate-600 leading-relaxed font-medium">
                {treatment.whatIs}
              </p>
              <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 italic font-medium text-slate-500">
                "At Healing Escape, this treatment is offered at leading
                multi-speciality hospitals in North India, following
                international standards of safety and care."
              </div>
            </div>

            {/* When is Recommended? */}
            <div className="space-y-12 group animate-fade-in-up">
              <div className="flex items-center gap-6">
                <div className="w-16 h-1 bg-secondary rounded-full" />
                <h2 className="text-4xl font-extrabold text-primary uppercase tracking-tight italic">
                  When is this Recommended?
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {treatment.whenRecommended?.map((point, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-6 bg-slate-50 rounded-3xl border border-slate-100 group-hover:border-secondary transition-all"
                  >
                    <div className="w-8 h-8 rounded-xl bg-white shadow-md flex items-center justify-center text-secondary shrink-0">
                      <CheckCircle2 size={16} />
                    </div>
                    <p className="text-[13px] font-bold text-slate-700 uppercase tracking-wide leading-relaxed pt-1">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose India? (Template Content) */}
            <div className="space-y-12 animate-fade-in-up">
              <div className="flex items-center gap-6">
                <div className="w-16 h-1 bg-secondary rounded-full" />
                <h2 className="text-4xl font-extrabold text-primary uppercase tracking-tight italic">
                  Why Choose India?
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  {
                    icon: <Zap />,
                    text: "Cost is 60–80% lower than Western countries",
                  },
                  {
                    icon: <ShieldCheck />,
                    text: "NABH & JCI accredited hospitals",
                  },
                  {
                    icon: <Stethoscope />,
                    text: "Internationally trained & experienced doctors",
                  },
                  {
                    icon: <Globe />,
                    text: "Advanced technology & modern infrastructure",
                  },
                  {
                    icon: <Clock />,
                    text: "Minimal waiting time for surgeries",
                  },
                  {
                    icon: <CheckCircle2 />,
                    text: "English-speaking medical staff & personalized care",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-secondary group-hover:bg-primary group-hover:text-white transition-all scale-100 group-hover:scale-110">
                      {item.icon}
                    </div>
                    <p className="text-sm font-bold text-slate-600 uppercase tracking-widest leading-tight">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Treatment Procedure */}
            <div className="space-y-10 animate-fade-in-up">
              <div className="flex items-center gap-6">
                <div className="w-16 h-1 bg-secondary rounded-full" />
                <h2 className="text-4xl font-extrabold text-primary uppercase tracking-tight italic">
                  How is it Performed?
                </h2>
              </div>
              <p className="text-xl text-slate-600 leading-relaxed font-medium">
                {treatment.procedure}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                {["Evaluation", "Main Procedure", "Recovery"].map(
                  (step, idx) => (
                    <div
                      key={idx}
                      className="p-8 bg-slate-50 rounded-3xl text-center space-y-4 border border-slate-100"
                    >
                      <span className="text-4xl font-extrabold text-secondary/20">
                        0{idx + 1}
                      </span>
                      <h4 className="text-sm font-bold text-primary uppercase tracking-widest">
                        {step}
                      </h4>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Recovery Section */}
            <div className="space-y-10 animate-fade-in-up">
              <div className="flex items-center gap-6">
                <div className="w-16 h-1 bg-secondary rounded-full" />
                <h2 className="text-4xl font-extrabold text-primary uppercase tracking-tight italic">
                  Recovery & Healing
                </h2>
              </div>
              <p className="text-xl text-slate-600 leading-relaxed font-medium">
                {treatment.recovery}
              </p>
              <div className="p-10 bg-primary rounded-[3rem] text-white space-y-6 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 blur-[80px] rounded-full" />
                <p className="text-lg font-bold uppercase tracking-widest text-secondary">
                  Personalized Care Plan
                </p>
                <p className="text-white/70 italic text-xl leading-relaxed">
                  "The treating doctor provides a personalised recovery and
                  follow-up plan for each patient, ensuring a smooth return to
                  normal life."
                </p>
              </div>
            </div>

            {/* Cost Section */}
            <div className="space-y-10 animate-fade-in-up">
              <div className="flex items-center gap-6">
                <div className="w-16 h-1 bg-secondary rounded-full" />
                <h2 className="text-4xl font-extrabold text-primary uppercase tracking-tight italic">
                  Treatment Cost in India
                </h2>
              </div>
              <div className="bg-slate-50 p-12 rounded-[3.5rem] border border-slate-100 space-y-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                  <div className="space-y-2">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      Average Estimate
                    </p>
                    <p className="text-5xl font-extrabold text-primary tracking-tighter italic">
                      {treatment.costRange}
                    </p>
                  </div>
                  <Link
                    to="#enquiry"
                    className="bg-secondary text-white px-10 py-5 rounded-2xl font-bold text-[11px] uppercase tracking-widest shadow-xl hover:scale-105 transition-all text-center"
                  >
                    Request Custom Quote
                  </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-2">
                  {[
                    "No Hidden Charges",
                    "Transparent Estimates",
                    "Detailed Packages",
                    "Option for Luxury Stay",
                  ].map((adv, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                        {adv}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Hospitals Offering Treatment */}
            <div className="space-y-12 animate-fade-in-up">
              <div className="flex items-center gap-6">
                <div className="w-16 h-1 bg-secondary rounded-full" />
                <h2 className="text-4xl font-extrabold text-primary uppercase tracking-tight italic">
                  Hospitals for this Treatment
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {offeringHospitals.slice(0, 4).map((hosp, idx) => (
                  <Link
                    to={`/hospital/${hosp.id}`}
                    key={idx}
                    className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 hover:shadow-2xl transition-all h-full flex flex-col"
                  >
                    <div className="h-44 overflow-hidden relative">
                      <img
                        src={hosp.image}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        alt={hosp.name}
                      />
                      <div className="absolute top-4 left-4 px-3 py-1 bg-white/95 backdrop-blur-md rounded-lg text-[9px] font-bold uppercase tracking-widest border border-slate-100 shadow-lg">
                        {hosp.city}
                      </div>
                    </div>
                    <div className="p-8 flex-1 flex flex-col justify-between space-y-4">
                      <h4 className="text-lg font-bold text-primary uppercase tracking-tight italic group-hover:text-secondary transition-colors">
                        {hosp.name}
                      </h4>
                      <div className="flex items-center gap-2 text-secondary group-hover:gap-4 transition-all">
                        <span className="text-[9px] font-bold uppercase tracking-[0.2em]">
                          Learn More
                        </span>
                        <ArrowRight size={14} />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-12">
            <div className="p-12 bg-primary rounded-[4rem] text-white space-y-10 shadow-2xl sticky top-32 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/10 blur-[60px] rounded-full" />
              <div className="relative z-10 space-y-8">
                <h3 className="text-2xl font-extrabold uppercase tracking-tighter italic leading-none">
                  Healing Escape <br />
                  <span className="text-secondary">Assurance</span>
                </h3>
                <div className="space-y-6">
                  {[
                    "Verified Hospitals & Doctors",
                    "NABH & JCI Accredited Centers",
                    "Patient-First Care Approach",
                    "Full Cost Transparency",
                    "Medically Necessary Focus",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 text-white/70 italic text-sm font-medium"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 space-y-8">
              <h4 className="text-lg font-extrabold text-primary uppercase tracking-tighter italic">
                Common Destinations
              </h4>
              <div className="space-y-3">
                {[
                  "Delhi NCR",
                  "Lucknow",
                  "Gurugram",
                  "Chandigarh",
                  "Jaipur",
                ].map((city) => (
                  <div
                    key={city}
                    className="flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-100 group hover:border-secondary transition-all"
                  >
                    <span className="text-[11px] font-bold text-slate-600 uppercase tracking-widest">
                      {city}
                    </span>
                    <MapPin
                      size={14}
                      className="text-secondary opacity-0 group-hover:opacity-100 transition-opacity"
                    />
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
            <div className="lg:col-span-12 text-center space-y-4 mb-20 animate-fade-in-up">
              {/* Badge Removed */}
              <h2 className="text-3xl md:text-5xl font-extrabold text-primary tracking-tighter uppercase leading-none italic">
                Get a Treatment Plan <br />{" "}
                <span className="text-secondary">for {treatment.title}</span>
              </h2>
              <p className="text-slate-500 font-medium max-w-2xl mx-auto pt-8 text-lg">
                If you would like to receive a personalised treatment plan, cost
                estimate, or medical opinion, please fill out the form below.
              </p>
            </div>

            <div className="lg:col-span-12">
              <div className="bg-white p-12 md:p-24 rounded-[5rem] shadow-2xl border border-slate-100 relative group overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full" />

                <form className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                  <div className="space-y-4">
                    <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 ml-4">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-10 py-6 rounded-3xl bg-slate-50 border border-slate-100 focus:outline-none focus:border-secondary font-bold placeholder:opacity-30"
                      placeholder="Full Name..."
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 ml-4">
                      Country
                    </label>
                    <input
                      type="text"
                      className="w-full px-10 py-6 rounded-3xl bg-slate-50 border border-slate-100 focus:outline-none focus:border-secondary font-bold placeholder:opacity-30"
                      placeholder="e.g. Ethiopia, Oman..."
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 ml-4">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-10 py-6 rounded-3xl bg-slate-50 border border-slate-100 focus:outline-none focus:border-secondary font-bold placeholder:opacity-30"
                      placeholder="Email Address..."
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 ml-4">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      className="w-full px-10 py-6 rounded-3xl bg-slate-50 border border-slate-100 focus:outline-none focus:border-secondary font-bold placeholder:opacity-30"
                      placeholder="Phone Number..."
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 ml-4">
                      Target Treatment
                    </label>
                    <select className="w-full px-10 py-6 rounded-3xl bg-slate-50 border border-slate-100 focus:outline-none focus:border-secondary font-bold text-slate-400">
                      <option>{treatment.title}</option>
                      {specialitiesData
                        .filter((s) => s.id !== treatment.id)
                        .map((s) => (
                          <option key={s.id}>{s.title}</option>
                        ))}
                    </select>
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 ml-4">
                      Upload Reports (PDF/JPG)
                    </label>
                    <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 flex items-center justify-between group/upload cursor-pointer hover:border-secondary transition-all">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                        Select Files
                      </span>
                      <Upload size={18} className="text-secondary" />
                    </div>
                  </div>
                  <div className="md:col-span-2 space-y-4">
                    <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 ml-4">
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
                      className="bg-primary hover:bg-secondary text-white font-bold py-7 px-20 rounded-[2.5rem] transition-all duration-500 uppercase tracking-[0.4em] text-xs shadow-2xl flex items-center gap-6 mx-auto hover:scale-105 active:scale-95"
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

      {/* 4. Closing Line */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-white border-t border-slate-100 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary uppercase tracking-tighter italic">
            "At Healing Escape, we don't just offer treatments — we offer
            trusted, safe, and well-planned healthcare solutions designed around
            your needs."
          </h2>
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

export default SpecialityDetail;
