import { useQuery } from "@tanstack/react-query";
import { usersAPI } from "../services/api";

export const userKeys = {
  all: ["users"],
  lists: () => [...userKeys.all, "list"],
  list: (filters) => [...userKeys.lists(), { filters }],
  details: () => [...userKeys.all, "detail"],
  detail: (id) => [...userKeys.details(), id],
};

export const useUsers = () => {
  return useQuery({
    queryKey: userKeys.list(),
    queryFn: usersAPI.getUsers,
    staleTime: 10 * 60 * 1000,
  });
};

export const useUser = (id) => {
  return useQuery({
    queryKey: userKeys.detail(id),
    queryFn: () => usersAPI.getUser(id),
    enabled: !!id,
  });
};
