const featuredProjects = [
  {
    eyebrow: "Independent product · In active development",
    title: "Hercules IT",
    summary: "A Windows-focused desktop toolkit for IT diagnostics, support workflows, and guided remediation — built as an independent product rather than an internal company tool.",
    proof: [
      ["4", "core modules: Overview, Devices, Networks, Printers"],
      ["2", "distribution targets: installed and portable USB builds"],
      ["1", "goal: make common support work faster without hiding what changes a system"],
    ],
    tags: ["Electron", "React", "TypeScript", "SQLite", "Tailwind"],
    href: null,
    linkLabel: null,
  },
  {
    eyebrow: "Production monitoring · Built from an operational need",
    title: "Phase V IT Monitor",
    summary: "A Python monitoring system for warehouse connectivity and critical networked devices, designed to surface real outages while avoiding noisy one-off alerts.",
    proof: [
      ["5 min", "intentional monitoring interval"],
      ["2×", "failed checks confirm an outage; 2 successful checks confirm recovery"],
      ["500 ms", "sustained high-latency warning threshold"],
    ],
    tags: ["Python", "Networking", "Google Chat", "Google Sheets", "State Tracking"],
    href: null,
    linkLabel: null,
  },
];

export default function FeaturedProjects() {
  return (
    <div className="featured-projects">
      {featuredProjects.map((project) => (
        <article className="featured-project" key={project.title}>
          <div className="featured-project-copy">
            <p className="eyebrow">{project.eyebrow}</p>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            {project.href && <a className="featured-link" href={project.href} target="_blank" rel="noreferrer">{project.linkLabel}</a>}
          </div>
          <div className="featured-proof">
            {project.proof.map(([value, label]) => (
              <div className="proof-row" key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
