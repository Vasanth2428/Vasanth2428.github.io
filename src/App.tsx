import React, { useState, useEffect } from 'react';
import ParticleBackground from './components/ParticleBackground';
import Counter from './components/Counter';

// Define project interface
interface Project {
  title: string;
  subtitle: string;
  desc: string;
  tags: string[];
  github: string;
  icon: string;
}

// Define experience interface
interface Experience {
  role: string;
  company: string;
  duration: string;
  bullets: string[];
}

// Define achievement interface
interface Achievement {
  title: string;
  subtitle: string;
  icon: string;
}

// Define certification interface
interface Certification {
  title: string;
  issuer: string;
  icon: string;
  score?: string;
}

const App: React.FC = () => {
  // Mobile Nav Toggle State
  const [navOpen, setNavOpen] = useState(false);
  // Scrolled State for Navbar styling
  const [scrolled, setScrolled] = useState(false);
  // Active Section for Navbar highlighters
  const [activeSection, setActiveSection] = useState('hero');

  // Handle Form State
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Scroll event listener for Navbar background
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver for active section highlighting and reveal effects
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const reveals = document.querySelectorAll('.reveal');

    // Section Observer
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-20% 0px -60% 0px' }
    );

    // Reveal Observer
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target); // Animates once
          }
        });
      },
      { threshold: 0.12 }
    );

    sections.forEach((s) => sectionObserver.observe(s));
    reveals.forEach((r) => revealObserver.observe(r));

    return () => {
      sections.forEach((s) => sectionObserver.unobserve(s));
      reveals.forEach((r) => revealObserver.unobserve(r));
    };
  }, []);

  // Handle submit contact form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 4000);
  };

  // Content Data definitions based on updated resume
  const projectsData: Project[] = [
    {
      title: 'Agentic Code Intelligence System',
      subtitle: 'Multi-Agent Code Architect',
      desc: 'LangGraph + LangChain multi-agent orchestrator for codebase analysis, security auditing, and document retrieval. Implements neural reranking, HyDE query expansion, token-budget context compression, and a SHA-256 append-only hash chain ledger for tamper-evident tracking.',
      tags: ['LangGraph', 'LangChain', 'FastAPI', 'Weaviate', 'SentenceTransformers', 'SQLite'],
      github: 'https://github.com/Vasanth2428/MyAgent01',
      icon: 'fa-solid fa-robot'
    },
    {
      title: 'CogniCam',
      subtitle: 'Urban Video Analytics',
      desc: 'YOLOv8n + BoT-SORT computer vision pipeline (30+ FPS, CPU-only) with custom IntelligenceHead abstraction decoupling traffic flow, collision, anomaly, and crowd density modules. Applies CLAHE preprocessing for degraded 240p-480p CCTV feeds.',
      tags: ['YOLOv8', 'BoT-SORT', 'Python', 'FastAPI', 'WebSockets', 'React + TS'],
      github: 'https://github.com/Vasanth2428/Cognicam',
      icon: 'fa-solid fa-video'
    },
    {
      title: 'HaoMun',
      subtitle: 'CP Analytics Platform',
      desc: 'Next.js 15 App Router + MongoDB full-stack dashboard featuring multi-source aggregation via LeetCode GraphQL, Codeforces REST, and CodeChef scraping. Computes custom CP score and integrates Gemini 1.5 for AI skill-gap analysis.',
      tags: ['Next.js 15', 'MongoDB', 'Gemini 1.5', 'GraphQL', 'TypeScript', 'Node.js'],
      github: 'https://github.com/Vasanth2428/HaoMun_1',
      icon: 'fa-solid fa-chart-line'
    }
  ];

  const experienceData: Experience[] = [
    {
      role: 'AI Systems Engineer Intern',
      company: 'AppHelix Technologies',
      duration: 'May – Jun 2026 (45 days)',
      bullets: [
        'Architected a production-grade multi-agent RAG engine (FastAPI + LangGraph) with supervisor-worker orchestration, enabling dynamic routing to specialized agents for document retrieval, web scraping, and code generation.',
        'Developed a hybrid retrieval pipeline using Weaviate vector search + FlashRank reranking, integrating a human-in-the-loop (HITL) authorization gate for file modifications.',
        'Implemented real-time Server-Sent Events (SSE) streaming and SQLite-backed conversational checkpointing for cross-session state persistence.'
      ]
    },
    {
      role: 'Web Development Intern',
      company: 'Adinn Digitals',
      duration: '1 Month',
      bullets: [
        'Built and deployed interactive client-facing web interfaces in a production workflow, gaining hands-on experience with agile development processes and web standards.'
      ]
    }
  ];

  const achievementsData: Achievement[] = [
    {
      title: 'National Hackathon 2nd Prize',
      subtitle: 'IEEE SB MITS',
      icon: '🏆'
    },
    {
      title: 'Track Winner',
      subtitle: 'NXTGEN Hackathon (Healthcare Track)',
      icon: '🥇'
    },
    {
      title: '15x Hackathon Finalist',
      subtitle: 'Consistent performer across national level hackathons',
      icon: '🎯'
    },
    {
      title: '350+ LeetCode Solved',
      subtitle: 'Strong DSA foundations in Arrays, DP, and Trees',
      icon: '💻'
    }
  ];

  const certificationsData: Certification[] = [
    {
      title: 'Introduction to Data Science, IoT & Cybersecurity',
      issuer: 'Cisco',
      icon: 'fa-solid fa-network-wired'
    },
    {
      title: 'CCNA: Introduction to Networks',
      issuer: 'Cisco',
      icon: 'fa-solid fa-server'
    },
    {
      title: 'Introduction to IoT',
      issuer: 'NPTEL',
      icon: 'fa-solid fa-microchip',
      score: '75%'
    },
    {
      title: 'Anthropic Learn',
      issuer: 'Anthropic',
      icon: 'fa-solid fa-brain'
    }
  ];

  return (
    <>
      {/* Noise overlay & Grid */}
      <div className="noise-overlay" />
      <div className="grid-bg" />

      {/* ===== NAVBAR ===== */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
        <div className="nav-container">
          <a href="#hero" className="nav-logo">&lt;VK /&gt;</a>
          <button 
            className={`nav-toggle ${navOpen ? 'open' : ''}`} 
            onClick={() => setNavOpen(!navOpen)}
            aria-label="Toggle navigation"
          >
            <span />
            <span />
            <span />
          </button>
          <ul className={`nav-links ${navOpen ? 'open' : ''}`}>
            <li>
              <a 
                href="#about" 
                className={activeSection === 'about' ? 'active' : ''}
                onClick={() => setNavOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                className={activeSection === 'projects' ? 'active' : ''}
                onClick={() => setNavOpen(false)}
              >
                Projects
              </a>
            </li>
            <li>
              <a 
                href="#experience" 
                className={activeSection === 'experience' ? 'active' : ''}
                onClick={() => setNavOpen(false)}
              >
                Experience
              </a>
            </li>
            <li>
              <a 
                href="#skills" 
                className={activeSection === 'skills' ? 'active' : ''}
                onClick={() => setNavOpen(false)}
              >
                Skills
              </a>
            </li>
            <li>
              <a 
                href="#achievements" 
                className={activeSection === 'achievements' ? 'active' : ''}
                onClick={() => setNavOpen(false)}
              >
                Achievements
              </a>
            </li>
            <li>
              <a 
                href="#certifications" 
                className={activeSection === 'certifications' ? 'active' : ''}
                onClick={() => setNavOpen(false)}
              >
                Certifications
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className={activeSection === 'contact' ? 'active' : ''}
                onClick={() => setNavOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="hero" id="hero">
        <ParticleBackground />
        <div className="aurora-blobs">
          <div className="aurora-blob blob-1" />
          <div className="aurora-blob blob-2" />
          <div className="aurora-blob blob-3" />
        </div>
        
        <div className="hero-content">
          <div className="hero-status">
            <span className="status-dot" />
            Specializing in RAG &amp; Agentic AI
          </div>
          <p className="hero-greeting">Hi, I'm</p>
          <h1 className="hero-name">
            <span className="name-line">Vasanthavel</span>
            <span className="name-line accent">K<span className="cursor-blink">_</span></span>
          </h1>
          <p className="hero-role">
            AI Systems Engineer <span className="role-divider">/</span> B.E CSE @ CIT (2024 - 2028) <span className="role-divider">/</span> 15x Hackathon Finalist
          </p>
          <p className="hero-tagline">
            Building production-grade multi-agent systems, neural retrieval engines, and CPU-efficient computer vision systems.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              <i className="fas fa-rocket" /> View Projects
            </a>
            <a href="/Resume_Vasanthavel.docx" className="btn btn-outline" download>
              <i className="fas fa-download" /> Download Resume
            </a>
          </div>
          <div className="hero-socials">
            <a href="https://github.com/Vasanth2428" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github" />
            </a>
            <a href="https://linkedin.com/in/vasanthavelk" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin" />
            </a>
            <a href="mailto:velson2022@gmail.com" aria-label="Email">
              <i className="fas fa-envelope" />
            </a>
            <a href="https://www.credly.com/users/vasanthavel-k" target="_blank" rel="noopener noreferrer" aria-label="Credly">
              <i className="fas fa-award" />
            </a>
            <a href="https://leetcode.com/vasanth246" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
              <i className="fas fa-code" />
            </a>
          </div>
        </div>

        <a href="#about" className="scroll-indicator" aria-label="Scroll down">
          <div className="scroll-line" />
          <span>scroll</span>
        </a>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="section" id="about">
        <div className="container">
          <h2 className="section-title reveal">
            <span className="section-tag">&lt;about&gt;</span> About Me
          </h2>
          <div className="about-grid reveal">
            <div className="about-text">
              <p>
                I am a <strong>Computer Science &amp; Engineering student</strong> at <strong>Chennai Institute of Technology</strong> (Class of 2028), focusing on <strong>Agentic Systems, Neural Information Retrieval (RAG), and Computer Vision</strong>.
              </p>
              <p>
                As an <strong>AI Systems Engineer Intern at AppHelix Technologies</strong>, I architected and built complex, enterprise-ready multi-agent systems with LangGraph. I thrive on building secure, robust, and highly optimized architectures — combining edge computer vision models with real-time websocket pipelines.
              </p>
              <p>
                With <strong>350+ LeetCode problems solved</strong> and a strong track record as a <strong>15x National Hackathon Finalist</strong>, I bring rigorous problem-solving and software engineering practices to all AI systems I develop.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat-card">
                <Counter end={350} suffix="+" />
                <span className="stat-label">LeetCode Solved</span>
              </div>
              <div className="stat-card">
                <Counter end={15} suffix="x" />
                <span className="stat-label">Hackathon Finalist</span>
              </div>
              <div className="stat-card">
                <Counter end={4} suffix="+" />
                <span className="stat-label">Core Projects</span>
              </div>
              <div className="stat-card">
                <Counter end={2} />
                <span className="stat-label">Internships</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section className="section section-alt" id="projects">
        <div className="container">
          <h2 className="section-title reveal">
            <span className="section-tag">&lt;projects&gt;</span> Featured Projects
          </h2>
          <div className="projects-grid">
            {projectsData.map((project, idx) => (
              <div className="project-card reveal" key={idx}>
                <div className="project-icon">
                  <i className={project.icon} />
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                <p className="project-desc">{project.desc}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx}>{tag}</span>
                  ))}
                </div>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link"
                >
                  <i className="fab fa-github" /> View on GitHub
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EXPERIENCE ===== */}
      <section className="section" id="experience">
        <div className="container">
          <h2 className="section-title reveal">
            <span className="section-tag">&lt;experience&gt;</span> Work History
          </h2>
          <div className="timeline reveal">
            {experienceData.map((exp, idx) => (
              <div className="timeline-item" key={idx}>
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <div className="timeline-header">
                    <div>
                      <h3 className="timeline-title">{exp.role}</h3>
                      <p className="timeline-company">{exp.company}</p>
                    </div>
                    <span className="timeline-duration">{exp.duration}</span>
                  </div>
                  <ul className="timeline-bullets">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SKILLS ===== */}
      <section className="section section-alt" id="skills">
        <div className="container">
          <h2 className="section-title reveal">
            <span className="section-tag">&lt;skills&gt;</span> Technical Skillset
          </h2>
          <div className="skills-wrapper reveal">
            <div className="skill-category">
              <h3>
                <i className="fa-solid fa-brain" /> AI &amp; Systems
              </h3>
              <div className="skill-pills">
                <span className="skill-pill">LangGraph</span>
                <span className="skill-pill">LangChain</span>
                <span className="skill-pill">FastAPI</span>
                <span className="skill-pill">Weaviate</span>
                <span className="skill-pill">FlashRank</span>
                <span className="skill-pill">SentenceTransformers</span>
                <span className="skill-pill">RAG</span>
                <span className="skill-pill">SSE streaming</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>
                <i className="fa-solid fa-code" /> Languages &amp; Frontend
              </h3>
              <div className="skill-pills">
                <span className="skill-pill">Next.js 15</span>
                <span className="skill-pill">React</span>
                <span className="skill-pill">TypeScript</span>
                <span className="skill-pill">Tailwind CSS</span>
                <span className="skill-pill">Radix UI</span>
                <span className="skill-pill">Python</span>
                <span className="skill-pill">JavaScript</span>
                <span className="skill-pill">C++</span>
                <span className="skill-pill">Java</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>
                <i className="fa-solid fa-toolbox" /> Databases &amp; Tools
              </h3>
              <div className="skill-pills">
                <span className="skill-pill">MongoDB</span>
                <span className="skill-pill">PostgreSQL</span>
                <span className="skill-pill">SQLite</span>
                <span className="skill-pill">Git</span>
                <span className="skill-pill">Docker <small>(learning)</small></span>
                <span className="skill-pill">Linux <small>(learning)</small></span>
                <span className="skill-pill">Postman</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ACHIEVEMENTS ===== */}
      <section className="section" id="achievements">
        <div className="container">
          <h2 className="section-title reveal">
            <span className="section-tag">&lt;achievements&gt;</span> Honors &amp; Achievements
          </h2>
          <div className="achievements-grid">
            {achievementsData.map((ach, idx) => (
              <div className="achievement-card reveal" key={idx}>
                <div className="achievement-icon">{ach.icon}</div>
                <div className="achievement-content">
                  <h3>{ach.title}</h3>
                  <p>{ach.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CERTIFICATIONS ===== */}
      <section className="section section-alt" id="certifications">
        <div className="container">
          <h2 className="section-title reveal">
            <span className="section-tag">&lt;certs&gt;</span> Certifications
          </h2>
          <div className="certs-grid">
            {certificationsData.map((cert, idx) => (
              <div className="cert-card reveal" key={idx}>
                <div className="cert-logo">
                  <i className={cert.icon} />
                </div>
                <div className="cert-info">
                  <h3>{cert.title}</h3>
                  <p className="cert-issuer">
                    {cert.issuer} {cert.score && <span className="cert-score">• Score: {cert.score}</span>}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="credly-cta reveal">
            <a 
              href="https://www.credly.com/users/vasanthavel-k" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-outline"
            >
              <i className="fas fa-award" /> View All Badges on Credly
            </a>
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section className="section" id="contact">
        <div className="container">
          <h2 className="section-title reveal">
            <span className="section-tag">&lt;contact&gt;</span> Get In Touch
          </h2>
          <p className="contact-subtitle reveal">
            I am always open to discussing RAG orchestration, multi-agent systems, AI optimization, and full-stack projects.
          </p>
          <div className="contact-grid reveal">
            <a href="mailto:velson2022@gmail.com" className="contact-card">
              <i className="fas fa-envelope" />
              <span>velson2022@gmail.com</span>
            </a>
            <a href="https://linkedin.com/in/vasanthavelk" target="_blank" rel="noopener noreferrer" className="contact-card">
              <i className="fab fa-linkedin" />
              <span>linkedin/in/vasanthavelk</span>
            </a>
            <a href="https://github.com/Vasanth2428" target="_blank" rel="noopener noreferrer" className="contact-card">
              <i className="fab fa-github" />
              <span>github/Vasanth2428</span>
            </a>
            <a href="https://leetcode.com/vasanth246" target="_blank" rel="noopener noreferrer" className="contact-card">
              <i className="fas fa-code" />
              <span>leetcode/vasanth246</span>
            </a>
          </div>

          <div className="contact-form-container reveal">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="form-input" 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="form-input" 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  className="form-input" 
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hi Vasanth, let's collaborate on..."
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                {isSubmitted ? 'Message Sent! (Simulated)' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Vasanthavel K. Built with React &amp; Vite.</p>
        </div>
      </footer>
    </>
  );
};

export default App;
