import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Award,
  Palette,
  Settings,
  Factory,
  ShieldCheck,
  Users,
  CheckCircle,
  ArrowRight,
  Truck,
  Sparkles,
} from 'lucide-react';
import Hero from '@/components/ui/Hero';
import SectionHeading from '@/components/ui/SectionHeading';
import CTASection from '@/components/ui/CTASection';
import { COMMITMENT_CARDS, STAND_OUT_ITEMS, COMPANY } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Why Choose Us',
  description:
    'Discover why textile manufacturers, fashion houses, and embroidery designers choose But Bhavani Enterprises for their premium sequin and fancy yarn needs.',
};

export default function WhyChooseUsPage() {
  const icons = [
    <Award key="1" className="w-6 h-6 text-gold" />,
    <Palette key="2" className="w-6 h-6 text-gold" />,
    <Settings key="3" className="w-6 h-6 text-gold" />,
    <Factory key="4" className="w-6 h-6 text-gold" />,
    <ShieldCheck key="5" className="w-6 h-6 text-gold" />,
    <Users key="6" className="w-6 h-6 text-gold" />,
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* ─── Hero Section ──────────────────────────────── */}
      <Hero
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Why Choose Us', href: '/why-choose-us' },
        ]}
        heading="The But Bhavani Advantage"
        goldSubtitle="Precision Manufacturing • Dependable Quality • Unrivaled Finish"
        description="When you partner with But Bhavani Enterprises, you gain a dedicated manufacturing partner committed to exceptional product quality, reliable delivery schedules, and continuous innovation in decorative yarns."
        image="/images/about-machinery.jpg"
        imageAlt="Modern yarn manufacturing machinery at But Bhavani Enterprises"
        buttons={[
          { label: 'Contact Us', href: '/contact', variant: 'gold' },
          { label: 'View Products', href: '/products', variant: 'outline' },
        ]}
      />

      {/* ─── Commitment Cards ──────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Core Strengths"
            heading="Our Commitment to Quality &amp; Service"
            description="Every cone and spool of yarn leaving our facility reflects our passion for precision engineering and textile aesthetics."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {COMMITMENT_CARDS.map((card, idx) => (
              <div
                key={card.title}
                className="bg-off-white p-8 rounded-2xl border border-light-gray card-hover flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gold/15 flex items-center justify-center mb-6">
                    {icons[idx % icons.length]}
                  </div>
                  <h3 className="font-heading text-xl font-bold text-dark-text mb-3">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-light-gray flex items-center justify-between text-xs text-gold font-semibold uppercase tracking-wider">
                  <span>Advantage 0{idx + 1}</span>
                  <div className="w-8 h-[2px] bg-gold/40" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Stand Out Feature Banner ──────────────────── */}
      <section className="py-20 bg-navy-deep text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            label="Manufacturing Benchmarks"
            heading="Why We Stand Out in Surat's Textile Market"
            description="Our customer retention is driven by concrete manufacturing advantages that save our clients time, waste, and costs."
            light
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {STAND_OUT_ITEMS.map((item, idx) => (
              <div
                key={item}
                className="p-6 rounded-2xl bg-navy-dark border border-card-border hover:border-gold transition-all duration-300 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-gold/20 text-gold flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1">{item}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    Meticulously enforced across our entire Surat facility for zero-defect output.
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Infrastructure Metrics */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-2xl bg-navy-dark/70 border border-card-border">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold font-heading text-gold mb-1">100%</div>
              <div className="text-xs text-gray-300 uppercase tracking-wider">QC Inspected</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold font-heading text-gold mb-1">Surat</div>
              <div className="text-xs text-gray-300 uppercase tracking-wider">Manufacturing Base</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold font-heading text-gold mb-1">Custom</div>
              <div className="text-xs text-gray-300 uppercase tracking-wider">Yarn Development</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold font-heading text-gold mb-1">Pan-India</div>
              <div className="text-xs text-gray-300 uppercase tracking-wider">Prompt Delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA Section ───────────────────────────────── */}
      <CTASection
        heading="Let's Build Something Beautiful Together"
        description="Experience the difference of working with a genuine manufacturer. Request custom yarn samples or wholesale rates today."
        buttonText="CONTACT US"
        buttonHref="/contact"
        backgroundImage="/images/hero-sequin.jpg"
      />
    </div>
  );
}
