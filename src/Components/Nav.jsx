// import { Link } from 'react-router-dom';
import { headerLogo } from '../assets/images';
import { navLinks } from '../constants';
import { hamburger } from '../assets/icons';

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container md:px-20'>
        <a href="/">
          <img src={headerLogo} alt="Nike Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-end items-center gap-10 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className='font-montserrat hover:text-slate-950 leading-normal text-lg text-slate-gray'>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} width={25} height={25} alt="" />
        </div>
      </nav>
    </header>
  );
}

export default Nav;
