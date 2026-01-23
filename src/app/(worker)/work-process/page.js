'use client';
import React from 'react';

const page = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* How It Works Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">How It Works</h2>
          <p className="text-gray-600">Start earning money in four simple steps</p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
          {/* Step 1 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-teal-800 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
              1
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Create your Shoppy</h3>
            <p className="text-sm text-gray-600">
              Over 25 services ready to use and 200+ API tools available
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-teal-800 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
              2
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Add your products</h3>
            <p className="text-sm text-gray-600">
              Receive instant payments and stay on top of all transactions
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-teal-800 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
              3
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Showcase the URL</h3>
            <p className="text-sm text-gray-600">
              On your own customized web feed in minutes
            </p>
          </div>

          {/* Step 4 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-teal-800 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
              4
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Get paid</h3>
            <p className="text-sm text-gray-600">You can after 24 hrs</p>
          </div>
        </div>

        {/* Earnings Section */}
        <div className="text-center mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            You keep 88% of every job
          </h3>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 max-w-md mx-auto">
            <div className="mb-6">
              <p className="text-gray-600 mb-2">The buyer pays</p>
              <p className="text-4xl font-bold text-gray-900">$100</p>
            </div>
            <div className="border-t border-gray-300 pt-6">
              <p className="text-gray-600 mb-2">You earn</p>
              <p className="text-4xl font-bold text-teal-800">$88</p>
            </div>
          </div>
        </div>

        {/* Payment Methods Section */}
        <div className="text-center mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Get paid your way</h3>
          <p className="text-gray-600 mb-10">Choose what works best for you</p>
          
          <div className="flex justify-center items-center gap-12 flex-wrap">
            <div className="text-center">
              <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-7 h-7 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-sm font-medium text-gray-700">Cash App</p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-7 h-7 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <p className="text-sm font-medium text-gray-700">Venmo</p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-7 h-7 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <p className="text-sm font-medium text-gray-700">Zelle</p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-7 h-7 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-sm font-medium text-gray-700">Payoneer</p>
            </div>
          </div>
        </div>

        {/* Why Work With Us Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-10">Why work with us?</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Feature 1 */}
            <div className="flex items-start text-left">
              <div className="w-10 h-10 bg-teal-800 rounded-full flex items-center justify-center text-white flex-shrink-0 mr-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Pay only schedule</h4>
                <p className="text-sm text-gray-600">Get paid on schedule</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start text-left">
              <div className="w-10 h-10 bg-teal-800 rounded-full flex items-center justify-center text-white flex-shrink-0 mr-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">World wide</h4>
                <p className="text-sm text-gray-600">Easy to create your own online store</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start text-left">
              <div className="w-10 h-10 bg-teal-800 rounded-full flex items-center justify-center text-white flex-shrink-0 mr-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">100% of the money</h4>
                <p className="text-sm text-gray-600">88% of the money we won't take.</p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-start text-left">
              <div className="w-10 h-10 bg-teal-800 rounded-full flex items-center justify-center text-white flex-shrink-0 mr-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Protect item</h4>
                <p className="text-sm text-gray-600">Buyer info and items are safe.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default page;