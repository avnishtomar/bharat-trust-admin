import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(protected)/_protected/role/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/profile/"!</div>
}
