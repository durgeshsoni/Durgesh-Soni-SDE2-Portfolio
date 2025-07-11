
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Education = () => {
  const education = [
    {
      degree: "Master of Computer Application (MCA)",
      school: "Manipal University Jaipur",
      location: "Jaipur, India",
      period: "Aug 2023 - July 2025",
      status: "In Progress"
    },
    {
      degree: "Bachelor of Arts (BA)",
      school: "Dr. Ram Manohar Lohia Avadh University",
      location: "Faizabad, India", 
      period: "Jul 2020 - Jul 2023",
      status: "Completed"
    }
  ];

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Academic foundation and continuous learning journey
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:scale-[1.02] animate-fade-in border-l-4 border-l-primary bg-card"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center space-x-3 mb-2 md:mb-0">
                    <div className="p-2 bg-primary rounded-full">
                      <GraduationCap className="text-primary-foreground" size={20} />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-foreground">
                        {edu.degree}
                      </CardTitle>
                      <p className="text-lg font-semibold text-primary">{edu.school}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col space-y-1 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin size={16} />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="flex items-center space-x-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    edu.status === 'In Progress' 
                      ? 'bg-primary/20 text-primary' 
                      : 'bg-green-500/20 text-green-500'
                  }`}>
                    {edu.status}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
