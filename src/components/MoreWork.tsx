import { motion } from "framer-motion";
import { ExternalLink, Briefcase } from "lucide-react";

const moreProjects = [
  {
    id: 1,
    title: "My Buddy Pet Care",
    description: "Pet care services and brand identity",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&h=600&fit=crop",
    category: "Pet Care",
    url: "https://my-buddy-pet-care.netlify.app",
  },
  {
    id: 2,
    title: "Heritage Stitch",
    description: "Artisanal fashion brand storytelling",
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&h=600&fit=crop",
    category: "Fashion",
    url: "https://heritage-stitch.netlify.app",
  },
  {
    id: 3,
    title: "Dealer Connect",
    description: "Automotive dealership digital platform",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop",
    category: "Automotive",
    url: "https://dealer-connect.netlify.app",
  },
  {
    id: 4,
    title: "Drive More",
    description: "Automotive lead generation and sales",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop",
    category: "Automotive",
    url: "https://drive-more.netlify.app",
  },
  {
    id: 5,
    title: "The Nexus Watch",
    description: "Luxury timepiece brand experience",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=600&fit=crop",
    category: "Luxury",
    url: "https://the-nexus-watch.netlify.app",
  },
  {
    id: 6,
    title: "The Luxe Cars",
    description: "Premium automotive dealership presence",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop",
    category: "Automotive",
    url: "https://the-luxe-cars.netlify.app",
  },
  {
    id: 7,
    title: "Nior Flash Sales",
    description: "High-converting flash sale landing pages",
    image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=800&h=600&fit=crop",
    category: "E-Commerce",
    url: "https://nior-flash-sales.netlify.app",
  },
  {
    id: 8,
    title: "Vitality Recovery",
    description: "Health & wellness brand identity",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop",
    category: "Wellness",
    url: "https://vitality-recovery.netlify.app",
  },
];

const MoreWork = () => {
  return (
    <section id="more-work" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium tracking-wider uppercase mb-4">
            <Briefcase className="w-4 h-4 inline mr-2" />
            More Projects
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Additional Work
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Explore more projects across various industries — from automotive to wellness and insurance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {moreProjects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-xl bg-background border border-border hover:border-accent/50 transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="inline-block px-2 py-0.5 bg-accent/20 text-accent text-xs font-medium rounded-full mb-2">
                    {project.category}
                  </span>
                  <h3 className="font-display text-lg font-bold text-foreground group-hover:text-accent transition-colors flex items-center gap-2">
                    {project.title}
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-muted-foreground text-xs mt-1">{project.description}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreWork;
