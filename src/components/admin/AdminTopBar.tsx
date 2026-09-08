"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { LogoMark } from "@/components/ui/Logo";

export default function AdminTopBar() {
  const pathname = usePathname();
  const router = useRouter();
  const isLogin = pathname === "/admin/login";

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <header className="border-b border-ink/10 bg-ivory">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-5 sm:px-10">
        <div className="flex items-center gap-3">
          <LogoMark variant="ink" className="h-7 w-auto" />
          <span className="text-eyebrow text-ink-soft">Admin</span>
        </div>
        {!isLogin && (
          <div className="flex items-center gap-6">
            <Link
              href="/admin/portfolio"
              className="text-[13px] tracking-[0.05em] text-ink-soft uppercase transition-colors hover:text-ink"
            >
              Portfolio
            </Link>
            <button
              type="button"
              onClick={handleLogout}
              className="text-[13px] tracking-[0.05em] text-ink-soft uppercase transition-colors hover:text-ink"
            >
              Log Out
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
