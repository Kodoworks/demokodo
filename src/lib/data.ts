export type Program = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  duration: string;
  durationShort: string;
  salary: string;
  roles: string;
  roleTags: string[];
  idealFor: string;
  features: string[];
  skills: string[];
  category: string;
  catColor: "ai" | "cloud" | "dev" | "security" | "data" | "genai" | "enterprise";
  icon:
    | "brain"
    | "cloud"
    | "code"
    | "shield"
    | "chart"
    | "sparkles"
    | "workflow";
};

export const programs: Program[] = [
  {
    slug: "ai-engineering-ml",
    name: "AI & Machine Learning",
    shortName: "AI & Machine Learning",
    tagline: "From zero to production AI.",
    duration: "24 Weeks",
    durationShort: "24 wk",
    salary: "₹6 to ₹24 LPA",
    roles: "AI Engineer · ML Engineer · Data Scientist",
    roleTags: ["AI Engineer", "ML Engineer", "Data Scientist"],
    idealFor: "Fresh graduates and professionals moving into AI/ML roles.",
    features: [
      "390+ hours of live instruction across 5 structured phases",
      "Build 5 deployed AI products, including a RAG chatbot and a full MLOps pipeline",
      "1:8 mentor-to-fellow ratio throughout the program",
      "Portfolio-ready projects reviewed by practising engineers",
    ],
    skills: ["Python", "Machine Learning", "Deep Learning", "NLP", "Computer Vision", "Generative AI", "MLOps"],
    category: "AI & Machine Learning",
    catColor: "ai",
    icon: "brain",
  },
  {
    slug: "cloud-devops",
    name: "Cloud Engineering & DevOps",
    shortName: "Cloud Engineering & DevOps",
    tagline: "Build the infrastructure every product runs on.",
    duration: "6 Months",
    durationShort: "6 mo",
    salary: "₹8 to ₹28 LPA",
    roles: "Cloud Engineer · DevOps Engineer · SRE",
    roleTags: ["Cloud Engineer", "DevOps", "SRE"],
    idealFor: "Professionals targeting Cloud, DevOps or SRE roles.",
    features: [
      "Deploy on live AWS & GCP infrastructure, not sandboxes",
      "CI/CD, Docker, Kubernetes & Terraform hands-on",
      "AWS Solutions Architect exam prep included",
      "Capstone shipped on live cloud infrastructure",
    ],
    skills: ["AWS", "GCP", "Docker", "Kubernetes", "Terraform", "CI/CD", "Linux"],
    category: "Cloud & DevOps",
    catColor: "cloud",
    icon: "cloud",
  },
  {
    slug: "full-stack-development",
    name: "Java Full Stack Development",
    shortName: "Java Full Stack Development",
    tagline: "Ship real products. With AI built in.",
    duration: "24 Weeks",
    durationShort: "24 wk",
    salary: "₹5 to ₹20 LPA",
    roles: "Full-Stack Developer · Product Engineer",
    roleTags: ["Full-Stack Dev", "Product Engineer"],
    idealFor: "Anyone targeting the highest-volume tech hiring market.",
    features: [
      "5+ full-stack apps, one fully AI-integrated end-to-end",
      "Frontend, backend, databases & system design",
      "Widest hiring demand of any KodoWorks portfolio",
      "Direct mentorship from full-stack engineers",
    ],
    skills: ["Core Java", "Spring Boot", "REST APIs", "Angular / React", "MySQL", "Microservices", "DevOps Basics"],
    category: "Development",
    catColor: "dev",
    icon: "code",
  },
  {
    slug: "cybersecurity",
    name: "Cybersecurity",
    shortName: "Cybersecurity",
    tagline: "Stop attacks before they happen.",
    duration: "24 Weeks",
    durationShort: "24 wk",
    salary: "₹5 to ₹25 LPA",
    roles: "SOC Analyst · Penetration Tester · Security Engineer",
    roleTags: ["SOC Analyst", "Pen Tester"],
    idealFor: "Professionals moving into security analyst or SOC roles.",
    features: [
      "Real penetration tests, VAPT projects & SOC simulations",
      "CEH exam prep included",
      "Network, web application & cloud security coverage",
      "Labs modeled on live-fire attack scenarios",
    ],
    skills: ["Ethical Hacking", "Linux", "Networking", "SIEM", "Cloud Security", "SOC Operations", "Risk Management"],
    category: "Security",
    catColor: "security",
    icon: "shield",
  },
  {
    slug: "data-science",
    name: "Data Intelligence & Engineering",
    shortName: "Data Intelligence & Engineering",
    tagline: "Own the data. Tell the story.",
    duration: "24 Weeks",
    durationShort: "24 wk",
    salary: "₹5 to ₹18 LPA",
    roles: "Data Analyst · Business Analyst · BI Developer",
    roleTags: ["Data Analyst", "BI Developer"],
    idealFor: "Analysts, graduates & non-tech professionals entering data roles.",
    features: [
      "SQL, Python, Tableau, Power BI & ML in one program",
      "6 real-world projects incl. BI dashboards & predictive models",
      "Built for technical and non-technical backgrounds",
      "Statistics, EDA, feature engineering & model deployment",
    ],
    skills: ["SQL", "Python", "ETL", "Data Warehousing", "NumPy & Pandas", "Power BI", "Data Analytics"],
    category: "Data",
    catColor: "data",
    icon: "chart",
  },
  {
    slug: "generative-ai",
    name: "Generative AI for Professionals",
    shortName: "Generative AI for Professionals",
    tagline: "From prompt engineering to applied GenAI.",
    duration: "9 Months",
    durationShort: "9 mo",
    salary: "₹4 to ₹24 LPA",
    roles: "Marketing · Finance · Operations · Management",
    roleTags: ["GenAI Specialist"],
    idealFor: "Working professionals upskilling into GenAI roles.",
    features: [
      "Prompt engineering fundamentals to applied systems",
      "Real GenAI products using LLMs, RAG & agentic workflows",
      "Designed around a working professional's schedule",
      "Career guidance for GenAI role transitions",
    ],
    skills: ["Prompt Engineering", "LLMs", "RAG", "Agentic Workflows", "LangChain", "Fine-Tuning", "AI Ethics"],
    category: "Generative AI",
    catColor: "genai",
    icon: "sparkles",
  },
  {
    slug: "servicenow-platform",
    name: "ServiceNow Admin & Developer",
    shortName: "ServiceNow Admin & Developer",
    tagline: "From platform config to enterprise development.",
    duration: "24 Weeks",
    durationShort: "24 wk",
    salary: "₹6 to ₹18 LPA",
    roles: "ServiceNow Developer · ITSM Consultant · Platform Engineer",
    roleTags: ["ServiceNow Dev", "Platform Eng"],
    idealFor: "Professionals targeting ServiceNow development or ITSM roles.",
    features: [
      "Configuration through enterprise-grade development",
      "ITSM, ITOM & custom application development",
      "Real enterprise workflow automation projects",
      "Career guidance for ITSM/platform roles",
    ],
    skills: ["ITSM", "CMDB", "Integrations", "Workflows", "Service Portal", "App Engine"],
    category: "Enterprise",
    catColor: "enterprise",
    icon: "workflow",
  },
];

export const stats = [
  { value: "7", label: "Fellowship Programs" },
  { value: "95%", label: "Placement Rate, Verified" },
  { value: "150+", label: "Hiring Partners" },
  { value: "1:8", label: "Mentor-to-Fellow Ratio" },
  { value: "360°", label: "Career Support" },
  { value: "100%", label: "Industry Built" },
];

export const heroStats = [
  { value: "7", label: "Fellowship Programs" },
  { value: "3-in-1", label: "Talent Ecosystem" },
  { value: "100%", label: "Industry Built" },
  { value: "360°", label: "Career Support" },
];

export const valueProps = [
  {
    icon: "rocket",
    title: "Live Client-Modeled Work",
    description:
      "Projects modeled on real client engagements, not textbook exercises or sample datasets.",
  },
  {
    icon: "users",
    title: "Mentorship from Corporate Leaders",
    description:
      "Learn from working engineers who ship software for a living, not full-time trainers.",
  },
  {
    icon: "target",
    title: "Structured Placement Outcomes",
    description:
      "A transparent, score-based advancement system — not a vague promise of assistance.",
  },
  {
    icon: "usersRound",
    title: "Low Mentor-to-Fellow Ratio",
    description: "A 1:8 ratio keeps code review and feedback close and personal.",
  },
  {
    icon: "folderGit",
    title: "Portfolio-Ready Deliverables",
    description: "You leave with deployed, demonstrable work — not just a certificate.",
  },
  {
    icon: "bookCheck",
    title: "Engineer-Designed Curriculum",
    description: "Built and updated continuously by practitioners, as the technology changes.",
  },
];

export const comparisonRows = [
  { feature: "Who runs the program", kodo: "A practising technology company", typical: "A training or education-only business" },
  { feature: "Project work", kodo: "Live project work modeled on real client engagements", typical: "Simulated exercises or sample datasets" },
  { feature: "Mentors", kodo: "Working engineers who ship software professionally", typical: "Full-time trainers or instructors" },
  { feature: "Curriculum updates", kodo: "Revised as the technology itself changes", typical: "Updated on a fixed academic calendar" },
  { feature: "Placement pathway", kodo: "Defined, score-based, and transparent", typical: "Vague or “placement assistance” only" },
  { feature: "Program duration", kodo: "5–7 months, project-driven", typical: "9–18 months, lecture-driven" },
  { feature: "Certification", kodo: "Issued by a technology company, not a training brand", typical: "Issued by an academy or training institute" },
  { feature: "What you leave with", kodo: "Deployed, demonstrable project work", typical: "A course completion certificate" },
];

export const placementPathway = [
  {
    phase: "Phase 01",
    title: "Build & learn",
    description: "Complete live projects and phase assessments with mentor feedback.",
    icon: "trendingUp",
    featured: false,
  },
  {
    phase: "Phase 02",
    title: "Earn your score",
    description: "Projects, assessments and reviews roll into one transparent readiness score.",
    icon: "checkSquare",
    featured: false,
  },
  {
    phase: "Score gate",
    title: "Unlock placement",
    description: "Cross the threshold and the KodoWorks hiring network opens up to you.",
    icon: "lock",
    featured: true,
  },
  {
    phase: "Phase 04",
    title: "Interview prep",
    description: "Mock interviews, portfolio reviews and referrals to matched hiring partners.",
    icon: "messageSquare",
    featured: false,
  },
  {
    phase: "Phase 05",
    title: "Get hired",
    description: "Land the role, with a 95% placement rate across the fellow network.",
    icon: "star",
    featured: false,
  },
];

export const faqs = [
  {
    question: "Do I need a computer-science degree to join?",
    answer:
      "No. Our fellows come from a mix of backgrounds. What matters is your willingness to build — the program is structured to take you from fundamentals to production-grade work.",
  },
  {
    question: "How is this different from an online course?",
    answer:
      "KodoWorks is run by a practising technology company, not a training academy. You work on live project work with a 1:8 mentor-to-fellow ratio, and mentors review your actual code, not just your attendance.",
  },
  {
    question: "How does the placement pathway work?",
    answer:
      "Placement is score-based and transparent. Projects, assessments and reviews roll into a readiness score; crossing the threshold unlocks interview prep, referrals and access to our 150+ hiring partners.",
  },
  {
    question: "Can I do a fellowship while working full-time?",
    answer:
      "Yes. Several programs are designed for working professionals, with live sessions and project work you can complete alongside a job.",
  },
  {
    question: "Is the certificate recognised by employers?",
    answer:
      "The credential is issued by a technology company and carries a verifiable unique ID — the kind of proof hiring managers actually trust.",
  },
  {
    question: "What does the fellowship cost?",
    answer:
      "Fees vary by program and duration. Talk to a mentor and we'll walk you through pricing, batch dates, and any financing options for your chosen track.",
  },
];

export type Mentor = {
  name: string;
  role: string;
  domain: string;
  icon: "brain" | "code" | "workflow" | "chart" | "shield";
};

export const mentorProfiles: Mentor[] = [
  { name: "Noble", role: "AI/ML Engineer", domain: "AI & Machine Learning", icon: "brain" },
  { name: "Vasanth D", role: "Java Architect (USA)", domain: "Java Full Stack Development", icon: "code" },
  { name: "Pavi A", role: "ServiceNow Consultant", domain: "ServiceNow Admin & Developer", icon: "workflow" },
  { name: "Mari S", role: "Manager, ServiceNow", domain: "ServiceNow Admin & Developer", icon: "workflow" },
  { name: "Manoj M", role: "Data Architect", domain: "Data Intelligence & Engineering", icon: "chart" },
  { name: "Divesh", role: "Senior Data Engineer", domain: "Data Intelligence & Engineering", icon: "chart" },
  { name: "Arun A", role: "Cybersecurity Engineer", domain: "Cybersecurity", icon: "shield" },
];

export const projectShowcase = [
  { title: "RAG Chatbot", tag: "AI Engineering & ML", metric: "Retrieval-augmented, production-deployed" },
  { title: "MLOps Pipeline", tag: "AI Engineering & ML", metric: "End-to-end training-to-deploy pipeline" },
  { title: "Live AWS/GCP Infrastructure", tag: "Cloud Engineering & DevOps", metric: "Terraform + Kubernetes at scale" },
  { title: "VAPT & SOC Simulation", tag: "Cybersecurity", metric: "Live-fire attack & defense labs" },
  { title: "BI Dashboards & Forecasting", tag: "Data Science & Analytics", metric: "Tableau + Power BI + ML models" },
  { title: "Enterprise Workflow Automation", tag: "ServiceNow & Platform", metric: "ITSM/ITOM build-outs" },
];

export const audiences = [
  {
    key: "students",
    index: "01",
    title: "Students",
    description: "Build real engineering experience before you graduate.",
    cta: "Explore Student Programs",
    href: "/for-students",
  },
  {
    key: "professionals",
    index: "02",
    title: "Working Professionals",
    description: "Move into AI, Cloud, Data or Cybersecurity without putting your career on pause.",
    cta: "Explore Professional Programs",
    href: "/for-professionals",
  },
  {
    key: "colleges",
    index: "03",
    title: "Colleges & Institutions",
    description: "Build an industry-ready technology talent pipeline on campus.",
    cta: "Partner With KodoWorks",
    href: "/for-colleges",
  },
  {
    key: "corporates",
    index: "04",
    title: "Companies & Recruiters",
    description: "Hire pre-vetted talent trained on real engineering problems.",
    cta: "Hire From KodoWorks",
    href: "/for-companies",
  },
];

export const placementTiers = [
  {
    range: "80%+ Score",
    title: "Guaranteed Placement",
    description:
      "Score 80% or above across program assessments and capstone, and receive a guaranteed full-time offer through our hiring network.",
    featured: true,
  },
  {
    range: "60–79% Score",
    title: "Placement Assistance",
    description:
      "Active referrals, resume support, mock interview sessions, and access to our hiring partner network.",
    featured: false,
  },
  {
    range: "Every Fellow",
    title: "Always Alumni",
    description:
      "Regardless of score, every fellow receives a certificate, alumni community access, and self-paced revision materials for life.",
    featured: false,
  },
];

export const testimonials = [
  {
    name: "Gayathri Anandh",
    role: "Product Intern",
    quote:
      "Hands-on product development during internship helped bridge theory with practice. Gained clarity on building applications and applying AI & ML concepts in real systems — a turning point in my learning journey.",
  },
  {
    name: "Ajith Kumar C",
    role: "Junior Programmer",
    quote:
      "KodoWorks provided immersive, hands-on training building a good understanding of software development principles and backend concepts. It sharpened my problem-solving and industry-practice understanding.",
  },
  {
    name: "Suriya Prabakaran",
    role: "Junior Programmer",
    quote:
      "KodoWorks gave me a solid foundation in Java, Python, and SpringBoot, while sharpening technical skills through hands-on learning. Their employer network helped me secure placement.",
  },
  {
    name: "Sunil Kumar A",
    role: "Junior Programmer",
    quote:
      "KodoWorks transformed my technical skills and equipped me with industry-ready expertise in software development — pivotal in shaping my career path and landing my placement.",
  },
  {
    name: "Dineshraj N",
    role: "Junior AI & ML Engineer",
    quote:
      "The AI & ML Program combines structured learning, fundamentals, and mentorship to sharpen coding and problem-solving skills. With consistent effort, it's the perfect program.",
  },
   {
    name: "Dharani",
    role: "Product Intern",
    quote:
      "Working on real-world projects during the internship transformed my understanding from concepts to practical execution. It strengthened my problem-solving skills and gave me valuable confidence in applying AI & ML technologies to real applications.",
  },
];

export const certifications = [
 
  { issuer: "EC-Council", name: "Certified Ethical Hacker (CEH)" },
  { issuer: "CompTIA", name: "Security+ Certified" },
  { issuer: "Tableau", name: "Desktop Specialist" },
  { issuer: "ServiceNow", name: "Certified Application Developer" },
  { issuer: "ServiceNow", name: "Certified System Administrator" },
  
  { issuer: "CNCF", name: "Official Content" },
];

export const placedStudents = [
  { name: "Sedhumadhavan", company: "TCS", logo: "/images/logos/tcs.png" },
  { name: "Dinesh Kumar", company: "ExpertsPro", logo: "/images/logos/expertspro.svg" },
  { name: "Kishore Kumar", company: "ExpertsPro", logo: "/images/logos/expertspro.svg" },
];

export const navLinks = [
  { label: "Programs", href: "/programs" },
  { label: "Why KodoWorks", href: "/why-kodoworks" },
  { label: "For Students", href: "/for-students" },
  { label: "For Professionals", href: "/for-professionals" },
  { label: "For Colleges", href: "/for-colleges" },
  { label: "For Companies", href: "/for-companies" },
  { label: "About", href: "/about" },
];

export const footerLinks = {
  company: [
    { label: "About KodoWorks", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Contact Us", href: "/contact" },
  ],
  institutions: [
    { label: "Campus Connect (Colleges)", href: "/for-colleges" },
    { label: "Corporate Training", href: "/for-companies" },
    { label: "Hire from Kodo", href: "/for-companies" },
  ],
  programs: programs.map((p) => ({ label: p.shortName, href: `/courses/${p.slug}` })),
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Refund Policy", href: "/refund-policy" },
  ],
};

export const contactInfo = {
  address: "Bushido Towers, Coimbatore, India",
  phones: ["+91 89259 32839", "+91 89259 32841"],
  email: "contact@kodoworks.in",
};

export const approachStatement = {
  eyebrow: "Our Approach",
  title: "More Than a Training Program",
  subtitle: "A practical path towards your technology career.",
  paragraphs: [
    "KodoWorks is designed for learners who want to do more than simply complete a course. Our approach focuses on developing practical skills, professional confidence and a portfolio of work that demonstrates what you can do.",
    "Whether you're a student starting your career, a professional looking to upskill or someone planning a career transition, KodoWorks provides a structured environment to help you move forward.",
  ],
};

export const careerGrowthStatement = {
  eyebrow: "The Outcome",
  title: "Built for Real Career Growth",
  subtitle: "Your learning should lead somewhere.",
  intro:
    "At KodoWorks, every program is designed with a clear purpose — helping you develop skills that are relevant beyond the classroom.",
  gains: [
    "Practical technology skills",
    "Hands-on project experience",
    "Guidance from industry professionals",
    "A stronger professional portfolio",
    "Improved problem-solving abilities",
    "Career and interview preparation",
    "Confidence to take the next step",
  ],
};

export const deliveryModes = [
  { title: "Class Room", description: "Interactive in-person training." },
  { title: "Online Live", description: "Live sessions with expert trainers." },
  { title: "Hybrid", description: "Best of both worlds." },
];

export const engagementModels = [
  { title: "For Colleges", description: "Campus training, internships, student counselling." },
  { title: "For Corporates", description: "Upskilling, workforce training, dedicated learning programs." },
  { title: "Staff Augmentation", description: "Hire trained talent for your projects, on-demand." },
];

export type AudienceBenefit = { title: string; description: string };

export const audiencePages: Record<
  "students" | "professionals" | "colleges" | "corporates",
  { eyebrow: string; title: string; subtitle: string; benefits: AudienceBenefit[] }
> = {
  students: {
    eyebrow: "For Students",
    title: "Build real engineering experience before you graduate.",
    subtitle:
      "A fellowship built for students who want to walk into their first job already having shipped software, not just studied it.",
    benefits: [
      {
        title: "Live, Client-Modeled Projects",
        description: "Work on problems modeled on real client engagements, not textbook exercises or sample datasets.",
      },
      {
        title: "Mentorship at a 1:8 Ratio",
        description: "Learn directly from working engineers who ship software professionally, with close, personal code review.",
      },
      {
        title: "Portfolio-Ready by Graduation",
        description: "Leave with deployed, demonstrable project work, not just a certificate.",
      },
      {
        title: "A Transparent Path to Placement",
        description: "A score-based, defined placement pathway, not a vague promise of assistance.",
      },
    ],
  },
  professionals: {
    eyebrow: "For Working Professionals",
    title: "Move into AI, Cloud, Data or Cybersecurity without pausing your career.",
    subtitle:
      "Online-live delivery built around a working schedule, so you can upskill into a new domain without stepping away from your job.",
    benefits: [
      {
        title: "Move Without Pausing Your Career",
        description: "Online-live sessions with expert trainers, scheduled around a working professional's day.",
      },
      {
        title: "Curriculum Revised as Technology Changes",
        description: "Built and updated continuously by practitioners, not on a fixed academic calendar.",
      },
      {
        title: "A Portfolio You Can Show Today",
        description: "Deployed, demonstrable project work you can put in front of a hiring manager immediately.",
      },
      {
        title: "150+ Hiring Partners",
        description: "Move into AI, Cloud, Data or Cybersecurity through an active network of 150+ hiring partners.",
      },
    ],
  },
  colleges: {
    eyebrow: "For Colleges & Institutions",
    title: "Build an industry-ready technology talent pipeline on campus.",
    subtitle:
      "Campus training, structured internships and student counselling, run by a practising technology company, not a training-only vendor.",
    benefits: [
      {
        title: "Campus Training",
        description: "Interactive, in-person delivery, run directly on campus by working engineers.",
      },
      {
        title: "Structured Internships",
        description: "A defined pipeline from coursework into real internship placements.",
      },
      {
        title: "Student Counselling",
        description: "One-on-one guidance helping students choose the right technology track for them.",
      },
      {
        title: "A Measurable Placement Outcome",
        description: "A 95% placement rate for fellows who complete the program, tracked and reported back to you.",
      },
    ],
  },
  corporates: {
    eyebrow: "For Companies & Recruiters",
    title: "Hire pre-vetted talent trained on real engineering problems.",
    subtitle:
      "Staff augmentation and workforce upskilling from a technology company that trains to a transparent, score-based readiness bar.",
    benefits: [
      {
        title: "Pre-Vetted, Score-Gated Talent",
        description: "Every fellow crosses a transparent readiness score before entering our hiring network.",
      },
      {
        title: "Staff Augmentation, On-Demand",
        description: "Hire trained talent for your projects on demand, without a lengthy ramp-up.",
      },
      {
        title: "Workforce Upskilling",
        description: "Dedicated learning programs to upskill your existing team in AI, Cloud, Data or Cybersecurity.",
      },
      {
        title: "150+ Company Network",
        description: "Join a network of 150+ hiring partners already recruiting from KodoWorks.",
      },
    ],
  },
};

export const studentJourney = [
  {
    step: "01",
    title: "Choose Your Path",
    description: "Explore technology domains and choose a program aligned with your interests and career goals.",
  },
  {
    step: "02",
    title: "Learn the Fundamentals",
    description: "Build a strong understanding of the core concepts and technologies required for your chosen path.",
  },
  {
    step: "03",
    title: "Build Real Projects",
    description: "Put your learning into practice through hands-on projects and problem-solving.",
  },
  {
    step: "04",
    title: "Learn from Feedback",
    description: "Work with mentors, improve your approach and strengthen your technical skills.",
  },
  {
    step: "05",
    title: "Build Your Portfolio",
    description: "Organise your best work into a portfolio that demonstrates your practical capabilities.",
  },
  {
    step: "06",
    title: "Prepare for Opportunities",
    description: "Develop interview confidence and prepare to take the next step in your technology career.",
  },
];

export const studentPainPoints = {
  eyebrow: "The Reality",
  title: "College teaches the foundation. Experience builds confidence.",
  rows: [
    {
      pain: "I know the theory, but I haven't built much.",
      solution: "Work on practical projects and apply your skills.",
    },
    {
      pain: "I don't know which technology career to choose.",
      solution: "Explore structured pathways across in-demand domains.",
    },
    {
      pain: "I don't have a strong portfolio.",
      solution: "Build demonstrable projects throughout your journey.",
    },
    {
      pain: "I'm nervous about technical interviews.",
      solution: "Practice explaining your work and prepare for career opportunities.",
    },
    {
      pain: "I need guidance from someone experienced.",
      solution: "Learn with mentorship and regular feedback.",
    },
  ],
};

export const studentFaqs = [
  {
    question: "Can I join while I'm still studying?",
    answer: "Yes. The program is designed to help students build practical skills alongside their academic journey.",
  },
  {
    question: "Do I need previous industry experience?",
    answer: "No. You start by building the right foundation and progress through practical learning and projects.",
  },
  {
    question: "Which program should I choose?",
    answer:
      "Your choice depends on your interests, current skills and career goals. Our team can help you identify a suitable path.",
  },
  {
    question: "Will I work on projects?",
    answer: "Yes. Practical project work is an important part of the KodoWorks learning experience.",
  },
  {
    question: "Can this help me build my portfolio?",
    answer: "Yes. The goal is to help you create meaningful work that demonstrates your skills and learning.",
  },
];

export const professionalApproach = {
  eyebrow: "Our Approach",
  title: "Your Next Career Move Starts Alongside Your Current One",
  subtitle: "Upskill without stepping away.",
  paragraphs: [
    "Changing your career shouldn't mean starting over. Whether you're looking to move into a new technology domain, strengthen your current skills or prepare for better opportunities, KodoWorks helps you learn with a structure designed around a working professional's schedule.",
    "You continue working. You keep learning. You build what's next.",
  ],
};

export const professionalPainPoints = {
  eyebrow: "The Reality",
  title: "Ready for a Career Change, but Not Sure Where to Start?",
  subtitle: "You may already have experience. What you need is a clear path towards your next opportunity.",
  rows: [
    {
      pain: "I want to move into a better technology role.",
      solution: "Build skills aligned with your target career path and create practical work that supports your transition.",
    },
    {
      pain: "My current skills are becoming outdated.",
      solution: "Stay closer to technologies and workflows that are relevant in today's technology environment.",
    },
    {
      pain: "I don't know which domain is right for me.",
      solution: "Explore the paths available and understand which direction fits your experience, interests and career goals.",
    },
    {
      pain: "I can't leave my job to study full-time.",
      solution: "Learn through a schedule designed to work alongside your professional commitments.",
    },
    {
      pain: "I need proof of what I can do.",
      solution: "Build projects and a portfolio that help demonstrate your practical capabilities.",
    },
  ],
};

export const professionalReasons = {
  eyebrow: "The Benefits",
  title: "Why Professionals Choose KodoWorks",
  items: [
    {
      icon: "clock",
      title: "Learn while you work",
      description: "Continue building your career while preparing for the next stage.",
    },
    {
      icon: "compass",
      title: "Follow a clear path",
      description: "Avoid random courses and build towards a defined career goal.",
    },
    {
      icon: "users",
      title: "Learn from practitioners",
      description: "Gain guidance from professionals with real-world technology experience.",
    },
    {
      icon: "code",
      title: "Build practical experience",
      description: "Apply your learning instead of only consuming theory.",
    },
    {
      icon: "target",
      title: "Prepare for opportunities",
      description: "Strengthen your portfolio and career readiness for your next move.",
    },
    {
      icon: "trending",
      title: "Keep growing",
      description: "Develop skills that can support your long-term technology career.",
    },
  ] as { icon: "clock" | "compass" | "users" | "code" | "target" | "trending"; title: string; description: string }[],
};

export const professionalFaqs = [
  {
    question: "Can I join while working full-time?",
    answer:
      "Yes. The learning structure is designed for working professionals, with live sessions scheduled around a typical workday.",
  },
  {
    question: "Do I need experience in the technology domain I choose?",
    answer: "Not always. The right starting point depends on the program and your current background.",
  },
  {
    question: "How much time do I need to spend each week?",
    answer:
      "Your time commitment depends on the program, project work and your learning pace. The program structure is designed to fit alongside professional commitments.",
  },
  {
    question: "Can I switch to a completely new technology domain?",
    answer:
      "Yes. If you're planning a career transition, the right program can help you build the knowledge and practical foundation required for a new direction.",
  },
  {
    question: "Will I build projects?",
    answer: "Yes. Practical project work should be a key part of your learning and portfolio development.",
  },
  {
    question: "How do I choose the right program?",
    answer:
      "You can discuss your current experience, interests and career goals with the KodoWorks team before choosing a path.",
  },
];

export const collegeStatement = {
  eyebrow: "For Colleges & Institutions",
  title: "Build industry readiness into the student journey.",
  paragraphs: [
    "Bridge the gap between academic learning and industry expectations with practical technology training, hands-on projects, structured internships and career guidance.",
    "Partner with KodoWorks to help students graduate with stronger skills, practical exposure and greater career confidence.",
  ],
  ctas: [
    { label: "Start a Partnership", href: "/contact", variant: "primary" as const },
    { label: "Talk to Our Team", href: "/contact", variant: "outline-dark" as const },
  ],
};

export const collegeChallenge = {
  eyebrow: "The Challenge",
  title: "Students have a degree. Industry expects experience.",
  paragraphs: [
    "Colleges play a critical role in building strong academic foundations. But today's technology industry also expects students to demonstrate practical skills, project experience and an understanding of real-world workflows.",
    "The challenge is not simply teaching more. It's creating opportunities for students to apply what they learn.",
    "KodoWorks helps institutions strengthen that connection between campus learning and industry readiness.",
  ],
};

export const campusOfferings = {
  eyebrow: "Campus Ecosystem",
  title: "What We Bring to Your Campus",
  subtitle: "A practical technology ecosystem for your students.",
  items: [
    {
      icon: "code" as const,
      title: "Industry-Relevant Training",
      description: "Deliver structured technology programs designed around current skills, tools and real-world applications.",
    },
    {
      icon: "wrench" as const,
      title: "Hands-On Learning",
      description: "Help students move beyond theory through practical assignments, challenges and project-based learning.",
    },
    {
      icon: "users" as const,
      title: "Industry Mentorship",
      description: "Give students access to experienced technology professionals who can share practical insights and guidance.",
    },
    {
      icon: "workflow" as const,
      title: "Structured Internship Pathways",
      description: "Create a clearer journey from learning and skill development towards internship opportunities and practical exposure.",
    },
    {
      icon: "compass" as const,
      title: "Career Counselling",
      description: "Help students understand different technology domains and make more informed career decisions.",
    },
    {
      icon: "award" as const,
      title: "Placement Readiness",
      description: "Support students with portfolio development, project presentation, technical preparation and career guidance.",
    },
  ],
};

export const institutionBenefits = {
  eyebrow: "Institution Outcomes",
  title: "Benefits for Your Institution",
  subtitle: "Create stronger outcomes beyond the classroom.",
  intro: "A KodoWorks partnership can help your institution:",
  items: [
    "Strengthen industry exposure for students",
    "Add practical learning opportunities",
    "Improve student career awareness",
    "Support portfolio and project development",
    "Create structured internship pathways",
    "Connect students with industry perspectives",
    "Build stronger technology communities on campus",
    "Track learning and career-readiness outcomes",
  ],
};

export const placementTeamSupport = {
  eyebrow: "For Placement Teams",
  title: "Give your placement team stronger career-ready talent.",
  intro: "Students often need more than technical knowledge before they are ready to confidently approach opportunities.",
  listIntro: "KodoWorks can help students prepare by focusing on:",
  items: [
    "Practical project experience",
    "Technical skill development",
    "Portfolio readiness",
    "Understanding technology roles",
    "Project presentation skills",
    "Interview preparation",
    "Career guidance",
  ],
  closing:
    "This complements the institution's existing placement activities by helping students build stronger evidence of their skills.",
};

export const whyPartnerReasons = {
  eyebrow: "The KodoWorks Difference",
  title: "Why Partner with KodoWorks?",
  subtitle: "Technology learning guided by real-world experience.",
  intro: "KodoWorks positions itself as a practising technology company, rather than a training-only provider.",
  items: [
    {
      title: "Practical Perspective",
      description: "Learning designed around how technology is applied in professional environments.",
    },
    {
      title: "Industry Guidance",
      description: "Students gain exposure to professionals with experience in technology and engineering.",
    },
    {
      title: "Structured Programs",
      description: "Clear learning pathways instead of disconnected sessions.",
    },
    {
      title: "Project-Focused Approach",
      description: "Students get opportunities to apply concepts and build demonstrable work.",
    },
    {
      title: "Measurable Progress",
      description: "Track participation, learning activities and relevant program outcomes.",
    },
    {
      title: "Flexible Partnership Models",
      description: "Engagements can be designed around the institution's requirements and objectives.",
    },
  ],
};

export const collegeFaqs = [
  {
    question: "Who can partner with KodoWorks?",
    answer:
      "Engineering colleges, arts and science colleges, universities and other institutions looking to strengthen technology education and career readiness.",
  },
  {
    question: "Can programs be customised for our students?",
    answer:
      "Yes. The engagement can be discussed and structured around your institution's student needs, technology interests and objectives.",
  },
  {
    question: "Are the sessions conducted on campus?",
    answer: "Campus-based delivery can be included as part of the partnership model.",
  },
  {
    question: "Which students can participate?",
    answer:
      "Programs can be planned for students based on their academic level, existing knowledge and the technology pathway selected.",
  },
  {
    question: "Can you support internships?",
    answer:
      "KodoWorks can provide a structured pathway to help students move from learning towards relevant practical and internship opportunities.",
  },
  {
    question: "How do we start a partnership?",
    answer: "Connect with the KodoWorks team to discuss your institution's requirements and possible engagement structure.",
  },
];

export const companyStatement = {
  eyebrow: "For Companies",
  title: "Hire talent built for real-world technology roles.",
  paragraphs: [
    "Finding the right technology talent takes time. KodoWorks helps companies connect with skilled, project-ready candidates who have developed practical capabilities through structured learning and hands-on work.",
    "Build your next talent pipeline with candidates prepared for the skills your teams need.",
  ],
  ctas: [
    { label: "Hire Talent", href: "/contact", variant: "primary" as const },
    { label: "Partner with KodoWorks", href: "/contact", variant: "outline-dark" as const },
  ],
};

export const companyHiringChallenge = {
  eyebrow: "The Hiring Challenge",
  title: "Hiring potential is easy. Finding proof is harder.",
  paragraphs: [
    "A resume can tell you what a candidate has studied. A real project can show you what they can do.",
    "For growing technology teams, reviewing hundreds of applications, assessing skills and identifying the right candidates can take significant time and effort.",
    "KodoWorks helps simplify the process by creating a pathway between trained technology talent and companies looking to hire.",
  ],
};

export const companyOfferings = {
  eyebrow: "What Companies Get",
  title: "What Companies Get",
  subtitle: "A more focused way to discover technology talent.",
  items: [
    {
      icon: "users" as const,
      title: "Access to Emerging Talent",
      description: "Connect with candidates building skills across high-demand technology domains.",
    },
    {
      icon: "code" as const,
      title: "Project-Based Profiles",
      description: "Review candidates with practical project experience and demonstrable work.",
    },
    {
      icon: "compass" as const,
      title: "Relevant Technology Skills",
      description: "Explore talent across domains aligned with modern technology and business requirements.",
    },
    {
      icon: "filter" as const,
      title: "Reduced Initial Screening",
      description: "Spend less time reviewing unsuitable applications and focus on candidates relevant to your hiring needs.",
    },
    {
      icon: "target" as const,
      title: "Role-Based Talent Matching",
      description: "Share your requirements and connect with candidates whose skills align with the opportunities available.",
    },
    {
      icon: "trending" as const,
      title: "A Growing Talent Pipeline",
      description: "Build an ongoing relationship with a technology talent ecosystem instead of starting every hiring cycle from zero.",
    },
  ],
};

export const companyHiringJourney = {
  eyebrow: "The Process",
  title: "From Requirement to Interview",
  subtitle: "A simpler path to discovering the right talent.",
  steps: [
    {
      step: "01",
      title: "Share Your Requirements",
      description: "Tell us about your open roles, required skills and the type of talent you are looking for.",
    },
    {
      step: "02",
      title: "Define the Candidate Profile",
      description: "We understand the technical skills, experience level and project exposure relevant to your team.",
    },
    {
      step: "03",
      title: "Discover Relevant Talent",
      description: "Connect with candidates from relevant technology pathways based on your hiring requirements.",
    },
    {
      step: "04",
      title: "Review Project Experience",
      description: "Explore candidate profiles, skills and practical work before moving forward.",
    },
    {
      step: "05",
      title: "Interview Selected Candidates",
      description: "Shortlist suitable candidates and take them through your existing interview process.",
    },
    {
      step: "06",
      title: "Build Your Talent Pipeline",
      description: "Continue connecting with future talent as your hiring requirements grow.",
    },
  ],
};

export const companyPartnerBenefits = {
  eyebrow: "The KodoWorks Difference",
  title: "Why Partner with KodoWorks?",
  subtitle: "Because better hiring starts before the interview.",
  paragraphs: [
    "We believe the strongest technology talent is built through continuous learning, practical experience and exposure to real-world expectations.",
    "A KodoWorks partnership gives companies an opportunity to connect with candidates who are actively building their skills and preparing for technology careers.",
  ],
  intro: "Partner benefits:",
  items: [
    "Access to an emerging technology talent ecosystem",
    "Candidates with practical project experience",
    "Support for role-based talent discovery",
    "Reduced initial screening effort",
    "Opportunities to build a future hiring pipeline",
    "Access across multiple technology domains",
    "Industry engagement and collaboration opportunities",
  ],
};

export const hiringManagerSupport = {
  eyebrow: "For Hiring Managers",
  title: "Focus on conversations, not just CVs.",
  intro: "The hiring process becomes more effective when you can understand what a candidate has actually built.",
  listIntro:
    "KodoWorks encourages a practical approach to talent evaluation, helping companies explore candidates through:",
  items: [
    "Technology skills and learning pathways",
    "Practical project work",
    "Portfolio demonstrations",
    "Problem-solving approaches",
    "Technical discussions",
    "Role-relevant capabilities",
  ],
  closing: "This gives your hiring team more context before the interview process begins.",
};

export const companyFaqs = [
  {
    question: "What types of companies can partner with KodoWorks?",
    answer:
      "Technology companies, startups, enterprises and organisations with technology hiring or talent development requirements can explore a partnership.",
  },
  {
    question: "Can we hire for specific technology roles?",
    answer:
      "Yes. Companies can share their requirements, and relevant talent pathways can be explored based on the role and required skills.",
  },
  {
    question: "Are candidates experienced professionals?",
    answer:
      "The talent ecosystem can include students, fresh graduates and working professionals, depending on the program and hiring requirement.",
  },
  {
    question: "Can we build an ongoing hiring partnership?",
    answer: "Yes. Companies can explore a long-term partnership to build a continuing technology talent pipeline.",
  },
  {
    question: "Can our company participate in mentorship or industry sessions?",
    answer:
      "Yes. Industry professionals can potentially contribute through mentorship, technology talks and knowledge-sharing initiatives.",
  },
  {
    question: "How do we get started?",
    answer: "Connect with the KodoWorks team and share your company's hiring or partnership requirements.",
  },
];
