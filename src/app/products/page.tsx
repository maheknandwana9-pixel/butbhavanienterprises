'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Hero from '@/components/ui/Hero';
import ProductCard from '@/components/products/ProductCard';
import ProductSidebar from '@/components/products/ProductSidebar';
import CTASection from '@/components/ui/CTASection';
import { PRODUCTS, PRODUCT_CATEGORIES } from '@/lib/constants';

function ProductsContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    if (categoryParam) {
      const valid = PRODUCT_CATEGORIES.some((c) => c.id === categoryParam);
      if (valid) {
        setActiveCategory(categoryParam);
      }
    }
  }, [categoryParam]);

  const filteredProducts = PRODUCTS.filter((product) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'new-arrivals') return product.isNew;
    return product.category === activeCategory;
  });

  return (
    <div className="flex flex-col min-h-screen">
      {/* ─── Hero Section ──────────────────────────────── */}
      <Hero
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Products', href: '/products' },
        ]}
        heading="Our Premium Yarn Collection"
        goldSubtitle="Engineered for Luxury Fashion, Textiles & Embroidery"
        description="Discover our comprehensive catalog of sequin yarns, fancy yarns, metallic threads, and decorative sequin materials manufactured with impeccable precision and lasting luster."
        image="/images/hero-sequin.jpg"
        imageAlt="But Bhavani Enterprises yarn product range"
        buttons={[
          { label: 'Contact Us', href: '/contact', variant: 'gold' },
          { label: 'Why Choose Us', href: '/why-choose-us', variant: 'outline' },
        ]}
      />

      {/* ─── Products & Filter Section ─────────────────── */}
      <section className="py-16 sm:py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile Category Scroll Bar */}
          <div className="lg:hidden mb-8 overflow-x-auto pb-2 scrollbar-none">
            <div className="flex gap-2 min-w-max">
              {PRODUCT_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                    activeCategory === cat.id
                      ? 'bg-navy-deep text-gold shadow-md'
                      : 'bg-white text-gray-700 border border-light-gray hover:border-gold'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Desktop Sidebar */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="sticky top-28">
                <ProductSidebar
                  activeCategory={activeCategory}
                  onCategoryChange={setActiveCategory}
                />
              </div>
            </div>

            {/* Product Grid Area */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-light-gray">
                <div>
                  <h2 className="text-xl font-bold font-heading text-dark-text">
                    {PRODUCT_CATEGORIES.find((c) => c.id === activeCategory)?.label || 'Products'}
                  </h2>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'item' : 'items'}
                  </p>
                </div>

                {activeCategory !== 'all' && (
                  <button
                    onClick={() => setActiveCategory('all')}
                    className="text-xs font-semibold text-gold hover:underline cursor-pointer"
                  >
                    Reset Filter
                  </button>
                )}
              </div>

              {filteredProducts.length === 0 ? (
                <div className="bg-white rounded-2xl border border-light-gray p-12 text-center">
                  <p className="text-gray-500 text-sm mb-4">
                    No products found in this category right now.
                  </p>
                  <button
                    onClick={() => setActiveCategory('all')}
                    className="text-gold font-semibold text-sm hover:underline cursor-pointer"
                  >
                    View all products →
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA Section ───────────────────────────────── */}
      <CTASection
        heading="Need a Custom Yarn Blend or Color?"
        description="We manufacture custom yarn counts, colors, and sequin arrangements tailored to your specific textile specifications."
        buttonText="ENQUIRE FOR CUSTOM YARN"
        buttonHref="/contact"
        backgroundImage="/images/about-machinery.jpg"
      />
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-off-white">
          <div className="w-8 h-8 border-4 border-gold border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <ProductsContent />
    </Suspense>
  );
}
