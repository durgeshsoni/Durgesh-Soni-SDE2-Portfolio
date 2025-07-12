import { ExternalLink, Github, Calendar, Users, Star, Code, Globe } from "lucide-react";
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
      description: "Collaborated with a 6-person team to deliver a full Online Wallet Payment Application within 4 days, supporting transfers, bill payments, and financial tracking with enterprise-grade security.",
      features: [
        "Secure user authentication and authorization system",
        "Real-time transaction processing with instant notifications",
        "Comprehensive transaction history and bill tracking",
        "RESTful API design with Swagger documentation",
        "Robust error handling and validation mechanisms"
      ],
      technologies: ["Java", "Spring Boot", "Hibernate", "MySQL", "Swagger", "Lombok", "JWT", "REST API"],
      githubUrl: "https://github.com/durgeshsoni/Wallet-app",
      showLiveDemo: false,
      color: "from-indigo-500 to-purple-600",
      highlights: [
        { icon: Star, text: "Enterprise-grade security" },
        { icon: Code, text: "Clean architecture" },
        { icon: Users, text: "Team collaboration" }
      ]
    },
    {
      title: "Food Delivery App",
      type: "Full Stack Project",
      duration: "2 weeks",
      teamSize: "Individual",
      image: foodAppPreview,
      description: "A comprehensive food delivery application similar to Zomato, featuring restaurant discovery, interactive menus, cart management, and seamless ordering experience with modern web technologies.",
      features: [
        "Advanced restaurant discovery with smart search and filters",
        "Interactive menu browsing with detailed food descriptions",
        "Dynamic shopping cart with real-time price calculations",
        "Responsive design optimized for all device sizes",
        "Smooth animations and modern UI/UX patterns"
      ],
      technologies: ["React", "JavaScript", "CSS3", "HTML5", "Responsive Design", "LocalStorage", "React Router"],
      githubUrl: "https://github.com/durgeshsoni/Food-App",
      liveUrl: "https://inspiring-gnome-8e6791.netlify.app/",
      showLiveDemo: true,
      color: "from-orange-500 to-red-600",
      highlights: [
        { icon: Globe, text: "Live deployment" },
        { icon: Star, text: "Modern UI/UX" },
        { icon: Code, text: "Clean React code" }
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Showcasing innovative solutions and collaborative development experiences that demonstrate technical expertise and problem-solving abilities
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-12">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="glass border-0 group hover:glow transition-all duration-500 hover:scale-[1.02] animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <div className="aspect-video lg:aspect-square relative group">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    
                    {/* Overlay with highlights */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex flex-wrap gap-2">
                        {project.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center space-x-2 glass px-3 py-1 rounded-full">
                            <highlight.icon size={14} className="text-primary" />
                            <span className="text-xs text-foreground font-medium">{highlight.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-between">
                  <div>
                    <CardHeader className="p-0 mb-6">
                      <div className="flex flex-col space-y-4">
                        <CardTitle className="text-3xl font-bold gradient-text">
                          {project.title}
                        </CardTitle>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-2">
                            <Users size={16} className="text-primary" />
                            <span>{project.type}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar size={16} className="text-primary" />
                            <span>{project.duration}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Star size={16} className="text-primary" />
                            <span>{project.teamSize}</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </CardHeader>
                    
                    <CardContent className="p-0 space-y-6">
                      {/* Key Features */}
                      <div>
                        <h4 className="font-bold text-lg mb-3 text-foreground flex items-center">
                          <Code className="mr-2 text-primary" size={20} />
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          {project.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start space-x-3">
                              <div className={`w-2 h-2 bg-gradient-to-r ${project.color} rounded-full mt-2 flex-shrink-0`}></div>
                              <span className="text-muted-foreground leading-relaxed">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Technologies */}
                      <div>
                        <h4 className="font-bold text-lg mb-3 text-foreground flex items-center">
                          <Star className="mr-2 text-primary" size={20} />
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className={`px-3 py-1 bg-gradient-to-r ${project.color} bg-opacity-10 border border-current/20 text-foreground text-sm rounded-full hover:scale-105 transition-transform duration-200 font-medium`}
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
                      className={`bg-gradient-to-r ${project.color} hover:opacity-90 text-white shadow-lg hover:shadow-xl flex-1 min-w-[140px]`}
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github className="mr-2" size={16} />
                      View Code
                    </Button>
                    
                    {project.showLiveDemo && (
                      <Button 
                        variant="outline"
                        className="glass border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground shadow-lg hover:shadow-xl flex-1 min-w-[140px]"
                        onClick={() => window.open(project.liveUrl, "_blank")}
                      >
                        <ExternalLink className="mr-2" size={16} />
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
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6 text-lg">
            Interested in seeing more of my work?
          </p>
          <Button 
            variant="outline" 
            size="lg"
            className="px-8 py-3 rounded-full glass border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            onClick={() => window.open("https://github.com/durgeshsoni", "_blank")}
          >
            <Github className="mr-2" size={20} />
            Explore All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};