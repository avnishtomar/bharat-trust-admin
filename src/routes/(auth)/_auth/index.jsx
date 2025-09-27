import { createFileRoute } from "@tanstack/react-router";

import { Login } from "@imports/pages";

export const Route = createFileRoute("/(auth)/_auth/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Login />;
}
