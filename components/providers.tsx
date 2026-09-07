'use client';

import { SessionProvider } from 'next-auth/react';

export function Providers({ children }: { children: React.ReactNode }) {
  // Static GitHub Pages hosts have no NextAuth API routes.
  if (process.env.NEXT_PUBLIC_BASE_PATH) {
    return <>{children}</>;
  }

  return <SessionProvider>{children}</SessionProvider>;
}
export default Providers;
