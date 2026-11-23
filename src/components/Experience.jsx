import { experiences, experienceNote } from '../data/content.js';

export default function Experience({ t, lang }) {
  return (
    <section id="experiencias" className="section">
      <div className="container">
        <h2 className="section-title">{t.expTitle}</h2>
        <p className="section-sub">{t.expSub}</p>

        <ul className="exp-list">
          {experiences.map((e) => (
            <li className="card exp-item" key={e.org}>
              <div className="exp-head">
                <h3>{e.org}</h3>
                <span className="exp-period">{e.period[lang]}</span>
              </div>
              <p className="exp-role">{e.role[lang]}</p>
              <p>{e.description[lang]}</p>
            </li>
          ))}
        </ul>

        <p className="note">{experienceNote[lang]}</p>
      </div>
    </section>
  );
}
