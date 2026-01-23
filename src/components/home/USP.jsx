import {
  ShieldCheck,
  Cross,
  Users,
  Star,
  ClipboardCheck,
  CheckCircle,
} from "lucide-react";
import mod2 from '../../assets/home/mod2.png'

const differentiators = [
  {
    title: "Institutional Ties",
    desc: "Direct tie-ups with India's most prestigious JCI & NABH hospital chains.",
  },
  {
    title: "Clinical Care Teams",
    desc: "Coordination with 24/7 dedicated support through the journey.",
  },
  {
    title: "Ethical Pricing",
    desc: "Zero-markup institutional cost estimates provided directly.",
  },
  {
    title: "Support Care",
    desc: "Managed post-treatment care including digital health tracking.",
  },
];

const USP = () => {
  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <h4 className="text-secondary font-bold text-[12px] uppercase tracking-[0.2em] border-l-4 border-secondary pl-4">
                The Healing Escape Edge
              </h4>
              <h2 className="text-2xl md:text-3xl font-bold text-primary leading-tight tracking-tight uppercase">
                Institutional Quality
              </h2>
              <p className="text-slate-500 font-medium text-base leading-relaxed">
                We maintain strict clinical protocols and ensuring the absolute
                best outcomes for our international guests.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {differentiators.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle
                      size={16}
                      className="text-secondary shrink-0"
                    />
                    <h3 className="font-bold text-primary text-base">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-slate-500 text-[13px] font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/5 rounded translate-x-2 translate-y-2" />
              <div className="relative bg-white border border-slate-100 p-4 rounded shadow-lg">
                <img
                  src={mod2}
                  className="w-full h-[300px] object-cover rounded"
                  alt="Clinical Excellence"
                />
                {/* <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-slate-50">
                  <div className="flex items-center gap-3">
                    <div className="bg-secondary p-2 rounded text-white">
                      <Star size={16} fill="currentColor" />
                    </div>
                    <div>
                      <p className="text-primary font-bold text-xl leading-none">
                        4.9/5
                      </p>
                      <p className="text-slate-400 text-[9px] font-bold uppercase tracking-widest mt-1">
                        Rating
                      </p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default USP;
