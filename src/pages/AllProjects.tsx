// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Github, ArrowRight, ArrowLeft } from "lucide-react";
// import { AspectRatio } from "@/components/ui/aspect-ratio";
// import { useNavigate } from "react-router-dom";
// import { projects } from "../data/projects";

// const AllProjects = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen bg-background">
//       <div className="py-20 px-4">
//         <div className="max-w-6xl mx-auto">
//           <Button
//             variant="ghost"
//             className="mb-8 text-muted-foreground hover:text-primary"
//             onClick={() => navigate("/")}
//           >
//             <ArrowLeft className="w-4 h-4 mr-2" />
//             Back to Home
//           </Button>

//           <div className="text-center mb-16">
//             <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
//               All Projects
//             </h1>
//             <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
//               A complete collection of my projects spanning AI/ML, full-stack
//               development, cybersecurity, and more.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {projects.map((project) => (
//               <Card
//                 key={project.id}
//                 className="bg-gradient-card border-tech-border hover:shadow-hover transition-all duration-300 group flex flex-col overflow-hidden"
//               >
//                 <div className="relative overflow-hidden">
//                   <AspectRatio ratio={16 / 9}>
//                     <img
//                       src={project.images[0]}
//                       alt={project.title}
//                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                     />
//                   </AspectRatio>
//                 </div>

//                 <CardHeader className="pb-3">
//                   <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
//                     {project.title}
//                   </CardTitle>
//                   <CardDescription className="text-muted-foreground leading-relaxed text-sm">
//                     {project.description}
//                   </CardDescription>
//                 </CardHeader>

//                 <CardContent className="flex-1 flex flex-col justify-between pt-0">
//                   <div className="mb-4">
//                     <div className="flex flex-wrap gap-2">
//                       {project.technologies.map((tech, i) => (
//                         <Badge
//                           key={i}
//                           variant="secondary"
//                           className="text-xs bg-muted"
//                         >
//                           {tech}
//                         </Badge>
//                       ))}
//                     </div>
//                   </div>

//                   <div className="flex gap-3">
//                     <Button
//                       size="sm"
//                       className="flex-1 bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300"
//                       onClick={() => navigate(`/projects/${project.id}`)}
//                     >
//                       <ArrowRight className="w-4 h-4 mr-2" />
//                       Details
//                     </Button>
//                     <Button
//                       size="sm"
//                       variant="outline"
//                       className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
//                       asChild
//                     >
//                       <a
//                         href={project.githubUrl}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         <Github className="w-4 h-4 mr-2" />
//                         Code
//                       </a>
//                     </Button>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AllProjects;

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ArrowRight, ArrowLeft } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useNavigate } from "react-router-dom";
import { projects } from "@/data/projects";

const AllProjects = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <Button
            variant="ghost"
            className="mb-8 text-muted-foreground hover:text-primary"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>

          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              All Projects
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A complete collection of my projects spanning AI/ML, full-stack
              development, cybersecurity, and more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="bg-gradient-card border-tech-border hover:shadow-hover transition-all duration-300 group flex flex-col overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <AspectRatio ratio={16 / 9}>
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </AspectRatio>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed text-sm">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col justify-between pt-0">
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="text-xs bg-muted"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300"
                      onClick={() => navigate(`/projects/${project.id}`)}
                    >
                      <ArrowRight className="w-4 h-4 mr-2" />
                      Details
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
