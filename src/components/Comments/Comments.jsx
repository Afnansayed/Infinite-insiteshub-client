import PropType from 'prop-types'

const Comments = ({opi}) => {
    const{comment,commentWoner,wonerPicture} = opi;
    return (
        <div className='mt-4'>
            <div className="flex items-center space-x-2 bg-blue-400 p-1 lg:p-2">
                    <img src={wonerPicture} alt="" className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-300" />
                    <div className="-space-y-1">
                        <h2 className="text-sm font-semibold leading-none">{commentWoner}</h2>
                    </div>
                </div>
                <div className='bg-gray-200 p-1'>
                    <p className='text-[#110f0f] font-semibold w-1/2 mx-auto'>{comment}</p>
                </div>
        </div>
    );
};
Comments.propTypes={
    opi:PropType.object
}
export default Comments;