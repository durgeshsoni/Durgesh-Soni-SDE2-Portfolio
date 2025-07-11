
import { Code, Database, Cloud, Wrench } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      icon: Code,
      skills: ["Java", "Spring Boot", "JavaScript", "React", "Node.js", "TypeScript"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MySQL", "MongoDB", "PostgreSQL", "Redis"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: ["AWS", "Docker", "Kubernetes", "Git", "CI/CD", "Microservices"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Tools & Others",
      icon: Wrench,
      skills: ["WebFlux", "Elasticsearch", "Swagger", "Jira", "Trello", "System Design"],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use to build scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="group hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in border-0 bg-gradient-to-br from-gray-50 to-white"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="text-white" size={32} />
                </div>
                <CardTitle className="text-xl font-semibold">{category.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 text-sm rounded-full text-gray-700 hover:from-blue-100 hover:to-purple-100 hover:text-blue-700 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8">Certifications</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <h4 className="font-semibold text-lg mb-2">Full Stack Development Program</h4>
              <p className="text-muted-foreground">Certified by Masai School</p>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <h4 className="font-semibold text-lg mb-2">Problem Solving Certification</h4>
              <p className="text-muted-foreground">Awarded by HackerRank</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
