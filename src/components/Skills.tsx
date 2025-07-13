
import { ExternalLink, Award, CheckCircle, Star, TrendingUp } from "lucide-react";
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
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full mb-6"></div>
          <p className="section-subtitle">
            A comprehensive toolkit of modern technologies and frameworks I use to build scalable, high-performance applications
          </p>
        </div>

        {/* Skills Tabs */}
        <div className="mb-20">
          <Tabs defaultValue="languages" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-8 bg-card/50 backdrop-blur-sm">
              {skillCategories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="text-xs sm:text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {category.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {skillCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-6">
                <Card className="glass-card border-0 hover-glow">
                  <CardHeader className="pb-6">
                    <CardTitle className="text-2xl sm:text-3xl font-bold text-center gradient-text">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                      {category.skills.map((skill, index) => (
                        <div 
                          key={skill.name} 
                          className="group/skill flex flex-col items-center p-4 sm:p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-white/10 hover:bg-card/50 hover:border-primary/30 transition-all duration-300 hover-lift animate-fade-in-up"
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <div className="text-3xl sm:text-4xl mb-3 group-hover/skill:scale-110 transition-transform duration-300">
                            {skill.icon}
                          </div>
                          <span className="text-sm sm:text-base font-semibold text-foreground text-center leading-tight">
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

        {/* Certifications Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text flex items-center justify-center">
            <Award className="mr-3 text-primary w-8 h-8" />
            Professional Certifications
          </h3>
          <p className="text-muted-foreground text-base sm:text-lg">
            Validated expertise through industry-recognized certifications and continuous learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <Card 
              key={cert.title}
              className="glass-card border-0 hover-glow group hover-lift animate-fade-in-up relative overflow-hidden"
              style={{ animationDelay: `${0.6 + index * 0.2}s` }}
            >
              {/* Gradient overlay */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/20 to-transparent rounded-bl-full"></div>
              
              <CardContent className="p-6 sm:p-8 relative">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <span className="text-3xl mr-3">{cert.badge}</span>
                      <div>
                        <h4 className="font-bold text-lg sm:text-xl text-foreground mb-1 leading-tight">
                          {cert.title}
                        </h4>
                        <div className="flex items-center space-x-2">
                          <span className="text-primary font-semibold text-sm sm:text-base">{cert.issuer}</span>
                          {cert.verified && (
                            <CheckCircle className="w-4 h-4 text-green-400" />
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs sm:text-sm text-muted-foreground">Issue Date: {cert.date}</span>
                        <span className="px-2 py-1 bg-gradient-to-r from-secondary/20 to-accent/20 text-secondary text-xs rounded-full font-medium">
                          {cert.level}
                        </span>
                      </div>
                      
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </div>
                
                <Button 
                  variant="outline"
                  size="sm"
                  className="w-full btn-outline-glow text-sm"
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
