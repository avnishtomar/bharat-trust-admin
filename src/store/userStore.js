import { Store } from "@tanstack/store";

const getInitialState = () => {
  try {
    const saved = localStorage.getItem("user-store");
    if (saved) return JSON.parse(saved);
  } catch (error) {
    console.error("Failed to load saved state:", error);
  }

  return {
    user: null,
    isAuthenticated: false,
  };
};

const userStore = new Store(getInitialState());

userStore.subscribe((state) => {
  try {
    localStorage.setItem("user-store", JSON.stringify(state.currentVal));
  } catch (error) {
    console.error("Failed to save state:", error);
  }
});

export const userActions = {
  setUser: (userData) => {
    userStore.setState({
      user: userData,
      isAuthenticated: !!userData,
    });
  },

  clearUser: () => {
    localStorage.removeItem("user-store");
    userStore.setState({
      user: null,
      isAuthenticated: false,
    });
  },

  updateUser: (updates) => {
    userStore.setState((state) => ({
      ...state,
      user: state.user ? { ...state.user, ...updates } : null,
    }));
  },
};

export default userStore;
