import Swal from "sweetalert2";
import 'animate.css';

const NewsLetter = () => {

    const newsLetter = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
         if(email){
            Swal.fire({
                title: "You're now part of our community and will receive all the latest news and updates directly to your inbox",
                showClass: {
                  popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                },
                hideClass: {
                  popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                }
              });
         }
        
    }
    return (
        <section className="p-6 dark:bg-sky-100 dark:text-gray-800 rounded-lg">
            <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
                <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-50">
                    <h1 className=" text-2xl lg:text-5xl font-extrabold dark:text-gray-900">Stay Updated  with Our Newsletter!</h1>
                    <p className="my-8">
                        <span className="font-medium dark:text-gray-900">Stay in the loop!</span> Subscribe to our newsletter for the latest updates, exclusive offers, and more. Simply enter your email below and hit subscribe. Thank you for joining our community!
                    </p>
                    <form onSubmit={newsLetter} noValidate="" action="" className="self-stretch space-y-3">
                        <div>
                            <label htmlFor="lastname" className="text-sm sr-only">Email address</label>
                            <input type="email"
                             name="email"
                            required
                             placeholder="Email address" className="w-full rounded-md focus:ring focus:dark:ring-violet-600 dark:border-gray-300 p-2 shadow-sm" />
                        </div>
                        <button type="submit" className="w-full py-2 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Join the waitlist</button>
                    </form>
                </div>
                <img  src="https://i.ibb.co/XXZSj6j/portrait-smiling-bearded-man-sitting-1-1.jpg" alt="" className="object-cover w-1/2  mx-auto  rounded-md xl:col-span-3 dark:bg-gray-500" />
            </div>
        </section>
    );
};

export default NewsLetter;