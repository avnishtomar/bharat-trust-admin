import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(protected)/_protected/permission/add')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/permission/add"!</div>
}
