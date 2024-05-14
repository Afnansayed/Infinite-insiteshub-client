import axios from "axios";
import { useEffect, useState } from "react";
import TableRow from "./TableRow";


const Fetured = () => {
     const [sortedData,setSortedData] = useState([]);
     useEffect(()=>{
          axios.get('http://localhost:5000/allBlogs')
          .then(res => {
            const data = res.data;
            data.sort((a, b) => b.longDescription.length - a.longDescription.length);
            const topTenData = data.slice(0, 10);
           setSortedData(topTenData);
          })
     },[])
    // console.log(sortedData);

    return (
        <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Blog Owner</th>
              <th>Blog Title</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
                sortedData.map(fea => <TableRow key={fea._id}
                    fea={fea}
                ></TableRow>)
            }
            
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th></th>
              <th>Blog Owner</th>
              <th>Blog Title</th>
            </tr>
          </tfoot>
          
        </table>
      </div>
    );
};

export default Fetured;