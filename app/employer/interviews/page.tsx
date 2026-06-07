import { EmptyStatePage } from "../../_components/portal";

export default function Page() {
  return (
    <EmptyStatePage
      title="Interviews"
      description="Track scheduling, feedback, and next steps across your interview loops."
      icon="event"
      value="14 Today"
      label="Interview Slots"
      actionHref="/employer/pipeline"
      actionLabel="Open Pipeline"
    />
  );
}
