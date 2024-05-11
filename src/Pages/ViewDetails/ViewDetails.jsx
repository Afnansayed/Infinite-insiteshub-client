import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import axios from "axios";
import Comments from "../../components/Comments/Comments";


const ViewDetails = () => {
    const singleBlog = useLoaderData();
    const { user } = useContext(AuthContext);
    const { _id, photo, title, shortDescription, longDescription, email,name} = singleBlog;
    const [opinion,setOpinion] = useState([]);
    const fin = _id;
    const userEmail = user?.email ;
    //console.log(userEmail)
  const handleComment = e => {
          e.preventDefault();
          const form = new FormData(e.currentTarget);
          const comment = form.get('comment');
        // console.log(comment,user?.photoURL,user?.displayName,_id)
          const commentWoner = user?.displayName;
          const wonerPicture = user?.photoURL;
          const commentInfo = {comment,
            commentWoner ,
            wonerPicture,
             fin};
            console.log(commentInfo);

            axios.post('http://localhost:5000/allComments',commentInfo)
            .then(res => {
                console.log(res.data)
                setOpinion([...opinion,res.data]);
            })
    }

    //get comment data from data base
    useEffect(() => {
        axios.get(`http://localhost:5000/allComments?fin=${fin}`)
        .then(res => {
            setOpinion(res.data);
        })
    },[])
    return (
        <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-sky-100 dark:text-gray-800">
            <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                <div className="flex items-center space-x-2 bg-blue-400 p-1 lg:p-3">
                    <div className="-space-y-1">
                        <h2 className="text-sm font-semibold leading-none">{name}</h2>
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
                    <div className="flex justify-around">
                    {
                        userEmail === email &&  <Link><button type="button" className="px-8 py-2 bg-blue-500 hover:bg-sky-500 font-semibold border rounded dark:border-gray-800 dark:text-[#fff] t">Update</button></Link>
                      }
                    </div>
                     
                    <div className="dark:text-gray-800">
                          <form onSubmit={handleComment}>
                            <div className="">
                            <label htmlFor="message" className="text-sm">Comment</label>
                            {
                                userEmail === email ? <p className="text-center py-3 text-lg font-bold">Can not comment on own blog</p> :<textarea id="message" rows="3" name="comment" className=" w-full p-3 rounded dark:bg-gray-100"></textarea>
                            }
                            <input type="submit"  className="bg-blue-700 btn-block rounded-lg text-[#fff] p-2 cursor-pointer" value='submit' />
                          </div>
                          
                        </form>
                        <div>
                             {
                               opinion.map(opi => <Comments 
                               key={opi._id}
                               opi={opi}
                               ></Comments>)
                             }
                          </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;
