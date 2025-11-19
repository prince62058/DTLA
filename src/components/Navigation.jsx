import { Shield } from "lucide-react";
import { Button } from "./ui/button";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const scrollToSection = (id) => {
    if (!isHomePage) {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/10 backdrop-blur-md text-primary-foreground shadow-lg border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 font-bold text-2xl hover:text-secondary transition-colors">
            <Shield className="w-8 h-8" />
            <span>DTLA</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-6">
            <Link 
              to="/live"
              className="hover:text-secondary transition-colors"
            >
              Live
            </Link>
            <Link 
              to="/business"
              className="hover:text-secondary transition-colors"
            >
              Business
            </Link>
            <Link 
              to="/explore"
              className="hover:text-secondary transition-colors"
            >
              Explore
            </Link>
            <Link 
              to="/dtla-alliance"
              className="hover:text-secondary transition-colors"
            >
              Alliance
            </Link>
            <Link 
              to="/articles"
              className="hover:text-secondary transition-colors"
            >
              Articles
            </Link>
            <Button 
              variant="secondary"
              onClick={() => scrollToSection("report")}
              className="font-semibold"
            >
              Report a Scam
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
