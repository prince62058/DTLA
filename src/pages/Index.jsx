import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Resources from "@/components/Resources";
import ReportScam from "@/components/ReportScam";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Features />
        <Resources />
        <ReportScam />
        <Download />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
