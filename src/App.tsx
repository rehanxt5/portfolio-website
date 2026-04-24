import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import './index.css'

// Custom scroll reveal component
function ScrollReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }
        }
      }}
    >
      {children}
    </motion.div>
  )
}

// Hero Section
function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  
  return (
    <section className="min-h-screen relative overflow-hidden flex items-center">
      {/* Animated background */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ y }}
      >
        <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-blue-100/40 blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-40 right-20 w-[500px] h-[500px] rounded-full bg-indigo-50/50 blur-3xl animate-pulse-soft" style={{ animationDelay: '2s' }} />
        
        {/* Grid pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" width="100%" height="100%">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#000" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </motion.div>
      
      <div className="container mx-auto px-6 py-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-block text-sm font-medium text-blue-700 tracking-wider uppercase mb-6"
          >
            Computer Science Undergraduate
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold text-slate-900 leading-tight mb-6"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Rehan <span className="text-blue-700">Akhtar</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-slate-600 mb-4 font-medium"
          >
            AI, ML, Backend & AI Systems Builder
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg text-slate-500 max-w-xl mb-10 leading-relaxed"
          >
            I build real-world AI systems, intelligent pipelines, and robust backend architectures. 
            Turning complex problems into elegant, production-ready solutions.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <a 
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-700 text-white font-medium rounded-full hover:bg-blue-800 transition-all duration-300 hover:shadow-lg hover:shadow-blue-700/25"
            >
              View Projects
            </a>
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-slate-200 text-slate-700 font-medium rounded-full hover:border-blue-700 hover:text-blue-700 transition-all duration-300"
            >
              Contact Me
            </a>
          </motion.div>
          
          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex items-center gap-6 mt-12"
          >
            <a 
              href="https://github.com/rehanxt5" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-700 transition-colors text-2xl"
            >
              <FaGithub />
            </a>
            <a 
              href="https://linkedin.com/in/rehan-akhtar-715603385" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-700 transition-colors text-2xl"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://leetcode.com/u/wtIv1QjUXU/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-700 transition-colors text-2xl"
            >
              <SiLeetcode />
            </a>
            <a 
              href="mailto:rehan.xt5@gmail.com"
              className="text-slate-400 hover:text-blue-700 transition-colors text-2xl"
            >
              <FaEnvelope />
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-slate-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}

// About Section
function About() {
  return (
    <section id="about" className="py-32 bg-slate-50/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center gap-2 mb-8">
              <div className="w-12 h-[1px] bg-blue-700" />
              <span className="text-sm font-medium text-blue-700 uppercase tracking-wider">About</span>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight" style={{ fontFamily: '"Playfair Display", serif' }}>
              Building systems that <span className="text-blue-700">actually work</span> in the real world
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <div className="space-y-6 text-slate-600 max-w-2xl">
              <p className="text-lg leading-relaxed">
                I&apos;m a Computer Science undergraduate at Polaris School of Technology, Bengaluru, 
                specializing in Artificial Intelligence and Machine Learning.
              </p>
              <p className="text-lg leading-relaxed">
                Beyond theory, I love building <span className="text-slate-900 font-medium">practical systems</span> — whether it&apos;s 
                RAG architectures, AI agents, ML pipelines, or scalable backend services. I believe the best 
                solutions come from understanding both the fundamentals and the real constraints of production systems.
              </p>
              <p className="text-lg leading-relaxed">
                Currently focused on <span className="text-slate-900 font-medium">NotewiseAI</span>, an AI-powered 
                document copilot, while exploring the frontiers of AI agents, retrieval systems, and intelligent automation.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

// Skills Section
function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "JavaScript", "C++ (Basic)"]
    },
    {
      title: "Frameworks & Tools",
      skills: ["FastAPI", "Node.js", "Express.js", "React", "Flask (Basic)"]
    },
    {
      title: "AI & ML",
      skills: ["NumPy", "Pandas", "Scikit-learn", "OpenAI API", "LLMs", "RAG Systems"]
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Supabase", "Redis"]
    },
    {
      title: "Core Skills",
      skills: ["Data Structures & Algorithms", "REST APIs", "AI Agents", "Selenium Automation", "Git"]
    }
  ]
  
  return (
    <section id="skills" className="py-32">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="flex items-center gap-2 mb-12">
            <div className="w-12 h-[1px] bg-blue-700" />
            <span className="text-sm font-medium text-blue-700 uppercase tracking-wider">Skills</span>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-16" style={{ fontFamily: '"Playfair Display", serif' }}>
            My Toolkit
          </h2>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <ScrollReveal key={category.title} delay={0.1 + index * 0.1}>
              <motion.div 
                whileHover={{ y: -4 }}
                className="p-6 bg-white border border-slate-100 rounded-2xl"
              >
                <h3 className="text-lg font-semibold text-slate-900 mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1.5 bg-slate-50 text-slate-600 text-sm font-medium rounded-full border border-slate-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// Projects Section
function Projects() {
  const projects = [
    {
      id: 1,
      title: "NotewiseAI",
      subtitle: "AI-Native Document Copilot",
      description: "An AI-powered document copilot that enables users to interact with PDFs and notes through intelligent, context-aware conversations.",
      tech: ["Python", "FastAPI", "PostgreSQL", "Redis", "Celery", "React", "RAG", "AI Agents"],
      highlights: [
        "Built scalable document processing pipeline to parse PDFs, including scanned and handwritten documents using LlamaParse",
        "Designed agentic RAG architecture with query routing (conversation, fast retrieval, deep search)",
        "Implemented hierarchical chunking with metadata-driven indexing for precision retrieval",
        "Developed multi-step retrieval workflows for tables, code blocks, lists, and sections",
        "Built backend with FastAPI, Supabase (PostgreSQL), Redis, and Celery for async processing",
        "Integrated LLM reasoning with retrieval for query decomposition and context-aware responses",
        "Developing quiz generation, flashcards, summaries, and audio outputs"
      ],
      featured: true,
      github: "https://github.com/rehanxt5/notewiseai"
    },
    {
      id: 2,
      title: "IntelliDash",
      subtitle: "AI-Powered Student Insights",
      description: "A data-driven analytics system designed to predict student performance and identify dropout risk using machine learning models.",
      tech: ["Python", "Scikit-learn", "Pandas"],
      highlights: [
        "Developed end-to-end ML pipeline: preprocessing, feature engineering, model training, evaluation",
        "Implemented Random Forest for dropout prediction and Linear Regression for performance forecasting",
        "Applied train-test split and evaluation metrics to assess model performance",
        "Enabled early identification of at-risk students through predictive modeling"
      ],
      featured: false,
      github: "https://github.com/rehanxt5/intellidash"
    },
    {
      id: 3,
      title: "Cattle-Buffalo Breed Recognition",
      subtitle: "Deep Learning Image Classification (SIH Project)",
      description: "A deep learning model to classify cattle breeds and reduce manual identification errors in agricultural settings.",
      tech: ["Python", "Deep Learning", "EfficientNet"],
      highlights: [
        "Built deep learning model to classify cattle breeds with high accuracy",
        "Fine-tuned EfficientNet on custom dataset for improved classification",
        "Designed end-to-end pipeline for image processing and prediction"
      ],
      featured: false,
      github: null
    },
    {
      id: 4,
      title: "SIR Model Simulator",
      subtitle: "Stochastic Modeling & Simulation",
      description: "A stochastic simulation of the Susceptible-Infected-Removed epidemiological model to study disease spread dynamics.",
      tech: ["Python", "Stochastic Modeling"],
      highlights: [
        "Implemented stochastic simulation of the SIR model",
        "Modeled disease spread dynamics using probabilistic methods"
      ],
      featured: false,
      github: null
    }
  ]
  
  return (
    <section id="projects" className="py-32 bg-slate-50/30">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="flex items-center gap-2 mb-12">
            <div className="w-12 h-[1px] bg-blue-700" />
            <span className="text-sm font-medium text-blue-700 uppercase tracking-wider">Projects</span>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-16" style={{ fontFamily: '"Playfair Display", serif' }}>
            Selected Work
          </h2>
        </ScrollReveal>
        
        <div className="space-y-24">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={0.2 + index * 0.1}>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`flex flex-col ${index % 2 === 1 && !project.featured ? 'lg:flex-row-reverse' : ''} ${project.featured ? 'lg:flex-row' : ''} gap-12 items-start`}
              >
                {/* Project Card */}
                <div className={`flex-1 w-full ${project.featured ? '' : index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <motion.div 
                    whileHover={{ y: -8 }}
                    className={`h-full p-8 bg-white rounded-3xl border border-slate-100 ${project.featured ? 'ring-2 ring-blue-100' : ''}`}
                  >
                    {project.featured && (
                      <span className="inline-block px-3 py-1 bg-blue-700 text-white text-xs font-semibold uppercase tracking-wider rounded-full mb-6">
                        Featured
                      </span>
                    )}
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2" style={{ fontFamily: '"Playfair Display", serif' }}>
                      {project.title}
                    </h3>
                    <p className="text-blue-700 font-medium mb-4">{project.subtitle}</p>
                    
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Tech badges */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1.5 bg-slate-50 text-slate-600 text-sm rounded-full border border-slate-100"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Key highlights */}
                    <div className="space-y-3 mb-8">
                      <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">Key Highlights</h4>
                      <ul className="space-y-2">
                        {project.highlights.slice(0, 3).map((highlight, i) => (
                          <li key={i} className="flex items-start gap-3 text-slate-600">
                            <span className="w-1.5 h-1.5 bg-blue-700 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* GitHub link */}
                    {project.github && (
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-700 font-medium hover:gap-3 transition-all"
                      >
                        <FaGithub className="text-xl" />
                        View on GitHub
                        <FaExternalLinkAlt className="text-sm" />
                      </a>
                    )}
                  </motion.div>
                </div>
                
                {/* Decorative element for featured */}
                {project.featured && (
                  <div className="hidden lg:flex lg:w-1/3 relative h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl transform rotate-3" />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-20 h-20 mx-auto mb-4 bg-blue-700 rounded-2xl flex items-center justify-center">
                          <span className="text-3xl text-white font-bold">AI</span>
                        </div>
                        <p className="text-slate-600 text-sm">Under Active<br />Development</p>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// Education Section
function Education() {
  const education = [
    {
      institution: "Polaris School of Technology, Bengaluru",
      period: "2025 to 2029",
      degree: "B.Tech in Computer Science (AI & ML)",
      grade: "CGPA 9.0",
      status: "First Year"
    },
    {
      institution: "Kendriya Vidyalaya No.1 AFS Agra",
      period: "2024 to 2025",
      degree: "Intermediate (Class XII)",
      grade: "90.6%",
      status: ""
    },
    {
      institution: "Kendriya Vidyalaya AFS Avadi, Chennai",
      period: "2022 to 2023",
      degree: "Matriculation (Class X)",
      grade: "93.8%",
      status: ""
    }
  ]
  
  return (
    <section id="education" className="py-32">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="flex items-center gap-2 mb-12">
            <div className="w-12 h-[1px] bg-blue-700" />
            <span className="text-sm font-medium text-blue-700 uppercase tracking-wider">Education</span>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-16" style={{ fontFamily: '"Playfair Display", serif' }}>
            Academic Journey
          </h2>
        </ScrollReveal>
        
        <div className="space-y-6">
          {education.map((edu, index) => (
            <ScrollReveal key={edu.institution} delay={0.2 + index * 0.1}>
              <motion.div 
                whileHover={{ x: 4 }}
                className="flex flex-col md:flex-row md:items-center justify-between p-8 bg-white border border-slate-100 rounded-2xl hover:border-blue-100 transition-colors"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-900 mb-1">{edu.institution}</h3>
                  <p className="text-slate-500">{edu.degree}</p>
                </div>
                <div className="flex items-center gap-8 mt-4 md:mt-0">
                  <span className="text-slate-600 font-medium">{edu.period}</span>
                  <span className="text-xl font-bold text-blue-700">{edu.grade}</span>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// Contact Section
function Contact() {
  const socialLinks = [
    { name: "GitHub", url: "https://github.com/rehanxt5", icon: FaGithub },
    { name: "LinkedIn", url: "https://linkedin.com/in/rehan-akhtar-715603385", icon: FaLinkedin },
    { name: "LeetCode", url: "https://leetcode.com/u/wtIv1QjUXU/", icon: SiLeetcode },
    { name: "Email", url: "mailto:rehan.xt5@gmail.com", icon: FaEnvelope }
  ]
  
  return (
    <section id="contact" className="py-32 bg-slate-900">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-medium text-blue-400 uppercase tracking-wider mb-6">Contact</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8" style={{ fontFamily: '"Playfair Display", serif' }}>
              Let&apos;s Build Something together
            </h2>
            <p className="text-xl text-slate-400 max-w-xl mx-auto">
              Always excited to discuss new projects, AI ideas, or opportunities to collaborate on innovative systems.
            </p>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            {socialLinks.map((link) => (
              <a 
                key={link.name}
                href={link.url}
                target={link.name === "Email" ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-slate-800 text-white rounded-full hover:bg-blue-700 transition-all duration-300"
              >
                <link.icon className="text-xl" />
                {link.name}
              </a>
            ))}
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={0.3}>
          <div className="text-center">
            <p className="text-slate-500 mb-4">
              rehan.xt5@gmail.com
            </p>
            <p className="text-slate-600">
              Based in Bengaluru, India
            </p>
          </div>
        </ScrollReveal>
        
        {/* Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-slate-500 text-sm">
            © 2025 Rehan Akhtar. Built with passion and lots of ☕
          </p>
          <p className="text-slate-600 text-sm">
            Computer Science Undergraduate
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// Main App
function App() {
  const [activeSection, setActiveSection] = useState("")
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "projects", "education", "contact"]
      const scrollPosition = window.scrollY + 100
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const height = element.offsetHeight
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#" className="text-xl font-bold text-slate-900">
              Rehan<span className="text-blue-700">.</span>
            </a>
            
            <div className="hidden md:flex items-center gap-8">
              {["About", "Skills", "Projects", "Education", "Contact"].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`text-sm font-medium transition-colors ${activeSection === item.toLowerCase() ? 'text-blue-700' : 'text-slate-600 hover:text-slate-900'}`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>
      
      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
    </div>
  )
}

export default App