import Image from 'next/image';
import Button from './Button';

interface CTASectionProps {
  heading: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  backgroundImage?: string;
  variant?: 'dark' | 'light';
}

export default function CTASection({
  heading,
  description,
  buttonText,
  buttonHref,
  backgroundImage,
  variant = 'dark',
}: CTASectionProps) {
  if (variant === 'light') {
    return (
      <section className="relative bg-off-white py-16 sm:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-dark-text mb-4">
                {heading}
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-6 max-w-lg">
                {description}
              </p>
              <Button href={buttonHref} variant="gold" size="lg">
                {buttonText}
              </Button>
            </div>
            {backgroundImage && (
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
                <Image
                  src={backgroundImage}
                  alt="Premium yarn products"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative bg-navy-deep py-16 sm:py-20 overflow-hidden">
      {backgroundImage && (
        <div className="absolute inset-0 opacity-20">
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/95 to-navy-deep/80" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-bold text-white mb-4 max-w-3xl mx-auto">
          {heading}
        </h2>
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <Button href={buttonHref} variant="gold" size="lg">
          {buttonText}
        </Button>
      </div>
    </section>
  );
}
