const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">About Me</h2>
        
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          <div className="md:w-1/3 flex justify-center">
            <div className="w-64 h-64 bg-blue-100 dark:bg-blue-900 rounded-lg overflow-hidden shadow-lg">
              <img src="selfie-2.jpg" alt="Oluwafernami Sharon Oladipo" className="w-full h-full object-cover" />
              <div className="w-full h-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400">
                <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                </svg>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Who I Am</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            I hold a degree in Accounting from Kwara State University, Malete. However, I soon discovered that data analysis could be
            a valuable complement to my accounting background, offering a competitive edge in my career. The two fields are indeed interconnected, 
            and I've always been drawn to the idea of being a data analyst. As it turns out, my accounting background has provided a strong foundation 
            for analyzing complex financial data, identifying trends, and delivering actionable insights. These skills align perfectly with the job 
            requirements, particularly in analyzing and reporting financial data.
            </p>
            
            {/* <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Nullam congue pharetra nibh, eu placerat quam aliquam in. Quisque non libero quis eros sodales blandit 
              vitae vel dolor. Proin condimentum vulputate felis vel finibus. Vestibulum dapibus nisi orci.
            </p> */}
            
            <div className="flex flex-wrap gap-4">
              <div className="bg-white dark:bg-gray-700 rounded-lg px-4 py-3 shadow-md">
                <span className="block text-sm text-gray-500 dark:text-gray-400">Email</span>
                <span className="block text-gray-900 dark:text-white">oladipoferanmisharon@gmail.com</span>
              </div>
              
              <div className="bg-white dark:bg-gray-700 rounded-lg px-4 py-3 shadow-md">
                <span className="block text-sm text-gray-500 dark:text-gray-400">Location</span>
                <span className="block text-gray-900 dark:text-white">Lagos, Nigeria</span>
              </div>
              
              <div className="bg-white dark:bg-gray-700 rounded-lg px-4 py-3 shadow-md">
                <span className="block text-sm text-gray-500 dark:text-gray-400">Availability</span>
                <span className="block text-gray-900 dark:text-white">Available for Freelance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 