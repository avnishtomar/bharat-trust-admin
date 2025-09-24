import { createFileRoute } from "@tanstack/react-router";
import { Signup } from "@imports/pages";

export const Route = createFileRoute("/(auth)/_auth/signup")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Signup />;
}
