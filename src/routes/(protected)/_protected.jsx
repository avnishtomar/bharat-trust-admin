import { createFileRoute, redirect } from "@tanstack/react-router";

import { DashboardLayout } from "@imports/layouts";

export const Route = createFileRoute("/(protected)/_protected")({
  component: RouteComponent,
  beforeLoad: ({ preload, context }) => {
  },
});

function RouteComponent() {
  return <DashboardLayout />;
}
