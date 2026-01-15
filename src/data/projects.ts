import luxeCommerceScreenshot from "@/assets/projects/luxe-commerce-screenshot.jpg";
import maisonBoutiqueScreenshot from "@/assets/projects/maison-boutique-screenshot.jpg";
import launchCatalystScreenshot from "@/assets/projects/launch-catalyst-screenshot.jpg";
import anchorShineScreenshot from "@/assets/projects/anchor-shine-screenshot.jpg";
import insurePeaceScreenshot from "@/assets/projects/insure-peace-screenshot.jpg";
import noirBloomScreenshot from "@/assets/projects/noir-bloom-screenshot.jpg";
import buddyPetCareScreenshot from "@/assets/projects/buddy-pet-care-screenshot.jpg";
import heritageStitchScreenshot from "@/assets/projects/heritage-stitch-screenshot.jpg";
import dealerConnectScreenshot from "@/assets/projects/dealer-connect-screenshot.jpg";
import driveMoreScreenshot from "@/assets/projects/drive-more-screenshot.jpg";
import nexusWatchScreenshot from "@/assets/projects/nexus-watch-screenshot.jpg";
import luxeCarsScreenshot from "@/assets/projects/luxe-cars-screenshot.jpg";
import niorFlashScreenshot from "@/assets/projects/nior-flash-screenshot.jpg";
import vitalityRecoveryScreenshot from "@/assets/projects/vitality-recovery-screenshot.jpg";
import velourStudioScreenshot from "@/assets/projects/velour-studio-screenshot.jpg";
import unparallelLuxuryScreenshot from "@/assets/projects/unparallel-luxury-screenshot.jpg";
import auraCartelScreenshot from "@/assets/projects/aura-cartel-screenshot.jpg";
import etherealDynamicsScreenshot from "@/assets/projects/ethereal-dynamics-screenshot.jpg";
import primeRealtyScreenshot from "@/assets/projects/prime-realty-screenshot.jpg";

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
    image: luxeCommerceScreenshot,
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
    image: maisonBoutiqueScreenshot,
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
    image: launchCatalystScreenshot,
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
    image: anchorShineScreenshot,
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
    image: insurePeaceScreenshot,
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
    image: noirBloomScreenshot,
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
    image: buddyPetCareScreenshot,
    tags: ["Pet Care", "Services", "Branding"],
    url: "https://my-buddy-pet-care.netlify.app",
    tier: 'more',
  },
  {
    id: "heritage-stitch",
    title: "Heritage Stitch",
    category: "Fashion",
    description: "Artisanal fashion brand storytelling with heritage focus",
    image: heritageStitchScreenshot,
    tags: ["Fashion", "Artisanal", "Heritage"],
    url: "https://heritage-stitch.netlify.app",
    tier: 'more',
  },
  {
    id: "dealer-connect",
    title: "Dealer Connect",
    category: "Automotive",
    description: "Automotive dealership digital platform for lead generation",
    image: dealerConnectScreenshot,
    tags: ["Automotive", "Lead Gen", "Digital"],
    url: "https://dealer-connect.netlify.app",
    tier: 'more',
  },
  {
    id: "drive-more",
    title: "Drive More",
    category: "Automotive",
    description: "Automotive lead generation and sales optimization platform",
    image: driveMoreScreenshot,
    tags: ["Automotive", "Sales", "Optimization"],
    url: "https://drive-more.netlify.app",
    tier: 'more',
  },
  {
    id: "the-nexus-watch",
    title: "The Nexus Watch",
    category: "Luxury",
    description: "Luxury timepiece brand experience with premium aesthetics",
    image: nexusWatchScreenshot,
    tags: ["Luxury", "Timepiece", "Premium"],
    url: "https://the-nexus-watch.netlify.app",
    tier: 'more',
  },
  {
    id: "the-luxe-cars",
    title: "The Luxe Cars",
    category: "Automotive",
    description: "Premium automotive dealership presence with luxury focus",
    image: luxeCarsScreenshot,
    tags: ["Automotive", "Luxury", "Dealership"],
    url: "https://the-luxe-cars.netlify.app",
    tier: 'more',
  },
  {
    id: "nior-flash-sales",
    title: "Nior Flash Sales",
    category: "E-Commerce",
    description: "High-converting flash sale landing pages with urgency design",
    image: niorFlashScreenshot,
    tags: ["E-Commerce", "Flash Sales", "Conversion"],
    url: "https://nior-flash-sales.netlify.app",
    tier: 'more',
  },
  {
    id: "vitality-recovery",
    title: "Vitality Recovery",
    category: "Wellness",
    description: "Health & wellness brand identity with calming aesthetics",
    image: vitalityRecoveryScreenshot,
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
    image: velourStudioScreenshot,
    tags: ["Creative", "Studio", "Portfolio"],
    url: "https://velour-studio.netlify.app",
    tier: 'extended',
  },
  {
    id: "unparallel-luxury",
    title: "Unparallel Luxury",
    category: "Luxury",
    description: "Luxury automotive digital experience with premium feel",
    image: unparallelLuxuryScreenshot,
    tags: ["Luxury", "Automotive", "Premium"],
    url: "https://unparallel-luxury.netlify.app",
    tier: 'extended',
  },
  {
    id: "aura-cartel",
    title: "Aura Cartel",
    category: "Lifestyle",
    description: "Premium lifestyle brand identity with bold aesthetics",
    image: auraCartelScreenshot,
    tags: ["Lifestyle", "Brand", "Premium"],
    url: "https://aura-cartel.netlify.app",
    tier: 'extended',
  },
  {
    id: "ethereal-dynamics",
    title: "Ethereal Dynamics",
    category: "Tech",
    description: "Modern tech brand experience with futuristic design",
    image: etherealDynamicsScreenshot,
    tags: ["Tech", "Modern", "Futuristic"],
    url: "https://ethereal-dynamics.netlify.app",
    tier: 'extended',
  },
  {
    id: "prime-realty",
    title: "Prime Realty",
    category: "Real Estate",
    description: "Real estate brand and property showcase platform",
    image: primeRealtyScreenshot,
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
