import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail } from 'lucide-react';
import { COMPANY, NAV_ITEMS, FOOTER_PRODUCTS } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1 — Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-gold/40 shadow-md shadow-gold/20 shrink-0 bg-navy-dark">
                <Image
                  src="/images/logo.jpg"
                  alt="But Bhavani Enterprises"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-white font-semibold text-[15px] leading-tight tracking-wide">
                  BUT BHAVANI
                </span>
                <span className="block text-gold text-[10px] tracking-[0.2em] uppercase">
                  Enterprises
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              {COMPANY.tagline}
            </p>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <div className="gold-line mb-4" />
            <ul className="space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-gold transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Our Products */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Our Products
            </h4>
            <div className="gold-line mb-4" />
            <ul className="space-y-2.5">
              {FOOTER_PRODUCTS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-gold transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact Us */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contact Us
            </h4>
            <div className="gold-line mb-4" />
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span className="text-sm text-gray-400 leading-relaxed">
                  {COMPANY.address.line1}<br />
                  {COMPANY.address.line2}<br />
                  {COMPANY.address.line3}<br />
                  {COMPANY.address.line4}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a href={`tel:${COMPANY.phone1.replace(/\s/g, '')}`} className="text-sm text-gray-400 hover:text-gold transition-colors">
                  {COMPANY.phone1}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a href={`tel:${COMPANY.phone2.replace(/\s/g, '')}`} className="text-sm text-gray-400 hover:text-gold transition-colors">
                  {COMPANY.phone2}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a href={`mailto:${COMPANY.email}`} className="text-sm text-gray-400 hover:text-gold transition-colors break-all">
                  {COMPANY.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-card-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
            <span>GST IN : {COMPANY.gst}</span>
            <span>
              Developed by{' '}
              <a
                href="http://linkedin.com/in/mahek-nandwana-782a223a8/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gold transition-colors underline underline-offset-2"
              >
                Mahek Nandwana
              </a>
            </span>
            <span>© 2024 But Bhavani Enterprises. All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
