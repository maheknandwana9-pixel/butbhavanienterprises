'use client';

import { Sparkles, Star, Gem, Palette, Award, Settings, TrendingUp, Layers } from 'lucide-react';
import { PRODUCT_CATEGORIES } from '@/lib/constants';
import Button from '@/components/ui/Button';

interface ProductSidebarProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const iconMap: Record<string, React.ReactNode> = {
  Layers: <Layers className="w-4 h-4" />,
  Sparkles: <Sparkles className="w-4 h-4" />,
  Star: <Star className="w-4 h-4" />,
  Gem: <Gem className="w-4 h-4" />,
  Palette: <Palette className="w-4 h-4" />,
  Award: <Award className="w-4 h-4" />,
  Settings: <Settings className="w-4 h-4" />,
  TrendingUp: <TrendingUp className="w-4 h-4" />,
};

export default function ProductSidebar({ activeCategory, onCategoryChange }: ProductSidebarProps) {
  return (
    <aside className="w-full">
      <div className="bg-white rounded-xl border border-light-gray overflow-hidden">
        <div className="p-4 border-b border-light-gray">
          <h3 className="font-semibold text-dark-text text-sm uppercase tracking-wider">
            Product Categories
          </h3>
        </div>
        <div className="p-2">
          {PRODUCT_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 text-left cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-gold/10 text-gold'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-dark-text'
              }`}
            >
              <span className={activeCategory === cat.id ? 'text-gold' : 'text-gray-400'}>
                {iconMap[cat.icon]}
              </span>
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Bulk Orders CTA */}
      <div className="mt-6 bg-navy-deep rounded-xl p-6 text-center">
        <h4 className="text-white font-semibold text-lg mb-2">Bulk Orders Welcome</h4>
        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
          We provide the best quality products for wholesale and large requirements.
        </p>
        <Button href="/contact" variant="gold" size="sm" className="w-full">
          CONTACT US
        </Button>
      </div>
    </aside>
  );
}
