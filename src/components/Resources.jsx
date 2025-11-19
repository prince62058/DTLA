import { BookOpen, Video, HelpCircle, FileText } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const Resources = () => {
  const resourceCategories = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Safety Guides",
      description: "Comprehensive guides on protecting yourself online",
      items: ["Phishing Prevention", "Password Security", "Social Media Safety"]
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Video Tutorials",
      description: "Step-by-step video content for visual learners",
      items: ["Spotting Fake Emails", "Secure Online Shopping", "Two-Factor Authentication"]
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Case Studies",
      description: "Real-world examples of scams and how to avoid them",
      items: ["Romance Scams", "Investment Fraud", "Tech Support Scams"]
    }
  ];

  const faqs = [
    {
      question: "What is digital trust literacy?",
      answer: "Digital trust literacy is the ability to critically evaluate online information, identify potential threats, and make informed decisions about digital interactions. It includes understanding how to verify sources, recognize scams, and protect personal information online."
    },
    {
      question: "How does DTLA protect my privacy?",
      answer: "DTLA uses end-to-end encryption for all user data, never shares your information with third parties, and gives you complete control over what data you choose to share. All scam reports are anonymized to protect your identity."
    },
    {
      question: "Is DTLA free to use?",
      answer: "Yes, DTLA offers a comprehensive free tier with access to most features. Premium features for advanced threat detection and personalized education content are available through optional subscriptions."
    },
    {
      question: "How often is the scam database updated?",
      answer: "Our scam database is updated in real-time as new threats are reported by our community and verified by our security team. You'll receive instant alerts about emerging threats relevant to you."
    },
    {
      question: "Can I report a scam anonymously?",
      answer: "Absolutely. We prioritize your privacy and allow completely anonymous scam reporting. Your contribution helps protect the entire community while keeping your identity secure."
    }
  ];

  return (
    <section id="resources" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-foreground">
            Resources & Support
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Access educational materials, guides, and answers to common questions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {resourceCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-primary">
                  {category.icon}
                </div>
                <CardTitle className="text-2xl">{category.title}</CardTitle>
                <CardDescription className="text-base">{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <HelpCircle className="w-10 h-10 text-primary" />
            <h3 className="text-4xl font-bold text-foreground">
              Frequently Asked Questions
            </h3>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-lg px-6 shadow-md"
              >
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Resources;
