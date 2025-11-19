import { useState } from "react";
import { Shield, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Link, useLocation } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "./ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";

const Navigation = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    if (!isHomePage) {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { to: "/live", label: "Live" },
    { to: "/business", label: "Business" },
    { to: "/explore", label: "Explore" },
    { to: "/dtla-alliance", label: "Alliance" },
    { to: "/articles", label: "Articles" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/10 backdrop-blur-md text-primary-foreground shadow-lg border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 font-bold text-2xl hover:text-secondary transition-colors">
            <Shield className="w-8 h-8" />
            <span>DTLA</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.to}
                to={link.to}
                className="hover:text-secondary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Button 
              variant="secondary"
              onClick={() => scrollToSection("report")}
              className="font-semibold"
            >
              Report a Scam
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary/20">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px] sm:w-[320px] bg-background border-r border-border p-0">
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-border">
                  <div className="flex items-center gap-2 font-bold text-2xl text-foreground">
                    <Shield className="w-8 h-8 text-primary" />
                    <span>DTLA</span>
                  </div>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <X className="h-5 w-5" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </SheetClose>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col flex-1 px-4 py-6 gap-1">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.to}>
                      <Link 
                        to={link.to}
                        className="text-base font-medium text-foreground hover:text-primary hover:bg-accent rounded-lg px-4 py-3 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                  
                  {/* Report a Scam Button */}
                  <SheetClose asChild>
                    <Button 
                      variant="secondary"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        scrollToSection("report");
                      }}
                      className="font-semibold w-full mt-4"
                    >
                      Report a Scam
                    </Button>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
