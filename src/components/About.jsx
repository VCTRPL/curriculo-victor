import { about, profile, skills, tools, softSkills, languages } from '../data/content.js';
import { HiOutlineDownload } from 'react-icons/hi';

export default function About({ t, lang }) {
  const a = about[lang];

  return (
    <section id="sobre" className="section">
      <div className="container">
        <p className="eyebrow">{profile.location}</p>
        <h1 className="hero-title">{profile.name}</h1>
        <p className="hero-sub">{a.headline}</p>

        <div className="about-grid">
          <div className="about-text">
            <h2 className="section-title">{t.aboutTitle}</h2>
            {a.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <a className="btn btn-primary" href={profile.cvFile} download>
              <HiOutlineDownload aria-hidden="true" />
              {t.cv}
            </a>
          </div>

          <div className="card skills-card">
            <h3>{t.skillsTitle}</h3>
            <ul className="skill-list">
              {skills.map((s) => (
                <li key={s.name}>
                  <div className="skill-row">
                    <span>{s.name}</span>
                    <small>{s.level}</small>
                  </div>
                  <div className="bar" role="presentation">
                    <span style={{ width: `${s.pct}%` }} />
                  </div>
                </li>
              ))}
            </ul>

            <h3>{t.toolsTitle}</h3>
            <div className="chips">
              {tools.map((tool) => (
                <span className="chip" key={tool}>
                  {tool}
                </span>
              ))}
            </div>

            <h3>{t.softTitle}</h3>
            <div className="chips">
              {softSkills[lang].map((s) => (
                <span className="chip chip-soft" key={s}>
                  {s}
                </span>
              ))}
            </div>

            <h3>{t.langTitle}</h3>
            <ul className="lang-list">
              {languages.map((l) => (
                <li key={l.name}>
                  <strong>{l.name}</strong>
                  <span>{l.level[lang]}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
