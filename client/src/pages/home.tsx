import React, { useEffect, useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useIsMobile } from "@/hooks/use-mobile";
import haasLogo from "@assets/image_1752094851512.png";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const isMobile = useIsMobile();
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Intersection Observer for animations and navigation highlighting
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          
          // Update active section for navigation
          const sectionId = entry.target.getAttribute('id');
          if (sectionId) {
            setActiveSection(sectionId);
          }
          
          // Animate skill bars when they come into view
          const skillBars = entry.target.querySelectorAll('.skill-bar');
          skillBars.forEach((bar: Element) => {
            const htmlBar = bar as HTMLElement;
            const width = htmlBar.getAttribute('data-width');
            if (width) {
              setTimeout(() => {
                htmlBar.style.width = width;
              }, 300);
            }
          });
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
      observerRef.current?.observe(section);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  const skills = [
    { name: "Creative Strategy", percentage: 95 },
    { name: "Project Management", percentage: 90 },
    { name: "Team Leadership", percentage: 88 }
  ];

  const experiences = [
    {
      title: "Senior Creative Director",
      company: "Innovation Labs Inc.",
      period: "2021 - Present",
      description: "Leading cross-functional teams to develop groundbreaking digital experiences for Fortune 500 clients. Spearheaded the creative vision for 15+ major projects, resulting in 40% increase in client satisfaction.",
      skills: ["Strategy", "Team Leadership", "Client Relations"],
      color: "primary"
    },
    {
      title: "Creative Manager",
      company: "Digital Dynamics Studio", 
      period: "2019 - 2021",
      description: "Managed creative projects from conception to delivery, collaborating with designers, developers, and stakeholders. Implemented new workflow processes that improved team efficiency by 35%.",
      skills: ["Project Management", "Process Optimization", "Cross-functional Teams"],
      color: "secondary"
    },
    {
      title: "Junior Creative Specialist",
      company: "StartUp Creative Co.",
      period: "2016 - 2019", 
      description: "Developed creative concepts and executed design solutions for various clients. Contributed to brand identity projects and digital campaigns, gaining comprehensive experience in the creative industry.",
      skills: ["Brand Identity", "Digital Campaigns", "Creative Concepts"],
      color: "accent"
    }
  ];

  const education = [
    {
      degree: "Master of Creative Arts",
      school: "Design University",
      period: "2014 - 2016",
      description: "Specialized in Digital Media and Innovation Management. Thesis focused on the intersection of technology and creative problem-solving in modern business environments.",
      honor: "Magna Cum Laude",
      icon: "graduation-cap"
    },
    {
      degree: "Bachelor of Fine Arts", 
      school: "Creative Arts College",
      period: "2010 - 2014",
      description: "Comprehensive foundation in visual arts, design principles, and creative methodology. Active in student leadership and collaborative artistic projects.",
      honor: "Dean's List",
      icon: "certificate"
    }
  ];

  const certifications = [
    { name: "Creative Leadership", org: "Innovation Institute", icon: "award" },
    { name: "Project Management", org: "PMI Certification", icon: "medal" },
    { name: "Design Excellence", org: "Design Awards 2022", icon: "trophy" },
    { name: "Innovation Leader", org: "Tech Summit 2023", icon: "star" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src={haasLogo} alt="Haas Logo" className="h-8 w-8 mr-2" />
              <span className="font-bold text-xl text-primary">Haas</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'experience', 'education', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`transition-colors capitalize ${
                    activeSection === section 
                      ? 'text-primary font-semibold' 
                      : 'text-muted-text hover:text-primary'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <i className="fas fa-bars text-primary"></i>
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 pt-2 pb-3 space-y-1">
              {['home', 'about', 'experience', 'education', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-3 py-2 text-muted-text hover:text-primary capitalize"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen gradient-bg flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in-up">
            {/* Profile Logo */}
            <div className="w-48 h-48 mx-auto mb-8 rounded-2xl bg-white/95 backdrop-blur-sm border-4 border-white/50 flex items-center justify-center animate-float p-8">
              <img src={haasLogo} alt="Haas Logo" className="w-full h-full object-contain" />
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
              Hi, I'm <span className="text-yellow-300">Haas</span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl font-light mb-8 max-w-3xl mx-auto">
              Creative Professional & Innovation Catalyst
            </p>
            <p className="text-lg sm:text-xl opacity-90 mb-12 max-w-2xl mx-auto">
              Transforming ideas into impactful solutions through design, strategy, and technology
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105"
                onClick={() => scrollToSection('about')}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-300/20 rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-pink-300/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-blue-300/20 rounded-full animate-float" style={{animationDelay: '1.5s'}}></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-dark-text">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-dark-text">Passionate About Innovation</h3>
              <p className="text-lg text-muted-text mb-6">
                With over 8 years of experience in creative industries, I specialize in bridging the gap between innovative ideas and practical solutions. My approach combines strategic thinking with hands-on execution to deliver results that matter.
              </p>
              <p className="text-lg text-muted-text mb-8">
                I believe in the power of collaboration, continuous learning, and creating meaningful impact through thoughtful design and technology integration.
              </p>
              
              {/* Skills */}
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">{skill.name}</span>
                      <span>{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="skill-bar bg-gradient-to-r from-primary to-secondary h-2 rounded-full" 
                        style={{width: '0%'}} 
                        data-width={`${skill.percentage}%`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl transform rotate-3"></div>
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="Creative workspace with laptop and design materials" 
                  className="relative rounded-3xl shadow-2xl w-full h-auto" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-dark-text">Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary hidden lg:block"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative lg:pl-20">
                  <div 
                    className={`absolute left-6 w-4 h-4 bg-${exp.color} rounded-full hidden lg:block`}
                    style={{transform: 'translateX(-50%)'}}
                  ></div>
                  <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-dark-text mb-2">{exp.title}</h3>
                        <p className="text-primary font-semibold mb-2">{exp.company}</p>
                      </div>
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        {exp.period}
                      </Badge>
                    </div>
                    <p className="text-muted-text mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="bg-secondary/10 text-secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-dark-text">Education</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div key={index} className="">
                <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 border border-primary/10 hover:shadow-lg transition-all">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mr-4">
                      <i className={`fas fa-${edu.icon} text-2xl text-white`}></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-dark-text">{edu.degree}</h3>
                      <p className="text-primary font-semibold">{edu.school}</p>
                    </div>
                  </div>
                  <p className="text-muted-text mb-4">{edu.description}</p>
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {edu.period}
                    </Badge>
                    <span className="text-accent font-semibold">{edu.honor}</span>
                  </div>
                </Card>
              </div>
            ))}
          </div>
          
          {/* Certifications */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-dark-text">Certifications & Achievements</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-primary/5 transition-colors">
                  <i className={`fas fa-${cert.icon} text-3xl text-primary mb-3`}></i>
                  <h4 className="font-semibold mb-2">{cert.name}</h4>
                  <p className="text-sm text-muted-text">{cert.org}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 gradient-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">Let's Connect</h2>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Ready to collaborate on something amazing? I'd love to hear about your next project.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="">
              <Card className="glass-effect text-white p-8">
                <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <i className="fas fa-envelope text-white"></i>
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-white/80">haas[at]creative-pro.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <i className="fas fa-globe text-white"></i>
                    </div>
                    <div>
                      <p className="font-semibold">Website</p>
                      <p className="text-white/80">www.haas-portfolio.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <i className="fas fa-map-marker-alt text-white"></i>
                    </div>
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-white/80">San Francisco, CA</p>
                    </div>
                  </div>
                </div>
                
                {/* Social Media Links */}
                <div className="mt-8 pt-8 border-t border-white/20">
                  <p className="font-semibold mb-4">Follow Me</p>
                  <div className="flex space-x-4">
                    {['linkedin', 'twitter', 'instagram', 'github'].map((social) => (
                      <button
                        key={social}
                        className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                      >
                        <i className={`fab fa-${social} text-white`}></i>
                      </button>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
            
            <div className="">
              <Card className="glass-effect p-8">
                <form className="space-y-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">Name</label>
                    <Input 
                      className="bg-white/20 border-white/30 text-white placeholder-white/70 focus:border-white/50"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Email</label>
                    <Input 
                      type="email"
                      className="bg-white/20 border-white/30 text-white placeholder-white/70 focus:border-white/50"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Message</label>
                    <Textarea 
                      rows={4}
                      className="bg-white/20 border-white/30 text-white placeholder-white/70 focus:border-white/50 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg"
                    className="w-full bg-white text-primary hover:bg-gray-100 font-semibold transition-all transform hover:scale-105"
                  >
                    Send Message
                    <i className="fas fa-paper-plane ml-2"></i>
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-24 h-24 bg-yellow-300/10 rounded-full animate-float"></div>
        <div className="absolute bottom-10 left-10 w-20 h-20 bg-pink-300/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-text text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2024 Haas. Crafted with passion and creativity.
          </p>
        </div>
      </footer>
    </div>
  );
}
