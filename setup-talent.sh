#!/bin/bash
mkdir -p "app/university/talent"
cat > "app/university/talent/page.tsx" << 'EOF'
import { StudentTalentPoolPage } from "../../_components/portal";

export default function Page() {
  return <StudentTalentPoolPage />;
}
EOF
echo "Successfully created app/university/talent/page.tsx"
