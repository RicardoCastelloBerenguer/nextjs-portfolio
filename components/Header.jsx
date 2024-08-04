// components/Header.jsx
import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-center items-center pt-8 pb-6 w-full xl:w-[1120px] mx-auto">
      <nav>
        <ul className="flex items-center justify-center gap-x-5 opacity-100 font-semibold text-sm sm:text-base">
          <li className="text-yellow-300">
            <Link href="#experience">Experience</Link>
          </li>
          <li className="hover:text-yellow-300">
            <Link href="#projects">Projects</Link>
          </li>
          <li className="hover:text-yellow-300">
            <Link href="#skills">Skills</Link>
          </li>
          <li className="hover:text-yellow-300">
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
