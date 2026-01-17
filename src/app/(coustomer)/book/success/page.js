'use client';
import React from 'react';
import { CheckCircle, Clock, User, ClipboardCheck, CreditCard, DollarSign, Mail, Phone } from 'lucide-react';

const page = () => {
  const jobDetails = {
    jobType: 'Lawn Mowing & Trimming',
    address: '123 Oak Street, Springfield',
    scheduledDate: 'Saturday, Jan 18 at 10:00 AM',
    estimatedTime: '1-2 hours',
    budget: '$75 - $100'
  };

  const processSteps = [
    {
      step: 1,
      icon: <ClipboardCheck className="w-6 h-6" />,
      title: 'We Review',
      description: 'We review your request and match you with qualified workers.',
      status: 'pending'
    },
    {
      step: 2,
      icon: <User className="w-6 h-6" />,
      title: 'Worker Matched',
      description: 'A worker will be assigned and will contact you shortly.',
      status: 'pending'
    },
    {
      step: 3,
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Work Completed',
      description: 'Worker arrives and completes the job to your satisfaction.',
      status: 'pending'
    },
    {
      step: 4,
      icon: <CreditCard className="w-6 h-6" />,
      title: 'Payment',
      description: 'Pay only after the job is completed successfully.',
      status: 'pending'
    }
  ];

  const peaceOfMind = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'No Payment Required',
      description: 'You only pay after the job is successfully completed to your satisfaction.',
      color: 'bg-green-50 border-green-200'
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Stay Informed',
      description: 'Track the worker\'s progress in real-time & communicate directly.',
      color: 'bg-blue-50 border-blue-200'
    },
    {
      icon: <User className="w-8 h-8" />,
      title: 'Safe & Trustworthy',
      description: 'All workers are background-checked and fully insured.',
      color: 'bg-purple-50 border-purple-200'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Job Request Submitted Successfully!
          </h1>
          <p className="text-gray-600 text-lg">
            We've received your request and are matching you with a local worker.
          </p>
        </div>

        {/* Job Summary Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Job Summary
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-gray-600 mb-1">Job Type</p>
              <p className="font-semibold text-gray-900">{jobDetails.jobType}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Estimated Time</p>
              <p className="font-semibold text-gray-900">{jobDetails.estimatedTime}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Address</p>
              <p className="font-semibold text-gray-900">{jobDetails.address}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Budget</p>
              <p className="font-semibold text-gray-900">{jobDetails.budget}</p>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex items-center gap-2 text-yellow-700 bg-yellow-50 border border-yellow-200 rounded-lg px-4 py-3">
              <Clock className="w-5 h-5 flex-shrink-0" />
              <span className="font-medium text-sm">Pending — Pending to worker</span>
            </div>
          </div>
        </div>

        {/* What Happens Next */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            What Happens Next
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-4">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto ${
                    step.step === 1 ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-400'
                  }`}>
                    {step.icon}
                  </div>
                  <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                    step.step === 1 ? 'bg-yellow-400 text-gray-900' : 'bg-gray-200 text-gray-500'
                  }`}>
                    {step.step}
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Peace of Mind */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Peace of Mind
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {peaceOfMind.map((item, index) => (
              <div key={index} className={`${item.color} border-2 rounded-xl p-6 text-center`}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-sm mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <button className="flex-1 bg-gray-900 text-white py-4 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
            View My Jobs
          </button>
          <button className="flex-1 bg-white text-gray-900 py-4 px-6 rounded-lg font-semibold border-2 border-gray-900 hover:bg-gray-50 transition-colors">
            Book Another Job
          </button>
        </div>

        {/* Need Help Section */}
        <div className="bg-gray-100 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Need Help?
          </h3>
          <p className="text-gray-600 mb-6">
            Contact our support team for any questions or if you need assistance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="mailto:support@yardcare.com" className="flex items-center gap-2 text-gray-900 hover:text-green-700 transition-colors">
              <Mail className="w-5 h-5" />
              <span className="font-medium">support@yardcare.com</span>
            </a>
            <a href="tel:+15551234567" className="flex items-center gap-2 text-gray-900 hover:text-green-700 transition-colors">
              <Phone className="w-5 h-5" />
              <span className="font-medium">(555) 123-4567</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}


export default page;
