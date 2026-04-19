import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import customFetch from "./utils";
import { toast } from "react-toastify";

export const useFetchTasks = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const { data } = await customFetch("/");
      return data;
    },
  });

  return { isLoading, data, error, isError };
};

export const useCreateTask = (newItemName, setNewItemName) => {
  const queryClient = useQueryClient();
  const { mutate: mutateTask, isLoading } = useMutation({
    mutationFn: (itemName) =>
      customFetch.post("/", {
        title: newItemName,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast.success("task added");
      setNewItemName("");
    },
    onError: (error) => {
      toast.error(error.response.data.msg);
    },
  });

  return { mutateTask, isLoading };
};
export const useEditTask = () => {
  const queryClient = useQueryClient();

  const { mutate: editMutate } = useMutation({
    mutationFn: ({ taskId, isDone }) =>
      customFetch.patch(`/${taskId}`, { isDone }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
    onError: (error) => {
      toast.error(error.response.data.msg);
    },
  });

  return { editMutate };
};
export const useDeleteTask = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteMutate, isLoading: isDeleting } = useMutation({
    mutationFn: (taskId) => {
      return customFetch.delete(`/${taskId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
    onError: (error) => {
      toast.error(error.response.data.msg);
    },
  });

  return { deleteMutate, isDeleting };
};
