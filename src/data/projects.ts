export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  url: string;
  featured?: boolean;
  tier: 'featured' | 'more' | 'extended';
}

export const categories = [
  "All",
  "E-Commerce",
  "Automotive",
  "Luxury",
  "Lifestyle",
  "Wellness",
  "Video",
  "Branding",
  "Insurance",
  "Real Estate",
  "Tech",
  "Pet Care",
  "Fashion",
  "Creative",
];

export const projects: Project[] = [
  // Featured Projects (Tier 1) - Projects 1-6
  {
    id: "luxe-commerce",
    title: "Luxe Commerce Launch",
    category: "E-Commerce",
    description: "Premium e-commerce launch experience with high-converting landing pages",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=600&fit=crop",
    tags: ["E-Commerce", "Launch", "Luxury"],
    url: "https://luxe-commerce-launch.netlify.app",
    featured: true,
    tier: 'featured',
  },
  {
    id: "maison-boutique",
    title: "Maison Boutique",
    category: "E-Commerce",
    description: "Luxury boutique brand identity and digital presence",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    tags: ["Fashion", "Luxury", "E-Commerce"],
    url: "https://maisonboutique.netlify.app",
    featured: true,
    tier: 'featured',
  },
  {
    id: "launch-catalyst-video",
    title: "Launch Catalyst Video",
    category: "Video",
    description: "Video production and launch campaign for maximum impact",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop",
    tags: ["Video", "Launch", "Campaign"],
    url: "https://launch-catalyst-video.netlify.app",
    featured: true,
    tier: 'featured',
  },
  {
    id: "anchor-and-shine",
    title: "Anchor & Shine",
    category: "Branding",
    description: "Premium brand identity and web design for lifestyle brands",
    image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=800&h=600&fit=crop",
    tags: ["Branding", "Identity", "Web Design"],
    url: "https://anchor-and-shine.netlify.app",
    featured: true,
    tier: 'featured',
  },
  {
    id: "insure-peace-now",
    title: "Insure Peace Now",
    category: "Insurance",
    description: "Insurance lead generation platform with optimized conversions",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
    tags: ["Insurance", "Lead Gen", "Conversion"],
    url: "https://insure-peace-now.netlify.app",
    featured: true,
    tier: 'featured',
  },
  {
    id: "noir-and-bloom",
    title: "Noir & Bloom",
    category: "Lifestyle",
    description: "Elegant floral and lifestyle brand with sophisticated aesthetics",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=600&fit=crop",
    tags: ["Lifestyle", "E-Commerce", "Branding"],
    url: "https://noir-and-bloom.netlify.app",
    featured: true,
    tier: 'featured',
  },
  
  // More Projects (Tier 2) - Projects 7-14
  {
    id: "my-buddy-pet-care",
    title: "My Buddy Pet Care",
    category: "Pet Care",
    description: "Pet care services and brand identity with playful design",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&h=600&fit=crop",
    tags: ["Pet Care", "Services", "Branding"],
    url: "https://my-buddy-pet-care.netlify.app",
    tier: 'more',
  },
  {
    id: "heritage-stitch",
    title: "Heritage Stitch",
    category: "Fashion",
    description: "Artisanal fashion brand storytelling with heritage focus",
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&h=600&fit=crop",
    tags: ["Fashion", "Artisanal", "Heritage"],
    url: "https://heritage-stitch.netlify.app",
    tier: 'more',
  },
  {
    id: "dealer-connect",
    title: "Dealer Connect",
    category: "Automotive",
    description: "Automotive dealership digital platform for lead generation",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop",
    tags: ["Automotive", "Lead Gen", "Digital"],
    url: "https://dealer-connect.netlify.app",
    tier: 'more',
  },
  {
    id: "drive-more",
    title: "Drive More",
    category: "Automotive",
    description: "Automotive lead generation and sales optimization platform",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop",
    tags: ["Automotive", "Sales", "Optimization"],
    url: "https://drive-more.netlify.app",
    tier: 'more',
  },
  {
    id: "the-nexus-watch",
    title: "The Nexus Watch",
    category: "Luxury",
    description: "Luxury timepiece brand experience with premium aesthetics",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=600&fit=crop",
    tags: ["Luxury", "Timepiece", "Premium"],
    url: "https://the-nexus-watch.netlify.app",
    tier: 'more',
  },
  {
    id: "the-luxe-cars",
    title: "The Luxe Cars",
    category: "Automotive",
    description: "Premium automotive dealership presence with luxury focus",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop",
    tags: ["Automotive", "Luxury", "Dealership"],
    url: "https://the-luxe-cars.netlify.app",
    tier: 'more',
  },
  {
    id: "nior-flash-sales",
    title: "Nior Flash Sales",
    category: "E-Commerce",
    description: "High-converting flash sale landing pages with urgency design",
    image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=800&h=600&fit=crop",
    tags: ["E-Commerce", "Flash Sales", "Conversion"],
    url: "https://nior-flash-sales.netlify.app",
    tier: 'more',
  },
  {
    id: "vitality-recovery",
    title: "Vitality Recovery",
    category: "Wellness",
    description: "Health & wellness brand identity with calming aesthetics",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop",
    tags: ["Wellness", "Health", "Recovery"],
    url: "https://vitality-recovery.netlify.app",
    tier: 'more',
  },
  
  // Extended Projects (Tier 3) - Projects 15-19
  {
    id: "velour-studio",
    title: "Velour Studio",
    category: "Creative",
    description: "Creative studio brand and portfolio showcase",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop",
    tags: ["Creative", "Studio", "Portfolio"],
    url: "https://velour-studio.netlify.app",
    tier: 'extended',
  },
  {
    id: "unparallel-luxury",
    title: "Unparallel Luxury",
    category: "Luxury",
    description: "Luxury automotive digital experience with premium feel",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&h=600&fit=crop",
    tags: ["Luxury", "Automotive", "Premium"],
    url: "https://unparallel-luxury.netlify.app",
    tier: 'extended',
  },
  {
    id: "aura-cartel",
    title: "Aura Cartel",
    category: "Lifestyle",
    description: "Premium lifestyle brand identity with bold aesthetics",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&h=600&fit=crop",
    tags: ["Lifestyle", "Brand", "Premium"],
    url: "https://aura-cartel.netlify.app",
    tier: 'extended',
  },
  {
    id: "ethereal-dynamics",
    title: "Ethereal Dynamics",
    category: "Tech",
    description: "Modern tech brand experience with futuristic design",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
    tags: ["Tech", "Modern", "Futuristic"],
    url: "https://ethereal-dynamics.netlify.app",
    tier: 'extended',
  },
  {
    id: "prime-realty",
    title: "Prime Realty",
    category: "Real Estate",
    description: "Real estate brand and property showcase platform",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    tags: ["Real Estate", "Property", "Showcase"],
    url: "https://prime-realty.netlify.app",
    tier: 'extended',
  },
];

export const getFeaturedProjects = () => projects.filter(p => p.tier === 'featured');
export const getMoreProjects = () => projects.filter(p => p.tier === 'more');
export const getExtendedProjects = () => projects.filter(p => p.tier === 'extended');
export const getProjectById = (id: string) => projects.find(p => p.id === id);
export const getProjectsByCategory = (category: string) => 
  category === 'All' ? projects : projects.filter(p => p.category === category);
