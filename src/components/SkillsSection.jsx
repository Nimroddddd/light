const SkillCard = ({ title, icon, description }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="text-blue-600 dark:text-blue-400 mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
    </div>
  );
};

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Data Analysis & Statistics",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zm6-4a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zm6-3a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
        </svg>
      ),
      description: "Transforming raw data into actionable insights using statistical methods and analytical techniques.",
    },
    {
      title: "Data Visualization",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
          <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
        </svg>
      ),
      description: "Creating compelling visual representations of data to communicate findings clearly and effectively.",
    },
    {
      title: "SQL & Database Management",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
          <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
          <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
        </svg>
      ),
      description: "Writing efficient queries to extract, manipulate, and analyze data from various database systems.",
    },
    {
      title: "Business Intelligence",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      description: "Developing dashboards and reports that drive strategic decision-making and business growth.",
    },
    {
      title: "Statistical Modeling",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
        </svg>
      ),
      description: "Transforming messy, raw data into structured formats ready for analysis and visualization.",
    },
    {
      title: "Data Cleaning & Preparation",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
        </svg>
      ),
      description: "Improving loading times, optimizing assets, and implementing best practices for web performance.",
    },
  ];

  const technologies = ["Python", "SQL", "Tableau", "Power BI", "Excel"];

  return (
    <section id="skills" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">My Skills</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((skill, index) => (
            <SkillCard
              key={index}
              title={skill.title}
              icon={skill.icon}
              description={skill.description}
            />
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">Technologies I Work With</h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-700 py-3 px-4 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <span className="text-gray-800 dark:text-gray-200 font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection; 