import axios from "axios";
import { useEffect, useState } from "react";
import Opinion from "./Opinion";


const UserExperiences = () => {
       const [feedback,setFeedback] = useState([]);
       useEffect(()=>{
                axios.get('https://assignment-11-server-eosin-six.vercel.app/allReview')
                .then(res => {
                    setFeedback(res.data);
                })
       },[])
    return (
        <div className="bg-sky-100 p-4">
            <div>
                <h2 className="text-3xl lg:text-5xl text-center font-semibold">Viewer FeedBack</h2>
            </div>
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-5">
                 {
                    feedback.map(feed => <Opinion key={feed._id}
                    feed={feed}
                    ></Opinion> )
                 }
            </div>
        </div>
    );
};

export default UserExperiences;