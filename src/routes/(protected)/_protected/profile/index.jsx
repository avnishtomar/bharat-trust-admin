import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(protected)/_protected/profile/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>profile</div>;
}
