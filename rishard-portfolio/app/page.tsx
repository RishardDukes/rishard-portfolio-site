const stats = [
  { value: "750+", label: "devices configured, wiped, repaired, or processed" },
  { value: "30+", label: "client environments supported through daily operations" },
  { value: "2", label: "internal Electron tools built to remove repetitive work" },
  { value: "1", label: "onsite IT owner supporting the operation end to end" },
];

const capabilities = [
  {
    title: "IT Operations",
    text: "Own day-to-day technology operations in a fast-moving fulfillment environment, balancing urgent support, device readiness, documentation, and production deadlines.",
    tags: ["Windows", "macOS", "iPadOS", "Troubleshooting", "User Support"],
  },
  {
    title: "Asset Management",
    text: "Prepare, identify, wipe, configure, track, stage, and organize large volumes of client devices while maintaining clear physical and digital workflows.",
    tags: ["Lifecycle Management", "Inventory", "Secure Wiping", "Deployment", "Quality Control"],
  },
  {
    title: "Endpoint & Identity",
    text: "Work across Entra ID, JAMF, FileVault, local administration, recovery environments, endpoint agents, account access, and device enrollment.",
    tags: ["Entra ID", "JAMF", "FileVault", "ScreenConnect", "SentinelOne"],
  },
  {
    title: "Automation",
    text: "Build practical internal software when a repeatable operational problem can be solved faster and more reliably with a purpose-built tool.",
    tags: ["Electron", "JavaScript", "Python", "Workflow Design", "Process Improvement"],
  },
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

const projects = [
  {
    title: "Warehouse Workflow App",
    type: "Operations Automation",
    description: "An Electron desktop application designed around real warehouse use, consolidating client workflows and reducing repeated navigation and login friction.",
    tech: ["Electron", "JavaScript", "HTML/CSS", "Workflow Automation"],
  },
  {
    title: "Billable Timesheet Tool",
    type: "Internal Productivity",
    description: "A lightweight desktop utility for recording work performed and producing consistent email-ready summaries for billing and operational reporting.",
    tech: ["Electron", "JavaScript", "Process Design", "Email Workflows"],
  },
  {
    title: "Resume Parser & Job Matcher",
    type: "Software Project",
    description: "A document-processing application that extracts resume content and scores compatibility against job descriptions across common file formats.",
    tech: ["Python", "Flask", "Regex", "PDF/DOCX Parsing"],
  },
  {
    title: "Workout Tracker + Hercules",
    type: "AI-Assisted Product",
    description: "A training tracker with embedded coaching logic for progression, nutrition guidance, program creation, and practical workout decisions.",
    tech: ["Python", "AI Logic", "Progress Tracking", "Product Design"],
  },
];

const skillGroups = [
  ["Endpoint & Support", "Windows", "macOS", "iPadOS", "Hardware Diagnostics", "Remote Support", "Printer Support"],
  ["Administration", "Microsoft Entra ID", "JAMF", "FileVault", "Local Admin", "BIOS/UEFI", "OS Recovery"],
  ["Operations", "Asset Lifecycle", "Inventory Control", "Secure Wiping", "Device Deployment", "Documentation", "Quality Control"],
  ["Development", "Python", "JavaScript", "Electron", "HTML/CSS", "SQL", "Git/GitHub"],
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
            <a href="#skills">Skills</a>
            <a className="nav-cta" href="https://www.linkedin.com/in/rishard-dukes" target="_blank" rel="noreferrer">Connect</a>
          </div>
        </nav>
      </header>

      <section className="hero container" id="top">
        <div className="hero-copy">
          <p className="kicker"><span className="status-dot" /> IT Operations · Asset Management · Automation</p>
          <h1>I keep technology moving—and build better systems when the old ones slow people down.</h1>
          <p className="hero-subtext">
            I’m Rishard Dukes, an IT Operations and Asset Management professional with a Computational Science background. I support real production environments, manage device lifecycles at scale, solve urgent technical problems, and turn repetitive work into practical tools.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#experience">View my work</a>
            <a className="button secondary" href="https://github.com/RishardDukes" target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
          <div className="hero-meta">
            <span>Based in Southwest Florida</span>
            <span>Open to remote IT opportunities</span>
          </div>
        </div>
        <div className="hero-panel" aria-label="Professional summary">
          <div className="terminal-bar"><span /><span /><span /></div>
          <p className="panel-label">CURRENT FOCUS</p>
          <h2>Reliable operations. Clear ownership. Continuous improvement.</h2>
          <div className="panel-list">
            <div><b>01</b><span>Support the people and systems doing the work</span></div>
            <div><b>02</b><span>Make every device ready, secure, and traceable</span></div>
            <div><b>03</b><span>Automate friction instead of accepting it</span></div>
          </div>
        </div>
      </section>

      <section className="stats-wrap">
        <div className="stats container">
          {stats.map((stat) => <div className="stat" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}
        </div>
      </section>

      <section className="section container" id="experience">
        <div className="section-heading">
          <p className="eyebrow">What I do</p>
          <h2>Technical ownership beyond a ticket queue.</h2>
          <p>I work where support, infrastructure, inventory, production, and process improvement meet.</p>
        </div>
        <div className="capability-grid">
          {capabilities.map((item) => (
            <article className="capability-card" key={item.title}>
              <h3>{item.title}</h3><p>{item.text}</p>
              <div className="tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="section experience-section">
        <div className="container">
          <div className="section-heading narrow">
            <p className="eyebrow">Experience</p>
            <h2>Hands-on work with measurable operational impact.</h2>
          </div>
          <div className="timeline">
            {work.map((role) => (
              <article className="role" key={role.title}>
                <div className="role-side"><p>{role.eyebrow}</p><span>{role.period}</span></div>
                <div className="role-body"><h3>{role.title}</h3><h4>{role.company}</h4><ul>{role.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section container" id="projects">
        <div className="section-heading">
          <p className="eyebrow">Selected projects</p>
          <h2>Software that supports how I operate.</h2>
          <p>My coding background is not separate from my IT work. It helps me diagnose systems, understand workflows, and build solutions other support professionals may only document.</p>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <div className="project-number">0{index + 1}</div><p className="project-type">{project.type}</p><h3>{project.title}</h3><p>{project.description}</p>
              <div className="tags">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <div className="container skills-layout">
          <div className="section-heading narrow"><p className="eyebrow">Toolkit</p><h2>Technical range built through real use.</h2><p>Comfortable moving between user support, endpoint administration, physical devices, operational workflows, and code.</p></div>
          <div className="skill-list">
            {skillGroups.map(([title, ...skills]) => <div className="skill-row" key={title}><h3>{title}</h3><div>{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div>)}
          </div>
        </div>
      </section>

      <section className="section container about-section">
        <div><p className="eyebrow">About me</p><h2>Computational thinking, grounded in practical work.</h2></div>
        <div className="about-copy">
          <p>I earned my B.S. in Computational Science from Florida State University in December 2024. That education trained me to break complicated problems into understandable systems; my IT career has taught me how to do that while people, hardware, deadlines, and business operations are all moving at once.</p>
          <p>I’m at my best when I can own a problem from first report through final resolution—then step back and ask how the process can be made faster, clearer, or more reliable the next time.</p>
        </div>
      </section>

      <section className="contact container">
        <p className="eyebrow">Let’s work together</p>
        <h2>Looking for someone who can support the operation and improve it?</h2>
        <p>I’m interested in remote IT Support, Technical Support, Junior Systems Administration, IT Operations, and Asset Management opportunities.</p>
        <div className="hero-actions centered"><a className="button primary" href="https://www.linkedin.com/in/rishard-dukes" target="_blank" rel="noreferrer">Message me on LinkedIn ↗</a><a className="button secondary" href="https://github.com/RishardDukes" target="_blank" rel="noreferrer">Explore GitHub</a></div>
      </section>

      <footer><div className="container footer-inner"><span>© 2026 Rishard Dukes</span><span>IT Operations · Asset Management · Automation</span></div></footer>
    </main>
  );
}
