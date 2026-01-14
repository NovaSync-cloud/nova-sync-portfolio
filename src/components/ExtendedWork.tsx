import { motion } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { getExtendedProjects } from "@/data/projects";

const ExtendedWork = () => {
  const extendedProjects = getExtendedProjects();

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
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Link
                to={`/project/${project.id}`}
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
              </Link>
              
              {/* External link */}
              <div className="mt-2 flex justify-end">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-accent transition-colors"
                >
                  Visit <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExtendedWork;
