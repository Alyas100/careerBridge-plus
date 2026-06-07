import { EmptyStatePage } from "../../_components/portal";

export default function Page() {
  return (
    <EmptyStatePage
      title="Profile"
      description="Manage your academic background, skills, and public profile."
      icon="person"
      value="72 Score"
      label="Readiness"
      actionHref="/student"
      actionLabel="Back to Dashboard"
    />
  );
}
