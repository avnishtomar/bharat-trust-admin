import { useSyncExternalStore } from "react";
import userStore, { userActions } from "@store/userStore";

// Main hook to use the store in components
export const useUserStore = () => {
  // Subscribe to store changes
  const state = useSyncExternalStore(
    (callback) => userStore.subscribe(callback),
    () => userStore.state
  );

  return {
    // State
    ...state,

    // Actions
    ...userActions,
  };
};

// Selective hooks for better performance
export const useUser = () => {
  return useSyncExternalStore(
    (callback) => userStore.subscribe(callback),
    () => userStore.state.user
  );
};

export const useIsAuthenticated = () => {
  return useSyncExternalStore(
    (callback) => userStore.subscribe(callback),
    () => userStore.state.isAuthenticated
  );
};
