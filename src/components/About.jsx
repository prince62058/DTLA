import { Shield, AlertTriangle, Users } from "lucide-react";
import communityImage from "@/assets/community-trust.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-foreground">
            The Trust Problem
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            In today's digital age, scams and misinformation are more prevalent than ever. 
            DTLA is your trusted companion in building digital literacy and protecting yourself online.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <AlertTriangle className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-card-foreground">Growing Threats</h3>
            <p className="text-muted-foreground">
              Phishing, identity theft, and online scams cost billions annually. 
              Stay informed and protected with real-time threat awareness.
            </p>
          </div>

          <div className="bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Shield className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-card-foreground">Digital Literacy</h3>
            <p className="text-muted-foreground">
              Knowledge is power. Learn to identify threats, verify information, 
              and make informed decisions in your digital interactions.
            </p>
          </div>

          <div className="bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-card-foreground">Community Protection</h3>
            <p className="text-muted-foreground">
              Join a community dedicated to sharing experiences and protecting 
              each other from digital threats through collective awareness.
            </p>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src={communityImage} 
            alt="Diverse community of people using digital devices safely with security elements"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
