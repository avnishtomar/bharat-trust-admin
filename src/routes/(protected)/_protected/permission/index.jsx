import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(protected)/_protected/permission/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/permission/"!</div>
}
