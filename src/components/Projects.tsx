
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const { ref: sectionRef, isIntersecting: sectionVisible } = useIntersectionObserver({
    threshold: 0.1
  });

  const projects = [
    {
      title: 'ASD Detection Project',
      description: 'Sponsored by Mass Technology Solutions. Led end-to-end pipeline design for ASD classification using resting-state fMRI data (ABIDE dataset) with hybrid ML models.',
      tags: ['Python', 'Machine Learning', 'fMRI Data', 'SSAE + SVM'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      liveLink: '#',
      codeLink: '#',
    },
    {
      title: 'CareerAI',
      description: 'AI-powered recruitment platform using RAG + LLMs for resume parsing, candidate evaluation, and adaptive mock interviews with real-time scoring.',
      tags: ['RAG', 'LLMs', 'LangChain', 'React'],
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      liveLink: '#',
      codeLink: '#',
    },
    {
      title: 'SonicLens v1',
      description: 'Advanced AI audiobook generator using Gemini API with LLM-based chunking for speaker detection and a multi-voice TTS pipeline.',
      tags: ['Gemini API', 'TTS', 'FastAPI', 'React'],
      image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      liveLink: '#',
      codeLink: '#',
    },
    {
      title: 'News Summarizer WhatsApp Bot',
      description: 'Automated bot that fetches headlines from GNews, summarizes them using Google Gemini via LangChain, and delivers digests to WhatsApp.',
      tags: ['Gemini', 'LangChain', 'Twilio', 'Python'],
      image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      liveLink: '#',
      codeLink: '#',
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef as React.RefObject<HTMLDivElement>}
      className="py-24 bg-background border-t border-white/5"
    >
      <div className="container-padding">
        <div className="max-w-3xl mx-auto mb-16">
          <div className={`text-left lg:text-center ${sectionVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <span className="inline-block px-4 py-2 mb-4 text-sm font-mono tracking-wide text-primary bg-primary/10 rounded-full border border-primary/20">
              PROJECTS
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-8 tracking-tight text-foreground">
              Featured <span className="text-primary block sm:inline">AI/ML Works</span>
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              A showcase of my recent work in artificial intelligence and machine learning,
              demonstrating practical applications across various domains.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`rounded-2xl overflow-hidden bg-card/40 border border-white/5 backdrop-blur-sm group card-hover duration-500 transition-all ease-[cubic-bezier(0.2,0.8,0.2,1)] ${sectionVisible ? `animate-fade-in [animation-delay:${200 + index * 100}ms]` : 'opacity-0 translate-y-8'
                }`}
            >
              <div className="h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-foreground">{project.title}</h3>
                <p className="text-muted-foreground text-base mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-3 py-1.5 rounded-md bg-background/50 text-muted-foreground border border-white/5 font-mono tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.liveLink && project.liveLink !== '#' && (
                    <a
                      href={project.liveLink}
                      className="group/link text-sm flex items-center gap-1.5 text-primary hover:text-primary/80 transition-all duration-300 hover:tracking-wide font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform duration-300" />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {project.codeLink && project.codeLink !== '#' && (
                    <a
                      href={project.codeLink}
                      className="group/link text-sm flex items-center gap-1.5 text-primary hover:text-primary/80 transition-all duration-300 hover:tracking-wide font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform duration-300" />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 ${sectionVisible ? 'animate-fade-in [animation-delay:600ms]' : 'opacity-0'}`}>
          <a
            href="https://github.com/VinayMarabe"
            className="button-primary inline-flex items-center gap-2 group/btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub Profile
            <ExternalLink className="h-4 w-4 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
