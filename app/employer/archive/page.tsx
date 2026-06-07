import { EmptyStatePage } from "../../_components/portal";

export default function Page() {
  return (
    <EmptyStatePage
      title="Archive"
      description="Review closed requisitions and historical hiring outcomes."
      icon="archive"
      value="326 Closed"
      label="Archived Roles"
      actionHref="/employer"
      actionLabel="Return to Dashboard"
    />
  );
}
