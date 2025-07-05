// src/pages/Services.jsx
import React from "react";
import ServiceCard from "../components/ServiceCard";
const Services = () => {
  const packages = [
    {
      title: "Premium Package",
      price: "15,000",
      popular: true,
      features: [
        "Full-fledged management of 3 platforms (IG, FB, YouTube)",
        "30 content pieces (15 Carousels + 15 Reels)",
        "Professional account setup & brand optimization",
        "Complete market research & competitor analysis",
        "Custom script writing & video editing",
        "30-day content calendar with festive posts",
      ],
    },
    {
      title: "Standard Package",
      price: "10,000",
      popular: true,
      features: [
        "Full-fledged management of 3 platforms",
        "15 content pieces (10 Carousels + 5 Reels)",
        "Professional account setup & optimization",
        "Market research & competitor analysis",
        "Custom script writing & video editing",
        "15-day content calendar",
      ],
    },
    {
      title: "Basic Package",
      price: "5,000",
      popular: true,
      features: [
        "Content creation (5 Carousels + 5 Reels)",
        "Brand optimization",
        "Market research & competitor analysis",
        "Custom script writing",
        "Professional video editing",
        "10-day content calendar (No page handling)",
      ],
    },
  ];

  const additionalServices = [
    {
      title: "Graphic Designing",
      price: "250/graphic",
      min: "5 graphics min",
      features: ["Social media posters", "Flyers", "Templates", "Carousels"],
    },
    {
      title: "Video Editing",
      price: "350/video",
      min: "5 videos min",
      features: ["Professional editing", "Stock assets", "Captions", "Scripts"],
    },
    {
      title: "Content Calendar",
      price: "999/month",
      min: "2 months min",
      features: ["30-day content calendar", "Brand optimization"],
    },
    {
      title: "Marketing Campaign",
      price: "2,000/campaign",
      min: "Creative: ₹600 each",
      features: [
        "Ad campaign management",
        "Budget-based pricing",
        "Creative creation",
      ],
    },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Packages Section */}
        <section className="mb-20 bg-gray-50 rounded-3xl shadow-2xl px-4 md:px-16 py-16 w-full max-w-7xl mx-auto min-h-[600px]">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 py-2">
              Social Media Management Packages
            </h1>
            <div className="relative mx-auto w-20 h-1 overflow-hidden rounded-full">
              <div className="absolute inset-0 animate-gradientMove bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-500 w-[200%]"/>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className="transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-br hover:from-indigo-50 hover:to-purple-100 hover:ring-4 hover:ring-indigo-100 rounded-xl border border-transparent bg-white h-full flex"
                style={{ minHeight: "420px" }}
              >
                <ServiceCard
                  title={pkg.title}
                  price={pkg.price}
                  features={pkg.features}
                  popular={pkg.popular}
                />
              </div>
            ))}
          </div>
          {/* Additional Services */}
          <section>
            <div className="text-center py-16">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 ">
                Additional Services
              </h2>
              {/* <div className="h-1 w-20 bg-indigo-600 mx-auto"></div> */}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-br hover:from-indigo-50 hover:to-purple-100 hover:ring-4 hover:ring-indigo-100"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-indigo-700 mb-2">
                      {service.title}
                    </h3>
                    <div className="text-2xl font-bold mb-2">
                      ₹{service.price}
                    </div>
                    <p className="text-sm text-gray-500 mb-4">{service.min}</p>

                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg
                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <button className="w-full bg-indigo-100 hover:bg-indigo-200 text-indigo-700 py-2 px-4 rounded-lg transition duration-300 font-medium">
                      Order Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Services;
