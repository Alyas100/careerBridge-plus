import type { ReactNode } from "react";

import { EmployerSidebar, PageTransition } from "../_components/portal";

export default function EmployerLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <EmployerSidebar />
      <PageTransition>{children}</PageTransition>
    </div>
  );
}
