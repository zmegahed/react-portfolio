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
  Menu
} from 'lucide-react';

// Styles
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

  .animate-float {
    animation: float 6s ease-in-out infinite;
  }

  .animate-slideUp {
    animation: slideUp 1s forwards;
  }

  .animate-fadeIn {
    animation: fadeIn 1s forwards;
  }

  .delay-200 { animation-delay: 200ms; }
  .delay-400 { animation-delay: 400ms; }
  .delay-600 { animation-delay: 600ms; }
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
  <div className={`backdrop-blur-sm rounded-lg p-6 ${className}`}>
    {children}
  </div>
);

const SkillBadge = ({ children }) => (
  <span className="bg-blue-900/30 text-blue-400 px-3 py-1 rounded-full text-sm transition-all duration-300 hover:bg-blue-800/50 hover:scale-105 border border-blue-800/50">
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
    { icon: <Code className="w-5 h-5" />, name: 'JavaScript' },
    { icon: <Code className="w-5 h-5" />, name: 'HTML' },
    { icon: <Code className="w-5 h-5" />, name: 'CSS' },
    { icon: <Code className="w-5 h-5" />, name: 'PHP' },
    { icon: <FileCode className="w-5 h-5" />, name: 'XML' },
    { icon: <Code className="w-5 h-5" />, name: 'WordPress' },
    { icon: <Code className="w-5 h-5" />, name: 'AngularJS' },
    { icon: <Database className="w-5 h-5" />, name: 'MySQL' },
    { icon: <FileText className="w-5 h-5" />, name: 'TypeScript' },
    { icon: <Code className="w-5 h-5" />, name: 'ReactJS' },
    { icon: <Code className="w-5 h-5" />, name: 'Python' },
    { icon: <Palette className="w-5 h-5" />, name: 'Adobe Creative Suite' },
  ];

  const allSkills = [...skills, ...skills];

  return (
    <div className="overflow-hidden w-full my-8">
      <div className="animate-scroll flex whitespace-nowrap">
        {allSkills.map((skill, index) => (
          <span 
            key={index} 
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#4E6E5D] text-[#FFFFFF0] rounded-full mx-2"
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
    images: ["./images/fitnessmeals.png"]
  },
  {
    id: 2,
    title: "Madina Islamic Center Rework",
    description: "Redesigned a wordpress web application featuring a booking calendar and donation system.",
    technologies: ["WordPress", "CSS", "Elementor", "JavaScript"],
    live: "https://zmegahed.github.io/MicRework/micrework.html",
    images: ["./images/madina.png"]
  },
  {
    id: 3,
    title: "Stansberry One Page",
    description: "Developed a full-stack web application featuring a grade calculator and office sign-up system with automated email notifications. The system streamlines the process of scheduling office visits while maintaining accurate records and providing instant feedback to users.",
    technologies: ["HTML", "CSS", "JavaScript"],
    live: "https://zmegahed.github.io/HTML_CSS_SPECIALIST/index.html",
    images: ["./images/stansberry.png"]
  }
];

const ContactSection = () => {
  const emailParams = {
    subject: "Portfolio Inquiry",
    body: "Hi Zeyad,\n\nI came across your portfolio and would love to connect about "
  };
  
  const mailtoLink = `mailto:zeyadfouad34@gmail.com?subject=${encodeURIComponent(emailParams.subject)}&body=${encodeURIComponent(emailParams.body)}`;
  
  return (
    <section id="contact" className="relative py-24 bg-[#050517]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-px w-8 bg-[#4E6E5D]"/>
            <p className="text-[#4E6E5D] uppercase text-sm tracking-wider font-medium">Contact</p>
          </div>
          <h2 className="text-3xl font-bold text-white">Let's Connect</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <p className="text-xl text-white mb-4">Ready to discuss your next project?</p>
              <p className="text-gray-400 leading-relaxed">
                I'm always excited to discuss new opportunities, creative collaborations, 
                or just chat about interesting projects. Whether you have a specific project 
                in mind or just want to connect, feel free to reach out.
              </p>
            </div>

            <div className="space-y-4">
              <a 
                href={mailtoLink}
                className="flex items-center gap-3 text-gray-300 hover:text-[#4E6E5D] transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
                <span>zeyadfouad34@gmail.com</span>
              </a>
            </div>
          </div>

          <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-6">Connect With Me</h3>
            
            <div className="space-y-4">
              <a 
                href={mailtoLink}
                className="flex items-center justify-between w-full p-4 bg-[#4E6E5D] rounded-lg text-[#ffffff] 
                         hover:bg-[#4f6e4e] transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5" />
                  <span>Send Email</span>
                </div>
                <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              
              <a 
                href="https://github.com/zmegahed"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full p-4 bg-white/5 rounded-lg text-gray-300 
                         hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <Github className="w-5 h-5" />
                  <span>GitHub Profile</span>
                </div>
                <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              
              <a 
                href="https://www.linkedin.com/in/zeyad-megahed/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full p-4 bg-white/5 rounded-lg text-gray-300 
                         hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn Profile</span>
                </div>
                <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

            <p className="text-gray-400 text-sm mt-6">
              Available for opportunities and collaborations
            </p>
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
    team: "Web Development",
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
    }
  ];
  
  const coursework = [
    "Front-End Web Development",
    "Web Development using Content Management Systems",
    "Web Server Administration",
    "Multimedia and Web Design",
    "Data Structures and Algorithms in Python"
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
       <nav className="fixed top-0 left-0 right-0 z-50">
  <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-[#050517]/95 to-gray-900/95 backdrop-blur-lg">
    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#4E6E5D]/50 to-transparent" />
  </div>

  <div className="container mx-auto px-4 sm:px-6 py-3 relative">
    <div className="flex items-center justify-between flex-wrap gap-4">
      <div className="flex items-center gap-4">
        <a href="https://github.com/zmegahed" target="_blank" rel="noopener noreferrer"
           className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all duration-300">
          <Github size={20} />
        </a>
        <a href="https://www.linkedin.com/in/zeyad-megahed/" target="_blank" rel="noopener noreferrer"
           className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all duration-300">
          <Linkedin size={20} />
        </a>
      </div>

      <div className="hidden md:flex items-center gap-1">
        {['About', 'Education', 'Experience', 'Projects', 'Contact'].map((section) => (
          <button
            key={section}
            onClick={() => handleNavClick(section.toLowerCase())}
            className="relative px-3 lg:px-4 py-2 group whitespace-nowrap"
          >
            <span className={`relative z-10 text-sm lg:text-base ${
              activeSection === section.toLowerCase()
                ? 'text-white font-medium' 
                : 'text-gray-400 group-hover:text-white'
            }`}>
              {section}
            </span>
          </button>
        ))}
      </div>

      <div className="md:hidden relative">
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all duration-300"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {isMobileMenuOpen && (
          <div className="absolute top-full right-0 mt-2 w-48 py-2 bg-[#050517]/95 backdrop-blur-lg rounded-lg border border-white/10 shadow-lg">
            {['About', 'Education', 'Experience', 'Projects', 'Contact'].map((section) => (
              <button
                key={section}
                onClick={() => {
                  handleNavClick(section.toLowerCase());
                  setIsMobileMenuOpen(false);
                }}
                className="w-full text-left px-4 py-2 hover:bg-white/5"
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
        className="hidden sm:block px-4 py-2 rounded-lg bg-[#4E6E5D] bg-opacity-60 hover:bg-opacity-30 text-white transition-all duration-300"
      >
        Let's Connect
      </button>
    </div>
  </div>
</nav>

        <section className="relative min-h-screen bg-[#050517] text-white overflow-hidden">
			<div className="hidden sm:block absolute left-4 md:left-8 lg:left-20 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#4E6E5D]/40 to-transparent" />
			<div className="hidden sm:block absolute right-4 md:right-8 lg:right-20 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#4E6E5D]/40 to-transparent" />
  
			<div className="hidden sm:block absolute left-0 right-0 top-4 md:top-8 h-[2px] bg-gradient-to-r from-transparent via-[#4E6E5D]/40 to-transparent" />
			<div className="hidden sm:block absolute left-4 md:left-8 lg:left-20 top-4 md:top-8 w-8 md:w-12 h-[2px] bg-gradient-to-r from-[#4E6E5D]/40 to-transparent" />
			<div className="hidden sm:block absolute right-4 md:right-8 lg:right-20 top-4 md:top-8 w-8 md:w-12 h-[2px] bg-gradient-to-l from-[#4E6E5D]/40 to-transparent" />
  
			<div className="hidden sm:block absolute left-0 right-0 bottom-4 md:bottom-8 h-[2px] bg-gradient-to-r from-transparent via-[#4E6E5D]/40 to-transparent" />
			<div className="hidden sm:block absolute left-4 md:left-8 lg:left-20 bottom-4 md:bottom-8 w-8 md:w-12 h-[2px] bg-gradient-to-r from-[#4E6E5D]/40 to-transparent" />
			<div className="hidden sm:block absolute right-4 md:right-8 lg:right-20 bottom-4 md:bottom-8 w-8 md:w-12 h-[2px] bg-gradient-to-l from-[#4E6E5D]/40 to-transparent" />


  <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 md:pt-40">
    <div className="flex flex-col max-w-3xl mx-4 sm:mx-6 lg:mx-8">
      <div className="flex flex-wrap gap-3 sm:gap-4 opacity-0 animate-slideUp">
        <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm tracking-wider text-[#4E6E5D] border border-[#4E6E5D]/20 rounded-full">
          FRONT-END DEVELOPER
        </span>
        <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm tracking-wider text-[#4E6E5D] border border-[#4E6E5D]/20 rounded-full">
          WEB DESIGNER
        </span>
      </div>

      <div className="mt-6 sm:mt-8 space-y-2">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-500 opacity-0 animate-slideUp delay-200 leading-tight">
          Creating Digital
          <span className="block mt-2 text-[#4E6E5D]">Experiences</span>
        </h1>
      </div>

      <p className="mt-4 sm:mt-6 md:mt-8 text-sm sm:text-base md:text-lg text-gray-400 max-w-lg opacity-0 animate-slideUp delay-400">
        Hey, I'm <span className="text-white">Zeyad</span>. 
        I combine clean code with creative design to build modern web solutions.
      </p>

      <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 opacity-0 animate-slideUp delay-600">
        <a
          href="https://zmegahed.github.io/Zayad-Megahed-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-2 text-[#4E6E5D] hover:text-white transition-all duration-300"
        >
          <span className="absolute -inset-x-4 -inset-y-2 border border-[#4E6E5D]/20 rounded-lg scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300" />
          <span className="relative text-sm sm:text-base">View Resume</span>
          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 relative group-hover:translate-x-1 transition-transform" />
        </a>
        
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-[#4E6E5D] rounded-full animate-pulse" />
          <span className="text-xs sm:text-sm text-gray-400">Available for Opportunities</span>
        </div>
      </div>
    </div>
  </div>

  <div className="absolute bottom-4 sm:bottom-8 md:bottom-12 right-4 sm:right-8 lg:right-24 flex items-center gap-4 text-xs sm:text-sm text-gray-500">
    <div className="w-6 sm:w-8 h-px bg-gray-500/50" />
    <span>2024</span>
  </div>
</section>

      {/* About Section */}
      <section id="about" className="relative py-28 bg-[#050517] overflow-hidden">
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
    <div className="max-w-4xl mx-auto text-center">
      <div ref={headerRef} className={`transform transition-all duration-1000 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <p className="text-[#4E6E5D] uppercase text-sm tracking-wider mb-4">A Little About Me</p>
        <h2 className="text-4xl font-bold text-white">Crafting Digital Experiences</h2>
      </div>

      <div ref={bioRef} className={`mt-12 transform transition-all duration-1000 delay-200 ${bioVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <p className="text-lg text-gray-300 leading-relaxed">
          Hi, I'm Zeyad - a passionate web developer and designer based in the DMV area. I've been crafting beautiful and functional websites since high school, always driven by a desire to push the boundaries of what's possible on the web.
        </p>
        <p className="mt-6 text-lg text-gray-300 leading-relaxed">
          When I'm not coding, you can find me exploring new technologies, watching soccer, or enjoying the great outdoors. I'm constantly curious and eager to learn, and I love collaborating with others to bring innovative ideas to life.
        </p>
      </div>

      <div ref={skillsRef} className={`mt-20 transform transition-all duration-1000 delay-400 ${skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <SkillCarousel />
      </div>
    </div>
  </div>
</section>
		  
	  <section id="education"
  ref={educationRef}
  className="relative py-24 bg-[#050517]"
>
  <div className="max-w-7xl mx-auto px-6">
    <div className={`transform transition-all duration-1000
      ${educationVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
      <div className="inline-block">
        <div className="flex items-center gap-3 mb-2">
          <div className="h-px w-8 bg-[#4E6E5D]"/>
          <p className="text-[#4E6E5D] uppercase text-sm tracking-wider font-medium">Education</p>
        </div>
        <h2 className="text-3xl font-bold text-white">Academic Background</h2>
      </div>
    </div>

    <div className="grid lg:grid-cols-2 gap-12 mt-12">
      <div className={`transform transition-all duration-700 delay-200
        ${educationVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
        <div className="relative">
          <div className="border-l-2 border-[#4E6E5D] pl-6 py-2">
            <div className="flex items-center gap-4 mb-4">
              <GraduationCap className="text-[#4E6E5D] w-6 h-6" />
              <div>
                <h3 className="text-xl font-bold text-white">George Mason University</h3>
                <p className="text-gray-400">Fairfax, VA</p>
              </div>
            </div>
            
            <div className="space-y-2 mb-6">
              <p className="text-lg text-white">Bachelor of Science in Information Technology</p>
              <p className="text-[#4E6E5D]">Concentration: Web Application Development</p>
              <p className="text-gray-300">GPA: 3.7/4.0 - Cum Laude, Dean's List</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <div className={`transform transition-all duration-700 delay-400
          ${educationVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
          <h3 className="text-lg font-semibold text-white mb-4">Relevant Coursework</h3>
          <div className="grid gap-2">
            {[
              "Front-End Web Development",
              "Web Development using Content Management Systems",
              "Web Server Administration",
              "Multimedia and Web Design",
              "Data Structures and Algorithms in Python"
            ].map((course, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 text-gray-300 hover:text-[#4E6E5D] transition-colors duration-300"
              >
                <ChevronRight className="text-[#4E6E5D] w-4 h-4" />
                <span>{course}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
	  
	  
	  
      {/* Experience Section */}
       <section id="experience"
      ref={experienceRef} 
      className="relative py-24 bg-[#050517] overflow-hidden"
    >

      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 transform 
          ${experienceVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
        >
         <div className={`transform transition-all duration-1000
            ${experienceVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <div className="inline-block">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-px w-8 bg-[#4E6E5D]"/>
                <p className="text-[#4E6E5D] uppercase text-sm tracking-wider">Experience</p>
              </div>
              <h2 className="text-4xl font-bold text-white">My Experience So Far</h2>
            </div>
          </div>
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
                  className={`
                    cursor-pointer rounded-xl p-6 transition-all duration-500
                    ${activeExperience === index 
                      ? 'bg-white/10 backdrop-blur-sm border-l-4 border-[#4E6E5D] scale-105' 
                      : 'bg-white/5 hover:bg-white/10 hover:scale-102'}
                  `}
                >
                  <div className="flex items-center gap-4">
                    <div className={`
                      p-3 rounded-lg transition-colors duration-300
                      ${activeExperience === index ? 'bg-[#4E6E5D]' : 'bg-gray-800'}
                    `}>
                      <Building2 
                        className={`transition-colors duration-300
                          ${activeExperience === index ? 'text-[#ffffff]' : 'text-gray-400'}
                        `}
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-100">{exp.company}</h3>
                      <p className="text-sm text-gray-400">{exp.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={`lg:col-span-8 transition-all duration-1000 delay-500
            ${experienceVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 transition-all duration-500 hover:bg-white/15">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {[
                  { icon: Calendar, bg: '[#4E6E5D]', label: 'Duration', value: experiences[activeExperience].duration },
                  { icon: Users, bg: 'purple', label: 'Team', value: experiences[activeExperience].team }
                ].map((item, index) => (
                  <div key={index} className={`transform transition-all duration-500 delay-${(index + 1) * 100}
                    ${experienceVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="flex items-center gap-3">
                      <div className={`p-3 bg-${item.bg}-900/30 rounded-lg`}>
                        <item.icon className={`text-${item.bg}-400`} />
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
                <h4 className="text-xl font-bold text-gray-100 mb-4">Overview</h4>
                <p className="text-gray-300 leading-relaxed">
                  {experiences[activeExperience].description}
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-gray-100 mb-4">Key Achievements</h4>
                <div className="space-y-4">
                  {experiences[activeExperience].achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className={`flex items-start gap-3 p-4 rounded-lg transition-all duration-500 
                        delay-${(index + 1) * 200} hover:bg-white/5
                        ${experienceVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                    >
                      <div className="p-2 bg-[#4E6E5D] rounded-lg mt-1">
                        <Trophy className="text-[#FFFFFF] w-4 h-4" />
                      </div>
                      <p className="text-gray-300">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Projects Section */}
       <section id="projects" className="relative py-24 bg-[#050517]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-px w-8 bg-[#4E6E5D]"/>
                <p className="text-[#4E6E5D] uppercase text-sm tracking-wider font-medium">Portfolio</p>
              </div>
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
                <button 
                  onClick={handleViewAll}
                  className="inline-flex items-center gap-2 text-[#4E6E5D] hover:text-white transition-colors duration-300"
                >
                  <span>View All</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <div 
              key={project.id}
              className="group bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-[#4E6E5D] 
                       transition-all duration-500 hover:bg-white/10"
            >
              {project.images && project.images[0] && (
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.images[0]} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              )}

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>

                {project.technologies && project.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 text-sm bg-[#4E6E5D] text-[#FFFFFF] rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {project.live && (
                  <div className="flex justify-between items-center">
                    <div className="flex gap-4">
                      <a 
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#4E6E5D] hover:text-[#4f6e4e] transition-colors duration-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {project.highlights && project.highlights.length > 0 && (
                <div className="px-6 pb-6">
                  <div className="pt-4 border-t border-white/10">
                    <h4 className="text-sm font-medium text-gray-300 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      {project.highlights.slice(0, 2).map((highlight, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-[#4E6E5D]">•</span>
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

      {/* Contact Section */}
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