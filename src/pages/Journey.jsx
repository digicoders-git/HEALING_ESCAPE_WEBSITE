import { useState, useEffect, useRef } from "react";
import {
  MessageSquare,
  Stethoscope,
  ClipboardList,
  Plane,
  Hospital,
  Activity,
  HeartHandshake,
  CalendarCheck,
  ShieldCheck,
  UserCheck,
  HandCoins,
  Search,
  Eye,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import PageHero from "../components/PageHero";

const bannerSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000",
    title: "Patient Journey",
    subtitle: "Your Treatment. Our Complete Responsibility.",
    buttonLabel: "Start Your Journey",
    buttonLink: "/contact",
  },
  {
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2000",
    title: "World-Class Care & Support",
    subtitle:
      "Shortlisted specialists and top hospitals, exclusively for your care.",
    buttonLabel: "Enquire Now",
    buttonLink: "/contact",
  },
];

const Journey = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const timelineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current) {
        const rect = timelineRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const totalHeight = rect.height;
        // Start animating when the timeline reaches the middle of the screen
        const scrolled = windowHeight / 2 - rect.top;
        const progress = Math.min(Math.max(scrolled / totalHeight, 0), 1);
        setScrollProgress(progress * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const steps = [
    {
      id: 1,
      title: "Initial Inquiry",
      icon: <MessageSquare className="w-8 h-8" />,
      content:
        "You can contact Healing Escape through our Website inquiry form, WhatsApp, phone call, or email.",
      points: [
        "Share clinical concerns",
        "Send medical reports",
        "Define expectations",
      ],
      color: "bg-blue-500",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: 2,
      title: "Medical Assessment & Consultation",
      icon: <Stethoscope className="w-8 h-8" />,
      content:
        "Our medical team carefully reviews all your medical reports to shortlist suitable specialists.",
      points: [
        "Top North Indian hospitals",
        "Video consultations",
        "Treatment roadmap",
      ],
      color: "bg-emerald-500",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: 3,
      title: "Treatment Plan & Cost Estimate",
      icon: <ClipboardList className="w-8 h-8" />,
      content:
        "Healing Escape provides a detailed and transparent treatment proposal.",
      points: [
        "Hospital & Doctor profiles",
        "Transparent cost estimate",
        "Recovery timeline",
      ],
      color: "bg-indigo-500",
      image:
        "https://images.unsplash.com/photo-1454165833762-02e708a30337?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: 4,
      title: "Medical Visa & Travel Assistance",
      icon: <Plane className="w-8 h-8" />,
      content:
        "We provide end-to-end guidance for your travel and visa process.",
      points: [
        "Visa invitation letter",
        "Visa guidance",
        "Arrival coordination",
      ],
      color: "bg-sky-500",
      image:
        "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: 5,
      title: "Arrival in India & Admission",
      icon: <Hospital className="w-8 h-8" />,
      content:
        "Our representative receives you at the airport and coordinates your admission.",
      points: ["Airport pickup", "Hospital registration", "Language support"],
      color: "bg-teal-500",
      image:
        "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: 6,
      title: "Treatment & Hospital Stay",
      icon: <Activity className="w-8 h-8" />,
      content:
        "Treatment at NABH / JCI accredited hospitals by experienced specialists.",
      points: ["Family coordination", "Clinical oversight", "Progress updates"],
      color: "bg-rose-500",
      image:
        "https://images.unsplash.com/photo-1538108197017-c1a966b39bf3?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: 7,
      title: "Recovery & Local Support",
      icon: <CalendarCheck className="w-8 h-8" />,
      content: "Post-treatment recovery phase closely supported by our team.",
      points: [
        "Discharge formalities",
        "Medication review",
        "Local visit support",
      ],
      color: "bg-amber-500",
      image:
        "https://images.unsplash.com/photo-1545208393-596cc74699fe?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: 8,
      title: "Return Journey & Follow-Up",
      icon: <HeartHandshake className="w-8 h-8" />,
      content:
        "Our support remains connected for your continued care back home.",
      points: ["Return planning", "Follow-up coordination", "Report reviews"],
      color: "bg-violet-500",
      image:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=600",
    },
  ];

  const promises = [
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      text: "100% Ethical Guidance",
    },
    { icon: <UserCheck className="w-6 h-6" />, text: "Patient-First Approach" },
    { icon: <Search className="w-6 h-6" />, text: "Complete Transparency" },
    { icon: <HandCoins className="w-6 h-6" />, text: "No Hidden Costs" },
    { icon: <Eye className="w-6 h-6" />, text: "No Unnecessary Procedures" },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      text: "End-to-End Responsibility",
    },
  ];

  return (
    <div className="bg-white overflow-hidden">
      <PageHero slides={bannerSlides} />

      {/* Intro Section */}
      <section className="py-24 px-8 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-xs font-black uppercase tracking-[0.3em]">
                Excellence in Care
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-primary leading-tight uppercase tracking-tighter">
                Transparent &{" "}
                <span className="text-secondary">Patient-Centric</span> Process
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                At Healing Escape, we understand that travelling for medical
                treatment is a major decision. Our transparent, step-by-step
                process ensures your journey is safe, smooth, and stress-free.
              </p>
              <div className="p-8 bg-white/80 backdrop-blur-md rounded-3xl border border-white shadow-2xl relative group overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-secondary" />
                <p className="italic text-primary font-bold text-xl relative z-10">
                  "Below is a detailed explanation of how we take care of you at
                  every stage of your treatment journey."
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
              {promises.map((promise, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 group"
                >
                  <div className="p-3 bg-slate-50 rounded-xl text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-500">
                    {promise.icon}
                  </div>
                  <span className="font-black text-primary uppercase text-[10px] tracking-widest leading-none">
                    {promise.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-32 px-8 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-32 space-y-4">
            <h4 className="text-secondary font-black uppercase tracking-[0.5em] text-xs">
              Operational Excellence
            </h4>
            <h2 className="text-5xl md:text-7xl font-black text-primary uppercase tracking-tighter">
              Treatment Workflow
            </h2>
            <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full" />
          </div>

          <div className="relative" ref={timelineRef}>
            {/* Animated Line Container */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-slate-100 transform -translate-x-1/2 hidden lg:block">
              <div
                className="absolute top-0 left-0 w-full bg-linear-to-b from-secondary to-primary transition-all duration-200 ease-out rounded-full"
                style={{ height: `${scrollProgress}%` }}
              >
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-secondary rounded-full border-4 border-white shadow-lg animate-pulse" />
              </div>
            </div>

            <div className="space-y-32">
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 relative ${
                    index % 2 === 0 ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Text Side */}
                  <div
                    className={`lg:w-1/2 w-full ${
                      index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                    }`}
                  >
                    <div className="inline-block p-4 rounded-3xl bg-slate-50 border border-slate-100 mb-8 transform hover:rotate-6 transition-transform shadow-sm">
                      <div
                        className={`p-4 rounded-2xl ${step.color} text-white shadow-xl`}
                      >
                        {step.icon}
                      </div>
                    </div>
                    <div
                      className={`flex items-center gap-4 mb-6 ${
                        index % 2 === 0 ? "lg:justify-end" : "lg:justify-start"
                      }`}
                    >
                      {index % 2 !== 0 && (
                        <span className="text-5xl font-black text-slate-100">
                          0{step.id}
                        </span>
                      )}
                      <h3 className="text-3xl font-black text-primary uppercase tracking-tight">
                        {step.title}
                      </h3>
                      {index % 2 === 0 && (
                        <span className="text-5xl font-black text-slate-100">
                          0{step.id}
                        </span>
                      )}
                    </div>
                    <p className="text-slate-600 mb-8 text-lg font-medium leading-relaxed max-w-xl lg:mx-0 mx-auto">
                      {step.content}
                    </p>
                    <div
                      className={`flex flex-wrap gap-3 ${
                        index % 2 === 0 ? "lg:justify-end" : "lg:justify-start"
                      }`}
                    >
                      {step.points.map((point, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 px-5 py-2.5 bg-slate-50 text-slate-500 rounded-2xl text-[11px] font-black border border-slate-100 uppercase tracking-widest hover:border-secondary hover:text-secondary transition-colors"
                        >
                          <CheckCircle2 size={14} className="text-secondary" />
                          {point}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Icon Node for Mobile */}
                  <div className="lg:hidden w-8 h-8 rounded-full border-4 border-slate-100 bg-white flex items-center justify-center mb-8">
                    <div className={`w-3 h-3 rounded-full ${step.color}`} />
                  </div>

                  {/* Image Side */}
                  <div className="lg:w-1/2 w-full">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-primary/10 rounded-[3rem] blur-2xl group-hover:bg-secondary/20 transition-all duration-700" />
                      <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white transform group-hover:-translate-y-2 transition-all duration-700">
                        <img
                          src={step.image}
                          className="w-full h-[400px] object-cover"
                          alt={step.title}
                        />
                        <div className="absolute bottom-0 left-0 p-8 bg-linear-to-t from-black/80 to-transparent w-full">
                          <span className="text-white font-black text-6xl opacity-30 uppercase tracking-tighter">
                            Step 0{step.id}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Promise Section */}
      <section className="py-32 px-8 bg-primary relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-secondary/10 blur-[150px] rounded-full" />
        <div className="max-w-7xl mx-auto text-center text-white relative z-10">
          <div className="inline-block p-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 mb-8">
            <HeartHandshake className="w-16 h-16 text-secondary" />
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-16 uppercase tracking-tighter">
            Our Promise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
            {[
              {
                title: "Integrity",
                text: "100% ethical guidance and complete transparency in every medical decision.",
                icon: <ShieldCheck size={32} />,
              },
              {
                title: "Values",
                text: "No unnecessary procedures and no hidden costs. Honest advice, always.",
                icon: <ShieldCheck size={32} />,
              },
              {
                title: "Responsibility",
                text: "Patient-first approach with end-to-end responsibility.",
                icon: <ShieldCheck size={32} />,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group p-12 bg-white/5 backdrop-blur-2xl rounded-[3rem] border border-white/10 text-left hover:bg-white/10 transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center text-secondary mb-8 transition-transform group-hover:scale-110">
                  {item.icon}
                </div>
                <h3 className="text-secondary font-black text-2xl mb-4 uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="text-white/70 text-lg leading-relaxed font-medium">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          <div className="max-w-4xl mx-auto border-t border-white/10 pt-20">
            <p className="text-2xl md:text-3xl font-light italic text-white/95">
              "With Healing Escape, your treatment becomes a carefully managed,
              safe, and{" "}
              <span className="text-secondary font-bold">
                compassionate healing journey.
              </span>
              "
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto bg-slate-900 rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary/20 blur-[120px] rounded-full animate-float" />
          <div className="relative z-10 space-y-12">
            <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter">
              Ready to Begin?
            </h2>
            <p className="text-white/50 text-xl font-light">
              Connect with our medical experts today for a personalized plan.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <button className="bg-secondary hover:bg-white hover:text-primary text-white font-black py-6 px-12 rounded-3xl transition-all duration-500 uppercase tracking-widest text-sm">
                Start Enquiry Now
              </button>
              <button className="bg-white/5 hover:bg-white/10 text-white font-black py-6 px-12 rounded-3xl border border-white/10 transition-all duration-500 uppercase tracking-widest text-sm">
                Contact on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, -30px); }
        }
        .animate-float { animation: float 10s infinite alternate ease-in-out; }
      `,
        }}
      />
    </div>
  );
};

export default Journey;
