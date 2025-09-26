import { createFileRoute } from "@tanstack/react-router";

import { InnerLayout } from "@imports/layouts";

export const Route = createFileRoute("/(protected)/_protected/(inner)/_inner")({
  component: RouteComponent,
});

function RouteComponent() {
  return <InnerLayout />;
}
