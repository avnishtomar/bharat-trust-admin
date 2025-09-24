import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { fetcher } from "@services/api/fetcher";

// Queries
export const useGetUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: () => fetcher.get("/users"),
  });
};

export const useGetUserById = (id) => {
  return useQuery({
    queryKey: ["users", id],
    queryFn: () => fetcher.get(`/users/${id}`),
    enabled: !!id,
  });
};

// Mutations
export const useCreateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => fetcher.post("/users", data),
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
    },
  });
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }) => fetcher.put(`/users/${id}`, data),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries(["users"]);
      queryClient.invalidateQueries(["users", id]);
    },
  });
};

export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) => fetcher.delete(`/users/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
    },
  });
};
