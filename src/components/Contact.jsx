import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';
import { profile } from '../data/content.js';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const channels = [
  { key: 'email', href: `mailto:${profile.email}`, label: 'E-mail', icon: FaEnvelope },
  { key: 'whatsapp', href: profile.whatsapp, label: 'WhatsApp', icon: FaWhatsapp },
  { key: 'linkedin', href: profile.linkedin, label: 'LinkedIn', icon: FaLinkedin },
  { key: 'github', href: profile.github, label: 'GitHub', icon: FaGithub },
];

export default function Contact({ t }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', text: '' });
  const [sending, setSending] = useState(false);

  const validate = (values) => {
    const e = {};
    if (!values.name.trim()) e.name = t.errors.name;
    if (!EMAIL_RE.test(values.email.trim())) e.email = t.errors.email;
    if (values.message.trim().length < 10) e.message = t.errors.message;
    return e;
  };

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    const next = { ...form, [name]: value };
    setForm(next);
    if (errors[name]) setErrors(validate(next));
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const e = validate(form);
    setErrors(e);
    if (Object.keys(e).length) return;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus({ type: 'error', text: t.notConfigured });
      return;
    }

    setSending(true);
    setStatus({ type: '', text: '' });
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name.trim(),
          from_email: form.email.trim(),
          message: form.message.trim(),
          reply_to: form.email.trim(),
        },
        { publicKey: PUBLIC_KEY }
      );
      setStatus({ type: 'success', text: t.success });
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus({ type: 'error', text: t.failure });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contato" className="section section-alt">
      <div className="container">
        <h2 className="section-title">{t.contactTitle}</h2>
        <p className="section-sub">{t.contactSub}</p>

        <div className="contact-grid">
          <div>
            <h3 className="sub-title">{t.channels}</h3>
            <ul className="channel-list">
              {channels.map(({ key, href, label, icon: Icon }) => (
                <li key={key}>
                  <a
                    className="channel"
                    href={href}
                    target={key === 'email' || key === 'whatsapp' ? undefined : '_blank'}
                    rel={key === 'email' || key === 'whatsapp' ? undefined : 'noopener noreferrer'}
                    aria-label={label}
                  >
                    <Icon aria-hidden="true" />
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="contact-info">
              {profile.email}
              <br />
              {profile.phone}
            </p>
          </div>

          <form className="card contact-form" onSubmit={handleSubmit} noValidate>
            <Field label={t.form.name} name="name" value={form.name} onChange={handleChange} error={errors.name} />
            <Field
              label={t.form.email}
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              error={errors.email}
            />
            <Field
              label={t.form.message}
              name="message"
              as="textarea"
              value={form.message}
              onChange={handleChange}
              error={errors.message}
            />

            <button className="btn btn-primary" type="submit" disabled={sending}>
              {sending ? t.form.sending : t.form.send}
            </button>

            {status.text && (
              <p className={`form-status ${status.type}`} role="status" aria-live="polite">
                {status.text}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, error, as = 'input', ...rest }) {
  const id = `field-${name}`;
  const Tag = as;
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <Tag
        id={id}
        name={name}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        rows={as === 'textarea' ? 5 : undefined}
        {...rest}
      />
      {error && (
        <span id={`${id}-error`} className="field-error">
          {error}
        </span>
      )}
    </div>
  );
}
