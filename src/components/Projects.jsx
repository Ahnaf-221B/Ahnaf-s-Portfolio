import { ExternalLink, Github, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "The Sentinal Times - Newspaper Website",
      description: "The Sentinal Times is a modern newspaper website that provides up-to-date news coverage on various topics. It features a user-friendly interface with easy navigation and a clean design.",
      image: "https://i.postimg.cc/t4MF51SK/Screenshot-2025-08-04-232659.png",
      technologies: ["React", "Tailwind", "NodeJs", "ExpressJs", "MongoDB", "Firebase", "JWT"],
      liveUrl: "https://thesentinaltimes.web.app/",
      githubUrl: "https://github.com/Ahnaf-221B/The-Sentinal-Times-Newspaper-Website-Client",
      challenges: "Managing the state of bills, payment status, and user sessions across multiple components, particularly while ensuring real-time updates without data inconsistencies.",
      futureWork: "Add a personalized news recommendation system using AI that learns from users' reading habits and preferences to suggest relevant articles",
    },
    {
      id: 2,
      title: "BookFlow-Library Management System",
      description: "BookFlow is a comprehensive library management system designed to streamline daily operations. It offers intuitive features for organizing book inventories, tracking availability, and managing user borrowing and returns.",
      image: "https://i.postimg.cc/9fhHmYxy/image.png",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "Firebase", "JWT"],
      liveUrl: "https://bookflow-library-mangement.web.app/",
      githubUrl: "https://github.com/Ahnaf-221B/BookFlow-Library-Management-System",
      challenges: "Implementing JWT authentication for the first time was challenging, especially in understanding the token flow and securing protected routes.",
      futureWork: "Add online borrowing, adding bookmarks, and analytics dashboard.",
    },
    {
      id: 3,
      title: "RecipeBook-Recipe Management System",
      description: "RecipeBook is a full-featured recipe management platform designed for food enthusiasts to easily organize, share, and discover culinary creations.",
      image: "https://i.postimg.cc/rm7T52Vt/image.png",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Firebase", "Tailwind CSS", "DaisyUI"],
      liveUrl: "https://recipebook-65258.web.app/",
      githubUrl: "https://github.com/Ahnaf-221B/RecipeBook-Recipe-Management-System-Client",
      challenges: "Implementing real-time likes and user-based filtering, along with integrating Node.js and MongoDB for the first time was initially challenging.",
      futureWork: "Allow meal planning and integration with shopping lists.",
    },
    {
      id: 4,
      title: "Marigold-Bill Management System",
      description: "Marigold is a modern web application designed to simplify bill management for users. It provides a clean, intuitive interface where users can view, track, and settle their outstanding bills with ease.",
      image: "https://i.postimg.cc/43LPLJhn/image.png",
      technologies: ["React", "Tailwind", "DaisyUI", "Firebase"],
      liveUrl: "https://mariigold.netlify.app/",
      githubUrl: "https://github.com/Ahnaf-221B/MariGold-Bill-Management-System",
      challenges: "Managing the state of bills, payment status, and user sessions across multiple components became complex, especially while ensuring real-time updates without data inconsistencies.",
      futureWork: "Add auto-reminders and recurring bill automation. Also add the payment method.",
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all overflow-hidden flex flex-col h-full"
            >
              {/* Image */}
              <div className="h-48 sm:h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 line-clamp-3 mb-4">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium text-sm transition-colors"
                    >
                      <ExternalLink size={18} /> Live
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300 font-medium text-sm transition-colors"
                    >
                      <Github size={18} /> Code
                    </a>
                  </div>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg text-sm font-medium transition-all shadow-sm hover:shadow-md"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
            >
              <div className="relative p-6">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                >
                  <X size={24} />
                </button>

                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="rounded-lg mb-6 w-full h-64 object-cover"
                  loading="lazy"
                />

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {selectedProject.title}
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      Description
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 text-sm font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      Challenges
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {selectedProject.challenges}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      Future Improvements
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {selectedProject.futureWork}
                    </p>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors"
                    >
                      <ExternalLink size={16} /> Visit Live Site
                    </a>
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-lg text-sm font-medium transition-colors"
                    >
                      <Github size={16} /> View Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;