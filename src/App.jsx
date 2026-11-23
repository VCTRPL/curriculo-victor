import { useState } from 'react';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import { ui } from './data/content.js';

export default function App() {
  const [lang, setLang] = useState('pt');
  const t = ui[lang];

  return (
    <>
      <a className="skip-link" href="#sobre">
        {lang === 'pt' ? 'Pular para o conteúdo' : 'Skip to content'}
      </a>
      <Header t={t} lang={lang} setLang={setLang} />
      <main>
        <About t={t} lang={lang} />
        <Projects t={t} lang={lang} />
        <Experience t={t} lang={lang} />
        <Contact t={t} lang={lang} />
      </main>
      <Footer t={t} />
    </>
  );
}
