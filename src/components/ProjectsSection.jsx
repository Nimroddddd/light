const ProjectCard = ({ title, description, image, tags, link }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="h-48 bg-gray-300 dark:bg-gray-700 relative overflow-hidden">
        <img src={image} className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center text-gray-500 dark:text-gray-400">

        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="text-xs font-medium bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 py-1 px-2 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <a 
          href={link}
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium inline-flex items-center"
        >
          View Project
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: "Sales Performance Analysis",
      description: "A project that entails a thorough examination of sales performance that tracks various relevant metrics.",
      image: "salesperformance.png",
      tags: ["Python", "Tableau", "Excel"],
      link: "https://drive.google.com/file/d/11Tqhi3x9Zzj9IgqZDPOGC9Th1CSbArqu/view"
    },
    {
      title: "Performance Analysis Dashboard",
      description: "A comprehensive Performance Analysis Dashboard for Samtee Analytics Enterprise.",
      image: "performanceanalysis.jpg",
      tags: ["Microsoft Excel"],
      link: "#"
    },
    {
      title: "Investment Insights Dashboard",
      description: "A comprehensive Investment Insights Dashboard that serves as an interactive data visualization tool analyzes investment preferences and behaviors across 40 participants",
      image: "investment.jpg",
      tags: ["Microsoft Excel"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 