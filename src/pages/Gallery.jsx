import { useState, useEffect } from "react";
import {
  X,
  Maximize2,
  Image as ImageIcon,
} from "lucide-react";
import PageHero from "../components/PageHero";
import Loader from "../components/Loader";
import { getGalleries } from "../apis/gallery";

const bannerSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=2000",
    title: "Our Gallery",
    subtitle:
      "A Glimpse into Our Hospitals, Facilities, and Patient Care Journey",
    buttonLabel: "View Gallery",
    buttonLink: "#gallery-grid",
  },
];

const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  // Extract unique categories from gallery data
  const galleryCategories = ["All", ...new Set(gallery.map(g => g.category))];

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const data = await getGalleries({ page: 1, limit: 50 });
        // Filter only active gallery items
        const activeGallery = data.gallery?.filter(g => g.isActive) || [];
        setGallery(activeGallery);
      } catch (error) {
        console.error("Error fetching gallery:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchGallery();
  }, []);

  const filteredImages =
    activeCategory === "All"
      ? gallery
      : gallery.filter((img) => img.category === activeCategory);

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
              Photo Gallery
            </h2>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <span className="font-bold text-secondary">{filteredImages.length}</span>
              <span>images found</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {galleryCategories.map((cat) => (
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

      {/* Gallery Grid Section */}
      <section id="gallery-grid" className="py-6 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          {filteredImages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredImages.map((item) => (
                <div
                  key={item._id}
                  onClick={() => setSelectedImage(item)}
                  className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer bg-slate-100 border border-slate-100 hover:shadow-md transition-all"
                >
                  <img
                    src={item.image}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                    alt={item.caption}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-12 h-12 bg-white text-primary rounded-full flex items-center justify-center shadow-lg">
                      <Maximize2 size={16} />
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 px-2 py-1 bg-white/90 rounded text-xs font-bold">
                    {item.category}
                  </div>

                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-primary/90 to-transparent">
                    <h3 className="text-white font-bold text-sm line-clamp-2">
                      {item.caption}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <ImageIcon size={48} className="mx-auto text-slate-200 mb-4" />
              <h3 className="text-lg font-bold text-primary uppercase italic">
                No images found in this category.
              </h3>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 text-white rounded-full flex items-center justify-center transition-all z-10"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <X size={20} />
          </button>
          <div
            className="max-w-4xl w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              className="w-full max-h-[80vh] object-contain rounded-xl"
              alt={selectedImage.caption}
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-xl">
              <div className="text-secondary text-xs font-bold uppercase mb-1">
                {selectedImage.category}
              </div>
              <h2 className="text-white text-xl font-bold">
                {selectedImage.caption}
              </h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;