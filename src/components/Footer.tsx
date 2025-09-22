import { Github, Linkedin, Code, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/donthigarivinay', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/vinay-donthigari', label: 'LinkedIn' }, 
    { icon: Code, href: 'https://leetcode.com/u/donthigari_vinay/', label: 'LeetCode' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-xl text-card-foreground mb-2">
              Vinay Donthigari
            </h3>
            <p className="text-muted-foreground">
              Building the future, one line of code at a time.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                aria-label={link.label}
                className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors group"
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-muted-foreground flex items-center justify-center md:justify-end">
            </p>
            <button
              onClick={scrollToTop}
              className="mt-2 text-sm text-primary hover:underline"
            >
              Back to top
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            Designed and developed with modern web technologies. 
            <span className="ml-1 font-medium text-primary">
              Always learning, always growing.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;