const fs = require('fs');
const path = require('path');

const talentDir = path.resolve(__dirname, '..', 'talent');
fs.mkdirSync(talentDir, { recursive: true });

const pagePath = path.join(talentDir, 'page.tsx');
const content = `import { StudentTalentPoolPage } from "../../_components/portal";

export default function Page() {
  return <StudentTalentPoolPage />;
}
`;

fs.writeFileSync(pagePath, content);
console.log('Successfully created:', pagePath);
