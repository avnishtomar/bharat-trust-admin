import { createFileRoute } from '@tanstack/react-router'
import { DashboardLayout } from '@imports/layouts'
import { Dashboard } from '@imports/pages'

export const Route = createFileRoute('/(protected)/_protected/dashboard/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>Helloe</div>
  )
}
