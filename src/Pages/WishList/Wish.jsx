import { Link } from "react-router-dom";
import PropType from 'prop-types'

const Wish = ({wish}) => {
    const {photo,title,shortDescription,category,createAt} = wish;
    return (
        <div className="max-w-lg mx-auto p-4 shadow-md dark:bg-gray-50 dark:text-gray-800">
        <div className="space-y-4">
            <div className="space-y-2">
                <img src={photo} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                <div className="flex items-center text-xs">
                    <span>{createAt}</span>
                </div>
            </div>
            <div className="space-y-2">
                <a rel="noopener noreferrer" href="#" className="block">
                    <h3 className="text-xl font-semibold dark:text-violet-600">{title}</h3>
                </a>
                <p className="text-xl font-bold text-green-500">{category}</p>
                <p className="leading-snug dark:text-gray-600">{shortDescription}</p>
            </div>
            <div className="flex justify-around ">
               <Link><button type="button" className="px-8 py-3 font-semibold rounded dark:bg-gray-800 dark:text-gray-100 hover:bg-gray-100 hover:text-blue-400">Details</button></Link> 
               <button type="button" className="px-8 py-3 font-semibold rounded dark:bg-gray-800 dark:text-gray-100 hover:bg-gray-100 hover:text-blue-400">Delete</button>
            </div>
        </div>
    </div>
    );
};
Wish.propTypes ={
    wish:PropType.object
}
export default Wish;