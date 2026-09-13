import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ShieldCheck,
  Award,
  Users,
  Lightbulb,
  Heart,
  TrendingUp,
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  CheckCircle2,
} from 'lucide-react';
import Hero from '@/components/ui/Hero';
import SectionHeading from '@/components/ui/SectionHeading';
import CTASection from '@/components/ui/CTASection';
import { ABOUT_VALUES, COMPANY, getWhatsAppUrl, getMailtoUrl } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about But Bhavani Enterprises — premier manufacturer of sequin yarns, fancy yarns, and decorative textile materials in Surat, Gujarat.',
};

export default function AboutPage() {
  const valueIcons = [
    <Award key="1" className="w-6 h-6 text-gold" />,
    <Users key="2" className="w-6 h-6 text-gold" />,
    <Lightbulb key="3" className="w-6 h-6 text-gold" />,
    <Heart key="4" className="w-6 h-6 text-gold" />,
    <TrendingUp key="5" className="w-6 h-6 text-gold" />,
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* ─── Hero Section ──────────────────────────────── */}
      <Hero
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'About Us', href: '/about' },
        ]}
        heading="Crafting Excellence in Every Thread"
        goldSubtitle="About But Bhavani Enterprises"
        description="Headquartered in the vibrant textile capital of Surat, Gujarat, But Bhavani Enterprises is dedicated to innovating and manufacturing premium sequin and fancy yarns that bring sparkle, elegance, and distinction to fashion worldwide."
        image="/images/about-machinery.jpg"
        imageAlt="But Bhavani Enterprises yarn manufacturing facility"
        buttons={[
          { label: 'Explore Products', href: '/products', variant: 'gold' },
          { label: 'Get in Touch', href: '/contact', variant: 'outline' },
        ]}
      />

      {/* ─── Who We Are ────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <SectionHeading
                label="Who We Are"
                heading="Pioneering Decorative &amp; Sequin Yarn Manufacturing"
                centered={false}
              />
              <div className="mt-6 space-y-4 text-gray-600 leading-relaxed text-base">
                <p>
                  But Bhavani Enterprises was established with a singular vision: to empower textile
                  designers, garment manufacturers, and embroidery artisans with yarns that combine
                  aesthetic magnificence with flawless machine runnability.
                </p>
                <p>
                  From our state-of-the-art production hub in Surat, Gujarat, we craft an extensive
                  portfolio of sequin yarns, multi-color yarns, metallic threads, and custom fancy
                  yarns. Every strand is engineered to withstand high-tension embroidery machines and
                  industrial looms without snapping, peeling, or losing its radiant shine.
                </p>
                <p>
                  With a client-first philosophy, we work hand-in-hand with our partners to supply
                  custom color palettes, specialized spool configurations, and rapid turnaround
                  orders to keep production lines running without delay.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-off-white border border-light-gray flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                  <span className="text-sm font-semibold text-dark-text">
                    Modern Precision Machinery
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-off-white border border-light-gray flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                  <span className="text-sm font-semibold text-dark-text">
                    Multi-tier Quality Inspection
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-off-white border border-light-gray flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                  <span className="text-sm font-semibold text-dark-text">
                    Custom Yarn Development
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-off-white border border-light-gray flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                  <span className="text-sm font-semibold text-dark-text">
                    Pan-India &amp; Global Distribution
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Contact Highlight Column */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-navy-deep text-white p-6 sm:p-8 rounded-2xl border border-card-border shadow-xl">
                <h3 className="font-heading text-xl font-bold mb-3 text-white">
                  Direct Manufacturer Access
                </h3>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                  Have questions about yarn counts, colors, or custom spooling? Reach our Surat
                  production team directly.
                </p>

                <div className="space-y-4">
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3.5 rounded-xl bg-navy-dark hover:bg-gold/20 border border-card-border transition-all text-white group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-green-600/20 text-green-400 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400">WhatsApp Production Desk</div>
                      <div className="text-sm font-semibold group-hover:text-gold transition-colors">
                        {COMPANY.phone1}
                      </div>
                    </div>
                  </a>

                  <a
                    href={getMailtoUrl()}
                    className="flex items-center gap-4 p-3.5 rounded-xl bg-navy-dark hover:bg-gold/20 border border-card-border transition-all text-white group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gold/20 text-gold flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-xs text-gray-400">Email Inquiries</div>
                      <div className="text-sm font-semibold truncate group-hover:text-gold transition-colors">
                        {COMPANY.email}
                      </div>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-3.5 rounded-xl bg-navy-dark border border-card-border">
                    <div className="w-10 h-10 rounded-lg bg-gold/20 text-gold flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="text-xs text-gray-300 leading-relaxed">
                      <strong className="text-white block text-sm mb-0.5">Surat Facility:</strong>
                      {COMPANY.address.line1} {COMPANY.address.line2}, {COMPANY.address.line3},{' '}
                      {COMPANY.address.line4}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Core Values ───────────────────────────────── */}
      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Core Values"
            heading="The Principles That Guide Us"
            description="Our foundation is built upon uncompromising quality, creative innovation, and customer-centered relationships."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {ABOUT_VALUES.map((val, idx) => (
              <div
                key={val.title}
                className="bg-white p-6 sm:p-8 rounded-2xl border border-light-gray card-hover flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gold/15 flex items-center justify-center mb-5">
                    {valueIcons[idx % valueIcons.length]}
                  </div>
                  <h3 className="font-semibold text-dark-text text-xl mb-3">{val.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{val.description}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-light-gray flex items-center justify-between text-xs text-gold font-semibold uppercase tracking-wider">
                  <span>Priority #{idx + 1}</span>
                  <div className="w-8 h-[2px] bg-gold/40" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Section ───────────────────────────────── */}
      <CTASection
        heading="Looking for Custom Yarn Solutions?"
        description="Whether you require custom color matching, unique sequin dimensions, or high-volume wholesale contracts, But Bhavani Enterprises is ready to deliver."
        buttonText="CONTACT US"
        buttonHref="/contact"
        backgroundImage="/images/hero-sequin.jpg"
      />
    </div>
  );
}
