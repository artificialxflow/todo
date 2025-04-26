import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Next.js App",
  description: "A simple Next.js application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ background: '#f5f6fa', minHeight: '100vh' }}>
        <header style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '18px 40px',
          background: '#fff',
          boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
          borderRadius: '0 0 16px 16px',
          marginBottom: 40,
          maxWidth: 1000,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
          <span style={{ fontWeight: 800, fontSize: 28, color: '#222', letterSpacing: 1 }}>Theological Q&A</span>
          <nav style={{ display: 'flex', gap: 32 }}>
            <Link href="/" style={{ color: '#1976d2', fontWeight: 600, fontSize: 18, textDecoration: 'none' }}>Home</Link>
            <Link href="/discussions" style={{ color: '#1976d2', fontWeight: 600, fontSize: 18, textDecoration: 'none' }}>Discussions</Link>
            <Link href="/surveys" style={{ color: '#1976d2', fontWeight: 600, fontSize: 18, textDecoration: 'none' }}>Surveys</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
