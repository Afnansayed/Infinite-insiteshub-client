import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import {  FaGoogle } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LogIn = () => {
    const { logIn, googleLog } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const handleLogIn = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        // console.log(email,password)
        //authentication
        logIn(email, password)
            .then(res => {
                console.log(res.user);
                toast.success('LogIn successFully');
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error)
                toast.error(error.message)
            })


    }
    const handleGoogle = () => {
        //googleLog
        googleLog()
            .then(res => {
                console.log(res.user);
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div className="hero min-h-screen bg-sky-100">
            <div className=" w-[70%]">
                <div className=" card btn-block shrink-0  shadow-2xl bg-sky-500 ">
                    <div className="flex flex-col justify-center gap-3 mt-3 items-center">
                        <p className="btn btn-block bg-sky-100 hover:bg-red-100 w-[50%]" onClick={handleGoogle}><FaGoogle className="text-blue-900" /></p>
                        <p className="text-center text-xl font-semibold text-[#fff]">Google Log In</p>
                    </div>
                    <form onSubmit={handleLogIn} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" name="email" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" name="password" required />
                        </div>
                        <div className="form-control mt-6 lg:col-span-2">
                            <button className="btn bg-blue-100 hover:bg-red-100 text-blue-900 font-bold ">Login</button>
                        </div>
                    </form>
                    {/* <p className="text-green-600 text-center mb-5"></p>
                <p className="text-red-600 text-center mb-5"></p> */}
                    <p className="pb-5 text-center">If you do not have an account please <Link to='/register' className="text-[#fff]">Register</Link></p>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default LogIn;