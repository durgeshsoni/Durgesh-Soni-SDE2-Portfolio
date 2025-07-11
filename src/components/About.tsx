
import { User, MapPin, Phone, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full">
                <User className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-semibold">Software Engineer</h3>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Self-driven Software Engineer with 4+ years of experience specializing in backend development, 
              scalable microservices, API design, and cloud architectures. Skilled in Spring Boot, Microservices, 
              distributed systems, and AWS cloud deployments.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Adept at system design, performance optimization, and CI/CD automation. 
              Thrive in agile environments and open to remote opportunities.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-center space-x-3">
                <MapPin className="text-blue-600" size={20} />
                <span className="text-muted-foreground">Bangalore, Karnataka</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="text-blue-600" size={20} />
                <span className="text-muted-foreground">+91 7552013781</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="text-blue-600" size={20} />
                <span className="text-muted-foreground">hello@durgeshsoni.com</span>
              </div>
            </div>
          </div>

          <div className="animate-fade-in">
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 border-0 shadow-xl">
              <CardContent className="p-0">
                <h4 className="text-xl font-semibold mb-4 text-center">Quick Facts</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Experience</span>
                    <span className="font-semibold">4+ Years</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Specialization</span>
                    <span className="font-semibold">Backend Development</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Primary Stack</span>
                    <span className="font-semibold">Java, Spring Boot</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Cloud Platform</span>
                    <span className="font-semibold">AWS</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Database</span>
                    <span className="font-semibold">MySQL, MongoDB</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
