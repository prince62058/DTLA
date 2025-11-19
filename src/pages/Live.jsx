import { Calendar, MapPin, Users, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import indiaCommunity from "@/assets/india-community.jpg";
import indiaWorkshop from "@/assets/india-workshop.jpg";

const Live = () => {
  const events = [
    {
      title: "Digital Security Workshop - Mumbai",
      date: "December 28, 2025",
      time: "10:00 AM - 2:00 PM",
      location: "BKC, Mumbai",
      attendees: 150,
      type: "Workshop",
      description: "Learn practical tips to protect yourself from online scams and cyber threats. Includes hands-on sessions with cybersecurity experts."
    },
    {
      title: "Cyber Safety Awareness Drive - Delhi",
      date: "January 5, 2026",
      time: "3:00 PM - 6:00 PM",
      location: "Connaught Place, New Delhi",
      attendees: 300,
      type: "Community Event",
      description: "Free community gathering to raise awareness about digital trust and online safety for all age groups."
    },
    {
      title: "Tech Summit: Future of Digital Trust",
      date: "January 15, 2026",
      time: "9:00 AM - 5:00 PM",
      location: "Bangalore International Centre",
      attendees: 500,
      type: "Conference",
      description: "Join industry leaders, policymakers, and cybersecurity professionals discussing India's digital trust ecosystem."
    },
    {
      title: "Senior Citizens Digital Literacy Program",
      date: "January 20, 2026",
      time: "11:00 AM - 1:00 PM",
      location: "Pune Community Center",
      attendees: 80,
      type: "Training",
      description: "Special session designed for senior citizens to understand digital payments, online banking safety, and scam prevention."
    },
    {
      title: "Student Safety Bootcamp - Hyderabad",
      date: "February 2, 2026",
      time: "2:00 PM - 5:00 PM",
      location: "Hyderabad Tech Park",
      attendees: 200,
      type: "Bootcamp",
      description: "Interactive bootcamp for students and young professionals covering social media safety, privacy protection, and digital ethics."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="relative py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h1 className="text-6xl font-bold mb-6 animate-fade-in">Live Events</h1>
          <p className="text-xl max-w-3xl opacity-90">
            Join us at upcoming digital trust literacy events across India. Learn, connect, and protect yourself in the digital world.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <img 
                src={indiaCommunity}
                alt="Indian community members using smartphones safely at a cultural festival with digital security awareness"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Building a Safer Digital India
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our events bring together communities across India to learn, share, and strengthen digital trust literacy. 
                From bustling metros to smaller cities, we're creating a nationwide movement for online safety.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Community Driven</h3>
                    <p className="text-sm text-muted-foreground">Join thousands protecting each other</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-secondary/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Nationwide Reach</h3>
                    <p className="text-sm text-muted-foreground">Events in major cities across India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
            Upcoming Events
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {events.map((event, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-3">
                    <Badge variant="secondary">{event.type}</Badge>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{event.attendees}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>{event.location}</span>
                  </div>
                  <Button className="w-full mt-4" variant="default">
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-muted rounded-2xl p-12 text-center">
            <img 
              src={indiaWorkshop}
              alt="Digital security workshop in India teaching elderly people about online safety with trainer and community members"
              className="rounded-xl shadow-xl mx-auto mb-8 max-w-2xl w-full"
            />
            <h3 className="text-3xl font-bold mb-4">Host an Event in Your City</h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Want to bring digital trust literacy to your community? Partner with us to organize 
              workshops, awareness drives, and training sessions.
            </p>
            <Button size="lg" variant="default">
              Become a Community Partner
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Live;
