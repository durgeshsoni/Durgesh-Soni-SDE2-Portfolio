import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypewriterText } from "./TypewriterText";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadResume = () => {
    const resumeUrl = "/resume.pdf";
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Durgesh_Soni_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="min-h-[80vh] lg:min-h-[85vh] flex items-center justify-center relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 py-8 lg:py-12 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 lg:mb-8 animate-fade-in-up">
            <span className="gradient-text">Durgesh Soni</span>
          </h1>
          
          {/* Typewriter subtitle */}
          <div className="h-12 sm:h-14 md:h-16 lg:h-20 flex items-center justify-center mb-6 lg:mb-8">
            <TypewriterText 
              text="Software Engineer & Full-Stack Developer"
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-muted-foreground font-light font-mono"
              delay={500}
              speed={80}
            />
          </div>
          
          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 lg:mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up px-4" style={{ animationDelay: '0.3s' }}>
            Passionate about creating scalable backend solutions and engaging user experiences. 
            Specialized in <span className="text-primary font-semibold">Java</span>, <span className="text-secondary font-semibold">Spring Boot</span>, and modern web technologies.
          </p>
          
          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 lg:mb-16 animate-fade-in-up px-4" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="btn-gradient w-full sm:w-auto min-w-[200px] h-12 lg:h-14 text-base lg:text-lg glow-orange"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="btn-outline-glow w-full sm:w-auto min-w-[200px] h-12 lg:h-14 text-base lg:text-lg"
              onClick={downloadResume}
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </Button>
          </div>
          
          {/* Social links */}
          <div className="flex justify-center space-x-6 sm:space-x-8 mb-12 lg:mb-16 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
            <a 
              href="https://github.com/durgeshsoni" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass p-3 lg:p-4 rounded-full hover-lift group"
            >
              <Github size={24} className="text-foreground group-hover:text-primary transition-colors duration-300" />
            </a>
            
            <a 
              href="https://linkedin.com/in/durgeshsoni" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass p-3 lg:p-4 rounded-full hover-lift group"
            >
              <Linkedin size={24} className="text-foreground group-hover:text-secondary transition-colors duration-300" />
            </a>
            
            <a 
              href="mailto:hello@durgeshsoni.com"
              className="glass p-3 lg:p-4 rounded-full hover-lift group"
            >
              <Mail size={24} className="text-foreground group-hover:text-accent transition-colors duration-300" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection("about")}
          className="glass p-3 lg:p-4 rounded-full hover-lift group"
        >
          <ArrowDown size={20} className="text-muted-foreground group-hover:text-primary transition-colors duration-300" />
        </button>
      </div>
    </section>
  );
};