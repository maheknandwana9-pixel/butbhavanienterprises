import {
  Sparkles, Palette, Factory, Settings, ShieldCheck, Users,
  Lightbulb, Heart, TrendingUp, Award, Clock, Headphones,
  Gem, Package, Truck, HandshakeIcon, Layers, Star,
  MapPin, Phone, Mail, Send, ArrowRight
} from 'lucide-react';

// ─── Company Info ────────────────────────────────
export const COMPANY = {
  name: 'But Bhavani Enterprises',
  shortName: 'BBE',
  tagline: 'Manufacturers of premium sequin yarns, fancy yarns and decorative materials for fashion, textiles and more.',
  address: {
    line1: '3rd Floor, Plot No.166,',
    line2: 'Jay Jagdishnagar Soc.-1,',
    line3: 'Surat, Varachha L.H. Road,',
    line4: 'Surat, Gujarat, 395006',
  },
  phone1: '+91 81401 10319',
  phone2: '+91 63559 40362',
  email: 'mayankdangodra2005@gmail.com',
  gst: '24HLXPD1465F1ZW',
  whatsappNumber: '918140110319',
  whatsappMessage: 'Hello But Bhavani Enterprises, I would like to enquire about your products.',
};

export const getWhatsAppUrl = (message?: string) =>
  `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(message || COMPANY.whatsappMessage)}`;

export const getMailtoUrl = () => `mailto:${COMPANY.email}`;

// ─── Navigation ──────────────────────────────────
export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Products', href: '/products', hasDropdown: true },
  { label: 'Applications', href: '/applications' },
  { label: 'Why Choose Us', href: '/why-choose-us' },
  { label: 'Contact Us', href: '/contact' },
];

// ─── Product Categories ──────────────────────────
export const PRODUCT_CATEGORIES = [
  { id: 'all', label: 'All Products', icon: 'Layers' },
  { id: 'sequin-yarn', label: 'Sequin Yarn', icon: 'Sparkles' },
  { id: 'fancy-yarn', label: 'Fancy Yarn', icon: 'Star' },
  { id: 'sequin-material', label: 'Sequin Material', icon: 'Gem' },
  { id: 'glitter-yarn', label: 'Glitter Yarn', icon: 'Sparkles' },
  { id: 'metallic-yarn', label: 'Metallic Yarn', icon: 'Award' },
  { id: 'custom-yarn', label: 'Custom Yarn', icon: 'Settings' },
  { id: 'new-arrivals', label: 'New Arrivals', icon: 'TrendingUp' },
];

// ─── Products ────────────────────────────────────
export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  isNew?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: 'sequin-yarn-gold-silver',
    name: 'Sequin Yarn - Gold & Silver',
    description: 'Premium gold and silver sequin yarn with brilliant shine and durability.',
    category: 'sequin-yarn',
    image: '/images/sequin-yarn-gold.jpg',
  },
  {
    id: 'sequin-yarn-rose-gold',
    name: 'Sequin Yarn - Rose Gold',
    description: 'Elegant rose gold sequin yarn perfect for fashion and decorative use.',
    category: 'sequin-yarn',
    image: '/images/sequin-yarn-rose.jpg',
  },
  {
    id: 'fancy-yarn-white',
    name: 'Fancy Yarn - White',
    description: 'Pure white fancy yarn with subtle shimmer for elegant textile creations.',
    category: 'fancy-yarn',
    image: '/images/fancy-yarn-white.jpg',
  },
  {
    id: 'fancy-yarn-purple',
    name: 'Fancy Yarn - Purple',
    description: 'Rich purple fancy yarn adding depth and luxury to any creation.',
    category: 'fancy-yarn',
    image: '/images/sequin-yarn-rose.jpg',
  },
  {
    id: 'glitter-yarn-assorted',
    name: 'Glitter Yarn - Assorted',
    description: 'Assorted glitter yarn collection with sparkling finishes.',
    category: 'glitter-yarn',
    image: '/images/sequin-yarn-gold.jpg',
  },
  {
    id: 'metallic-yarn-silver',
    name: 'Metallic Yarn - Silver',
    description: 'High-quality silver metallic yarn for professional textile work.',
    category: 'metallic-yarn',
    image: '/images/metallic-yarn-silver.jpg',
  },
  {
    id: 'sequin-material-6mm',
    name: 'Sequin Material - 6mm',
    description: 'Premium 6mm sequin material available in multiple colors and finishes.',
    category: 'sequin-material',
    image: '/images/sequin-yarn-gold.jpg',
  },
  {
    id: 'sequin-material-3mm',
    name: 'Sequin Material - 3mm',
    description: 'Fine 3mm sequin material ideal for detailed embroidery work.',
    category: 'sequin-material',
    image: '/images/sequin-yarn-rose.jpg',
  },
  {
    id: 'custom-yarn',
    name: 'Custom Yarn',
    description: 'Custom colors, patterns and designs manufactured to your exact specifications.',
    category: 'custom-yarn',
    image: '/images/hero-sequin.jpg',
  },
];

// ─── Home Page Features ──────────────────────────
export const HOME_ABOUT_FEATURES = [
  { title: 'Premium Quality', description: 'Finest raw materials' },
  { title: 'Wide Range of Colors', description: 'Extensive palette' },
  { title: 'Bulk Production Capacity', description: 'Large-scale orders' },
  { title: 'Custom Orders Available', description: 'Tailored solutions' },
];

export const HOME_PRODUCTS = [
  {
    title: 'Sequin Yarn',
    description: 'Shiny & premium sequin yarns in multiple colors.',
    image: '/images/sequin-yarn-gold.jpg',
  },
  {
    title: 'Fancy Yarn',
    description: 'Elegant fancy yarns for fashion & textiles.',
    image: '/images/fancy-yarn-white.jpg',
  },
  {
    title: 'Sequin Material',
    description: 'High-quality sequin material in various patterns.',
    image: '/images/sequin-yarn-rose.jpg',
  },
  {
    title: 'Custom Yarn',
    description: 'Custom colors & designs as per your requirement.',
    image: '/images/sequin-yarn-multi.jpg',
  },
];

export const HOME_APPLICATIONS = [
  { title: 'Garment & Apparel', image: '/images/hero-sequin.jpg' },
  { title: 'Embroidery', image: '/images/sequin-yarn-gold.jpg' },
  { title: 'Fashion Accessories', image: '/images/sequin-yarn-rose.jpg' },
  { title: 'Textile Industry', image: '/images/about-machinery.jpg' },
  { title: 'Home Décor', image: '/images/fancy-yarn-white.jpg' },
  { title: 'Craft & Creative Work', image: '/images/sequin-yarn-multi.jpg' },
];

export const WHY_CHOOSE_FEATURES = [
  {
    title: 'Quality Material',
    description: 'We use only high-quality raw materials to ensure superior products.',
  },
  {
    title: 'Wide Color Range',
    description: 'A vast collection of colors, patterns and finishes to suit every need.',
  },
  {
    title: 'Bulk Orders',
    description: 'Our modern machinery ensures large production capacity for bulk orders.',
  },
  {
    title: 'Custom Solutions',
    description: 'Customized yarns and sequin materials as per your specific requirements.',
  },
  {
    title: 'Consistent Supply',
    description: 'Every batch is manufactured with strict quality control for uniformity.',
  },
  {
    title: 'Competitive Pricing',
    description: 'Best quality at competitive prices for all your textile needs.',
  },
];

// ─── Applications Page ───────────────────────────
export const APPLICATION_CARDS = [
  {
    title: 'Garment & Apparel',
    description: 'Our sequin yarns and fancy threads add sparkle and elegance to designer garments, sarees, lehengas and modern fashion wear.',
    image: '/images/hero-sequin.jpg',
  },
  {
    title: 'Embroidery',
    description: 'Perfect for machine and hand embroidery work, our yarns provide consistent quality and brilliant shine for intricate designs.',
    image: '/images/sequin-yarn-gold.jpg',
  },
  {
    title: 'Fashion Accessories',
    description: 'From bags and clutches to hair accessories and jewelry, our materials bring glamour to every fashion accessory.',
    image: '/images/sequin-yarn-rose.jpg',
  },
  {
    title: 'Home Décor',
    description: 'Transform interiors with our decorative yarns — perfect for cushions, curtains, table runners and wall art.',
    image: '/images/fancy-yarn-white.jpg',
  },
  {
    title: 'Craft & Creative Work',
    description: 'Ideal for DIY crafts, scrapbooking, card making and creative art projects with a touch of sparkle.',
    image: '/images/sequin-yarn-multi.jpg',
  },
  {
    title: 'Textile Industry',
    description: 'Our yarns meet the demanding standards of the textile industry for weaving, knitting and fabric production.',
    image: '/images/about-machinery.jpg',
  },
  {
    title: 'Event & Decoration',
    description: 'Make events memorable with our decorative materials perfect for weddings, parties, stage decorations and celebrations.',
    image: '/images/hero-sequin.jpg',
  },
  {
    title: 'Gift & Packaging',
    description: 'Add a premium touch to gift wrapping and packaging with our glitter and metallic yarn collections.',
    image: '/images/sequin-yarn-gold.jpg',
  },
];

export const APPLICATION_FEATURES = [
  'Wide Range of Colors',
  'Premium Quality',
  'Custom Solutions',
  'Bulk Orders',
  'Timely Delivery',
];

// ─── Why Choose Us Page ──────────────────────────
export const COMMITMENT_CARDS = [
  {
    title: 'Premium Quality',
    description: 'We use high-quality raw materials and advanced manufacturing techniques to ensure superior products.',
  },
  {
    title: 'Wide Range of Colors & Designs',
    description: 'A vast collection of colors, patterns and finishes to match the unique needs of every customer.',
  },
  {
    title: 'Custom Solutions',
    description: 'We provide customized yarns and sequin materials as per your requirements in color, size and design.',
  },
  {
    title: 'Advanced Production Capacity',
    description: 'Our modern machinery and skilled team ensure consistent quality and large production capacity.',
  },
  {
    title: 'Consistency You Can Rely On',
    description: 'Every batch is manufactured with strict quality control to maintain uniformity and reliability.',
  },
  {
    title: 'Customer First Approach',
    description: 'We believe in long-term relationships built on trust, communication and customer satisfaction.',
  },
];

export const STAND_OUT_ITEMS = [
  'High Quality Raw Material',
  'Skilled Workforce',
  'Competitive Pricing',
  'Bulk Order Capability',
  'Timely Delivery',
  'Reliable Support',
];

// ─── About Page Values ───────────────────────────
export const ABOUT_VALUES = [
  {
    title: 'Quality First',
    description: 'We never compromise on the quality of our products. Every yarn and sequin material is crafted with precision.',
  },
  {
    title: 'Customer Focus',
    description: 'Our customers are at the heart of everything we do. We listen, understand and deliver beyond expectations.',
  },
  {
    title: 'Innovation',
    description: 'We continuously invest in new technologies and designs to stay ahead in the textile industry.',
  },
  {
    title: 'Integrity',
    description: 'Honest business practices and transparent communication are the foundation of our relationships.',
  },
  {
    title: 'Consistency',
    description: 'From the first order to the hundredth, we maintain the same high standard of quality and service.',
  },
];

// ─── Footer Product Links ────────────────────────
export const FOOTER_PRODUCTS = [
  { label: 'Sequin Yarn', href: '/products?category=sequin-yarn' },
  { label: 'Fancy Yarn', href: '/products?category=fancy-yarn' },
  { label: 'Sequin Material', href: '/products?category=sequin-material' },
  { label: 'Glitter Yarn', href: '/products?category=glitter-yarn' },
  { label: 'Metallic Yarn', href: '/products?category=metallic-yarn' },
  { label: 'Custom Yarn', href: '/products?category=custom-yarn' },
  { label: 'All Products', href: '/products' },
];
