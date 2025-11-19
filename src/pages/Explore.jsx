import { Smartphone, Globe, Lock, Zap, Brain, ShieldCheck } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import indiaCityscape from "@/assets/india-cityscape.jpg";
import appMockup from "@/assets/app-mockup.jpg";

const Explore = () => {
  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Real-Time Scam Alerts",
      description: "Get instant notifications about new scams reported in your area and across India",
      category: "Security"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Detection",
      description: "Advanced AI analyzes messages, emails, and websites to identify potential threats",
      category: "Technology"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "URL Verification",
      description: "Instantly check if a website or link is safe before clicking",
      category: "Tools"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Privacy Guardian",
      description: "Protect your personal information with privacy assessment tools",
      category: "Privacy"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Quick Response Center",
      description: "Immediate action steps if you've been targeted by a scam",
      category: "Support"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile-First Design",
      description: "Access all features seamlessly on your smartphone, optimized for India",
      category: "Experience"
    }
  ];

  const appScreens = [
    {
      title: "Dashboard",
      description: "Your personalized safety dashboard showing threat levels, recent alerts, and quick actions"
    },
    {
      title: "Scam Scanner",
      description: "Scan suspicious messages, emails, and links with our AI-powered detection engine"
    },
    {
      title: "Learning Hub",
      description: "Interactive tutorials and courses on digital safety, available in multiple Indian languages"
    },
    {
      title: "Community Reports",
      description: "See what scams others in your city have reported and share your experiences"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <section
        className="relative py-32 bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${indiaCityscape})` 
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-6xl font-bold mb-6 animate-fade-in">
            Explore DTLA
          </h1>
          <p className="text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Discover how our app protects millions across India from digital threats
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-foreground">
              Powerful Features for Your Safety
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built specifically for the Indian digital landscape, with features that matter to you
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-primary">
                    {feature.icon}
                  </div>
                  <div className="text-xs uppercase tracking-wide text-secondary font-semibold mb-2">
                    {feature.category}
                  </div>
                  <CardTitle className="text-2xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Built for India, By Indians
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                DTLA understands the unique challenges of India's digital ecosystem. From UPI scams 
                to fake job offers, we're focused on the threats that matter to Indian users.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Multi-Language Support</h4>
                    <p className="text-sm text-muted-foreground">Available in Hindi, English, Tamil, Telugu, and more</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">India-Specific Threats</h4>
                    <p className="text-sm text-muted-foreground">Focus on scams targeting Indian users and local contexts</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Lightweight & Fast</h4>
                    <p className="text-sm text-muted-foreground">Optimized for all devices and network conditions</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src={appMockup}
                alt="DTLA mobile app interface showing security dashboard with trust verification features on smartphones"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>

          <div className="bg-muted rounded-2xl p-12">
            <h2 className="text-4xl font-bold mb-8 text-center text-foreground">
              App Screens Preview
            </h2>
            <Tabs defaultValue="0" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                {appScreens.map((screen, index) => (
                  <TabsTrigger key={index} value={index.toString()}>
                    {screen.title}
                  </TabsTrigger>
                ))}
              </TabsList>
              {appScreens.map((screen, index) => (
                <TabsContent key={index} value={index.toString()} className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl">{screen.title}</CardTitle>
                      <CardDescription className="text-lg">{screen.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-gradient-hero rounded-xl h-96 flex items-center justify-center text-white text-xl">
                        Screen Preview Coming Soon
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Explore;
