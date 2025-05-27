import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://680b44a1d5075a76d98a73e7.mockapi.io",
});

// interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    console.log("Response:", response.status);
    return response;
  },
  (error) => {
    if (!error.response) {
      console.error("Network Error:", error.message);
    }
    return Promise.reject(error);
  }
);

// API
export const getAllContacts = () => axiosInstance.get("/contact");
