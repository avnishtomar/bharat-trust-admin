import { createFileRoute } from '@tanstack/react-router'
import { Profile } from '@imports/pages'

export const Route = createFileRoute('/(protected)/_protected/profile')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Profile />
}
