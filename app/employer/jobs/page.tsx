import { EmptyStatePage } from "../../_components/portal";

export default function Page() {
  return (
    <EmptyStatePage
      title="Job Library"
      description="Browse, filter, and manage your open roles."
      icon="work"
      value="18 Active"
      label="Open Roles"
      actionHref="/employer/post-job"
      actionLabel="Create Role"
    />
  );
}
