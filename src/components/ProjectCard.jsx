import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

function ProjectCard({ project }) {
  return (
    <div className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
      <div className="relative overflow-hidden aspect-video">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-semibold text-foreground mb-3" style={{ textWrap: 'balance' }}>
          {project.title}
        </h3>
        
        <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
        
        <div className="mt-auto">
          <button
        
            className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-all duration-200 active:scale-[0.98]"
            onClick={() => window.open(project.link, "_blank")} 
          >
            Ver projeto
          </button>
          <button
            className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-all duration-200 active:scale-[0.98] ml-3"
            onClick={() => window.open(project.linkCodigo, "_blank")} 
          >
             Código
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;