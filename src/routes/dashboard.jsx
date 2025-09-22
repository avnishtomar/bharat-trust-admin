import { createFileRoute } from '@tanstack/react-router'
import Dashboard from '@imports/pages'

export const Route = createFileRoute('/dashboard')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Dashboard />
}
