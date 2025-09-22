import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Code, Download } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = [
    'Full Stack Developer',
    'AI Enthusiast', 
    'UI Designer',
    'Problem Solver'
  ];

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
    { icon: Code, href: 'https://leetcode.com/u/donthigari_vinay/', label: 'LeetCode' }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="container mx-auto text-center animate-fade-in">
        {/* Profile Image Placeholder */}
        <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-4xl font-bold text-primary-foreground animate-float">
          VD
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground">
          Vinay Donthigari
        </h1>

        {/* Typing Animation */}
        <div className="h-12 md:h-16 mb-6">
          <h2 className="text-xl md:text-2xl text-primary font-medium">
            {displayText}
            <span className="animate-blink border-r-2 border-primary ml-1"></span>
          </h2>
        </div>

        {/* Bio */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          Passionate about creating innovative solutions through code. I specialize in 
          building robust web applications and exploring the latest in AI technology. 
          Always eager to learn and take on new challenges.
        </p>

        {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
        {/* ✅ Download Resume button */}
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 font-medium"
          asChild
          >
          {/* 
          Replace the placeholder URL below with your real Google Drive
          “direct download” or public link to the PDF. 
          Example of a direct-download format:
          https://drive.google.com/uc?export=download&id=YOUR_FILE_ID
          */}
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

        {/* ✅ View Projects button */}
        <Button
         variant="outline"
         size="lg"
         className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 font-medium"
         asChild
        >
        {/*
        This scrolls the user smoothly to your Projects section.
        Make sure the Projects section has id="projects".
        */}
       <a href="#projects">
        View Projects
      </a>
     </Button>
    </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6">
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