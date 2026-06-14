import type { ReactNode } from "react";

import { StudentSidebar, PageTransition } from "../_components/portal";

export default function StudentLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <StudentSidebar />
      <PageTransition>{children}</PageTransition>
    </div>
  );
}
