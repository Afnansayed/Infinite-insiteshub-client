import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
})

const useAxiosSecure = () => {
    const {logOut} = useContext(AuthContext);
    const naviGate = useNavigate();
    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res;
        }, err => {
            console.log('error ', err.response)

            if (err.response.status === 401 || err.response.status === 403) {

                logOut()
                    .then(() => {
                       naviGate('/login') 
                    })
                    .catch(error => {
                        console.error(error)
                    })
            }
        })
    }, [])

    return axiosSecure;
};

export default useAxiosSecure;