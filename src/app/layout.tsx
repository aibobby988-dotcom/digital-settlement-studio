import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/layout/Sidebar";
import { MobileNav } from "@/components/layout/MobileNav";
import { Footer } from "@/components/layout/Footer";
import { ToastProvider } from "@/components/ui/Toast";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Digital Settlement Studio",
  description:
    "A controlled, 24/7 settlement proposition for institutional treasury and tokenised assets — independent product case study.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-paper-50 text-ink-900">
        <ToastProvider>
          <Sidebar />
          <MobileNav />
          <div className="app-shell flex min-h-screen flex-col lg:pl-72">
            <main className="flex-1 px-4 py-8 sm:px-6 lg:px-10 lg:py-10">
              <div className="mx-auto w-full max-w-6xl">{children}</div>
            </main>
            <div className="mx-auto w-full max-w-6xl">
              <Footer />
            </div>
          </div>
        </ToastProvider>
      </body>
    </html>
  );
}
