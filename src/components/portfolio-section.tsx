import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Github, ExternalLink, Eye } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  links: {
    github?: string;
    demo?: string;
    view?: string;
  };
}

const projects: Project[] = [
  {
    id: 1,
    title: "Food Delivery App",
    description: "Huber Eats is a modern Food Delivery UI Kit with 60+ clean and user-friendly screens for restaurants, groceries, and delivery services.",
    image: "/huber_eats.png",
    category: "Flutter",
    technologies: ["Flutter", "Dart", "Firebase"],
    links: { 
      github: "https://github.com/kumail-raza/huber-eats", 
      view: "https://your-demo-link.com/huber-eats" 
    },
  },
  {
    id: 2,
    title: "BeautyMart",
    description: "BeautyMart UI Kit is a stylish e-commerce App for beauty and cosmetics apps, offering product discovery, detailed product pages, reviews, seamless checkout, and order management with a clean pink-accented design.",
    image: "/beauty_mart.png",
    category: "FlutterFlow",
    technologies: ["Flutter", "Dart", "Firebase"],
    links: { 
      github: "https://your-flutterflow.com/beauty-mart", 
      view: "https://your-demo-link.com/beauty-mart" 
    },
  },
  
];

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("portfolio");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeFilter));
    }
  }, [activeFilter]);

  const filters = [
    { key: "all", label: "All" },
    { key: "Flutter", label: "Flutter" },
    { key: "FlutterFlow", label: "FlutterFlow" },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            data-testid="portfolio-title"
          >
            My Portfolio
          </motion.h2>

          {/* Portfolio Filter */}
          <motion.div
            className="flex justify-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex space-x-4 bg-gray-700 rounded-lg p-1" data-testid="portfolio-filters">
              {filters.map((filter) => (
                <motion.button
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                  className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                    activeFilter === filter.key
                      ? "bg-blue-600 text-white"
                      : "hover:bg-gray-600"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  data-testid={`filter-${filter.key}`}
                >
                  {filter.label}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-gray-900 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                data-testid={`project-${project.id}`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2" data-testid={`project-title-${project.id}`}>
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4" data-testid={`project-description-${project.id}`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-600 text-xs px-2 py-1 rounded"
                        data-testid={`project-tech-${project.id}-${tech.toLowerCase()}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    {project.links.github && (
                      <motion.a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
                        whileHover={{ scale: 1.1 }}
                        data-testid={`project-github-${project.id}`}
                      >
                        <Github size={16} /> Code
                      </motion.a>
                    )}
                    {project.links.demo && (
                      <motion.a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
                        whileHover={{ scale: 1.1 }}
                        data-testid={`project-demo-${project.id}`}
                      >
                        <ExternalLink size={16} /> Demo
                      </motion.a>
                    )}
                    {project.links.view && (
                      <motion.a
                        href={project.links.view}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
                        whileHover={{ scale: 1.1 }}
                        data-testid={`project-view-${project.id}`}
                      >
                        <Eye size={16} /> View
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
