import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: true
})

const useAxiosSecure = () =>{

const navigate = useNavigate()

useEffect(()=>{

    axiosSecure.interceptors.response.use(res=>{
        return res;
    }, 

    error => {

        console.log("error catched by interceptor", error.response)
    }
    
    )

},[navigate])
return axiosSecure;
}

export default useAxiosSecure;