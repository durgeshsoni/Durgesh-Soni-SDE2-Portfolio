import { ExternalLink, Award, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
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
      skills: [
        { name: "MySQL", icon: "🐬", level: 90, color: "from-blue-500 to-blue-700" },
        { name: "MongoDB", icon: "🍃", level: 85, color: "from-green-500 to-green-700" },
        { name: "PostgreSQL", icon: "🐘", level: 80, color: "from-blue-600 to-indigo-600" },
        { name: "Redis", icon: "🔴", level: 75, color: "from-red-500 to-red-700" }
      ]
    },
    {
      title: "Cloud & DevOps",
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
      description: "Comprehensive program covering full-stack development with hands-on projects"
    },
    {
      title: "Problem Solving Certification",
      issuer: "HackerRank",
      date: "2023", 
      link: "https://hackerrank.com",
      verified: true,
      description: "Advanced problem-solving and algorithmic thinking certification"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use to build scalable applications
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={category.title} 
              className="glass border-0 group hover:glow transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 150}ms` }}
            >
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-bold text-foreground flex items-center justify-center">
                  {category.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="group/skill">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{skill.icon}</span>
                          <span className="font-medium text-foreground">{skill.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground font-medium">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 4 + skillIndex) * 100}ms`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-2 gradient-text flex items-center justify-center">
            <Award className="mr-3 text-primary" size={32} />
            Certifications
          </h3>
          <p className="text-muted-foreground">Professional achievements and continuous learning</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <Card 
              key={cert.title}
              className="glass border-0 group hover:glow transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${600 + index * 150}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="font-bold text-lg text-foreground mb-2 flex items-center">
                      {cert.title}
                      {cert.verified && (
                        <CheckCircle className="ml-2 text-green-400" size={20} />
                      )}
                    </h4>
                    <p className="text-primary font-medium mb-1">{cert.issuer}</p>
                    <p className="text-sm text-muted-foreground mb-3">{cert.date}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{cert.description}</p>
                  </div>
                </div>
                
                <Button 
                  variant="outline"
                  size="sm"
                  className="w-full glass border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  onClick={() => window.open(cert.link, "_blank")}
                >
                  <ExternalLink className="mr-2" size={16} />
                  View Certificate
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};