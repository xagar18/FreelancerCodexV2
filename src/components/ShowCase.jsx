function ShowCase() {
  const marqueeWords = [
    'Innovate',
    'Elevate',
    'Deploy',
    'Scale',
    'Code',
    'Create',
    'Design',
    'Optimize',
    'Debug',
    'Render',
    'Integrate',
    'Launch',
  ];

  return (
    <>
      <div
        className="min-h-[400px] md:h-[570px] w-full flex flex-col justify-center items-center backdrop-blur-md overflow-hidden relative px-4"
        style={{
          backgroundImage: `
          linear-gradient(to bottom,
            rgba(255,255,255,0.95) 0%,
            rgba(255,255,255,0) 25%,
            rgba(255,255,255,0) 75%,
            rgba(255,255,255,0.95) 100%
          ),
          linear-gradient(to right,
            rgba(255,255,255,0.95) 0%,
            rgba(255,255,255,0) 25%,
            rgba(255,255,255,0) 75%,
            rgba(255,255,255,0.95) 100%
          ),
          radial-gradient(circle, rgba(139, 92, 246, 0.15) 1px, transparent 1px)
        `,
          backgroundSize: 'cover, cover, 5px 15px',
        }}
      >
        {/* Mobile Layout */}
        <div className="block md:hidden w-full space-y-6">
          {/* Frontend Magic */}
          <div className="group relative bg-white/20 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/30 p-4 mx-4">
            <div className="absolute top-0 left-4 w-0.5 h-full bg-gradient-to-b from-purple-400/70 via-purple-300/50 to-purple-200/30 rounded-full"></div>
            <div className="absolute top-0 right-4 w-0.5 h-full bg-gradient-to-b from-purple-400/70 via-purple-300/50 to-purple-200/30 rounded-full"></div>
            <div className="absolute top-4 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400/70 via-purple-300/50 to-purple-200/30 rounded-full"></div>
            <div className="absolute bottom-4 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400/70 via-purple-300/50 to-purple-200/30 rounded-full"></div>

            <div className="bg-white/60 backdrop-blur-2xl rounded-2xl p-4 shadow-xl border border-white/40">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 616 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Frontend Magic</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Pixel-perfect designs that come alive with smooth animations.
              </p>
              <div className="flex flex-wrap gap-1">
                <span className="px-2 py-1 text-xs bg-purple-100 text-purple-700 rounded-full border border-purple-200">
                  React
                </span>
                <span className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded-full border border-blue-200">
                  CSS
                </span>
                <span className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded-full border border-green-200">
                  Animations
                </span>
              </div>
            </div>
          </div>

          {/* Backend Power */}
          <div className="group relative bg-white/20 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/30 p-4 mx-4">
            <div className="absolute top-0 left-3 w-0.5 h-full bg-gradient-to-b from-red-400/70 via-red-300/50 to-red-200/30 rounded-full"></div>
            <div className="absolute top-0 right-3 w-0.5 h-full bg-gradient-to-b from-red-400/70 via-red-300/50 to-red-200/30 rounded-full"></div>
            <div className="absolute top-3 left-0 w-full h-0.5 bg-gradient-to-r from-red-400/70 via-red-300/50 to-red-200/30 rounded-full"></div>
            <div className="absolute bottom-3 left-0 w-full h-0.5 bg-gradient-to-r from-red-400/70 via-red-300/50 to-red-200/30 rounded-full"></div>

            <div className="bg-white/60 backdrop-blur-2xl rounded-2xl p-4 shadow-xl border border-white/40">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Backend Power</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Scalable server architecture with secure APIs.
              </p>
              <div className="flex flex-wrap gap-1">
                <span className="px-2 py-1 text-xs bg-red-100 text-red-700 rounded-full border border-red-200">
                  Node.js
                </span>
                <span className="px-2 py-1 text-xs bg-orange-100 text-orange-700 rounded-full border border-orange-200">
                  MongoDB
                </span>
              </div>
            </div>
          </div>

          {/* AI Integration */}
          <div className="group relative bg-white/20 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/30 p-4 mx-4">
            <div className="absolute top-0 left-2 w-0.5 h-full bg-gradient-to-b from-emerald-400/70 via-emerald-300/50 to-emerald-200/30 rounded-full"></div>
            <div className="absolute top-0 right-2 w-0.5 h-full bg-gradient-to-b from-emerald-400/70 via-emerald-300/50 to-emerald-200/30 rounded-full"></div>
            <div className="absolute top-2 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-400/70 via-emerald-300/50 to-emerald-200/30 rounded-full"></div>
            <div className="absolute bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-400/70 via-emerald-300/50 to-emerald-200/30 rounded-full"></div>

            <div className="bg-white/60 backdrop-blur-2xl rounded-2xl p-4 shadow-xl border border-white/40">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mb-3 shadow-lg">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">AI Integration</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Smart automation with machine learning models.
              </p>
              <div className="flex flex-wrap gap-1">
                <span className="px-2 py-1 text-xs bg-emerald-100 text-emerald-700 rounded-full border border-emerald-200">
                  Python
                </span>
                <span className="px-2 py-1 text-xs bg-teal-100 text-teal-700 rounded-full border border-teal-200">
                  TensorFlow
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Hidden on mobile */}
        <div className="hidden md:flex w-full justify-between items-center mb-8 px-8 relative z-10">
          {/* Left */}
          <div className="text-center text-gray-700 font-semibold text-xl px-4 py-2 rounded w-[450px] h-[400px] flex items-center justify-center">
            <div className="group relative bg-white/20 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/30 p-6  w-[280px] h-[260px] transform -rotate-12">
              <div className="absolute top-0 left-4 w-0.5 h-full bg-gradient-to-b from-purple-400/70 via-purple-300/50 to-purple-200/30 rounded-full"></div>
              <div className="absolute top-0 right-4 w-0.5 h-full bg-gradient-to-b from-purple-400/70 via-purple-300/50 to-purple-200/30 rounded-full"></div>
              <div className="absolute top-4 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400/70 via-purple-300/50 to-purple-200/30 rounded-full"></div>
              <div className="absolute bottom-4 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400/70 via-purple-300/50 to-purple-200/30 rounded-full"></div>

              <div className="bg-white/60 backdrop-blur-2xl rounded-2xl p-2 shadow-xl border border-white/40">
                <div className="relative z-10">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center mb-4 shadow-lg">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 616 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                    </svg>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-2">Frontend Magic</h3>
                  <p className="text-gray-600 text-xs leading-relaxed mb-4">
                    Pixel-perfect designs that come alive with smooth animations and flawless user
                    experiences.
                  </p>

                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 text-xs bg-purple-100 text-purple-700 rounded-full border border-purple-200">
                      React
                    </span>
                    <span className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded-full border border-blue-200">
                      CSS
                    </span>
                    <span className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded-full border border-green-200">
                      Animations
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mid section with two innovative divs - glass morphism style */}
          <div className="flex gap-4 w-[800px] h-[400px]">
            {/* Top div */}
            <div className="group relative bg-white/20 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/30 mr-10 p-4 h-[390px] w-[290px] transform rotate-3">
              {/* Decorative lines */}
              <div className="absolute top-0 left-3 w-0.5 h-full bg-gradient-to-b from-red-400/70 via-red-300/50 to-red-200/30 rounded-full"></div>
              <div className="absolute top-0 right-3 w-0.5 h-full bg-gradient-to-b from-red-400/70 via-red-300/50 to-red-200/30 rounded-full"></div>
              <div className="absolute top-3 left-0 w-full h-0.5 bg-gradient-to-r from-red-400/70 via-red-300/50 to-red-200/30 rounded-full"></div>
              <div className="absolute bottom-3 left-0 w-full h-0.5 bg-gradient-to-r from-red-400/70 via-red-300/50 to-red-200/30 rounded-full"></div>

              <div className="bg-white/60 backdrop-blur-2xl rounded-2xl p-2 shadow-xl border border-white/40">
                <div className="relative z-10">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>

                  <h3 className="text-lg font-bold text-gray-800 mb-2">Backend Power</h3>
                  <p className="text-gray-600 text-xs leading-relaxed mb-3">
                    Scalable server architecture with secure APIs and robust cloud infrastructure.
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                    <div className="space-y-1 text-xs text-gray-600">
                      <div>• 99.9% Uptime Guaranteed</div>
                      <div>• Lightning Fast Response Times</div>
                      <div>• Auto-Scaling Infrastructure</div>
                      <div>• Enterprise Security</div>
                      <div>• Real-time Data Processing</div>
                      <div>• Global Load Balancing</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 text-xs bg-red-100 text-red-700 rounded-full border border-red-200">
                      Node.js
                    </span>
                    <span className="px-2 py-1 text-xs bg-orange-100 text-orange-700 rounded-full border border-orange-200">
                      MongoDB
                    </span>
                    <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-700 rounded-full border border-yellow-200">
                      Express
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom div */}
            <div className="group relative bg-white/20 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/30 p-4 h-[310px]  transform -rotate-3 mt-10">
              {/* Decorative lines */}
              <div className="absolute top-0 left-2 w-0.5 h-full bg-gradient-to-b from-emerald-400/70 via-emerald-300/50 to-emerald-200/30 rounded-full"></div>
              <div className="absolute top-0 right-2 w-0.5 h-full bg-gradient-to-b from-emerald-400/70 via-emerald-300/50 to-emerald-200/30 rounded-full"></div>
              <div className="absolute top-2 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-400/70 via-emerald-300/50 to-emerald-200/30 rounded-full"></div>
              <div className="absolute bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-400/70 via-emerald-300/50 to-emerald-200/30 rounded-full"></div>

              <div className="bg-white/60 backdrop-blur-2xl rounded-2xl p-2 shadow-xl border border-white/40">
                <div className="relative z-10">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mb-3 shadow-lg">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>

                  <h3 className="text-lg font-bold text-gray-800 mb-2">AI Integration</h3>
                  <p className="text-gray-600 text-xs leading-relaxed mb-3">
                    Smart automation with machine learning models and intelligent analytics.
                  </p>

                  <div className="mb-3">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">AI Capabilities:</h4>
                    <div className="space-y-1 text-xs text-gray-600">
                      <div>• Natural Language Processing</div>
                      <div>• Computer Vision & Image AI</div>
                      <div>• Predictive Analytics</div>
                      <div>• Automated Decision Making</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 text-xs bg-emerald-100 text-emerald-700 rounded-full border border-emerald-200">
                      Python
                    </span>
                    <span className="px-2 py-1 text-xs bg-teal-100 text-teal-700 rounded-full border border-teal-200">
                      TensorFlow
                    </span>
                    <span className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded-full border border-green-200">
                      OpenAI
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="text-center text-gray-700 font-semibold text-xl px-4 py-2 rounded w-[300px] h-[400px] flex items-center justify-center">
            <div className="group relative bg-white/20 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/30 p-4 w-[250px] h-[230px]">
              {/* Decorative lines - Blue theme */}
              <div className="absolute top-0 left-2 w-0.5 h-full bg-gradient-to-b from-blue-400/70 via-blue-300/50 to-blue-200/30 rounded-full"></div>
              <div className="absolute top-0 right-2 w-0.5 h-full bg-gradient-to-b from-blue-400/70 via-blue-300/50 to-blue-200/30 rounded-full"></div>
              <div className="absolute top-2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400/70 via-blue-300/50 to-blue-200/30 rounded-full"></div>
              <div className="absolute bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400/70 via-blue-300/50 to-blue-200/30 rounded-full"></div>

              <div className="bg-white/60 backdrop-blur-2xl rounded-2xl p-2 shadow-xl border border-white/40">
                <div className="relative z-10">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mb-3 shadow-lg">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 000 2h.01a1 1 0 100-2H3zM6 4a1 1 0 000 2h.01a1 1 0 100-2H6zM9 4a1 1 0 000 2h.01a1 1 0 100-2H9zM3 8a1 1 0 000 2h.01a1 1 0 100-2H3zM6 8a1 1 0 000 2h.01a1 1 0 100-2H6zM9 8a1 1 0 000 2h.01a1 1 0 100-2H9zM3 12a1 1 0 000 2h.01a1 1 0 100-2H3zM6 12a1 1 0 000 2h.01a1 1 0 100-2H6zM9 12a1 1 0 000 2h.01a1 1 0 100-2H9z" />
                    </svg>
                  </div>

                  <h3 className="text-lg font-bold text-gray-800 mb-2">Complete Solution</h3>
                  <p className="text-gray-600 text-xs leading-relaxed mb-3">
                    Full-stack development with DevOps and cloud deployment.
                  </p>

                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded-full border border-blue-200">
                      Full-Stack
                    </span>
                    <span className="px-2 py-1 text-xs bg-indigo-100 text-indigo-700 rounded-full border border-indigo-200">
                      DevOps
                    </span>
                    <span className="px-2 py-1 text-xs bg-purple-100 text-purple-700 rounded-full border border-purple-200">
                      Cloud
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced fade overlays */}
        <div className="absolute left-0 bottom-0 h-32 w-48 bg-gradient-to-r from-white via-white/70 to-transparent z-40 pointer-events-none"></div>
        <div className="absolute right-0 bottom-0 h-32 w-48 bg-gradient-to-l from-white via-white/70 to-transparent z-40 pointer-events-none"></div>

        {/* Enhanced ambient bottom glow */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[600px] h-32 bg-gradient-to-t from-purple-200/30 via-purple-100/20 to-transparent rounded-full blur-3xl pointer-events-none"></div>
      </div>
    </>
  );
}

export default ShowCase;
