"use client";

import { useState, type FormEvent } from "react";

const PROJECT_TYPES = [
  "Full-Service Interior Design",
  "Whole-Home Design",
  "Room Design",
  "Kitchen & Bath Design",
  "New Construction",
  "Design Consultation",
  "Not sure yet",
];

const SCOPES = ["Under $25k", "$25k – $75k", "$75k – $200k", "$200k+", "Let's discuss"];

const inputClasses =
  "w-full border-b border-ink/25 bg-transparent py-3 text-ink placeholder:text-stone focus:border-ink outline-none transition-colors";

/**
 * There's no inquiry backend wired up yet — this captures a well-formed
 * submission client-side and shows a confirmation. Point the onSubmit
 * handler at a real endpoint (email service, CRM, etc.) when one exists.
 */
export default function InquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border border-ink/10 bg-ivory px-8 py-16 text-center sm:px-16">
        <p className="text-eyebrow mb-6 text-ink-soft">Thank You</p>
        <h2 className="font-display text-3xl leading-tight sm:text-4xl">
          We can&rsquo;t wait to learn more about your home.
        </h2>
        <p className="mx-auto mt-6 max-w-md text-[15px] leading-relaxed text-ink-soft">
          Someone from our studio will be in touch within two business days
          to schedule an initial conversation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-14">
      <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
        <Field label="Name" htmlFor="name">
          <input id="name" name="name" type="text" required className={inputClasses} />
        </Field>
        <Field label="Email" htmlFor="email">
          <input id="email" name="email" type="email" required className={inputClasses} />
        </Field>
        <Field label="Town" htmlFor="location">
          <input
            id="location"
            name="location"
            type="text"
            placeholder="e.g. Andover, MA"
            className={inputClasses}
          />
        </Field>
        <Field label="Preferred contact method" htmlFor="contactMethod">
          <select id="contactMethod" name="contactMethod" className={inputClasses} defaultValue="Email">
            <option>Email</option>
            <option>Phone</option>
            <option>Either is fine</option>
          </select>
        </Field>
      </div>

      <div>
        <p className="text-eyebrow mb-5 text-ink-soft">Project Type</p>
        <div className="flex flex-wrap gap-3">
          {PROJECT_TYPES.map((type) => (
            <label
              key={type}
              className="cursor-pointer border border-ink/20 px-4 py-2 text-sm text-ink-soft transition-colors has-[:checked]:border-ink has-[:checked]:bg-ink has-[:checked]:text-cream"
            >
              <input type="radio" name="projectType" value={type} className="sr-only" />
              {type}
            </label>
          ))}
        </div>
      </div>

      <div>
        <p className="text-eyebrow mb-5 text-ink-soft">Approximate Scope</p>
        <div className="flex flex-wrap gap-3">
          {SCOPES.map((scope) => (
            <label
              key={scope}
              className="cursor-pointer border border-ink/20 px-4 py-2 text-sm text-ink-soft transition-colors has-[:checked]:border-ink has-[:checked]:bg-ink has-[:checked]:text-cream"
            >
              <input type="radio" name="scope" value={scope} className="sr-only" />
              {scope}
            </label>
          ))}
        </div>
      </div>

      <Field label="What spaces are you considering?" htmlFor="spaces">
        <input
          id="spaces"
          name="spaces"
          type="text"
          placeholder="e.g. kitchen, primary bedroom, whole home"
          className={inputClasses}
        />
      </Field>

      <Field label="Tell us about your home and what you're hoping to achieve" htmlFor="details">
        <textarea
          id="details"
          name="details"
          rows={5}
          className={`${inputClasses} resize-none`}
        />
      </Field>

      <button
        type="submit"
        className="inline-flex items-center gap-3 bg-ink px-8 py-4 text-[13px] tracking-[0.12em] text-cream uppercase transition-colors hover:bg-ink-deep"
      >
        Send Our Studio a Note
      </button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="text-eyebrow mb-3 block text-ink-soft">
        {label}
      </label>
      {children}
    </div>
  );
}
