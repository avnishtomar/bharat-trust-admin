/* eslint-disable no-unused-vars */
import { createStore } from "@tanstack/store";

// Load initial state from localStorage
const getInitialState = () => {
  try {
    const saved = localStorage.getItem("user-store");
    if (saved) {
      return { ...JSON.parse(saved), isLoading: false, error: null };
    }
  } catch (error) {
    console.error("Failed to load saved state:", error);
  }

  return {
    user: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,
  };
};

const userStore = createStore({
  initialState: getInitialState(),
});

// Save to localStorage on every change
userStore.subscribe((state) => {
  try {
    const { isLoading, error, ...toSave } = state;
    localStorage.setItem("user-store", JSON.stringify(toSave));
  } catch (error) {
    console.error("Failed to save state:", error);
  }
});

export const userActions = {
  setUser: (userData) => {
    userStore.setState({
      user: userData,
      isAuthenticated: !!userData,
      error: null,
    });
  },

  clearUser: () => {
    userStore.setState({
      user: null,
      isAuthenticated: false,
      error: null,
    });
  },

  setLoading: (isLoading) => {
    userStore.setState((state) => ({ ...state, isLoading }));
  },

  setError: (error) => {
    userStore.setState((state) => ({ ...state, error }));
  },

  updateUser: (updates) => {
    userStore.setState((state) => ({
      ...state,
      user: state.user ? { ...state.user, ...updates } : null,
    }));
  },
};

export default userStore;
