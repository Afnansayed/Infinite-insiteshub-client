// import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Wish from "./Wish";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const WishList = () => {
    const { user } = useContext(AuthContext);
    const [wishedData, setWishedData] = useState([]);
    const currentUser = user?.email;
    const axiosSecure = useAxiosSecure();
    useEffect(() => {
        // axios.get(`http://localhost:5000/allWishes?userEmail=${currentUser}`,{withCredentials: true})
        //     .then(res => {
        //         setWishedData(res.data)
        //     })
        axiosSecure.get(`/allWishes?userEmail=${currentUser}`)
            .then(res => {
                setWishedData(res.data)
            })
    }, [wishedData,axiosSecure])
    return (
        <div className="bg-sky-100">

            <div className="pt-5">
                <div className="max-w-md lg:max-w-4xl shadow-lg p-8 sm:flex sm:space-x-6 mt-5 mx-auto dark:bg-gray-50 dark:text-gray-800">
                    <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                        <img src={user?.photoURL} alt="" className="object-cover object-center w-full h-full rounded dark:bg-gray-500" />
                    </div>
                    <div className="flex flex-col space-y-4">
                        <div>
                            <h2 className="text-2xl font-semibold">{user?.displayName}</h2>

                        </div>
                        <div className="space-y-1">
                            <span className="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Email address" className="w-4 h-4">
                                    <path fill="currentColor" d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"></path>
                                </svg>
                                <span className="dark:text-gray-600">{user?.email}</span>
                            </span>
                        </div>
                        <div>
                            <h3 className="font-semibold text-2xl">You Can See All Your Wishes Data Here</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-5">
                {
                    wishedData.map(wish => <Wish
                        key={wish._id}
                        wish={wish}
                    >
                    </Wish>)
                }
            </div>
        </div>
    );
};

export default WishList;