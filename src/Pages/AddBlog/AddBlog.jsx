

const AddBlog = () => {

    const handleSubmit = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const photo = form.get('photo');
        const title = form.get('title');
        const category = form.get('category');
        const shortDescription = form.get('shortDescription');
        const longDescription = form.get('longDescription');
        console.log(title,photo,category,shortDescription,longDescription)
    }
    return (
        <div className="max-w-md mx-auto my-8 p-8 bg-sky-100 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Add Blog Post</h2>
            <form  onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-700">Title:</label>
                    <input type="text" id="title" name="title"  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="imageUrl" className="block text-gray-700">Image URL:</label>
                    <input type="text" id="imageUrl" name="photo"  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="category" className="block text-gray-700">Category:</label>
                    <select id="category" name="category"  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                        <option value="Technology">Technology</option>
                        <option value="Science">Science</option>
                        <option value="Health">Health</option>
                        <option value="Travel">Travel</option>
                        {/* Add more options as needed */}
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="shortDescription" className="block text-gray-700">Short Description:</label>
                    <textarea  id="shortDescription" name="shortDescription" rows="2" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required></textarea>
                </div>
                <div className="mb-4">
                    <label htmlFor="longDescription" className="block text-gray-700">Long Description:</label>
                    <textarea id="longDescription" name="longDescription" rows="4" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required></textarea>
                </div>
                <button type="submit" className="w-full bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">Submit</button>
            </form>
        </div>
    );
};

export default AddBlog;