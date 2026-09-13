'use client';

import { useState, useEffect } from 'react';
import { Send, CheckCircle } from 'lucide-react';

interface QuoteFormProps {
  preSelectedProduct?: string;
}

interface FormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  product: string;
  quantity: string;
  preferredColor: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function QuoteForm({ preSelectedProduct = '' }: QuoteFormProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    product: preSelectedProduct,
    quantity: '',
    preferredColor: '',
    message: '',
  });

  useEffect(() => {
    if (preSelectedProduct) {
      setFormData((prev) => ({ ...prev, product: preSelectedProduct }));
    }
  }, [preSelectedProduct]);

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\d\s+\-()]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.product.trim()) newErrors.product = 'Please select or enter a product';
    if (!formData.message.trim()) newErrors.message = 'Please enter your message';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSubmitting(false);
    setSubmitted(true);
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl border border-light-gray p-8 sm:p-12 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="font-heading text-2xl font-bold text-dark-text mb-3">
          Quote Request Submitted!
        </h3>
        <p className="text-gray-600 leading-relaxed max-w-md mx-auto mb-6">
          Thank you for your interest in our products. Our team will review your requirements and get back to you within 24 hours.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              fullName: '',
              companyName: '',
              email: '',
              phone: '',
              product: '',
              quantity: '',
              preferredColor: '',
              message: '',
            });
          }}
          className="text-gold font-semibold hover:text-gold-light transition-colors cursor-pointer"
        >
          Submit Another Request →
        </button>
      </div>
    );
  }

  const inputStyles = (field: string) =>
    `w-full px-4 py-3 rounded-lg border text-sm transition-colors duration-200 bg-white ${
      errors[field]
        ? 'border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-200'
        : 'border-light-gray focus:border-gold focus:ring-1 focus:ring-gold/20'
    } outline-none`;

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-light-gray p-6 sm:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-dark-text mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            value={formData.fullName}
            onChange={(e) => handleChange('fullName', e.target.value)}
            className={inputStyles('fullName')}
            placeholder="Your full name"
          />
          {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
        </div>

        {/* Company Name */}
        <div>
          <label htmlFor="companyName" className="block text-sm font-medium text-dark-text mb-1.5">
            Company Name
          </label>
          <input
            id="companyName"
            type="text"
            value={formData.companyName}
            onChange={(e) => handleChange('companyName', e.target.value)}
            className={inputStyles('companyName')}
            placeholder="Your company name"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-dark-text mb-1.5">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className={inputStyles('email')}
            placeholder="your@email.com"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-dark-text mb-1.5">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            className={inputStyles('phone')}
            placeholder="+91 XXXXX XXXXX"
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>

        {/* Product */}
        <div>
          <label htmlFor="product" className="block text-sm font-medium text-dark-text mb-1.5">
            Product <span className="text-red-500">*</span>
          </label>
          <select
            id="product"
            value={formData.product}
            onChange={(e) => handleChange('product', e.target.value)}
            className={inputStyles('product')}
          >
            <option value="">Select a product</option>
            <option value="Sequin Yarn - Gold & Silver">Sequin Yarn - Gold & Silver</option>
            <option value="Sequin Yarn - Rose Gold">Sequin Yarn - Rose Gold</option>
            <option value="Fancy Yarn - White">Fancy Yarn - White</option>
            <option value="Fancy Yarn - Purple">Fancy Yarn - Purple</option>
            <option value="Glitter Yarn - Assorted">Glitter Yarn - Assorted</option>
            <option value="Metallic Yarn - Silver">Metallic Yarn - Silver</option>
            <option value="Sequin Material - 6mm">Sequin Material - 6mm</option>
            <option value="Sequin Material - 3mm">Sequin Material - 3mm</option>
            <option value="Custom Yarn">Custom Yarn</option>
            <option value="Other">Other</option>
          </select>
          {errors.product && <p className="text-red-500 text-xs mt-1">{errors.product}</p>}
        </div>

        {/* Quantity */}
        <div>
          <label htmlFor="quantity" className="block text-sm font-medium text-dark-text mb-1.5">
            Quantity
          </label>
          <input
            id="quantity"
            type="text"
            value={formData.quantity}
            onChange={(e) => handleChange('quantity', e.target.value)}
            className={inputStyles('quantity')}
            placeholder="e.g., 100 kg, 500 spools"
          />
        </div>

        {/* Preferred Color */}
        <div className="sm:col-span-2">
          <label htmlFor="preferredColor" className="block text-sm font-medium text-dark-text mb-1.5">
            Preferred Color
          </label>
          <input
            id="preferredColor"
            type="text"
            value={formData.preferredColor}
            onChange={(e) => handleChange('preferredColor', e.target.value)}
            className={inputStyles('preferredColor')}
            placeholder="e.g., Gold, Silver, Rose Gold, Custom"
          />
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label htmlFor="message" className="block text-sm font-medium text-dark-text mb-1.5">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) => handleChange('message', e.target.value)}
            rows={5}
            className={inputStyles('message')}
            placeholder="Describe your requirements in detail..."
          />
          {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
        </div>
      </div>

      <div className="mt-6">
        <button
          type="submit"
          disabled={submitting}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-navy-deep px-8 py-3.5 rounded-lg text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
        >
          {submitting ? (
            <>
              <div className="w-4 h-4 border-2 border-navy-deep/30 border-t-navy-deep rounded-full animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              REQUEST A QUOTE
            </>
          )}
        </button>
      </div>
    </form>
  );
}
