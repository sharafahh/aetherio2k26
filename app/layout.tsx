import type { Metadata } from 'next';
import './globals.css';
import { Providers } from '@/components/providers';
import CertificateModalPopup from '@/components/certificate-modal-popup';

export const metadata: Metadata = {
  title: "AMSphere Presents AETHERION'26 | Symposium",
  description:
    "AETHERION'26 presented by AMSphere. We are excited to welcome you to the symposium, with cash awards for the winners.",
  keywords: [
    "AETHERION",
    "AETHERION 26",
    "Symposium",
    "Technical Symposium",
    "Cultural Fest",
    "AMSphere",
    "Engineering Events",
    "AI Web Sprint",
    "E-Sports Championship",
  ],
  openGraph: {
    title: "AMSphere Presents AETHERION'26 | Symposium",
    description: "We are excited to welcome you to the symposium, with cash awards for the winners.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans bg-void text-slate-100 antialiased min-h-screen">
        <Providers>
          {children}
          <CertificateModalPopup />
        </Providers>
      </body>
    </html>
  );
}
