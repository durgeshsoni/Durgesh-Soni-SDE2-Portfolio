
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
            Durgesh Soni
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6 font-light">
            Software Engineer & Full-Stack Developer
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating scalable backend solutions and engaging user experiences. 
            Specialized in Java, Spring Boot, React, and modern web technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a 
              href="https://github.com/durgeshsoni" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <Github size={24} className="text-gray-700" />
            </a>
            
            <a 
              href="https://linkedin.com/in/durgeshsoni" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={24} className="text-blue-600" />
            </a>
            
            <a 
              href="mailto:hello@durgeshsoni.com"
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <Mail size={24} className="text-green-600" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection("about")}
          className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <ArrowDown size={24} className="text-gray-600" />
        </button>
      </div>
    </section>
  );
};
