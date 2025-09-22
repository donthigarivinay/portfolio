import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Award } from 'lucide-react';

const Certifications = () => {
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

  const certifications = [
    {
      title: 'Web development Certification',
      organization: 'Bharath Intern',
      date: '2022',
      credentialUrl: '#',
      description:
        'Successfully completed a certified internship with Bharat Intern, gaining hands-on experience in modern web development practices.',
      skills: ['Web development', 'DevOps', 'CI/CD'],
    },
    {
      title: 'Web Wars',
      organization: 'CMR College of Engineering & Technology',
      date: '2023',
      credentialUrl: '#',
      description:
        'Participated in Web Wars Hackathon, a high-energy event that brought together passionate developers, designers, and problem-solvers to build innovative web solutions in a fast-paced environment.',
      skills: ['Web development', 'Database Design'],
    },
    {
      title: 'HackWave',
      organization: 'Srinidhi Institute of Science and Technology',
      date: '2024',
      credentialUrl: '#',
      description:
        'Took part in HackWave, an intense 24-hour hackathon that challenged me to design and build a complete solution from scratch under real-world time constraints.',
      skills: ['UI design', 'Frontend', 'Backend'],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="certifications"
      className="py-20 px-4 bg-secondary/30"
    >
      <div className="container mx-auto">
        {/* Section Heading */}
        <div
          className={`text-center mb-16 ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Certifications & Achievements
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications that validate my expertise and commitment
            to continuous learning
          </p>
        </div>

        {/* Certification Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0'} h-full`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Card className="group h-full flex flex-col p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                {/* Certificate Icon */}
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Award className="w-8 h-8 text-primary" />
                </div>

                {/* Certificate Title */}
                <h3 className="text-lg font-semibold text-center mb-2 text-card-foreground group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>

                {/* Organization and Date */}
                <div className="text-center mb-4">
                  <p className="text-muted-foreground font-medium">
                    {cert.organization}
                  </p>
                  <p className="text-sm text-muted-foreground">{cert.date}</p>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 text-center leading-relaxed flex-grow">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {cert.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                {/* View Credential Button */}
                <div className="text-center mt-auto">
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Credential
                    </a>
                  </Button>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div
          className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          <div className="text-center p-6 rounded-lg bg-card">
            <div className="text-3xl font-bold text-primary mb-2">4+</div>
            <div className="text-muted-foreground">Professional Certifications</div>
          </div>
          <div className="text-center p-6 rounded-lg bg-card">
            <div className="text-3xl font-bold text-primary mb-2">5+</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center p-6 rounded-lg bg-card">
            <div className="text-3xl font-bold text-primary mb-2">100+</div>
            <div className="text-muted-foreground">Hours of Learning</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
