import { Calendar, MapPin, Briefcase, Award, TrendingUp, Users, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Experience = () => {
  const experiences = [
    {
      title: "SDE | Java Backend Developer",
      company: "NOBROKER",
      location: "Bangalore, India",
      period: "Jul 2022 - Present",
      type: "Full-time",
      color: "from-primary to-secondary",
      achievements: [
        "🚀 Built WorkFlow Automation tool which Automated 70% of CRM tasks, reducing manual effort and increasing operational efficiency by 40%",
        "🔔 Optimized notification systems, boosting user engagement by 25%",
        "🔗 Improved deep-linking functionality, reducing user navigation time by 30%",
        "✅ Designed and built approval systems, improving process accuracy by 35%",
        "🗒️ Created a reusable notes module for internal services, enabling multiple teams to integrate via unified solution",
        "🤝 Collaborated with cross-functional teams in distributed environments, leveraging Slack and Jira for asynchronous coordination"
      ],
      skills: ["Java", "Spring Boot", "Microservices", "AWS", "MySQL", "API Design"]
    },
    {
      title: "Internship Java Backend Developer",
      company: "ALMAHIRA",
      location: "Dubai, UAE",
      period: "Jul 2021 - Jul 2022",
      type: "Internship",
      color: "from-secondary to-accent",
      achievements: [
        "⚡ Refactored code and optimized queries to reduce API latency, enhancing response times and improving overall performance",
        "🔧 Created a generic API in Go to fetch data from a single request, reducing the need for multiple API calls on the frontend",
        "🏗️ Optimized system architecture by integrating RESTful APIs, enhancing data synchronization and reducing response time by 15%"
      ],
      skills: ["Java", "Go", "REST APIs", "System Architecture", "Performance Optimization"]
    }
  ];

  return (
    <section id="experience" className="section-container bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="section-title">Professional Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full mb-6"></div>
          <p className="section-subtitle">
            Building scalable solutions and optimizing systems across different industries, with a focus on backend development and system architecture
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-12 lg:space-y-16">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="glass-card border-0 hover-glow group hover-lift animate-fade-in-up overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline indicator */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent"></div>
              
              <CardHeader className="pb-6">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                    <div className={`p-3 bg-gradient-to-r ${exp.color} rounded-xl glow-orange group-hover:scale-110 transition-transform duration-300`}>
                      <Briefcase className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
                        {exp.title}
                      </CardTitle>
                      <p className="text-xl font-semibold text-primary mb-1">{exp.company}</p>
                      <div className="flex items-center space-x-4 text-muted-foreground">
                        <div className="flex items-center space-x-2">
                          <Calendar size={16} className="text-secondary" />
                          <span className="text-sm font-medium">{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin size={16} className="text-accent" />
                          <span className="text-sm font-medium">{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <span className={`px-4 py-2 bg-gradient-to-r ${exp.color} bg-opacity-20 border border-current/20 text-foreground text-sm rounded-full font-medium`}>
                      {exp.type}
                    </span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-8">
                {/* Key Achievements */}
                <div>
                  <h4 className="font-bold text-xl mb-4 text-foreground flex items-center">
                    <Award className="mr-2 text-primary" size={24} />
                    Key Achievements
                  </h4>
                  <div className="space-y-4">
                    {exp.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-start space-x-3 group/achievement">
                        <div className="text-lg mt-0.5">{achievement.split(' ')[0]}</div>
                        <span className="text-muted-foreground leading-relaxed group-hover/achievement:text-foreground transition-colors">
                          {achievement.split(' ').slice(1).join(' ')}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills & Technologies */}
                <div>
                  <h4 className="font-bold text-xl mb-4 text-foreground flex items-center">
                    <Target className="mr-2 text-secondary" size={24} />
                    Technologies & Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 glass border border-primary/20 text-foreground text-sm rounded-full hover-lift hover:border-primary/50 transition-all duration-200 font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Experience Summary */}
        <div className="mt-20">
          <Card className="glass-card border-0 p-8 lg:p-12 max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <TrendingUp className="text-primary w-8 h-8 mr-3" />
              <h3 className="text-2xl lg:text-3xl font-bold gradient-text">Career Highlights</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <div className="text-3xl font-bold gradient-text">4+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold gradient-text">70%</div>
                <div className="text-muted-foreground">Task Automation</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold gradient-text">40%</div>
                <div className="text-muted-foreground">Efficiency Increase</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};