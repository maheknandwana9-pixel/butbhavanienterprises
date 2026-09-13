'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  ShieldCheck,
  Truck,
  Sparkles,
  Phone,
  MessageCircle,
  Clock,
  CheckCircle2,
  FileCheck,
} from 'lucide-react';
import Hero from '@/components/ui/Hero';
import SectionHeading from '@/components/ui/SectionHeading';
import QuoteForm from '@/components/quote/QuoteForm';
import { COMPANY, getWhatsAppUrl } from '@/lib/constants';

function QuoteContent() {
  const searchParams = useSearchParams();
  const productParam = searchParams.get('product') || '';
  const [selectedProduct, setSelectedProduct] = useState(productParam);

  useEffect(() => {
    if (productParam) {
      setSelectedProduct(productParam);
    }
  }, [productParam]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* ─── Hero Section ──────────────────────────────── */}
      <Hero
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Get a Quote', href: '/quote' },
        ]}
        heading="Request a Custom Commercial Quote"
        goldSubtitle="Factory-Direct Pricing &amp; Tailored Specifications"
        description="Fill in your requirements below for wholesale orders, custom sequin yarn specifications, or sample swatch dispatch. Our sales engineers respond within 24 business hours."
        image="/images/sequin-yarn-gold.jpg"
        imageAlt="Commercial sequin yarn quote request"
        buttons={[
          { label: 'Explore Products', href: '/products', variant: 'outline' },
        ]}
      />

      {/* ─── Form & Benefits Grid ──────────────────────── */}
      <section className="py-16 sm:py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Why Request From Us */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-2xl border border-light-gray p-6 sm:p-8">
                <span className="text-gold text-xs font-semibold uppercase tracking-[0.2em]">
                  Direct Manufacturer Advantage
                </span>
                <h3 className="font-heading text-2xl font-bold text-dark-text mt-2 mb-4">
                  What You Get When Partnering With Us
                </h3>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gold/15 flex items-center justify-center shrink-0 mt-0.5">
                      <FileCheck className="w-4 h-4 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-text text-sm">Transparent Factory Pricing</h4>
                      <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">
                        Eliminate intermediary markups with direct Surat mill rates.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gold/15 flex items-center justify-center shrink-0 mt-0.5">
                      <Sparkles className="w-4 h-4 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-text text-sm">Custom Matching &amp; Samples</h4>
                      <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">
                        Sample lots prepared for shade approval and tension testing on your machines.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gold/15 flex items-center justify-center shrink-0 mt-0.5">
                      <Truck className="w-4 h-4 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-text text-sm">Pan-India Logistics</h4>
                      <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">
                        Prompt transit to Surat, Mumbai, Ahmedabad, Delhi, Kolkata, Bangalore and export ports.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gold/15 flex items-center justify-center shrink-0 mt-0.5">
                      <ShieldCheck className="w-4 h-4 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-text text-sm">Quality Consistency Assurance</h4>
                      <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">
                        Strict batch consistency in shade, luster, and sequin spacing.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Direct Urgent Assistance Card */}
              <div className="bg-navy-deep text-white rounded-2xl p-6 sm:p-8 border border-card-border">
                <h4 className="font-heading text-lg font-bold text-white mb-2">
                  Need an Immediate Quotation?
                </h4>
                <p className="text-gray-300 text-xs leading-relaxed mb-6">
                  For urgent sample dispatch or immediate bulk orders, connect directly with our production manager via WhatsApp or phone call.
                </p>

                <div className="space-y-3">
                  <a
                    href={getWhatsAppUrl(`Hi, I need an immediate quote for: ${selectedProduct || 'yarns'}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg text-sm font-semibold transition-all w-full"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Quick WhatsApp Quote
                  </a>
                  <a
                    href={`tel:${COMPANY.phone1.replace(/\s/g, '')}`}
                    className="flex items-center justify-center gap-2 bg-navy-dark hover:bg-white/10 text-white border border-card-border py-3 rounded-lg text-sm font-semibold transition-all w-full"
                  >
                    <Phone className="w-4 h-4 text-gold" />
                    Call {COMPANY.phone1}
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Form */}
            <div className="lg:col-span-7">
              <QuoteForm key={selectedProduct} preSelectedProduct={selectedProduct} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function QuotePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-off-white">
          <div className="w-8 h-8 border-4 border-gold border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <QuoteContent />
    </Suspense>
  );
}
