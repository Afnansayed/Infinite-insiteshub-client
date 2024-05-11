import propType from 'prop-types'
import { Link } from 'react-router-dom';

const RecentBlog = ({blog}) => {
     const{_id,photo,title,shortDescription,category} = blog;
    return (
        <article className="flex flex-col dark:bg-gray-50  hover:scale-125 ">
                    <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                        <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={photo} />
                    </a>
                    <div className="flex flex-col flex-1 p-6">
                        <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                    
                        <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{title}</h3>
                        <h3 className="flex-1 text-sm font-semibold leading-snug">{shortDescription}</h3>
                        <p className='font-extrabold text-green-500'>{category}</p>
                        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                         <Link to={`/details/${_id}`}><button type="button" className="px-5 py-2 hover:bg-red-100 font-semibold border rounded dark:border-gray-800 dark:text-gray-800">Details</button></Link>   
                      
                        <button type="button" className="px-5 py-2 hover:bg-red-100 font-semibold border rounded dark:border-gray-800 dark:text-gray-800">Wish List</button>
                        </div>
                    </div>
                </article>
    );
};
RecentBlog.propTypes={
    blog:propType.object
}
export default RecentBlog;