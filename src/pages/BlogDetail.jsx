import { useParams, Link } from "react-router-dom";
import {
  Calendar,
  Tag,
  ArrowLeft,
  ChevronRight,
  ShieldCheck,
  Send,
  CalendarDays,
  ArrowRight,
  MessageSquare,
} from "lucide-react";
import { blogData } from "../data/blogData";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id === parseInt(id));

  // Find related articles (excluding current)
  const relatedArticles = blogData
    .filter((b) => b.id !== parseInt(id))
    .slice(0, 3);

  if (!blog) {
    return (
      <div className="py-40 text-center space-y-8">
        <h2 className="text-4xl font-extrabold text-primary uppercase italic">
          Article Not Found
        </h2>
        <Link
          to="/blog"
          className="text-secondary font-bold uppercase tracking-widest border-b-2 border-secondary pb-1"
        >
          Back to Knowledge Hub
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* 1. Article Header & Hero */}
      <section className="relative pt-[120px] pb-24 px-8 bg-slate-900 overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 space-y-12">
          <Link
            to="/blog"
            className="inline-flex items-center gap-3 text-white/50 hover:text-secondary transition-colors text-[10px] font-bold uppercase tracking-[0.3em]"
          >
            <ArrowLeft size={16} /> Back to Blog
          </Link>
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-secondary text-[11px] font-bold uppercase tracking-[0.2em]">
              <span className="px-4 py-1.5 bg-secondary/10 border border-secondary/20 rounded-full">
                {blog.category}
              </span>
              <span className="flex items-center gap-2">
                <CalendarDays size={14} /> {blog.date}
              </span>
            </div>
            <h1 className="text-4xl md:text-7xl font-extrabold text-white tracking-tighter uppercase italic leading-none">
              {blog.title}
            </h1>
          </div>

          <div className="relative rounded-[4rem] overflow-hidden border-8 border-white/5 aspect-video shadow-2xl">
            <img
              src={blog.image}
              className="w-full h-full object-cover"
              alt={blog.title}
            />
          </div>
        </div>
      </section>

      {/* 2. Article Content Section */}
      <section className="py-32 px-8 bg-white">
        <div className="max-w-4xl mx-auto space-y-20">
          {/* Introduction */}
          <div className="space-y-10">
            <div className="flex items-center gap-6">
              <div className="w-16 h-1 bg-secondary rounded-full" />
              <h2 className="text-2xl font-bold text-primary uppercase tracking-tighter italic">
                Introduction
              </h2>
            </div>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-medium italic border-l-4 border-slate-100 pl-10 py-4">
              {blog.introduction}
            </p>
          </div>

          {/* Main Content */}
          <div className="prose prose-2xl prose-slate max-w-none text-slate-500 font-medium leading-loose">
            {blog.content.split("\n\n").map((para, i) => (
              <p key={i} className="mb-10">
                {para}
              </p>
            ))}
          </div>

          {/* How this helps Section */}
          <div className="p-12 md:p-16 bg-slate-50 rounded-[4rem] border border-slate-100 space-y-10 group hover:border-secondary transition-all">
            <div className="flex items-center gap-6">
              <div className="w-12 h-1 bg-secondary rounded-full" />
              <h3 className="text-3xl font-extrabold text-primary uppercase tracking-tighter italic">
                How This Helps You as a Patient
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                "Understand your treatment options better",
                "Ask the right questions to doctors",
                "Plan your medical journey more confidently",
                "Avoid confusion and unnecessary stress",
                "Make informed and safe decisions",
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-xl bg-white shadow-xl flex items-center justify-center text-secondary shrink-0">
                    <ChevronRight size={16} />
                  </div>
                  <p className="text-[13px] font-bold text-slate-600 uppercase tracking-widest leading-relaxed pt-1">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Personal Guidance Box */}
          <div className="p-12 md:p-20 bg-primary rounded-[4rem] text-white space-y-8 shadow-2xl relative overflow-hidden text-center group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/10 blur-[100px] rounded-full group-hover:scale-125 transition-transform" />
            <div className="relative z-10 space-y-8">
              <h3 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tighter italic leading-none">
                Need Personal Guidance?
              </h3>
              <p className="text-white/60 text-lg md:text-xl font-light italic max-w-2xl mx-auto">
                Every patient’s condition is different. If you would like a
                personalised medical opinion, hospital recommendation, or cost
                estimate, our team at Healing Escape is here to help you.
              </p>
              <div className="pt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-4 bg-secondary text-white font-bold py-5 px-12 rounded-2xl uppercase tracking-widest text-xs hover:bg-white hover:text-primary transition-all"
                >
                  Request Medical Opinion <Send size={16} />
                </Link>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="text-center pt-20 border-t border-slate-100 space-y-8">
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
            <p className="text-2xl md:text-4xl font-extrabold text-primary uppercase tracking-tighter italic leading-tight">
              "Choosing the right treatment and the right medical team is
              crucial for a successful outcome. Your medical journey to India
              can be safe, smooth, and stress-free."
            </p>
          </div>
        </div>
      </section>

      {/* 3. Related Articles */}
      <section className="py-32 px-8 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center space-y-4">
            <h4 className="text-secondary font-bold uppercase tracking-[0.4em] text-xs">
              Knowledge Hub
            </h4>
            <h2 className="text-4xl md:text-6xl font-extrabold text-primary uppercase tracking-tighter italic">
              Related Articles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {relatedArticles.map((art, idx) => (
              <Link
                to={`/blog/${art.id}`}
                key={idx}
                className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 hover:shadow-2xl transition-all h-full flex flex-col"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={art.image}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    alt={art.title}
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col justify-between space-y-4">
                  <h4 className="text-lg font-bold text-primary uppercase tracking-tight italic group-hover:text-secondary transition-colors line-clamp-2">
                    {art.title}
                  </h4>
                  <div className="flex items-center gap-2 text-secondary group-hover:gap-4 transition-all">
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em]">
                      Read More
                    </span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
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

export default BlogDetail;
