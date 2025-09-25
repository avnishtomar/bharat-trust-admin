import { createFileRoute } from "@tanstack/react-router";

import { AuthLayout } from "@imports/layouts";

export const Route = createFileRoute("/(auth)/_auth")({
  component: RouteComponent,
});

function RouteComponent() {
  return <AuthLayout />;
}
