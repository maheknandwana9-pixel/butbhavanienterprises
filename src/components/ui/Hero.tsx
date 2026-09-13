import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';
import { type ReactNode } from 'react';

interface HeroProps {
  breadcrumb?: { label: string; href: string }[];
  heading: ReactNode;
  goldSubtitle?: string;
  description: string;
  image: string;
  imageAlt: string;
  buttons?: { label: string; href: string; variant?: 'gold' | 'outline' | 'dark' | 'white'; icon?: 'arrow' | 'send' | 'none' }[];
  dark?: boolean;
}

export default function Hero({
  breadcrumb,
  heading,
  goldSubtitle,
  description,
  image,
  imageAlt,
  buttons,
  dark = true,
}: HeroProps) {
  return (
    <section className={`relative overflow-hidden ${dark ? 'bg-navy-deep' : 'bg-off-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            {breadcrumb && (
              <div className="flex items-center gap-2 text-xs text-gray-400 mb-6">
                {breadcrumb.map((crumb, i) => (
                  <span key={crumb.href} className="flex items-center gap-2">
                    {i > 0 && <span className="text-gray-600">&gt;</span>}
                    <Link href={crumb.href} className="hover:text-gold transition-colors uppercase tracking-wider">
                      {crumb.label}
                    </Link>
                  </span>
                ))}
              </div>
            )}

            <h1 className={`font-heading text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.1] mb-4 ${dark ? 'text-white' : 'text-dark-text'}`}>
              {heading}
            </h1>

            {goldSubtitle && (
              <p className="text-gold font-medium text-lg mb-4 tracking-wide">
                {goldSubtitle}
              </p>
            )}

            <p className={`text-base sm:text-lg leading-relaxed mb-8 max-w-lg ${dark ? 'text-gray-300' : 'text-gray-600'}`}>
              {description}
            </p>

            {buttons && buttons.length > 0 && (
              <div className="flex flex-wrap gap-4">
                {buttons.map((btn) => (
                  <Button
                    key={btn.label}
                    href={btn.href}
                    variant={btn.variant || 'gold'}
                    icon={btn.icon || 'arrow'}
                    size="lg"
                  >
                    {btn.label}
                  </Button>
                ))}
              </div>
            )}
          </div>

          {/* Image */}
          <div className="relative animate-fade-in-up stagger-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-gold/30 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-gold/20 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
