import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Top bar */}
      <div className='bg-red-500'>
        <div className='text-white container mx-auto flex justify-between p-2'>
          <h1>karan@gmail.com</h1>
          <h1>Instagram</h1>
        </div>
      </div>

      {/* Logo and Menu Button */}
      <div className="container w-11/12 mx-auto py-3 flex justify-between items-center">
        <img
          src="./images/logo-name.jpg"
          className="w-[200px] sm:w-auto h-[40px] sm:h-auto"
          alt="logo"
        />
        <div className="sm:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X color="black" /> : <Menu color="black" />}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <div className={`bg-blue-900 ${open ? 'block' : 'hidden'} sm:block`}>
        <nav className="container mx-auto">
          <ul className="flex flex-col sm:flex-row items-center sm:justify-start p-3 gap-5 sm:gap-10 text-white font-extrabold">
            <Link to="/" className="hover:text-neutral-950 transition duration-200"><li>Home</li></Link>
            <Link to="/About" className="hover:text-neutral-950 transition duration-200"><li>About</li></Link>
            <Link to="/Admission" className="hover:text-neutral-950 transition duration-200"><li>Admission</li></Link>
            <Link to="/Acadmic" className="hover:text-neutral-950 transition duration-200"><li>Academics</li></Link>
            <Link to="/Achivement" className="hover:text-neutral-950 transition duration-200"><li>Achievement</li></Link>
            <Link to="/Gallary" className="hover:text-neutral-950 transition duration-200"><li>Gallery</li></Link>
            <Link to="/Contact" className="hover:text-neutral-950 transition duration-200"><li>Contact Us</li></Link>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
