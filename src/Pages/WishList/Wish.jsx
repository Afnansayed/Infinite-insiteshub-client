import { Link } from "react-router-dom";
import PropType from 'prop-types'
import axios from "axios";
import {motion} from 'framer-motion'
const Wish = ({ wish }) => {
    const { _id, photo, title, shortDescription, category, createAt } = wish;

    //delete from wish list
    const handleDelete = id => {
        //console.log(id);

        axios.delete(`http://localhost:5500/allWishes/${id}`)
            .then(() => {
                // console.log(res.data)
            })
    }
    return (
        <motion.div className="max-w-lg mx-auto p-4 shadow-md dark:bg-gray-50 dark:text-gray-800"
        initial={{opacity:0, x:200}}
        animate={{opacity:1, x:0}}
        transition={{duration: 1}}
        >
            <div className="space-y-4">
                <div className="space-y-2">
                    <motion.img src={photo} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
                       initial={{opacity:0, x:100}}
                       animate={{opacity:1,x:0}}
                       transition={{duration: 1, delay: 0.5}}
                    />
                    <div className="flex items-center text-xs">
                        <motion.span
                        initial={{opacity:0, x:100}}
                        animate={{opacity:1,x:0}}
                        transition={{duration: 1, delay: 1}}
                        >{createAt}</motion.span>
                    </div>
                </div>
                <div className="space-y-2">
                    <a rel="noopener noreferrer" href="#" className="block">
                        <motion.h3 className="text-xl font-semibold dark:text-violet-600"
                        initial={{opacity:0, x:100}}
                        animate={{opacity:1,x:0}}
                        transition={{duration: 1, delay: 1.5}}
                        >{title}</motion.h3>
                    </a>
                    <motion.p className="text-xl font-bold text-green-500"
                    initial={{opacity:0, x:100}}
                    animate={{opacity:1,x:0}}
                    transition={{duration: 1, delay: 2}}
                    >{category}</motion.p>
                    <motion.p className="leading-snug dark:text-gray-600"
                    initial={{opacity:0, x:100}}
                    animate={{opacity:1,x:0}}
                    transition={{duration: 1, delay: 2.5}}
                    >{shortDescription}</motion.p>
                </div>
                <div className="flex justify-around ">
                    <Link><motion.button type="button" className="px-8 py-3 font-semibold rounded dark:bg-gray-800 dark:text-gray-100 hover:bg-gray-100 hover:text-blue-400"
                    initial={{opacity:0, x:100}}
                    animate={{opacity:1,x:0}}
                    transition={{duration: 1, delay: 3}}
                    >Details</motion.button></Link>
                    <motion.button onClick={() => handleDelete(_id)} type="button" className="px-8 py-3 font-semibold rounded dark:bg-gray-800 dark:text-gray-100 hover:bg-gray-100 hover:text-blue-400"
                    initial={{opacity:0, x:100}}
                    animate={{opacity:1,x:0}}
                    transition={{duration: 1, delay: 3.5}}
                    >Delete</motion.button>
                </div>
            </div>
        </motion.div>
    );
};
Wish.propTypes = {
    wish: PropType.object
}
export default Wish;