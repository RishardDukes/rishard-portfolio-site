import Image from "next/image";
import ExperienceMedia from "./ExperienceMedia";
import LifePhotoGallery from "./LifePhotoGallery";
import ThemeToggle from "./ThemeToggle";

const stats = [
  { value: "750+", label: "devices configured, wiped, repaired, or processed" },
  { value: "30+", label: "client environments supported through daily operations" },
  { value: "2", label: "internal Electron tools built to remove repetitive work" },
  { value: "1", label: "on-site IT owner supporting operations end to end" },
];

const capabilities = [
  { title: "IT Operations", text: "Own day-to-day technology operations in a fast-moving fulfillment environment, balancing urgent support, device readiness, documentation, and production deadlines.", tags: ["Windows", "macOS", "iPadOS", "Troubleshooting", "User Support"] },
  { title: "Asset Management", text: "Prepare, identify, wipe, configure, track, stage, and organize large volumes of client devices while maintaining clear physical and digital workflows.", tags: ["Lifecycle Management", "Inventory", "Secure Wiping", "Deployment", "Quality Control"] },
  { title: "Endpoint & Identity", text: "Work across Entra ID, JAMF, FileVault, local administration, recovery environments, endpoint agents, account access, and device enrollment.", tags: ["Entra ID", "JAMF", "FileVault", "ScreenConnect", "SentinelOne"] },
  { title: "Automation", text: "Build practical internal software when a repeatable operational problem can be solved faster and more reliably with a purpose-built tool.", tags: ["Electron", "JavaScript", "Python", "Workflow Design", "Process Improvement"] },
];

const work = [
  {
    eyebrow: "Current Experience",
    title: "IT Operations & Asset Management Lead",
    company: "Phase V Fulfillment · Fort Myers, Florida",
    period: "September 2025 — Present",
    bullets: [
      "Serve as the primary onsite IT resource supporting warehouse operations, client device processing, endpoint setup, printer issues, networking, access, and production-critical troubleshooting.",
      "Configured, wiped, repaired, staged, or processed more than 750 Windows PCs, Macs, and iPads across 30+ client workflows.",
      "Handle Entra ID joins, local administrator access, FileVault, JAMF-related workflows, operating-system recovery, BIOS/UEFI changes, endpoint agents, and secure device resets.",
      "Support Zebra and Brother label printers, shipping stations, scanners, conference-room equipment, and other hardware used in daily fulfillment operations.",
      "Reorganized IT inventory and device staging areas to improve visibility, retrieval, and throughput across active client work.",
    ],
  },
  {
    eyebrow: "Applied Automation",
    title: "Internal Operations Tools",
    company: "Built for real warehouse workflows",
    period: "2026",
    bullets: [
      "Built an Electron-based Warehouse Workflow application that centralizes client access and helps picking and packing teams move between required systems faster.",
      "Built an Electron timesheet utility that captures billable work and generates structured email summaries, reducing repetitive manual reporting.",
      "Use programming as an operational advantage: identify friction, understand the process, build the smallest useful solution, and improve it with real user feedback.",
    ],
  },
];

const previousAIExperience = [
  {
    title: "AI Data Specialist",
    company: "RWS Workforce",
    period: "September 2025 — March 2026",
    bullets: [
      "Evaluated AI-generated outputs for quality, accuracy, consistency, and adherence to detailed task guidelines.",
      "Reviewed and annotated structured data used to improve model behavior and response quality.",
      "Identified weak outputs, inconsistencies, and edge cases while maintaining reliable quality standards.",
    ],
  },
  {
    title: "AI Prompt Engineer",
    company: "Outlier AI",
    period: "November 2025 — March 2026",
    bullets: [
      "Designed, tested, and refined prompts for large language models across structured tasks.",
      "Evaluated model reasoning, instruction-following, factual accuracy, and response quality.",
      "Used iterative feedback and edge-case testing to improve prompts and AI-generated outputs.",
    ],
  },
];

const projects = [
  { title: "Warehouse Workflow App", type: "Operations Automation", description: "An Electron desktop application designed around real warehouse use, consolidating client workflows and reducing repeated navigation and login friction.", tech: ["Electron", "JavaScript", "HTML/CSS", "Workflow Automation"] },
  { title: "Billable Timesheet Tool", type: "Internal Productivity", description: "A lightweight desktop utility for recording work performed and producing consistent email-ready summaries for billing and operational reporting.", tech: ["Electron", "JavaScript", "Process Design", "Email Workflows"] },
  { title: "Resume Parser & Job Matcher", type: "Software Project", description: "A document-processing application that extracts resume content and scores compatibility against job descriptions across common file formats.", tech: ["Python", "Flask", "Regex", "PDF/DOCX Parsing"] },
  { title: "Workout Tracker + Hercules", type: "AI-Assisted Product", description: "A training tracker with embedded coaching logic for progression, nutrition guidance, program creation, and practical workout decisions.", tech: ["Python", "AI Logic", "Progress Tracking", "Product Design"] },
];

const skillGroups = [
  ["Endpoint & Support", "Windows", "macOS", "iPadOS", "Hardware Diagnostics", "Remote Support", "Printer Support"],
  ["Administration", "Microsoft Entra ID", "JAMF", "FileVault", "Local Admin", "BIOS/UEFI", "OS Recovery"],
  ["Operations", "Asset Lifecycle", "Inventory Control", "Secure Wiping", "Device Deployment", "Documentation", "Quality Control"],
  ["Development", "Python", "JavaScript", "Electron", "HTML/CSS", "SQL", "Git/GitHub"],
];

const photos = [
  { src: "/images/surfing.webp", alt: "Carrying a surfboard into the ocean at sunset", label: "Trying something new", className: "photo-wide" },
  { src: "/images/gym.webp", alt: "Training in the gym", label: "Strength & endurance", className: "photo-tall" },
  { src: "/images/festival.webp", alt: "At an EDM festival at night", label: "Live music", className: "photo-tall" },
  { src: "/images/grand-turk.webp", alt: "Traveling in Grand Turk", label: "Grand Turk", className: "photo-wide" },
  { src: "/images/panama.webp", alt: "Traveling in Panama", label: "Panama", className: "photo-tall" },
  { src: "/images/waterfall.webp", alt: "Standing in water near a waterfall", label: "Adventure", className: "photo-tall" },
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
            <a href="#about">About</a>
            <a href="#life">Life</a>
            <a className="nav-cta" href="https://www.linkedin.com/in/rishard-dukes" target="_blank" rel="noreferrer">Connect</a>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <section className="hero container" id="top">
        <div className="hero-copy">
          <p className="kicker"><span className="status-dot" /> IT Operations · Asset Management · Automation</p>
          <h1>I adapt to new technology and build better systems when old ones slow people down.</h1>
          <p className="hero-subtext">I’m Rishard Dukes, an IT Operations and Asset Management professional with a Computational Science background. I support real production environments, manage device lifecycles at scale, solve technical problems, and turn repetitive work into practical tools.</p>
          <div className="hero-actions">
            <a className="button primary" href="#experience">View my work</a>
            <a className="button secondary" href="https://github.com/RishardDukes" target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
          <div className="hero-meta"><span>Based in Southwest Florida</span><span>Open to remote/hybrid IT opportunities</span></div>
        </div>
        <div className="hero-portrait-wrap">
          <div className="hero-portrait">
            <Image src="/images/graduation.webp" alt="Rishard Dukes at graduation" fill priority sizes="(max-width: 900px) 100vw, 38vw" />
          </div>
          <div className="portrait-note"><span>FSU · Computational Science</span><strong>Class of 2024</strong></div>
        </div>
      </section>

      <section className="stats-wrap"><div className="stats container">{stats.map((stat) => <div className="stat" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div></section>

      <section className="section container" id="experience">
        <div className="section-heading"><p className="eyebrow">What I bring</p><h2>IT operations and asset management, grounded in day-to-day execution.</h2><p>I work where support, infrastructure, inventory, production, and process improvement meet.</p></div>
        <div className="capability-grid">{capabilities.map((item) => <article className="capability-card" key={item.title}><h3>{item.title}</h3><p>{item.text}</p><div className="tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></article>)}</div>
      </section>

      <section className="section experience-section">
        <div className="container">
          <div className="section-heading narrow"><p className="eyebrow">Experience</p><h2>Work I’ve done and the results.</h2></div>
          <div className="ops-feature">
            <ExperienceMedia />
            <div className="ops-copy"><p className="eyebrow">In practice</p><h3>Device prep, resets, and deployment.</h3><p>Assessment, secure wiping, operating-system recovery, configuration, quality checks, staging, and documentation all have to happen before a device is ready for its next user or client workflow.</p><div className="tags"><span>Secure Wiping</span><span>macOS Recovery</span><span>Device Readiness</span><span>Quality Control</span></div></div>
          </div>
          <div className="timeline">{work.map((role) => <article className="role" key={role.title}><div className="role-side"><p>{role.eyebrow}</p><span>{role.period}</span></div><div className="role-body"><h3>{role.title}</h3><h4>{role.company}</h4><ul>{role.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></div></article>)}</div>
          <div className="ai-history">
            <div className="ai-history-heading">
              <p className="eyebrow">Previous AI Experience</p>
              <h3>Earlier roles in AI quality review and prompt testing.</h3>
            </div>
            <div className="ai-role-grid">{previousAIExperience.map((role) => <article className="ai-role" key={role.title}><p className="ai-role-period">{role.period}</p><h4>{role.title}</h4><p className="ai-role-company">{role.company}</p><ul>{role.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></article>)}</div>
          </div>
        </div>
      </section>

      <section className="section container" id="projects">
        <div className="section-heading"><p className="eyebrow">Selected projects</p><h2>Projects I built to support operations.</h2><p>My coding background is not separate from my IT work. It helps me diagnose systems, understand workflows, and build solutions that other support professionals may only document.</p></div>
        <div className="project-grid">{projects.map((project, index) => <article className="project-card" key={project.title}><div className="project-number">0{index + 1}</div><p className="project-type">{project.type}</p><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div></article>)}</div>
      </section>

      <section className="section skills-section" id="skills"><div className="container skills-layout"><div className="section-heading narrow"><p className="eyebrow">Toolkit</p><h2>Technical range built through real use.</h2><p>Comfortable moving between user support, endpoint administration, physical devices, operational workflows, and code.</p></div><div className="skill-list">{skillGroups.map(([title, ...skills]) => <div className="skill-row" key={title}><h3>{title}</h3><div>{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div>)}</div></div></section>

      <section className="section container personal-section" id="about">
        <div className="section-heading"><p className="eyebrow">About me</p><h2>A quick background.</h2></div>
        <div className="personal-grid">
          <article className="personal-card personal-card-wide"><h3>My background</h3><div><p>I graduated from Florida State University with a bachelor’s degree in Computational Science and a 3.1 GPA. Since then, my professional experience has expanded across IT operations and asset management, AI quality assurance, prompt engineering, and automation-focused software projects.</p><p>I enjoy learning new systems, taking on unfamiliar technology, and contributing to projects and products that people can actually use.</p></div></article>
          <article className="personal-card"><h3>Outside of work</h3><p>I’m a serious gym person and currently train six days a week with a routine that changes monthly. I focus more on strength and endurance than aesthetics.</p><p>I also love EDM and going to raves. KETTAMA, ANOTR, and Underworld are a few of my favorite artists. Traveling is another major interest of mine, and I’ve visited four countries so far.</p></article>
          <article className="personal-card"><h3>Where I’m headed</h3><p>My long-term goal is to build a career at the intersection of AI, data, and engineering. I’m continuing to strengthen my experience in IT operations, automation, databases, and software so I can move into the part of the technology industry that interests me most.</p></article>
        </div>
      </section>

      <section className="section life-section" id="life">
        <div className="container">
          <div className="life-heading"><div><p className="eyebrow">Beyond the keyboard</p><h2>Exploration, discipline, and freedom define my pastimes.</h2></div><p>Training, traveling, live music, and doing things that make life feel bigger than the 9-to-5.</p></div>
          <LifePhotoGallery photos={photos} />
        </div>
      </section>

      <section className="section journey-section"><div className="container"><div className="section-heading narrow"><p className="eyebrow">Career journey</p><h2>How my path has evolved.</h2></div><div className="journey-track"><div className="journey-item"><span>2020–2021</span><h3>Biomedical Engineering</h3><p>Florida State University</p></div><div className="journey-item"><span>2021–2022</span><h3>Computational Biology</h3><p>Florida State University</p></div><div className="journey-item"><span>2022–2024</span><h3>Computational Science</h3><p>B.S. earned in December 2024</p></div><div className="journey-item"><span>2025–2026</span><h3>Warehouse Associate</h3><p>Phase V Fulfillment</p></div><div className="journey-item"><span>2025–2026</span><h3>AI Data Specialist</h3><p>RWS Workforce</p></div><div className="journey-item"><span>2025–2026</span><h3>AI Prompt Engineer</h3><p>Outlier AI</p></div><div className="journey-item active"><span>2026–Present</span><h3>IT Operations & Asset Management</h3><p>Phase V Fulfillment</p></div></div></div></section>

      <section className="contact container"><p className="eyebrow">Let’s work together</p><h2>Looking for someone who can support the operation and improve it?</h2><p>I’m interested in remote IT support, technical support, junior systems administration, IT operations, and asset management opportunities.</p><div className="hero-actions centered"><a className="button primary" href="https://www.linkedin.com/in/rishard-dukes" target="_blank" rel="noreferrer">Message me on LinkedIn ↗</a><a className="button secondary" href="https://github.com/RishardDukes" target="_blank" rel="noreferrer">Explore GitHub</a></div></section>

      <footer><div className="container footer-inner"><span>© 2026 Rishard Dukes</span><span>IT Operations · Asset Management · Automation</span></div></footer>
    </main>
  );
}
