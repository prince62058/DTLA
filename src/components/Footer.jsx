import { Shield, Mail, Twitter, Github, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 font-bold text-2xl mb-4">
              <Shield className="w-8 h-8 text-primary" />
              <span>DTLA</span>
            </div>
            <p className="text-muted-foreground">
              Empowering digital trust literacy for everyone.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="/live" className="hover:text-primary transition-colors">Live Events</a></li>
              <li><a href="/business" className="hover:text-primary transition-colors">Business</a></li>
              <li><a href="/explore" className="hover:text-primary transition-colors">Explore</a></li>
              <li><a href="/dtla-alliance" className="hover:text-primary transition-colors">Alliance</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="/articles" className="hover:text-primary transition-colors">Articles & News</a></li>
              <li><a href="/#resources" className="hover:text-primary transition-colors">Safety Guides</a></li>
              <li><a href="/#resources" className="hover:text-primary transition-colors">FAQs</a></li>
              <li><a href="/#report" className="hover:text-primary transition-colors">Report Scam</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Connect</h3>
            <div className="flex gap-4 mb-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
            <p className="text-muted-foreground text-sm">
              Stay updated with the latest digital trust news
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; {currentYear} DTLA - Digital Trust Literacy App. All rights reserved.</p>
          <p className="text-sm mt-2">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            {" • "}
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            {" • "}
            <a href="#" className="hover:text-primary transition-colors">Accessibility</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
