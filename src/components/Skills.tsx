
import { ExternalLink, Award, CheckCircle, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Skills = () => {
  const skillCategories = [
    {
      id: "languages",
      title: "Languages & Frameworks",
      skills: [
        { name: "Java", icon: "☕" },
        { name: "Spring Boot", icon: "🍃" },
        { name: "JavaScript", icon: "🟨" },
        { name: "React", icon: "⚛️" },
        { name: "Node.js", icon: "🟢" },
        { name: "TypeScript", icon: "🔷" }
      ]
    },
    {
      id: "database",
      title: "Database",
      skills: [
        { name: "MySQL", icon: "🐬" },
        { name: "MongoDB", icon: "🍃" },
        { name: "PostgreSQL", icon: "🐘" },
        { name: "Redis", icon: "🔴" }
      ]
    },
    {
      id: "cloud",
      title: "Cloud",
      skills: [
        { name: "AWS", icon: "☁️" },
        { name: "Docker", icon: "🐳" },
        { name: "Kubernetes", icon: "⚙️" },
        { name: "Microservices", icon: "🏗️" }
      ]
    },
    {
      id: "tools",
      title: "Tools",
      skills: [
        { name: "Git", icon: "📝" },
        { name: "CI/CD", icon: "🔄" },
        { name: "WebFlux", icon: "🌊" },
        { name: "Elasticsearch", icon: "🔍" },
        { name: "Swagger", icon: "📋" },
        { name: "Jira", icon: "📊" }
      ]
    },
    {
      id: "designing",
      title: "Designing",
      skills: [
        { name: "System Design", icon: "🎯" },
        { name: "UI/UX", icon: "🎨" },
        { name: "Figma", icon: "🎭" },
        { name: "Responsive Design", icon: "📱" }
      ]
    }
  ];

  const certifications = [
    {
      title: "Full Stack Development Program",
      issuer: "Masai School",
      date: "2023",
      link: "https://masaischool.com",
      verified: true,
      description: "Comprehensive program covering full-stack development with hands-on projects",
      badge: "🎓",
      level: "Advanced"
    },
    {
      title: "Problem Solving Certification",
      issuer: "HackerRank",
      date: "2023", 
      link: "https://hackerrank.com",
      verified: true,
      description: "Advanced problem-solving and algorithmic thinking certification",
      badge: "🏆",
      level: "Expert"
    }
  ];

  return (
    <section id="skills" className="section-container bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full mb-6"></div>
          <p className="section-subtitle">
            Technologies and frameworks I use to build scalable, high-performance applications
          </p>
        </div>

        {/* Skills Tabs - Mobile Optimized */}
        <div className="mb-16">
          <Tabs defaultValue="languages" className="w-full">
            {/* Mobile: Horizontal scroll tabs */}
            <div className="overflow-x-auto pb-2 mb-8">
              <TabsList className="flex w-max min-w-full bg-card/30 backdrop-blur-sm border border-border/50 p-1 rounded-2xl">
                {skillCategories.map((category) => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="whitespace-nowrap px-4 py-3 text-sm font-medium rounded-xl data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300"
                  >
                    {category.title}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {skillCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <Card className="glass-card border-0">
                  <CardHeader className="pb-4 px-4 sm:px-6 lg:px-8">
                    <CardTitle className="text-xl sm:text-2xl lg:text-3xl font-bold text-center gradient-text">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8">
                    {/* Simple grid layout for mobile */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
                      {category.skills.map((skill, index) => (
                        <div 
                          key={skill.name} 
                          className="group flex flex-col items-center p-3 sm:p-4 lg:p-6 rounded-xl bg-card/50 border border-border/30 hover:bg-card/80 hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-fade-in-up"
                          style={{ animationDelay: `${index * 50}ms` }}
                        >
                          <div className="text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                            {skill.icon}
                          </div>
                          <span className="text-xs sm:text-sm lg:text-base font-medium text-foreground text-center leading-tight">
                            {skill.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Certifications Section - Simplified */}
        <div className="text-center mb-8">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 gradient-text flex items-center justify-center">
            <Award className="mr-3 text-primary w-6 h-6 sm:w-8 sm:h-8" />
            Professional Certifications
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <Card 
              key={cert.title}
              className="glass-card border-0 hover-glow group hover-lift animate-fade-in-up"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-3">{cert.badge}</span>
                      <div>
                        <h4 className="font-bold text-base sm:text-lg text-foreground leading-tight">
                          {cert.title}
                        </h4>
                        <div className="flex items-center space-x-2">
                          <span className="text-primary font-semibold text-sm">{cert.issuer}</span>
                          {cert.verified && (
                            <CheckCircle className="w-4 h-4 text-accent" />
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-muted-foreground">{cert.date}</span>
                      <span className="px-2 py-1 bg-secondary/20 text-secondary text-xs rounded-full font-medium">
                        {cert.level}
                      </span>
                    </div>
                  </div>
                </div>
                
                <Button 
                  variant="outline"
                  size="sm"
                  className="w-full btn-outline-glow text-sm h-10"
                  onClick={() => window.open(cert.link, "_blank")}
                >
                  <ExternalLink className="mr-2 w-4 h-4" />
                  View Certificate
                  <Star className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
