import { httpClient } from "./api";

// API endpoints
export const usersAPI = {
  getUsers: () => httpClient.get("/users"),
  getUser: (id) => httpClient.get(`/users/${id}`),
};
