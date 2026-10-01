import Image from "next/image";
import CredentialsShowcase from "./CredentialsShowcase";
import ExperienceMedia from "./ExperienceMedia";
import FeaturedProjects from "./FeaturedProjects";
import LifePhotoGallery from "./LifePhotoGallery";
import ThemeToggle from "./ThemeToggle";

const stats = [
  { value: "1,000+", label: "devices configured, wiped, repaired, or processed" },
  { value: "30+", label: "client environments supported through daily operations" },
  { value: "3+", label: "automation tools built for real operational workflows" },
  { value: "1", label: "on-site IT owner supporting operations end to end" },
];

const capabilities = [
  { title: "IT Operations", text: "Own day-to-day technology operations in a fast-moving fulfillment environment, balancing urgent support, device readiness, documentation, & production deadlines.", tags: ["Windows", "macOS", "iPadOS", "Troubleshooting", "User Support"] },
  { title: "Asset Management", text: "Prepare, identify, wipe, configure, track, stage, & organize large volumes of client devices while maintaining clear physical & digital workflows.", tags: ["Lifecycle Management", "Inventory", "Secure Wiping", "Deployment", "Quality Control"] },
  { title: "Endpoint & Infrastructure", text: "Work across identity, endpoint security, recovery environments, printers, connectivity, remote support, & device enrollment with an operations-first mindset.", tags: ["Entra ID", "JAMF", "FileVault", "ScreenConnect", "SentinelOne"] },
  { title: "Automation", text: "Build practical software and monitoring tools when a repeatable operational problem can be solved faster, more reliably, or with better visibility through code.", tags: ["Electron", "Python", "JavaScript", "Monitoring", "Process Improvement"] },
];

const work = [
  {
    eyebrow: "Current Experience",
    title: "IT Operations & Asset Management Lead",
    company: "Phase V Fulfillment · Fort Myers, Florida",
    period: "September 2025 — Present",
    bullets: [
      "Serve as the primary onsite IT resource supporting warehouse operations, client device processing, endpoint setup, printer issues, networking, access, & production-critical troubleshooting.",
      "Promoted into the IT lead role after starting as a Warehouse Associate and taking ownership of increasingly technical operational work.",
      "Configured, wiped, repaired, staged, or processed more than 1,000 Windows PCs, Macs, & iPads across 30+ client workflows.",
      "Handle Entra ID joins, local administrator access, FileVault, JAMF-related workflows, operating-system recovery, BIOS/UEFI changes, endpoint agents, & secure device resets.",
      "Support Zebra & Brother printers, shipping stations, scanners, conference-room equipment, Wi-Fi/Ethernet connectivity, & other hardware used in daily fulfillment operations.",
      "Reorganized IT inventory & device staging areas to improve visibility, retrieval, & throughput across active work.",
    ],
  },
  {
    eyebrow: "Applied Automation",
    title: "Internal Operations Tools",
    company: "Built around real support & warehouse workflows",
    period: "2026",
    bullets: [
      "Built an Electron-based warehouse workflow application that centralizes client access & helps picking and packing teams move between required systems faster.",
      "Built an Electron timesheet utility that captures billable work & generates structured email summaries, reducing repetitive manual reporting.",
      "Built a Python monitoring system for internet connectivity and operational devices with persistent state, latency tracking, CSV history, and state-change alerts.",
      "Use programming as an operational advantage: identify friction, understand the process, build the smallest useful solution, & improve it with real feedback.",
    ],
  },
];

const previousAIExperience = [
  {
    title: "AI Data Specialist",
    company: "RWS Workforce",
    period: "September 2025 — March 2026",
    bullets: [
      "Evaluated AI-generated outputs for quality, accuracy, consistency, & adherence to detailed task guidelines.",
      "Reviewed & annotated structured data used to improve model behavior & response quality.",
      "Identified weak outputs, inconsistencies, & edge cases while maintaining reliable quality standards.",
    ],
  },
  {
    title: "AI Prompt Engineer",
    company: "Outlier AI",
    period: "November 2025 — March 2026",
    bullets: [
      "Designed, tested, & refined prompts for large language models across structured tasks.",
      "Evaluated model reasoning, instruction-following, factual accuracy, & response quality.",
      "Used iterative feedback & edge-case testing to improve prompts & AI-generated outputs.",
    ],
  },
];

const projects = [
  { title: "Warehouse Workflow App", type: "Operations Automation", description: "An Electron desktop application designed around real warehouse use, consolidating client workflows & reducing repeated navigation & login friction.", tech: ["Electron", "JavaScript", "HTML/CSS", "Workflow Automation"] },
  { title: "Billable Timesheet Tool", type: "Internal Productivity", description: "A lightweight desktop utility for recording work performed & producing consistent email-ready summaries for billing & operational reporting.", tech: ["Electron", "JavaScript", "Process Design", "Email Workflows"] },
  { title: "Workout Tracker + Hercules AI", type: "AI-Assisted Product", description: "A workout tracking application with authentication, persistent training history, progression coaching, and AI-assisted guidance built around structured fitness data.", tech: ["Python", "Flask", "SQLite", "Gemini", "Product Design"] },
  { title: "Resume Parser & Job Matcher", type: "Software Project", description: "A document-processing application that extracts resume content & scores compatibility against job descriptions across common file formats.", tech: ["Python", "Flask", "Regex", "PDF/DOCX Parsing"] },
];

const skillGroups = [
  ["Endpoint & Support", "Windows", "macOS", "iPadOS", "Hardware Diagnostics", "Remote Support", "Printer Support"],
  ["Administration", "Microsoft Entra ID", "JAMF", "FileVault", "Local Admin", "BIOS/UEFI", "OS Recovery"],
  ["Operations", "Asset Lifecycle", "Inventory Control", "Secure Wiping", "Device Deployment", "Documentation", "Quality Control"],
  ["Development & Automation", "Python", "JavaScript", "TypeScript", "React", "Electron", "SQLite", "Git/GitHub"],
];

const photos = [
  { src: "/images/surfing.webp", alt: "Carrying a surfboard into the ocean at sunset", label: "Surfboarding in Panama", className: "photo-wide" },
  { src: "/images/gym.webp", alt: "Training in the gym", label: "Strength & endurance", className: "photo-tall" },
  { src: "/images/festival.webp", alt: "At an EDM festival at night", label: "iiiPoints 2025", className: "photo-tall" },
  { src: "/images/grand-turk.webp", alt: "Traveling in Grand Turk", label: "Grand Turk", className: "photo-wide" },
  { src: "/images/panama.webp", alt: "Traveling in Panama", label: "Panama", className: "photo-tall" },
  { src: "/images/waterfall.webp", alt: "Standing in water near a waterfall", label: "Dominican Republic excursion", className: "photo-tall" },
  { src: "/images/snake.webp", alt: "Holding a snake at an event", label: "Not afraid of much", className: "photo-wide" },
];

export default function Home() {
  return (
    <main>
      <header className="nav-shell">
        <nav className="nav container" aria-label="Primary navigation">
          <a className="brand" href="#top">RD<span>.</span></a>
          <div className="nav-links">
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#credentials">Credentials</a>
            <a href="#about">About</a>
            <a href="#life">Life</a>
            <a className="nav-cta" href="https://www.linkedin.com/in/rishard-dukes" target="_blank" rel="noreferrer">Connect</a>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <section className="hero container" id="top">
        <div className="hero-copy">
          <p className="kicker"><span className="status-dot" /> IT Operations · Automation · Technical Support</p>
          <h1>IT operations with an automation mindset.</h1>
          <p className="hero-subtext">I'm Rishard Dukes, an IT Operations & Asset Management professional with a Computational Science background. I own onsite support, manage device lifecycles at scale, troubleshoot production-critical technology, & build practical tools that make operations more reliable.</p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">See what I build</a>
            <a className="button secondary" href="https://github.com/RishardDukes" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a className="button secondary" href="/images/Rishard_Dukes_Resume.pdf" target="_blank" rel="noreferrer">Resume ↗</a>
          </div>
          <div className="hero-meta"><span>Based in Southwest Florida</span><span>Open to remote or hybrid IT opportunities</span></div>
        </div>
        <div className="hero-portrait-wrap">
          <div className="hero-portrait">
            <Image src="/images/graduation.webp" alt="Rishard Dukes at graduation" fill priority sizes="(max-width: 900px) 100vw, 38vw" />
          </div>
          <div className="portrait-note"><span>FSU · Computational Science</span><strong>Class of 2024</strong></div>
        </div>
      </section>

      <section className="stats-wrap"><div className="stats container">{stats.map((stat) => <div className="stat" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div></section>

      <section className="section container" id="projects">
        <div className="section-heading"><p className="eyebrow">Featured work</p><h2>Projects that prove how I approach IT.</h2><p>The strongest work in my portfolio comes from seeing an operational problem, understanding the system around it, and building something practical enough to use in the real world.</p></div>
        <FeaturedProjects />
        <div className="section-heading"><p className="eyebrow">More builds</p><h2>Additional software & workflow projects.</h2></div>
        <div className="project-grid">{projects.map((project, index) => <article className="project-card" key={project.title}><div className="project-number">{String(index + 1).padStart(2, "0")}</div><p className="project-type">{project.type}</p><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div></article>)}</div>
      </section>

      <section className="section container" id="experience">
        <div className="section-heading"><p className="eyebrow">What I bring</p><h2>Hands-on IT operations backed by automation.</h2><p>Support, endpoint administration, asset lifecycle work, infrastructure troubleshooting, & software development all come together in the way I solve operational problems.</p></div>
        <div className="capability-grid">{capabilities.map((item) => <article className="capability-card" key={item.title}><h3>{item.title}</h3><p>{item.text}</p><div className="tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></article>)}</div>
      </section>

      <section className="section experience-section">
        <div className="container">
          <div className="section-heading narrow"><p className="eyebrow">Experience</p><h2>Production support, device operations, & process improvement.</h2></div>
          <div className="ops-feature">
            <ExperienceMedia />
            <div className="ops-copy"><p className="eyebrow">In practice</p><h3>Device prep, resets, deployment, & troubleshooting.</h3><p>Assessment, secure wiping, operating-system recovery, configuration, quality checks, staging, documentation, connectivity, and peripheral support all have to happen before systems are truly ready for production.</p><div className="tags"><span>Secure Wiping</span><span>macOS Recovery</span><span>Device Readiness</span><span>Quality Control</span></div></div>
          </div>
          <div className="timeline">{work.map((role) => <article className="role" key={role.title}><div className="role-side"><p>{role.eyebrow}</p><span>{role.period}</span></div><div className="role-body"><h3>{role.title}</h3><h4>{role.company}</h4><ul>{role.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></div></article>)}</div>
          <div className="ai-history">
            <div className="ai-history-heading">
              <p className="eyebrow">Previous AI Experience</p>
              <h3>Earlier work in AI quality review & prompt testing.</h3>
            </div>
            <div className="ai-role-grid">{previousAIExperience.map((role) => <article className="ai-role" key={role.title}><p className="ai-role-period">{role.period}</p><h4>{role.title}</h4><p className="ai-role-company">{role.company}</p><ul>{role.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></article>)}</div>
          </div>
        </div>
      </section>

      <CredentialsShowcase />

      <section className="section skills-section" id="skills"><div className="container skills-layout"><div className="section-heading narrow"><p className="eyebrow">Toolkit</p><h2>Technical range built through real use.</h2><p>Comfortable moving between user support, endpoint administration, physical devices, network troubleshooting, operational workflows, & code.</p></div><div className="skill-list">{skillGroups.map(([title, ...skills]) => <div className="skill-row" key={title}><h3>{title}</h3><div>{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div>)}</div></div></section>

      <section className="section container personal-section" id="about">
        <div className="section-heading"><p className="eyebrow">About me</p><h2>A quick background.</h2></div>
        <div className="personal-grid">
          <article className="personal-card personal-card-wide"><h3>My background</h3><div><p>I graduated from Florida State University with a bachelor's degree in Computational Science. Since then, my professional experience has expanded across IT operations, asset management, technical support, AI quality work, & automation-focused software development.</p><p>I like learning systems deeply enough to fix them, improve the workflow around them, and build something better when the existing process is holding people back.</p></div></article>
          <article className="personal-card"><h3>Outside of work</h3><p>I'm a serious gym head & currently train six days a week. I enjoy the structure, progression, and problem-solving side of training almost as much as the physical part.</p><p>I also love EDM & going to raves. KETTAMA, ANOTR, & Underworld are a few of my favorite artists. Traveling is another major interest of mine, & I've visited four countries so far.</p></article>
          <article className="personal-card"><h3>Where I'm headed</h3><p>I'm building toward roles where technical support, IT operations, systems thinking, and automation overlap. I want to keep growing from hands-on infrastructure and endpoint work into increasingly advanced support engineering, systems, and product-focused technical roles.</p></article>
        </div>
      </section>

      <section className="section life-section" id="life">
        <div className="container">
          <div className="life-heading"><div><p className="eyebrow">Beyond the keyboard</p><h2>Exploration, discipline, & freedom define my pastimes.</h2></div><p>Training, traveling, live music, & doing things that make life feel bigger than the 9-to-5.</p></div>
          <LifePhotoGallery photos={photos} />
        </div>
      </section>

      <section className="section journey-section"><div className="container"><div className="section-heading narrow"><p className="eyebrow">Career journey</p><h2>How my path has evolved.</h2></div><div className="journey-track"><div className="journey-item"><span>2020–2021</span><h3>Biomedical Engineering</h3><p>Florida State University</p></div><div className="journey-item"><span>2021–2022</span><h3>Computational Biology</h3><p>Florida State University</p></div><div className="journey-item"><span>2022–2024</span><h3>Computational Science</h3><p>B.S. earned in December 2024</p></div><div className="journey-item"><span>2025–2026</span><h3>Warehouse Associate</h3><p>Phase V Fulfillment</p></div><div className="journey-item"><span>2025–2026</span><h3>AI Data Specialist</h3><p>RWS Workforce</p></div><div className="journey-item"><span>2025–2026</span><h3>AI Prompt Engineer</h3><p>Outlier AI</p></div><div className="journey-item active"><span>2026–Present</span><h3>IT Operations & Asset Management</h3><p>Phase V Fulfillment</p></div></div></div></section>

      <section className="contact container"><p className="eyebrow">Let's work together!</p><h2>Need someone who can support the operation and improve the system behind it?</h2><p>I'm interested in technical support, application or product support, IT operations, asset management, and support-engineering opportunities — remote across the U.S. or hybrid in South Florida.</p><div className="hero-actions centered"><a className="button primary" href="https://www.linkedin.com/in/rishard-dukes" target="_blank" rel="noreferrer">Message me on LinkedIn ↗</a><a className="button secondary" href="https://github.com/RishardDukes" target="_blank" rel="noreferrer">Explore GitHub</a></div></section>

      <footer><div className="container footer-inner"><span>© 2026 Rishard Dukes</span><span>IT Operations · Automation · Technical Support</span></div></footer>
    </main>
  );
}
