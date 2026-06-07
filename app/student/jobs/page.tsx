import { EmptyStatePage } from "../../_components/portal";

export default function Page() {
  return (
    <EmptyStatePage
      title="Internships"
      description="See openings that match your current readiness and target skills."
      icon="work"
      value="26 Live"
      label="Internship Roles"
      actionHref="/student"
      actionLabel="Back to Dashboard"
    />
  );
}
