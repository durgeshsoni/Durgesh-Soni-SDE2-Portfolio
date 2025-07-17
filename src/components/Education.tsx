import { GraduationCap, Calendar, MapPin, BookOpen, Trophy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Education = () => {
  const education = [
    {
      degree: "Master of Computer Application (MCA)",
      school: "Manipal University Jaipur",
      location: "Jaipur, India",
      period: "Aug 2023 - July 2025",
      status: "In Progress",
      color: "from-primary to-secondary",
      description: "Advanced study in computer applications with focus on software development, algorithms, and system design",
      highlights: [
        "Advanced Software Development",
        "Algorithm Design & Analysis",
        "Database Management Systems",
        "System Architecture",
        "Project Management"
      ]
    },
    {
      degree: "Bachelor of Arts (BA)",
      school: "Dr. Ram Manohar Lohia Avadh University",
      location: "Faizabad, India", 
      period: "Jul 2020 - Jul 2023",
      status: "Completed",
      color: "from-secondary to-accent",
      description: "Liberal arts education providing strong foundation in analytical thinking and communication skills",
      highlights: [
        "Critical Thinking",
        "Research Methodology",
        "Communication Skills",
        "Problem Solving",
        "Cultural Studies"
      ]
    }
  ];

  return (
    <section id="education" className="section-container bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="section-title">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full mb-6"></div>
          <p className="section-subtitle">
            Academic foundation and continuous learning journey that shaped my technical expertise and problem-solving abilities
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-12 lg:space-y-16">
          {education.map((edu, index) => (
            <Card 
              key={index} 
              className="glass-card border-0 hover-glow group hover-lift animate-fade-in-up overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline indicator */}
              <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${edu.color}`}></div>
              
              <div className="grid lg:grid-cols-3 gap-0">
                {/* Left side - Degree info */}
                <div className="lg:col-span-2 p-8 lg:p-12">
                  <CardHeader className="p-0 mb-6">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className={`p-3 bg-gradient-to-r ${edu.color} rounded-xl glow-primary group-hover:scale-110 transition-transform duration-300`}>
                        <GraduationCap className="text-primary-foreground w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
                          {edu.degree}
                        </CardTitle>
                        <p className="text-xl font-semibold text-primary mb-3">{edu.school}</p>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0 text-muted-foreground">
                          <div className="flex items-center space-x-2">
                            <Calendar size={16} className="text-secondary" />
                            <span className="text-sm font-medium">{edu.period}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin size={16} className="text-accent" />
                            <span className="text-sm font-medium">{edu.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {edu.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="p-0">
                    <div>
                      <h4 className="font-bold text-xl mb-4 text-foreground flex items-center">
                        <BookOpen className="mr-2 text-primary" size={24} />
                        Key Areas of Study
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {edu.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center space-x-3 group/highlight">
                            <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                            <span className="text-muted-foreground group-hover/highlight:text-foreground transition-colors">
                              {highlight}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </div>

                {/* Right side - Status and additional info */}
                <div className="lg:border-l border-border p-8 lg:p-12 flex flex-col justify-center">
                  <div className="text-center space-y-6">
                    <div className="flex items-center justify-center mb-4">
                      <Trophy className="text-accent w-8 h-8 mr-2" />
                      <h4 className="text-xl font-bold text-foreground">Status</h4>
                    </div>
                    
                    <div className="space-y-4">
                      <span className={`inline-block px-6 py-3 rounded-full text-sm font-semibold ${
                        edu.status === 'In Progress' 
                          ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border border-blue-500/30' 
                          : 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 border border-green-500/30'
                      }`}>
                        {edu.status}
                      </span>
                      
                      <div className="space-y-2 text-sm text-muted-foreground">
                        {edu.status === 'In Progress' ? (
                          <div>
                            <div className="font-medium text-foreground">Expected Graduation</div>
                            <div>July 2025</div>
                          </div>
                        ) : (
                          <div>
                            <div className="font-medium text-foreground">Graduation</div>
                            <div>Successfully Completed</div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Educational Philosophy */}
        <div className="mt-20">
          <Card className="glass-card border-0 p-8 lg:p-12 max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <BookOpen className="text-primary w-8 h-8 mr-3" />
              <h3 className="text-2xl lg:text-3xl font-bold gradient-text">Learning Philosophy</h3>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto font-light">
              My educational journey reflects a commitment to continuous learning and growth. 
              From liberal arts to computer applications, each step has contributed to my 
              holistic approach to problem-solving and innovative technology development.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="space-y-2">
                <div className="text-2xl font-bold gradient-text">Continuous Learning</div>
                <div className="text-muted-foreground">Always evolving with technology</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold gradient-text">Practical Application</div>
                <div className="text-muted-foreground">Theory meets real-world solutions</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};