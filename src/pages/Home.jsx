import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  const [currentGlowColor, setCurrentGlowColor] = useState(0);
  const heroImages = [
    "/Team1.jpg",
    "/Screenshot1.png",
    "/Screenshot2.png",
    "/home2.jpg"
  ];
  const homeImages = [
    "/imagesMiteye.jpg",
    "/home3.jpg"
  ];
  const [currentCenterImage, setCurrentCenterImage] = useState(0);

  // Subtler glow colors with reduced intensity (not directly used in this enhanced version's animation for simplicity)
  const glowColors = [
    {
      color: 'orange',
      shadow: '0 0 20px 5px rgba(251, 191, 36, 0.7)'
    },
    {
      color: 'red',
      shadow: '0 0 20px 5px rgba(239, 68, 68, 0.7)'
    },
    {
      color: 'pink',
      shadow: '0 0 20px 5px rgba(236, 72, 153, 0.7)'
    },
    {
      color: 'blue',
      shadow: '0 0 20px 5px rgba(59, 130, 246, 0.7)'
    },
    {
      color: 'purple',
      shadow: '0 0 20px 5px rgba(139, 92, 246, 0.7)'
    }
  ];

  useEffect(() => {
    setShowAnimation(true);

    // Interval for changing center image
    const imageInterval = setInterval(() => {
      setCurrentCenterImage((prev) => (prev + 1) % homeImages.length);
    }, 3000);

    // Interval for changing glow color (slower transition) - kept for reference if needed
    const glowInterval = setInterval(() => {
      setCurrentGlowColor((prev) => (prev + 1) % glowColors.length);
    }, 3000);

    return () => {
      clearInterval(imageInterval);
      clearInterval(glowInterval);
    };
  }, [homeImages.length]); // Added homeImages.length to dependency array

  // Floating animation variants (not directly used in this enhanced version for simplicity)
  const floatVariants = {
    floatBottomPop: {
      y: [0, 40, 0],
      scale: [1, 1.18, 1],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut"
      }
    },
    floatReverse: {
      y: [0, -40, 0],
      scale: [1, 1.18, 1],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-yellow-100 to-blue-200 py-4">
      <div className="flex flex-col md:flex-row w-full md:h-[80vh] gap-4 sm:gap-8 px-4 sm:px-6 mx-auto max-w-7xl items-center justify-center mt-1 sm:mt-1">
        {/* Left Card - Mobile: hidden, Tablet/Desktop: visible */}
        <div className="hidden md:flex flex-1 flex-col items-center justify-center">
          <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 flex flex-col items-center w-full max-w-xs mx-auto">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-orange-50 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 rounded-full animate-[multiGlow_4s_linear_infinite] z-0" />
              <div className="absolute inset-0 w-full h-full rounded-full animate-[floatPop_4s_ease-in-out_infinite] z-10">
                <img
                  src={heroImages[3]}
                  alt="Team"
                  className="w-full h-full object-cover rounded-full"
                  style={{ zIndex: 2 }}
                />
              </div>
              <div className="absolute inset-0 rounded-full border-4 border-white/30 z-20"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent to-black/10 z-20"></div>
            </div>
            <div className="mt-4 sm:mt-6 text-lg sm:text-xl font-bold text-blue-700 tracking-wide">Our Team</div>
            <div className="mt-1 sm:mt-2 text-sm sm:text-base text-blue-600 text-center max-w-[200px]">Dedicated professionals creating digital excellence</div>
          </div>
        </div>

        {/* Center Card - Always visible */}
        <div className="w-full md:flex-[1.3] flex flex-col items-center justify-center order-first md:order-none">
          <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 flex flex-col items-center w-full max-w-md lg:max-w-xl mx-auto">
            {/* Image Slider - Mobile responsive with aspect ratio */}
            <motion.div
              className="w-full relative rounded-xl overflow-hidden shadow-lg border-4 border-white mx-auto aspect-video sm:aspect-[16/10] lg:aspect-[16/9]" // Adjusted aspect ratio for better responsiveness
              style={{ boxShadow: '0 0 32px 8px rgba(239,68,68,0.4)' }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {homeImages.map((img, idx) => (
                <motion.img
                  key={idx}
                  src={img}
                  alt={`Slide ${idx}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: idx === currentCenterImage ? 1 : 0,
                    scale: idx === currentCenterImage ? 1 : 1.03
                  }}
                  transition={{ duration: 0.8 }}
                />
              ))}
              <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
                {homeImages.map((_, idx) => (
                  <button
                    key={idx}
                    className={`w-2 h-2 rounded-full transition-all ${idx === currentCenterImage ? 'bg-white w-4' : 'bg-white/50'}`}
                    onClick={() => setCurrentCenterImage(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </motion.div>

            {/* Text and Buttons - Mobile responsive */}
            <motion.div
              className="text-center mt-4 sm:mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <p className="text-sm sm:text-base md:text-lg text-amber-600 italic font-semibold mb-4 sm:mb-6 max-w-2xl">
                "Success is not just about ideas, it's about making ideas happen."<br />
                <span className="block text-right text-amber-700 font-bold mt-1 sm:mt-2">— Er. Vikas Singh<br />
                  <span className='text-xs sm:text-sm text-amber-500 font-bold'>Founder</span>
                </span>
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                <motion.a
                  href="#about"
                  className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-6 sm:py-3 sm:px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-amber-500/20 text-sm sm:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  About Us
                </motion.a>
                <motion.a
                  href="#team"
                  className="bg-white border-2 border-gray-200 hover:bg-gray-50 text-gray-800 font-bold py-2 px-6 sm:py-3 sm:px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-gray-400/10 text-sm sm:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Meet the Team
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Card - Mobile: hidden, Tablet/Desktop: visible */}
        <div className="hidden md:flex flex-1 flex-col items-center justify-center">
          <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 flex flex-col items-center w-full max-w-xs mx-auto">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-orange-50 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 rounded-full animate-[multiGlow_4s_linear_infinite] z-0" />
              <div className="absolute inset-0 w-full h-full rounded-full animate-[floatPop_4s_ease-in-out_infinite] z-10">
                <img
                  src={heroImages[0]}
                  alt="Vision"
                  className="w-full h-full object-cover rounded-full"
                  style={{ zIndex: 2 }}
                />
              </div>
              <div className="absolute inset-0 rounded-full border-4 border-white/30 z-20"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent to-black/10 z-20"></div>
            </div>
            <div className="mt-4 sm:mt-6 text-lg sm:text-xl font-bold text-pink-700 tracking-wide">Our Vision</div>
            <div className="mt-1 sm:mt-2 text-sm sm:text-base text-pink-600 text-center max-w-[200px]">Creating digital experiences that inspire and connect</div>
          </div>
        </div>

        {/* Mobile-only side cards (simplified and improved layout) */}
        <div className="flex md:hidden w-full justify-center gap-4 px-4 mt-4">
          {/* Mobile Left Card */}
          <div className="bg-white rounded-2xl shadow-xl p-3 flex-1 flex flex-col items-center text-center">
            <div className="relative w-20 h-20 rounded-full bg-orange-50 overflow-hidden shrink-0">
              <img
                src={heroImages[3]}
                alt="Team"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="mt-2 text-sm font-bold text-blue-700">Our Team</div>
            <div className="text-xs text-blue-600 mt-1 line-clamp-2">Dedicated professionals creating digital excellence</div>
          </div>

          {/* Mobile Right Card */}
          <div className="bg-white rounded-2xl shadow-xl p-3 flex-1 flex flex-col items-center text-center">
            <div className="relative w-20 h-20 rounded-full bg-orange-50 overflow-hidden shrink-0">
              <img
                src={heroImages[0]}
                alt="Vision"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="mt-2 text-sm font-bold text-pink-700">Our Vision</div>
            <div className="text-xs text-pink-600 mt-1 line-clamp-2">Creating digital experiences that inspire and connect</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;