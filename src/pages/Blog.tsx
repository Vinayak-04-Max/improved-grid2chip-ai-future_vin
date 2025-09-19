import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "The Future of AI-Ready Data Centers",
      excerpt: "Exploring how artificial intelligence is revolutionizing data center design and operations for next-generation computing demands.",
      author: "Seetharam Mannava",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "AI Infrastructure",
      featured: true
    },
    {
      title: "Building Management Systems: AI Integration Best Practices",
      excerpt: "How AI-powered BMS solutions are transforming facility management with predictive maintenance and intelligent automation.",
      author: "M V Surya Ganesh",
      date: "2024-01-10",
      readTime: "7 min read",
      category: "BMS Technology"
    },
    {
      title: "Edge Computing: Bringing AI Closer to Data",
      excerpt: "The critical role of edge data centers in enabling real-time AI processing and reducing latency for mission-critical applications.",
      author: "Grid2Chip Team",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Edge Computing"
    },
    {
      title: "Sustainable AI Infrastructure: Green Data Centers",
      excerpt: "How AI optimization is driving energy efficiency and sustainability in modern data center operations.",
      author: "Grid2Chip Team",
      date: "2023-12-28",
      readTime: "4 min read",
      category: "Sustainability"
    },
    {
      title: "Prefab Container Data Centers: Rapid AI Deployment",
      excerpt: "Accelerating AI infrastructure deployment with modular, pre-configured container data center solutions.",
      author: "Seetharam Mannava",
      date: "2023-12-20",
      readTime: "5 min read",
      category: "Modular Solutions"
    },
    {
      title: "Fire Safety Systems in AI Data Centers",
      excerpt: "Advanced fire protection strategies for protecting valuable AI hardware and ensuring continuous operations.",
      author: "Grid2Chip Team",
      date: "2023-12-15",
      readTime: "6 min read",
      category: "Safety Systems"
    }
  ];

  const categories = [
    "All Posts",
    "AI Infrastructure", 
    "BMS Technology",
    "Edge Computing",
    "Sustainability",
    "Modular Solutions",
    "Safety Systems"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-card py-20 lg:py-32">
        <div className="absolute inset-0 tech-grid opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center space-y-8">
            <Badge variant="outline" className="w-fit mx-auto border-primary/30 text-primary">
              <span className="relative">
                AI Infrastructure Insights
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-ai-pulse"></span>
              </span>
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-display font-bold leading-tight">
              AI Infrastructure <span className="text-primary">Blog</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest insights, trends, and innovations in AI-ready critical facility 
              infrastructure and building management systems.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All Posts" ? "ai" : "outline"}
                size="sm"
                className="transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Featured Post */}
            {blogPosts
              .filter(post => post.featured)
              .map((post, index) => (
                <Card key={index} className="lg:col-span-2 bg-gradient-card border-primary/20 ai-glow group hover:border-primary/40 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline" className="border-primary/30 text-primary">
                        {post.category}
                      </Badge>
                      <Badge variant="outline" className="text-accent border-accent/30">
                        Featured
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl lg:text-3xl group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <Button variant="ghost" className="group-hover:bg-primary/10" asChild>
                        <Link to={`/blog/${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}

            {/* Regular Posts */}
            {blogPosts
              .filter(post => !post.featured)
              .slice(0, 1)
              .map((post, index) => (
                <Card key={index} className="bg-gradient-card border-primary/20 ai-glow group hover:border-primary/40 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline" className="border-primary/30 text-primary">
                        {post.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {post.excerpt.substring(0, 120)}...
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <span>{post.author}</span>
                        <span>•</span>
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      
                      <Button variant="ghost" size="sm" className="group-hover:bg-primary/10" asChild>
                        <Link to={`/blog/${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
                          Read
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>

          {/* More Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {blogPosts
              .filter(post => !post.featured)
              .slice(1)
              .map((post, index) => (
                <Card key={index} className="bg-gradient-card border-primary/20 ai-glow group hover:border-primary/40 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline" className="border-primary/30 text-primary">
                        {post.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {post.excerpt.substring(0, 100)}...
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <span>{post.author}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      
                      <Button variant="ghost" size="sm" className="group-hover:bg-primary/10" asChild>
                        <Link to={`/blog/${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
                          Read
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 lg:py-32 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
            Stay Updated with <span className="text-gradient-ai">AI Infrastructure Insights</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Get the latest articles, insights, and trends in AI-ready critical facility infrastructure 
            delivered directly to your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-card/50 border border-primary/20 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <Button variant="ai" size="lg">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;