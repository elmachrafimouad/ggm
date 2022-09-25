import React, { useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import NavLink from './NavLink';
import { motion } from "framer-motion"
import { Link, useNavigate } from 'react-router-dom';

function Navbar({children}) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navigate = useNavigate();

  const returnToHomePage = () => {
    // setInterval(() => {
      navigate('/')
    // } , 5000)
    window.location.reload();
  }

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%"  },
  }

  const linksNavbar = [
    {
      title: "Home",
      link: "",
    },
    {
      title: "About",
      link: "features",
    },
    {
      title: "Our Team",
      link: "team",
    },
    {
      title: "How To Buy",
      link: "download",
    },
    {
      title: "whitepaper",
      link: "blog",
    },
    {
      title: "audit",
      link: "newsletter",
    },
    {
      title: "contract",
      link: "",
    },
  ];

  return (
    <nav className='sticky right-0 left-0 top-0 bottom-0 shadow-primaryShadow  w-full bg-darkBlack z-20 min-h-min h-20 flex justify-center items-center'>
      <div className='flex justify-between items-center w-full text-center px-10'>
        {/* --logo-- */}
        <div className='flex-1 mt-1 items-center flex' >
          {/* --this will help you if you want add logo image-- */}
          {/* <img className='w-15 h-20 ' src={Logo} alt="logo" /> */}
          <h3 className='text-2xl font-HankRndBold text-white'>
            <button onClick={returnToHomePage}>
              ShibaPlayer
            </button>
          </h3>
        </div>
        {/* --items -- */}
        <ul className='items-center justify-center fle hidden md:flex md:justify-end'>
          {linksNavbar.map((item, index) => (
            <NavLink title={item} key={index} classProps="mr-5" />
          ))}
          {/* --btns-- */}
          <button className='button-style font-bold'>
            <Link to='/game'>
              game
            </Link>
          </button>
        </ul>
        {/*--toggle menu --*/}
        <div className="flex relative">
          {toggleMenu ? (
            <AiOutlineClose fontSize={28} className=" cursor-pointer md:hidden " onClick={() => setToggleMenu(false)} />
          ) : (<HiMenuAlt4 fontSize={28} className=" cursor-pointer md:hidden text-white" onClick={() => setToggleMenu(true)} />)
          }
            <motion.ul className='list-items-phone'
              initial={"closed"}
              animate={toggleMenu ? "open" : "closed"}
              variants={variants}
              transition={{ duration: 0.5 }}
            >
              <AiOutlineClose fontSize={28} className="text-white bg-primary rounded-md cursor-pointer md:hidden z-20 mb-20" onClick={() => setToggleMenu(false)} />
              {linksNavbar.map((item , index) => (
                <NavLink title={item} key={index} classProps="text-white text-center w-full mb-5" />
              )
              )}
              {/* ---navbar phone btns- */}
              <button className='button-style-mob mb-4  font-bold'>
                <Link to='/game'>
                  game
                </Link>
              </button>
            </motion.ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;

