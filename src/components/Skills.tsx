import { ExternalLink, Award, CheckCircle, Star, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      icon: "💻",
      skills: [
        { name: "Java", icon: "☕", level: 95, color: "from-orange-500 to-red-600" },
        { name: "Spring Boot", icon: "🍃", level: 90, color: "from-green-500 to-emerald-600" },
        { name: "JavaScript", icon: "🟨", level: 85, color: "from-yellow-400 to-orange-500" },
        { name: "React", icon: "⚛️", level: 88, color: "from-blue-400 to-cyan-500" },
        { name: "Node.js", icon: "🟢", level: 80, color: "from-green-400 to-green-600" },
        { name: "TypeScript", icon: "🔷", level: 82, color: "from-blue-500 to-blue-700" }
      ]
    },
    {
      title: "Databases & Storage",
      icon: "🗄️",
      skills: [
        { name: "MySQL", icon: "🐬", level: 90, color: "from-blue-500 to-blue-700" },
        { name: "MongoDB", icon: "🍃", level: 85, color: "from-green-500 to-green-700" },
        { name: "PostgreSQL", icon: "🐘", level: 80, color: "from-blue-600 to-indigo-600" },
        { name: "Redis", icon: "🔴", level: 75, color: "from-red-500 to-red-700" }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: "☁️",
      skills: [
        { name: "AWS", icon: "☁️", level: 85, color: "from-orange-400 to-orange-600" },
        { name: "Docker", icon: "🐳", level: 88, color: "from-blue-400 to-blue-600" },
        { name: "Kubernetes", icon: "⚙️", level: 75, color: "from-blue-500 to-purple-600" },
        { name: "Git", icon: "📝", level: 95, color: "from-gray-600 to-gray-800" },
        { name: "CI/CD", icon: "🔄", level: 80, color: "from-green-500 to-blue-500" },
        { name: "Microservices", icon: "🏗️", level: 90, color: "from-purple-500 to-pink-600" }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️",
      skills: [
        { name: "WebFlux", icon: "🌊", level: 78, color: "from-cyan-500 to-blue-600" },
        { name: "Elasticsearch", icon: "🔍", level: 72, color: "from-yellow-500 to-orange-600" },
        { name: "Swagger", icon: "📋", level: 85, color: "from-green-500 to-teal-600" },
        { name: "Jira", icon: "📊", level: 90, color: "from-blue-500 to-blue-700" },
        { name: "System Design", icon: "🎯", level: 82, color: "from-purple-500 to-indigo-600" }
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

        {/* Skills Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={category.title} 
              className="glass-card border-0 hover-glow group animate-fade-in-up hover-lift"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <CardHeader className="pb-6">
                <CardTitle className="text-xl sm:text-2xl font-bold text-foreground flex items-center justify-center sm:justify-start">
                  <span className="text-3xl mr-3">{category.icon}</span>
                  {category.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="group/skill">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <span className="text-xl sm:text-2xl">{skill.icon}</span>
                          <span className="font-semibold text-foreground text-sm sm:text-base">{skill.name}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs sm:text-sm text-muted-foreground font-mono">{skill.level}%</span>
                          <TrendingUp className="w-3 h-3 text-primary" />
                        </div>
                      </div>
                      <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out relative`}
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 6 + skillIndex) * 100}ms`
                          }}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
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