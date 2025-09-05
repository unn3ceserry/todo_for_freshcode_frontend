import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const globalApiUrl = import.meta.env.VITE_CIENT_API_URL

export const globalApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: globalApiUrl,
    headers: {
      "Content-Type": "application/json",
    },
  }),
  endpoints: () => ({}),
  tagTypes: ['tasks']
});
