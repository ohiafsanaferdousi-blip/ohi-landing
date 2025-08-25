import Image from "next/image";
import { Heart, Sparkles } from "lucide-react";

const galleryImages = [
  {
    src: "/gallery/client-1.jpg",
    alt: "Bridal Makeup Look",
    category: "Bridal",
  },
  {
    src: "/gallery/client-2.jpg",
    alt: "Party Makeup Transformation",
    category: "Party",
  },
  {
    src: "/gallery/client-3.jpg",
    alt: "Fashion Makeup Style",
    category: "Fashion",
  },
  {
    src: "/gallery/client-4.jpg",
    alt: "Elegant Bridal Look",
    category: "Bridal",
  },
  {
    src: "/gallery/client-5.jpg",
    alt: "Glamorous Party Makeup",
    category: "Party",
  },
  {
    src: "/gallery/client-6.jpg",
    alt: "Professional Fashion Shoot",
    category: "Fashion",
  },
  {
    src: "/gallery/client-7.jpg",
    alt: "Special Occasion Makeup",
    category: "Party",
  },
  {
    src: "/gallery/client-8.JPG",
    alt: "Professional Fashion Shoot",
    category: "Fashion",
  },
  {
    src: "/gallery/client-9.JPG",
    alt: "Professional Fashion Shoot",
    category: "Fashion",
  },
  {
    src: "/gallery/client-10.JPG",
    alt: "Professional Fashion Shoot",
    category: "Fashion",
  },
  {
    src: "/gallery/client-11.JPG",
    alt: "Professional Fashion Shoot",
    category: "Fashion",
  },
  {
    src: "/gallery/client-12.JPG",
    alt: "Professional Fashion Shoot",
    category: "Fashion",
  },
  {
    src: "/gallery/client-13.JPG",
    alt: "Professional Fashion Shoot",
    category: "Fashion",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 animated-gradient" />
        <div className="absolute inset-0 space-dots opacity-20" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 reveal shine">
            Happy <span className="text-gradient">Clients</span>
          </h2>
          <p className="text-xl text-neutral-400 leading-relaxed reveal">
            Transforming visions into reality. See the beautiful results and
            happy faces of our satisfied clients.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden reveal"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="absolute inset-0">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-emerald-500" />
                    </div>
                    <span className="text-emerald-500 font-medium">
                      {image.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {image.alt}
                  </h3>
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-emerald-500" />
                    <span className="text-neutral-300 text-sm">
                      Beautiful Transformation
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-0 group-hover:scale-100">
                <div className="w-6 h-6 rounded-full bg-emerald-500/30 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-emerald-500/40" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl animate-float opacity-30" />
      <div
        className="absolute bottom-1/4 -right-20 w-40 h-40 bg-teal-500/20 rounded-full blur-3xl animate-float opacity-30"
        style={{ animationDelay: "-2s" }}
      />
    </section>
  );
}
