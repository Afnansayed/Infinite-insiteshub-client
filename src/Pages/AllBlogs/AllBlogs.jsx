import axios from "axios";
import { useEffect, useState } from "react";
import Allblog from "./Allblog";

 

const AllBlogs = () => {
         const [allData,setAllData] = useState([]);
         const [filter,setFilter] = useState('');
         console.log(filter)
         useEffect(() =>{
             axios.get(`http://localhost:5000/allBlogs?category=${filter}`)
             .then(res => {
                setAllData(res.data)
             })
         },[filter])
         
    return (
        <div>
             <h2 className="text-center">{allData.length}</h2>

              <div className="w-[10%] mx-auto">
                    
                    <select onChange={e => setFilter(e.target.value)} id="category" name="category"  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2">
                        <option  value="">All</option>
                        <option  value="Technology">Technology</option>
                        <option value="Science">Science</option>
                        <option value="Health">Health</option>
                        <option value="Travel">Travel</option>
                        {/* Add more options as needed */}
                    </select>
              </div>
              <div className="space-y-5">
                {
                    allData.map(data => <Allblog
                     key={data._id}
                     data={data}
                    ></Allblog>)
                }
              </div>
        </div>
    );
};

export default AllBlogs;