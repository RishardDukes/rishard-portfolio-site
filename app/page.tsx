"use client";

import { useEffect, useState } from "react";

export default function RishardPortfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const projects = [
    {
      title: "Tax Return AI Calculator",
      tagline: "AI-assisted document parsing and federal tax estimate workflow",
      stack: ["Python", "Flask", "OpenAI API", "PyPDF2", "Pytesseract", "HTML", "CSS", "JavaScript"],
      bullets: [
        "Built a Flask-based web app that uploads tax documents, extracts text, and estimates refund or amount owed.",
        "Implemented document processing for PDF, image, and text inputs with fallback handling.",
        "Created API routes for upload, extraction, and calculation workflows with a clean interface.",
      ],
      link: "https://github.com/RishardDukes/portfolio",
    },
    {
      title: "Resume Parser & Job Matcher",
      tagline: "Resume extraction and compatibility scoring",
      stack: ["Python", "Flask", "Regex", "PyPDF2", "python-docx", "HTML", "CSS", "JavaScript"],
      bullets: [
        "Extracts resume data from PDF, DOCX, and TXT formats.",
        "Matches skills against job descriptions with scoring system.",
        "Built UI for upload, review, and matching results.",
      ],
      link: "https://github.com/RishardDukes/portfolio",
    },
    {
      title: "Workout Tracker + Hercules",
      tagline: "Full workout tracker with embedded Hercules coaching assistant",
      stack: ["Python", "Training Logic", "Modular Design", "Progress Tracking"],
      bullets: [
        "Tracks sessions, exercises, sets, reps, and week-to-week progression.",
        "Embeds Hercules directly in the tracker to recommend weight changes using reps and RIR.",
        "Supports reusable training templates and coaching-style workout feedback.",
      ],
      link: "https://github.com/RishardDukes/portfolio",
    },
  ];

  const travelImages = [
    "/D21B3D6E-4E77-462B-8958-2AFF1749C9E8.jpeg",
    "/IMG_0397.jpeg",
    "/IMG_9446.jpeg",
    "/IMG_9364.jpeg",
  ];

  const travelLocations = [
    "Panama, Panama",
    "Panama, Panama",
    "Turks and Caicos",
    "Dominican Republic",
  ];

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % travelImages.length);
  };

  const pageBg = darkMode ? "bg-slate-950 text-slate-100" : "bg-slate-100 text-slate-900";
  const cardBg = darkMode ? "bg-white/5 border-white/10" : "bg-white border-slate-200";
  const muted = darkMode ? "text-slate-300" : "text-slate-700";
  const subtle = darkMode ? "text-slate-400" : "text-slate-500";
  const sectionGlow = darkMode
    ? "bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.15),transparent_30%),radial-gradient(circle_at_top_right,rgba(249,115,22,0.12),transparent_30%),radial-gradient(circle_at_bottom,rgba(168,85,247,0.12),transparent_35%)]"
    : "bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.10),transparent_30%),radial-gradient(circle_at_top_right,rgba(249,115,22,0.08),transparent_30%),radial-gradient(circle_at_bottom,rgba(168,85,247,0.08),transparent_35%)]";

  if (!mounted) return null;

  return (
    <div className={`min-h-screen ${pageBg} px-6 py-10 transition-colors duration-500`}>
      <div className={`pointer-events-none absolute inset-0 ${sectionGlow}`} />

      <div className="relative mx-auto max-w-6xl space-y-16">
        <div className="flex justify-end">
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            className={`rounded-2xl border px-4 py-2 text-sm font-semibold shadow transition hover:scale-[1.02] ${
              darkMode
                ? "border-white/10 bg-white/5 text-slate-100"
                : "border-slate-300 bg-white text-slate-900"
            }`}
          >
            {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          </button>
        </div>

        <section className="grid items-center gap-8 md:grid-cols-2 animate-[fadeIn_0.9s_ease]">
          <div>
            <h1 className="mb-4 text-4xl font-bold md:text-6xl">Rishard Dukes</h1>
            <p className={`text-lg ${muted}`}>
              Computational Science graduate focused on AI, automation, and building real-world tools.
            </p>
            <p className={`mt-3 text-sm ${subtle}`}>
              Building practical tools for AI, automation, and web development.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://github.com/RishardDukes/portfolio"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-emerald-500 px-5 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5"
              >
                GitHub Portfolio
              </a>
              <a
                href="https://www.linkedin.com/in/rishard-dukes/"
                target="_blank"
                rel="noreferrer"
                className={`rounded-2xl border px-5 py-3 font-semibold transition hover:-translate-y-0.5 ${
                  darkMode ? "border-white/10 bg-white/5" : "border-slate-300 bg-white"
                }`}
              >
                LinkedIn
              </a>
            </div>
          </div>

          <img
            src="/IMG_6277.jpeg"
            alt="Rishard Dukes graduation portrait"
            className="h-[420px] w-full rounded-3xl bg-slate-900 p-3 object-contain shadow-2xl transition duration-500 hover:scale-[1.02]"
          />
        </section>

        <section
          className={`rounded-3xl border p-8 shadow-xl transition-all duration-500 ${cardBg} animate-[fadeUp_0.9s_ease]`}
        >
          <h2 className="mb-2 text-3xl font-bold">About Me</h2>
          <p className={`mb-6 text-sm ${subtle}`}>Background, experience, and what drives my work.</p>
          <div className={`space-y-4 leading-7 ${muted}`}>
            <p>
              Hey! My name is Rishard Dukes and I am a Florida State University Alumni with a Bachelor of Science focused in Computational Science.
              I have worked across data analysis, information technology, and live script coding for real-world applications.
            </p>
            <p>
              Some of my most notable work includes fine-tuning an existing workflow automation script using JavaScript to display warehouse workflow
              in picking and packing areas, building Workout Tracker + Hercules where AI coaching is built directly into workout logging, and creating a resume parser
              that grades resumes based on their fit for a given field.
            </p>
            <p>
              I currently work for Phase V Fulfillment in Fort Myers, Florida. I was born in Fort Myers and spent much of my youth in Tampa,
              where I attended a performing arts high school as a journalism major. After graduating, I went to Florida State University,
              initially as a Biomedical Engineering student before switching to Computational Science. I graduated in December 2024 and currently live in Fort Myers, Florida.
            </p>
          </div>
        </section>

        <section className="animate-[fadeUp_1s_ease]">
          <h2 className="mb-2 text-3xl font-bold">Projects</h2>
          <p className={`mb-6 text-sm ${subtle}`}>A few builds that reflect how I approach real problems.</p>
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((p, index) => (
              <div
                key={p.title}
                className={`h-full rounded-2xl border p-6 shadow-xl transition duration-300 hover:-translate-y-1 ${cardBg} flex flex-col`}
                style={{ animation: `fadeUp 0.8s ease ${index * 0.08}s both` }}
              >
                <h3 className="mb-2 text-xl font-semibold">{p.title}</h3>
                <p className={`mb-3 text-sm ${subtle}`}>{p.tagline}</p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {p.stack.map((tech) => (
                    <span
                      key={tech}
                      className={`rounded-full px-3 py-1 text-xs ${
                        darkMode ? "bg-slate-900 text-slate-200" : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className={`space-y-2 text-sm ${muted} flex-1`}>
                  {p.bullets.map((b) => (
                    <li key={b}>• {b}</li>
                  ))}
                </ul>

                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-block text-sm font-medium text-emerald-400 hover:underline"
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="animate-[fadeUp_1.1s_ease]">
          <h2 className="mb-2 text-3xl font-bold">Hobbies & Interests</h2>
          <p className={`mb-6 text-sm ${subtle}`}>A few things that give my life meaning outside of work.</p>

          <div className="grid gap-6 md:grid-cols-3">
            <div className={`rounded-2xl overflow-hidden border shadow-xl transition duration-300 hover:-translate-y-1 ${cardBg}`}>
              <div className="relative h-[260px] w-full overflow-hidden">
                <img
                  src="/IMG_6195.jpeg"
                  alt="Rishard at the gym background"
                  className="absolute inset-0 h-full w-full scale-110 object-cover blur-xl opacity-35"
                />
                <img
                  src="/IMG_6195.jpeg"
                  alt="Rishard at the gym"
                  className="relative z-10 h-full w-full object-contain p-3"
                />
              </div>
              <div className="p-5">
                <h3 className="mb-2 text-xl font-semibold">Gym</h3>
                <p className={`text-sm leading-7 ${muted}`}>
                  I train about 5 to 6 days a week with a consistent workout routine. Fitness has played a major role in my life and directly inspired my first major personal project.
                  I am also working toward earning a personal training license to share my knowledge with others more effectively.
                </p>
              </div>
            </div>

            <div className={`rounded-2xl overflow-hidden border shadow-xl transition duration-300 hover:-translate-y-1 ${cardBg}`}>
              <div className="relative h-[260px] w-full overflow-hidden">
                <img
                  src="/IMG_5779.jpeg"
                  alt="EDM event background"
                  className="absolute inset-0 h-full w-full scale-110 object-cover blur-xl opacity-35"
                />
                <img
                  src="/IMG_5779.jpeg"
                  alt="Rishard at an EDM event"
                  className="relative z-10 h-full w-full object-contain p-3"
                />
              </div>
              <div className="p-5">
                <h3 className="mb-2 text-xl font-semibold">EDM</h3>
                <p className={`text-sm leading-7 ${muted}`}>
                  I constantly attend various festivals such as Breakaway, Factory Town, and more. I grew up listening to Daft Punk with my sister.
                  Currently one of my favorite artists is ANOTR.
                </p>
              </div>
            </div>

            <div className={`rounded-2xl overflow-hidden border shadow-xl transition duration-300 hover:-translate-y-1 ${cardBg}`}>
              <div className="relative h-[260px] w-full overflow-hidden">
                <img
                  src="/D21B3D6E-4E77-462B-8958-2AFF1749C9E8.jpeg"
                  alt="Travel and lifestyle background"
                  className="absolute inset-0 h-full w-full scale-110 object-cover blur-xl opacity-35"
                />
                <img
                  src="/D21B3D6E-4E77-462B-8958-2AFF1749C9E8.jpeg"
                  alt="Travel and lifestyle"
                  className="relative z-10 h-full w-full object-contain p-3"
                />
              </div>
              <div className="p-5">
                <h3 className="mb-2 text-xl font-semibold">Travel & Games</h3>
                <p className={`text-sm leading-7 ${muted}`}>
                  Video games have been the heart and soul of my life since I was a kid and helped push me toward technology early.
                  Exploration has always allowed me to channel my inner freedom, I constantly seek out plans to put me out of my comfort zone and visit various places. I have been to 4 different countries so far and hope to add more.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="animate-[fadeUp_1.2s_ease]">
          <h2 className="mb-2 text-3xl font-bold">Travel</h2>
          <p className={`mb-6 text-sm ${subtle}`}>
            Some nice flicks of the places I have been. Click the photo to cycle through.
          </p>

          <div className={`rounded-3xl border p-3 shadow-xl ${cardBg}`}>
            <div onClick={nextImage} className="flex cursor-pointer justify-center">
              <div className="w-full text-center">
                <img
                  src={travelImages[currentIndex]}
                  alt="Travel photo"
                  className="h-auto max-h-[80vh] w-full rounded-3xl object-contain transition duration-300 hover:scale-[1.01]"
                />

                <p className={`mt-4 text-sm font-medium ${subtle}`}>
                  {travelLocations[currentIndex]}
                </p>
              </div>
            </div>
          </div>
        </section>

        <style jsx global>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(12px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(18px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </div>
    </div>
  );
}