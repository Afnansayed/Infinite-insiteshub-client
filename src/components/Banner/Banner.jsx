import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';
import wave from '../../assets/newWave.svg'
const Banner = () => {
    return (
        <motion.section 
        style={{backgroundImage: `url("${wave}")` }} 
        className="dark:bg-gray-100 dark:text-gray-800 bg-no-repeat bg-cover"
        //framer motion properties
        initial= {{opacity: 0 , y: -100}}
        animate={{opacity: 1, y:0}}
        transition={{duration:1.2}}
        >
            <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-6xl">
                <motion.h1 
                className="text-2xl lg:text-5xl font-bold leading-none sm:text-5xl w-full"
                initial={{opacity:0, y:-100}}
                animate={{opacity:1,y:0}}
                transition={{duration: 1, delay: 0.5}}
                >Embark on a Journey of
                    <span className="dark:text-violet-600"> Enlightening Exploration</span>Unveiling the Depths of Knowledge
                </motion.h1>
                <motion.p
                 className="px-8 mt-8 mb-12 text-lg font-semibold"
                 initial={{opacity:0, y:-100}}
                 animate={{opacity:1,y:0}}
                 transition={{duration: 1, delay: 1}}
                 >Step into a realm where the pursuit of understanding knows no bounds. Our blog is a sanctuary for the inquisitive mind, offering a wealth of articles meticulously curated to captivate, educate, and inspire. Embrace the joy of discovery as you traverse through a tapestry of insights, uncovering the hidden gems of wisdom that await</motion.p>
                <div className="flex flex-wrap justify-center">
                    <Link to='/allblog'><motion.button className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50 hover:scale-110"
                        initial={{opacity:0, y:-100}}
                        animate={{opacity:1,y:0}}
                        transition={{duration: 1, delay: 1.5}}
                    >Get started</motion.button></Link>
                    <motion.button
                     className="px-8 py-3 m-2 text-lg border rounded dark:text-gray-900 dark:border-gray-300"
                     initial={{opacity:0, y:-100}}
                     animate={{opacity:1,y:0}}
                     transition={{duration: 1, delay: 2}}
                     >Learn more</motion.button>
                </div>
            </div>
        </motion.section>
    );
};

export default Banner;