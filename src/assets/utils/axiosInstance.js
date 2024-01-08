import axios from "axios";

export const axiosInstanceLibraryService = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 3000,
});

axiosInstanceLibraryService.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default axiosInstanceLibraryService;




// import axios from "axios";

// export const axiosInstanceLibraryService = axios.create({
//   baseURL: "http://localhost:8080",
//   timeout: 3000,
// });

// axiosInstanceLibraryService.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");

//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }

//   return config;
// });

// export default axiosInstanceLibraryService;

// export const axiosInstance = axios.create({
//   baseURL: import.meta.env.VITE_API_URL,
//   timeout: 3000,
// });


// axiosInstance.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");

//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }

//   return config;
// });


