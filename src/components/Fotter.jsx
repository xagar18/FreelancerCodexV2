function Fotter() {
  const scrollToSection = sectionId => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white text-black py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold mb-3 text-black">
              Freelancer <span className="text-gray-600">Codex</span>
            </h2>
            <p className="text-gray-600 text-sm">
              We create digital experiences that transform businesses.
            </p>
          </div>

          {/* Services */}
          <div className="text-center md:text-left">
            <h3 className="text-base font-bold mb-3 text-black">Services</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Web Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('works')}
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Mobile Apps
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  E-commerce
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Custom Solutions
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h3 className="text-base font-bold mb-3 text-black">Contact</h3>
            <div className="space-y-1 text-sm">
              <p className="text-gray-600">Freelancercodex1@gmail.com</p>
              <p className="text-gray-600">Available 24/7</p>
              <p className="text-gray-600">Remote Worldwide</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 mt-6 pt-4 text-center">
          <p className="text-gray-600 text-sm">
            &copy; 2025 Freelancer Codex. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Fotter;
