'use client';
import React, { useState } from 'react';
import { Check, MapPin, Calendar, Clock, User, Phone, DollarSign, Camera, AlertCircle } from 'lucide-react';

const page = () => {
  const [jobStatus, setJobStatus] = useState('submitted');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="text-gray-600 hover:text-gray-900">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-lg font-semibold text-gray-900">Job Details</h1>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
            JM
          </div>
          <span className="text-sm font-medium text-gray-700">Julia M.</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4 lg:p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Job Header */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Lawn Mowing & Trimming</h2>
              
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex items-center gap-2 text-emerald-600">
                  <Check className="w-5 h-5" />
                  <span className="font-medium">Accepted</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-5 h-5" />
                  <span>Saturday, Jan 11, 2025</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="w-5 h-5" />
                  <span>10:00 AM - 12:00 PM</span>
                </div>
              </div>

              <div className="flex items-start gap-2 text-gray-700">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Springfield, IL 62701</span>
              </div>
            </div>

            {/* Customer Information */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Customer Information</h3>
              
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Sarah M.</p>
                  <p className="text-sm text-gray-500">Homeowner</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-gray-700 mt-3">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">1234 Maple Street, Springfield, IL 62701</span>
              </div>
            </div>

            {/* Job Description */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Job Description</h3>
              
              <div className="space-y-3">
                <p className="font-medium text-gray-900 mb-2">Tasks Required:</p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Mow front and back yard</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Edge around walkways and flower beds</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Trim bushes near front entrance</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Clean up grass clippings</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-medium text-gray-900 mb-3">Yard Details:</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Medium yard (0.25 acres)</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Some trees and obstacles</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-amber-50 border border-amber-200 rounded-lg p-4">
                <p className="font-medium text-gray-900 mb-1">Special Notes:</p>
                <p className="text-sm text-gray-700">
                  Please be careful around the new flower bed on the left side of the house. The gate 
                  to the backyard is unlocked. Tools are available in the garage if needed.
                </p>
              </div>
            </div>

            {/* Yard Photos */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Yard Photos</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="aspect-video bg-gradient-to-br from-green-400 to-green-600 rounded-lg overflow-hidden">
                  <img 
                    src="/api/placeholder/400/300" 
                    alt="Front yard"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-video bg-gradient-to-br from-amber-300 to-amber-500 rounded-lg overflow-hidden">
                  <img 
                    src="/api/placeholder/400/300" 
                    alt="House view"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-video bg-gradient-to-br from-green-500 to-green-700 rounded-lg overflow-hidden relative">
                  <img 
                    src="/api/placeholder/400/300" 
                    alt="Lawn area"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Payment Breakdown */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Breakdown</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-gray-700">
                  <span>Job Payment</span>
                  <span className="font-medium">$100.00</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Platform Fee (12%)</span>
                  <span className="font-medium">-$12.00</span>
                </div>
                <div className="pt-3 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-900">Your Earnings</span>
                    <span className="text-2xl font-bold text-emerald-600">$88.00</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 flex items-start gap-2 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <p>Payment will be processed within 24 hours after completion</p>
              </div>

              <button className="w-full mt-4 bg-emerald-700 text-white py-2 px-4 rounded-lg font-medium hover:bg-emerald-800 transition-colors">
                Call
              </button>
            </div>

            {/* Job Status */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Job Status</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Submitted</p>
                    <p className="text-xs text-gray-500">Jan 8, 2025 at 2:30 PM</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Accepted</p>
                    <p className="text-xs text-gray-500">Jan 8, 2025 at 6:15 AM</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full border-2 border-gray-300 bg-white"></div>
                  <div>
                    <p className="font-medium text-gray-400">In Progress</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full border-2 border-gray-300 bg-white"></div>
                  <div>
                    <p className="font-medium text-gray-400">Completed</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full border-2 border-gray-300 bg-white"></div>
                  <div>
                    <p className="font-medium text-gray-400">Paid</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Actions</h3>
              <button className="w-full bg-emerald-700 text-white py-3 px-4 rounded-lg font-medium hover:bg-emerald-800 transition-colors flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                </svg>
                Start Job
              </button>
            </div>

            {/* Help */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Need Help?</h3>
              <p className="text-sm text-gray-600 mb-4">
                If you have any issues or safety concerns, don't hesitate to contact our support team.
              </p>
              <button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                <AlertCircle className="w-5 h-5" />
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;