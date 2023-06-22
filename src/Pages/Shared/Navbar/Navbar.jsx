import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';
import { Link } from 'react-router-dom';
import logo from '../../../../public/logo.png'
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import './Navbar.css'
import PrivateRoute from '../../../Routs/PrivateRouts';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }



    const navItems = <>
        <li><Link to="/">Home</Link> </li>
        <li><Link to="/alltoys">All Toys</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        {
            user?.email ? <>
            <PrivateRoute></PrivateRoute>
                <li><Link to="/addtoy">Add a Toy</Link></li>
                <li> <button onClick={handleLogOut}>Log Out</button> </li>
            </> :
                <li><Link to="/login">Log In</Link></li>
        }

    </>
    return (
        <div className="navbar h-28 mb-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow text-black bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl">
                    <img className='w-32' src={logo}></img>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="navbar-end">
                <Tooltip title={user?.displayName} position="top">
                    {
                        user?.email && <img className='rounded-[50%] w-16 h-16' src={user.photoURL}></img>
                    }
                    </Tooltip>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
