import { profile } from '../data/content.js';

export default function Footer({ t }) {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="muted">{t.footer}</p>
      </div>
    </footer>
  );
}
