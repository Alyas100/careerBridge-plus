const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'app', 'university', 'talent');
fs.mkdirSync(dir, { recursive: true });

const filePath = path.join(dir, 'page.tsx');
const content = `import { StudentTalentPoolPage } from "../../_components/portal";

export default function Page() {
  return <StudentTalentPoolPage />;
}
`;

fs.writeFileSync(filePath, content);
console.log('Successfully created:', filePath);
