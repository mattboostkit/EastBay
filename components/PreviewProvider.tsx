"use client";

import { useMemo } from 'react';
import { LiveQueryProvider } from '@sanity/preview-kit';
import { client } from '@/lib/sanity.unified';

export default function PreviewProvider({
  children,
  token,
}: {
  children: React.ReactNode;
  token: string;
}) {
  const liveClient = useMemo(() => {
    return client.withConfig({
      token,
      perspective: 'previewDrafts',
      stega: {
        enabled: true,
        studioUrl: '/admin',
      },
    });
  }, [token]);

  return (
    <LiveQueryProvider client={liveClient}>
      {children}
    </LiveQueryProvider>
  );
}
