import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface SkillBarProps {
  skill: string;
  percentage: number;
  delay: number;
}

function SkillBar({ skill, percentage, delay }: SkillBarProps) {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimated(true), delay * 100);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div data-testid={`skill-${skill.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
      <div className="flex justify-between mb-2">
        <span className="font-medium">{skill}</span>
        <span className="text-blue-400">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-3">
        <motion.div
          className="bg-gradient-to-r from-blue-500 to-green-400 h-3 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: isAnimated ? `${percentage}%` : 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
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

    const section = document.getElementById("skills");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const technicalSkills = [
    { skill: "Flutter", percentage: 80 },
    { skill: "FlutterFlow", percentage: 90 },
    { skill: "WordPress", percentage: 90 },
    { skill: "Java", percentage: 80 },

  ];

  const designSkills = [
    { skill: "Android Studio", percentage: 90 },
    { skill: "VS Code ", percentage: 85 },
    { skill: "Git/GitHub", percentage: 80 },
    { skill: "Firbase", percentage: 90 },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
            data-testid="skills-title"
          >
            Skills & Expertise
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-2xl font-semibold mb-8 text-center" data-testid="technical-skills-title">
                Technical Skills
              </h3>
              <div className="space-y-6">
                {technicalSkills.map((item, index) => (
                  <SkillBar
                    key={item.skill}
                    skill={item.skill}
                    percentage={item.percentage}
                    delay={isVisible ? index * 2 : 0}
                  />
                ))}
              </div>
            </motion.div>

            {/* Design & Tools */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-2xl font-semibold mb-8 text-center" data-testid="design-skills-title">
                 Tools
              </h3>
              <div className="space-y-6">
                {designSkills.map((item, index) => (
                  <SkillBar
                    key={item.skill}
                    skill={item.skill}
                    percentage={item.percentage}
                    delay={isVisible ? index * 2 + 5 : 0}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
