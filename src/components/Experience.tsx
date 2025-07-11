
import { Calendar, MapPin, Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Experience = () => {
  const experiences = [
    {
      title: "SDE | Java Backend Developer",
      company: "NOBROKER",
      location: "Bangalore, India",
      period: "Jul 2022 - Present",
      achievements: [
        "Built WorkFlow Automation tool which Automated 70% of CRM tasks, reducing manual effort and increasing operational efficiency by 40%.",
        "Optimized notification systems, boosting user engagement by 25%.",
        "Improved deep-linking functionality, reducing user navigation time by 30%.",
        "Designed and built approval systems, improving process accuracy by 35%.",
        "Created a reusable notes module for internal services, enabling multiple teams to integrate via unified solution %.",
        "Collaborated with cross-functional teams in distributed environments, leveraging Slack and Jira for asynchronous coordination."
      ]
    },
    {
      title: "Internship Java Backend Developer",
      company: "ALMAHIRA",
      location: "Dubai, UAE",
      period: "Jul 2021 - Jul 2022",
      achievements: [
        "Refactored code and optimized queries to reduce API latency, enhancing response times and improving overall performance.",
        "Created a generic API in Go to fetch data from a single request, reducing the need for multiple API calls on the frontend.",
        "Optimized system architecture by integrating RESTful APIs, enhancing data synchronization and reducing response time by 15%."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Building scalable solutions and optimizing systems across different industries
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:scale-[1.02] animate-fade-in border-l-4 border-l-primary bg-card"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="flex items-center space-x-3 mb-2 md:mb-0">
                    <div className="p-2 bg-primary rounded-full">
                      <Briefcase className="text-primary-foreground" size={20} />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-foreground">
                        {exp.title}
                      </CardTitle>
                      <p className="text-lg font-semibold text-primary">{exp.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col space-y-1 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
