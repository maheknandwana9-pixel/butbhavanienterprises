import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { type Product } from '@/lib/constants';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group bg-white rounded-xl border border-light-gray overflow-hidden card-hover">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {product.isNew && (
          <span className="absolute top-3 left-3 bg-gold text-navy-deep text-[10px] font-bold uppercase px-2.5 py-1 rounded-full tracking-wider">
            New
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5">
        <h3 className="font-semibold text-dark-text text-[15px] mb-1.5">
          {product.name}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
          {product.description}
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 text-gold text-sm font-semibold hover:text-gold-light transition-colors group/btn"
        >
          ENQUIRE NOW
          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
