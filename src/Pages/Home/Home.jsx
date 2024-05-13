import Banner from "../../components/Banner/Banner";
import NewsLetter from "../../components/Comments/NewsLetter/NewsLetter";
import Footer from "../../components/Footer/Footer";
import RecentBlogs from "../../components/RecentBlogs/RecentBlogs";
import Review from "../../components/Review/Review";
import UserExperiences from "../../components/UserExperiences/UserExperiences";

const Home = () => {
    return (
        <div>
            <div className="mt-6">
                <Banner/>
                {/* <img src={wave} className="absolute bottom-0" alt="" /> */}
            </div>
            <div className="mt-6">
                <RecentBlogs/>
            </div>
            <div className="mt-6">
                <NewsLetter/>
            </div>
            <div className="mt-6">
                <Review/>
            </div>
            <div className="mt-6">
                <UserExperiences/>
            </div>
            <div className="mt-6">
                <Footer/>
            </div>
        </div>
    );
};

export default Home;