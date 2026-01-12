import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10 space-y-2">
          <h4 className="text-secondary font-bold text-[10px] uppercase tracking-[0.2em]">
            Patient Feedback
          </h4>
          <h2 className="text-2xl md:text-3xl font-bold text-primary">
            What Our Patients Say
          </h2>
          <p className="text-slate-400 font-medium italic text-xs tracking-tight">
            (Our journey of trust and healing continues...)
          </p>
          <div className="w-16 h-1 bg-secondary mx-auto rounded-full" />
        </div>

        <div className="relative p-8 md:p-12 rounded-[2.5rem] bg-slate-50 border border-slate-100 flex flex-col items-center text-center gap-6">
          <div className="absolute top-4 left-4 text-primary/5">
            <Quote size={60} />
          </div>

          <div className="space-y-4 max-w-2xl">
            <div className="flex justify-center gap-1 text-secondary">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <p className="text-lg md:text-xl font-bold text-slate-700 leading-relaxed italic">
              "We are currently gathering feedback from our international
              patients to share their inspiring stories of recovery and care."
            </p>
            <div className="pt-2">
              <p className="text-primary font-bold text-base">Coming Soon</p>
              <p className="text-slate-400 font-bold uppercase tracking-widest text-[9px]">
                International patient
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all">
              <ChevronLeft size={18} />
            </button>
            <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
