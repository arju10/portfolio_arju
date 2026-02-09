import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Github, CheckCircle } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { projects } from "../data/projects";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Project Not Found</h1>
          <Button onClick={() => navigate("/projects")}>View All Projects</Button>
        </div>
      </div>
    );
  }

  
  return (
    <div className="min-h-screen bg-background">
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Button
            variant="ghost"
            className="mb-8 text-muted-foreground hover:text-primary"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>

          {/* Hero Image */}
          <div className="rounded-lg overflow-hidden border border-tech-border mb-8">
            <AspectRatio ratio={16 / 9}>
              <img
                src={project.images[0]}
                
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </AspectRatio>
          </div>

          {/* Title & Actions */}
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              {project.title}
            </h1>
            <div className="flex gap-3">
              <Button
                className="bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300"
                asChild
              >
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </a>
              </Button>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                asChild
              >
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  Source Code
                </a>
              </Button>
            </div>
          </div>

          {/* Overview */}
          <Card className="bg-gradient-card border-tech-border mb-8">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Project Overview</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {project.overview}
              </p>
            </CardContent>
          </Card>

          {/* Key Features */}
          <Card className="bg-gradient-card border-tech-border mb-8">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Technologies */}
          <Card className="bg-gradient-card border-tech-border">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-6">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="text-sm px-4 py-2 bg-muted hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;