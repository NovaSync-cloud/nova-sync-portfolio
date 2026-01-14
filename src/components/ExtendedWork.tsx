import { motion } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";

const extendedProjects = [
  {
    id: 1,
    title: "Velour Studio",
    description: "Creative studio brand and portfolio",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop",
    category: "Creative",
    url: "https://velour-studio.netlify.app",
  },
  {
    id: 2,
    title: "Unparallel Luxury",
    description: "Luxury automotive digital experience",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&h=600&fit=crop",
    category: "Luxury",
    url: "https://unparallel-luxury.netlify.app",
  },
  {
    id: 3,
    title: "Aura Cartel",
    description: "Premium lifestyle brand identity",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&h=600&fit=crop",
    category: "Lifestyle",
    url: "https://aura-cartel.netlify.app",
  },
  {
    id: 4,
    title: "Ethereal Dynamics",
    description: "Modern tech brand experience",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
    category: "Tech",
    url: "https://ethereal-dynamics.netlify.app",
  },
  {
    id: 5,
    title: "Prime Realty",
    description: "Real estate brand and property showcase",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    category: "Real Estate",
    url: "https://prime-realty.netlify.app",
  },
];

const ExtendedWork = () => {
  return (
    <section id="extended-work" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium tracking-wider uppercase mb-4">
            <Sparkles className="w-4 h-4 inline mr-2" />
            Extended Portfolio
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            More Creative Work
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Explore additional projects spanning creative studios, real estate, and technology brands.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {extendedProjects.map((project, index) => (
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
              <div className="relative overflow-hidden rounded-xl bg-card border border-border hover:border-accent/50 transition-all duration-300">
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

export default ExtendedWork;
