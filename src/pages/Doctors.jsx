import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MapPin, Clock, Search, ArrowRight, Star, Award } from "lucide-react";
import PageHero from "../components/PageHero";
import PremiumLoader from "../components/PremiumLoader";
import { getDoctors } from "../apis/doctor";

const bannerSlides = [
  {
    image:
      "https://media.istockphoto.com/id/1321691574/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B4%D1%80%D1%83%D0%B6%D0%B5%D0%BB%D1%8E%D0%B1%D0%BD%D1%8B%D0%B9-%D0%B2%D1%80%D0%B0%D1%87-%D1%80%D0%B0%D0%B7%D0%B3%D0%BE%D0%B2%D0%B0%D1%80%D0%B8%D0%B2%D0%B0%D0%B5%D1%82-%D1%81-%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D0%BE%D0%B9-%D1%81%D1%82%D0%B0%D1%80%D1%88%D0%B5%D0%B9-%D0%BF%D0%B0%D1%86%D0%B8%D0%B5%D0%BD%D1%82%D0%BA%D0%BE%D0%B9-%D0%BE%D1%82%D0%B4%D1%8B%D1%85%D0%B0%D1%8E%D1%89%D0%B5%D0%B9-%D0%B2-%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D0%BB%D0%B8-%D0%BE%D0%B1%D1%8A%D1%8F%D1%81%D0%BD%D1%8F%D0%B5%D1%82.jpg?s=612x612&w=0&k=20&c=N3owHj8_iguVgjtFCkEOmin-LX2jDSb2SROqBDweb70=",
    title: "World-Class Specialists",
    subtitle: "Find the Right Doctor for Your Treatment in India",
    buttonLabel: "Explore Doctors",
    buttonLink: "#doctors",
  },
];

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("All");

  // Extract unique specialities from doctors data
  const specialitiesList = [
    "All",
    ...new Set(doctors.map((d) => d.speciality)),
  ];

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const data = await getDoctors({ page: 1, limit: 50 });
        // Filter only active doctors
        const activeDoctors = data.doctors?.filter((d) => d.isActive) || [];
        setDoctors(activeDoctors);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDoctors();
  }, []);

  const filteredDoctors =
    activeFilter === "All"
      ? doctors
      : doctors.filter((doc) => doc.speciality === activeFilter);

  if (loading) {
    return <PremiumLoader />;
  }

  return (
    <div className="bg-white">
      <PageHero slides={bannerSlides} />

      {/* Filter Section */}
      <section className="py-6 px-4 md:px-8 bg-slate-50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-primary uppercase italic">
              Our Specialists
            </h2>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <span className="font-bold text-secondary">
                {filteredDoctors.length}
              </span>
              <span>doctors found</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {specialitiesList.map((spec) => (
              <button
                key={spec}
                onClick={() => setActiveFilter(spec)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                  activeFilter === spec
                    ? "bg-secondary text-white"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-secondary"
                }`}
              >
                {spec}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Grid Section */}
      <section id="doctors" className="py-6 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {filteredDoctors.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredDoctors.map((doctor) => (
                <div
                  key={doctor._id}
                  className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-md transition-all"
                >
                  {/* Image Section */}
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={doctor.photo}
                      alt={doctor.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute top-3 left-3 px-2 py-1 bg-white/90 rounded text-xs font-bold">
                      {doctor.hospital.city}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-4 space-y-3">
                    <div className="space-y-1">
                      <h3 className="font-bold text-primary group-hover:text-secondary transition-colors line-clamp-1">
                        {doctor.name}
                      </h3>
                      <p className="text-xs text-slate-500 uppercase font-medium">
                        {doctor.speciality}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-secondary/10 flex items-center justify-center">
                          <Clock size={12} className="text-secondary" />
                        </div>
                        <div>
                          <p className="text-xs text-slate-400 uppercase font-bold">
                            Experience
                          </p>
                          <p className="text-sm font-bold text-primary">
                            {doctor.experience}+ Yrs
                          </p>
                        </div>
                      </div>
                      {/* <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-secondary/10 flex items-center justify-center">
                          <Award size={12} className="text-secondary" />
                        </div>
                        <div>
                          <p className="text-xs text-slate-400 uppercase font-bold">
                            Rating
                          </p>
                          <div className="flex items-center gap-1">
                            <Star
                              size={12}
                              className="text-yellow-400 fill-current"
                            />
                            <span className="text-sm font-bold text-primary">
                              4.8
                            </span>
                          </div>
                        </div>
                      </div> */}
                    </div>

                    <div className="pt-2">
                      <Link
                        to={`/doctor/${doctor._id}`}
                        className="w-full bg-primary text-white text-center py-2 rounded-lg font-bold text-sm uppercase hover:bg-secondary transition-colors flex items-center justify-center gap-2 cursor-pointer"
                      >
                        View Profile <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <Search size={48} className="mx-auto text-slate-200 mb-4" />
              <h3 className="text-lg font-bold text-primary uppercase italic">
                No doctors found matching your criteria.
              </h3>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
export default Doctors;
