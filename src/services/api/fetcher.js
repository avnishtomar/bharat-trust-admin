import axios from "axios";

const fetcher = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "https://api.example.com",
  timeout: 10000, // 10 seconds timeout
});

fetcher.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken"); // Retrieve token from localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Add token to Authorization header
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle errors globally
fetcher.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Handle unauthorized errors (e.g., redirect to login)
      console.error("Unauthorized! Redirecting to login...");
      // TODO: check this
      // window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default fetcher;
