// src/pages/Team.jsx
import React from "react";
import image1 from "../assets/images/team/Team1.jpg";
import image2 from "../assets/images/team/team2.jpg";
import image3 from "../assets/images/team/team3.jpg";
import image4 from "../assets/images/team/team4.jpg";

const Team = () => {
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
    <div className="py-16 bg-blue-500">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 py-2">
            Our Team
          </h1>
          {/* <div className="h-1 w-20 bg-indigo-600 mx-auto mb-6"></div> */}
          <div className="relative mx-auto w-20 h-1 overflow-hidden rounded-full">
              <div className="absolute inset-0 animate-gradientMove bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-500 w-[200%] "/>
            </div>
          
          <p className="text-lg text-white max-w-2xl mx-auto py-2">
            Together, we transform ideas into impactful digital experiences, one
            post at a time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => {
            // Define a set of gradient backgrounds
            const gradients = [
              "bg-gradient-to-br from-pink-500 via-white to-yellow-300",
              "bg-gradient-to-br from-indigo-500 via-white to-blue-300",
              "bg-gradient-to-br from-green-500 via-white to-teal-300",
              "bg-gradient-to-br from-yellow-400 via-white to-pink-400",
            ];
            const cardBg = gradients[index % gradients.length];
            return (
              <div
                key={index}
                className={`${cardBg} rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 active:scale-95 flex flex-col items-center`}
              >
                <div className="p-4 sm:p-6 flex flex-col items-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover border-2 border-white rounded-full w-28 h-28 sm:w-48 sm:h-48 mx-auto mb-2 sm:mb-4 shadow-lg "
                  />
                  <h3 className="text-lg sm:text-xl font-bold text-center text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-indigo-600 text-center font-medium mb-1 sm:mb-4">
                    {member.position}
                  </p>
                  {member.quote && (
                    <p className="text-gray-600 italic text-center text-xs sm:text-base">
                      "{member.quote}"
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Team;
