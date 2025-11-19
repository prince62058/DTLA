import { Calendar, Clock, ArrowRight, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import indiaNewsReader from "@/assets/india-news-reader.jpg";

const Articles = () => {
  const featuredArticle = {
    title: "India's Cybersecurity Ecosystem Reaches New Milestone",
    excerpt: "With 400+ startups and 6.5 lakh professionals, India's ₹20 billion cybersecurity industry is scaling new heights in 2025.",
    date: "December 15, 2025",
    readTime: "8 min read",
    category: "Industry News",
    image: indiaNewsReader
  };

  const articles = [
    {
      title: "Nearly Half of Indian Firms Faced Ransomware in 2024",
      excerpt: "OpenText report reveals 47% of Indian organizations experienced ransomware attacks, with India recording highest global ransom payment rates.",
      date: "November 3, 2025",
      readTime: "6 min read",
      category: "Cybercrime",
      trending: true
    },
    {
      title: "How UPI Scams Are Evolving in India",
      excerpt: "New tactics used by fraudsters to trick UPI users and how to protect yourself from payment scams.",
      date: "December 10, 2025",
      readTime: "5 min read",
      category: "Scam Alert"
    },
    {
      title: "Digital Literacy for Senior Citizens: A Growing Need",
      excerpt: "Why India's elderly population needs specialized digital safety training and how communities are stepping up.",
      date: "December 5, 2025",
      readTime: "7 min read",
      category: "Education"
    },
    {
      title: "AI-Enabled Threats: The New Frontier",
      excerpt: "95% of organizations now allow generative AI tools. Understanding the security implications and risks.",
      date: "November 28, 2025",
      readTime: "10 min read",
      category: "Technology"
    },
    {
      title: "CERT-In's Role in India's Cyber Defense",
      excerpt: "How India's Computer Emergency Response Team is leading cybersecurity preparedness with innovation and global partnerships.",
      date: "November 20, 2025",
      readTime: "8 min read",
      category: "Policy"
    },
    {
      title: "Romance Scams on the Rise in Indian Metro Cities",
      excerpt: "Dating app frauds cost Indians millions. Learn to identify red flags and protect your heart and wallet.",
      date: "November 15, 2025",
      readTime: "6 min read",
      category: "Scam Alert"
    },
    {
      title: "Building Cyber Awareness in Rural India",
      excerpt: "Success stories from villages adopting digital literacy programs and protecting themselves from online fraud.",
      date: "November 10, 2025",
      readTime: "9 min read",
      category: "Community"
    },
    {
      title: "Small Business Guide: Affordable Cybersecurity",
      excerpt: "Cost-effective security measures every small business in India can implement today.",
      date: "November 5, 2025",
      readTime: "7 min read",
      category: "Business"
    },
    {
      title: "Student Data Privacy: What Parents Should Know",
      excerpt: "With online education becoming norm, understanding how to protect children's digital footprint.",
      date: "October 30, 2025",
      readTime: "5 min read",
      category: "Privacy"
    }
  ];

  const categories = ["All", "Scam Alert", "Industry News", "Education", "Technology", "Policy", "Community", "Business", "Privacy"];

  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h1 className="text-6xl font-bold mb-6 animate-fade-in">Latest Articles</h1>
          <p className="text-xl max-w-3xl opacity-90">
            Stay informed with the latest news, insights, and tips on digital trust and cybersecurity in India
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <Card className="mb-16 overflow-hidden hover:shadow-2xl transition-shadow">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <img 
                  src={featuredArticle.image}
                  alt="Indian woman reading digital news safely in a modern café setting with smartphone and natural lighting"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <Badge className="w-fit mb-4" variant="secondary">Featured</Badge>
                <h2 className="text-4xl font-bold mb-4 text-foreground">
                  {featuredArticle.title}
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{featuredArticle.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{featuredArticle.readTime}</span>
                  </div>
                </div>
                <Button className="w-fit">
                  Read Article
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>

          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((category, index) => (
              <Button 
                key={index} 
                variant={index === 0 ? "default" : "outline"}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
                <CardHeader>
                  <div className="flex justify-between items-start mb-3">
                    <Badge variant="outline">{article.category}</Badge>
                    {article.trending && (
                      <div className="flex items-center gap-1 text-xs text-accent">
                        <TrendingUp className="w-3 h-3" />
                        <span>Trending</span>
                      </div>
                    )}
                  </div>
                  <CardTitle className="text-xl line-clamp-2 hover:text-primary transition-colors">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {article.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <Button variant="ghost" className="w-full group">
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get weekly updates on digital trust, cybersecurity news, and scam alerts directly in your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <Button size="lg">Subscribe</Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Articles;
