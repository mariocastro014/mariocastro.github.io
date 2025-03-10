
import React from 'react';
import AnimatedSection from './AnimatedSection';

// Professional experience data
const experiences = [
  {
    id: 1,
    position: "Chief Product Officer",
    company: "Sintad",
    period: "Octubre 2022 - Presente",
    description: "Liderando la reestructuración del área de productos y elaborando nuevas trayectorias profesionales. Crecimiento del departamento de productos y desarrollo de software en un 70%. Mejora de la retención en el área en un 40%, y definición del roadmap de los productos principales de la empresa.",
    highlights: ["Liderazgo", "Gestión de Productos", "Transformación Digital"],
  },
  {
    id: 2,
    position: "Head of Product",
    company: "Sintad",
    period: "Octubre 2020 - Octubre 2022",
    description: "A cargo de la transformación digital de la empresa y guiando la transición a una empresa nativa en la nube. Asesoramiento y mentoría del equipo en metodologías ágiles, gestión de productos y tecnología en la nube.",
    highlights: ["Transformación Digital", "Metodologías Ágiles", "Cloud"],
  },
  {
    id: 3,
    position: "Product Manager",
    company: "Tekton Labs",
    period: "Enero 2020 - Septiembre 2020",
    description: "Gestión de proyectos y desarrollo de productos con metodologías ágiles. Más de 15 proyectos completados exitosamente.",
    highlights: ["Gestión de Productos", "Metodologías Ágiles", "Proyectos Internacionales"],
  },
  {
    id: 4,
    position: "Project Manager",
    company: "Tekton Labs",
    period: "Septiembre 2018 - Enero 2020",
    description: "Colaboración con ingenieros de software, diseñadores UI/UX, analistas de QA y arquitectos de nube. Gestión de proyectos con metodologías ágiles (SCRUM y Kanban).",
    highlights: ["SCRUM", "Kanban", "Gestión de Equipos"],
  },
  {
    id: 5,
    position: "Co-Fundador",
    company: "Lingers",
    period: "Junio 2020 - Marzo 2021",
    description: "Plataforma para conectar negocios con mentores. Desarrollo del sitio web, ventas, operaciones y mentoría a empresas peruanas.",
    highlights: ["Emprendimiento", "Mentorías", "Operaciones"],
  }
];

// Skills data
const skills = [
  { name: "Gestión de Productos", level: 95 },
  { name: "Transformación Digital", level: 92 },
  { name: "Metodologías Ágiles", level: 90 },
  { name: "Requisitos No Funcionales", level: 88 },
  { name: "Requisitos de Negocio", level: 94 },
];

// Education data
const education = [
  {
    institution: "IE Business School",
    degree: "Master en Ciencias de la Computación y Tecnología Empresarial",
    period: "2021 - 2022"
  },
  {
    institution: "EADA Business School",
    degree: "International Master in Management",
    period: "2020 - 2021"
  },
  {
    institution: "Universidad del Pacífico (PE)",
    degree: "Bachelor of Engineering - Ingeniería Empresarial",
    period: "2012 - 2016"
  },
  {
    institution: "Universidad Loyola Andalucía",
    degree: "Programa de Intercambio - Gestión de la Innovación y Comunicación Digital",
    period: "2017"
  },
  {
    institution: "MOTT Centro de Especialización Digital",
    degree: "Diploma en Marketing Digital y Neuromarketing",
    period: "2017 - 2018"
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experiencia" className="py-20 bg-secondary/50">
      <div className="section-container">
        <AnimatedSection>
          <span className="inline-block px-3 py-1 mb-3 text-xs font-medium text-accent bg-accent/10 rounded-full">
            Trayectoria Profesional
          </span>
          <h2 className="mb-12">Mi experiencia y habilidades</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <AnimatedSection className="lg:col-span-2" delay={100}>
            <div className="space-y-10">
              {experiences.map((exp, index) => (
                <div key={exp.id} className="relative pl-8 border-l-2 border-accent/20">
                  <div className="absolute left-[-9px] top-0 h-4 w-4 rounded-full bg-accent"></div>
                  <div className="glass-panel rounded-xl p-6">
                    <div className="flex flex-wrap justify-between items-start mb-2">
                      <h3 className="text-xl font-medium">{exp.position}</h3>
                      <span className="text-sm text-muted-foreground">{exp.period}</span>
                    </div>
                    <div className="text-accent font-medium mb-4">{exp.company}</div>
                    <p className="mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight, idx) => (
                        <span 
                          key={idx} 
                          className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-left" delay={200}>
            <div className="glass-panel rounded-xl p-6">
              <h3 className="text-xl font-medium mb-6">Habilidades clave</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-accent">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-accent rounded-full transition-all duration-1000 ease-apple"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-border">
                <h4 className="font-medium mb-4">Educación</h4>
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <div key={index}>
                      <div className="text-foreground font-medium">{edu.institution}</div>
                      <div className="text-sm text-muted-foreground">{edu.degree}, {edu.period}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <h4 className="font-medium mb-4">Idiomas y Premios</h4>
                <div className="mb-4">
                  <div className="text-foreground font-medium">Idiomas</div>
                  <div className="text-sm text-muted-foreground">Español: Nativo o Bilingüe</div>
                  <div className="text-sm text-muted-foreground">Inglés: Profesional Completo</div>
                </div>
                <div>
                  <div className="text-foreground font-medium">Premios</div>
                  <div className="text-sm text-muted-foreground">Upper Third 2016</div>
                  <div className="text-sm text-muted-foreground">3er lugar en campeonato interuniversitario de escalada</div>
                  <div className="text-sm text-muted-foreground">3er lugar en Emprendimiento Social - Kseo</div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Experience;
