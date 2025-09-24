import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "@/routeTree.gen.js";
import { useUser } from "@/hooks/useUserStore";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useMemo } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 10 * 60 * 1000, // 10 minutes
      retry: 2,
      refetchOnWindowFocus: true,
    },
  },
});

// Create the router
const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  scrollRestoration: true,
});

function App() {
  const auth = useUser();
  console.log("🚀 ~ App ~ auth:", auth);
  const routerContext = useMemo(() => ({ auth }), [auth]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} context={routerContext} />
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}

export default App;
