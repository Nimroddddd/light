const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center lg:text-left lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white">
              <span className="block">Hi, I'm</span>
              <span className="block text-blue-600 dark:text-blue-400">Oluwaferanmi Sharon Oladipo</span>
            </h1>
            <p className="mt-4 text-xl text-gray-500 dark:text-gray-300 max-w-3xl">
              Data Analyst building amazing digital experiences.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#projects" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md shadow-md transition duration-300"
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="bg-transparent border border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 font-medium py-3 px-8 rounded-md transition duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 lg:w-1/2 flex justify-center lg:justify-end">
            <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-blue-100 dark:bg-blue-900 rounded-full overflow-hidden shadow-xl border-4 border-blue-500">
              <img src="selfie.jpg" alt="Oluwafernami Sharon Oladipo" className="w-full h-full object-cover" />
              <div className="w-full h-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400">
                <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 