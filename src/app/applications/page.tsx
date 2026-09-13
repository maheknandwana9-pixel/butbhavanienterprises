import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import Hero from '@/components/ui/Hero';
import SectionHeading from '@/components/ui/SectionHeading';
import CTASection from '@/components/ui/CTASection';
import { APPLICATION_CARDS, APPLICATION_FEATURES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Applications',
  description:
    'Discover the versatile applications of But Bhavani Enterprises sequin and fancy yarns across apparel, embroidery, accessories, home decor, and textiles.',
};

export default function ApplicationsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ─── Hero Section ──────────────────────────────── */}
      <Hero
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Applications', href: '/applications' },
        ]}
        heading="Endless Creative Possibilities"
        goldSubtitle="Where Our Decorative Yarns Bring Value"
        description="From haute couture runways to high-volume textile mills, our sequin yarns and fancy threads provide the shimmer, texture, and structural resilience demanded by leading creators."
        image="/images/hero-sequin.jpg"
        imageAlt="Textile and fashion applications of sequin yarn"
        buttons={[
          { label: 'View Products', href: '/products', variant: 'gold' },
          { label: 'Contact Us', href: '/contact', variant: 'outline' },
        ]}
      />

      {/* ─── Feature Strip ─────────────────────────────── */}
      <section className="bg-navy-dark border-y border-card-border py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {APPLICATION_FEATURES.map((feature) => (
              <div
                key={feature}
                className="flex items-center justify-center gap-2.5 text-center p-2 text-white text-xs sm:text-sm font-medium"
              >
                <Sparkles className="w-4 h-4 text-gold shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Applications Grid ─────────────────────────── */}
      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Industry Solutions"
            heading="Transforming Textures Across Diverse Sectors"
            description="Explore how manufacturers, designers, and creative workshops use But Bhavani Enterprises yarns to create standout products."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-12">
            {APPLICATION_CARDS.map((app) => (
              <div
                key={app.title}
                className="bg-white rounded-2xl border border-light-gray overflow-hidden card-hover flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                    <Image
                      src={app.image}
                      alt={app.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-bold text-dark-text mb-2.5">
                      {app.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {app.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-wider hover:text-gold-light transition-colors group"
                  >
                    Enquire for this application
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Production Readiness Highlights ───────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-navy-deep p-8 sm:p-12 lg:p-16 text-white border border-card-border relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="text-gold text-xs font-semibold uppercase tracking-[0.2em]">
                  Industrial Durability
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold mt-3 mb-6">
                  Engineered to Run Smoothly on High-Speed Machines
                </h2>
                <p className="text-gray-300 text-base leading-relaxed mb-6">
                  One of the biggest pain points in sequin and fancy yarn usage is machine stoppage caused
                  by thread breakage or loose sequin entanglement. Our yarns undergo precise twisting
                  and locking processes to guarantee flawless high-speed throughput.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                    <span className="text-sm text-gray-200">Zero loose sequin shedding during high-speed feeding</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                    <span className="text-sm text-gray-200">High tensile strength polyester and metallic core filaments</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                    <span className="text-sm text-gray-200">Uniform spool tension preventing tangles and bird-nesting</span>
                  </div>
                </div>
              </div>

              <div className="bg-navy-dark/90 p-8 rounded-2xl border border-card-border text-center">
                <div className="text-gold font-heading text-4xl font-bold mb-2">Bulk Capacity</div>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                  Supplying continuous wholesale requirements for commercial garment and embroidery factories across Gujarat, Maharashtra, Delhi NCR, and nationwide.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-navy-deep px-8 py-3.5 rounded-lg text-sm font-semibold transition-all w-full sm:w-auto"
                >
                  Contact Us For Samples
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA Section ───────────────────────────────── */}
      <CTASection
        heading="Have a Unique Application or Requirement?"
        description="Contact our textile specialists in Surat to discuss technical specs, test sample lots, or place bulk manufacturing orders."
        buttonText="TALK TO OUR SPECIALISTS"
        buttonHref="/contact"
        backgroundImage="/images/sequin-yarn-gold.jpg"
      />
    </div>
  );
}
