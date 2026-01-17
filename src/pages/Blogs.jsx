import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Calendar,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import PageHero from "../components/PageHero";
import Loader from "../components/Loader";
import { getBlogs } from "../apis/blog";

const bannerSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=2000",
    title: "Blog & Knowledge Hub",
    subtitle: "Trusted Medical Information for International Patients",
    buttonLabel: "Read Articles",
    buttonLink: "#blogs",
  },
];

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");

  // Extract unique categories from blogs data
  const blogCategories = ["All", ...new Set(blogs.map(b => b.category))];

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await getBlogs({ page: 1, limit: 50 });
        // Filter only active blogs
        const activeBlogs = data.blogs?.filter(b => b.isActive) || [];
        setBlogs(activeBlogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const filteredBlogs =
    activeCategory === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === activeCategory);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader size={50} />
      </div>
    );
  }

  return (
    <div className="bg-white">
      <PageHero slides={bannerSlides} />

      {/* Filter Section */}
      <section className="py-6 px-4 md:px-8 bg-slate-50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-primary uppercase italic">
              Knowledge Hub
            </h2>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <span className="font-bold text-secondary">{filteredBlogs.length}</span>
              <span>articles found</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-secondary text-white"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-secondary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section id="blogs" className="py-6 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          {filteredBlogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredBlogs.map((blog) => (
                <Link
                  to={`/blogs/${blog._id}`}
                  key={blog._id}
                  className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-md transition-all"
                >
                  {/* Image Section */}
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={blog.image}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                      alt={blog.title}
                    />
                    <div className="absolute top-3 left-3 px-2 py-1 bg-white/90 rounded text-xs font-bold">
                      {blog.category}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-4 space-y-3">
                    <div className="flex items-center gap-2 text-slate-400 text-xs">
                      <Calendar size={12} className="text-secondary" />
                      <span>{blog.date}</span>
                    </div>
                    <h3 className="font-bold text-primary group-hover:text-secondary transition-colors line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-sm text-slate-500 line-clamp-2">
                      {blog.excerpt}
                    </p>
                    <div className="pt-2 flex items-center gap-2 text-secondary">
                      <span className="text-xs font-bold uppercase">Read More</span>
                      <ArrowRight size={12} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <BookOpen size={48} className="mx-auto text-slate-200 mb-4" />
              <h3 className="text-lg font-bold text-primary uppercase italic">
                No articles found in this category.
              </h3>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blogs;
