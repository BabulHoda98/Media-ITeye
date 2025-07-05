import React from 'react';

const ServiceCard = ({ title, price, features, popular }) => {
  return (
    <div className={`border rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 ${
      popular ? 'border-amber-400 border-2 relative' : 'border-gray-200'
    }`}>
      {popular && (
        <div className="bg-amber-500 text-white text-center py-1 font-bold text-sm">
          MOST POPULAR
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold text-indigo-700 mb-2">{title}</h3>
        <div className="text-3xl font-bold mb-4">₹{price}<span className="text-sm font-normal text-gray-500">/month</span></div>
        
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg transition duration-300 font-medium">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;