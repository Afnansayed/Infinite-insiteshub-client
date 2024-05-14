import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip as ReactTooltip } from 'react-tooltip'

const NavBar = () => {
    const{user,logOut} = useContext(AuthContext);
           const navLink = <>
                   {/* no1 */}
                    <li><NavLink to='/' className={({ isActive }) => isActive ? 'text-red-400 font-bold border-red-700 border-2 p-2' : 'font-bold border-1'}>Home</NavLink></li>
                    {/* no2 */}
                    <li><NavLink to='/addBlog' className={({ isActive }) => isActive ? 'text-red-400 font-bold border-red-700 border-2 p-2' : 'font-bold border-1'}>Add Blog</NavLink></li>
                    {/* no3 */}
                    <li><NavLink to='/allBlog' className={({ isActive }) => isActive ? 'text-red-400 font-bold border-red-700 border-2 p-2' : 'font-bold border-1'}>All Blogs</NavLink></li>
                    {/* no4 */}
                    <li><NavLink to='/wishList' className={({ isActive }) => isActive ? 'text-red-400 font-bold border-red-700 border-2 p-2' : 'font-bold border-1'}>Wish List</NavLink></li>
                    {/* no5 */}
                    <li><NavLink to='/fetured' className={({ isActive }) => isActive ? 'text-red-400 font-bold border-red-700 border-2 p-2' : 'font-bold border-1'}>Featured Blogs</NavLink></li>
                {/* no6 */}
                    {
                        !user && 
                        <li><NavLink to='/login' className={({ isActive }) => isActive ? 'text-red-400 font-bold border-red-700 border-2 p-2' : 'font-bold border-1'}>LogIn</NavLink></li>
                    }
                   {/* no7 */}
                   {
                    !user &&  <li><NavLink to='/register' className={({ isActive }) => isActive ? 'text-red-400 font-bold border-red-700 border-2 p-2' : 'font-bold border-1'}>Register</NavLink></li>
                   }
                    
           </>

const handleLogOut = () => {
    console.log('logOut')
    logOut()
        .then(() => {
            console.log('signOut SuccessFul');
        })
        .catch(error => {
            console.error(error);
        })
}           
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navLink
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl uppercase">Infinite<span className="lg:text-4xl">InsightsHub</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end gap-2">
            {user &&
                    <div id="first" className="avatar tooltip tooltip-bottom"
                    // data-tip={user?.displayName
                    // }
                    >
                          <ReactTooltip
                          anchorId='first'
                          place="top"
                          content={user?.displayName}
                          >
                          </ReactTooltip>

                        <div className="w-12 rounded-full">
                            <img src={user?.photoURL} />
                        </div>
                    </div>
                }

                {
                    user ? <a onClick={handleLogOut} className="btn bg-blue-700 hover:bg-sky-500 text-[#ffffff]" >Log Out</a> : <Link to='/logIn'><p className="btn bg-blue-700 hover:bg-sky-500 text-[#ffffff]">LogIn</p></Link>
                }

            </div>
        </div>
    );
};

export default NavBar;