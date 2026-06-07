import type { ReactNode } from "react";

import { EmployerSidebar } from "../_components/portal";

export default function EmployerLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <EmployerSidebar />
      {children}
    </div>
  );
}
