import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, User, Tag, Calendar, Share2, Bookmark, MessageCircle } from "lucide-react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getBlogPostById, blogPosts } from "@/data/blog";

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = getBlogPostById(Number(id));

  if (!post) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-background pt-20 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
            <Link to="/blog" className="text-accent hover:underline">
              ← Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{post.title} | Nova Sync Blog</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>
      
      <Navbar />
      
      <main className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="relative">
          <div className="aspect-[21/9] w-full overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          </div>
          
          <div className="container mx-auto px-6 relative z-10 -mt-48 pb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto"
            >
              <button
                onClick={() => navigate(-1)}
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </button>
              
              <div className="flex items-center gap-4 mb-6">
                <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground text-sm font-medium rounded-full">
                  {post.category}
                </span>
                <span className="flex items-center gap-1 text-muted-foreground text-sm">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                {post.title}
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between flex-wrap gap-4 pb-8 border-b border-border">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <User className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{post.author}</p>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <button className="p-3 rounded-full bg-card border border-border hover:border-accent/50 transition-colors">
                    <Share2 className="w-5 h-5 text-muted-foreground" />
                  </button>
                  <button className="p-3 rounded-full bg-card border border-border hover:border-accent/50 transition-colors">
                    <Bookmark className="w-5 h-5 text-muted-foreground" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Content Section */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <div 
                className="prose prose-lg prose-invert max-w-none
                  prose-headings:font-display prose-headings:text-foreground prose-headings:font-bold
                  prose-h1:text-4xl prose-h1:mt-12 prose-h1:mb-6
                  prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-accent
                  prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                  prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
                  prose-strong:text-foreground prose-strong:font-semibold
                  prose-ul:text-muted-foreground prose-ul:my-6
                  prose-ol:text-muted-foreground prose-ol:my-6
                  prose-li:my-2
                  prose-blockquote:border-l-accent prose-blockquote:text-muted-foreground prose-blockquote:italic
                  prose-code:text-accent prose-code:bg-card prose-code:px-2 prose-code:py-1 prose-code:rounded
                  prose-a:text-accent prose-a:no-underline hover:prose-a:underline"
                dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
              />
            </motion.article>
          </div>
        </section>
        
        {/* Author Section */}
        <section className="py-12 bg-card">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex flex-col md:flex-row items-center gap-8 p-8 rounded-3xl bg-background border border-border">
                <div className="w-24 h-24 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <User className="w-12 h-12 text-accent" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                    {post.author}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Web Designer & Conversion Strategist specializing in high-converting websites, 
                    e-commerce solutions, and sales funnels. Helping businesses turn visitors into customers.
                  </p>
                  <Link 
                    to="/about"
                    className="text-accent hover:underline font-medium"
                  >
                    Learn more about me →
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-24 bg-background">
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-6xl mx-auto"
              >
                <h2 className="font-display text-3xl font-bold text-foreground mb-12">
                  Related <span className="text-accent">Articles</span>
                </h2>
                
                <div className="grid md:grid-cols-3 gap-8">
                  {relatedPosts.map((relatedPost, index) => (
                    <motion.article
                      key={relatedPost.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={`/blog/${relatedPost.id}`}
                        className="group block"
                      >
                        <div className="rounded-2xl overflow-hidden bg-card border border-border hover:border-accent/50 transition-all duration-300">
                          <div className="aspect-[16/10] overflow-hidden">
                            <img
                              src={relatedPost.image}
                              alt={relatedPost.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                          </div>
                          <div className="p-6">
                            <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-xs font-medium rounded-full mb-3">
                              {relatedPost.category}
                            </span>
                            <h3 className="font-display text-lg font-bold text-foreground group-hover:text-accent transition-colors line-clamp-2">
                              {relatedPost.title}
                            </h3>
                          </div>
                        </div>
                      </Link>
                    </motion.article>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        )}
        
        {/* CTA Section */}
        <section className="py-24 bg-card relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <MessageCircle className="w-16 h-16 text-accent mx-auto mb-6" />
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready to Transform Your Website?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let's discuss how we can apply these strategies to your business and create 
                a high-converting website that drives real results.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-full font-medium hover:bg-accent/90 transition-colors"
              >
                Start a Conversation
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

// Helper function to format markdown-like content to HTML
function formatContent(content: string): string {
  return content
    .split('\n')
    .map(line => {
      // Headers
      if (line.startsWith('### ')) {
        return `<h3>${line.slice(4)}</h3>`;
      }
      if (line.startsWith('## ')) {
        return `<h2>${line.slice(3)}</h2>`;
      }
      if (line.startsWith('# ')) {
        return `<h1>${line.slice(2)}</h1>`;
      }
      
      // Bold
      line = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      
      // Lists
      if (line.startsWith('- ')) {
        return `<li>${line.slice(2)}</li>`;
      }
      if (line.match(/^\d+\. /)) {
        return `<li>${line.replace(/^\d+\. /, '')}</li>`;
      }
      
      // Empty lines become paragraph breaks
      if (line.trim() === '') {
        return '';
      }
      
      // Regular paragraphs
      if (!line.startsWith('<')) {
        return `<p>${line}</p>`;
      }
      
      return line;
    })
    .join('\n');
}

export default BlogPost;
