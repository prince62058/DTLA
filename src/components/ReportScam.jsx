import { AlertTriangle, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

const ReportScam = () => {
  return (
    <section id="report" className="py-20 bg-gradient-accent">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto p-12 text-center shadow-2xl">
          <div className="bg-accent/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="w-10 h-10 text-accent" />
          </div>
          
          <h2 className="text-5xl font-bold mb-6 text-foreground">
            Report a Scam
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Encountered a suspicious message, website, or call? Help protect the community 
            by reporting it. Your report will be reviewed and added to our threat database.
          </p>

          <div className="space-y-4 mb-8">
            <p className="text-muted-foreground">
              Reports are handled securely and can be submitted anonymously
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6"
              onClick={() => window.open("https://downtownla.com/", "_blank")}
            >
              Submit a Report
              <ExternalLink className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6"
              onClick={() => document.getElementById("resources")?.scrollIntoView({ behavior: "smooth" })}
            >
              Learn About Scams
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-8">
            Emergency? Contact your local authorities immediately
          </p>
        </Card>
      </div>
    </section>
  );
};

export default ReportScam;
