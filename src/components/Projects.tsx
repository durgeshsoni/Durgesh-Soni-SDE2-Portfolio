import { ExternalLink, Github, Calendar, Users, Star, Code, Globe, Eye, Layers, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import walletAppPreview from "@/assets/wallet-app-preview.jpg";
import foodAppPreview from "@/assets/food-app-preview.jpg";

export const Projects = () => {
  const projects = [
    {
      title: "Payment Wallet Application",
      type: "Collaborative Project",
      duration: "4 days",
      teamSize: "6 members",
      image: walletAppPreview,
      category: "FinTech",
      description: "Enterprise-grade digital wallet solution built with a collaborative team of 6 developers in just 4 days. Features secure payment processing, real-time transaction monitoring, and comprehensive financial tracking with modern microservices architecture.",
      features: [
        "🔐 Multi-layered security with JWT authentication and encryption",
        "⚡ Real-time transaction processing with instant notifications",
        "📊 Advanced analytics dashboard with transaction insights",
        "📋 Comprehensive API documentation with Swagger UI",
        "🛡️ Robust error handling and input validation systems"
      ],
      technologies: ["Java", "Spring Boot", "Hibernate", "MySQL", "Swagger", "Lombok", "JWT", "REST API", "Microservices"],
      githubUrl: "https://github.com/durgeshsoni/Wallet-app",
      showLiveDemo: false,
      color: "from-primary to-secondary",
      highlights: [
        { icon: Star, text: "Enterprise Security", color: "text-primary" },
        { icon: Code, text: "Clean Architecture", color: "text-secondary" },
        { icon: Users, text: "Team Collaboration", color: "text-accent" }
      ],
      metrics: [
        { label: "Security Score", value: "A+" },
        { label: "Code Quality", value: "95%" },
        { label: "API Coverage", value: "100%" }
      ]
    },
    {
      title: "Food Delivery App",
      type: "Full Stack Project",
      duration: "2 weeks",
      teamSize: "Individual",
      image: foodAppPreview,
      category: "Food Tech",
      description: "Modern food delivery platform inspired by Zomato, featuring advanced restaurant discovery, interactive menu systems, intelligent cart management, and seamless order processing. Built with cutting-edge React technologies for optimal user experience.",
      features: [
        "🔍 Smart restaurant discovery with advanced search algorithms",
        "🍕 Interactive menu browsing with rich media and descriptions",
        "🛒 Dynamic shopping cart with real-time price calculations",
        "📱 Fully responsive design optimized for all device types",
        "✨ Smooth micro-animations and modern UI/UX patterns"
      ],
      technologies: ["React", "JavaScript", "CSS3", "HTML5", "Responsive Design", "LocalStorage", "React Router", "API Integration"],
      githubUrl: "https://github.com/durgeshsoni/Food-App",
      liveUrl: "https://inspiring-gnome-8e6791.netlify.app/",
      showLiveDemo: true,
      color: "from-orange-500 to-red-600",
      highlights: [
        { icon: Globe, text: "Live Deployment", color: "text-primary" },
        { icon: Star, text: "Modern UI/UX", color: "text-secondary" },
        { icon: Code, text: "React Excellence", color: "text-accent" }
      ],
      metrics: [
        { label: "Performance", value: "98%" },
        { label: "Accessibility", value: "95%" },
        { label: "User Rating", value: "4.8/5" }
      ]
    }
  ];

  return (
    <section id="projects" className="section-container bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="section-title">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full mb-6"></div>
          <p className="section-subtitle">
            Showcasing innovative solutions and collaborative development experiences that demonstrate technical expertise, problem-solving abilities, and modern development practices
          </p>
        </div>

        <div className="space-y-16 lg:space-y-24">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="glass-card border-0 hover-glow group animate-fade-in-up overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Project Image */}
                <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="aspect-video lg:aspect-square relative group/image">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    
                    {/* Project category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-primary/90 to-secondary/90 text-white text-sm font-semibold rounded-full backdrop-blur-sm">
                        {project.category}
                      </span>
                    </div>
                    
                    {/* Metrics overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex flex-wrap gap-2">
                        {project.metrics.map((metric, idx) => (
                          <div key={idx} className="glass px-3 py-1 rounded-full">
                            <span className="text-xs text-foreground font-medium">
                              {metric.label}: <span className="text-primary font-bold">{metric.value}</span>
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="absolute top-4 right-4">
                      <div className="flex flex-col gap-2">
                        {project.highlights.map((highlight, idx) => (
                          <div key={idx} className="glass p-2 rounded-full group/highlight hover-lift">
                            <highlight.icon size={16} className={`${highlight.color} group-hover/highlight:scale-110 transition-transform`} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className={`p-8 lg:p-12 flex flex-col justify-between ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div>
                    <CardHeader className="p-0 mb-8">
                      <div className="flex flex-col space-y-4">
                        <CardTitle className="text-3xl lg:text-4xl font-bold gradient-text">
                          {project.title}
                        </CardTitle>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-2">
                            <Users size={16} className="text-primary" />
                            <span>{project.type}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar size={16} className="text-secondary" />
                            <span>{project.duration}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Layers size={16} className="text-accent" />
                            <span>{project.teamSize}</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </CardHeader>
                    
                    <CardContent className="p-0 space-y-8">
                      {/* Key Features */}
                      <div>
                        <h4 className="font-bold text-xl mb-4 text-foreground flex items-center">
                          <Star className="mr-2 text-primary" size={24} />
                          Key Features
                        </h4>
                        <div className="space-y-3">
                          {project.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-start space-x-3 group/feature">
                              <div className="text-lg mt-0.5">{feature.split(' ')[0]}</div>
                              <span className="text-muted-foreground leading-relaxed group-hover/feature:text-foreground transition-colors">
                                {feature.split(' ').slice(1).join(' ')}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Technologies */}
                      <div>
                        <h4 className="font-bold text-xl mb-4 text-foreground flex items-center">
                          <Code className="mr-2 text-secondary" size={24} />
                          Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 glass border border-primary/20 text-foreground text-sm rounded-full hover-lift hover:border-primary/50 transition-all duration-200 font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4 mt-8">
                    <Button 
                      className={`btn-gradient flex-1 min-w-[160px] h-12 text-base glow-primary`}
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github className="mr-2" size={18} />
                      View Code
                    </Button>
                    
                    {project.showLiveDemo && (
                      <Button 
                        variant="outline"
                        className="btn-outline-glow flex-1 min-w-[160px] h-12 text-base"
                        onClick={() => window.open(project.liveUrl, "_blank")}
                      >
                        <Eye className="mr-2" size={18} />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <Card className="glass-card border-0 p-8 lg:p-12 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Zap className="text-primary w-8 h-8 mr-3" />
              <h3 className="text-2xl lg:text-3xl font-bold gradient-text">Explore More Projects</h3>
            </div>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              Discover additional projects, experiments, and contributions showcasing my passion for innovative development and continuous learning.
            </p>
            <Button 
              variant="outline" 
              size="lg"
              className="btn-outline-glow px-8 py-4 h-14 text-lg min-w-[200px]"
              onClick={() => window.open("https://github.com/durgeshsoni", "_blank")}
            >
              <Github className="mr-2" size={24} />
              GitHub Portfolio
              <ExternalLink className="ml-2" size={20} />
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};