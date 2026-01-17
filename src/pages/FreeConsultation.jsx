import { useState } from "react";
import {
  Stethoscope,
  ShieldCheck,
  CheckCircle2,
  Upload,
  Send,
  User,
  Mail,
  Smartphone,
  Globe,
  FileText,
  Heart,
  Lock,
  Clock,
  Building2,
  MessageSquare,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import ModernSelect from "../components/ModernSelect";
import PageHero from "../components/PageHero";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/framerVariants";
import { specialitiesData } from "../data/specialitiesData";
import { createFreeConsultation } from "../apis/enquiry";
import { toast } from 'react-toastify';

const bannerSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2000",
    title: "Free Medical Consultation",
    subtitle: "Get Expert Guidance Before You Travel",
    buttonLabel: "Request Consultation",
    buttonLink: "#consultation-form",
  },
];

const FreeConsultation = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    country: "",
    city: "",
    countryCode: "+91",
    mobile: "",
    clinicalRequirement: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await createFreeConsultation(formData);
      
      if (response.success) {
        toast.success("Free consultation request submitted successfully! We will contact you within 24 hours.");
        // Reset form
        setFormData({
          fullName: "",
          country: "",
          city: "",
          countryCode: "+91",
          mobile: "",
          clinicalRequirement: ""
        });
      }
    } catch (error) {
      console.error("Error submitting consultation request:", error);
      toast.error("Failed to submit request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white overflow-x-hidden">
      <PageHero slides={bannerSlides} />

      {/* 1. Intro Section */}
      <motion.section
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="py-12 md:py-16 px-4 md:px-8 bg-linear-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left Column - Content */}
            <motion.div
              variants={fadeIn("right", 0.2)}
              className="space-y-8 md:space-y-10"
            >
              <div className="space-y-6">
                {/* Badge Removed */}
                <h2 className="text-3xl md:text-5xl font-extrabold text-primary leading-[1.1] uppercase tracking-tighter italic">
                  Free Medical <br />
                  <span className="text-secondary">Consultation</span>
                </h2>
                <div className="w-20 h-1 bg-linear-to-r from-secondary to-primary rounded-full" />
              </div>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                At Healing Escape, we believe that every patient deserves clear,
                honest, and professional medical guidance before making any
                decision. Our Free Medical Consultation service is designed to
                help you understand your treatment options, possible outcomes,
                and estimated costs — without any charges and without any
                obligation.
              </p>
            </motion.div>

            {/* Right Column - Benefits */}
            <motion.div variants={fadeIn("left", 0.2)} className="space-y-4">
              {[
                "Understand your medical condition better",
                "Know whether treatment in India is suitable for you",
                "Explore the best hospital and doctor options",
                "Get a clear idea about treatment process, duration, and cost",
                "Make an informed and confident decision for your health",
              ].map((benefit, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn("up", 0.1 * i)}
                  className="group flex items-start gap-4 p-5 md:p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-secondary/30 transition-all duration-500"
                >
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-linear-to-br from-secondary/10 to-primary/10 flex items-center justify-center border border-secondary/20 group-hover:scale-110 transition-transform">
                    <CheckCircle2 size={18} className="text-secondary" />
                  </div>
                  <span className="text-sm font-bold text-slate-700 leading-relaxed pt-2">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 2. What Does Free Consultation Mean */}
      <motion.section
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="py-12 md:py-16 px-4 md:px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div
              variants={fadeIn("right", 0.2)}
              className="space-y-8 md:space-y-10"
            >
              <div className="space-y-4">
                {/* Badge Removed */}
                <h2 className="text-3xl md:text-5xl font-extrabold text-primary uppercase tracking-tighter italic">
                  What Does "Free Consultation" Mean?
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-lg text-slate-600 font-medium leading-relaxed">
                  Free Consultation at Healing Escape means:
                </p>
                <ul className="space-y-4">
                  {[
                    "You can share your medical reports with us",
                    "Our medical coordination team reviews your case",
                    "We consult with suitable specialists or hospitals (if required)",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <ChevronRight
                        size={20}
                        className="text-secondary shrink-0 mt-1"
                      />
                      <span className="text-sm font-bold text-slate-600">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div variants={fadeIn("left", 0.2)} className="space-y-6">
              <div className="p-8 md:p-10 bg-slate-50 rounded-[2.5rem] md:rounded-[3rem] border border-slate-100 space-y-6">
                <h4 className="text-lg font-bold text-primary uppercase tracking-tight italic">
                  You Receive:
                </h4>
                <ul className="space-y-4">
                  {[
                    "Medical guidance",
                    "Possible treatment options",
                    "Hospital and doctor suggestions",
                    "Approximate cost estimate",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 size={16} className="text-secondary" />
                      <span className="text-sm font-bold text-slate-600">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {[
                  "✅ There is no consultation fee",
                  "✅ There is no obligation to come to India",
                  "✅ The final decision is always yours",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-4 bg-secondary/5 rounded-2xl border border-secondary/20 text-center"
                  >
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 3. Who Should Use This Service */}
      <motion.section
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="py-12 md:py-16 px-4 md:px-8 bg-slate-50"
      >
        <div className="max-w-7xl mx-auto text-center space-y-12 md:space-y-16">
          <motion.div variants={fadeIn("down", 0.1)} className="space-y-4">
            {/* Badge Removed */}
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary uppercase tracking-tighter italic">
              Who Should Use This Service?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "International Patients",
                desc: "Patients planning treatment outside their home country",
              },
              {
                title: "Seeking Affordability",
                desc: "Looking for affordable and advanced treatment options",
              },
              {
                title: "Second Opinion",
                desc: "Patients who want a second medical opinion",
              },
              {
                title: "Treatment Clarity",
                desc: "Want to understand if surgery or advanced treatment is necessary",
              },
              {
                title: "Family Decision",
                desc: "Families who want clear guidance before big medical decisions",
              },
              {
                title: "Research Phase",
                desc: "Anyone researching medical tourism options in India",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeIn("up", 0.1 * (i + 1))}
                className="p-8 md:p-10 bg-white rounded-[2.5rem] md:rounded-[3rem] border border-slate-100 shadow-lg space-y-4 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto">
                  <Stethoscope size={24} className="text-secondary" />
                </div>
                <h3 className="text-sm font-bold text-primary uppercase tracking-tight italic">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 4. How It Works */}
      <motion.section
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="py-12 md:py-16 px-4 md:px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto space-y-12 md:space-y-16">
          <motion.div
            variants={fadeIn("down", 0.1)}
            className="text-center space-y-4"
          >
            {/* Badge Removed */}
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary uppercase tracking-tighter italic">
              How Our Free Consultation Works
            </h2>
            <p className="text-lg text-slate-600 font-medium max-w-3xl mx-auto">
              Step-by-Step Process
            </p>
          </motion.div>

          <div className="relative space-y-8">
            {[
              {
                step: "1️⃣",
                title: "Submit Your Details",
                desc: "You fill out the consultation form and upload your medical reports",
              },
              {
                step: "2️⃣",
                title: "Team Review",
                desc: "Our medical coordination team reviews your details",
              },
              {
                step: "3️⃣",
                title: "Specialist Evaluation",
                desc: "Your case is evaluated by experienced specialists or partner hospitals (if required)",
              },
              {
                step: "4️⃣",
                title: "Comprehensive Response",
                desc: "We prepare a response with treatment guidance, hospital options, cost estimate, and next steps",
              },
              {
                step: "5️⃣",
                title: "Personal Contact",
                desc: "We contact you via email, phone, or WhatsApp to explain everything clearly",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeIn(i % 2 === 0 ? "right" : "left", 0.2)}
                className="flex flex-col md:flex-row gap-6 items-start md:items-center"
              >
                {/* <div className="shrink-0 w-16 h-16 rounded-2xl bg-secondary text-white text-2xl font-bold flex items-center justify-center shadow-xl">
                  {item.step}
                </div> */}
                <div className="flex-1 p-6 md:p-8 bg-slate-50 rounded-2xl md:rounded-3xl border border-slate-100">
                  <h3 className="text-lg font-bold text-primary uppercase tracking-tight italic mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 5. What Guidance You'll Receive */}
      <motion.section
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="py-12 md:py-16 px-4 md:px-8 bg-slate-900 overflow-hidden relative"
      >
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 blur-[120px] rounded-full" />
        <div className="max-w-7xl mx-auto relative z-10 space-y-12 md:space-y-16">
          <motion.div
            variants={fadeIn("down", 0.1)}
            className="text-center space-y-4"
          >
            {/* Badge Removed */}
            <h2 className="text-3xl md:text-5xl font-extrabold text-white uppercase tracking-tighter italic">
              What Kind of Guidance Will You Receive?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              "Explanation of your medical condition in simple terms",
              "Whether your condition requires surgery, procedure, or medical management",
              "Possible treatment options available in India",
              "Recommended hospital types (and sometimes specific hospitals)",
              "Expected treatment duration and stay in India",
              "Approximate cost range (transparent and realistic)",
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeIn("up", 0.1 * (i + 1))}
                className="p-6 md:p-8 bg-white/5 backdrop-blur-md rounded-2xl md:rounded-3xl border border-white/10 flex items-start gap-4"
              >
                <CheckCircle2
                  size={20}
                  className="text-secondary shrink-0 mt-1"
                />
                <p className="text-sm font-bold text-white/90 leading-relaxed">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeIn("up", 0.3)}
            className="p-6 md:p-8 bg-secondary/10 backdrop-blur-md rounded-2xl md:rounded-3xl border border-secondary/20 text-center"
          >
            <p className="text-sm font-bold text-white uppercase tracking-widest">
              ⚠️ Final treatment decisions are always taken by the treating
              doctor after physical examination.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* 6. Why Healing Escape */}
      <motion.section
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="py-12 md:py-16 px-4 md:px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto space-y-12 md:space-y-16">
          <motion.div
            variants={fadeIn("down", 0.1)}
            className="text-center space-y-4"
          >
            {/* Badge Removed */}
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary uppercase tracking-tighter italic">
              Why Get a Free Consultation <br />
              from Healing Escape?
            </h2>
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.2)}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {[
              {
                icon: <ShieldCheck size={24} />,
                title: "Verified Hospitals",
                desc: "We work only with verified and reputed hospitals in North India",
              },
              {
                icon: <Heart size={24} />,
                title: "Patient-First Approach",
                desc: "We follow a patient-first and ethics-driven approach",
              },
              {
                icon: <CheckCircle2 size={24} />,
                title: "No Unnecessary Treatments",
                desc: "We do not recommend unnecessary treatments",
              },
              {
                icon: <MessageSquare size={24} />,
                title: "Honest Guidance",
                desc: "We focus on honest guidance, not sales",
              },
              {
                icon: <Globe size={24} />,
                title: "Real Experience",
                desc: "We have real experience in handling international patients",
              },
              {
                icon: <Stethoscope size={24} />,
                title: "Medical Expertise",
                desc: "Access to top medical specialists across specialties",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeIn("up", 0.1 * (i + 1))}
                className="p-8 md:p-10 bg-slate-50 rounded-[2.5rem] md:rounded-[3rem] border border-slate-100 space-y-4 text-center hover:shadow-xl transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto text-secondary">
                  {item.icon}
                </div>
                <h3 className="text-sm font-bold text-primary uppercase tracking-tight italic">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>


      {/* 8. Consultation Form */}
      <section
        id="consultation-form"
        className="py-12 md:py-16 px-4 md:px-8 bg-white"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={staggerContainer(0.2, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="space-y-12 md:space-y-16"
          >
            <motion.div
              variants={fadeIn("up", 0.2)}
              className="text-center space-y-4 mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-extrabold text-primary uppercase tracking-tighter italic">
                Request Your Free <span className="text-secondary">Consultation</span>
              </h2>
              <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">
                Fill out the form below and our medical coordination team will review your case within 24 hours.
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.4)}
              className="flex justify-center"
            >
              <div className="rounded-3xl shadow-2xl p-6 sm:p-7 md:p-8 w-full max-w-md mx-auto border-b-4 border-primary relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                  <img
                    src="https://images.unsplash.com/photo-1576091160550-217359f488d5?auto=format&fit=crop&q=80&w=1000"
                    alt="Clinical Environment"
                    className="w-full h-full object-cover blur-[4px] scale-110"
                  />
                  <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />
                </div>

                <div className="relative z-10">
                  <div className="mb-5 md:mb-6">
                    <h3 className="text-lg sm:text-xl font-bold text-primary leading-tight uppercase tracking-tight">
                      Get Free Medical Consultation
                    </h3>
                  </div>

                  <form className="space-y-3 sm:space-y-3.5" onSubmit={handleSubmit}>
                    <div className="space-y-3 sm:space-y-3.5">
                      <input
                        type="text"
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                        className="w-full py-3 sm:py-3.5 px-4 sm:px-5 rounded-xl border border-white bg-white/80 focus:outline-none focus:ring-4 focus:ring-primary/5 transition-all text-sm font-semibold text-slate-700 placeholder:text-slate-400"
                        required
                      />

                      <div className="grid grid-cols-2 gap-3">
                        <ModernSelect
                          options={[
                            { value: "Kenya", label: "Kenya" },
                            { value: "Nigeria", label: "Nigeria" },
                            { value: "UAE", label: "UAE" },
                            { value: "Bangladesh", label: "Bangladesh" },
                            { value: "Iraq", label: "Iraq" },
                            { value: "Afghanistan", label: "Afghanistan" },
                            { value: "Other", label: "Other" }
                          ]}
                          value={formData.country}
                          onChange={(value) => setFormData({...formData, country: value})}
                          placeholder="Country"
                          required
                          className="w-full"
                        />
                        <input
                          type="text"
                          placeholder="City"
                          value={formData.city}
                          onChange={(e) => setFormData({...formData, city: e.target.value})}
                          className="w-full py-3 sm:py-3.5 px-4 sm:px-5 rounded-xl border border-white bg-white/80 focus:outline-none text-sm font-semibold text-slate-700"
                          required
                        />
                      </div>

                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={formData.countryCode}
                          onChange={(e) => setFormData({...formData, countryCode: e.target.value})}
                          className="w-14 sm:w-16 py-3 sm:py-3.5 px-2 rounded-xl border border-white bg-white/80 text-center text-sm font-bold text-primary"
                        />
                        <input
                          type="tel"
                          placeholder="Mobile Number"
                          value={formData.mobile}
                          onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                          className="flex-1 py-3 sm:py-3.5 px-4 sm:px-5 rounded-xl border border-white bg-white/80 focus:outline-none text-sm font-semibold text-slate-700"
                          required
                        />
                      </div>

                      {/* <input
                        type="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full py-3 sm:py-3.5 px-4 sm:px-5 rounded-xl border border-white bg-white/80 focus:outline-none focus:ring-4 focus:ring-primary/5 transition-all text-sm font-semibold text-slate-700 placeholder:text-slate-400"
                        required
                      /> */}

                      {/* <div className="relative">
                        <select 
                          value={formData.treatment}
                          onChange={(e) => setFormData({...formData, treatment: e.target.value})}
                          className="w-full py-3 sm:py-3.5 px-4 sm:px-5 rounded-xl border border-white bg-white/80 focus:outline-none appearance-none text-sm font-semibold text-slate-700 cursor-pointer"
                          required
                        >
                          <option value="">Select Treatment</option>
                          {treatmentOptions.map((treatment) => (
                            <option key={treatment} value={treatment}>{treatment}</option>
                          ))}
                        </select>
                        <ChevronDown
                          size={14}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                        />
                      </div> */}

                      <textarea
                        placeholder="Describe your medical condition..."
                        rows="3"
                        value={formData.clinicalRequirement}
                        onChange={(e) => setFormData({...formData, clinicalRequirement: e.target.value})}
                        className="w-full py-3 sm:py-3.5 px-4 sm:px-5 rounded-xl border border-white bg-white/80 focus:outline-none text-sm font-semibold text-slate-700 resize-none placeholder:text-slate-400"
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-secondary text-white font-bold py-3.5 sm:py-4 rounded-xl shadow-lg transition-all uppercase tracking-widest text-[10px] sm:text-[11px] mt-3 sm:mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Submitting..." : "Request Free Consultation"}
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 9. What Happens Next */}
      <motion.section
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="py-16 md:py-24 px-4 md:px-8 bg-slate-50"
      >
        <div className="max-w-5xl mx-auto space-y-12 md:space-y-16">
          <motion.div
            variants={fadeIn("down", 0.1)}
            className="text-center space-y-4"
          >
            <h4 className="text-secondary font-bold uppercase tracking-[0.4em] text-[10px]">
              📌 Next Steps
            </h4>
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary uppercase tracking-tighter italic">
              What Happens After <br />
              You Submit the Form?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                num: "01",
                text: "Our team reviews your medical details and reports",
              },
              {
                num: "02",
                text: "We consult with appropriate specialists or hospitals if required",
              },
              {
                num: "03",
                text: "You receive a response with medical guidance, treatment options, hospital suggestions, and approximate cost estimate",
              },
              {
                num: "04",
                text: "We explain everything clearly to you via email, call, or WhatsApp",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeIn("up", 0.1 * (i + 1))}
                className="flex gap-4 items-start p-6 md:p-8 bg-white rounded-2xl md:rounded-3xl border border-slate-100 shadow-lg"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-secondary text-white font-bold flex items-center justify-center text-sm">
                  {item.num}
                </div>
                <p className="text-sm font-bold text-slate-600 leading-relaxed pt-2">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 10. Promise Section */}
      <motion.section
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="py-12 md:py-16 px-4 md:px-8 bg-white"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={fadeIn("up", 0.2)}
            className="p-8 md:p-16 bg-gradient-to-br from-primary to-primary/90 rounded-[2.5rem] md:rounded-[4rem] shadow-2xl space-y-10 md:space-y-12 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-[100px]" />
            <div className="relative z-10 space-y-8">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto">
                <Heart size={32} className="text-white" />
              </div>
              <div className="space-y-4">
                <h4 className="text-secondary font-bold uppercase tracking-[0.4em] text-[10px]">
                  ❤️ Our Commitment
                </h4>
                <h2 className="text-3xl md:text-5xl font-extrabold text-white uppercase tracking-tighter italic">
                  Healing Escape Promise
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {[
                  "We do not charge for this consultation",
                  "We do not pressure you to travel or take treatment",
                  "We do not promote unnecessary procedures",
                  "We focus only on what is medically right for you",
                  "We maintain full transparency and patient-first ethics",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-4 md:p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 flex items-center gap-3 text-left"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-secondary shrink-0"
                    />
                    <p className="text-sm font-bold text-white leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

    </div>
  );
};

export default FreeConsultation;
