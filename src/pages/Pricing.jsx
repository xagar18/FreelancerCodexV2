import { useState } from 'react';

function Pricing() {
  const [basicCardMode, setBasicCardMode] = useState('standard'); // Individual basic card toggle
  const [premiumCardMode, setPremiumCardMode] = useState('standard'); // Individual premium card toggle

  // Pricing data structure
  const pricingData = {
    standard: {
      basicPlan: {
        name: 'Basic',
        price: '$999',
        description: 'Perfect for small to medium projects',
        badge: 'Basic',
        features: [
          { name: 'Responsive Web Design', enabled: true },
          { name: 'Mobile-First Approach', enabled: true },
          { name: 'SEO Optimization', enabled: true },
          { name: 'Contact Forms & Integration', enabled: true },
          { name: '5 Pages Included', enabled: true },
          { name: '30 Days Support', enabled: true },
          { name: 'Basic Analytics Setup', enabled: true },
          { name: 'Social Media Integration', enabled: true },
          { name: 'Advanced Security Features', enabled: false },
          { name: 'Performance Optimization', enabled: false },
          { name: 'Database Integration', enabled: false },
          { name: 'API Development', enabled: false },
        ],
      },
      premiumPlan: {
        name: 'Premium',
        price: '$1,499',
        description: 'Complete solution for growing businesses',
        badge: 'Premium',
        features: [
          { name: 'Everything in Basic', enabled: true },
          { name: 'Advanced Web Applications', enabled: true },
          { name: 'Custom Backend Development', enabled: true },
          { name: 'Database Design & Setup', enabled: true },
          { name: 'API Development & Integration', enabled: true },
          { name: 'Advanced Security Features', enabled: true },
          { name: 'Performance Optimization', enabled: true },
          { name: 'Unlimited Pages', enabled: true },
          { name: '90 Days Premium Support', enabled: true },
          { name: 'Priority Development Queue', enabled: true },
          { name: 'Advanced Analytics & Reporting', enabled: true },
          { name: 'Multi-language Support', enabled: true },
        ],
      },
    },
    priority: {
      basicPlan: {
        name: 'Basic Priority',
        price: '$1,299',
        description: 'Fast-tracked small to medium projects',
        badge: 'Basic Priority',
        features: [
          { name: 'Responsive Web Design', enabled: true },
          { name: 'Mobile-First Approach', enabled: true },
          { name: 'SEO Optimization', enabled: true },
          { name: 'Contact Forms & Integration', enabled: true },
          { name: '8 Pages Included', enabled: true },
          { name: '60 Days Support', enabled: true },
          { name: 'Advanced Analytics Setup', enabled: true },
          { name: 'Social Media Integration', enabled: true },
          { name: 'Advanced Security Features', enabled: true },
          { name: 'Performance Optimization', enabled: true },
          { name: 'Database Integration', enabled: false },
          { name: 'API Development', enabled: false },
        ],
      },
      premiumPlan: {
        name: 'Premium Priority',
        price: '$1,999',
        description: 'Ultimate solution with priority development',
        badge: 'Premium Priority',
        features: [
          { name: 'Everything in Basic Priority', enabled: true },
          { name: 'Advanced Web Applications', enabled: true },
          { name: 'Custom Backend Development', enabled: true },
          { name: 'Database Design & Setup', enabled: true },
          { name: 'API Development & Integration', enabled: true },
          { name: 'Advanced Security Features', enabled: true },
          { name: 'Performance Optimization', enabled: true },
          { name: 'Unlimited Pages', enabled: true },
          { name: '120 Days Premium Support', enabled: true },
          { name: 'Top Priority Development Queue', enabled: true },
          { name: 'Advanced Analytics & Reporting', enabled: true },
          { name: 'Multi-language Support', enabled: true },
          { name: '24/7 Direct Developer Access', enabled: true },
          { name: 'Weekly Progress Reports', enabled: true },
        ],
      },
    },
  };

  // Handle individual card toggles
  const handleBasicToggle = mode => {
    setBasicCardMode(mode);
  };

  const handlePremiumToggle = mode => {
    setPremiumCardMode(mode);
  };

  // Get current data for each card
  const basicCurrentData = pricingData[basicCardMode];
  const premiumCurrentData = pricingData[premiumCardMode];

  const scrollToSection = sectionId => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="pricing" className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Choose Your <span className="text-gray-800">Perfect Plan</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Transform your business with our premium development services. Choose the plan that
              fits your needs and budget.
            </p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-20 max-w-5xl mx-auto">
          {/* White Card - Basic Plan */}
          <div className="relative bg-white rounded-2xl shadow-lg border-2 border-gray-100 p-8 w-full lg:w-96">
            {/* Individual Toggle Button */}
            <div className="absolute top-4 right-4 z-20">
              <div className="flex items-center bg-gray-100 rounded-full p-1">
                <button
                  onClick={() => handleBasicToggle('standard')}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${
                    basicCardMode === 'standard'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600'
                  }`}
                >
                  Basic
                </button>
                <button
                  onClick={() => handleBasicToggle('priority')}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${
                    basicCardMode === 'priority'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600'
                  }`}
                >
                  Priority
                </button>
              </div>
            </div>

            {/* Decorative Corner Elements */}
            <div className="absolute top-6 left-6 w-6 h-6 border-l-2 border-t-2 border-gray-200 rounded-tl-lg"></div>
            <div className="absolute bottom-6 left-6 w-6 h-6 border-l-2 border-b-2 border-gray-200 rounded-bl-lg"></div>
            <div className="absolute bottom-6 right-6 w-6 h-6 border-r-2 border-b-2 border-gray-200 rounded-br-lg"></div>

            <div className="relative z-10">
              {/* Plan Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 rounded-full text-sm font-bold mb-6 shadow-sm">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                {basicCurrentData.basicPlan.badge}
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline mb-2">
                  <span className="text-4xl font-bold text-gray-900">
                    {basicCurrentData.basicPlan.price}
                  </span>
                  <span className="text-gray-500 ml-2">/project</span>
                </div>
                <p className="text-gray-600">{basicCurrentData.basicPlan.description}</p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {basicCurrentData.basicPlan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div
                      className={`w-5 h-5 border-2 flex items-center justify-center mr-3 rounded-sm ${
                        feature.enabled
                          ? 'bg-green-500 border-green-500 '
                          : 'bg-white border-gray-300'
                      }`}
                    >
                      {feature.enabled && (
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>
                    <span
                      className={`text-sm ${feature.enabled ? 'text-gray-700' : 'text-gray-400 line-through'}`}
                    >
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-gray-900 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
              >
                Get Started
              </button>
            </div>
          </div>

          {/* Black Card - Premium Plan */}
          <div className="relative bg-black rounded-2xl shadow-lg p-8 w-full lg:w-96 text-white">
            {/* Individual Toggle Button */}
            <div className="absolute top-4 right-4 z-20">
              <div className="flex items-center bg-gray-800 rounded-full p-1">
                <button
                  onClick={() => handlePremiumToggle('standard')}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${
                    premiumCardMode === 'standard'
                      ? 'bg-white text-black shadow-sm'
                      : 'text-gray-300'
                  }`}
                >
                  Premium
                </button>
                <button
                  onClick={() => handlePremiumToggle('priority')}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${
                    premiumCardMode === 'priority'
                      ? 'bg-white text-black shadow-sm'
                      : 'text-gray-300'
                  }`}
                >
                  Priority
                </button>
              </div>
            </div>

            {/* Popular Badge */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
              <div className="bg-white text-black px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                🔥 MOST POPULAR
              </div>
            </div>

            {/* Decorative Corner Elements */}
            <div className="absolute top-6 left-6 w-6 h-6 border-l-2 border-t-2 border-gray-600 rounded-tl-lg"></div>
            <div className="absolute bottom-6 left-6 w-6 h-6 border-l-2 border-b-2 border-gray-600 rounded-bl-lg"></div>
            <div className="absolute bottom-6 right-6 w-6 h-6 border-r-2 border-b-2 border-gray-600 rounded-br-lg"></div>

            <div className="relative z-10">
              {/* Plan Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-full text-sm font-bold mb-6 mt-4 shadow-lg">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                {premiumCurrentData.premiumPlan.badge}
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline mb-2">
                  <span className="text-4xl font-bold text-white">
                    {premiumCurrentData.premiumPlan.price}
                  </span>
                  <span className="text-gray-300 ml-2">/project</span>
                </div>
                <p className="text-gray-300">{premiumCurrentData.premiumPlan.description}</p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {premiumCurrentData.premiumPlan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div
                      className={`w-5 h-5 border-2 flex items-center justify-center mr-3 ${
                        feature.enabled
                          ? 'bg-white border-white rounded-sm'
                          : 'bg-black border-gray-500'
                      }`}
                    >
                      {feature.enabled && (
                        <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>
                    <span
                      className={`text-sm ${feature.enabled ? 'text-gray-100' : 'text-gray-500 line-through'}`}
                    >
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-white text-black font-semibold py-3 px-6 rounded-xl transition-all duration-300"
              >
                Start Premium Project
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Need a custom solution?{' '}
            <span className="text-gray-800 font-semibold">Let's discuss your project!</span>
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3 border-2 border-gray-800 text-gray-800 bg-white rounded-xl font-semibold transition-all duration-300"
            >
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
