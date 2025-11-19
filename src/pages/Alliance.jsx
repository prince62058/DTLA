import { Target, Eye, Heart, Users, Award, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import communityTrust from "@/assets/community-trust.jpg";

const Alliance = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Our Mission",
      description: "To empower every Indian with the knowledge and tools to navigate the digital world safely and confidently"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Our Vision",
      description: "A digitally literate India where every citizen can identify threats, verify information, and protect their digital identity"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Our Values",
      description: "Trust, transparency, education, and community-driven protection for all"
    }
  ];

  const impact = [
    { number: "2M+", label: "Users Educated" },
    { number: "500K+", label: "Scams Reported" },
    { number: "50+", label: "Cities Covered" },
    { number: "10K+", label: "Workshops Conducted" }
  ];

  const team = [
    {
      role: "Leadership Team",
      description: "Experienced cybersecurity professionals and digital literacy advocates with decades of combined expertise"
    },
    {
      role: "Advisory Board",
      description: "Former government officials, tech industry leaders, and academic experts guiding our mission"
    },
    {
      role: "Community Champions",
      description: "Volunteers and partners across India helping spread digital trust literacy in their communities"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold mb-6 animate-fade-in">
            DTLA Alliance
          </h1>
          <p className="text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Building India's digital trust ecosystem together
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-5xl font-bold mb-6 text-foreground">
                About DTLA Alliance
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                The DTLA Alliance is a nationwide movement bringing together individuals, organizations, 
                and communities to combat digital threats and build trust literacy across India.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 2023, we've grown from a small team of cybersecurity enthusiasts to a 
                community of millions working together to create a safer digital India.
              </p>
              <p className="text-lg text-muted-foreground">
                Our work is supported by partnerships with government agencies, educational institutions, 
                technology companies, and NGOs committed to digital safety.
              </p>
            </div>
            <div>
              <img 
                src={communityTrust}
                alt="Diverse group of people in India using smartphones safely with digital security elements and locks illustrated around them"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                    {value.icon}
                  </div>
                  <CardTitle className="text-2xl mb-4">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-muted rounded-2xl p-12 mb-20">
            <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
              Our Impact
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {impact.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-lg text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
              Who We Are
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-2xl text-center">{member.role}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-muted-foreground">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Card className="p-8">
              <CardHeader>
                <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-secondary">
                  <Users className="w-8 h-8" />
                </div>
                <CardTitle className="text-3xl mb-4">Join the Alliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground mb-6">
                  Become a community partner and help us spread digital trust literacy in your area. 
                  Whether you're an individual, organization, or institution, there's a place for you.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary" />
                    <span>Official Alliance Certification</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-primary" />
                    <span>Access to Resources & Materials</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    <span>Connect with National Network</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 bg-gradient-accent">
              <CardHeader>
                <CardTitle className="text-3xl mb-4">Corporate Partnerships</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground mb-6">
                  Partner with DTLA to demonstrate your commitment to digital safety and reach 
                  millions of conscious Indian consumers.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Co-branded educational campaigns</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Employee training programs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>CSR initiatives & social impact</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Alliance;
