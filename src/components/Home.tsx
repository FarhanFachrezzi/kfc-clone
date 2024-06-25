import banner from "../datas/banner.json";
import { useState, useEffect } from "react";
import Slide from "./Slide";
import { motion } from "framer-motion";

const variants = {
  initial: {
    opacity: 0,
    x: -500,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
    },
  },
};
const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(currentIndex + 1);
      if (currentIndex == banner.length - 1) {
        setCurrentIndex(0);
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  // handle slide

  const handleSlide = (i: number) => {
    setCurrentIndex(i);
  };

  return (
    <div className="Home h-[500px] w-full bg-red-600 flex justify-around items-center relative">
      <motion.div
        className="flex-1 flex justify-center text-white "
        style={{ fontFamily: "arial" }}
        initial="initial"
        animate="animate"
      >
        <motion.div className="flex flex-col w-[70%]" variants={variants}>
          <motion.h1
            className="text-6xl font-arial font-semibold mt-11 mb-6"
            variants={variants}
          >
            {banner[currentIndex]?.description}
          </motion.h1>
          <p className="text-sm font-light text-gray-50 w-[400px] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            possimus minima, animi a consectetur fugit voluptas sequi voluptatum
            deleniti eos!
          </p>
          <button className="py-2 w-[200px] text-white mt-4 border-white border-2 rounded-md hover:bg-white hover:text-red-700 transition duration-300 hover:border-transparent">
            <p className="text-[18px] ">Order</p>
          </button>
        </motion.div>
      </motion.div>
      <motion.div className={`w-[50%] flex-1 flex items-center pl-16 `}>
        <motion.img
          src={banner[currentIndex]?.src}
          alt=""
          width={410}
          height={410}
          className={`mt-20 duration-200`}
        />
      </motion.div>
      <div className="flex gap-2 absolute bottom-8 left-16">
        {banner.map((b, i) => {
          return (
            <Slide
              key={b.src}
              i={i}
              currentIndex={currentIndex}
              handleSlide={handleSlide}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
