// // src/pages/Testimonials.jsx
// import React from "react";

// const Testimonials = () => {
//   const testimonials = [
//     {
//       content:
//         "Media ITeye ne hmare online dukaan ki social media game bdha di. Unki creativity aur strategy se hmare followers and sales dono badh gye. Shukriya!",
//       author: "Business Owner",
//       time: "11:59 PM",
//     },
//     {
//       content:
//         "I got 5 leads converted from recent marketing campaign. Sirf ₹500 ka hi budget diya tha. Good job!",
//       author: "JOY AND BLESSINGS",
//       time: "Today 8:45 AM",
//     },
//     {
//       content:
//         "I must say your Social Media Services are best in class. The way you've designed my posts and reels, hats off to your creative mind. I really appreciate how agile and accommodating you were to my needs.",
//       author: "Satisfied Client",
//       time: "04:41 PM",
//     },
//     {
//       content:
//         "Great Job! Our Social Media presence has improved a lot in past 3 months. The reach has expanded and your efforts have truly made a difference.",
//       author: "Happy Client",
//       time: "10:14 AM",
//     },
//     {
//       content:
//         "Online Branding bhot ache se kiya hai apne. Thanks!! Agle projects ke liye fir se connect karenge.",
//       author: "Returning Client",
//       time: "07:46 AM",
//     },
//     {
//       content:
//         "Highly recommended Media ITeye for anyone looking to take their social media game to next level!",
//       author: "Social Media Manager",
//       time: "18:21",
//     },
//   ];

//   return (
//     <div className="py-16 bg-gray-200">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h1 className="text-3xl md:text-4xl font-bold text-blue-900 py-2">
//             Wall of Satisfaction
//           </h1>
//           {/* <div className="h-1 w-20 bg-indigo-600 mx-auto mb-6"></div> */}
//           <div className="relative mx-auto w-20 h-1 overflow-hidden rounded-full">
//             <div className="absolute inset-0 animate-gradientMove bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-500 w-[200%]" />
//           </div>
//           <p className="text-lg text-black max-w-2xl mx-auto py-2">
//             Customer Satisfaction is worthless. The result of a business is a
//             satisfied customer.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           {testimonials.map((testimonial, index) => (
//             // <div key={index} className="bg-gray-300 rounded-xl shadow-lg p-6 border-l-4 border-indigo-500">
//             <div
//               key={index}
//               className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-indigo-500 transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-amber-400 hover:bg-gradient-to-br hover:from-indigo-100 hover:to-yellow-100"
//             >
//               <p className="text-black mb-4 italic">"{testimonial.content}"</p>
//               <div className="flex justify-between items-center">
//                 <div>
//                   <div className="font-bold text-gray-800">
//                     {testimonial.author}
//                   </div>
//                   <div className="text-sm text-gray-500">
//                     {testimonial.time}
//                   </div>
//                 </div>
//                 <div className="flex text-amber-400">
//                   {[...Array(5)].map((_, i) => (
//                     <svg
//                       key={i}
//                       className="w-5 h-5 fill-current"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
//                     </svg>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="mt-16 bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
//           <h2 className="text-2xl font-bold text-center mb-6">
//             Performance Metrics
//           </h2>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
//             <div className="bg-indigo-50 p-4 rounded-lg">
//               <div className="text-3xl font-bold text-indigo-700">97.9%</div>
//               <div className="text-gray-600">Accounts Reached</div>
//               <div className="text-green-500 text-sm">from ads</div>
//             </div>
//             <div className="bg-indigo-50 p-4 rounded-lg">
//               <div className="text-3xl font-bold text-indigo-700">+442%</div>
//               <div className="text-gray-600">Followers</div>
//               <div className="text-sm">27 new followers</div>
//             </div>
//             <div className="bg-indigo-50 p-4 rounded-lg">
//               <div className="text-3xl font-bold text-indigo-700">+1.47%</div>
//               <div className="text-gray-600">Non-followers</div>
//               <div className="text-sm">6,912 reached</div>
//             </div>
//             <div className="bg-indigo-50 p-4 rounded-lg">
//               <div className="text-3xl font-bold text-indigo-700">+1,288%</div>
//               <div className="text-gray-600">Impressions</div>
//               <div className="text-sm">10,313 total</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;
// src/pages/Testimonials.jsx
import React, { useRef, useState } from 'react';

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
    <div className="py-16 bg-gray-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Wall of Satisfaction</h1>

          
          
          <div className="relative mx-auto w-20 h-1 overflow-hidden rounded-full">
              <div className="absolute inset-0 animate-gradientMove bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-500 w-[200%]"/>
            </div>





          <p className="text-lg text-black max-w-2xl mx-auto mt-4">
            Customer Satisfaction is worthless. The result of a business is a satisfied customer.
          </p>
        </div>
        {/* review section  */}
        <div className="relative overflow-x-hidden py-2">
          <div
            className={`flex gap-8 w-max ${isPaused ? '' : 'animate-slide-infinite'}`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {testimonials.concat(testimonials).map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-indigo-500 transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-amber-400 hover:bg-gradient-to-br hover:from-indigo-100 hover:to-yellow-100 min-w-[320px] max-w-xs flex-shrink-0"
                style={{ width: '320px' }}
              >
                <p className="text-black mb-4 italic">"{testimonial.content}"</p>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-bold text-gray-800">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.time}</div>
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
            ))}
          </div>
          <style>{`
            @keyframes slide-infinite {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-slide-infinite {
              animation: slide-infinite 30s linear infinite;
            }
          `}</style>
        </div>
        {/* performance section  */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">Performance Metrics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-indigo-50 p-4 rounded-lg">
              <div className="text-3xl font-bold text-indigo-700">97.9%</div>
              <div className="text-gray-600">Accounts Reached</div>
              <div className="text-green-500 text-sm">from ads</div>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg">
              <div className="text-3xl font-bold text-indigo-700">+442%</div>
              <div className="text-gray-600">Followers</div>
              <div className="text-sm">27 new followers</div>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg">
              <div className="text-3xl font-bold text-indigo-700">+1.47%</div>
              <div className="text-gray-600">Non-followers</div>
              <div className="text-sm">6,912 reached</div>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg">
              <div className="text-3xl font-bold text-indigo-700">+1,288%</div>
              <div className="text-gray-600">Impressions</div>
              <div className="text-sm">10,313 total</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;