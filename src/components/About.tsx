
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Brain, Code, ServerIcon, Layers } from 'lucide-react';

const About = () => {
  const { ref: sectionRef, isIntersecting: sectionVisible } = useIntersectionObserver({
    threshold: 0.1
  });

  const services = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: 'Machine Learning',
      description: 'End-to-end ML solutions from data preprocessing to model deployment and monitoring.',
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: 'AI Development',
      description: 'Custom AI algorithms and applications tailored to your specific business needs.',
    },
    {
      icon: <ServerIcon className="h-8 w-8" />,
      title: 'Data Engineering',
      description: 'Scalable data pipelines and infrastructure for AI/ML workflows.',
    },
    {
      icon: <Layers className="h-8 w-8" />,
      title: 'Deep Learning',
      description: 'Neural network architecture design and optimization for complex tasks.',
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef as React.RefObject<HTMLDivElement>}
      className="py-24 bg-background"
    >
      <div className="container-padding">
        <div className="max-w-3xl mx-auto mb-16">
          <div className={`text-left lg:text-center ${sectionVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <span className="inline-block px-4 py-2 mb-4 text-sm font-mono tracking-wide text-primary bg-primary/10 rounded-full border border-primary/20">
              ABOUT ME
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-8 tracking-tight text-foreground">
              Transforming Ideas Into <span className="text-primary block sm:inline">AI Solutions</span>
            </h2>
            <p className="text-foreground/80 leading-relaxed max-w-2xl mx-auto">
              Detail-oriented AI/ML developer with hands-on experience in Generative AI, NLP,
              and full-stack AI systems. Skilled in building intelligent, user-centric
              applications using RAG pipelines, LLM APIs, and machine learning models.
              Proven ability to design scalable AI solutions including recruitment platforms,
              audiobook generation systems, and real-time automation bots.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-card/40 border border-white/5 backdrop-blur-sm rounded-2xl p-8 card-hover duration-500 transition-all ease-[cubic-bezier(0.2,0.8,0.2,1)] ${sectionVisible ? `animate-fade-in [animation-delay:${200 + index * 100}ms]` : 'opacity-0 translate-y-8'
                }`}
            >
              <div className="bg-background/80 h-16 w-16 rounded-xl flex items-center justify-center text-primary border border-white/10 mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-foreground/70">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div
          className={`mt-32 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center max-w-5xl mx-auto ${sectionVisible ? 'animate-fade-in [animation-delay:600ms]' : 'opacity-0'
            }`}
        >
          {[
            { metric: "1+", label: "Year Experience" },
            { metric: "4+", label: "Major Projects" },
            { metric: "10+", label: "ML Models Deployed" },
            { metric: "B.Tech", label: "AIML Engineering" }
          ].map((stat, i) => (
            <div key={i} className="group/stat p-8 rounded-2xl bg-card/20 border border-white/5 backdrop-blur-sm hover:bg-card/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_8px_30px_-10px_rgba(255,255,255,0.05)]">
              <div className="font-display text-4xl sm:text-5xl font-bold text-primary mb-3 transition-transform duration-500 group-hover/stat:scale-110 group-hover/stat:-translate-y-1">{stat.metric}</div>
              <div className="font-sans text-sm tracking-wider text-muted-foreground uppercase transition-colors group-hover/stat:text-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
