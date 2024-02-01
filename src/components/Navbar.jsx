import logo from "../assets/logo.png"
import { GrLanguage } from "react-icons/gr"
import { useState } from "react"
import { HiXMark } from "react-icons/hi2"
import { RiMenu4Line } from "react-icons/ri"

import { Link } from 'react-scroll'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { link: "overview", path: "home" },
    { link: "Feature", path: "feature" },
    { link: "About", path: "about" },
    { link: "Pricing", path: "pricing" },
  ]
    return (
      <>
        <nav className="bg-white md:px-14 p-4 max-w-screen-2xl border-b border-hidden mx-auto text-blue fixed top-0 right-0 left-0">
          <div className="text-lg container mx-auto flex justify-between items-center font-medium">
            <div className="flex space-x-14 items-center">
              <a
                href="/"
                className="text-2xl font-semibold items-center space-x-3 flex text-blue"
              >
                <img
                  src={logo}
                  alt=""
                  className="w-10 inline-block items-center"
                />{" "}
                <span>XYZ</span>
              </a>

              {/* navitems */}
              <ul className="md:flex space-x-12 hidden">
                {navItems.map(({ link, path }) => (
                  <Link
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    key={link}
                    to={path}
                    className="block hover:text-gray-300 cursor-pointer"
                  >
                    {link}
                  </Link>
                ))}
              </ul>
            </div>

            <div className="space-x-12 hidden md:flex items-center">
              <a
                href="/"
                className="hidden lg:flex items-center hover:text-purple"
              >
                <GrLanguage className="mr-2" />
                <span>Language</span>
              </a>
              <button className="bg-purple py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600">
                Sign Up
              </button>
            </div>

            {/* nav mobile*/}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white text-xl focus:outline-none focus:text-gray-300"
              >
                {isMenuOpen ? (
                  <HiXMark className="w-6 h-6 text-blue" />
                ) : (
                  <RiMenu4Line className="w-6 h-6 text-blue " />
                )}
              </button>
            </div>
          </div>
        </nav>

        <div
          className={`space-y-4 px-4 pt-24 pb-5 bg-purple text-xl ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
          {navItems.map(({ link, path }) => (
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-80}
              key={link}
              to={path}
              className="block text-white hover:text-gray-300"
              onClick={toggleMenu}
            >
              {link}
            </Link>
          ))}
        </div>
      </>
    )
}

export default Navbar
