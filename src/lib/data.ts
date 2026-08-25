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
