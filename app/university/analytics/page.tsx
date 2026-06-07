import { EmptyStatePage } from "../../_components/portal";

export default function Page() {
  return (
    <EmptyStatePage
      title="Analytics"
      description="Monitor placements, employer engagement, and program outcomes."
      icon="analytics"
      value="12 Reports"
      label="Insights"
      actionHref="/university"
      actionLabel="Back to Dashboard"
    />
  );
}
