import React, { useState } from 'react';
import { Leaf, Wind, Scissors, Droplets, Wrench, Car, Key, Smartphone, Sparkles, Home, Lightbulb } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, price, duration, description, buttonText, buttonVariant = 'primary' }) => (
  <div className="bg-white rounded-lg border border-gray-200 p-6 flex flex-col shadow-sm hover:shadow-md transition-shadow">
    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-gray-700" />
    </div>
    <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
    <div className="flex items-baseline gap-2 mb-1">
      <span className="text-3xl font-bold text-gray-900">${price}</span>
      <span className="text-sm text-gray-500">starting</span>
    </div>
    <p className="text-sm text-gray-500 mb-4">{duration}</p>
    <p className="text-sm text-gray-600 mb-6 flex-grow">{description}</p>
    <button 
      className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
        buttonVariant === 'primary' 
          ? 'bg-green-800 text-white hover:bg-green-900' 
          : 'bg-white text-green-800 border-2 border-green-800 hover:bg-green-50'
      }`}
    >
      {buttonText}
    </button>
  </div>
);

const ServicePricing = () => {
  const [activeTab, setActiveTab] = useState('yard');

  const serviceCategories = {
    yard: {
      title: 'Yard & Outdoor',
      subtitle: 'Keep your outdoor spaces looking their best',
      services: [
        {
          icon: Leaf,
          title: 'Lawn Mowing',
          price: 45,
          duration: '30-45 min',
          description: 'Professional lawn mowing service including edging and cleanup. Perfect for maintaining a neat and tidy yard throughout the season.',
          buttonText: 'Book Service',
          buttonVariant: 'primary'
        },
        {
          icon: Wind,
          title: 'Leaf Removal',
          price: 75,
          duration: '1-2 hours',
          description: 'Complete leaf removal and yard cleanup service. We\'ll clear all leaves from your lawn, beds, and hard surfaces.',
          buttonText: 'Book Service',
          buttonVariant: 'primary'
        },
        {
          icon: Scissors,
          title: 'Hedge Trimming',
          price: 65,
          duration: '45-60 min',
          description: 'Expert hedge and shrub trimming to keep your landscape looking sharp. Includes cleanup of all trimmings.',
          buttonText: 'Get Started',
          buttonVariant: 'secondary'
        }
      ]
    },
    pet: {
      title: 'Pet & Property Cleanup',
      subtitle: 'Maintain a clean and healthy environment',
      services: [
        {
          icon: Home,
          title: 'Pet Home Cleanup',
          price: 55,
          duration: '45 min',
          description: 'Thorough cleanup of pet areas including litter boxes, pet beds, and surrounding spaces. Keep your home fresh and clean.',
          buttonText: 'Book Now',
          buttonVariant: 'primary'
        },
        {
          icon: Droplets,
          title: 'Pressure Washing',
          price: 95,
          duration: '1-2 hours',
          description: 'Professional pressure washing for driveways, patios, decks, and siding. Remove dirt, grime, and stains effectively.',
          buttonText: 'Book Now',
          buttonVariant: 'primary'
        },
        {
          icon: Sparkles,
          title: 'Gutter Cleaning',
          price: 85,
          duration: '1 hour',
          description: 'Complete gutter cleaning and debris removal. Prevent water damage and keep your gutters flowing freely.',
          buttonText: 'Explore',
          buttonVariant: 'primary'
        }
      ]
    },
    vehicle: {
      title: 'Vehicle Convenience Services',
      subtitle: 'Professional car care at your doorstep',
      services: [
        {
          icon: Car,
          title: 'Car Washing',
          price: 48,
          duration: '30 min',
          description: 'Full exterior car wash and interior vacuum. Get your vehicle looking showroom fresh with our professional service.',
          buttonText: 'Get Started',
          buttonVariant: 'primary'
        },
        {
          icon: Key,
          title: 'Mobile Car Wash',
          price: 75,
          duration: '45 min',
          description: 'We come to you! Complete mobile car washing service at your home or office. Convenient and thorough cleaning.',
          buttonText: 'Book Now',
          buttonVariant: 'primary'
        },
        {
          icon: Smartphone,
          title: 'Car Detailing',
          price: 175,
          duration: '2-3 hours',
          description: 'Comprehensive interior and exterior detailing. Includes deep cleaning, waxing, and protection for your vehicle.',
          buttonText: 'Detail Service',
          buttonVariant: 'secondary'
        }
      ]
    },
    home: {
      title: 'Home Exterior Tasks',
      subtitle: 'Enhance your home\'s appearance and functionality',
      services: [
        {
          icon: Sparkles,
          title: 'Window Cleaning',
          price: 85,
          duration: '1-2 hours',
          description: 'Professional window cleaning for a crystal clear view. Interior and exterior cleaning available for all window types.',
          buttonText: 'Book Service',
          buttonVariant: 'primary'
        },
        {
          icon: Wrench,
          title: 'Minor Repairs',
          price: 95,
          duration: '1-2 hours',
          description: 'Quick fixes and minor home repairs. From door hinges to small drywall patches, we handle the little things.',
          buttonText: 'Book Service',
          buttonVariant: 'primary'
        },
        {
          icon: Lightbulb,
          title: 'Outdoor Lighting',
          price: 125,
          duration: '2-3 hours',
          description: 'Installation and maintenance of outdoor lighting. Enhance your home\'s security and curb appeal with proper lighting.',
          buttonText: 'Get Started',
          buttonVariant: 'primary'
        }
      ]
    }
  };

  const tabs = [
    { id: 'yard', label: 'Yard & Outdoor' },
    { id: 'pet', label: 'Pet & Property' },
    { id: 'vehicle', label: 'Vehicle Services' },
    { id: 'home', label: 'Home Exterior' }
  ];

  const currentCategory = serviceCategories[activeTab];

  return (
    <div className="min-h-screen bg-white">

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 ">
        {/* Tabs */}
        <div >
          <div className="flex flex-wrap gap-2 justify-center mb-8 border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 font-medium transition-all relative ${
                  activeTab === tab.id
                    ? 'text-green-800 border-b-2 border-green-800'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Category Content */}
          <div className="animate-fadeIn">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{currentCategory.title}</h2>
              <p className="text-gray-600">{currentCategory.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentCategory.services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
export default ServicePricing;