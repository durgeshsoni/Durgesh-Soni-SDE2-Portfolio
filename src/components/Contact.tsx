import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle, Clock, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Create email body with form data
      const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}
      `;

      // Create mailto link
      const mailtoLink = `mailto:hello@durgeshsoni.com?subject=${encodeURIComponent(`Portfolio Contact: ${formData.subject}`)}&body=${encodeURIComponent(emailBody)}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      toast({
        title: "✅ Message Prepared!",
        description: "Your email client has been opened with the message ready to send.",
      });
      
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: "❌ Error",
        description: "There was an issue opening your email client. Please try again.",
        variant: "destructive"
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@durgeshsoni.com",
      href: "mailto:hello@durgeshsoni.com",
      color: "text-primary",
      description: "Drop me a line anytime"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7552013781",
      href: "tel:+917552013781",
      color: "text-secondary",
      description: "Available for calls"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bangalore, Karnataka",
      href: "#",
      color: "text-accent",
      description: "Based in India"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/durgeshsoni",
      color: "hover:text-primary",
      description: "View my code"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      href: "https://linkedin.com/in/durgeshsoni",
      color: "hover:text-secondary",
      description: "Professional network"
    }
  ];

  const responseTime = [
    { icon: Clock, text: "Usually responds within 24 hours" },
    { icon: CheckCircle, text: "Available for freelance projects" },
    { icon: MessageCircle, text: "Open to collaboration opportunities" }
  ];

  return (
    <section id="contact" className="section-container bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="section-title">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full mb-6"></div>
          <p className="section-subtitle">
            Ready to discuss your next project or explore collaboration opportunities? Let's connect and create something amazing together!
          </p>
        </div>

        <div className="responsive-grid-2 gap-8 lg:gap-12">
          {/* Left side - Contact Info and Content */}
          <div className="space-y-6 animate-fade-in-up">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground flex items-center">
                <MessageCircle className="mr-3 text-primary" size={28} />
                Let's Talk
              </h3>
              <p className="text-base lg:text-lg text-muted-foreground mb-6 leading-relaxed font-light">
                I'm always excited to discuss new opportunities, interesting projects, 
                or just have a chat about technology and software development. Whether you have 
                a project in mind or just want to connect, I'd love to hear from you!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index} 
                  className="glass-card border-0 hover-glow group hover-lift animate-fade-in-up"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <CardContent className="p-4 lg:p-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-to-r from-primary to-secondary rounded-xl group-hover:scale-110 transition-transform duration-300 glow-primary">
                        <info.icon className="text-primary-foreground w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-base text-foreground">{info.label}</p>
                        <a 
                          href={info.href}
                          className={`text-muted-foreground hover:text-primary transition-colors duration-200 ${info.href !== '#' ? 'hover:underline' : ''} text-sm lg:text-base`}
                        >
                          {info.value}
                        </a>
                        <p className="text-xs text-muted-foreground mt-1">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Response Time Info */}
            <Card className="glass-card border-0 p-4 lg:p-6">
              <h4 className="text-lg font-bold mb-3 text-foreground">What to Expect</h4>
              <div className="space-y-2">
                {responseTime.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 group">
                    <item.icon size={16} className="text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-foreground">Follow & Connect</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group glass p-3 lg:p-4 rounded-xl hover-lift hover-glow transition-all duration-300"
                    title={social.description}
                  >
                    <social.icon size={24} className="text-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Contact Form Only */}
          <div className="animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
            <Card className="glass-card border-0 hover-glow">
              <CardContent className="p-6 lg:p-8">
                <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center">
                  <Send className="mr-3 text-primary" size={24} />
                  Send a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-foreground">Full Name *</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className="glass border-primary/20 focus:border-primary bg-background/50 text-foreground placeholder:text-muted-foreground h-10"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-foreground">Email Address *</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        className="glass border-primary/20 focus:border-primary bg-background/50 text-foreground placeholder:text-muted-foreground h-10"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-foreground">Subject *</label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      required
                      className="glass border-primary/20 focus:border-primary bg-background/50 text-foreground placeholder:text-muted-foreground h-10"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-foreground">Message *</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, collaboration ideas, or just say hello!"
                      rows={5}
                      required
                      className="glass border-primary/20 focus:border-primary bg-background/50 text-foreground placeholder:text-muted-foreground resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full btn-gradient h-12 text-base font-semibold glow-primary"
                  >
                    <Send className="mr-2" size={18} />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Simple Footer */}
        <div className="text-center mt-16 pt-8 border-t border-border">
          <p className="text-muted-foreground text-base">
            © 2025 <span className="text-primary font-semibold">Durgesh Soni</span>, Made with Love ❤️
          </p>
        </div>
      </div>
    </section>
  );
};