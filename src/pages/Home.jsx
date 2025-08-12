import ShowCase from '../components/ShowCase';

function Home() {
  const scrollToSection = sectionId => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="home">
      <div className="min-h-[400px] md:h-[500px] w-full flex flex-col justify-center items-center px-4">
        <div className="w-full flex flex-col justify-center items-center">
          <div className="inline-flex items-center gap-2 text-sm font-medium border border-gray-300/50 rounded-full mb-6 md:mb-8 bg-gradient-to-r from-white/80 to-gray-50/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 px-4 py-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-gray-700 font-bold">Early-stage? We live for it.</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-center text-gray-900 drop-shadow-xl leading-tight max-w-4xl px-4">
            We build what most won't touch. <br className="hidden md:block" />{' '}
            <span
              className="bg-clip-text text-transparent drop-shadow-lg"
              style={{
                backgroundImage:
                  'linear-gradient(to bottom, white 0%, white 10%, #a855f7 20%, #6b21a8 100%)',
              }}
            >
              And make it look damn good.{' '}
            </span>
          </h1>
          <p className="text-base md:text-lg text-bold text-gray-600 mt-4 max-w-2xl text-center px-4">
            Bold ideas. Beautiful execution.
          </p>

          <div className="mt-8 md:mt-14">
            <button
              onClick={() => scrollToSection('contact')}
              className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-medium rounded-full px-6 py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-out"
            >
              <span className="relative z-10 flex items-center gap-2">
                Book a Call
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
      <ShowCase />
    </div>
  );
}

export default Home;
