import { createFileRoute } from "@tanstack/react-router";

import { RoleAdd } from "@imports/pages";

export const Route = createFileRoute("/(protected)/_protected/role/add")({
  component: RouteComponent,
});

function RouteComponent() {
  return <RoleAdd />;
}
