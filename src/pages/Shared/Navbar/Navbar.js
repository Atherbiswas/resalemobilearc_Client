import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Navbar = () => {
  const {user, logoutUser} = useContext(AuthContext);
  const navigate = useNavigate();

  const handelLogout = () => {
    logoutUser()
    .then( () => {
      toast.success('Logout success')
      navigate('/')

    })
    .catch(err => console.error(err))
  }
    const navItems = <React.Fragment>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            {
              user?.uid? <li><button onClick={handelLogout}>Logout</button></li>
              :
              <li><Link to="/login">Login</Link></li>
            }
            
    </React.Fragment>
    return (
        <div className="navbar bg-blue-800 border-1 flex justify-between sticky top-0 z-50 font-bold lg:text-white text-inherit">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"/>
              </svg>
            </label>
            <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {navItems}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-2xl"><span className="font-bold text-white">Resalemobilearc</span></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            {navItems}
          </ul>
        </div>
      </div>
    );
};

export default Navbar;