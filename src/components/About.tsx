import { User, MapPin, Phone, Mail, Award, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import developerPortrait from "@/assets/developer-portrait.jpg";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Passionate software engineer with a drive for creating exceptional digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left side - Image and stats */}
          <div className="space-y-8 animate-fade-in">
            {/* Professional image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative">
                <img 
                  src={developerPortrait}
                  alt="Durgesh Soni - Software Engineer"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl object-cover aspect-square"
                />
                <div className="absolute inset-0 rounded-2xl border border-white/20"></div>
              </div>
            </div>

            {/* Quick stats grid */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="glass border-0 p-6 text-center group hover:glow transition-all duration-300">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold gradient-text mb-2">4+</div>
                  <div className="text-muted-foreground text-sm">Years Experience</div>
                </CardContent>
              </Card>
              
              <Card className="glass border-0 p-6 text-center group hover:glow transition-all duration-300">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold gradient-text mb-2">50+</div>
                  <div className="text-muted-foreground text-sm">Projects Completed</div>
                </CardContent>
              </Card>
              
              <Card className="glass border-0 p-6 text-center group hover:glow transition-all duration-300">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold gradient-text mb-2">10+</div>
                  <div className="text-muted-foreground text-sm">Technologies Mastered</div>
                </CardContent>
              </Card>
              
              <Card className="glass border-0 p-6 text-center group hover:glow transition-all duration-300">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold gradient-text mb-2">2</div>
                  <div className="text-muted-foreground text-sm">Certifications</div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="flex items-center space-x-4 mb-8">
              <div className="p-3 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-full">
                <User className="text-white" size={24} />
              </div>
              <h3 className="text-3xl font-bold text-foreground">Software Engineer</h3>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Self-driven Software Engineer with <span className="text-primary font-semibold">4+ years of experience</span> specializing in backend development, 
                scalable microservices, API design, and cloud architectures. Skilled in Spring Boot, Microservices, 
                distributed systems, and AWS cloud deployments.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Adept at system design, performance optimization, and CI/CD automation. 
                Thrive in agile environments and open to remote opportunities. Passionate about writing clean, 
                maintainable code and building solutions that make a real impact.
              </p>
            </div>

            {/* Contact info */}
            <Card className="glass border-0 p-6">
              <CardContent className="p-0">
                <h4 className="text-xl font-semibold mb-6 text-foreground flex items-center">
                  <Award className="mr-2 text-primary" size={20} />
                  Contact Information
                </h4>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center space-x-3 group">
                    <MapPin className="text-purple-400 group-hover:text-cyan-400 transition-colors" size={20} />
                    <span className="text-muted-foreground">Bangalore, Karnataka, India</span>
                  </div>
                  
                  <div className="flex items-center space-x-3 group">
                    <Phone className="text-purple-400 group-hover:text-cyan-400 transition-colors" size={20} />
                    <span className="text-muted-foreground">+91 7552013781</span>
                  </div>
                  
                  <div className="flex items-center space-x-3 group">
                    <Mail className="text-purple-400 group-hover:text-cyan-400 transition-colors" size={20} />
                    <span className="text-muted-foreground">hello@durgeshsoni.com</span>
                  </div>

                  <div className="flex items-center space-x-3 group">
                    <Calendar className="text-purple-400 group-hover:text-cyan-400 transition-colors" size={20} />
                    <span className="text-muted-foreground">Available for opportunities</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};