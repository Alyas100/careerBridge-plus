import type { ReactNode } from "react";

import { UniversitySidebar } from "../_components/portal";

export default function UniversityLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <UniversitySidebar />
      {children}
    </div>
  );
}
