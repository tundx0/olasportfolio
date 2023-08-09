/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TiThMenuOutline } from 'react-icons/ti';
import { IoCloseCircleOutline } from 'react-icons/io5';

interface NavItem {
  title: string;
  key: string;
}

interface NavItemsProps {
  isMobile: boolean;
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
}

const Logo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 133 129" fill="none">
    <path d="M132 1H1V128.13H132V1Z" fill="#121212" />
    <g opacity="0.1">
      <path opacity="0.1" d="M131.99 125.12V128.12H128.898" stroke="white" strokeMiterlimit="10" />
      <path opacity="0.1" d="M122.963 128.12H7.05901" stroke="white" strokeMiterlimit="10" strokeDasharray="5.77 5.77" />
      <path opacity="0.1" d="M4.09132 128.12H1V125.12" stroke="white" strokeMiterlimit="10" />
      <path opacity="0.1" d="M1 119.35V6.88" stroke="white" strokeMiterlimit="10" strokeDasharray="5.77 5.77" />
      <path opacity="0.1" d="M1 4V1H4.09132" stroke="white" strokeMiterlimit="10" />
      <path opacity="0.1" d="M10.037 1H125.931" stroke="white" strokeMiterlimit="10" strokeDasharray="5.77 5.77" />
      <path opacity="0.1" d="M128.898 1H131.99V4" stroke="white" strokeMiterlimit="10" />
      <path opacity="0.1" d="M131.99 9.76001V122.24" stroke="white" strokeMiterlimit="10" strokeDasharray="5.77 5.77" />
    </g>
    <path d="M50.4612 57.2624L37.5892 50L24.7001 57.2624V71.7541L37.5892 79L50.4612 71.7541V57.2624ZM47.6895 70.1955L37.5892 75.8662L27.4888 70.1955V58.821L37.5892 53.1338L47.6895 58.821V70.1955Z" fill="white" />
    <path d="M78.2831 57.2459L65.9097 50L53.5525 57.2459V71.7376L65.9097 79L78.2831 71.7376V57.2459Z" fill="white" />
    <path d="M94.2465 50L81.3744 57.2624V71.7541L94.2465 79L107.135 71.7541V57.2624L94.2465 50ZM104.347 70.1955L94.2465 75.8662L84.1461 70.1955V58.821L94.2465 53.1338L104.347 58.821V70.1955Z" fill="white" />
    <path d="M39.1263 81.2624V95.7542L52.0323 103L64.8874 95.7542V81.2624L52.0323 74L39.1263 81.2624ZM62.0684 94.2453L52.0323 99.8662L41.8434 94.2453V82.821L52.0323 77.1338L62.1024 82.821L62.0684 94.2453Z" fill="white" />
    <path d="M66.9482 81.2624V95.7542L79.8202 103L92.7093 95.7542V81.2624L79.8202 74L66.9482 81.2624ZM89.9206 94.2453L79.8202 99.916L69.7369 94.2453V82.821L79.8202 77.1338L89.9206 82.821V94.2453Z" fill="white" />
    <path d="M64.8874 47.7541V33.2127L52.0494 26L39.1263 33.2127V47.7044L52.0494 55L64.8874 47.7541ZM41.847 34.8708L52.0494 29.1338L62.0988 34.8708V46.2453L52.0494 51.8662L41.847 46.1955V34.8708Z" fill="white" />
    <path d="M92.7093 47.8039V33.2624L79.8202 26L66.9482 33.2624V47.7541L79.8202 55L92.7093 47.8039ZM69.7369 34.9205L79.8202 29.2333L89.9206 34.9205V46.295L79.8202 51.9657L69.7369 46.295V34.9205Z" fill="white" />
  </svg>
);

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState('Home');

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const renderMenuButton = (): JSX.Element => (isMenuOpen ? (
    <button
      onClick={toggleMenu}
      className="hidden md:flex"
      type="button"
    >
      <IoCloseCircleOutline className="h-8 w-8 text-white" />
    </button>
  ) : (
    <button
      onClick={toggleMenu}
      className="hidden md:flex"
      type="button"
    >
      <TiThMenuOutline className="h-8 w-8" />
    </button>
  )
  );

  return (
    <div>
      <div className="lg:justify-between flex p-2 items-center font-mont text-white bg-bgColor">
        <div className="flex justify-between w-full">
          <div className="p-1"><Logo /></div>
          <div className="p-1">{renderMenuButton()}</div>
        </div>
        <div className="md:hidden flex">
          <NavItems active={active} setActive={setActive} isMobile={false} />
        </div>
      </div>
      {isMenuOpen ? (
        <div className="flex z-10 items-center justify-center min-h-screen text-center bg-gray-900">
          <div className="flex">
            <NavItems active={active} setActive={setActive} isMobile />
          </div>
        </div>
      ) : ''}
    </div>
  );
};

export default NavBar;
