import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'JavaScript', icon: '🟨' },
        { name: 'TypeScript', icon: '🔷' },
        { name: 'Java', icon: '☕' },
        { name: 'HTML5', icon: '🌐' },
        { name: 'CSS3', icon: '🎨' }
      ]
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'React', icon: '⚛️' },
        { name: 'Node.js', icon: '🟢' },
        { name: 'Express', icon: '🚀' },
        { name: 'Next.js', icon: '⚫' },

      ]
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MongoDB', icon: '🍃' },
        { name: 'PostgreSQL', icon: '🐘' },
        { name: 'MySQL', icon: '🐬' },
      ]
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Git', icon: '📦' },
        { name: 'Jenkins', icon: '🧱' },
        { name: 'Docker', icon: '🐳' },
        { name: 'VS Code', icon: '💻' },
        { name: 'Figma', icon: '🎨' }
      ]
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className="py-20 px-4 bg-secondary/30"
    >
      <div className="container mx-auto">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-6 text-center text-foreground">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className="flex items-center space-x-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors duration-200"
                    >
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="font-medium text-card-foreground">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;