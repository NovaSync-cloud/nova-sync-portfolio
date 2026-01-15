import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Clock, User, Search, BookOpen, TrendingUp, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts, categories } from "@/data/blog";

const stats = [
  { icon: BookOpen, label: "Articles Published", value: "50+" },
  { icon: TrendingUp, label: "Monthly Readers", value: "10K+" },
  { icon: Lightbulb, label: "Topics Covered", value: "15+" },
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>Blog | Nova Sync - Web Design & Conversion Insights</title>
        <meta name="description" content="Learn about web design, e-commerce, conversion optimization, and digital marketing. Insights and strategies from Nova Sync." />
      </Helmet>
      
      <Navbar />
      
      <main className="min-h-screen bg-background pt-20">
        {/* Dramatic Hero */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-card" />
            <div className="absolute bottom-0 left-1/4 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[250px]" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[200px]" />
          </div>
          
          {/* Floating Elements */}
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-40 right-20 w-20 h-20 border border-accent/20 rounded-2xl hidden lg:block"
          />
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            className="absolute bottom-40 left-40 w-16 h-16 bg-accent/10 rounded-full hidden lg:block"
          />
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-5xl mx-auto"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium tracking-wider uppercase mb-10"
              >
                <BookOpen className="w-5 h-5" />
                Nova Sync Blog
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight mb-8"
              >
                Insights &
                <span className="text-accent block mt-2">Strategies</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12"
              >
                Practical tips, proven strategies, and industry insights on web design, 
                e-commerce, and conversion optimization.
              </motion.p>
              
              {/* Search Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="max-w-xl mx-auto relative"
              >
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-14 pr-6 py-5 rounded-full bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent/50 text-lg"
                />
              </motion.div>
            </motion.div>
          </div>
          
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="container mx-auto px-6 mt-16"
          >
            <div className="flex justify-center gap-12 md:gap-20">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-6 h-6 text-accent mx-auto mb-2" />
                  <p className="font-display text-3xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
        
        {/* Categories */}
        <section className="py-6 bg-card border-y border-border sticky top-20 z-40">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-center gap-3 flex-wrap">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category
                      ? "bg-accent text-accent-foreground shadow-lg shadow-accent/30"
                      : "bg-background text-muted-foreground hover:text-foreground border border-border hover:border-accent/50"
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </section>
        
        {/* Featured Posts */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Featured <span className="text-accent">Articles</span>
              </h2>
            </motion.div>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-20">
              {filteredPosts.filter(p => p.featured).map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link to={`/blog/${post.id}`} className="group block cursor-pointer">
                    <div className="relative rounded-3xl overflow-hidden bg-card border border-border hover:border-accent/50 transition-all duration-500">
                      <div className="aspect-[16/9] overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                      </div>
                      
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <div className="flex items-center gap-4 mb-4">
                          <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground text-sm font-medium rounded-full">
                            {post.category}
                          </span>
                          <span className="flex items-center gap-1 text-muted-foreground text-sm">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                          </span>
                        </div>
                        <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-muted-foreground text-sm">
                            <User className="w-4 h-4" />
                            {post.author} · {post.date}
                          </div>
                          <span className="text-accent font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                            Read More <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
            
            {/* All Posts */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Latest <span className="text-accent">Posts</span>
              </h2>
            </motion.div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory + searchQuery}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredPosts.filter(p => !p.featured).map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link to={`/blog/${post.id}`} className="group block cursor-pointer">
                      <div className="rounded-2xl overflow-hidden bg-card border border-border hover:border-accent/50 transition-all duration-300 h-full">
                        <div className="aspect-[16/10] overflow-hidden relative">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-50" />
                        </div>
                        <div className="p-6">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-xs font-medium rounded-full">
                              {post.category}
                            </span>
                            <span className="text-muted-foreground text-xs">{post.readTime}</span>
                          </div>
                          <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-muted-foreground text-sm line-clamp-2 mb-4">{post.excerpt}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-muted-foreground text-xs">{post.date}</span>
                            <span className="text-accent font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                              Read More <ArrowRight className="w-3 h-3" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </motion.div>
            </AnimatePresence>
            
            {filteredPosts.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <p className="text-muted-foreground text-lg">No articles found matching your search.</p>
              </motion.div>
            )}
          </div>
        </section>
        
        {/* Newsletter CTA */}
        <section className="py-24 bg-card relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-accent/10 rounded-full blur-[300px]" />
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Never Miss an <span className="text-accent">Insight</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-10">
                Subscribe to get the latest articles, strategies, and exclusive content delivered 
                directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-full bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent/50"
                />
                <button className="px-8 py-4 bg-accent text-accent-foreground rounded-full font-medium hover:bg-accent/90 transition-colors whitespace-nowrap">
                  Subscribe
                </button>
              </div>
              <p className="text-muted-foreground text-sm mt-4">
                No spam, unsubscribe anytime.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Blog;
