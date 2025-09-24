import { createFileRoute } from "@tanstack/react-router";
import { Login } from "@imports/pages";

export const Route = createFileRoute("/(auth)/_auth/login")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Login />;
}
