export default function RishardPortfolio() {
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
      accent: "from-emerald-500 to-teal-500",
      icon: "💰",
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
      accent: "from-orange-500 to-red-500",
      icon: "📄",
    },
    {
      title: "Hercules AI Coaching Engine",
      tagline: "Workout progression recommendation system",
      stack: ["Python", "Training Logic", "Modular Design"],
      bullets: [
        "Recommends weight adjustments based on reps and RIR.",
        "Implements reusable training templates.",
        "Simulates coaching feedback for users.",
      ],
      accent: "from-violet-500 to-fuchsia-500",
      icon: "🏋️",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 px-6 py-10">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* HERO */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Rishard Dukes
            </h1>
            <p className="text-slate-300 text-lg">
              Computational Science graduate focused on AI, automation, and building real-world tools.
            </p>
          </div>
          <img
            src="/IMG_6277.jpeg"
            className="rounded-3xl w-full h-[400px] object-cover"
          />
        </section>

        {/* ABOUT */}
        <section>
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-slate-300 leading-7">
            Hey! My name is Rishard Dukes and I am a Florida State University Alumni with a Bachelor of Science focused in Computational Science.
            I have worked in data analysis, IT, and live scripting for real-world applications.
            My work includes optimizing warehouse automation scripts, building AI-powered workout tools, and creating resume parsing systems.
            I currently work at Phase V Fulfillment in Fort Myers, Florida.
          </p>
        </section>

        {/* PROJECTS */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((p) => (
              <div key={p.title} className="bg-white/5 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-slate-400 mb-3">{p.tagline}</p>
                <ul className="text-sm text-slate-300 space-y-2">
                  {p.bullets.map((b) => (
                    <li key={b}>• {b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* HOBBIES */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Hobbies</h2>

          <div className="grid md:grid-cols-3 gap-6">

            {/* Gym */}
            <div className="bg-white/5 p-4 rounded-2xl">
              <img src="/IMG_6195.jpeg" className="rounded-xl mb-4 h-[200px] w-full object-cover"/>
              <h3 className="text-xl font-semibold">Gym</h3>
              <p className="text-sm text-slate-300">
                Training 5-6 days a week. Fitness inspired my first major project and continues to be a core part of my lifestyle.
              </p>
            </div>

            {/* EDM */}
            <div className="bg-white/5 p-4 rounded-2xl">
              <img src="/IMG_5779.jpeg" className="rounded-xl mb-4 h-[200px] w-full object-cover"/>
              <h3 className="text-xl font-semibold">EDM</h3>
              <p className="text-sm text-slate-300">
                I attend festivals like Breakaway and Factory Town. Grew up on Daft Punk and now love artists like ANOTR.
              </p>
            </div>

            {/* Gaming */}
            <div className="bg-white/5 p-4 rounded-2xl">
              <h3 className="text-xl font-semibold mb-2">Video Games</h3>
              <p className="text-sm text-slate-300">
                Gaming sparked my interest in technology early and helped shape my path into software and IT.
              </p>
            </div>

          </div>
        </section>

        {/* TRAVEL */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Travel</h2>
          <img
            src="/D21B3D6E-4E77-462B-8958-2AFF1749C9E8.jpeg"
            className="rounded-3xl w-full h-[400px] object-cover"
          />
        </section>

      </div>
    </div>
  );
}
    </div>
  );
}
