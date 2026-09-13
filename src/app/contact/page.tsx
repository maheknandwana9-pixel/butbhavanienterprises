import type { Metadata } from 'next';
import Link from 'next/link';
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  Send,
  Building2,
  FileText,
} from 'lucide-react';
import Hero from '@/components/ui/Hero';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { COMPANY, getWhatsAppUrl, getMailtoUrl } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact But Bhavani Enterprises in Surat, Gujarat. Reach our sales and factory team via WhatsApp, phone, or email for yarn inquiries and quotes.',
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ─── Hero Section ──────────────────────────────── */}
      <Hero
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Contact Us', href: '/contact' },
        ]}
        heading="Get in Touch With Our Team"
        goldSubtitle="Surat Factory &amp; Sales Headquarters"
        description="Whether you have an inquiry about our yarn collections, need custom samples, or want to discuss bulk wholesale pricing, our team is ready to assist you."
        image="/images/hero-sequin.jpg"
        imageAlt="Contact But Bhavani Enterprises"
        buttons={[
          { label: 'View Products', href: '/products', variant: 'gold' },
        ]}
      />

      {/* ─── Contact Information Cards ─────────────────── */}
      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Direct Channels"
            heading="Connect With Us Today"
            description="Choose the fastest way to communicate with our production and sales teams."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {/* WhatsApp */}
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-8 rounded-2xl border border-light-gray card-hover flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-lg font-bold text-dark-text mb-2">WhatsApp Chat</h3>
                <p className="text-gray-500 text-xs mb-4">Instant answers &amp; sample photos</p>
                <div className="text-sm font-semibold text-green-700">
                  {COMPANY.phone1}
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-light-gray text-xs font-bold text-green-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Chat on WhatsApp →
              </div>
            </a>

            {/* Phone Calling */}
            <div className="bg-white p-8 rounded-2xl border border-light-gray card-hover flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-gold/15 text-gold flex items-center justify-center mb-6">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-lg font-bold text-dark-text mb-2">Call Sales</h3>
                <p className="text-gray-500 text-xs mb-4">Direct calling for orders &amp; support</p>
                <div className="space-y-1.5">
                  <a
                    href={`tel:${COMPANY.phone1.replace(/\s/g, '')}`}
                    className="block text-sm font-semibold text-dark-text hover:text-gold transition-colors"
                  >
                    {COMPANY.phone1}
                  </a>
                  <a
                    href={`tel:${COMPANY.phone2.replace(/\s/g, '')}`}
                    className="block text-sm font-semibold text-dark-text hover:text-gold transition-colors"
                  >
                    {COMPANY.phone2}
                  </a>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-light-gray text-xs font-bold text-gold">
                Mon - Sat: 9:00 AM - 8:00 PM
              </div>
            </div>

            {/* Email Inquiries */}
            <a
              href={getMailtoUrl()}
              className="bg-white p-8 rounded-2xl border border-light-gray card-hover flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-gold/15 text-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-lg font-bold text-dark-text mb-2">Email Desk</h3>
                <p className="text-gray-500 text-xs mb-4">Official quotes &amp; corporate inquiries</p>
                <div className="text-sm font-semibold text-dark-text break-all group-hover:text-gold transition-colors">
                  {COMPANY.email}
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-light-gray text-xs font-bold text-gold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Send Email →
              </div>
            </a>

            {/* Factory Office */}
            <div className="bg-white p-8 rounded-2xl border border-light-gray card-hover flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-gold/15 text-gold flex items-center justify-center mb-6">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-lg font-bold text-dark-text mb-2">Manufacturing Hub</h3>
                <p className="text-gray-600 text-xs leading-relaxed mb-3">
                  {COMPANY.address.line1} {COMPANY.address.line2}, {COMPANY.address.line3}, {COMPANY.address.line4}
                </p>
                <div className="inline-flex items-center gap-1 text-[11px] font-mono text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  <FileText className="w-3 h-3 text-gold" />
                  GST: {COMPANY.gst}
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-light-gray text-xs font-bold text-gold">
                Surat, Gujarat, India
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Online Quote Promotion ────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-deep rounded-3xl p-8 sm:p-12 text-white border border-card-border text-center">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
              Need a Detailed Price Quote?
            </h2>
            <p className="text-gray-300 text-base max-w-2xl mx-auto mb-8 leading-relaxed">
              Reach out directly via WhatsApp, phone, or email to discuss your yarn requirements,
              desired color, quantity, and delivery specifications. We will prepare an itemized commercial quotation.
            </p>
            <div className="flex justify-center">
              <a
                href={getWhatsAppUrl('Hi But Bhavani Enterprises, I would like an instant quote.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-3.5 rounded-lg text-sm font-semibold transition-all shadow-lg hover:shadow-green-600/20"
              >
                <MessageCircle className="w-4 h-4" />
                Quick Quote via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
