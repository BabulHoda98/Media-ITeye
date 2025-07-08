import React from "react";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  const packages = [
    // ... (same package data as before)
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
    // ... (same additional services data as before)
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
    {
      title: "Software Development",
      price: "₹2,500 / Development Cycle",
      min: "Minimum 3 Development Cycles",
      features: [
        "3 complete software development cycles included",
        "Tailored software solutions for your business",
        "Bug fixing and performance optimization",
      ],
    },
    {
      title: "Full Stack Development",
      price: "₹7,500 / Development Cycle",
      min: "Minimum 6 Development Cycles",
      features: [
        "6 full-stack development cycles included",
        "End-to-end Web and Mobile App Development",
        "Ongoing support, maintenance, and regular updates",
        // "Frontend, Backend, and Database integration",
      ],
    },
  ];

  // Gradient colors for additional service cards
  const cardGradients = [
    "from-cyan-500 to-blue-600", // Graphic Designing
    "from-purple-500 to-indigo-600", // Video Editing
    "from-emerald-500 to-teal-600", // Content Calendar
    "from-amber-500 to-orange-600", // Marketing Campaign
    "from-fuchsia-500 to-pink-600", // Software Development
    "from-violet-500 to-purple-600", // Full Stack Development
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-pink-50 via-yellow-50 to-blue-50">
      <div className="container mx-auto px-4">
        <section className="mb-20 bg-white rounded-3xl shadow-xl px-4 md:px-16 py-16 w-full max-w-7xl mx-auto">
          {/* Packages Section */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 py-2">
              Social Media Management Packages
            </h1>
            <div className="relative mx-auto w-20 h-1 overflow-hidden rounded-full">
              <div className="absolute inset-0 animate-gradientMove bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-500 w-[200%]" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className="transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl rounded-xl border border-gray-100 bg-white h-full flex"
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
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
                Additional Services
              </h2>
              <div className="relative mx-auto w-20 h-1 overflow-hidden rounded-full mt-4">
                <div className="absolute inset-0 animate-gradientMove bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 w-[200%]" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {additionalServices.map((service, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${cardGradients[index]} rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl`}
                >
                  <div className="p-6 flex flex-col h-full">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-white">
                        {service.title}
                      </h3>
                      <div className="text-2xl font-bold text-white mt-2">
                        ₹{service.price}
                      </div>
                      <p className="text-blue-100 text-sm mt-1">
                        {service.min}
                      </p>
                    </div>

                    <div className="flex-grow">
                      <ul className="space-y-3 mb-6">
                        {service.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-start text-blue-50"
                          >
                            <svg
                              className="h-5 w-5 text-white mr-2 mt-0.5 flex-shrink-0"
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
                            <span className="font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button className="mt-auto w-full bg-white bg-opacity-90 hover:bg-opacity-100 text-gray-800 py-3 px-4 rounded-xl transition duration-300 font-semibold shadow-md hover:shadow-lg">
                      Service Me
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
