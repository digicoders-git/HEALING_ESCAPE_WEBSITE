import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  ArrowLeft,
  CheckCircle2,
  ArrowRight,
  Send,
  MapPin,
} from "lucide-react";
import Loader from "../components/Loader";
import { getSpecialityById } from "../apis/speciality";
import { hospitalsData } from "../data/hospitalsData";

const SpecialityDetail = () => {
  const { id } = useParams();
  const [treatment, setTreatment] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSpeciality = async () => {
      try {
        const data = await getSpecialityById(id);
        setTreatment(data.speciality);
      } catch (error) {
        console.error("Error fetching speciality:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSpeciality();
  }, [id]);

  // Filter hospitals that offer this speciality
  const offeringHospitals = hospitalsData.filter((h) =>
    h.specialities.some((s) =>
      s.toLowerCase().includes(treatment?.title.split(" ")[0].toLowerCase())
    )
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader size={50} />
      </div>
    );
  }

  if (!treatment) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-bold text-primary">Treatment not found</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-slate-50 border-b border-slate-100 py-4 px-4 md:px-8">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <Link
            to="/specialities"
            className="flex items-center gap-2 text-primary hover:text-secondary transition-colors"
          >
            <ArrowLeft size={16} />
            <span className="text-sm font-medium">Back to Specialities</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-6 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden bg-slate-100 mb-6">
            <img
              src={treatment.image}
              alt={treatment.title}
              className="w-full h-[300px] md:h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {treatment.title}
              </h1>
              <p className="text-white/80">
                World-class medical treatment in India
              </p>
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            {/* What is this Treatment */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-primary uppercase italic">
                What is {treatment.title}?
              </h2>
              <p className="text-slate-600 leading-relaxed border-l-4 border-slate-100 pl-4">
                {treatment.whatIs}
              </p>
            </div>

            {/* When Recommended */}
            {treatment.whenRecommended && (
              <div className="space-y-3">
                <h2 className="text-xl font-bold text-primary uppercase italic">
                  When is this Recommended?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {treatment.whenRecommended.map((point, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg border border-slate-100"
                    >
                      <CheckCircle2 size={12} className="text-secondary shrink-0" />
                      <p className="text-sm text-slate-700">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Procedure */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-primary uppercase italic">
                How is it Performed?
              </h2>
              <p className="text-slate-600 leading-relaxed">
                {treatment.procedure}
              </p>
            </div>

            {/* Cost */}
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase mb-1">
                    Treatment Cost
                  </p>
                  <p className="text-xl font-bold text-primary">
                    {treatment.costRange}
                  </p>
                </div>
                {/* <Link
                  to="#enquiry"
                  className="bg-secondary text-white px-4 py-2 rounded-lg font-bold text-sm uppercase hover:bg-primary transition-colors text-center"
                >
                  Get Quote
                </Link> */}
              </div>
            </div>

            {/* Available Hospitals */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-primary uppercase italic">
                Available Hospitals
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {offeringHospitals.slice(0, 4).map((hosp, idx) => (
                  <Link
                    to={`/hospital/${hosp.id}`}
                    key={idx}
                    className="group flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-100 hover:shadow-md transition-all"
                  >
                    <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0">
                      <img
                        src={hosp.image}
                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                        alt={hosp.name}
                      />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-primary group-hover:text-secondary transition-colors line-clamp-1 text-sm">
                        {hosp.name}
                      </h4>
                      <div className="flex items-center gap-1 text-slate-500 text-xs">
                        <MapPin size={10} />
                        <span>{hosp.city}</span>
                      </div>
                      <div className="flex items-center gap-1 text-secondary">
                        <span className="text-xs font-bold uppercase">View Details</span>
                        <ArrowRight size={10} />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      {/* <section id="enquiry" className="py-6 px-4 md:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-2 mb-6">
            <h2 className="text-xl font-bold text-primary uppercase italic">
              Get Treatment Plan for <span className="text-secondary">{treatment.title}</span>
            </h2>
            <p className="text-slate-500 text-sm">
              Fill out the form below to receive a personalized treatment plan.
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
                  Treatment
                </label>
                <input
                  type="text"
                  defaultValue={treatment.title}
                  className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-100 focus:outline-none focus:border-secondary text-sm"
                />
              </div>
              <div className="md:col-span-2 space-y-1">
                <label className="text-xs font-bold uppercase text-slate-400">
                  Message
                </label>
                <textarea
                  rows="2"
                  className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-100 focus:outline-none focus:border-secondary resize-none text-sm"
                  placeholder="Tell us about your condition..."
                />
              </div>

              <div className="md:col-span-2 text-center pt-2">
                <button
                  type="submit"
                  className="bg-primary hover:bg-secondary text-white font-bold py-2 px-6 rounded-lg transition-all uppercase text-sm flex items-center gap-2 mx-auto"
                >
                  Get Treatment Plan <Send size={14} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default SpecialityDetail;