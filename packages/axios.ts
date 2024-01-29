import axios, { AxiosError } from "axios";

export const HTTP = axios.create({
  //   baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  baseURL: "https://demo-api.com",
  headers: {
    "Content-Type": "application/json",
  },
});

//Response interceptor
HTTP.interceptors.response.use(
  function (response) {
    if (response.data?.data?.token) {
      const token = response.data.data.token;

      let accessToken = "Bearer " + token;
      HTTP.defaults.headers.common.Authorization = accessToken;
    }

    return response;
  },
  function (error: AxiosError) {
    return error;
  }
);
