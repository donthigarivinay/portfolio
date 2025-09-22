import { useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from 'emailjs-com';               // ✅ NEW

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // ✅ Send via EmailJS
    emailjs
      .send(
        'service_rsfwnwd',   // <-- your EmailJS Service ID
        'template_8qpyp1t',  // <-- your EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message
        },
        '0PsTw4w-KoGpmdYg9'  // <-- your EmailJS Public Key
      )
      .then(
        () => {
          toast({
            title: 'Message sent!',
            description: "Thank you for your message. I'll get back to you soon."
          });
          setFormData({ name: '', email: '', message: '' });
          setIsSubmitting(false);
        },
        (error) => {
          toast({
            title: 'Failed to send',
            description: `Error: ${error.text}`,
            variant: 'destructive'
          });
          setIsSubmitting(false);
        }
      );
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'vinaydonthigari@gmail.com',
      href: 'mailto:vinaydonthigari@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9885195329',
      href: 'tel:+919885195329'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Hyderabad',
      href: '#'
    }
  ];

  return (
    <section ref={sectionRef} id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <div
          className={`text-center mb-16 ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from
            you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-stretch">
          {/* Contact Information */}
          <div
            className={`space-y-8 ${
              isVisible ? 'animate-slide-in-left' : 'opacity-0'
            } flex flex-col h-full`}
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Let's Connect
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always open to discussing new opportunities or creative
                projects. Feel free to reach out through any of the channels
                below or use the contact form.
              </p>
            </div>

            <div className="space-y-6 flex-1">
  {contactInfo.map(info => (
    <a
      key={info.title}
      href={info.href}
      className="flex items-center space-x-4 p-4 rounded-lg bg-card hover:bg-secondary/50 transition-colors group flex-wrap"
    >
      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
        <info.icon className="w-6 h-6 text-primary" />
      </div>

      {/* ✅ Text container now allows wrapping and responsive font sizes */}
      <div className="min-w-0">
        <h4 className="font-medium text-card-foreground text-sm sm:text-base">
          {info.title}
        </h4>
        <p className="text-muted-foreground text-sm sm:text-base break-words">
          {info.value}
        </p>
      </div>
    </a>
  ))}
</div>

          </div>

          {/* Contact Form */}
          <div
            className={`${
              isVisible ? 'animate-slide-in-right' : 'opacity-0'
            } flex flex-col h-full`}
          >
            <Card className="p-3 flex-1">
              <h3 className="text-2xl font-semibold mb-6 text-card-foreground">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-card-foreground">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-2"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-card-foreground">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-2"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-card-foreground">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="mt-2 min-h-[120px]"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin w-4 h-4 mr-2 border-2 border-current border-t-transparent rounded-full" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
