"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Project } from "@/data/projects";
import { resizeImageFile } from "@/lib/resize-image";

const OTHER_TYPE = "__other__";
const SIZE_OPTIONS: { value: Project["size"]; label: string; hint: string }[] = [
  { value: "standard", label: "Standard", hint: "A regular tile in the homepage layout" },
  { value: "hero", label: "Large", hint: "A big, featured tile on the homepage" },
  { value: "wide", label: "Full-width", hint: "Spans the full width of the homepage section" },
];

type PhotoSlot = "cover" | "gallery1" | "gallery2";

const PHOTO_SLOTS: { key: PhotoSlot; label: string; hint: string }[] = [
  { key: "cover", label: "Cover Photo", hint: "The main photo, shown on the portfolio grid" },
  { key: "gallery1", label: "Detail Photo (optional)", hint: "A second photo on the project's own page" },
  { key: "gallery2", label: "Secondary Photo (optional)", hint: "A third photo on the project's own page" },
];

export default function ProjectForm({
  mode,
  initialProject,
  existingTypes,
}: {
  mode: "create" | "edit";
  initialProject?: Project;
  existingTypes: string[];
}) {
  const router = useRouter();

  const initialTypeIsKnown = initialProject
    ? existingTypes.includes(initialProject.type)
    : true;

  const [name, setName] = useState(initialProject?.name ?? "");
  const [location, setLocation] = useState(initialProject?.location ?? "");
  const [typeSelection, setTypeSelection] = useState(
    initialProject && !initialTypeIsKnown ? OTHER_TYPE : initialProject?.type ?? existingTypes[0] ?? OTHER_TYPE
  );
  const [customType, setCustomType] = useState(
    initialProject && !initialTypeIsKnown ? initialProject.type : ""
  );
  const [description, setDescription] = useState(initialProject?.description ?? "");
  const [longDescription, setLongDescription] = useState(initialProject?.longDescription ?? "");
  const [size, setSize] = useState<Project["size"]>(initialProject?.size ?? "standard");

  const [files, setFiles] = useState<Record<PhotoSlot, File | null>>({
    cover: null,
    gallery1: null,
    gallery2: null,
  });
  const [previews, setPreviews] = useState<Record<PhotoSlot, string | null>>({
    cover: initialProject?.image ?? null,
    gallery1: initialProject?.gallery?.[0] ?? null,
    gallery2: initialProject?.gallery?.[1] ?? null,
  });

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleFileChange(slot: PhotoSlot, file: File | null) {
    setFiles((prev) => ({ ...prev, [slot]: file }));
    setPreviews((prev) => ({
      ...prev,
      [slot]: file ? URL.createObjectURL(file) : prev[slot],
    }));
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setError(null);

    const resolvedType = typeSelection === OTHER_TYPE ? customType.trim() : typeSelection;
    if (!resolvedType) {
      setError("Please choose or enter a project type.");
      return;
    }

    setSubmitting(true);
    try {
      const photos: Record<string, string> = {};
      for (const slot of ["cover", "gallery1", "gallery2"] as PhotoSlot[]) {
        const file = files[slot];
        if (file) photos[slot] = await resizeImageFile(file);
      }

      const res = await fetch("/api/admin/portfolio", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mode,
          originalSlug: initialProject?.slug,
          name: name.trim(),
          location: location.trim(),
          type: resolvedType,
          description: description.trim(),
          longDescription: longDescription.trim(),
          size,
          photos,
        }),
      });

      const data = (await res.json()) as { error?: string };
      if (!res.ok) {
        setError(data.error ?? "Something went wrong publishing your changes.");
        return;
      }

      router.push("/admin/portfolio?published=1");
      router.refresh();
    } catch {
      setError("Something went wrong. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-12">
      <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
        <Field label="Project Name" htmlFor="name">
          <input
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. An Andover Colonial, Reconsidered"
            className={inputClasses}
          />
        </Field>
        <Field label="Location" htmlFor="location">
          <input
            id="location"
            required
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="e.g. Andover, MA"
            className={inputClasses}
          />
        </Field>
      </div>

      <Field label="Project Type" htmlFor="type">
        <select
          id="type"
          value={typeSelection}
          onChange={(e) => setTypeSelection(e.target.value)}
          className={inputClasses}
        >
          {existingTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
          <option value={OTHER_TYPE}>Other…</option>
        </select>
        {typeSelection === OTHER_TYPE && (
          <input
            value={customType}
            onChange={(e) => setCustomType(e.target.value)}
            placeholder="e.g. Nursery Design"
            className={`${inputClasses} mt-4`}
          />
        )}
      </Field>

      <Field
        label="Short Description"
        htmlFor="description"
        hint="One sentence, shown on the portfolio grid"
      >
        <textarea
          id="description"
          required
          rows={2}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={`${inputClasses} resize-none`}
        />
      </Field>

      <Field
        label="Full Description"
        htmlFor="longDescription"
        hint="A short paragraph, shown on the project's own page"
      >
        <textarea
          id="longDescription"
          required
          rows={4}
          value={longDescription}
          onChange={(e) => setLongDescription(e.target.value)}
          className={`${inputClasses} resize-none`}
        />
      </Field>

      <div>
        <p className="text-eyebrow mb-4 text-ink-soft">Homepage Size</p>
        <div className="flex flex-wrap gap-3">
          {SIZE_OPTIONS.map((option) => (
            <label
              key={option.value}
              className="cursor-pointer border border-ink/20 px-4 py-3 text-sm transition-colors has-[:checked]:border-ink has-[:checked]:bg-ink has-[:checked]:text-cream"
            >
              <input
                type="radio"
                name="size"
                value={option.value}
                checked={size === option.value}
                onChange={() => setSize(option.value)}
                className="sr-only"
              />
              <span className="block font-medium">{option.label}</span>
              <span className="block text-xs opacity-70">{option.hint}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="space-y-8 border-t border-ink/10 pt-10">
        <p className="text-eyebrow text-ink-soft">Photos</p>
        {PHOTO_SLOTS.map((slot) => (
          <div key={slot.key} className="flex flex-wrap items-center gap-6">
            <div className="h-24 w-24 shrink-0 overflow-hidden bg-linen">
              {previews[slot.key] ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={previews[slot.key] ?? undefined} alt="" className="h-full w-full object-cover" />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-center text-[9px] uppercase leading-tight tracking-wide text-ink-soft/60">
                  No Photo Yet
                </div>
              )}
            </div>
            <div>
              <label htmlFor={slot.key} className="mb-1 block text-sm font-medium">
                {slot.label}
              </label>
              <p className="mb-2 text-xs text-ink-soft">{slot.hint}</p>
              <input
                id={slot.key}
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange(slot.key, e.target.files?.[0] ?? null)}
                className="text-sm text-ink-soft file:mr-4 file:border file:border-ink/20 file:bg-transparent file:px-4 file:py-2 file:text-xs file:uppercase file:tracking-wide file:text-ink hover:file:border-ink"
              />
            </div>
          </div>
        ))}
      </div>

      {error && (
        <p className="border border-red-200 bg-red-50 px-6 py-4 text-sm text-red-800">{error}</p>
      )}

      <div className="flex items-center gap-6">
        <button
          type="submit"
          disabled={submitting}
          className="bg-ink px-8 py-4 text-[13px] tracking-[0.12em] text-cream uppercase transition-colors hover:bg-ink-deep disabled:opacity-60"
        >
          {submitting ? "Publishing…" : "Publish to Website"}
        </button>
        <span className="text-sm text-ink-soft">
          {submitting ? "This can take a few seconds for large photos." : ""}
        </span>
      </div>
    </form>
  );
}

const inputClasses =
  "w-full border-b border-ink/25 bg-transparent py-3 text-ink placeholder:text-stone focus:border-ink outline-none transition-colors";

function Field({
  label,
  htmlFor,
  hint,
  children,
}: {
  label: string;
  htmlFor: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="text-eyebrow mb-2 block text-ink-soft">
        {label}
      </label>
      {hint && <p className="mb-2 text-xs text-ink-soft">{hint}</p>}
      {children}
    </div>
  );
}
