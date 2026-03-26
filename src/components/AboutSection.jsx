import React from 'react';
import { Code2, Palette, Smartphone, Zap } from 'lucide-react';

function AboutSection() {
  const skills = [
    {
      icon: Code2,
      title: 'Desenvolvimento React',
      description: 'Desenvolvimento de aplicações utilizando React, com componentização, hooks e gerenciamento de estado.'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Criação de interfaces intuitivas e responsivas, com foco na usabilidade e experiência do usuário.'
    },
    {
      icon: Smartphone,
      title: 'Design responsivo',
      description: 'Construção de layouts adaptáveis para diferentes dispositivos, garantindo boa visualização em mobile e desktop.'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Otimização de aplicações para melhorar carregamento, desempenho e experiência do usuário.'
    }
  ];

  return (
    <section id="sobre" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}
          >
            Sobre mim
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Atuo no desenvolvimento de interfaces web com foco em funcionalidade, organização de código e experiência do usuário.
            Gosto de construir aplicações interativas e responsivas, aplicando conceitos como componentização e boas práticas de desenvolvimento.
            Busco evoluir constantemente através da prática e da criação de projetos que simulem situações reais do mercado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-6 transition-all duration-200 hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {skill.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex flex-wrap gap-3 justify-center">
            {['React', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'Git', 'Responsive Design', 'UI/UX'].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;