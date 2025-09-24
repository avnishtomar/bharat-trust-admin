import { useMemo } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createRouter } from "@tanstack/react-router";

import { useUserStore } from "@hooks/useUserStore";

import { routeTree } from "./routeTree.gen.ts";

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
  const auth = useUserStore();
  const routerContext = useMemo(() => ({ auth, queryClient }), [auth]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} context={{ ...routerContext }} />
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}

export default App;
