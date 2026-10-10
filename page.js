import ThemeToggle from "./ThemeToggle";

// ✏️ MODIFIE LES TEXTES ICI — tout le reste peut rester tel quel
const content = {
  name: "Ton Nom",
  hi: "Salut, moi c'est",
  title: "Ton Nom.",
  lead: "Je crée des trucs sur le web. Ici, quelques projets, ce que je sais faire et comment me joindre.",
  heroButton: "Voir mes projets",
  projectsTitle: "Projets",
  projects: [
    { title: "Projet un", text: "Une courte description de ce que c'est et ce que tu as fait.", tags: ["Next.js", "CSS"] },
    { title: "Projet deux", text: "Une courte description de ce que c'est et ce que tu as fait.", tags: ["JavaScript", "API"] },
    { title: "Projet trois", text: "Une courte description de ce que c'est et ce que tu as fait.", tags: ["Design", "Figma"] },
    { title: "Projet quatre", text: "Une courte description de ce que c'est et ce que tu as fait.", tags: ["Node", "SQL"] },
  ],
  skillsTitle: "Ce que j'utilise",
  skills: ["React", "Next.js", "JavaScript", "HTML", "CSS", "Git", "Figma"],
  aboutTitle: "Un peu sur moi",
  about: "Parle de toi ici, comme à un ami : ce qui t'a mené au code, ce que tu aimes construire, ce que tu fais à côté.",
  contactTitle: "On se parle ?",
  contactText: "Un projet, une question ou juste un bonjour, écris-moi.",
  email: "bonjour@exemple.com",
  footer: "Fait à la main avec Next.js.",
};

export default function Home() {
  return (
    <div className="wrap">
      <div className="top">
        <span className="logo">{content.name}</span>
        <ThemeToggle />
      </div>

      <div className="hero">
        <p className="hi">{content.hi}</p>
        <h1>{content.title}</h1>
        <p className="lead">{content.lead}</p>
        <a className="btn" href="#projets">{content.heroButton}</a>
      </div>

      <section id="projets">
        <h2>{content.projectsTitle}</h2>
        <div className="grid">
          {content.projects.map((p) => (
            <div className="card" key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <div className="tags">
                {p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>{content.skillsTitle}</h2>
        <div className="chips">
          {content.skills.map((s) => <span className="chip" key={s}>{s}</span>)}
        </div>
      </section>

      <section className="about">
        <h2>{content.aboutTitle}</h2>
        <p>{content.about}</p>
      </section>

      <div className="contact">
        <h2>{content.contactTitle}</h2>
        <p>{content.contactText}</p>
        <a className="btn" href={`mailto:${content.email}`}>{content.email}</a>
      </div>

      <footer>{content.footer}</footer>
    </div>
  );
}
