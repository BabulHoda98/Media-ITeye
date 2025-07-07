import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('Send');
  const [showToast, setShowToast] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs
      .sendForm('service_zn6wb13', 'template_i45dl9j', form.current, {
        publicKey: 'R_aeOdKJIMCyOyzdQ',
      })
      .then(
        () => {
          setStatus('Sent!');
          setShowToast(true);
          setTimeout(() => setShowToast(false), 3500);
          form.current.reset();
          setTimeout(() => setStatus('Send'), 3000);
        },
        (error) => {
          setStatus('Failed. Try again!');
          setTimeout(() => setStatus('Send'), 3000);
        }
      );
  };

  return (
    <div className="py-16 bg-gradient-to-b from-slate-900 to-indigo-900">
      {/* Enhanced Toast Notification with 3D Effect */}
      {showToast && (
        <div className="fixed top-6 right-6 z-50 flex items-center px-6 py-4 rounded-xl shadow-lg bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-700 text-white font-bold text-lg animate-slide-in"
          style={{
            transform: 'translateY(0)',
            boxShadow: '0 10px 25px -5px rgba(16, 185, 129, 0.5), 0 0 15px rgba(16, 185, 129, 0.3)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(10px)',
            minWidth: '260px',
            maxWidth: '90vw',
          }}
        >
          <svg className="w-6 h-6 mr-3 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          Message Sent Successfully!
        </div>
      )}
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 relative inline-block">
            <span className="relative z-10">Grow Your Business With Us!</span>
            <div className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full opacity-80 transform -skew-y-1"></div>
          </h1>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto mt-8">
            Ready to elevate your social media presence? Contact us today for a free consultation.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Contact Form with 3D Effect */}
          <div className="lg:w-1/2">
            <div 
              className="rounded-xl p-8 relative overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, #1a202c, #2d3748)',
                boxShadow: '15px 15px 30px #0f1724, -15px -15px 30px #334155',
                border: '1px solid rgba(99, 102, 241, 0.1)',
                transform: 'perspective(1000px) rotateY(0deg) rotateX(0deg)',
                transition: 'transform 0.4s ease, box-shadow 0.4s ease',
              }}
              onMouseMove={(e) => {
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const rotateY = (x - rect.width / 2) / 20;
                const rotateX = (rect.height / 2 - y) / 20;
                
                card.style.transform = `perspective(1000px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
                card.style.boxShadow = `${15 + rotateY}px ${15 + rotateX}px 30px #0f1724, ${-15 + rotateY}px ${-15 + rotateX}px 30px #334155`;
              }}
              onMouseLeave={(e) => {
                const card = e.currentTarget;
                card.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
                card.style.boxShadow = '15px 15px 30px #0f1724, -15px -15px 30px #334155';
              }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600"></div>
              <h2 className="text-2xl font-bold text-white mb-8 relative z-10">
                Send us a message
                <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full mt-2"></div>
              </h2>
              
              <form ref={form} onSubmit={sendEmail}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-indigo-100 mb-3 font-medium">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-slate-500 transition-all duration-300 hover:border-cyan-400"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="email" className="block text-indigo-100 mb-3 font-medium">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-slate-500 transition-all duration-300 hover:border-cyan-400"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-indigo-100 mb-3 font-medium">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-slate-500 transition-all duration-300 hover:border-cyan-400"
                      placeholder="+91 12345 67890"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="service" className="block text-indigo-100 mb-3 font-medium">Service Interested In</label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white appearance-none transition-all duration-300 hover:border-cyan-400"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="premium">Premium Package</option>
                    <option value="standard">Standard Package</option>
                    <option value="basic">Basic Package</option>
                    <option value="graphics">Graphic Design</option>
                    <option value="video">Video Editing</option>
                    <option value="campaign">Marketing Campaign</option>
                  </select>
                </div>
                
                <div className="mb-8">
                  <label htmlFor="message" className="block text-indigo-100 mb-3 font-medium">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-slate-500 transition-all duration-300 hover:border-cyan-400"
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                </div>
                
                <input
                  className={`font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 cursor-pointer w-full relative overflow-hidden
                    ${status === 'Send' ? 
                      'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg hover:from-cyan-600 hover:to-indigo-700 hover:shadow-xl transform hover:-translate-y-1' 
                    : status === 'Sending...' ? 
                      'bg-indigo-700 text-white cursor-wait shadow-md' 
                    : status === 'Sent!' ? 
                      'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-xl' 
                    : 
                      'bg-gradient-to-r from-rose-600 to-red-600 text-white shadow-md'}
                  `}
                  type="submit"
                  value={status}
                  disabled={status === 'Sending...'}
                  style={{
                    boxShadow: status === 'Send' ? 
                      '0 10px 20px rgba(56, 189, 248, 0.3), 0 6px 6px rgba(79, 70, 229, 0.3)' : 
                      status === 'Sent!' ?
                      '0 10px 20px rgba(16, 185, 129, 0.3)' : 
                      'none'
                  }}
                />
              </form>
            </div>
          </div>
          
          {/* Contact Info with 3D Effect */}
          <div className="lg:w-1/2">
            <div 
              className="rounded-xl p-8 h-full relative overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, #1a202c, #2d3748)',
                boxShadow: '15px 15px 30px #0f1724, -15px -15px 30px #334155',
                border: '1px solid rgba(99, 102, 241, 0.1)',
                transform: 'perspective(1000px) rotateY(0deg) rotateX(0deg)',
                transition: 'transform 0.4s ease, box-shadow 0.4s ease',
              }}
              onMouseMove={(e) => {
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const rotateY = (x - rect.width / 2) / 20;
                const rotateX = (rect.height / 2 - y) / 20;
                
                card.style.transform = `perspective(1000px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
                card.style.boxShadow = `${15 + rotateY}px ${15 + rotateX}px 30px #0f1724, ${-15 + rotateY}px ${-15 + rotateX}px 30px #334155`;
              }}
              onMouseLeave={(e) => {
                const card = e.currentTarget;
                card.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
                card.style.boxShadow = '15px 15px 30px #0f1724, -15px -15px 30px #334155';
              }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
              <h2 className="text-2xl font-bold text-white mb-8 relative z-10">
                Contact Information
                <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mt-2"></div>
              </h2>
              
              <div className="space-y-8 mb-10">
                <div className="flex items-start group">
                  <div className="bg-gradient-to-br from-cyan-500 to-indigo-600 p-3 rounded-xl mr-4 transform group-hover:-translate-y-1 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="group-hover:translate-x-1 transition-transform duration-300">
                    <h3 className="text-lg font-bold mb-1 text-indigo-100">Phone</h3>
                    <p className="text-white text-lg">+91 95890 46658</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-3 rounded-xl mr-4 transform group-hover:-translate-y-1 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="group-hover:translate-x-1 transition-transform duration-300">
                    <h3 className="text-lg font-bold mb-1 text-indigo-100">Email</h3>
                    <p className="text-white text-lg">contact@mediaiteye.com</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-3 rounded-xl mr-4 transform group-hover:-translate-y-1 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="group-hover:translate-x-1 transition-transform duration-300">
                    <h3 className="text-lg font-bold mb-1 text-indigo-100">Address</h3>
                    <p className="text-white text-lg">Delhi, India 110008</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-slate-700">
                <h3 className="text-xl font-bold mb-6 text-white">Follow Us</h3>
                <div className="flex space-x-5">
                  <a 
                    href="https://facebook.com/media_iteye"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-br from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 p-4 rounded-xl transition-all duration-300 flex items-center justify-center transform hover:-translate-y-1 hover:shadow-lg"
                    style={{ width: '52px', height: '52px' }}
                  >
                    <span className="sr-only">Facebook</span>
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
                  </a>
                  <a 
                    href="https://instagram.com/media_iteye"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-br from-fuchsia-500 to-pink-600 hover:from-fuchsia-400 hover:to-pink-500 p-4 rounded-xl transition-all duration-300 flex items-center justify-center transform hover:-translate-y-1 hover:shadow-lg"
                    style={{ width: '52px', height: '52px' }}
                  >
                    <span className="sr-only">Instagram</span>
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  </a>
                  <a 
                    href="https://twitter.com/media_iteye"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-br from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 p-4 rounded-xl transition-all duration-300 flex items-center justify-center transform hover:-translate-y-1 hover:shadow-lg"
                    style={{ width: '52px', height: '52px' }}
                  >
                    <span className="sr-only">Twitter</span>
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                  </a>
                  <a 
                    href="https://linkedin.com/company/media_iteye"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-br from-blue-500 to-blue-700 hover:from-blue-400 hover:to-blue-600 p-4 rounded-xl transition-all duration-300 flex items-center justify-center transform hover:-translate-y-1 hover:shadow-lg"
                    style={{ width: '52px', height: '52px' }}
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.844-1.563 3.042 0 3.604 2.002 3.604 4.604v5.592z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-24 h-24 bg-cyan-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-40 right-10 w-32 h-32 bg-indigo-600 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
      </div>
      
      <style jsx>{`
        @keyframes slide-in {
          0% {
            transform: translateY(-100px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.3;
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.25;
          }
        }
        
        .animate-slide-in {
          animation: slide-in 0.5s ease-out forwards;
        }
        
        .animate-pulse {
          animation: pulse 3s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Contact;