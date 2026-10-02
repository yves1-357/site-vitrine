"use client";

import { Mail, X } from "lucide-react";
import { useRef, useState, type FormEvent } from "react";
import { developer } from "@/config/site";
import { useI18n } from "@/i18n/LanguageProvider";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

export default function ContactDialog() {
  const { t } = useI18n();
  const c = t.dev.contact;
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});

  function update(field: keyof typeof values, value: string) {
    setValues((v) => ({ ...v, [field]: value }));
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const next: Errors = {};
    if (!values.name.trim()) next.name = c.required;
    if (!values.email.trim()) next.email = c.required;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
      next.email = c.invalidEmail;
    if (!values.message.trim()) next.message = c.required;
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const body = `${values.message.trim()}\n\n— ${values.name.trim()} (${values.email.trim()})`;
    window.location.href = `mailto:${developer.email}?subject=${encodeURIComponent(
      c.subject,
    )}&body=${encodeURIComponent(body)}`;
    dialogRef.current?.close();
  }

  function fieldProps(field: keyof Errors) {
    return {
      id: `contact-${field}`,
      "aria-invalid": errors[field] ? true : undefined,
      "aria-describedby": errors[field] ? `contact-${field}-err` : undefined,
    } as const;
  }

  return (
    <>
      <button
        type="button"
        className="btn btn-gold dev-cta"
        onClick={() => dialogRef.current?.showModal()}
      >
        <Mail aria-hidden="true" /> {t.dev.cta}
      </button>

      <dialog
        ref={dialogRef}
        className="contact-dialog"
        aria-labelledby="contact-title"
        onClick={(e) => {
          if (e.target === dialogRef.current) dialogRef.current?.close();
        }}
      >
        <form onSubmit={onSubmit} noValidate>
          <div className="contact-head">
            <h2 id="contact-title">{c.title}</h2>
            <button
              type="button"
              className="contact-close"
              onClick={() => dialogRef.current?.close()}
              aria-label={c.close}
            >
              <X aria-hidden="true" />
            </button>
          </div>
          <p className="contact-intro">{c.intro}</p>

          <div className="field">
            <label htmlFor="contact-name">{c.name}</label>
            <input
              {...fieldProps("name")}
              type="text"
              autoComplete="name"
              value={values.name}
              onChange={(e) => update("name", e.target.value)}
            />
            {errors.name && (
              <p className="field-error" id="contact-name-err">
                {errors.name}
              </p>
            )}
          </div>
          <div className="field">
            <label htmlFor="contact-email">{c.email}</label>
            <input
              {...fieldProps("email")}
              type="email"
              autoComplete="email"
              value={values.email}
              onChange={(e) => update("email", e.target.value)}
            />
            {errors.email && (
              <p className="field-error" id="contact-email-err">
                {errors.email}
              </p>
            )}
          </div>
          <div className="field">
            <label htmlFor="contact-message">{c.message}</label>
            <textarea
              {...fieldProps("message")}
              rows={5}
              value={values.message}
              onChange={(e) => update("message", e.target.value)}
            />
            {errors.message && (
              <p className="field-error" id="contact-message-err">
                {errors.message}
              </p>
            )}
          </div>

          <button type="submit" className="btn btn-gold btn-block">
            <Mail aria-hidden="true" /> {c.send}
          </button>
          <p className="contact-note">{c.note}</p>
        </form>
      </dialog>
    </>
  );
}
