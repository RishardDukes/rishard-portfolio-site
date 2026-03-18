export default function RishardPortfolio() {
  const projects = [
    {
      title: "Tax Return AI Calculator",
      tagline: "AI-assisted document parsing and federal tax estimate workflow",
      stack: ["Python", "Flask", "OpenAI API", "PyPDF2", "Pytesseract", "HTML", "CSS", "JavaScript"],
      bullets: [
        "Built a Flask-based web app that uploads tax documents, extracts text, and estimates refund or amount owed.",
        "Implemented document processing for PDF, image, and text inputs with a fallback path when AI extraction is unavailable.",
        "Created API routes for upload, extraction, and calculation workflows with a clean browser-based interface.",
      ],
      accent: "from-emerald-500 to-teal-500",
      icon: "💰",
    },
    {
      title: "Resume Parser & Job Matcher",
      tagline: "Resume extraction and compatibility scoring against job descriptions",
      stack: ["Python", "Flask", "Regex", "PyPDF2", "python-docx", "HTML", "CSS", "JavaScript"],
      bullets: [
        "Developed a resume parsing workflow that extracts contact details, summary, education, experience, and skills from PDF, DOCX, and TXT files.",
        "Built a job-matching engine that compares extracted resume skills against job descriptions and returns compatibility scoring, matching skills, and missing skills.",
        "Designed an interactive UI for drag-and-drop upload, parsed output review, and job matching analysis in one place.",
      ],
      accent: "from-orange-500 to-red-500",
      icon: "📄",
    },
    {
      title: "Hercules AI Coaching Engine",
      tagline: "Rule-based training recommendations for next-set progression",
      stack: ["Python", "Dataclasses", "Training Logic", "Modular Package Design"],
      bullets: [
        "Built a coaching engine that recommends whether to increase weight, decrease weight, or stay at the current load based on reps, RIR, and exercise targets.",
        "Structured the system with reusable templates and progression rules for compound and machine-based movements.",
        "Generated dynamic coaching messages with rep goals and training cues to simulate an intelligent workout assistant.",
      ],
      accent: "from-violet-500 to-fuchsia-500",
      icon: "🏋️",
    },
  ];

  const skills = [
    "Python",
    "Flask",
    "JavaScript",
    "HTML/CSS",
    "REST APIs",
    "OpenAI API",
    "Document Parsing",
    "Regex",
    "PyPDF2",
    "OCR",
    "Git/GitHub",
    "SQLite",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <main className="mx-auto max-w-6xl px-6 py-12">
        <h1 className="text-4xl font-bold mb-6">Rishard Dukes Portfolio</h1>

        <div className="mb-8">
          <a
            href="https://github.com/RishardDukes/portfolio"
            target="_blank"
            className="mr-4 text-emerald-400 underline"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/rishard-dukes/"
            target="_blank"
            className="text-blue-400 underline"
          >
            LinkedIn
          </a>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Projects</h2>

        <div className="grid gap-6">
          {projects.map((project) => (
            <div key={project.title} className="p-6 border border-white/10 rounded-xl bg-white/5">
              <h3 className="text-xl font-bold mb-2">{project.icon} {project.title}</h3>
              <p className="mb-3 text-gray-300">{project.tagline}</p>

              <div className="mb-3">
                {project.stack.map((tech) => (
                  <span key={tech} className="inline-block mr-2 mb-2 px-2 py-1 bg-gray-800 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="list-disc ml-5 text-gray-300">
                {project.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Skills</h2>

        <div>
          {skills.map((skill) => (
            <span key={skill} className="inline-block mr-2 mb-2 px-3 py-1 bg-gray-800 rounded">
              {skill}
            </span>
          ))}
        </div>
      </main>
    </div>
  );
}