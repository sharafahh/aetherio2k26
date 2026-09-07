import { GOOGLE_FORM_REGISTRATION_URL } from '@/lib/data/events';

export const metadata = {
  title: "Register | AETHERION'26 — National Symposium",
  description: "Official registration for AETHERION'26 Technical & Non-Technical Symposium events.",
};

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-slate-100 flex items-center justify-center px-6">
      <meta httpEquiv="refresh" content={`0;url=${GOOGLE_FORM_REGISTRATION_URL}`} />
      <div className="text-center space-y-4 max-w-md">
        <p className="text-sm font-mono text-red-300 uppercase tracking-widest">Redirecting to registration</p>
        <a
          href={GOOGLE_FORM_REGISTRATION_URL}
          className="inline-block px-6 py-3 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-500"
        >
          Continue to Google Form
        </a>
      </div>
    </main>
  );
}
