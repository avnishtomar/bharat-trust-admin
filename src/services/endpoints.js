import { httpClient } from "@/services/api";

// API endpoints
export const usersAPI = {
  getUsers: () => httpClient.get("/users"),
  getUser: (id) => httpClient.get(`/users/${id}`),
};
