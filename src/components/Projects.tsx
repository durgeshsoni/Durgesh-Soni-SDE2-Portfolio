
import { ExternalLink, Github, Calendar, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Projects = () => {
  const projects = [
    {
      title: "Payment Wallet Application",
      type: "Collaborative Project",
      duration: "4 days",
      description: "Collaborated with a 6-person team to deliver a full Online Wallet Payment Application within 4 days, supporting transfers, bill payments, and financial tracking.",
      features: [
        "Utilized Java, Spring Boot, Hibernate, and MySQL for backend development",
        "Incorporated Lombok for efficiency and Swagger for clear API documentation", 
        "Engineered a transaction history and bill tracking system",
        "Real-time insights and enhanced user engagement"
      ],
      technologies: ["Java", "Spring Boot", "Hibernate", "MySQL", "Swagger", "Lombok"],
      color: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Showcasing innovative solutions and collaborative development experiences
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] animate-fade-in bg-gradient-to-br from-gray-50 to-white border-0"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {project.title}
                    </CardTitle>
                    
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <Users size={16} />
                        <span>{project.type}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar size={16} />
                        <span>Duration: {project.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>
              </CardHeader>
              
              <CardContent>
                <div className="mb-6">
                  <h4 className="font-semibold text-lg mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-lg mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm rounded-full hover:from-blue-200 hover:to-purple-200 transition-all duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <Button 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                    onClick={() => window.open("#", "_blank")}
                  >
                    <Github className="mr-2" size={16} />
                    View Code
                  </Button>
                  
                  <Button 
                    variant="outline"
                    className="hover:bg-primary hover:text-primary-foreground"
                    onClick={() => window.open("#", "_blank")}
                  >
                    <ExternalLink className="mr-2" size={16} />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Interested in seeing more of my work?
          </p>
          <Button 
            variant="outline" 
            size="lg"
            className="px-8 py-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
            onClick={() => window.open("https://github.com/durgeshsoni", "_blank")}
          >
            <Github className="mr-2" size={20} />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};
