import { CheckCircle, Search, BookOpen, Bell, Share2, Lock } from "lucide-react";
import appMockup from "@/assets/app-mockup.jpg";

const Features = () => {
  const features = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Scam Detection",
      description: "AI-powered tools to identify potential scams and fraudulent content in real-time"
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Alert System",
      description: "Get instant notifications about new threats and scams in your area"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Educational Resources",
      description: "Access comprehensive guides, videos, and tutorials on digital safety"
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "Community Reporting",
      description: "Report and share scam experiences to help protect others"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Privacy Protection",
      description: "Tools and tips to safeguard your personal information online"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Verification Tools",
      description: "Verify websites, emails, and messages before you interact"
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-foreground">
            Powerful Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to stay safe and informed in the digital world
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <img 
              src={appMockup} 
              alt="DTLA app interface showing security features and trust verification tools on smartphone screens"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex gap-4 p-6 bg-card rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-card-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
