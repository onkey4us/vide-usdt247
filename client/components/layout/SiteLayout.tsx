import type { PropsWithChildren } from "react";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

export const SiteLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex min-h-screen flex-col bg-background/95 text-foreground">
      <SiteHeader />
      <main className="relative isolate flex-1">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.12),_rgba(7,11,20,0))]" />
        {children}
      </main>
      <SiteFooter />
    </div>
  );
};
