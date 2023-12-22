import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "https://dooito-server.vercel.app",
});

const useAxiosSecure = () => {
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },

      (error) => {
        console.log("error catched by interceptor", error.response);
      }
    );
  }, [navigate]);
  return axiosSecure;
};

export default useAxiosSecure;
