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
  ChevronDown,
} from "lucide-react";
import PageHero from "../components/PageHero";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/framerVariants";

const bannerSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000",
    title: "Patient Journey",
    subtitle: "Your Treatment. Our Complete Responsibility.",
    buttonLabel: "Start Your Journey",
    buttonLink: "#workflow-start",
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
        const scrolled = windowHeight / 2 - rect.top;
        const progress = Math.min(Math.max(scrolled / totalHeight, 0), 1);
        setScrollProgress(progress * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const steps = [
    {
      id: 1,
      title: "Initial Inquiry",
      icon: <MessageSquare className="w-6 h-6 md:w-8 md:h-8" />,
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
      icon: <Stethoscope className="w-6 h-6 md:w-8 md:h-8" />,
      content:
        "Our medical team carefully reviews all your medical reports to shortlist suitable specialists.",
      points: ["Video consultations", "Treatment roadmap"],
      color: "bg-emerald-500",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: 3,
      title: "Treatment Plan & Cost Estimate",
      icon: <ClipboardList className="w-6 h-6 md:w-8 md:h-8" />,
      content:
        "Healing Escape provides a detailed and transparent treatment proposal.",
      points: [
        "Hospital & Doctor profiles",
        "Transparent cost estimate",
        "Recovery timeline",
      ],
      color: "bg-indigo-500",
      image:
        "https://media.istockphoto.com/id/1496003846/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D1%87%D0%B0%D1%81%D1%82%D0%BB%D0%B8%D0%B2%D0%B0%D1%8F-%D0%B8%D0%BD%D0%B4%D0%B8%D0%B9%D1%81%D0%BA%D0%B0%D1%8F-%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD%D0%B0-%D0%BC%D0%B5%D0%B4%D1%81%D0%B5%D1%81%D1%82%D1%80%D0%B0-%D0%B8%D0%BB%D0%B8-%D0%BC%D0%B5%D0%B4%D0%B8%D1%86%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9-%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%BB-%D0%B4%D0%B0%D1%8E%D1%82-%D0%BF%D1%8F%D1%82%D0%B5%D1%80%D0%BA%D1%83-%D0%BC%D0%B0%D0%BB%D0%B5%D0%BD%D1%8C%D0%BA%D0%BE%D0%B9-%D0%B4%D0%B5%D0%B2%D0%BE%D1%87%D0%BA%D0%B5.jpg?s=612x612&w=0&k=20&c=S_kJtrxnBmjvHOalzMt_HF1h6ANdD9C1TRr3jf94I4M=",
    },
    {
      id: 4,
      title: "Medical Visa & Travel Assistance",
      icon: <Plane className="w-6 h-6 md:w-8 md:h-8" />,
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
      icon: <Hospital className="w-6 h-6 md:w-8 md:h-8" />,
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
      icon: <Activity className="w-6 h-6 md:w-8 md:h-8" />,
      content:
        "Treatment at NABH / JCI accredited hospitals by experienced specialists.",
      points: ["Family coordination", "Clinical oversight", "Progress updates"],
      color: "bg-rose-500",
      image:
        "https://schillerinstitute.com/wp-content/uploads/2021/05/india_hospital-710x466.jpg",
    },
    {
      id: 7,
      title: "Recovery & Local Support",
      icon: <CalendarCheck className="w-6 h-6 md:w-8 md:h-8" />,
      content: "Post-treatment recovery phase closely supported by our team.",
      points: [
        "Discharge formalities",
        "Medication review",
        "Local visit support",
      ],
      color: "bg-amber-500",
      image:
        "https://t3.ftcdn.net/jpg/05/20/72/02/360_F_520720217_GAqEdbkJM6HAhO2aQ1PEYOz8nKjc8K5Z.jpg",
    },
    {
      id: 8,
      title: "Return Journey & Follow-Up",
      icon: <HeartHandshake className="w-6 h-6 md:w-8 md:h-8" />,
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
      icon: <ShieldCheck className="w-5 h-5 md:w-6 md:h-6" />,
      text: "100% Ethical Guidance",
    },
    {
      icon: <UserCheck className="w-5 h-5 md:w-6 md:h-6" />,
      text: "Patient-First Approach",
    },
    {
      icon: <Search className="w-5 h-5 md:w-6 md:h-6" />,
      text: "Complete Transparency",
    },
    {
      icon: <HandCoins className="w-5 h-5 md:w-6 md:h-6" />,
      text: "No Hidden Costs",
    },
    {
      icon: <Eye className="w-5 h-5 md:w-6 md:h-6" />,
      text: "No Unnecessary Actions",
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6" />,
      text: "End-to-End Care",
    },
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section (Replaced PageHero with Intro Section) */}
      <motion.section
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="relative min-h-[250px] md:min-h-[300px] flex items-center py-8 md:py-12 px-4 sm:px-6 md:px-8 bg-slate-50 overflow-hidden pt-[70px]"
      >
        {/* Animated Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
            <motion.div
              variants={fadeIn("right", 0.2)}
              className="lg:w-1/2 space-y-5 md:space-y-6 lg:space-y-8 text-center lg:text-left"
            >
              {/* Badge Removed (as per original content) */}
              <h1 className="text-3xl md:text-5xl font-extrabold text-primary leading-tight uppercase tracking-tighter italic">
                Medical Tourism{" "}
                <span className="text-secondary">
                  Journey with Healing Escape
                </span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-medium">
                At Healing Escape, we understand that travelling for medical
                treatment is a major decision. Our transparent, step-by-step
                process ensures your journey is safe, smooth, and stress-free.
                <br />
                Below is a detailed explanation of how we take care of you at
                every stage of your treatment journey.
              </p>
            </motion.div>

            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full">
              {promises.map((promise, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn("up", 0.1 * (index + 1))}
                  className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 md:p-6 bg-white rounded-xl sm:rounded-2xl border border-slate-100 shadow-sm md:hover:shadow-2xl transition-all duration-500 group"
                >
                  <div className="p-2.5 sm:p-3 bg-slate-50 rounded-lg sm:rounded-xl text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-500 shrink-0">
                    {promise.icon}
                  </div>
                  <span className="font-extrabold text-primary uppercase text-[9px] sm:text-[10px] tracking-widest leading-tight italic">
                    {promise.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Unique Overlapping Scroll Button */}
      <div className="relative h-10 -mt-5 flex justify-center z-[9999]">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1, duration: 0.5 },
            scale: { delay: 1, duration: 0.5 },
            y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
          }}
          className="-translate-y-1/2 flex flex-col items-center gap-3 cursor-pointer group"
          onClick={() =>
            document
              .getElementById("workflow-start")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <div className="relative">
            {/* Glowing Pulse */}
            <motion.div
              animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="absolute inset-0 bg-secondary/30 rounded-full scale-150"
            />
            <div className="relative w-14 h-14 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-white group-hover:bg-secondary transition-all duration-300">
              <ChevronDown
                className="text-secondary group-hover:text-white transition-colors"
                size={28}
              />
            </div>
          </div>
          <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em] bg-white px-4 py-1.5 rounded-full shadow-sm border border-slate-100 group-hover:text-secondary group-hover:shadow-md transition-all italic">
            Explore Journey
          </span>
        </motion.div>
      </div>

      {/* Steps Section */}
      <motion.section
        id="workflow-start"
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="py-12 md:py-16 px-4 sm:px-6 md:px-8 bg-white relative"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeIn("down", 0.1)}
            className="text-center mb-12 md:mb-20 lg:mb-32 space-y-3 md:space-y-4"
          >
            {/* Badge Removed */}
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary uppercase tracking-tighter italic leading-none">
              Treatment Workflow
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 sm:h-1.5 bg-secondary mx-auto rounded-full mt-3 md:mt-4" />
          </motion.div>

          <div className="relative" ref={timelineRef}>
            {/* Animated Line Container */}
            <div className="absolute left-4 sm:left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-100 md:transform md:-translate-x-1/2">
              <div
                className="absolute top-0 left-0 w-full bg-linear-to-b from-secondary to-primary transition-all duration-200 ease-out rounded-full"
                style={{ height: `${scrollProgress}%` }}
              >
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-secondary rounded-full border-4 border-white shadow-lg animate-pulse" />
              </div>
            </div>

            <div className="space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-32">
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className={`flex flex-col lg:flex-row items-center gap-12 md:gap-24 relative ${
                    index % 2 === 0 ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Text Side */}
                  <motion.div
                    variants={fadeIn(index % 2 === 0 ? "right" : "left", 0.2)}
                    className={`lg:w-1/2 w-full text-center ${
                      index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                    }`}
                  >
                    <div className="inline-block p-3 md:p-4 rounded bg-slate-50 border border-slate-100 mb-6 md:mb-8 md:hover:rotate-6 transition-transform shadow-sm">
                      <div
                        className={`p-4 rounded ${step.color} text-white shadow-xl`}
                      >
                        {step.icon}
                      </div>
                    </div>
                    <div
                      className={`flex items-center gap-4 mb-4 md:mb-6 justify-center ${
                        index % 2 === 0 ? "lg:justify-end" : "lg:justify-start"
                      }`}
                    >
                      {index % 2 !== 0 && (
                        <span className="hidden md:block text-4xl md:text-5xl font-black text-slate-100">
                          0{step.id}
                        </span>
                      )}
                      <h3 className="text-2xl md:text-3xl font-extrabold text-primary uppercase tracking-tight italic">
                        {step.title}
                      </h3>
                      {(index % 2 === 0 || window.innerWidth < 1024) && (
                        <span className="text-4xl md:text-5xl font-black text-slate-100">
                          0{step.id}
                        </span>
                      )}
                    </div>
                    <p className="text-slate-600 mb-6 md:mb-8 text-base md:text-lg font-medium leading-relaxed max-w-xl lg:mx-0 mx-auto italic">
                      {step.content}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 md:gap-3 justify-center ${
                        index % 2 === 0 ? "lg:justify-end" : "lg:justify-start"
                      }`}
                    >
                      {step.points.map((point, idx) => (
                        <motion.div
                          key={idx}
                          variants={fadeIn("up", 0.1 * (idx + 1))}
                          className="flex items-center gap-2 px-4 py-2 bg-slate-50 text-slate-500 rounded text-[9px] md:text-[10px] font-extrabold border border-slate-100 uppercase tracking-widest md:hover:border-secondary md:hover:text-secondary transition-colors italic"
                        >
                          <CheckCircle2
                            size={14}
                            className="text-secondary shrink-0"
                          />
                          {point}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Icon Node for Mobile */}
                  <div className="lg:hidden w-8 h-8 rounded-full border-4 border-slate-100 bg-white flex items-center justify-center -my-8 z-10">
                    <div className={`w-3 h-3 rounded-full ${step.color}`} />
                  </div>

                  {/* Image Side */}
                  <motion.div
                    variants={fadeIn(index % 2 === 0 ? "left" : "right", 0.2)}
                    className="lg:w-1/2 w-full px-4 md:px-0"
                  >
                    <div className="relative group">
                      <div className="absolute inset-0 bg-primary/10 rounded blur-2xl md:group-hover:bg-secondary/20 transition-all duration-700" />
                      <div className="relative rounded overflow-hidden shadow-2xl border-4 border-white md:group-hover:-translate-y-2 transition-all duration-700">
                        <img
                          src={step.image}
                          className="w-full h-[300px] md:h-[400px] object-cover bg-slate-100"
                          alt={step.title}
                        />
                        <div className="absolute bottom-0 left-0 p-6 md:p-8 bg-linear-to-t from-black/80 to-transparent w-full">
                          {/* <span className="text-white font-black text-3xl md:text-5xl opacity-30 uppercase tracking-tighter italic">
                            Step 0{step.id}
                          </span> */}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Promise Section */}
      <motion.section
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="py-12 md:py-16 px-4 md:px-8 bg-primary relative overflow-hidden"
      >
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-secondary/10 blur-[150px] rounded-full" />
        <div className="max-w-7xl mx-auto text-center text-white relative z-10">
          <motion.div
            variants={fadeIn("up", 0.1)}
            className="inline-block p-4 md:p-6 rounded bg-white/10 backdrop-blur-xl border border-white/20 mb-6 md:mb-8"
          >
            <HeartHandshake className="w-12 h-12 md:w-16 md:h-16 text-secondary" />
          </motion.div>
          <motion.h2
            variants={fadeIn("up", 0.2)}
            className="text-3xl md:text-5xl font-extrabold mb-10 md:mb-16 uppercase tracking-tighter italic leading-none"
          >
            Our Promise
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mb-16 md:mb-24">
            {[
              {
                title: "Integrity",
                text: "100% ethical guidance and complete transparency in every medical decision.",
                icon: <ShieldCheck size={32} />,
              },
              {
                title: "Values",
                text: "No unnecessary procedures and no hidden costs. Honest advice, always.",
                icon: <HandCoins size={32} />,
              },
              {
                title: "Responsibility",
                text: "Patient-first approach with end-to-end responsibility.",
                icon: <Activity size={32} />,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeIn("up", 0.1 * (i + 1))}
                className="group p-8 md:p-12 bg-white/5 backdrop-blur-2xl rounded border border-white/10 text-center md:text-left md:hover:bg-white/10 transition-all duration-500 shadow-xl"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 rounded bg-secondary/20 flex items-center justify-center text-secondary mb-6 md:mb-8 mx-auto md:mx-0 transition-transform md:group-hover:scale-110">
                  {item.icon}
                </div>
                <h3 className="text-secondary font-black text-xl md:text-2xl mb-4 uppercase tracking-wide italic">
                  {item.title}
                </h3>
                <p className="text-white/70 text-base md:text-lg leading-relaxed font-medium italic">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
          <motion.div
            variants={fadeIn("up", 0.6)}
            className="max-w-4xl mx-auto border-t border-white/10 pt-16 md:pt-20"
          >
            <p className="text-xl md:text-3xl font-light italic text-white/95 leading-relaxed">
              "With Healing Escape, your treatment becomes a carefully managed,
              safe, and{" "}
              <span className="text-secondary font-bold">
                compassionate healing journey.
              </span>
              "
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="py-12 md:py-16 px-4 md:px-8 bg-white"
      >
        <motion.div
          variants={fadeIn("up", 0.1)}
          className="max-w-7xl mx-auto bg-slate-900 rounded p-8 md:p-24 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary/20 blur-[120px] rounded-full animate-float" />
          <div className="relative z-10 space-y-8 md:space-y-12">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              className="text-3xl md:text-5xl font-extrabold text-white uppercase tracking-tighter italic leading-none"
            >
              Ready to <span className="text-secondary">Begin?</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.3)}
              className="text-white/50 text-lg md:text-xl font-light italic"
            >
              Connect with our medical experts today for a personalized plan.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.4)}
              className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6"
            >
              <a
                href="/contact"
                className="bg-secondary hover:bg-white hover:text-primary text-white font-black py-4 md:py-6 px-8 md:px-12 rounded transition-all duration-500 uppercase tracking-widest text-[11px] md:text-sm shadow-xl cursor-pointer"
              >
                Start Enquiry Now
              </a>
              <a
                href="https://wa.me/918960966629"
                target="_blank"
                rel="noreferrer"
                className="bg-white/5 hover:bg-white/10 text-white font-black py-4 md:py-6 px-8 md:px-12 rounded border border-white/10 transition-all duration-500 uppercase tracking-widest text-[11px] md:text-sm shadow-xl cursor-pointer"
              >
                Contact on WhatsApp
              </a>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

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
