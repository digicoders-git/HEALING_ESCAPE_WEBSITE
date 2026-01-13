import { useParams, Link } from "react-router-dom";
import {
  Play,
  ArrowLeft,
  Clock,
  CheckCircle2,
  Send,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { videoData } from "../data/videoData";

const VideoDetail = () => {
  const { id } = useParams();
  const video = videoData.find((v) => v.id === parseInt(id));

  // Related videos from the same category
  const relatedVideos = videoData
    .filter((v) => v.id !== parseInt(id) && v.category === video?.category)
    .slice(0, 3);

  if (!video) {
    return (
      <div className="py-40 text-center space-y-8">
        <h2 className="text-4xl font-extrabold text-primary uppercase italic">
          Video Not Found
        </h2>
        <Link
          to="/videos"
          className="text-secondary font-bold uppercase tracking-widest border-b-2 border-secondary pb-1"
        >
          Back to Video Gallery
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* 1. Header Area */}
      <section className="pt-28 md:pt-[140px] pb-8 md:pb-12 px-4 sm:px-6 md:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto space-y-8">
          <Link
            to="/videos"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-secondary transition-colors text-[10px] font-bold uppercase tracking-[0.3em]"
          >
            <ArrowLeft size={16} /> Back to Gallery
          </Link>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-primary tracking-tighter uppercase italic leading-none max-w-4xl">
            {video.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 md:gap-6 text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-slate-400 border-t border-slate-200 pt-6 md:pt-8">
            <span className="px-4 py-1.5 bg-primary text-white rounded-full">
              {video.category}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={16} className="text-secondary" /> {video.duration}
            </span>
          </div>
        </div>
      </section>

      {/* 2. Video Player & Content Area */}
      <section className="py-12 md:py-24 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-8 space-y-12 md:space-y-20">
            {/* Main Player Area */}
            <div className="relative rounded-[4rem] overflow-hidden bg-primary aspect-video shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] ring-8 ring-slate-50">
              {/* This would be an iframe if URLs were real */}
              <div className="w-full h-full flex items-center justify-center relative overflow-hidden group cursor-pointer">
                <img
                  src={video.thumbnail}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-all duration-1000"
                />
                <div className="relative z-10 w-24 h-24 bg-white/10 backdrop-blur-xl border border-white/30 rounded-full flex items-center justify-center text-white scale-90 group-hover:scale-110 transition-transform shadow-2xl">
                  <Play size={32} fill="currentColor" />
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-10 group animate-fade-in-up">
              <div className="flex items-center gap-6">
                <div className="w-16 h-1 bg-secondary rounded-full" />
                <h2 className="text-2xl md:text-3xl font-extrabold text-primary uppercase tracking-tight italic">
                  About This Video
                </h2>
              </div>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed font-medium italic border-l-4 border-slate-100 pl-6 md:pl-10 py-2 md:py-4">
                {video.description}
              </p>
            </div>

            {/* What You Will Learn */}
            <div className="space-y-12 animate-fade-in-up">
              <div className="flex items-center gap-6">
                <div className="w-16 h-1 bg-secondary rounded-full" />
                <h2 className="text-2xl md:text-3xl font-extrabold text-primary uppercase tracking-tight italic">
                  What This Video Covers
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                {video.whatYouWillLearn.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-5 md:p-8 bg-slate-50 rounded-2xl md:rounded-3xl border border-slate-100 hover:border-secondary transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-2xl bg-white shadow-xl flex items-center justify-center text-secondary shrink-0 group-hover:scale-110 transition-transform">
                      <CheckCircle2 size={18} />
                    </div>
                    <p className="text-[12px] font-bold text-slate-600 uppercase tracking-widest leading-relaxed pt-1">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-12">
            {/* Personal Guidance Context Box */}
            <div className="p-10 bg-primary rounded-[3.5rem] text-white space-y-10 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/10 blur-[60px] rounded-full group-hover:scale-150 transition-transform duration-1000" />
              <div className="relative z-10 space-y-8">
                <h3 className="text-2xl font-extrabold uppercase tracking-tighter italic leading-tight">
                  Need Personal <br />
                  <span className="text-secondary">Guidance?</span>
                </h3>
                <p className="text-white/60 text-sm italic font-light leading-relaxed">
                  If you would like a personalised treatment plan, hospital
                  recommendation, or medical opinion, our team is here for you.
                </p>
                <Link
                  to="/contact"
                  className="block w-full bg-secondary text-white text-center font-bold py-5 rounded-2xl uppercase tracking-widest text-[10px] hover:bg-white hover:text-primary transition-all shadow-xl"
                >
                  Request Medical Opinion
                </Link>
              </div>
            </div>

            {/* Related Section */}
            <div className="space-y-8">
              <h4 className="text-sm font-extrabold text-primary uppercase tracking-[0.4em] border-l-4 border-secondary pl-4">
                Related Videos
              </h4>
              <div className="space-y-6">
                {relatedVideos.map((rv, idx) => (
                  <Link
                    to={`/videos/${rv.id}`}
                    key={idx}
                    className="flex gap-4 group"
                  >
                    <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0 relative bg-slate-200 shadow-lg">
                      <img
                        src={rv.thumbnail}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        alt={rv.title}
                      />
                      <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                        <Play
                          size={10}
                          fill="currentColor"
                          className="text-white"
                        />
                      </div>
                    </div>
                    <div className="space-y-2 py-1">
                      <h5 className="text-[11px] font-bold text-primary uppercase leading-tight italic group-hover:text-secondary transition-colors line-clamp-2">
                        {rv.title}
                      </h5>
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                        <Clock size={10} /> {rv.duration}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Assurance Promise */}
      <section className="py-24 px-8 border-t border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 text-center md:text-left">
          <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-secondary border border-slate-100 shadow-xl">
            <ShieldCheck size={32} />
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-primary uppercase tracking-[0.4em]">
              Our Video Ethics
            </h4>
            <p className="text-slate-500 font-medium italic">
              "We only show real hospitals, real doctors, and real processes to
              build real trust."
            </p>
          </div>
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

export default VideoDetail;
