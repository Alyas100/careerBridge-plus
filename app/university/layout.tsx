import type { ReactNode } from "react";

import { UniversitySidebar, PageTransition } from "../_components/portal";

export default function UniversityLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <UniversitySidebar />
      <PageTransition>{children}</PageTransition>
    </div>
  );
}
