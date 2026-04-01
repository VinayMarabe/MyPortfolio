
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const { ref: sectionRef, isIntersecting: sectionVisible } = useIntersectionObserver({
    threshold: 0.1
  });

  const experiences = [
    {
      role: 'AIML intern',
      company: 'Thynk Tech India',
      duration: 'Nov 2025 - Apr 2026',
      description: [
        'Researched AI-driven features to enhance product capabilities and user engagement',
        'Designed and developed AI-powered solutions for EdTech platforms using modern ML approaches',
        'Integrated machine learning models into production workflows with engineering teams',
        'Contributed to experimentation and prototyping of GenAI-based features'
      ]
    },
    {
      role: 'Trainee',
      company: 'Vikramaa technologies',
      duration: 'Jul 2022 - Aug 2022',
      description: [
        'Completed industrial training in Advanced Java technologies',
        'Built foundational knowledge in Java, Swing, Servlets, and backend development',
        'Developed small-scale applications to understand software architecture and OOP concepts'
      ]
    }
  ];

  return (
    <section
      id="experience"
      ref={sectionRef as React.RefObject<HTMLDivElement>}
      className="py-24 bg-background border-t border-white/5"
    >
      <div className="container-padding">
        <div className="max-w-3xl mx-auto mb-16">
          <div className={`text-left lg:text-center ${sectionVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <span className="inline-block px-4 py-2 mb-4 text-sm font-mono tracking-wide text-primary bg-primary/10 rounded-full border border-primary/20">
              EXPERIENCE
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-8 tracking-tight text-foreground">
              My Professional <span className="text-primary">Journey</span>
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              Hands-on experience in AI/ML development and software engineering through
              internships and technical training.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative pl-8 border-l-2 border-white/10 ${sectionVisible ? `animate-fade-in [animation-delay:${200 + index * 100}ms]` : 'opacity-0 translate-y-8 transition-transform duration-500'
                  }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary ring-4 ring-background shadow-sm"></div>

                <div className="bg-card/40 border border-white/5 backdrop-blur-sm rounded-2xl p-8 card-hover duration-500 transition-all ease-[cubic-bezier(0.2,0.8,0.2,1)]">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{exp.role}</h3>
                      <div className="flex items-center gap-2 text-primary font-medium mt-1">
                        <Briefcase className="h-4 w-4" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className="mt-2 md:mt-0 px-4 py-2 bg-background/50 rounded-full font-mono text-sm tracking-wide text-muted-foreground border border-white/5">
                      {exp.duration}
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-foreground/70">
                        <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/60 flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
