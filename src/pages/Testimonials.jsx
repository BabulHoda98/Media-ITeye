import React, { useState } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      content: "Media ITeye ne hmare online dukaan ki social media game bdha di. Unki creativity aur strategy se hmare followers and sales dono badh gye. Shukriya!",
      author: "Business Owner",
      time: "11:59 PM"
    },
    {
      content: "I got 5 leads converted from recent marketing campaign. Sirf ₹500 ka hi budget diya tha. Good job!",
      author: "JOY AND BLESSINGS",
      time: "Today 8:45 AM"
    },
    {
      content: "I must say your Social Media Services are best in class. The way you've designed my posts and reels, hats off to your creative mind. I really appreciate how agile and accommodating you were to my needs.",
      author: "Satisfied Client",
      time: "04:41 PM"
    },
    {
      content: "Great Job! Our Social Media presence has improved a lot in past 3 months. The reach has expanded and your efforts have truly made a difference.",
      author: "Happy Client",
      time: "10:14 AM"
    },
    {
      content: "Online Branding bhot ache se kiya hai apne. Thanks!! Agle projects ke liye fir se connect karenge.",
      author: "Returning Client",
      time: "07:46 AM"
    },
    {
      content: "Highly recommended Media ITeye for anyone looking to take their social media game to next level!",
      author: "Social Media Manager",
      time: "18:21"
    }
  ];

  const [isPaused, setIsPaused] = useState(false);

  return (
    // <div className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
    <div className="py-16 bg-gradient-to-br from-pink-200 via-yellow-100 to-blue-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 bg-clip-text bg-gradient-to-r from-slate-800 to-slate-900 mb-4">
            Wall of Satisfaction
          </h1>
          <div className="relative mx-auto w-24 h-1.5 overflow-hidden rounded-full mb-6">
            <div className="absolute inset-0 animate-gradientMove bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-500 w-[200%]"/>
          </div>
          
          <p className="text-lg text-slate-700 max-w-2xl mx-auto italic font-medium">
            "Customer Satisfaction is worthless. The result of a business is a satisfied customer."
          </p>
        </div>
        
        {/* Professional Testimonial Cards */}
        <div className="relative overflow-x-hidden py-6 ">
          <div 
            className={`flex gap-8 w-max ${isPaused ? '' : 'animate-slide-infinite'}`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="group rounded-2xl p-[2px] bg-gradient-to-br from-slate-300 via-slate-200 to-slate-100 shadow-lg hover:bg-blue-500 text-white"
                style={{
                  transform: 'perspective(1000px)',
                  transformStyle: 'preserve-3d',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)'
                }}
              >
                <div 
                  className="bg-white rounded-2xl p-6 min-w-[320px] max-w-xs h-full transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-slate-50 group-hover:to-white"
                  style={{
                    transform: 'translateZ(20px)',
                  }}
                >
                  <div className="absolute top-4 right-4 group-hover:opacity-100 opacity-70 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>
                  
                  <p className="text-slate-700 mb-6 italic relative z-10">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex justify-between items-center border-t border-slate-200 pt-4">
                    <div>
                      <div className="font-bold text-slate-800">{testimonial.author}</div>
                      <div className="text-sm text-slate-500">{testimonial.time}</div>
                    </div>
                    <div className="flex text-amber-400">
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
              transform: perspective(1000px) rotateY(3deg) rotateX(1deg) translateY(-5px) !important;
              transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
              box-shadow: 0 30px 60px -15px rgba(0, 0, 0, 0.15);
            }
          `}</style>
        </div>
        
        {/* Professional Performance Metrics */}
        <div className="mt-20 bg-gradient-to-br from-slate-50 to-white rounded-2xl shadow-lg p-8 max-w-5xl mx-auto border border-slate-200">
          <h2 className="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-900">
            Performance Metrics
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "97.9%", label: "Accounts Reached", desc: "from ads", color: "from-blue-600 to-blue-800" },
              { value: "+442%", label: "Followers", desc: "27 new followers", color: "from-indigo-600 to-indigo-800" },
              { value: "+1.47%", label: "Non-followers", desc: "6,912 reached", color: "from-slate-600 to-slate-800" },
              { value: "+1,288%", label: "Impressions", desc: "10,313 total", color: "from-cyan-600 to-cyan-800" },
            ].map((metric, i) => (
              <div 
                key={i}
                className="bg-white rounded-xl p-5 border border-slate-200 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05)',
                  borderLeft: '3px solid',
                  borderImage: 'linear-gradient(to bottom, #3b82f6, #1d4ed8) 1'
                }}
              >
                <div className={`text-4xl font-bold mb-2 bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}>
                  {metric.value}
                </div>
                <div className="text-slate-700 font-medium">{metric.label}</div>
                <div className="text-sm text-slate-500 mt-1">{metric.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;