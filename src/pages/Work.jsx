import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

function Work() {
  // Refs for GSAP animation
  const marqueeRef = useRef(null);
  const animationRef = useRef(null);

  // Set up infinite horizontal scroll animation
  useEffect(() => {
    const marqueeElement = marqueeRef.current;

    // GSAP infinite smooth horizontal scroll - proper infinite loop
    gsap.set(marqueeElement, { x: 0 });

    // Create animation - moves half width for seamless loop
    // Create animation - moves half width for seamless loop
    animationRef.current = gsap.to(marqueeElement, {
      x: '-50%', // Move exactly half the width (first set disappears, second set takes its place)
      duration: 120, // Very slow - 2 minutes for full cycle
      ease: 'none',
      repeat: -1, // infinite repeat
    });

    // Cleanup GSAP on component unmount
    return () => {
      gsap.killTweensOf(marqueeElement);
    };
  }, []);

  // Pause animation on hover
  const handleMouseEnter = () => {
    if (animationRef.current) {
      animationRef.current.pause();
    }
  };

  // Resume animation when hover ends
  // Resume animation when hover ends
  const handleMouseLeave = () => {
    if (animationRef.current) {
      animationRef.current.resume();
    }
  };

  // Portfolio work items data
  const workItems = [
    {
      id: 1,
      image: 'hero.svg',
      title: 'E-Commerce Platform',
      description: 'Modern shopping experience',
    },
    {
      id: 2,
      image: 'hero.svg',
      title: 'Portfolio Website',
      description: 'Creative digital showcase',
    },
    { id: 3, image: 'hero.svg', title: 'Mobile App UI', description: 'Intuitive user interface' },
    {
      id: 4,
      image: 'hero.svg',
      title: 'Dashboard Analytics',
      description: 'Data visualization tool',
    },
    {
      id: 5,
      image: 'hero.svg',
      title: 'SaaS Application',
      description: 'Business automation tool',
    },
    {
      id: 6,
      image: 'hero.svg',
      title: 'Landing Page',
      description: 'Conversion focused design',
    },
  ];

  return (
    <div id="works">
      {/* Main container w/ grid bg & hover controls */}
      <div
        className="h-[350px] sm:h-[450px] md:h-[550px] w-full overflow-hidden relative flex items-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          background: `
            linear-gradient(to bottom, white 0%, white 5%, transparent 5%, transparent 80%, white 85%, white 10%),
            linear-gradient(to right, rgba(229, 231, 235, 0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(229, 231, 235, 0.4) 1px, transparent 1px),
            white
          `,
          backgroundSize: '100% 100%, 30px 30px, 30px 30px, 100% 100%',
        }}
      >
        {/* GSAP animated marquee container */}
        <div ref={marqueeRef} className="flex items-center whitespace-nowrap">
          {/* First set of work cards */}
          <div className="flex items-center space-x-4 sm:space-x-6 md:space-x-8">
            {/* Map through work items */}
            {workItems.map(item => (
              <div
                key={item.id}
                className="h-[280px] w-[350px] sm:h-[350px] sm:w-[450px] md:h-[450px] md:w-[650px] flex flex-col justify-center items-center backdrop-blur-3xl shadow-2xl border-white/50 rounded-xl md:rounded-2xl border-2 bg-white/80 cursor-pointer flex-shrink-0"
              >
                {/* Project image container */}
                <div className="h-[200px] w-[280px] sm:h-[250px] sm:w-[380px] md:h-[320px] md:w-[550px] flex justify-center items-center rounded-lg md:rounded-xl overflow-hidden bg-gradient-to-br from-purple-50 to-blue-50">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                {/* Project info */}
                <div className="w-full px-6 sm:px-8 md:px-14 mt-3 md:mt-4">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Duplicate set for seamless infinite loop */}
          <div className="flex items-center space-x-4 sm:space-x-6 md:space-x-8 ml-4 sm:ml-6 md:ml-8">
            {/* Same work items but w/ duplicate keys */}
            {workItems.map(item => (
              <div
                key={`duplicate-${item.id}`}
                className="h-[280px] w-[350px] sm:h-[350px] sm:w-[450px] md:h-[450px] md:w-[650px] flex flex-col justify-center items-center backdrop-blur-3xl shadow-2xl border-white/50 rounded-xl md:rounded-2xl border-2 bg-white/80 cursor-pointer flex-shrink-0"
              >
                {/* Duplicate project image */}
                <div className="h-[200px] w-[280px] sm:h-[250px] sm:w-[380px] md:h-[320px] md:w-[550px] flex justify-center items-center rounded-lg md:rounded-xl overflow-hidden bg-gradient-to-br from-purple-50 to-blue-50">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                {/* Duplicate project info */}
                <div className="w-full px-6 sm:px-8 md:px-14 mt-3 md:mt-4">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
