const credentials = [
  {
    title: "Google IT Support",
    issuer: "Google · Professional Certificate",
    date: "September 2026",
    verify: "https://coursera.org/verify/professional-cert/ZCCMAKUQLI3N",
    detail: "Six-course program covering technical support, networking, operating systems, systems administration, IT infrastructure, security, and AI-assisted job search skills.",
    proof: ["Technical support", "Networking", "Operating systems", "Systems administration", "IT security"],
  },
  {
    title: "Gemini for Developers",
    issuer: "Google DeepMind · Specialization",
    date: "September 2026",
    verify: "https://coursera.org/verify/specialization/Z1FY2INZWVA4",
    detail: "Three-course specialization covering the Gemini API, Google AI Studio, structured outputs, function calling, search grounding, agents, and cloud deployment concepts.",
    proof: ["Gemini API", "Google AI Studio", "Function calling", "Search grounding", "Cloud deployment"],
  },
];

export default function CredentialsShowcase() {
  return (
    <section className="section credentials-section" id="credentials">
      <div className="container">
        <div className="credential-heading">
          <div className="section-heading narrow">
            <p className="eyebrow">Credentials</p>
            <h2>Training that connects directly to the work.</h2>
            <p>My strongest credentials now sit on both sides of what I do: hands-on IT support and building with modern AI tooling.</p>
          </div>
          <div className="degree-chip">
            <span>Florida State University</span>
            <strong>B.S. Computational Science · 2024</strong>
          </div>
        </div>
        <div className="certificate-grid certificate-grid-text-only">
          {credentials.map((credential) => (
            <article className="certificate-card certificate-card-text-only" key={credential.title}>
              <div className="certificate-copy">
                <p className="credential-issuer">{credential.issuer}</p>
                <h3>{credential.title}</h3>
                <p>{credential.detail}</p>
                <p className="credential-focus">
                  <strong>Focus:</strong> {credential.proof.join(" · ")}
                </p>
                <div className="credential-footer">
                  <span>{credential.date}</span>
                  <a href={credential.verify} target="_blank" rel="noreferrer">Verify credential ↗</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
