import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from '@/routeTree.gen.js'

// Create the router
const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
})

function App() {
  return <RouterProvider router={router} />
}

export default App