import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Projects from './pages/Projects';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ExternalLink, 
  Code, 
  Briefcase, 
  GraduationCap, 
  ChevronRight, 
  X,
  FileCode,
  Database,
  FileText,
  Palette,
  ArrowRight,
  Building2,
  Calendar,
  Trophy,
  Award, 
  Users, 
  Sparkles,
  Star,
  User,
  Rocket,
  Heart, 
  Layout,  
  Laptop,
  Book,
  Brain,
  Menu,
  ChevronDown,
  Download
} from 'lucide-react';

const styles = `
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }

  @keyframes slideUp {
    from { 
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  @keyframes pulse-glow {
    0%, 100% { box-shadow: 0 0 20px rgba(78, 110, 93, 0.3); }
    50% { box-shadow: 0 0 40px rgba(78, 110, 93, 0.6); }
  }

  @keyframes gradient-shift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  @keyframes bounce-subtle {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }

  .animate-float {
    animation: float 6s ease-in-out infinite;
  }

  .animate-slideUp {
    animation: slideUp 1s forwards;
  }

  .animate-fadeIn {
    animation: fadeIn 1s forwards;
  }

  .animate-scroll {
    animation: scroll 30s linear infinite;
  }

  .animate-pulse-glow {
    animation: pulse-glow 2s ease-in-out infinite;
  }

  .animate-gradient {
    background: linear-gradient(45deg, #4E6E5D, #6B8E73, #4E6E5D, #5A7A65);
    background-size: 400% 400%;
    animation: gradient-shift 3s ease infinite;
  }

  .animate-bounce-subtle {
    animation: bounce-subtle 2s ease-in-out infinite;
  }

  .delay-200 { animation-delay: 200ms; }
  .delay-400 { animation-delay: 400ms; }
  .delay-600 { animation-delay: 600ms; }

  .glass-effect {
    backdrop-filter: blur(20px);
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .glow-border {
    position: relative;
    overflow: hidden;
  }

  .glow-border::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(78, 110, 93, 0.4), transparent);
    transition: left 0.5s;
  }

  .glow-border:hover::before {
    left: 100%;
  }

  .text-gradient {
    background: linear-gradient(45deg, #4E6E5D, #6B8E73);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .card-hover {
    transition: all 0.3s ease;
    transform-style: preserve-3d;
  }

  .card-hover:hover {
    transform: translateY(-10px) rotateX(5deg);
    box-shadow: 0 20px 40px rgba(78, 110, 93, 0.2);
  }

  .typewriter {
    overflow: hidden;
    border-right: 2px solid #4E6E5D;
    white-space: nowrap;
    margin: 0 auto;
    letter-spacing: 0.1em;
    animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
  }

  @keyframes typing {
    from { width: 0 }
    to { width: 100% }
  }

  @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: #4E6E5D; }
  }

  .scroll-indicator {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    animation: bounce-subtle 2s infinite;
  }
`;

const SplitText = ({ children, className = "" }) => {
  return (
    <span className={`split-text-reveal ${className}`}>
      {children.split("").map((char, i) => (
        <span key={i} style={{ animationDelay: `${i * 0.05}s` }}>
          {char}
        </span>
      ))}
    </span>
  );
};

const Card = ({ children, className = '' }) => (
  <div className={`glass-effect rounded-xl p-6 card-hover ${className}`}>
    {children}
  </div>
);

const SkillBadge = ({ children, icon }) => (
  <span className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 text-blue-400 px-4 py-2 rounded-full text-sm 
                   transition-all duration-300 hover:scale-105 border border-blue-800/50 glow-border
                   flex items-center gap-2">
    {icon}
    {children}
  </span>
);

const useTypewriter = (text, speed = 100) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[index]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timer);
    }
  }, [index, text, speed]);

  return displayText;
};

const SkillCarousel = () => {
  const skills = [
    { icon: <Code className="w-5 h-5" />, name: 'JavaScript', color: 'from-yellow-500 to-orange-500' },
    { icon: <Code className="w-5 h-5" />, name: 'HTML', color: 'from-orange-500 to-red-500' },
    { icon: <Code className="w-5 h-5" />, name: 'CSS', color: 'from-blue-500 to-purple-500' },
    { icon: <Code className="w-5 h-5" />, name: 'PHP', color: 'from-purple-500 to-indigo-500' },
    { icon: <FileCode className="w-5 h-5" />, name: 'XML', color: 'from-green-500 to-teal-500' },
    { icon: <Code className="w-5 h-5" />, name: 'WordPress', color: 'from-blue-600 to-blue-400' },
    { icon: <Code className="w-5 h-5" />, name: 'AngularJS', color: 'from-red-500 to-pink-500' },
    { icon: <Database className="w-5 h-5" />, name: 'MySQL', color: 'from-orange-600 to-yellow-500' },
    { icon: <FileText className="w-5 h-5" />, name: 'TypeScript', color: 'from-blue-600 to-indigo-600' },
    { icon: <Code className="w-5 h-5" />, name: 'ReactJS', color: 'from-cyan-500 to-blue-500' },
    { icon: <Code className="w-5 h-5" />, name: 'Python', color: 'from-green-600 to-yellow-500' },
    { icon: <Palette className="w-5 h-5" />, name: 'Adobe Creative Suite', color: 'from-red-600 to-orange-500' },
  ];

  const allSkills = [...skills, ...skills];

  return (
    <div className="overflow-hidden w-full my-8">
      <div className="animate-scroll flex whitespace-nowrap">
        {allSkills.map((skill, index) => (
          <span 
            key={index} 
            className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${skill.color} 
                       text-white rounded-full mx-2 shadow-lg hover:scale-105 transition-transform`}
          >
            {skill.icon}
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
};

const projectsData = [
  {
    id: 1,
    title: "Patient Health Hub",
    description: "A modern, full-stack healthcare management system that provides a comprehensive interface for managing patient information, medical records, and visit history.",
    technologies: ["React.js", "Python", "PostgreSQL"],
    live: "https://github.com/zmegahed/Health-Patient-App",
    images: ["./images/fitnessmeals.png"],
    highlights: ["Real-time patient data", "Secure authentication", "Mobile responsive design"]
  },
  {
    id: 2,
    title: "Madina Islamic Center Rework",
    description: "Redesigned a Wordpress web application featuring a booking calendar and donation system.",
    technologies: ["WordPress", "CSS", "Elementor", "JavaScript"],
    live: "https://zmegahed.github.io/MicRework/micrework.html",
    images: ["./images/madina.png"],
    highlights: ["Custom booking system", "Integrated donations", "Performance optimization"]
  },
  {
    id: 3,
    title: "Subaru Crosstrek Landing Page",
    description: "Designed a Landing Page for the New 2024 Subaru Crosstrek with interactive features and smooth animations.",
    technologies: ["HTML", "CSS", "JavaScript", "jQuery"],
    live: "https://zmegahed.github.io/Subaru-Crosstrek-Landing-Page/exercise.html",
    images: ["./images/subaru_home_page.png"],
    highlights: ["Interactive animations", "Responsive design", "SEO optimized"]
  }
];

const ContactSection = () => {
  const emailParams = {
    subject: "Portfolio Inquiry",
    body: "Hi Zeyad,\n\nI came across your portfolio and would love to connect about "
  };
  
  const mailtoLink = `mailto:zeyadfouad34@gmail.com?subject=${encodeURIComponent(emailParams.subject)}&body=${encodeURIComponent(emailParams.body)}`;
  
  return (
    <section id="contact" className="relative py-24 bg-[#050517] overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-64 top-0 w-[800px] h-[800px] bg-gradient-to-r from-[#4E6E5D]/30 to-transparent rounded-full blur-[300px] animate-float" />
        <div className="absolute -right-64 bottom-0 w-[800px] h-[800px] bg-gradient-to-l from-[#4E6E5D]/30 to-transparent rounded-full blur-[300px] animate-float" style={{animationDelay: '2s'}} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#4E6E5D]"/>
            <p className="text-[#4E6E5D] uppercase text-sm tracking-wider font-medium">Contact</p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#4E6E5D]"/>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">Let's Build Something Amazing</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it and discuss how we can bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="glass-effect rounded-2xl p-8 card-hover">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-[#4E6E5D] to-[#6B8E73] rounded-lg animate-pulse-glow">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Ready to Start?</h3>
                  <p className="text-gray-400">Let's discuss your project</p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm passionate about creating digital experiences that make a difference. 
                Whether you're a startup looking to establish your online presence or an 
                established company wanting to modernize your web platform, I'm here to help.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-[#4E6E5D] rounded-full animate-pulse"></div>
                  <span>Quick response within 24 hours</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-[#4E6E5D] rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <span>Free initial consultation</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-[#4E6E5D] rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                  <span>Collaborative approach</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-gray-400">
              <Mail className="w-5 h-5 text-[#4E6E5D]" />
              <span>zeyadfouad34@gmail.com</span>
            </div>
          </div>

          <div className="glass-effect rounded-2xl p-8 card-hover">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Get In Touch</h3>
            
            <div className="space-y-4">
              <a 
                href={mailtoLink}
                className="flex items-center justify-between w-full p-6 bg-gradient-to-r from-[#4E6E5D] to-[#6B8E73] 
                         rounded-xl text-white hover:scale-105 transition-all duration-300 group glow-border animate-gradient"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="font-semibold">Send Email</span>
                    <p className="text-sm opacity-80">Let's start the conversation</p>
                  </div>
                </div>
                <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              
              <a 
                href="https://github.com/zmegahed"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full p-6 bg-white/5 rounded-xl text-gray-300 
                         hover:bg-white/10 hover:scale-105 transition-all duration-300 group glow-border"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-white/10 rounded-lg">
                    <Github className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="font-semibold">GitHub Profile</span>
                    <p className="text-sm opacity-70">Check out my code</p>
                  </div>
                </div>
                <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              
              <a 
                href="https://www.linkedin.com/in/zeyad-megahed/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full p-6 bg-white/5 rounded-xl text-gray-300 
                         hover:bg-white/10 hover:scale-105 transition-all duration-300 group glow-border"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-white/10 rounded-lg">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="font-semibold">LinkedIn Profile</span>
                    <p className="text-sm opacity-70">Connect professionally</p>
                  </div>
                </div>
                <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-900/30 text-green-400 rounded-full text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Available for new projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const useVisibility = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isVisible];
};

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [activeExperience, setActiveExperience] = useState(0);
  const [activeCard, setActiveCard] = useState(null);
  const typewriterText = "I am a Web Designer and a Front End Developer";
  const displayText = useTypewriter(typewriterText);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const [heroRef, heroVisible] = useVisibility();
  const [aboutRef, aboutVisible] = useVisibility();
  const [headerRef, headerVisible] = useVisibility();
  const [introRef, introVisible] = useVisibility();
  const [highlightsRef, highlightsVisible] = useVisibility();
  const [skillsRef, skillsVisible] = useVisibility();
  const [educationRef, educationVisible] = useVisibility();
  const [experienceRef, experienceVisible] = useVisibility();
  const [projectsRef, projectsVisible] = useVisibility();
  const [bioRef, bioVisible] = useVisibility();

  const handleViewAll = () => {
    navigate('/projects');
  };
  
  const experiences = [
    {
      company: "CareFirst BlueShield BlueCross",
      role: "Web Design / Developer Intern",
      duration: "Jan 2023 - Aug 2024",
      type: "Internship",
      team: "Digital Design",
      location: "Baltimore, MD",
      impact: "30% faster page load times",
      description: "Led web development and design initiatives, focusing on responsive design and accessibility while collaborating with senior developers to enhance user experience.",
      achievements: [
        "Designed and maintained 15+ responsive web pages using HTML, CSS, JavaScript, and Adobe Dreamweaver, increasing user engagement by 20-30%",
        "Conducted weekly usability testing on 8+ web pages, improving page load times by 30-40%",
        "Created high-fidelity mockups and prototypes using Adobe Creative Suite",
        "Collaborated with 4 senior developers to revamp existing website through wireframing and iterative design",
        "Implemented 508 tagging techniques for web accessibility compliance",
        "Developed responsive HTML email templates with 100% brand compliance in Salesforce Marketing Cloud"
      ]
    },
    {
      company: "Madina Islamic Center",
      role: "Web Designer / Team Lead",
      duration: "Jul 2023 - May 2024",
      type: "Project Lead",
      team: "Web Development and Design",
      location: "Remote",
      impact: "Complete website modernization",
      description: "Spearheaded the complete redesign and modernization of the organization's web presence while leading development initiatives.",
      achievements: [
        "Led complete website redesign project to modernize online presence",
        "Integrated advanced features using WordPress and Elementor plugins",
        "Implemented booking calendar and donation form functionalities",
        "Provided comprehensive WordPress training and support for client independence",
        "Managed content management system and site maintenance",
        "Ensured responsive design and cross-browser compatibility"
      ]
    },
    {
      company: "DealerOn",
      role: "Front-End Web Developer",
      duration: "Jan 2025 - May 2025",
      type: "Contract",
      team: "Web Development",
      location: "Remote",
      impact: "Website Migration",
      description: "Led comprehensive web development initiatives translating 12+ daily mockups into responsive, high-performance websites using HTML5, CSS3, and JavaScript while advising clients on UX optimization and accessibility standards across major automotive and marketing agency projects.",
      achievements: [
        "Determined the design and structure of web pages, employing best practices for web design to create fast, engaging, and high-converting sites",
        "Utilized HTML5, CSS3, and JavaScript/jQuery within a content management system to code 10+ responsive webpage layouts and site templates daily that are both functional and aesthetically pleasing",
        "Translated 12+ daily mockups, references, and copy into web content",
        "Developed expertise working within branding guidelines of major automotive manufacturers and marketing agencies across North America",
        "Demonstrated a solid understanding of UX design principles",
        "Advised clients on how to optimize pages for performance, user experience, and accessibility"
      ]
    }
  ];
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setActiveSection(sectionId);
  };

  const handleNavClick = (section) => {
    scrollToSection(section);
  };

  return (
    <>
      <style>{styles}</style>
      <div className="min-h-screen bg-[#050517] text-gray-100">
        {/* Enhanced Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50">
          <div className="absolute inset-0 glass-effect">
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#4E6E5D]/50 to-transparent" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 py-4 relative">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <a href="https://github.com/zmegahed" target="_blank" rel="noopener noreferrer"
                   className="p-3 rounded-xl glass-effect hover:scale-110 text-gray-400 hover:text-white transition-all duration-300 glow-border">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/zeyad-megahed/" target="_blank" rel="noopener noreferrer"
                   className="p-3 rounded-xl glass-effect hover:scale-110 text-gray-400 hover:text-white transition-all duration-300 glow-border">
                  <Linkedin size={20} />
                </a>
              </div>

              <div className="hidden md:flex items-center gap-2">
                {['About', 'Education', 'Experience', 'Projects', 'Contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => handleNavClick(section.toLowerCase())}
                    className="relative px-4 lg:px-6 py-3 group whitespace-nowrap rounded-lg transition-all duration-300"
                  >
                    <span className={`relative z-10 text-sm lg:text-base font-medium ${
                      activeSection === section.toLowerCase()
                        ? 'text-white' 
                        : 'text-gray-400 group-hover:text-white'
                    }`}>
                      {section}
                    </span>
                    {activeSection === section.toLowerCase() && (
                      <div className="absolute inset-0 bg-gradient-to-r from-[#4E6E5D]/20 to-[#6B8E73]/20 rounded-lg animate-gradient" />
                    )}
                  </button>
                ))}
              </div>

              <div className="md:hidden relative">
                <button 
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-3 rounded-xl glass-effect hover:scale-110 text-gray-400 hover:text-white transition-all duration-300"
                >
                  {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

                {isMobileMenuOpen && (
                  <div className="absolute top-full right-0 mt-2 w-48 py-2 glass-effect rounded-xl shadow-2xl">
                    {['About', 'Education', 'Experience', 'Projects', 'Contact'].map((section) => (
                      <button
                        key={section}
                        onClick={() => {
                          handleNavClick(section.toLowerCase());
                          setIsMobileMenuOpen(false);
                        }}
                        className="w-full text-left px-4 py-3 hover:bg-white/10 rounded-lg mx-2 transition-all duration-300"
                      >
                        <span className={
                          activeSection === section.toLowerCase()
                            ? 'text-white font-medium'
                            : 'text-gray-400'
                        }>
                          {section}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button 
                onClick={() => handleNavClick('contact')}
                className="hidden sm:block px-6 py-3 rounded-xl bg-gradient-to-r from-[#4E6E5D] to-[#6B8E73] 
                         text-white transition-all duration-300 hover:scale-105 animate-gradient font-medium"
              >
                Let's Connect
              </button>
            </div>
          </div>
        </nav>

        <section className="relative min-h-screen bg-[#050517] text-white overflow-hidden flex items-center">
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/4 top-1/4 w-[600px] h-[600px] bg-gradient-to-r from-[#4E6E5D]/30 to-transparent rounded-full blur-[200px] animate-float" />
            <div className="absolute right-1/4 bottom-1/4 w-[800px] h-[800px] bg-gradient-to-l from-[#4E6E5D]/20 to-transparent rounded-full blur-[300px] animate-float" style={{animationDelay: '3s'}} />
            
            <div className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: 'linear-gradient(#4E6E5D 1px, transparent 1px), linear-gradient(to right, #4E6E5D 1px, transparent 1px)',
                backgroundSize: '80px 80px'
              }}
            />
          </div>

          <div className="hidden sm:block absolute left-4 md:left-8 lg:left-20 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#4E6E5D]/40 to-transparent" />
          <div className="hidden sm:block absolute right-4 md:right-8 lg:right-20 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#4E6E5D]/40 to-transparent" />

          <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col max-w-4xl mx-4 sm:mx-6 lg:mx-8">
              <div className="flex flex-wrap gap-3 sm:gap-4 opacity-0 animate-slideUp">
                <span className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm tracking-wider 
                               text-[#4E6E5D] glass-effect rounded-full hover:scale-105 transition-all duration-300">
                  <Sparkles className="w-4 h-4" />
                  FRONT-END DEVELOPER
                </span>
                <span className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm tracking-wider 
                               text-[#4E6E5D] glass-effect rounded-full hover:scale-105 transition-all duration-300">
                  <Palette className="w-4 h-4" />
                  WEB DESIGNER
                </span>
              </div>

              <div className="mt-8 sm:mt-12 space-y-4">
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold opacity-0 animate-slideUp delay-200 leading-tight">
                  Creating Digital
                  <span className="block mt-2 text-gradient animate-gradient">Experiences</span>
                </h1>
                
                <div className="mt-6 opacity-0 animate-slideUp delay-400">
                  <p className="text-lg sm:text-xl md:text-2xl text-gray-400 typewriter">
                    {displayText}
                  </p>
                </div>
              </div>

              <p className="mt-6 sm:mt-8 md:mt-10 text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl opacity-0 animate-slideUp delay-600">
                Hey, I'm <span className="text-white font-semibold">Zeyad</span>. 
                I combine clean code with creative design to build modern web solutions that make an impact.
              </p>

              <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 opacity-0 animate-slideUp delay-800">
                <a
                  href="https://zmegahed.github.io/Zayad-Megahed-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#4E6E5D] to-[#6B8E73] 
                           text-white rounded-xl hover:scale-105 transition-all duration-300 animate-gradient font-medium"
                >
                  <Download className="w-5 h-5" />
                  <span>Download Resume</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#4E6E5D] rounded-full animate-pulse" />
                  <span className="text-sm sm:text-base text-gray-400">Available for Opportunities</span>
                </div>
              </div>
            </div>
          </div>

          <div className="scroll-indicator">
            <div className="flex flex-col items-center gap-2 text-gray-400">
              <span className="text-xs tracking-wider">SCROLL</span>
              <ChevronDown className="w-5 h-5 animate-bounce-subtle" />
            </div>
          </div>

          <div className="absolute bottom-4 sm:bottom-8 md:bottom-12 right-4 sm:right-8 lg:right-24 flex items-center gap-4 text-xs sm:text-sm text-gray-500">
            <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent to-gray-500/50" />
            <span>2024</span>
          </div>
        </section>

        <section id="about" className="relative py-32 bg-[#050517] overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute -left-64 -top-32 w-[700px] h-[700px] bg-gradient-to-r from-[#4E6E5D]/20 to-transparent rounded-full blur-[200px] animate-float" />
            <div className="absolute -right-64 -bottom-32 w-[700px] h-[700px] bg-gradient-to-l from-[#4E6E5D]/20 to-transparent rounded-full blur-[200px] animate-float" />
            
            <div className="absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage: 'linear-gradient(#4E6E5D 1px, transparent 1px), linear-gradient(to right, #4E6E5D 1px, transparent 1px)',
                backgroundSize: '64px 64px'
              }}
            />
          </div>

          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div ref={headerRef} className={`text-center mb-16 transform transition-all duration-1000 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#4E6E5D]"/>
                  <p className="text-[#4E6E5D] uppercase text-sm tracking-wider font-medium">About Me</p>
                  <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#4E6E5D]"/>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Crafting Digital Experiences</h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Passionate about creating beautiful, functional, and user-centered web experiences
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                <div ref={bioRef} className={`transform transition-all duration-1000 delay-200 ${bioVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                  <Card className="h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-gradient-to-r from-[#4E6E5D] to-[#6B8E73] rounded-xl">
                        <User className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">Hello, I'm Zeyad</h3>
                    </div>
                    
                    <div className="space-y-4 text-gray-300 leading-relaxed">
                      <p>
                        Hi, I'm Zeyad - a passionate UI/UX Designer and Front-end Developer based in the DMV area. 
                        I've been crafting beautiful and functional websites since high school, always driven by a 
                        desire to push the boundaries of what's possible on the web.
                      </p>
                      <p>
                        When I'm not coding, you can find me exploring new technologies, watching soccer, or enjoying 
                        the great outdoors. I'm constantly curious and eager to learn, and I love collaborating with 
                        others to bring innovative ideas to life.
                      </p>
                    </div>

                    <div className="mt-8 grid grid-cols-2 gap-4">
                      <div className="text-center p-4 glass-effect rounded-xl">
                        <div className="text-3xl font-bold text-[#4E6E5D] mb-2">50+</div>
                        <div className="text-sm text-gray-400">Projects Completed</div>
                      </div>
                      <div className="text-center p-4 glass-effect rounded-xl">
                        <div className="text-3xl font-bold text-[#4E6E5D] mb-2">3+</div>
                        <div className="text-sm text-gray-400">Years Experience</div>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className={`transform transition-all duration-1000 delay-400 ${bioVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                  <Card>
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                      <Brain className="w-6 h-6 text-[#4E6E5D]" />
                      What I Do
                    </h3>
                    
                    <div className="space-y-6">
                      {[
                        {
                          icon: <Layout className="w-6 h-6" />,
                          title: "Frontend Development",
                          description: "Building responsive, interactive web applications with modern frameworks and technologies."
                        },
                        {
                          icon: <Palette className="w-6 h-6" />,
                          title: "UI/UX Design", 
                          description: "Creating intuitive user interfaces and experiences that delight and engage users."
                        },
                        {
                          icon: <Laptop className="w-6 h-6" />,
                          title: "Web Optimization",
                          description: "Ensuring fast, accessible, and SEO-friendly websites that perform across all devices."
                        }
                      ].map((service, index) => (
                        <div key={index} className="flex items-start gap-4 p-4 glass-effect rounded-xl hover:scale-105 transition-all duration-300">
                          <div className="p-3 bg-gradient-to-r from-[#4E6E5D] to-[#6B8E73] rounded-lg text-white">
                            {service.icon}
                          </div>
                          <div>
                            <h4 className="font-bold text-white mb-2">{service.title}</h4>
                            <p className="text-gray-400 text-sm">{service.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>

              <div ref={skillsRef} className={`transform transition-all duration-1000 delay-600 ${skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-white mb-4">Technologies I Work With</h3>
                  <p className="text-gray-400">A selection of tools and technologies I use to bring ideas to life</p>
                </div>
                <SkillCarousel />
              </div>
            </div>
          </div>
        </section>

        <section id="education" ref={educationRef} className="relative py-32 bg-[#050517]">
          <div className="max-w-7xl mx-auto px-6">
            <div className={`text-center mb-16 transform transition-all duration-1000
              ${educationVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#4E6E5D]"/>
                <p className="text-[#4E6E5D] uppercase text-sm tracking-wider font-medium">Education</p>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#4E6E5D]"/>
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">Academic Background</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Building a strong foundation in technology and web development
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className={`transform transition-all duration-700 delay-200
                ${educationVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
                <Card className="h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-gradient-to-r from-[#4E6E5D] to-[#6B8E73] rounded-xl animate-pulse-glow">
                      <GraduationCap className="text-white w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">George Mason University</h3>
                      <p className="text-gray-400 flex items-center gap-2">
                        <Building2 className="w-4 h-4" />
                        Fairfax, VA
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <div className="p-4 glass-effect rounded-xl">
                      <p className="text-xl text-white font-semibold mb-2">Bachelor of Science in Information Technology</p>
                      <p className="text-[#4E6E5D] font-medium mb-2">Concentration: Web Application Development</p>
                      <div className="flex items-center gap-4 text-gray-300">
                        <div className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-yellow-500" />
                          <span>GPA: 3.7/4.0</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Award className="w-4 h-4 text-[#4E6E5D]" />
                          <span>Cum Laude</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-green-400">
                    <Trophy className="w-5 h-5" />
                    <span className="font-medium">Dean's List Recognition</span>
                  </div>
                </Card>
              </div>

              <div className="space-y-8">
                <div className={`transform transition-all duration-700 delay-400
                  ${educationVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
                  <Card>
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                      <Book className="w-6 h-6 text-[#4E6E5D]" />
                      Relevant Coursework
                    </h3>
                    <div className="grid gap-3">
                      {[
                        "Front-End Web Development",
                        "Web Development using Content Management Systems", 
                        "Web Server Administration",
                        "Multimedia and Web Design",
                        "Data Structures and Algorithms in Python"
                      ].map((course, index) => (
                        <div 
                          key={index}
                          className="flex items-center gap-3 p-3 glass-effect rounded-lg hover:scale-105 transition-all duration-300 group"
                        >
                          <ChevronRight className="text-[#4E6E5D] w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          <span className="text-gray-300 group-hover:text-white transition-colors">{course}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" ref={experienceRef} className="relative py-32 bg-[#050517] overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className={`text-center mb-16 transition-all duration-1000 transform 
              ${experienceVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#4E6E5D]"/>
                <p className="text-[#4E6E5D] uppercase text-sm tracking-wider">Experience</p>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#4E6E5D]"/>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">My Professional Journey</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Each role has shaped my skills and passion for creating exceptional web experiences
              </p>
            </div>

            <div className="grid lg:grid-cols-12 gap-8">
              <div className="lg:col-span-4 space-y-4">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className={`transform transition-all duration-700 delay-${index * 200} 
                      ${experienceVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}
                  >
                    <div
                      onClick={() => setActiveExperience(index)}
                      className={`cursor-pointer rounded-2xl p-6 transition-all duration-500 glow-border
                        ${activeExperience === index 
                          ? 'glass-effect border-l-4 border-[#4E6E5D] scale-105 animate-pulse-glow' 
                          : 'bg-white/5 hover:bg-white/10 hover:scale-102'}`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`p-4 rounded-xl transition-colors duration-300
                          ${activeExperience === index 
                            ? 'bg-gradient-to-r from-[#4E6E5D] to-[#6B8E73] animate-gradient' 
                            : 'bg-gray-800'}`}>
                          <Building2 className={`w-6 h-6 transition-colors duration-300
                            ${activeExperience === index ? 'text-white' : 'text-gray-400'}`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-100 mb-1">{exp.company}</h3>
                          <p className="text-sm text-gray-400 mb-2">{exp.role}</p>
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <Calendar className="w-3 h-3" />
                            <span>{exp.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className={`lg:col-span-8 transition-all duration-1000 delay-500
                ${experienceVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
                <Card className="transition-all duration-500 hover:scale-105">
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {[
                      { 
                        icon: Calendar, 
                        label: 'Duration', 
                        value: experiences[activeExperience].duration,
                        color: 'blue'
                      },
                      { 
                        icon: Users, 
                        label: 'Team', 
                        value: experiences[activeExperience].team,
                        color: 'purple'
                      },
                      { 
                        icon: Building2, 
                        label: 'Location', 
                        value: experiences[activeExperience].location,
                        color: 'green'
                      }
                    ].map((item, index) => (
                      <div key={index} className={`transform transition-all duration-500 delay-${(index + 1) * 100}
                        ${experienceVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="flex items-center gap-4 p-4 glass-effect rounded-xl">
                          <div className={`p-3 bg-${item.color}-900/30 rounded-lg`}>
                            <item.icon className={`text-${item.color}-400 w-5 h-5`} />
                          </div>
                          <div>
                            <p className="text-sm text-gray-400">{item.label}</p>
                            <p className="font-semibold text-gray-200">{item.value}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className={`mb-8 transition-all duration-500 delay-300
                    ${experienceVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <h4 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                      <Briefcase className="w-6 h-6 text-[#4E6E5D]" />
                      Role Overview
                    </h4>
                    <p className="text-gray-300 leading-relaxed text-lg glass-effect p-4 rounded-xl">
                      {experiences[activeExperience].description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                      <Trophy className="w-6 h-6 text-[#4E6E5D]" />
                      Key Achievements
                    </h4>
                    <div className="space-y-4">
                      {experiences[activeExperience].achievements.map((achievement, index) => (
                        <div
                          key={index}
                          className={`flex items-start gap-4 p-4 glass-effect rounded-xl transition-all duration-500 
                            delay-${(index + 1) * 200} hover:scale-105 hover:bg-white/10 group
                            ${experienceVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                        >
                          <div className="p-2 bg-gradient-to-r from-[#4E6E5D] to-[#6B8E73] rounded-lg mt-1 animate-gradient">
                            <Star className="text-white w-4 h-4" />
                          </div>
                          <p className="text-gray-300 group-hover:text-white transition-colors">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Projects Section */}
        <section id="projects" className="relative py-32 bg-[#050517]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#4E6E5D]"/>
                <p className="text-[#4E6E5D] uppercase text-sm tracking-wider font-medium">Portfolio</p>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#4E6E5D]"/>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
                  <p className="text-xl text-gray-400">A showcase of my recent work and creative solutions</p>
                </div>
                <button 
                  onClick={handleViewAll}
                  className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#4E6E5D] to-[#6B8E73] 
                           text-white rounded-xl hover:scale-105 transition-all duration-300 animate-gradient font-medium"
                >
                  <span>View All Projects</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projectsData.map((project, index) => (
                <div 
                  key={project.id}
                  className="group glass-effect rounded-2xl overflow-hidden border border-white/10 hover:border-[#4E6E5D] 
                           transition-all duration-500 hover:scale-105 card-hover glow-border"
                >
                  {project.images && project.images[0] && (
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={project.images[0]} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  )}

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#4E6E5D] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-6 line-clamp-2">{project.description}</p>

                    {project.technologies && project.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 text-sm bg-gradient-to-r from-[#4E6E5D] to-[#6B8E73] 
                                     text-white rounded-full animate-gradient"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {project.live && (
                      <div className="flex justify-between items-center">
                        <a 
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 glass-effect rounded-lg
                                   text-[#4E6E5D] hover:text-white hover:scale-105 transition-all duration-300 group/link"
                        >
                          <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                          <span>Live Demo</span>
                        </a>
                      </div>
                    )}
                  </div>

                  {project.highlights && project.highlights.length > 0 && (
                    <div className="px-6 pb-6">
                      <div className="pt-4 border-t border-white/10">
                        <h4 className="text-sm font-medium text-gray-300 mb-3 flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-[#4E6E5D]" />
                          Key Features:
                        </h4>
                        <ul className="text-sm text-gray-400 space-y-2">
                          {project.highlights.slice(0, 2).map((highlight, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="text-[#4E6E5D] mt-1">•</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactSection />
      </div>
    </>
  );
};

const App = () => {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
};

export default App;