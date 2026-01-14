import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ExternalLink, Calendar, Tag, Layers } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { getProjectById, projects } from "@/data/projects";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = getProjectById(id || "");

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Project Not Found</h1>
          <Link to="/portfolio" className="text-accent hover:underline">
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  // Get related projects (same category, excluding current)
  const relatedProjects = projects
    .filter(p => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{project.title} | Nova Sync Portfolio</title>
        <meta name="description" content={project.description} />
      </Helmet>
      
      <Navbar />
      
      <main className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link 
                to="/portfolio" 
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Portfolio
              </Link>
              
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                    {project.category}
                  </span>
                  <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                    {project.title}
                  </h1>
                  <p className="text-xl text-muted-foreground mb-8">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="inline-flex items-center gap-1 px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                      >
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Button asChild size="lg" className="gap-2">
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      View Live Project
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative"
                >
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-2xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl bg-accent/10 -z-10" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Project Details */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 bg-background rounded-xl border border-border"
              >
                <Calendar className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-display text-lg font-bold text-foreground mb-2">Project Type</h3>
                <p className="text-muted-foreground">{project.category}</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-6 bg-background rounded-xl border border-border"
              >
                <Layers className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-display text-lg font-bold text-foreground mb-2">Services</h3>
                <p className="text-muted-foreground">{project.tags.join(", ")}</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-6 bg-background rounded-xl border border-border"
              >
                <ExternalLink className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-display text-lg font-bold text-foreground mb-2">Live URL</h3>
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent hover:underline break-all"
                >
                  {project.url.replace('https://', '')}
                </a>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <section className="py-16">
            <div className="container mx-auto px-6">
              <h2 className="font-display text-3xl font-bold text-foreground mb-8">
                Related Projects
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {relatedProjects.map((relatedProject, index) => (
                  <motion.div
                    key={relatedProject.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link 
                      to={`/project/${relatedProject.id}`}
                      className="group block"
                    >
                      <div className="relative overflow-hidden rounded-xl border border-border hover:border-accent/50 transition-all">
                        <div className="aspect-[4/3] overflow-hidden">
                          <img
                            src={relatedProject.image}
                            alt={relatedProject.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <span className="inline-block px-2 py-0.5 bg-accent/20 text-accent text-xs font-medium rounded-full mb-2">
                            {relatedProject.category}
                          </span>
                          <h3 className="font-display text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                            {relatedProject.title}
                          </h3>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}
        
        {/* CTA Section */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Let's create something amazing together. Get in touch to discuss your next project.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/contact">Get in Touch</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/portfolio">View All Projects</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default ProjectDetail;
