import React, { useState, useEffect } from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import MyIcon from '../assets/icon.png';
import TranslateIcon from '@mui/icons-material/Translate';
import { Height } from '@mui/icons-material';

const Header = ({ setIsEnglish, isEnglish }) => {
  const [clickCount, setClickCount] = useState(0);
  const navigate = useNavigate();
  const toggleLanguage = () => {
    const basename = '/jeff-website';
    const currentPath = window.location.pathname.replace(basename, '') || '/';

    const isEn = localStorage.getItem('isEnglish') !== 'true';
    localStorage.setItem('isEnglish', isEn ? 'true' : 'false');

    let newPath;

    if (isEn) {
      // 切到英文
      newPath = currentPath.startsWith('/cn')
        ? currentPath.replace(/^\/cn/, '')
        : currentPath;
    } else {
      // 切到中文
      newPath = currentPath.startsWith('/cn')
        ? currentPath
        : `/cn${currentPath}`;
    }

    navigate(newPath);
  };

  const handleClick = () => {
    // setClickCount((prevCount) => {
    //   const newCount = prevCount + 1;

    //   if (newCount === 3) {
    //
    //     return 0; // 重置计数器（可选）
    //   }

    //   return newCount;
    // });
    let count = clickCount;
    count += 1;
    setClickCount(count);
  };

  useEffect(() => {
    isEnglish === false
      ? localStorage.setItem('isEnglish', 'false')
      : localStorage.setItem('isEnglish', 'true');
  }, [isEnglish]);
  //   console.log(localStorage.getItem("language"));
  useEffect(() => {
    if (clickCount === 3) {
      navigate('/test');
      setClickCount(0);
    }
  }, [clickCount]);
  return (
    <>
      {isEnglish === true ? (
        <div className='header-bar'>
          <img
            src={MyIcon}
            alt='my icon'
            className='header-bar-icon'
            onClick={handleClick}
          />
          <NavLink to='/' className='header-bar-button'>
            HOME
          </NavLink>
          <NavLink to='/about' className='header-bar-button'>
            ABOUT
          </NavLink>
          {/* <Nav.Link href="/blog" className="header-bar-button">
            BLOG
          </Nav.Link> */}
          <NavLink to='/contact' className='header-bar-button'>
            CONTACT
          </NavLink>
          {/* <Nav.Link href="/test" className="header-bar-button">
            TEST
          </Nav.Link> */}
          <div
            onClick={toggleLanguage}
            className='header-bar-translation'
            role='button'
          >
            <TranslateIcon />
          </div>
        </div>
      ) : (
        <div className='header-bar'>
          <img
            src={MyIcon}
            alt='my icon'
            className='header-bar-icon'
            onClick={handleClick}
          />
          <NavLink to='/cn' className='header-bar-button'>
            主页
          </NavLink>
          <NavLink to='/cn/about' className='header-bar-button'>
            关于
          </NavLink>
          {/* <Nav.Link href="/cn/blog" className="header-bar-button">
            博客
          </Nav.Link> */}
          <NavLink to='/cn/contact' className='header-bar-button'>
            沟通
          </NavLink>
          <div
            onClick={toggleLanguage}
            className='header-bar-translation'
            role='button'
          >
            <TranslateIcon />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
