import React, { useState } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      content: "Media ITeye ne hmare online dukaan ki social media game bdha di. Unki creativity aur strategy se hmare followers and sales dono badh gye. Shukriya!",
      author: "Business Owner",
      time: "11:59 PM",
      color: "from-amber-600 to-orange-700" // Deeper amber-orange
    },
    {
      content: "I got 5 leads converted from recent marketing campaign. Sirf ₹500 ka hi budget diya tha. Good job!",
      author: "JOY AND BLESSINGS",
      time: "Today 8:45 AM",
      color: "from-emerald-600 to-teal-700" // Deeper emerald-teal
    },
    {
      content: "I must say your Social Media Services are best in class. The way you've designed my posts and reels, hats off to your creative mind. I really appreciate how agile and accommodating you were to my needs.",
      author: "Satisfied Client",
      time: "04:41 PM",
      color: "from-indigo-600 to-purple-700" // Deeper indigo-purple
    },
    {
      content: "Great Job! Our Social Media presence has improved a lot in past 3 months. The reach has expanded and your efforts have truly made a difference.",
      author: "Happy Client",
      time: "10:14 AM",
      color: "from-cyan-600 to-blue-700" // Deeper cyan-blue
    },
    {
      content: "Online Branding bhot ache se kiya hai apne. Thanks!! Agle projects ke liye fir se connect karenge.",
      author: "Returning Client",
      time: "07:46 AM",
      color: "from-rose-600 to-pink-700" // Deeper rose-pink
    },
    {
      content: "Highly recommended Media ITeye for anyone looking to take their social media game to next level!",
      author: "Social Media Manager",
      time: "18:21",
      color: "from-violet-600 to-fuchsia-700" // Deeper violet-fuchsia
    }
  ];

  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="py-16 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-purple-800 mb-4">
            Wall of Satisfaction
          </h1>
          <div className="relative mx-auto w-24 h-1.5 overflow-hidden rounded-full mb-6">
            <div className="absolute inset-0 animate-gradientMove bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-500 w-[200%]"/>
          </div>
          
          <p className="text-lg text-slate-700 max-w-2xl mx-auto italic font-medium">
            "Customer Satisfaction is worthless. The result of a business is a satisfied customer."
          </p>
        </div>
        
        {/* Enhanced Testimonial Cards */}
        <div className="relative overflow-x-hidden py-6">
          <div 
            className={`flex gap-8 w-max ${isPaused ? '' : 'animate-slide-infinite'}`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className={`group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:rotate-1`}
                style={{ perspective: '1000px' }} // For 3D effect
              >
                <div className={`relative bg-gradient-to-br ${testimonial.color} p-6 min-w-[320px] max-w-xs h-full text-white`}>
                  {/* Subtle border for separation */}
                  <div className="absolute inset-0 rounded-2xl border border-white/10 pointer-events-none"></div>

                  <div className="absolute top-4 right-4 text-white/50 opacity-20 group-hover:opacity-60 transition-opacity duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>
                  
                  <p className="text-white mb-6 italic font-medium relative z-10 text-lg leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-white/30">
                    <div>
                      <div className="font-bold text-white text-lg">{testimonial.author}</div>
                      <div className="text-sm text-white/80">{testimonial.time}</div>
                    </div>
                    <div className="flex text-amber-300">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <style jsx>{`
            @keyframes slide-infinite {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-slide-infinite {
              animation: slide-infinite 40s linear infinite;
            }
            .group:hover {
              box-shadow: 0 40px 80px -20px rgba(0, 0, 0, 0.3); /* Stronger shadow */
            }
          `}</style>
          
        </div>
        
        {/* Enhanced Performance Metrics */}
        <div className="mt-20 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl shadow-xl p-8 max-w-5xl mx-auto border border-indigo-200/50">
          <h2 className="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-purple-800">
            Performance Metrics
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "97.9%", label: "Accounts Reached", desc: "from ads", color: "bg-gradient-to-br from-blue-600 to-blue-800" },
              { value: "+442%", label: "Followers", desc: "27 new followers", color: "bg-gradient-to-br from-indigo-600 to-indigo-800" },
              { value: "+1.47%", label: "Non-followers", desc: "6,912 reached", color: "bg-gradient-to-br from-slate-600 to-slate-800" },
              { value: "+1,288%", label: "Impressions", desc: "10,313 total", color: "bg-gradient-to-br from-cyan-600 to-cyan-800" },
            ].map((metric, i) => (
              <div 
                key={i}
                className={`rounded-xl p-5 shadow-lg transition-all duration-300 hover:-translate-y-1 ${metric.color} text-white transform hover:scale-105`}
              >
                <div className="text-4xl font-bold mb-2">
                  {metric.value}
                </div>
                <div className="text-lg font-medium mb-1">{metric.label}</div>
                <div className="text-sm text-blue-100 opacity-90">{metric.desc}</div>
                <div className="mt-4 pt-4 border-t border-white/20">
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div 
                      className="bg-white h-2 rounded-full" 
                      style={{ width: `${Math.min(100, 30 + i * 20)}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 transform hover:scale-105">
              View Full Report
            </button>
          </div>
        </div>
        
        {/* Client Logos Section (Add your client logos here if desired) */}
      
      </div>
    </div>
  );
};

export default Testimonials;