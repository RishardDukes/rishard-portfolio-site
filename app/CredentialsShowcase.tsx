const credentials = [
  {
    title: "Google IT Support",
    issuer: "Google · Professional Certificate",
    date: "September 2026",
    image: "/images/google-it-support-certificate.webp",
    alt: "Google IT Support Professional Certificate earned by Rishard Dukes",
    verify: "https://coursera.org/verify/professional-cert/ZCCMAKUQLI3N",
    detail: "Six-course program covering technical support, networking, operating systems, systems administration, IT infrastructure, security, and AI-assisted job search skills.",
  },
  {
    title: "Gemini for Developers",
    issuer: "Google DeepMind · Specialization",
    date: "September 2026",
    image: "/images/gemini-for-developers-certificate.webp",
    alt: "Gemini for Developers specialization certificate earned by Rishard Dukes",
    verify: "https://coursera.org/verify/specialization/Z1FY2INZWVA4",
    detail: "Three-course specialization covering the Gemini API, Google AI Studio, structured outputs, function calling, search grounding, agents, and cloud deployment concepts.",
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
        <div className="certificate-grid">
          {credentials.map((credential) => (
            <article className="certificate-card" key={credential.title}>
              <a className="certificate-image" href={credential.verify} target="_blank" rel="noreferrer" aria-label={`Verify ${credential.title}`}>
                <img src={credential.image} alt={credential.alt} loading="lazy" />
              </a>
              <div className="certificate-copy">
                <p className="credential-issuer">{credential.issuer}</p>
                <h3>{credential.title}</h3>
                <p>{credential.detail}</p>
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
