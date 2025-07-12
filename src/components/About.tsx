import { User, MapPin, Phone, Mail, Award, Calendar, Code, Coffee } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import developerPortrait from "@/assets/developer-portrait.jpg";

export const About = () => {
  const stats = [
    { icon: Calendar, label: "Years Experience", value: "4+", color: "text-primary" },
    { icon: Code, label: "Projects Completed", value: "50+", color: "text-secondary" },
    { icon: Coffee, label: "Technologies", value: "10+", color: "text-accent" },
    { icon: Award, label: "Certifications", value: "2", color: "text-primary" }
  ];

  const contactInfo = [
    { icon: MapPin, label: "Location", value: "Bangalore, Karnataka, India", color: "text-primary" },
    { icon: Phone, label: "Phone", value: "+91 7552013781", color: "text-secondary" },
    { icon: Mail, label: "Email", value: "hello@durgeshsoni.com", color: "text-accent" },
    { icon: Calendar, label: "Availability", value: "Open to opportunities", color: "text-primary" }
  ];

  return (
    <section id="about" className="section-container bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="section-title">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full mb-6"></div>
          <p className="section-subtitle">
            Passionate software engineer with a drive for creating exceptional digital experiences and scalable solutions
          </p>
        </div>

        <div className="responsive-grid-2 items-center">
          {/* Left side - Image and stats */}
          <div className="space-y-8 animate-fade-in-up order-2 lg:order-1">
            {/* Professional image with modern styling */}
            <div className="relative group max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative overflow-hidden rounded-2xl glass-card">
                <img 
                  src={developerPortrait}
                  alt="Durgesh Soni - Software Engineer"
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <Card 
                  key={stat.label}
                  className="glass-card border-0 hover-lift hover-glow group animate-fade-in-up"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <CardContent className="p-4 sm:p-6 text-center">
                    <stat.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${stat.color} mx-auto mb-2 sm:mb-3`} />
                    <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1 sm:mb-2">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8 animate-slide-in-right order-1 lg:order-2" style={{ animationDelay: '0.3s' }}>
            {/* Header with icon */}
            <div className="flex items-center space-x-4 mb-8">
              <div className="p-3 sm:p-4 bg-gradient-to-r from-primary to-secondary rounded-xl glow-orange">
                <User className="text-white w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">Software Engineer</h3>
                <p className="text-muted-foreground font-mono">Full-Stack Developer</p>
              </div>
            </div>
            
            {/* Description */}
            <div className="space-y-6">
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Self-driven Software Engineer with <span className="text-primary font-semibold">4+ years of experience</span> specializing in backend development, 
                scalable microservices, API design, and cloud architectures. Skilled in Spring Boot, Microservices, 
                distributed systems, and AWS cloud deployments.
              </p>
              
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Adept at system design, performance optimization, and CI/CD automation. 
                Thrive in agile environments and passionate about writing clean, 
                maintainable code that drives real business impact.
              </p>

              {/* Key highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-center space-x-3 glass p-3 rounded-lg">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm sm:text-base text-foreground">Microservices Architecture</span>
                </div>
                <div className="flex items-center space-x-3 glass p-3 rounded-lg">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-sm sm:text-base text-foreground">Cloud-Native Development</span>
                </div>
                <div className="flex items-center space-x-3 glass p-3 rounded-lg">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-sm sm:text-base text-foreground">System Design</span>
                </div>
                <div className="flex items-center space-x-3 glass p-3 rounded-lg">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm sm:text-base text-foreground">Performance Optimization</span>
                </div>
              </div>
            </div>

            {/* Contact info */}
            <Card className="glass-card border-0 hover-glow">
              <CardContent className="p-6 sm:p-8">
                <h4 className="text-xl sm:text-2xl font-bold text-foreground mb-6 flex items-center">
                  <Award className="mr-3 text-primary w-6 h-6" />
                  Contact Information
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {contactInfo.map((info, index) => (
                    <div key={info.label} className="flex items-center space-x-3 group hover-lift">
                      <info.icon className={`${info.color} group-hover:scale-110 transition-transform duration-300 w-5 h-5`} />
                      <div>
                        <div className="text-xs text-muted-foreground">{info.label}</div>
                        <div className="text-sm sm:text-base text-foreground font-medium">{info.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};