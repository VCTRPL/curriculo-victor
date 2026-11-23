import { projects } from '../data/content.js';
import { FaGithub } from 'react-icons/fa';

export default function Projects({ t, lang }) {
  return (
    <section id="projetos" className="section section-alt">
      <div className="container">
        <h2 className="section-title">{t.projectsTitle}</h2>
        <p className="section-sub">{t.projectsSub}</p>

        <ol className="timeline">
          {projects.map((p) => (
            <li className="timeline-item" key={p.id}>
              <span className="timeline-date">{p.dateLabel[lang]}</span>
              <article className="card project-card">
                <div className="project-media">
                  {p.media ? (
                    <img src={p.media} alt={`${p.name}`} loading="lazy" />
                  ) : (
                    <div className="media-placeholder" role="img" aria-label={t.noMedia}>
                      <span>{t.noMedia}</span>
                    </div>
                  )}
                </div>

                <div className="project-body">
                  <h3>{p.name}</h3>
                  <p>{p.description[lang]}</p>

                  <div className="chips">
                    {p.tech.map((tech) => (
                      <span className="chip" key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a className="btn btn-ghost" href={p.repo} target="_blank" rel="noopener noreferrer">
                    <FaGithub aria-hidden="true" />
                    {t.repoLabel}
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
