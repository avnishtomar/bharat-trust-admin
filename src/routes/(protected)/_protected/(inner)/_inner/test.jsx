import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/(protected)/_protected/(inner)/_inner/test"
)({
  component: RouteComponent,
});

function RouteComponent() {
  return <div> test for inner layout</div>;
}
