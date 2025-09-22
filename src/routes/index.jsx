import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="p-2">
      <h1 class="text-3xl font-bold underline">
        Hello world!
      </h1>
    </div>
  )
}