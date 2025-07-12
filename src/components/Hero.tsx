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
    // Replace with your actual resume URL
    const resumeUrl = "/resume.pdf";
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Durgesh_Soni_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card"></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
            Durgesh Soni
          </h1>
          
          <div className="h-16 flex items-center justify-center mb-6">
            <TypewriterText 
              text="Software Engineer & Full-Stack Developer"
              className="text-2xl md:text-3xl text-muted-foreground font-light"
              delay={500}
              speed={80}
            />
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating scalable backend solutions and engaging user experiences. 
            Specialized in Java, Spring Boot, React, and modern web technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 hover:from-purple-700 hover:via-blue-700 hover:to-cyan-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl animate-glow"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-3 rounded-full border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl glass"
              onClick={downloadResume}
            >
              <Download className="mr-2" size={16} />
              Download Resume
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a 
              href="https://github.com/durgeshsoni" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 rounded-full glass hover:bg-white/10 transition-all duration-300 hover:scale-110 group"
            >
              <Github size={24} className="text-foreground group-hover:text-purple-400 transition-colors" />
            </a>
            
            <a 
              href="https://linkedin.com/in/durgeshsoni" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 rounded-full glass hover:bg-white/10 transition-all duration-300 hover:scale-110 group"
            >
              <Linkedin size={24} className="text-foreground group-hover:text-blue-400 transition-colors" />
            </a>
            
            <a 
              href="mailto:hello@durgeshsoni.com"
              className="p-4 rounded-full glass hover:bg-white/10 transition-all duration-300 hover:scale-110 group"
            >
              <Mail size={24} className="text-foreground group-hover:text-cyan-400 transition-colors" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection("about")}
          className="p-3 rounded-full glass hover:bg-white/10 transition-all duration-300 group"
        >
          <ArrowDown size={24} className="text-muted-foreground group-hover:text-primary transition-colors" />
        </button>
      </div>
    </section>
  );
};