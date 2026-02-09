import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable AI Pipelines with Python and Kubernetes",
    excerpt: "Learn how to design and deploy production-ready machine learning pipelines that scale with your data needs.",
    date: "Feb 5, 2026",
    readTime: "8 min read",
    tags: ["AI/ML", "Python", "Kubernetes"],
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Zero-Trust Architecture: A Practical Implementation Guide",
    excerpt: "A step-by-step guide to implementing zero-trust security principles in your organization's network infrastructure.",
    date: "Jan 28, 2026",
    readTime: "12 min read",
    tags: ["Security", "DevOps", "Architecture"],
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "React Performance Optimization Techniques in 2026",
    excerpt: "Discover the latest techniques and best practices for optimizing React application performance.",
    date: "Jan 15, 2026",
    readTime: "6 min read",
    tags: ["React", "Performance", "Frontend"],
    image: "/placeholder.svg"
  }
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Latest Blog Posts
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Insights, tutorials, and thoughts on technology, development, and security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="bg-gradient-card border-tech-border hover:shadow-hover transition-all duration-300 group flex flex-col overflow-hidden cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <AspectRatio ratio={16 / 9}>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </AspectRatio>
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>
                <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed text-sm">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col justify-between pt-0">
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className="text-xs border-primary/30 text-primary"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-primary hover:text-primary p-0"
                >
                  Read More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;