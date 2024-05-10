import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";


const ViewDetails = () => {
    const singleBlog = useLoaderData();
    const { user } = useContext(AuthContext);
    const { _id, photo, title, shortDescription, longDescription, category,email } = singleBlog;

  const handleComment = e => {
          e.preventDefault();
          const form = new FormData(e.currentTarget);
          const comment = form.get('comment');
          console.log(comment)
    }
    return (
        <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-100 dark:text-gray-800">
            <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                <div className="flex items-center space-x-2 bg-blue-400 p-1 lg:p-3">
                    <img src={user?.photoURL} alt="" className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-300" />
                    <div className="-space-y-1">
                        <h2 className="text-sm font-semibold leading-none">{user?.displayName}</h2>
                        <span className="inline-block text-xs leading-none dark:text-gray-600">{email}</span>
                    </div>
                </div>
                <img src={photo} alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
                <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-50">
                    <div className="space-y-2">
                        <a rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl">{title}</a>
                        <p className="text-xs lg:text-2xl dark:text-gray-600">
                            {shortDescription}
                        </p>
                        <p className="text-xs lg:text-xl dark:text-gray-600">
                            {longDescription}
                        </p>
                    </div>
                    
                    <div className="dark:text-gray-800">
                        {user.email === email &&  <form onSubmit={handleComment}>
                            <div className="">
                            <label htmlFor="message" className="text-sm">Comment</label>
                            <textarea id="message" rows="3" name="comment" className=" w-full p-3 rounded dark:bg-gray-100"></textarea>
                            <input type="submit"  className="bg-blue-700 btn-block rounded-lg text-[#fff] p-2 cursor-pointer" value='submit' />
                          </div>
                        </form>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;
