import { EmptyStatePage } from "../../_components/portal";

export default function Page() {
  return (
    <EmptyStatePage
      title="Career Paths"
      description="Explore recommended tracks aligned to your current profile and goals."
      icon="route"
      value="3 Tracks"
      label="Suggested Paths"
      actionHref="/student/gaps"
      actionLabel="Review Skill Gaps"
    />
  );
}
