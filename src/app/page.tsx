import Image from 'next/image';
import Link from 'next/link';
import {
  Sparkles,
  Palette,
  Factory,
  Settings,
  ShieldCheck,
  TrendingUp,
  Award,
  Layers,
  CheckCircle2,
  ArrowRight,
  Send,
  Sparkle
} from 'lucide-react';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import {
  HOME_ABOUT_FEATURES,
  HOME_PRODUCTS,
  HOME_APPLICATIONS,
  WHY_CHOOSE_FEATURES,
} from '@/lib/constants';

export default function HomePage() {
  const whyChooseIcons = [
    <ShieldCheck key="1" className="w-6 h-6 text-gold" />,
    <Palette key="2" className="w-6 h-6 text-gold" />,
    <Factory key="3" className="w-6 h-6 text-gold" />,
    <Settings key="4" className="w-6 h-6 text-gold" />,
    <Layers key="5" className="w-6 h-6 text-gold" />,
    <Award key="6" className="w-6 h-6 text-gold" />,
  ];

  return (
    <div className="overflow-x-hidden">
      {/* ── 1. HERO SECTION ── */}
      <section className="relative bg-navy-deep py-16 sm:py-24 lg:py-28 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-navy-medium rounded-full blur-2xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-semibold tracking-wider uppercase">
                <Sparkle className="w-3.5 h-3.5" />
                <span>Premier Textile Manufacturing</span>
              </div>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.12]">
                Premium Sequin &amp;{' '}
                <span className="text-gradient-gold block sm:inline">Fancy Yarn</span>{' '}
                <span className="block">Manufacturer</span>
              </h1>

              <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl">
                High-quality decorative yarns and sequin materials for garments, embroidery, fashion, textiles and creative applications.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Button href="/products" variant="gold" size="lg" icon="arrow">
                  VIEW PRODUCTS
                </Button>
                <Button href="/contact" variant="outline" size="lg">
                  CONTACT US
                </Button>
              </div>

              {/* Mini Highlights */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 border-t border-card-border/60">
                <div>
                  <p className="font-heading text-2xl sm:text-3xl font-bold text-gold">100%</p>
                  <p className="text-xs sm:text-sm text-gray-400 mt-0.5">Quality Assurance</p>
                </div>
                <div>
                  <p className="font-heading text-2xl sm:text-3xl font-bold text-gold">50+</p>
                  <p className="text-xs sm:text-sm text-gray-400 mt-0.5">Color Variations</p>
                </div>
                <div>
                  <p className="font-heading text-2xl sm:text-3xl font-bold text-gold">Surat</p>
                  <p className="text-xs sm:text-sm text-gray-400 mt-0.5">Textile Hub Base</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gold/20 aspect-[4/3] lg:aspect-[1/1] group">
                <Image
                  src="/images/hero-sequin.jpg"
                  alt="Premium sequin yarn rolls by But Bhavani Enterprises"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Decorative Accent Badges */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-navy-dark/95 border border-gold/30 p-4 rounded-xl shadow-xl backdrop-blur-sm hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white text-xs font-semibold">Luxury Sparkle &amp; Finish</p>
                  <p className="text-gray-400 text-[11px]">Precision wound spools</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. ABOUT US SECTION ── */}
      <section className="py-20 lg:py-28 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Machinery Image */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] group">
                <Image
                  src="/images/about-machinery.jpg"
                  alt="Modern textile manufacturing machinery at But Bhavani Enterprises"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-gold/30 rounded-2xl -z-10 hidden sm:block" />
            </div>

            {/* Right: Content */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-gold text-xs font-semibold uppercase tracking-[0.2em]">
                  ABOUT US
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-dark-text mt-2 leading-tight">
                  Quality You Can Trust, Craftsmanship You Deserve
                </h2>
                <div className="gold-line mt-4" />
              </div>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                But Bhavani Enterprises is a trusted name in the manufacturing of sequin yarns, fancy yarns and decorative materials. We focus on quality, consistency and customer satisfaction.
              </p>

              {/* 4 Feature Items with Gold Line Icons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                {HOME_ABOUT_FEATURES.map((feature) => (
                  <div
                    key={feature.title}
                    className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-light-gray/80 shadow-sm hover:border-gold/40 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-text text-sm">{feature.title}</h4>
                      <p className="text-gray-500 text-xs mt-0.5">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-3">
                <Button href="/about" variant="dark" size="md">
                  LEARN MORE ABOUT US
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. PRODUCTS SECTION ── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="OUR PRODUCTS"
            heading="Explore Our Premium Range"
            description="Manufactured with precision to add shimmer, texture and luxury to every garment and textile project."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-12 lg:mt-16">
            {HOME_PRODUCTS.map((prod) => (
              <div
                key={prod.title}
                className="group bg-white rounded-xl border border-light-gray overflow-hidden card-hover flex flex-col"
              >
                <div className="relative aspect-square overflow-hidden bg-gray-50">
                  <Image
                    src={prod.image}
                    alt={prod.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-heading font-bold text-dark-text text-lg mb-2">
                    {prod.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">
                    {prod.description}
                  </p>
                  <Link
                    href={`/products?category=${encodeURIComponent(
                      prod.title === 'Sequin Yarn'
                        ? 'sequin-yarn'
                        : prod.title === 'Fancy Yarn'
                        ? 'fancy-yarn'
                        : prod.title === 'Sequin Material'
                        ? 'sequin-material'
                        : 'custom-yarn'
                    )}`}
                    className="inline-flex items-center gap-2 text-gold font-semibold text-sm hover:text-gold-light transition-colors group/link"
                  >
                    VIEW PRODUCTS
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button href="/products" variant="gold" size="lg">
              VIEW ALL PRODUCTS
            </Button>
          </div>
        </div>
      </section>

      {/* ── 4. APPLICATIONS SECTION ── */}
      <section className="py-20 lg:py-28 bg-navy-deep text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="APPLICATIONS"
            heading="Where Our Products Shine"
            description="From high-fashion couture to traditional sarees and decorative crafts, our yarns elevate every creation."
            light
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 mt-12 lg:mt-16 text-center">
            {HOME_APPLICATIONS.map((app) => (
              <div key={app.title} className="group flex flex-col items-center">
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-full overflow-hidden border-2 border-gold/30 p-1 group-hover:border-gold transition-all duration-300 shadow-lg group-hover:shadow-gold/20">
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image
                      src={app.image}
                      alt={app.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 140px, 160px"
                    />
                  </div>
                </div>
                <h3 className="font-medium text-white text-sm sm:text-base mt-4 group-hover:text-gold transition-colors">
                  {app.title}
                </h3>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button href="/applications" variant="outline" size="md">
              EXPLORE ALL APPLICATIONS
            </Button>
          </div>
        </div>
      </section>

      {/* ── 5. WHY CHOOSE US SECTION ── */}
      <section className="py-20 lg:py-28 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="WHY CHOOSE US"
            heading="Committed to Quality, Focused on You"
            description="With advanced manufacturing facilities in Surat and strict quality standards, we are your trusted partner in decorative textiles."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 lg:mt-16">
            {WHY_CHOOSE_FEATURES.map((item, index) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-6 sm:p-8 border border-light-gray shadow-sm hover:shadow-xl hover:border-gold/40 transition-all duration-300 card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-5">
                  {whyChooseIcons[index % whyChooseIcons.length]}
                </div>
                <h3 className="font-heading font-bold text-dark-text text-xl mb-2.5">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. CTA SECTION ── */}
      <section className="relative bg-navy-deep py-20 lg:py-24 overflow-hidden">
        {/* Background Image overlay */}
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/hero-sequin.jpg"
            alt="Sequin Yarn Background"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-navy-deep/90 backdrop-blur-[2px]" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold text-xs font-semibold uppercase tracking-[0.2em] block mb-3">
            CUSTOM ORDERS &amp; WHOLESALE
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Looking for Custom Sequin or Fancy Yarn?
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Share your requirement with us and our team will get back to you with the best solution.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="gold" size="lg" icon="arrow">
              CONTACT US
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
