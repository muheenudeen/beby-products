import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ cartCount }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleProfileClick = () => {
    navigate('/logout');
  };

  return (
    <nav className="bg-[#fde047] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img width="106" height="34" src="https://websitedemos.net/baby-store-04/wp-content/uploads/sites/750/2020/12/baby-store-logo.svg" alt="Logo" />
          <Link to="/" className="text-white text-2xl font-bold"></Link>
          <ul className="hidden md:flex ml-20 space-x-10">
            <li><Link to="/home" className="text-grey hover:text-red-700">Home</Link></li>
            <li><Link to="/shop" className="text-grey">Shop</Link></li>
            <li><Link to="/about" className="text-grey">About Us</Link></li>
            <li><Link to="/contact" className="text-grey">Contact</Link></li>
          </ul>
        </div>
        <div className="flex items-center space-x-6">
          <input type="text" placeholder="Search..." className="hidden md:block p-2 rounded bg-white text-grey" 

/>
          <Link to="/cart" className="text-white relative">
            <svg fill="grey" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
              <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/>
            </svg>
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWQNJtFsdtSeo-E-UPrgxU8qkQGISaSjCjXg&s"
            alt="Profile"
            className="w-10 h-10 rounded-full cursor-pointer"
            onClick={handleProfileClick}
          />
          <ul className='hidden md:flex ml-20 space-x-10'>
            <li><Link to="/login" className="text-white bg-blue-950 p-2 rounded-lg" onClick={()=>localStorage.clear()}>Login</Link></li>
          </ul>
          <button onClick={toggleMenu} className="md:hidden text-black focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <ul className="space-y-4 mt-4">
            <li><Link to="/home" className="block text-grey">Home</Link></li>
            <li><Link to="/shop" className="block text-grey">Shop</Link></li>
            <li><Link to="/about" className="block text-grey">About Us</Link></li>
            <li><Link to="/contact" className="block text-grey">Contact</Link></li>
            <li><Link to="/login" className="block text-grey" onClick={()=>localStorage.clear()}>Login</Link></li>
            <input type="text" placeholder="Search..." className="block p-2 rounded bg-grey text-grey" />
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
