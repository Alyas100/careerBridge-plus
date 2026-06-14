import os
import sys

# Create the directory structure
talent_dir = os.path.join(os.path.dirname(__file__), '..', 'university', 'talent')
os.makedirs(talent_dir, exist_ok=True)

# Create the page.tsx file
page_content = '''import { StudentTalentPoolPage } from "../../_components/portal";

export default function Page() {
  return <StudentTalentPoolPage />;
}
'''

page_path = os.path.join(talent_dir, 'page.tsx')
with open(page_path, 'w') as f:
    f.write(page_content)

print(f'Successfully created: {page_path}')
