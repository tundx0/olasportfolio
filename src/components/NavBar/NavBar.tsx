import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface NavItem {
  title: string;
  key: string;
}

interface NavItemsProps {
  isMobile: boolean;
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
}

const NavItems: React.FC<NavItemsProps> = ({ isMobile, active, setActive }) => {
  const navItems: NavItem[] = [
    {
      title: 'Home',
      key: '/',
    },
    {
      title: 'Projects',
      key: '/projects',
    },
    {
      title: 'Contact',
      key: '/contact',
    },
  ];
  return (
    <ul className={`flex flex-row ${isMobile && 'flex-col h-full'}`}>
      {navItems.map((item, i) => (
        <li
          className={`list-none mx-5 dark:hover:text-white hover:text-cyan-300
        ${active === item.title
            ? 'dark:text-white text-white'
            : 'dark:text-gray-300 text-gray-500'
          }
        `}
          onClick={() => setActive(item.title)}
          key={i}
        >
          <Link to={item.key}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
};

const NavBar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState('Home');

  const toggleMenu = (): void => {
    setShowMenu(!showMenu);
  };

  const renderMenuButton = (): JSX.Element => (
    <button
      onClick={toggleMenu}
      className="hidden md:flex"
      type="button"
    >
      Menu
    </button>
  );

  return (
    <div className="justify-between flex p-2 items-center font-mont text-white bg-bgColor">
      <div className="flex justify-between w-100vh">
        <div><h1 className="text-3xl">Olatunde Adegboyebo</h1></div>
        <div>{renderMenuButton()}</div>
      </div>
      <div>
        <NavItems active={active} setActive={setActive} isMobile={false} />
      </div>
    </div>
  );
};

export default NavBar;
