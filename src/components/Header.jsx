import { useEffect, useState } from 'react';
import { profile } from '../data/content.js';

const sectionIds = [
  { id: 'sobre', key: 'about' },
  { id: 'projetos', key: 'projects' },
  { id: 'experiencias', key: 'experience' },
  { id: 'contato', key: 'contact' },
];

export default function Header({ t, lang, setLang }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container header-inner">
        <a href="#top" className="brand" onClick={closeMenu}>
          <span className="brand-dot" aria-hidden="true" />
          {profile.shortName}
        </a>

        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="main-nav"
          aria-label={open ? t.close : t.menu}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav id="main-nav" className={`main-nav ${open ? 'is-open' : ''}`} aria-label="Principal">
          <ul>
            {sectionIds.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} onClick={closeMenu}>
                  {t.nav[s.key]}
                </a>
              </li>
            ))}
          </ul>
          <div className="lang-switch" role="group" aria-label="Idioma / Language">
            <button className={lang === 'pt' ? 'active' : ''} onClick={() => setLang('pt')} aria-pressed={lang === 'pt'}>
              PT
            </button>
            <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')} aria-pressed={lang === 'en'}>
              EN
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
