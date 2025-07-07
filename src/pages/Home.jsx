// import React, { useEffect, useState, useRef } from "react";
// import { motion } from "framer-motion";

// const Home = () => {
//   const [currentHeroImage, setCurrentHeroImage] = useState(0);
//   const containerRef = useRef(null);
//   const heroImages = [
//     "/Team1.jpg",
//     "/Screenshot1.png",
//     "/Screenshot2.png",
//     "/Screenshot3.png",
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentHeroImage(prev => (prev + 1) % heroImages.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="min-h-screen bg-white overflow-x-hidden">
//       {/* Enhanced Hero Section */}
//       <section className="flex flex-col-reverse md:flex-row items-center justify-between px-4 py-12 md:py-24 max-w-7xl mx-auto">
//         {/* Left Content */}
//         <div className="w-full md:w-1/2 flex flex-col items-start space-y-8 mt-12 md:mt-0">
//           <motion.h1 
//             className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             Empowering Connections,<br />
//             <span className="text-amber-600">Illuminating Networks</span>
//           </motion.h1>
          
//           <motion.p 
//             className="text-lg text-gray-600 max-w-lg"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             Transform your online presence into a captivating symphony of likes, shares, and followers!
//           </motion.p>
          
//           <motion.div 
//             className="flex flex-col sm:flex-row gap-4"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//           >
//             <a
//               href="#services"
//               className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 shadow-lg hover:shadow-xl"
//             >
//               Explore Services
//             </a>
//             <a
//               href="#contact"
//               className="bg-white border-2 border-gray-800 text-gray-800 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition duration-300 shadow-lg hover:shadow-xl"
//             >
//               Contact Us
//             </a>
//           </motion.div>
//         </div>

//         {/* 3D Carousel Container */}
//         <div 
//           ref={containerRef}
//           className="w-full md:w-1/2 relative h-[400px] md:h-[500px] perspective-1000"
//         >
//           {heroImages.map((img, index) => (
//             <motion.div
//               key={img}
//               className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl"
//               initial={false}
//               animate={{
//                 rotateY: currentHeroImage === index ? 0 : 30,
//                 scale: currentHeroImage === index ? 1 : 0.85,
//                 opacity: currentHeroImage === index ? 1 : 0.7,
//                 zIndex: currentHeroImage === index ? 30 : 20 - Math.abs(currentHeroImage - index),
//                 x: currentHeroImage === index ? 0 : 
//                     index > currentHeroImage ? "30%" : "-30%",
//                 filter: currentHeroImage === index ? 
//                   "blur(0px)" : "blur(2px)",
//               }}
//               transition={{
//                 type: "spring",
//                 stiffness: 100,
//                 damping: 20,
//                 duration: 0.8
//               }}
//               style={{
//                 transformStyle: "preserve-3d",
//                 backfaceVisibility: "hidden",
//                 transformOrigin: "center",
//               }}
//             >
//               <div className="relative w-full h-full">
//                 <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/70 z-10" />
//                 <img
//                   src={img}
//                   alt="Service showcase"
//                   className="w-full h-full object-cover"
//                 />
                
//                 {/* Floating elements for 3D effect */}
//                 {currentHeroImage === index && (
//                   <>
//                     <motion.div 
//                       className="absolute top-6 left-6 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
//                       initial={{ y: -20, opacity: 0 }}
//                       animate={{ y: 0, opacity: 1 }}
//                       transition={{ delay: 0.4 }}
//                     >
//                       <span className="font-bold text-amber-600">+42%</span> Engagement
//                     </motion.div>
                    
//                     <motion.div 
//                       className="absolute bottom-6 right-6 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
//                       initial={{ y: 20, opacity: 0 }}
//                       animate={{ y: 0, opacity: 1 }}
//                       transition={{ delay: 0.6 }}
//                     >
//                       <span className="font-bold text-green-600">3.8x</span> Growth
//                     </motion.div>
//                   </>
//                 )}
//               </div>
//             </motion.div>
//           ))}
          
//           {/* Floating brand logo */}
//           <motion.div
//             className="absolute -top-8 -right-8 z-40"
//             initial={{ scale: 0, rotate: -45 }}
//             animate={{ scale: 1, rotate: 0 }}
//             transition={{ 
//               type: "spring",
//               delay: 0.8,
//               stiffness: 150,
//               damping: 15
//             }}
//           >
//             <div className="relative w-24 h-24">
//               <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl rotate-45 shadow-2xl" />
//               <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg rotate-[-45deg]">
//                 Miteye
//               </span>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Add your other sections (Services, Team, Testimonials) below */}
//     </div>
//   );
// };

// export default Home;
// -------------------------------------------------------------------
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import Team from './Team';
import Testimonials from './Testimonials';

const Home = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  const heroImages = [
    "/Team1.jpg",
    "/Screenshot1.png",
    "/Screenshot2.png",
    "/home2.jpg"
    //  "src/assets/images/HomeImages/Screenshot1.png",
    // "src/assets/images/HomeImages/Screenshot2.png",
    // "src/assets/images/HomeImages/Screenshot3.png"
  ];
  const homeImages = [
    "/imagesMiteye.jpg",
    "/home1.jpg",
    "/home3.jpg"
    //  "src/assets/images/HomeImages/Screenshot1.png",
    // "src/assets/images/HomeImages/Screenshot2.png",
    // "src/assets/images/HomeImages/Screenshot3.png"
  ];
  const [currentHeroImage, setCurrentHeroImage] = useState(0);

  useEffect(() => {
    setShowAnimation(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden bg-grey-100">
      
      {/* Three side-by-side divs: left, middle (wider), right */}
      <div className="flex w-full h-[800px] gap-3 mt-4 ml-20 mx-auto max-w-[120rem]">
        {/* Left */}
        <div className="bg-white basis-1/5 flex items-center justify-center shadow-2xl">
          {/* Show only a single static image, no animation */}
          <div className="relative w-full max-w-[400px] h-[400px] mx-auto flex items-center justify-center px-8">
            <img
              src={heroImages[3]}
              alt="Hero Visual"
              width={350}
              height={350}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] object-cover rounded-full border-8 border-blue-200 transition-all duration-700 opacity-100 scale-100 z-10"
              style={{
                transitionProperty: 'opacity, transform',
                zIndex: 10,
                // boxShadow: '0 0 0 12px #60a5fa, 0 0 60px 10px #f472b6, 0 0 120px 30px #facc15, 0 0 200px 60px #34d399',
              }}
            />
          </div>
        </div>
        {/* Middle */}
        <div className="bg-orange-200 basis-1/2 flex flex-col items-center justify-center px-16 py-16 rounded-2xl shadow-2xl min-h-[600px] shadow-2xl">
          <motion.h1
            className="text-[5vw] md:text-[3vw] font-extrabold tracking-wide font-[Host_Grotesk] text-center mb-8 flex items-center justify-center gap-2"
            initial="hidden"
            animate={showAnimation ? "visible" : "hidden"}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.13 } }
            }}
          >
            <motion.span
              variants={{ hidden: { y: 80, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 120, duration: 0.7 } } }}
              className="text-red-600 font-black"
              style={{ fontFamily: 'Arial Black, Arial, sans-serif' }}
            >M</motion.span>
            <motion.span
              variants={{ hidden: { y: 80, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 120, duration: 0.7 } } }}
              className="text-black mx-[-0.1em]"
            >it</motion.span>
            <motion.span
              variants={{ hidden: { y: 80, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 120, duration: 0.7 } } }}
              className="inline-block align-middle mx-[-0.22em]"
              style={{ width: '1.1em', height: '1em', position: 'relative', top: '-0.32em' }}
            >
              <svg viewBox="0 0 60 50" width="100%" height="100%" style={{ display: 'inline', verticalAlign: 'middle' }}>
                <defs>
                  <linearGradient id="triangleGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#fef9c3" />
                    <stop offset="100%" stopColor="#22c55e" />
                  </linearGradient>
                </defs>
                <polygon points="30,45 5,5 55,5" fill="url(#triangleGradient)" />
                <line x1="30" y1="2" x2="30" y2="48" stroke="black" strokeWidth="1" strokeLinecap="butt" />
              </svg>
            </motion.span>
            <motion.span
              variants={{ hidden: { y: 80, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 120, duration: 0.7 } } }}
              className="text-black"
            >eye</motion.span>
          </motion.h1>

          {/* Image section with sliding images from homeImages array */}
<div className="w-full overflow-hidden max-w-[900px] h-[1000px] sm:h-[1200px] mx-auto mb-1 rounded-3xl shadow-2xl border-8 border-white relative">
  <motion.div
    className="flex absolute top-0 left-0 h-full"
    animate={{ x: [0, `-${100 / homeImages.length}%`] }}
    transition={{ duration: homeImages.length * 4, repeat: Infinity, ease: 'linear' }}
    style={{ width: `${homeImages.length * 200}%` }}
  >
    {[...homeImages, ...homeImages].map((img, idx) => (
      <img
        key={idx}
        src={img}
        alt={`Slide ${idx}`}
        className="object-cover h-full"
        style={{ width: `${100 / homeImages.length}%` }}
      />
    ))}
  </motion.div>
</div>
          <p className="text-2xl mb-12 max-w-4xl mx-auto md:mx-0 text-center">
            Let your brand story shine and your message echo across digital
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-end gap-4">
            <a 
              href="#about" 
              className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full transition duration-300"
            >
              About Us
            </a>
            <a 
              href="#team" 
              className="bg-transparent border-2 border-gray-200 hover:bg-gray-200 hover:text-indigo-800 font-bold py-3 px-8 rounded-full transition duration-300"
            >
              Meet the Team
            </a>
          </div>
        </div>
        {/* Right */}
        <div className="bg-white basis-1/5 flex items-center justify-center shadow-2xl">
          {/* Animated Hero Images Carousel */}
          <div className="relative w-full max-w-[400px] h-[400px] mx-auto flex items-center justify-center px-8">
            {heroImages.map((img, idx) => (
              <motion.img
                key={img}
                src={img}
                alt="Hero Visual"
                width={350}
                height={350}
                className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] object-cover rounded-full shadow-2xl border-8 border-red-200 transition-all duration-700 ${idx === currentHeroImage ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-95 z-0'}`}
                style={{ transitionProperty: 'opacity, transform', zIndex: idx === currentHeroImage ? 10 : 0 }}
                // animate={idx === currentHeroImage ? { y: [0, 120, 0] } : {}}
                // transition={idx === currentHeroImage ? { duration: 1.6, repeat: Infinity, repeatType: 'loop', ease: [0.68, -0.55, 0.27, 1.55] } : {}}
                animate={{}}
                transition={{}}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
