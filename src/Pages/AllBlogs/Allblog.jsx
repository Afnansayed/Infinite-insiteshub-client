import PropType from 'prop-types'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';

const Allblog = ({ data }) => {
    const { _id, photo, title, shortDescription,category} = data;
    const {user} = useContext(AuthContext);
    const  userEmail= user?.email;

    const handleWishList = () =>{
        const wishData = {
          photo,title,shortDescription,category,userEmail
        }
       // console.log(wishData);
        axios.post(`http://localhost:5000/allWishes?title=${title}&userEmail=${userEmail}`,wishData)
        .then(res => {  
          console.log(res.data);
          if(res.data){
              Swal.fire("Added in Wish List");
          }
        
        })
   }
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure className='lg:w-[30%] '><img  src={photo} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{shortDescription}</p>
                <p className='text-3xl font-semibold text-green-600'>{category}</p>
                <div className="card-actions justify-end">
                    <Link to={`/details/${_id}`}><button className="btn btn-warning text-[#fff]">View Details</button></Link>
                    <button onClick={handleWishList} className="btn btn-warning text-[#fff] lg:px-8">Wish  List</button>
                </div>
            </div>
        </div>
    );
};
Allblog.propTypes ={
    data:PropType.object
}
export default Allblog;