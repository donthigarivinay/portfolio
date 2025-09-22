import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Code, Download } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = ['Full Stack Developer', 'AI Enthusiast', 'UI Designer', 'Problem Solver'];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    const speed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentIndex, titles]);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/donthigarivinay', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/vinay-donthigari/', label: 'LinkedIn' },
    { icon: Code, href: 'https://leetcode.com/u/donthigari_vinay/', label: 'LeetCode' },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 bg-gradient-to-b from-blue-50 to-yellow-50 dark:from-background dark:to-background"
    >
      <div className="container mx-auto flex flex-col items-center text-center animate-fade-in">
        {/* Profile Avatar */}
        <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-4xl font-bold text-primary-foreground animate-float">
          VD
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-foreground">
          Vinay Donthigari
        </h1>

        {/* Typing Animation */}
        <div className="h-12 md:h-16 mb-6 flex justify-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl text-primary font-medium">
            {displayText}
            <span className="animate-blink border-r-2 border-primary ml-1"></span>
          </h2>
        </div>

        {/* Bio */}
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-balance">
          Passionate about creating innovative solutions through code. I specialize in building
          robust web applications and exploring the latest in AI technology. Always eager to learn
          and take on new challenges.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10 w-full sm:w-auto">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 font-medium w-full sm:w-auto"
            asChild
          >
            <a
              href="https://drive.google.com/file/d/1aXHSim9FxDKbv3QCiNiag_K8_P18MiAG/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </a>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 font-medium w-full sm:w-auto"
            asChild
          >
            <a href="#projects">View Projects</a>
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-5 sm:gap-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              aria-label={link.label}
              className="group p-3 rounded-full bg-card border border-border hover:border-primary transition-all duration-300 hover:scale-110"
            >
              <link.icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
