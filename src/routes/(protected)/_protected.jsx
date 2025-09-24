import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/(protected)/_protected")({
  component: RouteComponent,
  beforeLoad: ({ preload, context }) => {
    if (preload) return;
    if (!context.auth.isAuthenticated) {
      return redirect({ href: "/login" });
    }
  },
});

function RouteComponent() {
  return (
    <>
      <Outlet />
    </>
  );
}
