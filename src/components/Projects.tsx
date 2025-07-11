
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
      githubUrl: "https://github.com/durgeshsoni/Wallet-app",
      showLiveDemo: false,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Food App",
      type: "Full Stack Project",
      duration: "2 weeks",
      description: "A comprehensive food delivery application similar to Zomato, featuring restaurant browsing, menu management, cart functionality, and order tracking with modern web technologies.",
      features: [
        "Restaurant discovery with search and filter capabilities",
        "Interactive menu browsing with detailed food item descriptions",
        "Shopping cart management with real-time price calculations",
        "Responsive design optimized for all device sizes",
        "Modern UI/UX with smooth animations and transitions"
      ],
      technologies: ["React", "JavaScript", "CSS3", "HTML5", "Responsive Design"],
      githubUrl: "https://github.com/durgeshsoni/Food-App",
      liveUrl: "https://inspiring-gnome-8e6791.netlify.app/",
      showLiveDemo: true,
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 mx-auto rounded-full"></div>
          <p className="text-lg text-slate-600 mt-6 max-w-2xl mx-auto">
            Showcasing innovative solutions and collaborative development experiences
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] animate-fade-in bg-white/90 backdrop-blur-sm border-0 shadow-xl"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-2xl font-bold mb-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                      {project.title}
                    </CardTitle>
                    
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-slate-600">
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
                
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  {project.description}
                </p>
              </CardHeader>
              
              <CardContent>
                <div className="mb-6">
                  <h4 className="font-semibold text-lg mb-3 text-slate-800">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <div className={`w-2 h-2 bg-gradient-to-r ${project.color} rounded-full mt-2 flex-shrink-0`}></div>
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-lg mb-3 text-slate-800">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-indigo-100 via-purple-100 to-blue-100 text-indigo-700 text-sm rounded-full hover:from-indigo-200 hover:via-purple-200 hover:to-blue-200 transition-all duration-200 shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <Button 
                    className={`bg-gradient-to-r ${project.color} hover:opacity-90 text-white shadow-lg hover:shadow-xl`}
                    onClick={() => window.open(project.githubUrl, "_blank")}
                  >
                    <Github className="mr-2" size={16} />
                    View Code
                  </Button>
                  
                  {project.showLiveDemo && (
                    <Button 
                      variant="outline"
                      className="hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:text-white border-indigo-200 text-indigo-600 shadow-lg hover:shadow-xl"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                    >
                      <ExternalLink className="mr-2" size={16} />
                      Live Demo
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600 mb-6">
            Interested in seeing more of my work?
          </p>
          <Button 
            variant="outline" 
            size="lg"
            className="px-8 py-3 rounded-full hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:text-white transition-all duration-300 hover:scale-105 border-indigo-200 text-indigo-600 shadow-lg hover:shadow-xl"
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
