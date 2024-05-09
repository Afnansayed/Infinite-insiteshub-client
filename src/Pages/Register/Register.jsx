import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";


const Register = () => {
    const {createUser} = useContext(AuthContext);
    const handleRegister = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        const photo = form.get('photo');
        console.log(name,email,photo,password)
        //authentication
        createUser(email,password)
        .then(res => {
            console.log(res.user);
        })
        .catch(error => {
            console.error(error)
        })
    }
    return (
        <div className="hero min-h-screen bg-sky-100">
        <div className=" w-[70%]">
            <div className=" card shrink-0  shadow-2xl bg-sky-500 ">
                <form onSubmit={handleRegister} className="card-body grid grid-cols-1 lg:grid-cols-2">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Enter Your Name" className="input input-bordered" name="name" required />
                    </div>
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
                    <div className="form-control lg:col-span-2">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input type="text" placeholder="photo url" className="input input-bordered" name="photo" required />
                    </div>
                    <div className="form-control mt-6 lg:col-span-2">
                        <button className="btn bg-blue-100 hover:bg-red-300 text-blue-900 font-bold ">Register</button>
                    </div>
                </form>
                {/* <p className="text-green-600 text-center mb-5"></p>
                <p className="text-red-600 text-center mb-5"></p> */}
                <p className="pb-5 text-center">If you  have an account please <Link to='/login' className="text-[#fff]">Log In</Link></p>
            </div>
        </div>
    </div>
    );
};

export default Register;