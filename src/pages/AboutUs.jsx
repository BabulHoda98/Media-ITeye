import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const AboutUs = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  const stats = [
    { value: 15, suffix: '+', label: "Brands Empowered" },
    { value: 25, suffix: 'K+', label: "Ad Spend Managed" },
    { value: 10, suffix: '+', label: "Successful Campaigns" },
    { value: 97.9, suffix: '%', label: "Account Reach" }
  ];

  return (
    <div className="font-sans bg-gradient-to-br from-pink-200 via-yellow-100 to-blue-200">
      {/* Intro Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">About Media ITeye</h2>
            <div className="relative mx-auto w-20 h-1 overflow-hidden rounded-full">
              <div className="absolute inset-0 animate-gradientMove bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-500 w-[200%]" />
            </div>
            <p className="text-lg text-black mt-4">
              Media ITeye symbolizes the dynamic synergy between creativity and technology...
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { title: "Engage", desc: "Build digital relationships and reputation" },
              { title: "Elevate", desc: "Transform your social media presence" },
              { title: "Empower", desc: "Make your brand dance to the rhythm of success" }
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-md text-center">
                <h3 className="text-2xl font-bold text-indigo-700 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-50 to-purple-50" ref={ref}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-4xl font-bold text-indigo-700 mb-2">
                  {inView && (
                    <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
                  )}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
