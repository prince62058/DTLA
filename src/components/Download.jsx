import { Smartphone, Apple, Chrome } from "lucide-react";
import { Button } from "./ui/button";

const Download = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold mb-6">
          Get DTLA Today
        </h2>
        <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90">
          Download the app and start protecting yourself in the digital world
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
          <Button 
            size="lg"
            variant="secondary"
            className="w-64 text-lg py-6"
            disabled
          >
            <Apple className="mr-2 w-6 h-6" />
            iOS App Store
          </Button>
          <Button 
            size="lg"
            variant="secondary"
            className="w-64 text-lg py-6"
            disabled
          >
            <Smartphone className="mr-2 w-6 h-6" />
            Google Play
          </Button>
          <Button 
            size="lg"
            variant="secondary"
            className="w-64 text-lg py-6"
            disabled
          >
            <Chrome className="mr-2 w-6 h-6" />
            Web App
          </Button>
        </div>

        <p className="text-sm opacity-75">
          Coming Soon • Join our waitlist to get early access
        </p>
      </div>
    </section>
  );
};

export default Download;
