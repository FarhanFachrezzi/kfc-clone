/* eslint-disable react-hooks/exhaustive-deps */
import { FaUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

import { useEffect, useState } from "react";

const Navbar = () => {
  const [bg, setBg] = useState("");
  const handleScroll = () => {
    const scrollPosition = window.scrollY; // => scroll position
    if (scrollPosition == 0) {
      setBg("");
    } else if (scrollPosition > 0) {
      setBg("backdrop-blur-md shadow-2xl");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`w-full fixed top-0 ${bg} duration-150 z-10`}>
      <div
        className={`Navbar w-[75%] mx-auto flex justify-between py-5 items-center`}
      >
        <div className="logo ">
          <h1 className="font-Friz text-white text-5xl ">KFC</h1>
        </div>
        <div className="navigation flex text-white font-normal text-sm gap-6 items-center">
          <p className="hover:scale-95 cursor-pointer">
            <a href="#">ABOUT US</a>
          </p>
          <p className="hover:scale-95 cursor-pointer">
            <a>FIND US</a>
          </p>
          <p className="hover:scale-95 cursor-pointer">
            <a href="">ALL CAMPAIGNS</a>
          </p>
          <div className="w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center cursor-pointer active:scale-95">
            <FaUser color="red" />
          </div>
          <div className="w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center cursor-pointer active:scale-95">
            <IoCartOutline color="red" size={"20px"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
