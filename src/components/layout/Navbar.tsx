'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NAV_ITEMS, COMPANY } from '@/lib/constants';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-navy-deep/98 backdrop-blur-md shadow-lg'
            : 'bg-navy-deep'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo + Company Name */}
            <Link href="/" className="flex items-center gap-2.5 sm:gap-3 shrink-0">
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-gold/40 shadow-md shadow-gold/20 shrink-0 bg-navy-dark">
                <Image
                  src="/images/logo.jpg"
                  alt="But Bhavani Enterprises"
                  fill
                  sizes="44px"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-semibold text-[13px] sm:text-[15px] leading-tight tracking-wide">
                  BUT BHAVANI
                </span>
                <span className="block text-gold text-[9px] sm:text-[10px] tracking-[0.2em] uppercase font-medium">
                  Enterprises
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3 py-2 text-[13px] font-medium transition-colors duration-200 flex items-center gap-1 ${
                    isActive(item.href)
                      ? 'text-gold'
                      : 'text-gray-300 hover:text-gold'
                  }`}
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="w-3 h-3" />}
                  {isActive(item.href) && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gold rounded-full" />
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-white p-2 hover:text-gold transition-colors"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute top-[72px] left-0 right-0 bg-navy-deep border-t border-card-border shadow-2xl max-h-[calc(100vh-72px)] overflow-y-auto">
            <div className="px-4 py-4 space-y-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-4 py-3 rounded-lg text-[15px] font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-gold bg-gold/10'
                      : 'text-gray-300 hover:text-gold hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Navbar spacer */}
      <div className="h-[72px]" />
    </>
  );
}
