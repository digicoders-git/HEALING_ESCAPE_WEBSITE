import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Calendar,
  ArrowLeft,
  ArrowRight,
  Send,
  CheckCircle2,
} from "lucide-react";
import PremiumLoader from "../components/PremiumLoader";
import { getBlogById, getBlogs } from "../apis/blog";
import DOMPurify from "dompurify";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const [blogData, allBlogsData] = await Promise.all([
          getBlogById(id),
          getBlogs({ page: 1, limit: 50 }),
        ]);

        setBlog(blogData.blog);

        // Get related articles (excluding current blog)
        const activeBlogs =
          allBlogsData.blogs?.filter((b) => b.isActive && b._id !== id) || [];
        setRelatedArticles(activeBlogs.slice(0, 3));
      } catch (error) {
        console.error("Error fetching blog data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogData();
  }, [id]);

  if (loading) {
    return <PremiumLoader />;
  }

  if (!blog) {
    return (
      <div className="py-40 text-center space-y-8">
        <h2 className="text-4xl font-extrabold text-primary uppercase italic">
          Article Not Found
        </h2>
        <Link
          to="/blogs"
          className="text-secondary font-bold uppercase tracking-widest border-b-2 border-secondary pb-1"
        >
          Back to Knowledge Hub
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden bg-gradient-to-br from-primary to-primary/50 pt-[72px]">
        <img
          src={blog.image}
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          alt={blog.title}
        />
        {/* <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/60 to-transparent" /> */}

        <div className="relative h-full flex items-center px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <Link
              to="/blogs"
              className="inline-flex items-center gap-2 text-white/70 hover:text-secondary transition-colors text-sm mb-4"
            >
              <ArrowLeft size={16} /> Back to Blog
            </Link>
            <div className="flex items-center justify-center gap-4 text-white text-sm mb-2">
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full border border-secondary/30">
                {blog.category}
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={14} /> {blog.date}
              </span>
            </div>
            <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight">
              {blog.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-6 px-4 md:px-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Introduction */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-1 bg-secondary rounded-full" />
              <h2 className="text-xl font-bold text-primary uppercase italic">
                Introduction
              </h2>
            </div>
            <p className="text-slate-600 leading-relaxed border-l-4 border-slate-100 pl-4">
              {blog.introduction}
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-1 bg-secondary rounded-full" />
              <h2 className="text-xl font-bold text-primary uppercase italic">
                Article Content
              </h2>
            </div>
            <div
              className="blog-content-wrapper prose prose-slate max-w-none prose-p:my-0 prose-headings:my-0"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(blog.content),
              }}
            ></div>
          </div>

          {/* Key Benefits */}
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-1 bg-secondary rounded-full" />
              <h3 className="text-lg font-bold text-primary uppercase italic">
                How This Helps You
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "Understand treatment options better",
                "Ask the right questions to doctors",
                "Plan your medical journey confidently",
                "Make informed decisions",
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-secondary shrink-0" />
                  <p className="text-sm text-slate-700">{point}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="p-6 bg-primary rounded-2xl text-white text-center space-y-4">
            <h3 className="text-xl font-bold uppercase italic">
              Need Personal Guidance?
            </h3>
            <p className="text-white/80">
              Get personalized medical opinion and hospital recommendations from
              our team.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-secondary text-white font-bold py-2 px-6 rounded-lg uppercase text-sm hover:bg-white hover:text-primary transition-colors"
            >
              Request Medical Opinion <Send size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-6 px-4 md:px-8 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-1 bg-secondary rounded-full" />
            <h2 className="text-xl font-bold text-primary uppercase italic">
              Related Articles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedArticles.map((art, idx) => (
              <Link
                to={`/blogs/${art._id}`}
                key={idx}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-md transition-all"
              >
                <div className="h-32 overflow-hidden">
                  <img
                    src={art.image}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                    alt={art.title}
                  />
                </div>
                <div className="p-4 space-y-2">
                  <h4 className="font-bold text-primary group-hover:text-secondary transition-colors line-clamp-2 text-sm">
                    {art.title}
                  </h4>
                  <div className="flex items-center gap-2 text-secondary">
                    <span className="text-xs font-bold uppercase">
                      Read More
                    </span>
                    <ArrowRight size={12} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;
