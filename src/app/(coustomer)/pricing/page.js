'use client';

import React, { useState } from 'react';
import { Check, X, CreditCard, Smartphone, Tv, ChevronDown, ChevronUp, Lock } from 'lucide-react';

 const page = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const pricingPlans = [
    {
      name: 'Pay Per Task',
      price: '$45',
      period: 'per task',
      popular: false,
      features: [
        'Pay per completed task',
        'No subscription',
        'Instant booking',
        'Background-checked workers',
        'Money-back guarantee'
      ]
    },
    {
      name: 'Monthly Plan',
      price: '$150',
      period: 'per month',
      popular: true,
      features: [
        'Up to 4 tasks per month',
        'Priority scheduling',
        'Dedicated workers',
        'Save 15% vs per task',
        '24/7 customer support'
      ]
    },
    {
      name: 'Annual Plan',
      price: '$65',
      period: 'per month',
      popular: false,
      features: [
        '48 tasks per year',
        'Best value - save 30%',
        'Priority scheduling',
        'Dedicated workers',
        'Premium support'
      ]
    }
  ];

  const faqs = [
    { question: "Is there a minimum charge per project?", answer: "Yes, there is a minimum charge of $45 per project to ensure quality service and fair compensation for our workers." },
    { question: "What will I actually be billed for payment?", answer: "You'll be billed for the service plan you choose plus any additional services requested. All prices are transparent and shown before you confirm." },
    { question: "What if I'm not satisfied with my work?", answer: "We offer a 100% satisfaction guarantee. If you're not happy with the work, we'll send another worker to fix it at no additional cost." },
    { question: "Do I have to pay separately from a subscription?", answer: "No, if you're on a monthly or annual plan, your tasks are included. You only pay separately if you exceed your plan's task limit." },
    { question: "How can I communicate with the project?", answer: "You can communicate directly with your assigned worker through our app, via phone, or through our customer support team." },
    { question: "Do workers bring their own tools and supplies?", answer: "Yes, all workers come equipped with professional-grade tools and supplies needed for the job. Any special materials will be discussed beforehand." }
  ];

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Pricing Plans Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple & Transparent Pricing
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Pay only for what you need, with no hidden fees.
          </p>
          <button className="bg-green-800 text-white px-6 py-2 rounded-lg hover:bg-green-900 transition-colors font-medium text-sm">
            Get Started
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg border-2 ${
                plan.popular ? 'border-green-800 relative' : 'border-gray-200'
              } p-8 flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-gray-900 text-white px-4 py-1 rounded-full text-xs font-bold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-900 rounded-full mb-4">
                  <span className="text-white font-bold">📋</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-600">/{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-green-800 text-white hover:bg-green-900'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>

        {/* Platform Fees Section */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            How Platform Fees Work
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We keep our platform fees low and transparent.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">All Services</h3>
              <p className="text-4xl font-bold text-gray-900 mb-2">88%</p>
              <p className="text-sm text-gray-600">goes to workers</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                <span className="text-2xl">💳</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Platform Fee</h3>
              <p className="text-4xl font-bold text-gray-900 mb-2">12%</p>
              <p className="text-sm text-gray-600">platform operations</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Example Breakdown</h3>
              <div className="flex items-center justify-center gap-4 text-lg">
                <span className="font-bold text-gray-900">$100</span>
                <span className="text-gray-400">→</span>
                <span className="font-bold text-green-600">$88</span>
                <span className="text-gray-400">+</span>
                <span className="font-bold text-gray-900">$12</span>
              </div>
            </div>
          </div>
        </div>

        {/* What's Included Section */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What's Included & What's Not
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Included */}
            <div>
              <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2 text-lg">
                <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                What's Included
              </h3>
              <ul className="space-y-3">
                {[
                  'Background-checked workers',
                  'Worker insurance',
                  'All basic lawn services',
                  'Professional equipment',
                  'Basic yard cleaning',
                  'Waste disposal',
                  'Quality guarantee',
                  'Customer support'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not Included */}
            <div>
              <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2 text-lg">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <X className="w-5 h-5 text-red-600" />
                </div>
                What's Not Included
              </h3>
              <ul className="space-y-3">
                {[
                  'Large tree removal (contact us)',
                  'Specialized landscaping',
                  'Irrigation system repairs',
                  'Fertilizer services',
                  'Pest control',
                  'Heavy equipment rentals',
                  'Same-day service'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Secure Payment Options */}
        <div className="bg-green-50 rounded-2xl border border-green-200 p-8 mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Secure Payment Options
            </h2>
            <p className="text-gray-600">
              We offer multiple secure payment methods for your convenience.
            </p>
          </div>

          <div className="flex justify-center items-center gap-6 mb-6 flex-wrap">
            <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center">
              <CreditCard className="w-8 h-8 text-gray-900" />
            </div>
            <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center">
              <Smartphone className="w-8 h-8 text-gray-900" />
            </div>
            <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center">
              <Tv className="w-8 h-8 text-gray-900" />
            </div>
            <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center">
              <CreditCard className="w-8 h-8 text-gray-900" />
            </div>
            <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center">
              <Lock className="w-8 h-8 text-gray-900" />
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 flex items-start gap-3 max-w-3xl mx-auto">
            <Lock className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-gray-700">
              <strong>100% secure payments:</strong> All transactions are encrypted and processed through secure payment gateways. We never store your payment information on our servers.
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Pricing Questions
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Find answers to common questions about our pricing.
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 text-left">
                    {faq.question}
                  </span>
                  {expandedFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-600 flex-shrink-0" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default page;