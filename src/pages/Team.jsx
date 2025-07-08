
import React, { useState, useEffect, useRef } from "react";
import image1 from "../assets/images/team/Team1.jpg";
import image2 from "../assets/images/team/team2.jpg";
import image3 from "../assets/images/team/team3.jpg";
import image4 from "../assets/images/team/team4.jpg";

// --- Sub-component for a single Team Card ---
// This is a best practice for managing complex, per-item logic like our 3D effect.
const TeamCard = ({ member, index, isActive, isMobile, onMouseEnter, onMouseLeave, onClick }) => {
  const cardRef = useRef(null);

  // This effect handles the dynamic 3D tilt based on mouse position.
  useEffect(() => {
    // Don't run this effect on mobile devices.
    if (isMobile || !cardRef.current) return;

    const card = cardRef.current;
    const handleMouseMove = (e) => {
      const { left, top, width, height } = card.getBoundingClientRect();
      // Calculate mouse position relative to the center of the card
      const x = (e.clientX - left - width / 2) / (width / 2);
      const y = (e.clientY - top - height / 2) / (height / 2);

      // Define the maximum rotation angle
      const maxRotation = 15;

      // Apply rotation and shine effect using CSS Custom Properties for performance
      card.style.setProperty('--rotateX', `${-y * maxRotation}deg`);
      card.style.setProperty('--rotateY', `${x * maxRotation}deg`);
      card.style.setProperty('--shine-x', `${(e.clientX - left)}px`);
      card.style.setProperty('--shine-y', `${(e.clientY - top)}px`);
    };

    const handleMouseLeave = () => {
      // Reset rotation when mouse leaves the card
      card.style.setProperty('--rotateX', '0deg');
      card.style.setProperty('--rotateY', '0deg');
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup function to remove event listeners
    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isMobile]);

  const gradients = [
    "from-pink-500/90 via-white to-yellow-300/90",
    "from-indigo-500/90 via-white to-blue-300/90",
    "from-green-500/90 via-white to-teal-300/90",
    "from-yellow-400/90 via-white to-pink-400/90",
  ];
  const cardBg = gradients[index % gradients.length];

  return (
    <div
      className={`group perspective-1000 ${isActive && !isMobile ? "z-20" : "z-10"}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <div
        ref={cardRef}
        className={`card-3d-wrapper bg-gradient-to-br ${cardBg} relative preserve-3d rounded-2xl shadow-2xl transition-all duration-300 ease-out h-full
          ${isActive ? "scale-110 md:scale-125 shadow-2xl shadow-indigo-900/60" : "scale-100"}`}
      >
        {/* Inner container for parallax content */}
        <div className="preserve-3d relative flex flex-col items-center h-full">
          {/* Shine Effect: follows the mouse */}
          <div className="card-shine pointer-events-none"></div>

          {/* Image with a strong parallax effect (moves the most) */}
          <div className="preserve-3d" style={{ transform: 'translateZ(50px)' }}>
            <div className="relative w-40 h-40 mt-10 mb-6 overflow-hidden rounded-full border-4 border-white/80 shadow-xl transition-shadow duration-300 group-hover:shadow-2xl group-hover:shadow-indigo-500/30">
              <img
                src={member.image}
                alt={member.name}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>

          {/* Content with a subtle parallax effect */}
          <div className="p-5 pt-0 pb-8 text-center flex flex-col items-center preserve-3d" style={{ transform: 'translateZ(25px)' }}>
            <h3 className="text-xl font-bold text-gray-800">
              {member.name}
            </h3>
            <div className="w-16 h-0.5 bg-indigo-600 mx-auto my-2"></div>
            <p className="text-indigo-700 font-semibold tracking-wide">
              {member.position}
            </p>

            {member.quote && (
              <div className="relative mt-4">
                <div className="absolute inset-x-4 -bottom-2 h-20 bg-gradient-to-t from-white/80 to-transparent pointer-events-none"></div>
                <p className="text-gray-700 italic text-sm relative z-10 max-h-24 overflow-y-auto py-2 px-1 scrollbar-hide">
                  "{member.quote}"
                </p>
              </div>
            )}
          </div>

          {/* Floating decorative border for more depth */}
          <div className="absolute -inset-2 overflow-hidden rounded-2xl pointer-events-none preserve-3d">
            <div className="absolute inset-0 border border-white/20 rounded-2xl" style={{ transform: 'translateZ(10px)' }}></div>
          </div>
        </div>

        {/* Active state glowing indicator */}
        {isActive && !isMobile && (
          <div className="absolute -inset-2 overflow-hidden rounded-3xl pointer-events-none preserve-3d">
            <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-indigo-400/30 to-purple-400/30 rounded-3xl blur-md" style={{ transform: 'translateZ(-10px)' }}></div>
          </div>
        )}
      </div>
    </div>
  );
};


// --- Main Team Component ---
const Team = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Refs for advanced timer and interaction management
  const autoZoomTimeoutRef = useRef(null);
  const userInteractedRef = useRef(false); // Tracks if the user has manually interacted
  const nextCardIndexRef = useRef(0); // Tracks the next card to be zoomed

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const teamMembers = [
    { name: "Er. Vikas Singh", position: "Founder", quote: "At Media ITeye, creativity is our currency, innovation is our fuel, and collaboration is our strength.", image: image1 },
    { name: "Jyoti Verma", position: "COO", quote: "Leadership is not about being in charge. It's about taking care of those in your charge.", image: image2 },
    { name: "Dipti Singh", position: "Regional Head", quote: "Empowering teams to achieve greatness through collaboration and innovation.", image: image3 },
    { name: "Shabana Farooqui", position: "Social Media Community Manager", quote: "Building communities through authentic engagement and meaningful connections.", image: image4 },
  ];

  // Sophisticated auto-zoom functionality with a "breathing" effect
  // This effect also manages the auto-zoom cycle.
  useEffect(() => {
    if (isMobile) {
      // Clear any ongoing auto-zoom when switching to mobile
      clearTimeout(autoZoomTimeoutRef.current);
      return;
    }

    const startAutoZoomCycle = () => {
      // If user has interacted, don't start the auto-zoom
      if (userInteractedRef.current) return;

      // Zoom in on the current card
      setActiveCard(nextCardIndexRef.current);

      // Schedule zoom out after a hold time
      autoZoomTimeoutRef.current = setTimeout(() => {
        if (userInteractedRef.current) return; // Re-check in case user interacts during hold
        setActiveCard(null); // Zoom out

        // Schedule next zoom in after a short pause
        autoZoomTimeoutRef.current = setTimeout(() => {
          if (userInteractedRef.current) return; // Re-check in case user interacts during pause
          nextCardIndexRef.current = (nextCardIndexRef.current + 1) % teamMembers.length;
          startAutoZoomCycle(); // Continue the cycle
        }, 500); // Pause between zooms (zoom out to zoom in)
      }, 2500); // Hold time for the zoomed card
    };

    // Initial start of the auto-zoom cycle
    const initialTimeout = setTimeout(startAutoZoomCycle, 2000);

    return () => {
      // Cleanup function: clear all timeouts when component unmounts or dependencies change
      clearTimeout(initialTimeout);
      clearTimeout(autoZoomTimeoutRef.current);
    };
  }, [isMobile, teamMembers.length]); // Depend on teamMembers.length to re-run if team changes

  // Smarter interaction handlers
  const handleContainerMouseEnter = () => {
    if (isMobile) return;
    userInteractedRef.current = true;
    clearTimeout(autoZoomTimeoutRef.current); // Immediately stop auto-zoom on user interaction
    setActiveCard(null); // Reset active card on container hover
  };
  
  const handleContainerMouseLeave = () => {
    if (isMobile) return;
    userInteractedRef.current = false;
    setActiveCard(null); // Ensure no card is active on leave

    // Restart the auto-zoom cycle after a delay if user hasn't interacted again
    autoZoomTimeoutRef.current = setTimeout(() => {
      if (!userInteractedRef.current) {
        nextCardIndexRef.current = 0; // Reset index to start from the first card
        // Call the main effect's function to restart the cycle
        // A more robust way would be to trigger the effect itself, but direct call is okay here.
        // For simplicity, we can just call startAutoZoomCycle here.
        const startAutoZoomCycle = () => {
          if (userInteractedRef.current) return;
          setActiveCard(nextCardIndexRef.current);
          autoZoomTimeoutRef.current = setTimeout(() => {
            if (userInteractedRef.current) return;
            setActiveCard(null);
            autoZoomTimeoutRef.current = setTimeout(() => {
              if (userInteractedRef.current) return;
              nextCardIndexRef.current = (nextCardIndexRef.current + 1) % teamMembers.length;
              startAutoZoomCycle();
            }, 500);
          }, 2500);
        };
        startAutoZoomCycle();
      }
    }, 3000); // Delay before restarting auto-zoom
  };

  const handleCardMouseEnter = (index) => {
    if (isMobile) return;
    userInteractedRef.current = true; // User interacted
    clearTimeout(autoZoomTimeoutRef.current); // Stop auto-zoom
    setActiveCard(index);
  };

  const handleCardMouseLeave = () => {
    if (isMobile) return;
    // Don't immediately set userInteractedRef to false here,
    // as the user might be moving between cards or just temporarily
    // leaving a card before entering another. The container leave handles
    // restarting the auto-zoom after a full disengagement.
    setActiveCard(null);
  };

  const handleMobileClick = (index) => {
    setActiveCard(activeCard === index ? null : index);
    // On mobile, a click means interaction, so stop auto-zoom (if it were running)
    userInteractedRef.current = true;
    clearTimeout(autoZoomTimeoutRef.current);
  }

  return (
    <div className="py-16 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 py-2 tracking-tight">
            Our Creative Team
          </h1>
          <div className="relative mx-auto w-24 h-1.5 overflow-hidden rounded-full mb-6">
            <div className="absolute inset-0 animate-gradientMove bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-500 w-[200%]" />
          </div>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto py-2 leading-relaxed">
            Together, we transform ideas into impactful digital experiences, one post at a time.
          </p>
        </div>

        {/* Added mouse event handlers to the main grid container */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-7xl mx-auto"
          onMouseEnter={handleContainerMouseEnter}
          onMouseLeave={handleContainerMouseLeave}
        >
          {teamMembers.map((member, index) => (
            <TeamCard
              key={index}
              member={member}
              index={index}
              isActive={activeCard === index}
              isMobile={isMobile}
              onMouseEnter={() => handleCardMouseEnter(index)}
              onMouseLeave={handleCardMouseLeave}
              onClick={() => isMobile && handleMobileClick(index)}
            />
          ))}
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
        .card-3d-wrapper {
          transform: 
            scale(var(--scale, 1)) 
            rotateX(var(--rotateX, 0deg)) 
            rotateY(var(--rotateY, 0deg));
          /* Set the base scale for active state */
          --scale: ${isMobile ? '1.05' : '1'};
        }
        .group:hover .card-3d-wrapper,
        .card-3d-wrapper.active {
          --scale: 1.1;
        }
        .card-shine {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 1rem; /* same as card */
          background: radial-gradient(
            circle at var(--shine-x, 0) var(--shine-y, 0),
            rgba(255, 255, 255, 0.4),
            rgba(255, 255, 255, 0) 40%
          );
          opacity: 0;
          transition: opacity 0.3s ease-out;
        }
        .group:hover .card-shine {
          opacity: 1;
        }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .animate-gradientMove { animation: gradientMove 3s linear infinite; }
        @keyframes gradientMove {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
    </div>
  );
};

export default Team;