import { Building2, Shield, TrendingUp, Users, Award, BookOpen } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import indiaBusiness from "@/assets/india-business.jpg";
import indiaStartup from "@/assets/india-startup.jpg";

const Business = () => {
  const businessSolutions = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security Training",
      description: "Comprehensive cybersecurity training programs for your entire organization. Reduce risk and build a culture of digital safety.",
      features: ["Custom Training Modules", "Employee Certification", "Ongoing Support"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Workshops",
      description: "Interactive workshops designed for teams to learn together about phishing, social engineering, and secure practices.",
      features: ["Hands-on Sessions", "Real-world Scenarios", "Team Building"]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Risk Assessment",
      description: "Identify vulnerabilities in your digital infrastructure and get actionable recommendations for improvement.",
      features: ["Security Audit", "Compliance Check", "Action Plan"]
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Certification Programs",
      description: "Get your organization certified as a digitally secure workplace. Stand out with our trust badge.",
      features: ["Official Certification", "Public Recognition", "Marketing Assets"]
    }
  ];

  const stats = [
    { number: "400+", label: "Cybersecurity Startups in India" },
    { number: "6.5L+", label: "Security Professionals" },
    { number: "₹20B", label: "Industry Value" },
    { number: "95%", label: "Organizations Using AI Tools" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <section
        className="relative py-32 bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${indiaBusiness})` 
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-6xl font-bold mb-6 animate-fade-in">
            Secure Your Business
          </h1>
          <p className="text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Protect your organization with comprehensive digital trust solutions tailored for Indian businesses
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
            Schedule a Consultation
          </Button>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-foreground">
              India's Growing Cybersecurity Landscape
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              With rapid digital transformation, Indian businesses face increasing cyber threats. 
              Stay ahead with proper training and security measures.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
            Business Solutions
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {businessSolutions.map((solution, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-primary">
                    {solution.icon}
                  </div>
                  <CardTitle className="text-2xl">{solution.title}</CardTitle>
                  <CardDescription className="text-base">{solution.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center bg-muted rounded-2xl p-12">
            <div>
              <h3 className="text-4xl font-bold mb-6 text-foreground">
                Success Story: Growing Startups
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Over 47% of Indian firms faced ransomware attacks in 2024. Organizations that invested 
                in digital trust training reduced security incidents by 60% and built stronger customer confidence.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Join the movement of 400+ cybersecurity startups and 6.5 lakh security professionals 
                building India's ₹20 billion digital trust industry.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-primary" />
                  <span className="font-semibold">Comprehensive Training Materials</span>
                </div>
                <div className="flex items-center gap-3">
                  <Building2 className="w-6 h-6 text-primary" />
                  <span className="font-semibold">Tailored for Indian Business Context</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src={indiaStartup}
                alt="Indian startup team celebrating success in modern Bangalore tech office with diverse professionals and digital devices"
                className="rounded-xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6 text-foreground">
            Ready to Secure Your Organization?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get a free security assessment and discover how DTLA can help protect your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="default" className="text-lg px-8 py-6">
              Contact Sales
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Business;
