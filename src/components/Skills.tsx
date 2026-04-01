
import { useEffect, useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { animateValue } from '../utils/animations';

const Skills = () => {
  const { ref: sectionRef, isIntersecting: sectionVisible } = useIntersectionObserver({
    threshold: 0.2
  });
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (sectionVisible && !animated) {
      setAnimated(true);
    }
  }, [sectionVisible, animated]);

  const skillCategories = [
    {
      title: 'GenAI & APIs',
      skills: [
        { name: 'RAG Pipelines', level: 95 },
        { name: 'Gemini API', level: 92 },
        { name: 'OpenAI API', level: 90 },
        { name: 'LangChain', level: 94 },
      ],
    },
    {
      title: 'Machine Learning',
      skills: [
        { name: 'Model Development', level: 92 },
        { name: 'Scikit-learn', level: 95 },
        { name: 'PyTorch', level: 88 },
        { name: 'Statistical Analysis', level: 85 },
      ],
    },
    {
      title: 'Programming',
      skills: [
        { name: 'Python', level: 98 },
        { name: 'FastAPI', level: 92 },
        { name: 'Java', level: 85 },
        { name: 'JavaScript', level: 88 },
      ],
    },
    {
      title: 'Data & Tools',
      skills: [
        { name: 'Pandas/NumPy', level: 95 },
        { name: 'SQL', level: 85 },
        { name: 'Git/GitHub', level: 92 },
        { name: 'Jupyter Notebook', level: 90 },
      ],
    },
  ];

  // Technical stack logos
  const techStack = [
    {
      category: 'Languages & Frameworks',
      items: [
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
        { name: 'LangChain', icon: 'https://raw.githubusercontent.com/langchain-ai/langchain/master/docs/static/img/langchain_logo.png' },
      ]
    },
    {
      category: 'ML & Data',
      items: [
        { name: 'PyTorch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
        { name: 'Scikit-learn', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg' },
        { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
        { name: 'NumPy', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
        { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      ]
    },
    {
      category: 'Tools & APIs',
      items: [
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
        { name: 'Jupyter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg' },
        { name: 'OpenAI', icon: 'https://static.cdnlogo.com/logos/o/38/openai.svg' },
        { name: 'Gemini', icon: 'https://www.gstatic.com/lamda/images/favicon_v1_150160d1398251fcf53.png' },
      ]
    }
  ];

  const SkillBar = ({ name, level, index }: { name: string; level: number; index: number }) => {
    const [currentLevel, setCurrentLevel] = useState(0);

    useEffect(() => {
      if (animated) {
        animateValue(0, level, 1000, setCurrentLevel);
      }
    }, [animated, level]);

    return (
      <div className={`mb-4 ${sectionVisible ? `animate-fade-in [animation-delay:${200 + index * 50}ms]` : 'opacity-0'}`}>
        <div className="flex justify-between mb-2">
          <span className="text-sm font-medium text-foreground tracking-wide">{name}</span>
          {/* Unmarked progress for premium aesthetic */}
        </div>
        <div className="h-1.5 w-full bg-card rounded-full overflow-hidden border border-white/5">
          <div
            className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${currentLevel}%` }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <section
      id="skills"
      ref={sectionRef as React.RefObject<HTMLDivElement>}
      className="py-24 bg-background border-t border-white/5"
    >
      <div className="container-padding">
        <div className="max-w-3xl mx-auto mb-16">
          <div className={`text-left lg:text-center ${sectionVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <span className="inline-block px-4 py-2 mb-4 text-sm font-mono tracking-wide text-primary bg-primary/10 rounded-full border border-primary/20">
              EXPERTISE
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-8 tracking-tight text-foreground">
              Technical <span className="text-primary block sm:inline">Proficiency</span>
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              A comprehensive overview of my technical skillset in AI/ML and related fields,
              developed through years of experience and continuous learning.
            </p>
          </div>
        </div>

        {/* Skill bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 max-w-5xl mx-auto mb-20">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex}>
              <h3 className={`text-xl font-bold mb-6 ${sectionVisible ? `animate-fade-in [animation-delay:${100 + catIndex * 100}ms]` : 'opacity-0'}`}>
                {category.title}
              </h3>
              <div>
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skillIndex}
                    name={skill.name}
                    level={skill.level}
                    index={skillIndex + (catIndex * 4)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech stack logos */}
        <div className={`max-w-5xl mx-auto ${sectionVisible ? 'animate-fade-in [animation-delay:800ms]' : 'opacity-0'}`}>
          <h3 className="font-display text-3xl font-bold text-center mb-16 text-foreground">Technical Stack</h3>

          {techStack.map((category, catIndex) => (
            <div key={catIndex} className="mb-12">
              <h4 className="text-center text-lg font-medium text-foreground/80 mb-6">{category.category}</h4>
              <div className="flex flex-wrap justify-center gap-8">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex flex-col items-center">
                    <div className="w-12 h-12 mb-2">
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-sm text-foreground/70">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
