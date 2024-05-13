import NewsLetter from "../../components/Comments/NewsLetter/NewsLetter";
import RecentBlogs from "../../components/RecentBlogs/RecentBlogs";
import Review from "../../components/Review/Review";

const Home = () => {
    return (
        <div>
            <div>
                <RecentBlogs/>
            </div>
            <div className="mt-6">
                <NewsLetter/>
            </div>
            <div className="mt-6">
                <Review/>
            </div>
        </div>
    );
};

export default Home;