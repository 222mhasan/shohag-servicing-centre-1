import { Link, NavLink } from "react-router-dom";

const Header = () => {

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/appliedJObs'>Applied Jobs</NavLink></li>
        <li><NavLink to='/blog'>Blog</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
    </>

    return (
        <div className="w-full bg-black px-4">
            <div className="navbar text-white py-3">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52 text-xl">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <Link className="relative md:justify-start" to='/'>
                        <a className="text-white border-none text-xl">Shohag Servicing Center </a>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex relative ">
                    <ul className="menu menu-horizontal px-1 gap-5 text-xl">
                        {
                            links
                        }
                    </ul>
                </div>
                {/* <div className="navbar-end">
                    <a className="btn">Button</a>
                </div> */}
            </div>
        </div>
    );
};

export default Header;