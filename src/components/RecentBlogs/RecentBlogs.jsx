import axios from "axios";
import { useEffect, useState } from "react";
import RecentBlog from "./RecentBlog";

const RecentBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/allBlogs')
            .then(res => {
                setBlogs(res.data)
            })
    }, [])
  //  console.log(blogs)
    return (
        <section className="py-6 sm:py-12 dark:bg-sky-100 dark:text-gray-800 rounded-lg">
            <div className="container p-6 mx-auto space-y-8">
                <div className="space-y-4 text-center lg:w-1/2 mx-auto">
                    <h2 className="text-2xl lg:text-3xl font-bold">Embark on a Journey of Discovery: Explore the Latest Insights and Perspectives</h2>
                    <p className="font-serif text-sm dark:text-gray-600">Stay updated with our curated selection of recent blogs, covering a diverse range of topics from science and technology to health and travel. Discover fascinating content that sparks curiosity and inspires exploration..</p>
                </div>
                <div className="grid grid-cols-1 lg:hover:gap-12 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">

                    {
                        blogs.slice(0,6).map(blog => <RecentBlog
                            key={blog._id}
                            blog={blog}
                        ></RecentBlog>)
                    }
                </div>
            </div>
        </section>
    );
};

export default RecentBlogs;