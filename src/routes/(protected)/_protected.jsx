import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/(protected)/_protected")({
  component: RouteComponent,
  beforeLoad: ({ preload }) => {
    if (preload) return;

    // TODO: Update
    // if (!context.auth.user.isAuthenticated) {
    const isAuthenticated = false;
    if (!isAuthenticated) {
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
