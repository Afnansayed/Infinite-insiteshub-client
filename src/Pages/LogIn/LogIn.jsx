import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";


const LogIn = () => {
    const {name} = useContext(AuthContext);
    console.log(name)
    const handleLogIn = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
       // console.log(email,password)
         
    }
    return (
        <div className="hero min-h-screen bg-sky-100">
        <div className=" w-[70%]">
            <div className=" card shrink-0  shadow-2xl bg-sky-500 ">
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
                        <button className="btn bg-blue-100 hover:bg-red-300 text-blue-900 font-bold ">Login</button>
                    </div>
                </form>
                {/* <p className="text-green-600 text-center mb-5"></p>
                <p className="text-red-600 text-center mb-5"></p> */}
                <p className="pb-5 text-center">If you do not have an account please <Link to='/login' className="text-[#fff]">Register</Link></p>
            </div>
        </div>
    </div>
    );
};

export default LogIn;