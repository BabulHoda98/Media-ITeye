import React, { useState, useEffect } from "react";
import image1 from "../assets/images/team/Team1.jpg";
import image2 from "../assets/images/team/team2.jpg";
import image3 from "../assets/images/team/team3.jpg";
import image4 from "../assets/images/team/team4.jpg";

const Team = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const teamMembers = [
    {
      name: "Er. Vikas Singh",
      position: "Founder",
      quote:
        "At Media ITeye, creativity is our currency, innovation is our fuel, and collaboration is our strength.",
      image: image1,
    },
    {
      name: "Jyoti Verma",
      position: "COO",
      quote:
        "Leadership is not about being in charge. It's about taking care of those in your charge.",
      image: image2,
    },
    {
      name: "Dipti Singh",
      position: "Regional Head",
      quote:
        "Empowering teams to achieve greatness through collaboration and innovation.",
      image: image3,
    },
    {
      name: "Shabana Farooqui",
      position: "Social Media Community Manager",
      quote:
        "Building communities through authentic engagement and meaningful connections.",
      image: image4,
    },
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 py-2 tracking-tight">
            Our Creative Team
          </h1>
          <div className="relative mx-auto w-24 h-1.5 overflow-hidden rounded-full mb-6">
            <div className="absolute inset-0 animate-gradientMove bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-500 w-[200%]"/>
          </div>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto py-2 leading-relaxed">
            Together, we transform ideas into impactful digital experiences, one post at a time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => {
            const gradients = [
              "bg-gradient-to-br from-pink-500/90 via-white to-yellow-300/90",
              "bg-gradient-to-br from-indigo-500/90 via-white to-blue-300/90",
              "bg-gradient-to-br from-green-500/90 via-white to-teal-300/90",
              "bg-gradient-to-br from-yellow-400/90 via-white to-pink-400/90",
            ];
            
            const cardBg = gradients[index % gradients.length];
            const isActive = activeCard === index;
            
            return (
              <div 
                key={index}
                className={`group perspective-1000 ${isActive && !isMobile ? "z-20" : "z-10"}`}
                onMouseEnter={() => !isMobile && setActiveCard(index)}
                onMouseLeave={() => !isMobile && setActiveCard(null)}
                onClick={() => isMobile && setActiveCard(activeCard === index ? null : index)}
              >
                <div 
                  className={`${cardBg} relative preserve-3d rounded-2xl shadow-2xl transition-all duration-500 
                    ${isActive && !isMobile 
                      ? "scale-125 shadow-2xl shadow-indigo-900/60" 
                      : "group-hover:shadow-2xl group-hover:shadow-indigo-900/40"} 
                    h-full flex flex-col items-center transform-style-3d 
                    ${isActive && !isMobile 
                      ? "rotate-y-0 rotate-x-0 translate-z-30" 
                      : "group-hover:rotate-y-10 group-hover:rotate-x-5 group-hover:translate-z-16"}`}
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Floating image with parallax effect */}
                  <div className="relative w-40 h-40 mt-10 mb-6 overflow-hidden rounded-full border-4 border-white/80 shadow-xl group-hover:shadow-2xl group-hover:shadow-indigo-500/30 transform-style-3d">
                    <div className={`parallax-wrapper ${isActive && !isMobile ? "scale-105" : ""}`}>
                      <img
                        src={member.image}
                        alt={member.name}
                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Content with depth */}
                  <div className="p-5 pt-0 pb-8 text-center flex flex-col items-center transform-style-3d">
                    <div className="mb-2 transform translate-z-10">
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-gray-900">
                        {member.name}
                      </h3>
                      <div className="w-16 h-0.5 bg-indigo-600 mx-auto my-2 transform translate-z-5"></div>
                      <p className="text-indigo-700 font-semibold tracking-wide">
                        {member.position}
                      </p>
                    </div>
                    
                    {member.quote && (
                      <div className="transform translate-z-5">
                        <div className="absolute inset-x-4 bottom-0 h-24 bg-gradient-to-t from-white/70 to-transparent pointer-events-none"></div>
                        <p className="text-gray-700 italic text-sm relative z-10 max-h-24 overflow-y-auto py-2 px-1 scrollbar-hide">
                          "{member.quote}"
                        </p>
                      </div>
                    )}
                  </div>
                  
                  {/* Floating decorative elements */}
                  <div className="absolute -inset-2 overflow-hidden rounded-2xl pointer-events-none">
                    <div className="absolute inset-0 bg-white/10 border border-white/20 rounded-2xl transform translate-z-10"></div>
                    <div className="absolute inset-2 bg-white/5 border border-white/10 rounded-xl transform translate-z-5"></div>
                  </div>
                  
                  {/* Active state indicator */}
                  {isActive && !isMobile && (
                    <div className="absolute -inset-3 overflow-hidden rounded-2xl pointer-events-none">
                      <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-2xl transform translate-z-15 blur-sm"></div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Custom styles for 3D effects */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .translate-z-5 {
          transform: translateZ(5px);
        }
        .translate-z-10 {
          transform: translateZ(10px);
        }
        .translate-z-15 {
          transform: translateZ(15px);
        }
        .translate-z-16 {
          transform: translateZ(16px);
        }
        .translate-z-30 {
          transform: translateZ(30px);
        }
        .parallax-wrapper {
          transform: translateZ(20px) scale(0.92);
          transition: transform 0.5s cubic-bezier(0.17, 0.67, 0.83, 0.67);
        }
        .group:hover .parallax-wrapper {
          transform: translateZ(40px) scale(1);
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .animate-gradientMove {
          animation: gradientMove 3s linear infinite;
        }
        @keyframes gradientMove {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
    </div>
  );
};

export default Team;
// --------------------------------------------------------
// import React, { useState, useEffect, useRef } from "react";
// import image1 from "../assets/images/team/Team1.jpg";
// import image2 from "../assets/images/team/team2.jpg";
// import image3 from "../assets/images/team/team3.jpg";
// import image4 from "../assets/images/team/team4.jpg";

// const Team = () => {
//   const [activeCard, setActiveCard] = useState(null);
//   const [isMobile, setIsMobile] = useState(false);
//   const cardRefs = useRef([]);
  
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
    
//     handleResize();
//     window.addEventListener("resize", handleResize);
    
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   // Handle mouse move for 3D tilt effect
//   useEffect(() => {
//     if (isMobile) return;
    
//     const handleMouseMove = (e) => {
//       cardRefs.current.forEach((card, index) => {
//         if (!card || activeCard !== index) return;
        
//         const rect = card.getBoundingClientRect();
//         const x = e.clientX - rect.left;
//         const y = e.clientY - rect.top;
//         const centerX = rect.width / 2;
//         const centerY = rect.height / 2;
//         const rotateY = (x - centerX) / 25;
//         const rotateX = (centerY - y) / 25;
        
//         card.style.transform = `
//           perspective(1000px)
//           rotateX(${rotateX}deg)
//           rotateY(${rotateY}deg)
//           scale3d(1.15, 1.15, 1.15)
//           translateZ(40px)
//         `;
//       });
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, [activeCard, isMobile]);

//   const teamMembers = [
//     {
//       name: "Er. Vikas Singh",
//       position: "Founder",
//       quote: "At Media ITeye, creativity is our currency, innovation is our fuel, and collaboration is our strength.",
//       image: image1,
//       gradient: "from-amber-500/90 via-rose-500/90 to-fuchsia-700/90"
//     },
//     {
//       name: "Jyoti Verma",
//       position: "COO",
//       quote: "Leadership is not about being in charge. It's about taking care of those in your charge.",
//       image: image2,
//       gradient: "from-emerald-500/90 via-cyan-500/90 to-blue-700/90"
//     },
//     {
//       name: "Dipti Singh",
//       position: "Regional Head",
//       quote: "Empowering teams to achieve greatness through collaboration and innovation.",
//       image: image3,
//       gradient: "from-violet-500/90 via-purple-500/90 to-indigo-700/90"
//     },
//     {
//       name: "Shabana Farooqui",
//       position: "Social Media Community Manager",
//       quote: "Building communities through authentic engagement and meaningful connections.",
//       image: image4,
//       gradient: "from-rose-500/90 via-pink-500/90 to-red-700/90"
//     },
//   ];

//   const resetCardStyles = () => {
//     cardRefs.current.forEach(card => {
//       if (card) {
//         card.style.transform = '';
//       }
//     });
//   };

//   return (
//     <div className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-neutral-900">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-20">
//           <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-rose-300 to-purple-400">
//               Our Creative Team
//             </span>
//           </h1>
          
//           <div className="relative mx-auto w-32 h-1 overflow-hidden rounded-full mb-6">
//             <div className="absolute inset-0 animate-gradientMove bg-gradient-to-r from-amber-400 via-rose-500 to-purple-600 w-[300%]"/>
//           </div>
          
//           <p className="text-xl text-cyan-100 max-w-2xl mx-auto leading-relaxed bg-black/20 backdrop-blur-sm rounded-xl p-4 border border-white/10">
//             Together, we transform ideas into impactful digital experiences, one post at a time.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
//           {teamMembers.map((member, index) => {
//             const isActive = activeCard === index;
            
//             return (
//               <div 
//                 key={index}
//                 className="group perspective-1000 transition-all duration-300"
//                 onMouseEnter={() => !isMobile && setActiveCard(index)}
//                 onMouseLeave={() => !isMobile && setActiveCard(null)}
//                 onClick={() => {
//                   if (isMobile) {
//                     if (isActive) {
//                       setActiveCard(null);
//                       resetCardStyles();
//                     } else {
//                       setActiveCard(index);
//                     }
//                   }
//                 }}
//               >
//                 <div 
//                   ref={el => cardRefs.current[index] = el}
//                   className={`
//                     bg-gradient-to-br ${member.gradient}
//                     relative preserve-3d rounded-3xl shadow-2xl transition-all duration-500 
//                     h-full flex flex-col items-center transform-style-3d overflow-hidden
//                     ${isActive && !isMobile 
//                       ? "scale-110 shadow-xl shadow-purple-900/50" 
//                       : "group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-cyan-900/30"}
//                     border border-white/10
//                   `}
//                   style={{ transformStyle: 'preserve-3d' }}
//                 >
//                   {/* Animated gradient border */}
//                   {isActive && (
//                     <div className="absolute -inset-1 rounded-3xl overflow-hidden pointer-events-none">
//                       <div className="absolute inset-0 animate-gradientMove bg-gradient-to-r from-amber-400 via-rose-500 to-purple-600 w-[300%] blur-md opacity-70"></div>
//                     </div>
//                   )}
                  
//                   {/* Floating image */}
//                   <div className="relative w-44 h-44 mt-12 mb-8 overflow-hidden rounded-full border-4 border-white/90 shadow-2xl transform-style-3d">
//                     <div className={`parallax-wrapper transition-all duration-700 ${isActive ? "translate-z-20 scale-110" : ""}`}>
//                       <img
//                         src={member.image}
//                         alt={member.name}
//                         className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
//                       />
//                     </div>
                    
//                     {/* Floating particles */}
//                     {[0, 1, 2].map(i => (
//                       <div 
//                         key={i}
//                         className={`absolute inset-0 rounded-full border border-white/30 animate-pulse`}
//                         style={{
//                           transform: `scale(${1 + i*0.2})`,
//                           animationDelay: `${i * 0.5}s`,
//                           opacity: isActive ? 0.4 - i*0.1 : 0.2 - i*0.05
//                         }}
//                       />
//                     ))}
//                   </div>

//                   {/* Content */}
//                   <div className="p-6 pt-0 pb-8 text-center flex flex-col items-center transform-style-3d w-full">
//                     <div className="mb-4 transform translate-z-10">
//                       <h3 className="text-2xl font-bold text-white group-hover:text-amber-50 transition-colors">
//                         {member.name}
//                       </h3>
//                       <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-rose-500 mx-auto my-3 transform translate-z-5 rounded-full"></div>
//                       <p className="text-amber-200 font-semibold tracking-wide bg-black/30 px-3 py-1 rounded-full inline-block">
//                         {member.position}
//                       </p>
//                     </div>
                    
//                     {member.quote && (
//                       <div className="transform translate-z-5 w-full">
//                         <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 to-transparent pointer-events-none"></div>
//                         <p className="text-cyan-50/90 italic text-base relative z-10 px-4 py-6 bg-black/20 backdrop-blur-sm rounded-xl border border-white/10">
//                           "{member.quote}"
//                         </p>
//                       </div>
//                     )}
//                   </div>
                  
//                   {/* Floating decorative elements */}
//                   <div className="absolute -inset-2 overflow-hidden rounded-3xl pointer-events-none">
//                     <div className="absolute inset-0 bg-white/5 border border-white/5 rounded-3xl transform translate-z-10"></div>
//                   </div>
                  
//                   {/* Glow effect */}
//                   <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
//                     <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient.replace('/90', '/20')} blur-2xl opacity-30 transition-opacity duration-700 ${isActive ? "opacity-50" : ""}`}></div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
      
//       {/* Custom styles */}
//       <style jsx>{`
//         .perspective-1000 {
//           perspective: 1200px;
//         }
//         .preserve-3d {
//           transform-style: preserve-3d;
//         }
//         .transform-style-3d {
//           transform-style: preserve-3d;
//         }
//         .translate-z-5 {
//           transform: translateZ(5px);
//         }
//         .translate-z-10 {
//           transform: translateZ(10px);
//         }
//         .translate-z-20 {
//           transform: translateZ(20px);
//         }
//         .parallax-wrapper {
//           transform: translateZ(20px) scale(0.92);
//           transition: transform 0.5s cubic-bezier(0.17, 0.67, 0.83, 0.67);
//         }
//         .group:hover .parallax-wrapper {
//           transform: translateZ(40px) scale(1);
//         }
//         .animate-gradientMove {
//           animation: gradientMove 4s linear infinite;
//         }
//         @keyframes gradientMove {
//           0% { transform: translateX(-50%); }
//           100% { transform: translateX(0%); }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Team;