import type { Metadata } from "next";
import AdminTopBar from "@/components/admin/AdminTopBar";

export const metadata: Metadata = {
  title: { default: "Admin", template: "%s | Candlewood Admin" },
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <AdminTopBar />
      <div className="mx-auto max-w-4xl px-6 py-12 sm:px-10">{children}</div>
    </div>
  );
}
