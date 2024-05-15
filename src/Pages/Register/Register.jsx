import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { updateProfile } from "firebase/auth";


const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [aError, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        const photo = form.get('photo');
        //console.log(name, email, photo, password)

        setError('')
        setSuccess('')

        //authenticate password before hiting the auth
        if (!/^(?=.*[A-Z])/.test(password)) {
            return setError('One uppercase character must be required');
        } else if (!/^(?=.*[a-z])/.test(password)) {
            return setError('One lowercase character must be required');
        } else if (password.length < 6) {
            return setError('6 character must be required');
        }
        //authentication
        createUser(email, password)
            .then(res => {
                //  console.log(res.user);
                updateProfile(res.user,{
                    displayName: name,
                    photoURL: photo,    
                })
                setSuccess('User Created SuccessFully');
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
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
                    <p className="text-[#fff] text-center mb-5">{success}</p>
                    <p className="text-red-600 text-center mb-5">{aError}</p>
                    <p className="pb-5 text-center">If you  have an account please <Link to='/login' className="text-[#fff]">Log In</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;