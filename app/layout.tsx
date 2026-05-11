import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ChurnSurveyor – Automated Exit Surveys for SaaS",
  description: "Trigger smart exit surveys when users cancel, analyze responses for churn insights. Integrates with Stripe & Paddle."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="814b1fe3-31ac-446d-a995-fa640b91d011"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
