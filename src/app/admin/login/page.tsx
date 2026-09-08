"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = (await res.json()) as { error?: string };
      if (!res.ok) {
        setError(data.error ?? "Something went wrong. Please try again.");
        return;
      }
      router.push("/admin/portfolio");
      router.refresh();
    } catch {
      setError("Something went wrong. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-sm py-16 text-center">
      <h1 className="font-display text-3xl">Candlewood Admin</h1>
      <p className="mt-3 text-[15px] text-ink-soft">
        Enter the admin password to update the website.
      </p>
      <form onSubmit={handleSubmit} className="mt-10 space-y-6 text-left">
        <div>
          <label htmlFor="password" className="text-eyebrow mb-2 block text-ink-soft">
            Password
          </label>
          <input
            id="password"
            type="password"
            required
            autoFocus
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border-b border-ink/25 bg-transparent py-3 text-ink outline-none transition-colors focus:border-ink"
          />
        </div>
        {error && (
          <p className="border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
            {error}
          </p>
        )}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-ink px-8 py-4 text-[13px] tracking-[0.12em] text-cream uppercase transition-colors hover:bg-ink-deep disabled:opacity-60"
        >
          {loading ? "Checking…" : "Log In"}
        </button>
      </form>
    </div>
  );
}
