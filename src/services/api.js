import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080/api",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json"
    }
});

// Request Interceptor
api.interceptors.request.use(
    (config) => {

        const token = localStorage.getItem("token");

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        console.log(
            `${config.method?.toUpperCase()} ${config.baseURL}${config.url}`
        );

        return config;

    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response Interceptor
api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {

        if (error.response) {

            switch (error.response.status) {

                case 401:
                    alert("Unauthorized. Please login.");
                    break;

                case 403:
                    alert("Access Denied.");
                    break;

                case 404:
                    alert("Resource Not Found.");
                    break;

                case 500:
                    alert("Internal Server Error.");
                    break;

                default:
                    alert("Something went wrong.");
            }

        } else {

            console.log("Backend Server Not Running");

        }

        return Promise.reject(error);

    }
);

export default api;
