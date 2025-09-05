import { globalApi } from "@/shared";
import type { TasksType, TaskType } from "../model";

export const tasksApi = globalApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllTasks: builder.query<TasksType, void>({
      query: () => "/tasks/get/all",
      providesTags: ["tasks"],
    }),

    createTask: builder.mutation<TaskType, string>({
      query: (content) => ({
        url: "tasks/create",
        method: "POST",
        body: { content },
      }),
      invalidatesTags: ["tasks"],
    }),

    completedTask: builder.mutation<TaskType, string>({
      query: (id) => ({
        url: "tasks/completed",
        method: "PATCH",
        body: { id },
      }),
      invalidatesTags: ['tasks'],
    }),

    deleteTask: builder.mutation<boolean, string>({
      query: (id) => ({
        url: "tasks/delete",
        method: "DELETE",
        body: { id },
      }),
      invalidatesTags: ["tasks"],
    }),

    deleteAllTasks: builder.mutation<boolean, void>({
      query: () => ({
        url: "tasks/delete/all",
        method: "DELETE",
      }),
      invalidatesTags: ["tasks"],
    }),

    deleteCompletedTasks: builder.mutation<boolean, void>({
      query: () => ({
        url: "tasks/delete/completed",
        method: "DELETE",
      }),
      invalidatesTags: ["tasks"],
    }),
  }),
  overrideExisting: true,
});

