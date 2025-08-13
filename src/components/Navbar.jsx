import { useEffect, useState } from 'react';

function Navbar() {
  // State for navbar bg change on scroll
  const [isScrolled, setIsScrolled] = useState(false);
  // State for mobile menu toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Nav items array
  const NavButton = ['Home', 'Works', 'Pricing', 'Reviews', 'Contact'];

  // Listen for scroll events to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to smooth scroll to any section & close mobile menu
  const scrollToSection = sectionId => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`bg-white p-4 sticky top-0 backdrop-blur-lg z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-md border-b border-gray-200' : ''
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand logo/name */}
        <h1 className="text-black text-2xl font-bold">Codex</h1>

        {/* Desktop navigation menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          {/* Map through nav buttons */}
          {NavButton.map((button, index) => (
            <li key={index}>
              <button
                onClick={() => scrollToSection(button)}
                className="text-black hover:text-purple-600 transition-colors duration-200"
              >
                {button}
              </button>
            </li>
          ))}
          {/* Special CTA button w/ decorative lines */}
          <li key="book-call" className="relative">
            <button
              onClick={() => window.open('https://cal.com/freelancercodex/30min', '_blank')}
              className="relative bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg px-5 py-2 transition-colors duration-200"
            >
              {/* Top line extending upward */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-px h-4 bg-gradient-to-t from-purple-600 to-transparent"></div>

              {/* Bottom line extending downward */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-px h-4 bg-gradient-to-b from-purple-600 to-transparent"></div>

              {/* Left line extending leftward */}
              <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 h-px w-4 bg-gradient-to-l from-purple-600 to-transparent"></div>

              {/* Right line extending rightward */}
              <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 h-px w-4 bg-gradient-to-r from-purple-600 to-transparent"></div>

              <span className="relative z-10">Book a Call</span>
            </button>
          </li>
        </ul>

        {/* Mobile hamburger menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-black focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 pb-4">
          <ul className="flex flex-col space-y-3">
            {/* Mobile nav items */}
            {NavButton.map((button, index) => (
              <li key={index}>
                <button
                  className="text-black hover:text-purple-600 transition-colors duration-200 w-full text-left"
                  onClick={() => window.open('https://cal.com/freelancercodex/30min', '_blank')}
                >
                  {button}
                </button>
              </li>
            ))}
            {/* Mobile CTA button */}
            <li>
              <button
                onClick={() => window.open('https://cal.com/freelancercodex/30min', '_blank')}
                className="bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg px-5 py-2 transition-colors duration-200 w-full"
              >
                Book a Call
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
