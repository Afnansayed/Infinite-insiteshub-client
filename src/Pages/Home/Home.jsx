import NewsLetter from "../../components/Comments/NewsLetter/NewsLetter";
import RecentBlogs from "../../components/RecentBlogs/RecentBlogs";

const Home = () => {
    return (
        <div>
            <div>
                <RecentBlogs/>
            </div>
            <div className="mt-6">
                <NewsLetter/>
            </div>
        </div>
    );
};

export default Home;