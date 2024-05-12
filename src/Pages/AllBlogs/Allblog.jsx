import PropType from 'prop-types'
import { Link } from 'react-router-dom';

const Allblog = ({ data }) => {
    const { _id, photo, title, shortDescription,category} = data;
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure className='lg:w-[30%] '><img  src={photo} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{shortDescription}</p>
                <p className='text-3xl font-semibold text-green-600'>{category}</p>
                <div className="card-actions justify-end">
                    <Link to={`/details/${_id}`}><button className="btn btn-warning text-[#fff]">View Details</button></Link>
                    <Link ><button className="btn btn-warning text-[#fff] lg:px-8">Wish  List</button></Link>
                </div>
            </div>
        </div>
    );
};
Allblog.propTypes ={
    data:PropType.object
}
export default Allblog;