import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
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

  const projects = [
    {
      title: 'FarmAssist',
      description:
        'Built an online platform for farmers to buy seeds, fertilizers, and pesticides with features like multi-store price comparison, search & filter, cart management, delivery charge calculation, and role-based views for farmers, dealers, and admins.',
      technologies: ['JavaScript','React', 'Next.js', 'MongoDB', 'Tailwind CSS'],
      liveDemo: 'https://farmassist-application.netlify.app/',
      github: 'https://github.com/donthigarivinay/FarmAssist.git',
      featured: true,
    },
    {
      title: 'Alzheimers',
      description:
        'Built a CNN (VGG16)-based model with a Tkinter GUI to detect Alzheimer’s from MRI scans, featuring preprocessing, predictions, and automated reports.',
      technologies: ['Python', 'CNN', 'VG16', 'TKinter'],
      liveDemo: 'https://github.com/donthigarivinay/Alzheimers.git',
      github: 'https://github.com/donthigarivinay/Alzheimers.git',
      featured: true,
    },
    {
      title: 'Online Library Management System',
      description:
        'A responsive multi-page Online Library web app built with HTML, CSS and MySQL featuring user signup/login, book browsing, and profile management.',
      technologies: ['HTML', 'CSS', 'MySQL', 'JavaScript'],
      liveDemo: 'https://github.com/donthigarivinay/online-library.git',
      github: 'https://github.com/donthigarivinay/online-library.git',
      featured: true,
    },
    
    
  ];

  return (
    <section ref={sectionRef} id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <div
          className={`text-center mb-16 ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Card className="group h-full overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                {/*
                  ❌ REMOVED the colored placeholder block that
                  previously looked like an image:
                  
                  <div className="h-48 bg-gradient-to-br ...">
                    {initial letters & featured badge}
                  </div>
                */}

                <div className="p-6 flex flex-col h-full">
                  {/* ✅ Show 'Featured' badge inside the content instead */}
                  {project.featured && (
                    <Badge className="mb-3 bg-primary text-primary-foreground self-start">
                      Featured
                    </Badge>
                  )}

                  <h3 className="text-xl font-semibold mb-3 text-card-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 flex-grow leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex space-x-3">
                    <Button size="sm" className="flex-1" asChild>
                      <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>

                    <Button size="sm" variant="outline" className="flex-1" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            View All Projects
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
